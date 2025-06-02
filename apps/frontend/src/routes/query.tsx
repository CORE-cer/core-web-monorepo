import { createFileRoute } from '@tanstack/react-router';
import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Fab } from '@mui/material';
import { Helmet } from 'react-helmet';
import Editor from '../components/Editor';
import AddQueryDialog from '../components/query/AddQueryDialog';
import Examples from '../components/query/Examples';
import Schema from '../components/query/Schema';
import { useQueryPage } from '../hooks/useQueryPage';

const QueryPage: React.FC = () => {
  const {
    editorRef,
    modalOpen,
    queryName,
    loading,
    setQueryName,
    handleSetExample,
    handleModalClose,
    handleAddQuery,
    submitQuery,
  } = useQueryPage();

  return (
    <>
      <Helmet title={`Query | CORE Beta`} />
      <AddQueryDialog
        loading={loading}
        open={modalOpen}
        onClose={handleModalClose}
        onSubmit={submitQuery}
        queryName={queryName}
        setQueryName={setQueryName}
      />
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
        <Editor
          ref={editorRef}
          sx={{
            overflow: 'hidden',
            flex: 2,
          }}
        />
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
