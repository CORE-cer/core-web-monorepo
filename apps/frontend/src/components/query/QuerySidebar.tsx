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

function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
          {Object.keys(SCHEMAS).map((streamType) => {
            const typedStreamType = streamType as StreamType;
            return (
              <Button
                variant={selectedStream === typedStreamType ? 'contained' : 'outlined'}
                onClick={() => {
                  setSelectedStream(typedStreamType);
                }}
                key={typedStreamType}
              >
                {capitalizeFirstLetter(typedStreamType)}
              </Button>
            );
          })}
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
