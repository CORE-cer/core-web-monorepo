import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Divider, Fab, Fade, Paper, Slider, Tooltip, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { Virtuoso, type VirtuosoHandle } from 'react-virtuoso';

import { MAX_COLORS } from '../colors';

type DataItem = {
  qid: string;
  data: unknown;
};

type ScrollToLatestProps = {
  trigger: boolean;
  scrollToBottom: () => void;
};

type EventIntervalSelectorProps = {
  value: number;
  setValue: (value: number) => void;
};

type HitListProps = {
  data: DataItem[];
  eventInterval: number;
  setEventInterval: (value: number) => void;
};

const renderItem = (_index: number, data: DataItem) => {
  return (
    <Box sx={{ px: 1, py: 0.5 }}>
      <Paper
        className={`color-${(Number(data.qid) % MAX_COLORS).toString()}`}
        sx={{
          p: 0.5,
          fontFamily: 'Consolas, "Courier New", monospace',
          fontSize: 12,
          wordBreak: 'break-all',
        }}
      >
        {JSON.stringify(data.data)}
      </Paper>
    </Box>
  );
};

const ScrollToLatest: React.FC<ScrollToLatestProps> = ({ trigger, scrollToBottom }) => {
  // https://mui.com/material-ui/react-app-bar/
  return (
    <Fade in={trigger}>
      <Tooltip title="Go to bottom" arrow>
        <Fab
          size="small"
          onClick={scrollToBottom}
          variant="circular"
          color="default"
          sx={{
            opacity: '0.5 !important',
            position: 'fixed',
            bottom: 32,
            right: 32,
            '&:hover': {
              opacity: '1 !important',
            },
          }}
        >
          <KeyboardArrowDownIcon />
        </Fab>
      </Tooltip>
    </Fade>
  );
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

const HitList: React.FC<HitListProps> = ({ data, eventInterval, setEventInterval }) => {
  const [atBottom, setAtBottom] = useState<boolean>(false);

  const virtuoso = useRef<VirtuosoHandle>(null);

  const handleScrollToBottom = () => {
    if (!virtuoso.current) return;
    virtuoso.current.scrollToIndex({
      index: data.length - 1,
      align: 'end',
      behavior: 'auto',
    });
  };

  return (
    <Box sx={{ overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <ScrollToLatest trigger={!atBottom} scrollToBottom={handleScrollToBottom} />
      <EventIntervalSelector value={eventInterval} setValue={setEventInterval} />
      <Divider />
      <Virtuoso
        overscan={50}
        ref={virtuoso}
        alignToBottom
        atBottomStateChange={(isAtBottom: boolean) => {
          setAtBottom(isAtBottom);
        }}
        followOutput="auto" // Auto-scroll if the window is at the bottom
        atBottomThreshold={300}
        data={data}
        itemContent={renderItem}
      />
    </Box>
  );
};

export default HitList;
