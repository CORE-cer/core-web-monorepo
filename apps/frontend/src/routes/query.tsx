// import Editor from '@/components/Editor';
import AddQueryDialog from '@/components/query/AddQueryDialog';
import QuerySidebar from '@/components/query/QuerySidebar';
import { useQueryPage } from '@/hooks/useQueryPage';
import { setupMonaco } from '@/monaco/setup.js';
import Editor from '@monaco-editor/react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

const QueryPage: React.FC = () => {
  const { queryEditorRef, modalOpen, queryName, loading, setQueryName, handleSetExample, handleModalClose, handleAddQuery, submitQuery } = useQueryPage();
  const theme = useTheme();
  const monacoTheme = theme.palette.mode === 'dark' ? 'ceql-dark' : 'ceql-light';

  return (
    <>
      <title>Query | CORE Beta</title>
      <AddQueryDialog loading={loading} open={modalOpen} onClose={handleModalClose} onSubmit={submitQuery} queryName={queryName} setQueryName={setQueryName} />
      <Fab
        onClick={handleAddQuery}
        variant="extended"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add query
      </Fab>
      <Box
        sx={{
          minHeight: 800,
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <Box className="editor" sx={{ overflow: 'hidden', flex: 2 }}>
          <Editor
            theme={monacoTheme}
            language="ceql"
            options={{
              automaticLayout: true,
              scrollBeyondLastLine: false,
              minimap: { enabled: false },
              renderWhitespace: 'all',
              tabSize: 2,
              fontSize: 20,
              scrollbar: {
                alwaysConsumeMouseWheel: false,
              },
            }}
            beforeMount={(monaco) => {
              setupMonaco(monaco);
            }}
            onMount={(editor) => {
              queryEditorRef.current = editor;
            }}
          />
        </Box>
        <QuerySidebar setExample={handleSetExample} />
      </Box>
    </>
  );
};

export const Route = createFileRoute('/query')({
  component: QueryPage,
});
