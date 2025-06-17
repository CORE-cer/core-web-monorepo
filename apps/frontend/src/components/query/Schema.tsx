import type { SchemaData } from '@/types';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { lightTheme } from '@uiw/react-json-view/light';
import React from 'react';

type CustomJsonViewProps = {
  schema: SchemaData;
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
  schema: SchemaData;
} & React.ComponentProps<typeof Box>;

const Schema: React.FC<SchemaProps> = ({ schema, ...props }) => {
  return (
    <Box {...props}>
      <CustomJsonView schema={schema} />
    </Box>
  );
};

export default Schema;
