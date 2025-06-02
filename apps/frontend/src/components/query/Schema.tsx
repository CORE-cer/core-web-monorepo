import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import JsonView from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { lightTheme } from '@uiw/react-json-view/light';
import React from 'react';

import { SCHEMA } from '../../data/schema';
import type { SchemaData } from '../../types';

type CustomJsonViewProps = {
  schema: SchemaData;
};

const CustomJsonView: React.FC<CustomJsonViewProps> = ({ schema }) => {
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
};

const Schema: React.FC<React.ComponentProps<typeof Box>> = (props) => {
  return (
    <Box {...props}>
      <CustomJsonView schema={SCHEMA} />
    </Box>
  );
};

export default Schema;
