import { useTheme } from '@emotion/react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import type { Theme } from '@mui/material/styles';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { lightTheme } from '@uiw/react-json-view/light';
import React, { useState } from 'react';
import type { StreamType } from '@/types';
import SchemaInfoDialog from '@/components/SchemaInfoDialog';

type CustomJsonViewProps = {
  schema: object;
};

export function CustomJsonView({ schema }: CustomJsonViewProps) {
  const theme = useTheme() as Theme;

  return (
    <JsonView
      enableClipboard={false}
      collapsed={false}
      indentWidth={16}
      value={schema}
      style={theme.palette.mode === 'dark' ? darkTheme : lightTheme}
      displayObjectSize
      displayDataTypes
    >
      <JsonView.Quote render={() => <></>} />
      <JsonView.Float
        render={({ children, ...rest }, { type }) => {
          if (type === 'type') return <span {...rest}>{'double'}</span>;
          return <span {...rest}>{children}</span>;
        }}
      />
      <JsonView.Date
        render={({ children, ...rest }, { type }) => {
          if (type === 'type') return <span {...rest}>{'primary_time'}</span>;
          return <span {...rest}>{children}</span>;
        }}
      />
    </JsonView>
  );
}

type SchemaProps = {
  schema: object;
  streamType?: StreamType;
} & React.ComponentProps<typeof Box>;

const Schema: React.FC<SchemaProps> = ({ schema, streamType, ...props }) => {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  return (
    <Box {...props}>
      {streamType && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 2,
          pb: 1,
          borderBottom: 1,
          borderColor: 'divider'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Schema
          </Typography>
          <Tooltip title="Schema Information & FAQ">
            <IconButton 
              size="small"
              onClick={() => setInfoDialogOpen(true)}
              sx={{ color: 'text.secondary' }}
            >
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      
      <CustomJsonView schema={schema} />
      
      {streamType && (
        <SchemaInfoDialog
          open={infoDialogOpen}
          onClose={() => setInfoDialogOpen(false)}
          streamType={streamType}
        />
      )}
    </Box>
  );
};

export default Schema;
