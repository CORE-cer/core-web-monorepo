// import Editor from '@/components/Editor';
import AddQueryDialog from '@/components/query/AddQueryDialog';
import Examples from '@/components/query/Examples';
import Schema from '@/components/query/Schema';
import { useQueryPage } from '@/hooks/useQueryPage';
import { setupMonaco } from '@/monaco/setup.js';
import Editor from '@monaco-editor/react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Fab } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

const QueryPage: React.FC = () => {
  const { modalOpen, queryName, loading, setQueryName, handleSetExample, handleModalClose, handleAddQuery, submitQuery } = useQueryPage();

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
            theme="ceql-dark"
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
          />
        </Box>
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
          <Examples setExample={handleSetExample} />
          <Divider />
          <Schema />
        </Box>
      </Box>
    </>
  );
};

export const Route = createFileRoute('/query')({
  component: QueryPage,
});
