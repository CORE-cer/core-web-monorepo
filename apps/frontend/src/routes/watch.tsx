import { useWatchPage } from '@/hooks/useWatchPage';
import { Box, Divider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';

import Charts from '../components/Charts';
import HitList from '../components/HitList';
import Stats from '../components/Stats';
import QuerySelection from '../components/watch/QuerySelection';

const SIDE_PANEL_WIDTH = 200;

export const Route = createFileRoute('/watch')({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    queries,
    selectedQueryIds,
    setSelectedQueryIds,
    data,
    queryIdToQueryStat,
    viewMode,
    eventInterval,
    setEventInterval,
    handleViewModeChange,
    handleInactivateQuery,
  } = useWatchPage();

  return (
    <>
      <Helmet title={`Watch | CORE Beta`} />

      <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: SIDE_PANEL_WIDTH,
            borderRight: 1,
            borderColor: 'divider',
          }}
        >
          <QuerySelection
            queries={queries}
            selectedQueryIds={selectedQueryIds}
            setSelectedQueryIds={setSelectedQueryIds}
            onInactivateQuery={handleInactivateQuery}
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
            }}
          >
            <ToggleButtonGroup color="primary" exclusive value={viewMode} onChange={handleViewModeChange}>
              <ToggleButton value="list">List</ToggleButton>
              <ToggleButton value="stats">Stats</ToggleButton>
              <ToggleButton value="charts">Charts</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Divider />
          <Box sx={{ flex: 1, overflow: 'auto', height: '100%' }}>
            {viewMode === 'list' ? (
              <HitList data={data} eventInterval={eventInterval} setEventInterval={setEventInterval} />
            ) : viewMode === 'stats' ? (
              <Stats queryIdToQueryStatMap={queryIdToQueryStat} queryIdToQueryInfoMap={queries} />
            ) : (
              <Charts qid2Stats={queryIdToQueryStat} queries={queries} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
