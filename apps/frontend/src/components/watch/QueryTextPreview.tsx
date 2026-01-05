import { setupMonaco } from '@/monaco/setup';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Editor from '@monaco-editor/react';
import { Box, IconButton, Paper, Popper, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { enqueueSnackbar } from 'notistack';
import { useMemo } from 'react';

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

  // Calculate dynamic dimensions based on query content
  const { editorWidth, editorHeight } = useMemo(() => {
    const lines = queryText.split('\n');
    const lineCount = lines.length;
    const maxLineLength = Math.max(...lines.map((line) => line.length));

    // Calculate width based on maximum line length
    // Approximate character width: 10px per character for fontSize 22
    const characterWidth = 10;
    const minWidth = 900;
    const maxWidth = 2400;
    const calculatedWidth = Math.max(minWidth, Math.min(maxWidth, maxLineLength * characterWidth + 40)); // +40 for padding

    // Calculate height based on line count
    const lineHeight = 30;
    const headerHeight = 40; // Height of the query name header
    const minHeight = 150;
    const maxHeight = 600;
    const calculatedHeight = Math.max(minHeight, Math.min(maxHeight, lineCount * lineHeight + headerHeight + 20)); // +20 for padding

    return {
      editorWidth: calculatedWidth,
      editorHeight: calculatedHeight,
    };
  }, [queryText]);

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
          width: editorWidth,
          height: editorHeight,
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle2" noWrap>
            {queryName}
          </Typography>
          <Tooltip title="Copy query" arrow>
            <IconButton
              size="small"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(queryText);
                  enqueueSnackbar('Query copied to clipboard', { variant: 'success' });
                } catch {
                  enqueueSnackbar('Failed to copy query', { variant: 'error' });
                }
              }}
              sx={{ ml: 1 }}
            >
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
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
                vertical: 'hidden',
                horizontal: 'hidden',
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
