import Charts from '@/components/Charts';
import ChartsFreeform from '@/components/ChartsFreeform';
import HitList from '@/components/HitList';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import QuerySelection from '@/components/watch/QuerySelection';
import { useWatchPage } from '@/hooks/useWatchPage';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GridViewIcon from '@mui/icons-material/GridView';
import { Box, Divider, IconButton, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

const SIDE_PANEL_WIDTH_COLLAPSED = 250;
const SIDE_PANEL_WIDTH_EXPANDED = 400;

export const Route = createFileRoute('/watch')({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    queries,
    streamsInfo,
    selectedQueryIds,
    setSelectedQueryIds,
    data,
    queryIdToQueryStat,
    viewMode,
    eventInterval,
    setEventInterval,
    handleViewModeChange,
    handleInactivateQuery,
    // Timeline-specific properties
    timelineConfig,
    updateTimeHorizon,
    getAllActiveQueryEvents,
    clearData,
  } = useWatchPage();
  console.log('queries', queries);
  console.log('streamsInfo', streamsInfo);

  const [chartLayoutMode, setChartLayoutMode] = useState<'list' | 'freeform'>('list');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleChartLayoutChange = () => {
    setChartLayoutMode((prev) => (prev === 'list' ? 'freeform' : 'list'));
  };

  const handleToggleSidebar = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const sidebarWidth = sidebarExpanded ? SIDE_PANEL_WIDTH_EXPANDED : SIDE_PANEL_WIDTH_COLLAPSED;

  return (
    <>
      <title>Watch | CORE Beta</title>
      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: sidebarWidth,
            transition: 'width 0.2s ease-in-out',
            borderRight: 1,
            borderColor: 'divider',
          }}
        >
          <QuerySelection
            queries={queries}
            selectedQueryIds={selectedQueryIds}
            setSelectedQueryIds={setSelectedQueryIds}
            onInactivateQuery={handleInactivateQuery}
            isExpanded={sidebarExpanded}
            onToggleExpanded={handleToggleSidebar}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box
            sx={{
              background: 'background.paper',
              flex: 0,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <ToggleButtonGroup color="primary" exclusive value={viewMode} onChange={handleViewModeChange}>
              <ToggleButton value="list">List</ToggleButton>
              <ToggleButton value="stats">Stats</ToggleButton>
              <ToggleButton value="charts">Charts</ToggleButton>
              <ToggleButton value="timeline">Timeline</ToggleButton>
            </ToggleButtonGroup>

            {viewMode === 'charts' && (
              <Tooltip title={`Switch to ${chartLayoutMode === 'list' ? 'freeform' : 'list'} layout`}>
                <IconButton onClick={handleChartLayoutChange} size="small">
                  {chartLayoutMode === 'list' ? <GridViewIcon /> : <DragHandleIcon />}
                </IconButton>
              </Tooltip>
            )}
          </Box>
          <Divider />
          <Box sx={{ flex: 1, overflow: 'auto', height: '100%' }}>
            {viewMode === 'list' ? (
              <HitList data={data} queryIdToQueryInfoMap={queries} eventInterval={eventInterval} setEventInterval={setEventInterval} onClearData={clearData} />
            ) : viewMode === 'stats' ? (
              <Stats queryIdToQueryStatMap={queryIdToQueryStat} queryIdToQueryInfoMap={queries} />
            ) : viewMode === 'timeline' ? (
              <Timeline
                queryIdToQueryInfoMap={queries}
                selectedQueryIds={selectedQueryIds}
                getAllActiveQueryEvents={getAllActiveQueryEvents}
                timeHorizonSeconds={timelineConfig.timeHorizonSeconds}
                onTimeHorizonChange={updateTimeHorizon}
              />
            ) : chartLayoutMode === 'list' ? (
              <Charts qid2Stats={queryIdToQueryStat} queries={queries} />
            ) : (
              <ChartsFreeform qid2Stats={queryIdToQueryStat} queries={queries} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
