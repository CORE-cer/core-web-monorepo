import type { DataItem, FormattedHit, FormattedMarkedComplexEvent, QueryIdToQueryInfoMap } from '@/types';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Box, Button, ButtonGroup, Divider, Fab, Fade, FormControlLabel, Slider, Switch, Tooltip, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { Virtuoso, type VirtuosoHandle } from 'react-virtuoso';

import HitDetails from './HitDetails';
import HitItem from './HitItem';

type EventIntervalSelectorProps = {
  value: number;
  setValue: (value: number) => void;
};

type HitListProps = {
  data: DataItem[];
  queryIdToQueryInfoMap: QueryIdToQueryInfoMap;
  eventInterval: number;
  setEventInterval: (value: number) => void;
  onClearData: () => void;
};

const EventIntervalSelector: React.FC<EventIntervalSelectorProps> = ({ value, setValue }) => {
  const valueLabelFormat = (value: number) => {
    if (value === 0) return '0ms (Real-time)';
    if (value > 1000) return `${(value / 1000).toString()}s`;
    return `${value.toString()}ms`;
  };

  const [visualValue, setVisualValue] = useState<number>(value);

  const handleChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setVisualValue(value);
    }
  };

  const handleChangeCommitted = (_: Event | React.SyntheticEvent, value: number | number[]) => {
    if (typeof value === 'number') {
      setValue(value);
    }
  };

  return (
    <Box
      sx={{
        width: 'inherit',
        px: 2,
        py: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography>{'Event throttle'}</Typography>
      <Slider
        sx={{ maxWidth: 400 }}
        value={visualValue}
        onChangeCommitted={handleChangeCommitted}
        onChange={handleChange}
        step={500}
        marks
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        min={0}
        max={5000}
      />
    </Box>
  );
};

const HitList: React.FC<HitListProps> = ({ data, queryIdToQueryInfoMap, eventInterval, setEventInterval, onClearData }) => {
  const [atBottom, setAtBottom] = useState<boolean>(false);
  const [selectedHit, setSelectedHit] = useState<FormattedHit | null>(null);
  const [selectedComplexEvent, setSelectedComplexEvent] = useState<FormattedMarkedComplexEvent | null>(null);
  const [defaultExpanded, setDefaultExpanded] = useState<boolean>(false);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const existingItems = useRef<Set<number>>(new Set());

  const virtuoso = useRef<VirtuosoHandle>(null);

  const handleScrollToBottom = () => {
    if (!virtuoso.current) return;
    virtuoso.current.scrollToIndex({
      index: 'LAST',
      align: 'end',
      behavior: 'auto',
    });
  };

  const handleHitClick = (hit: FormattedHit) => {
    setSelectedHit(hit);
    setSelectedComplexEvent(null);
  };

  const handleComplexEventClick = (hit: FormattedHit, complexEvent: FormattedMarkedComplexEvent) => {
    setSelectedHit(hit);
    setSelectedComplexEvent(complexEvent);
  };

  const handleExpandItem = (index: number, expanded: boolean) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (expanded) {
        next.add(index);
      } else {
        next.delete(index);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setExpandedItems(new Set(data.map((_, i) => i)));
  };

  const handleCollapseAll = () => {
    setExpandedItems(new Set());
  };

  const handleClear = () => {
    setSelectedHit(null);
    setSelectedComplexEvent(null);
    setExpandedItems(new Set());
    onClearData();
  };

  const renderHitItem = (index: number, item: DataItem) => {
    const expanded = (!existingItems.current.has(index) && defaultExpanded) || expandedItems.has(index);
    if (expanded) {
      expandedItems.add(index);
    }
    existingItems.current.add(index);
    return (
      <HitItem
        qid={item.qid}
        queryName={queryIdToQueryInfoMap.get(item.qid)?.query_name ?? 'Unknown Query'}
        data={item.data}
        onHitClick={handleHitClick}
        onComplexEventClick={handleComplexEventClick}
        selected={selectedHit === item.data}
        selectedComplexEventIndex={selectedHit === item.data && selectedComplexEvent ? item.data.complexEvents.indexOf(selectedComplexEvent) : undefined}
        expanded={expanded}
        onExpandedChange={(expanded: boolean) => { handleExpandItem(index, expanded); }}
      />
    );
  };

  return (
    <Box sx={{ overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={defaultExpanded}
              onChange={(e) => {
                setDefaultExpanded(e.target.checked);
              }}
            />
          }
          label="Default Expanded"
        />
        <ButtonGroup size="small">
          <Button startIcon={<UnfoldMoreIcon />} onClick={handleExpandAll}>
            Expand All
          </Button>
          <Button startIcon={<UnfoldLessIcon />} onClick={handleCollapseAll}>
            Collapse All
          </Button>
          <Button startIcon={<ClearAllIcon />} onClick={handleClear} color="error">
            Clear All
          </Button>
        </ButtonGroup>
        <Box sx={{ flex: 1 }}>
          <EventIntervalSelector value={eventInterval} setValue={setEventInterval} />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Box sx={{ flex: 1, overflow: 'hidden', borderRight: 1, borderColor: 'divider' }}>
          <Virtuoso
            style={{ height: '100%' }}
            overscan={50}
            ref={virtuoso}
            atBottomStateChange={(isAtBottom: boolean) => {
              setAtBottom(isAtBottom);
            }}
            followOutput="auto"
            atBottomThreshold={100}
            data={data}
            itemContent={renderHitItem}
          />
        </Box>
        <Box sx={{ flex: 1, overflow: 'hidden' }}>
          {selectedHit ? (
            <HitDetails hit={selectedHit} selectedComplexEvent={selectedComplexEvent || undefined} />
          ) : (
            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Select a hit to view details
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      {
        <Fade in={!atBottom}>
          <Tooltip title="Go to bottom" arrow>
            <Fab
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleScrollToBottom();
              }}
              variant="circular"
              color="default"
              sx={{
                opacity: '0.5 !important',
                position: 'absolute',
                bottom: 16,
                right: 16,
                '&:hover': {
                  opacity: '1 !important',
                },
              }}
            >
              <KeyboardArrowDownIcon />
            </Fab>
          </Tooltip>
        </Fade>
      }
    </Box>
  );
};

export default HitList;
