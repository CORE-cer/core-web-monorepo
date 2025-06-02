import { createFileRoute } from '@tanstack/react-router';
import {
  Box,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import HitList from '../components/HitList';
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import QuerySelection from '../components/watch/QuerySelection';
import { useWatchPage } from '../hooks/useWatchPage';

const SIDE_PANEL_WIDTH = 200;

function RouteComponent() {
  const {
    queries,
    selectedQueryIds,
    setSelectedQueryIds,
    data,
    qid2Stats,
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
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={viewMode}
              onChange={handleViewModeChange}
            >
              <ToggleButton value="list">List</ToggleButton>
              <ToggleButton value="stats">Stats</ToggleButton>
              <ToggleButton value="charts">Charts</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Divider />
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            {viewMode === 'list' ? (
              <HitList
                data={data}
                eventInterval={eventInterval}
                setEventInterval={setEventInterval}
              />
            ) : viewMode === 'stats' ? (
              <Stats qid2Stats={qid2Stats} queries={queries} />
            ) : viewMode === 'charts' ? (
              <Charts qid2Stats={qid2Stats} queries={queries} />
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const Route = createFileRoute('/watch')({
  component: RouteComponent,
});
