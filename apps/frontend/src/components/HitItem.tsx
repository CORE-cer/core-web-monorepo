import { COLORS, MAX_COLORS } from '@/colors';
import type { FormattedHit, FormattedMarkedComplexEvent, QueryId } from '@/types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardContent, Chip, Collapse, IconButton, Paper, Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';

type HitItemProps = {
  qid: QueryId;
  queryName: string;
  data: FormattedHit;
  onHitClick: (hit: FormattedHit) => void;
  onComplexEventClick: (hit: FormattedHit, complexEvent: FormattedMarkedComplexEvent) => void;
  selected?: boolean;
  selectedComplexEventIndex?: number;
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
};

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const HitItem = memo(
  function HitItem({ qid, queryName, data, onHitClick, onComplexEventClick, selected, selectedComplexEventIndex, expanded, onExpandedChange }: HitItemProps) {
    const colorIndex = Number(qid) % MAX_COLORS;
    const color = COLORS[colorIndex];

    const handleExpandClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onExpandedChange(!expanded);
    };

    const formatTime = (date: Date) => {
      return date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3,
      });
    };

    const firstEvent = data.complexEvents[0];
    if (!firstEvent) {
      return null;
    }

    return (
      <Card
        sx={{
          my: 0,
          cursor: 'pointer',
          border: selected ? 2 : 0,
          borderColor: 'primary.main',
          position: 'relative',
        }}
        onClick={() => { onHitClick(data); }}
      >
        <Box
          sx={{
            height: 4,
            width: '100%',
            backgroundColor: color,
          }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Hit Time: {formatTime(data.end)} - Query: {queryName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {data.complexEvents.length} complex events
              </Typography>
            </Box>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>

          {/* Show events only when expanded */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {/* First complex event */}
            <Box sx={{ mt: 1 }}>
              <Paper
                onClick={(e) => {
                  e.stopPropagation();
                  onComplexEventClick(data, firstEvent);
                }}
                sx={{
                  p: 1,
                  my: 0.5,
                  backgroundColor: selectedComplexEventIndex === 0 ? 'action.selected' : 'background.paper',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {formatTime(firstEvent.start)} - {formatTime(firstEvent.end)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {Object.values(firstEvent.complexEvents).reduce((sum, events) => sum + events.length, 0)} events
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {Object.keys(firstEvent.complexEvents).map((variable) => (
                    <Chip key={variable} label={variable} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Paper>
            </Box>

            {/* Remaining complex events */}
            <Box sx={{ mt: 1 }}>
              {data.complexEvents.slice(1).map((event, index) => (
                <Paper
                  key={index + 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    onComplexEventClick(data, event);
                  }}
                  sx={{
                    p: 1,
                    my: 0.5,
                    backgroundColor: selectedComplexEventIndex === index + 1 ? 'action.selected' : 'background.paper',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {formatTime(event.start)} - {formatTime(event.end)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {Object.values(event.complexEvents).reduce((sum, events) => sum + events.length, 0)} events
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {Object.keys(event.complexEvents).map((variable) => (
                      <Chip key={variable} label={variable} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Paper>
              ))}
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    );
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default HitItem;
