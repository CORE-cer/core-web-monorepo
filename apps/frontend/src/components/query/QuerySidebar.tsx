import examples from '@/data/examples';
import { SCHEMAS } from '@/data/schema';
import type { ExampleData, StreamType } from '@/types';
import { Box, Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

import Examples from './Examples';
import Schema from './Schema';

type SidebarMode = 'examples' | 'schema';

type QuerySidebarProps = {
  setExample: (example: ExampleData) => void;
};

export function QuerySidebar({ setExample }: QuerySidebarProps) {
  const [mode, setMode] = useState<SidebarMode>('examples');
  const [selectedStream, setSelectedStream] = useState<StreamType>('coinbase');

  const currentExamples = examples[selectedStream];
  const currentSchema = SCHEMAS[selectedStream];

  return (
    <Box
      sx={{
        borderLeft: 1,
        borderColor: 'divider',
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Mode Toggle (Examples/Schema) */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <ButtonGroup fullWidth variant="contained" size="small">
          <Button
            variant={mode === 'examples' ? 'contained' : 'outlined'}
            onClick={() => {
              setMode('examples');
            }}
          >
            Examples
          </Button>
          <Button
            variant={mode === 'schema' ? 'contained' : 'outlined'}
            onClick={() => {
              setMode('schema');
            }}
          >
            Schema
          </Button>
        </ButtonGroup>
      </Box>

      {/* Stream Type Toggle */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <ButtonGroup fullWidth variant="outlined" size="small">
          <Button
            variant={selectedStream === 'coinbase' ? 'contained' : 'outlined'}
            onClick={() => {
              setSelectedStream('coinbase');
            }}
          >
            Coinbase
          </Button>
        </ButtonGroup>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {mode === 'examples' ? (
          <Examples examples={currentExamples} setExample={setExample} />
        ) : (
          <Schema schema={currentSchema} sx={{ flex: 1, overflow: 'auto', p: 2 }} />
        )}
      </Box>
    </Box>
  );
}

export default QuerySidebar;
