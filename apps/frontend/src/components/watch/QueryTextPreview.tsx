import { setupMonaco } from '@/monaco/setup';
import Editor from '@monaco-editor/react';
import { Box, Paper, Popper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type QueryTextPreviewProps = {
  queryText: string;
  queryName: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
};

export function QueryTextPreview({ queryText, queryName, anchorEl, open, placement = 'right' }: QueryTextPreviewProps) {
  const theme = useTheme();

  // Determine Monaco theme based on MUI theme
  const monacoTheme = theme.palette.mode === 'dark' ? 'ceql-dark' : 'ceql-light';

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      style={{ zIndex: 1300 }}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ]}
    >
      <Paper
        elevation={8}
        sx={{
          width: 400,
          height: 300,
          border: 1,
          borderColor: 'divider',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 1,
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'background.default',
          }}
        >
          <Typography variant="subtitle2" noWrap>
            {queryName}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
            '& .monaco-editor': {
              border: 'none',
            },
          }}
        >
          <Editor
            theme={monacoTheme}
            language="ceql"
            value={queryText}
            options={{
              automaticLayout: true,
              scrollBeyondLastLine: false,
              minimap: { enabled: false },
              renderWhitespace: 'selection',
              tabSize: 2,
              fontSize: 22,
              readOnly: true,
              scrollbar: {
                alwaysConsumeMouseWheel: false,
                vertical: 'auto',
                horizontal: 'auto',
              },
              wordWrap: 'on',
              lineNumbers: 'off',
              renderLineHighlight: 'none',
              folding: false,
              contextmenu: false,
              selectOnLineNumbers: false,
              overviewRulerBorder: false,
              hideCursorInOverviewRuler: true,
              overviewRulerLanes: 0,
            }}
            beforeMount={(monaco) => {
              setupMonaco(monaco);
            }}
          />
        </Box>
      </Paper>
    </Popper>
  );
}

export default QueryTextPreview;
