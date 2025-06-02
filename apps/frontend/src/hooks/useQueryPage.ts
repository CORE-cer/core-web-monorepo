import { enqueueSnackbar } from 'notistack';
import { useCallback, useRef, useState } from 'react';

import type { EditorRef, ExampleData } from '../types';
import { addQuery } from '../utils/api';

export const useQueryPage = () => {
  const editorRef = useRef<EditorRef>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [queryName, setQueryName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSetExample = useCallback((example: ExampleData) => {
    const text = `/*${example.title}*/\n${example.query}\n`;
    const editor = editorRef.current?.getEditor();
    if (editor) {
      editor.setValue(text);
    }
  }, []);

  const handleModalClose = () => {
    if (loading) return; // Prevent closing modal while query is being added
    setModalOpen(false);
    setQueryName('');
  };

  const handleAddQuery = () => {
    setModalOpen(true);
  };

  const submitQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      e.preventDefault();
      const editor = editorRef.current?.getEditor();
      const currentQuery = editor?.getValue() ?? '';

      await addQuery(currentQuery, queryName);
      enqueueSnackbar('Query added successfully', { variant: 'success' });
    } catch (err) {
      console.error(err);
      enqueueSnackbar(`Error adding query: ${(err as Error).toString()}`, {
        variant: 'error',
      });
    } finally {
      setLoading(false);
      handleModalClose();
    }
  };

  return {
    editorRef,
    modalOpen,
    queryName,
    loading,
    setQueryName,
    handleSetExample,
    handleModalClose,
    handleAddQuery,
    submitQuery,
  };
};
