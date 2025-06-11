import type { ExampleData } from '@/types';
import { addQuery } from '@/utils/api';
import { useMonaco } from '@monaco-editor/react';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useState } from 'react';

import { useUser } from './useUser';

export const useQueryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [queryName, setQueryName] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const monaco = useMonaco();

  const handleSetExample = useCallback(
    (example: ExampleData) => {
      const text = `/*${example.title}*/\n${example.query}\n`;
      const editor = monaco?.editor.getModels()[0];
      if (editor) {
        editor.setValue(text);
      }
    },
    [monaco?.editor]
  );

  const handleModalClose = useCallback(() => {
    if (loading) return; // Prevent closing modal while query is being added
    setModalOpen(false);
    setQueryName('');
  }, [loading]);

  const handleAddQuery = () => {
    setModalOpen(true);
  };

  const submitQuery = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      setLoading(true);
      try {
        e.preventDefault();
        const editor = monaco?.editor.getModels()[0];
        const currentQuery = editor?.getValue() ?? '';

        await addQuery({ query: currentQuery, queryName, userId: user.userId });
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
    },
    [handleModalClose, monaco?.editor, queryName, user.userId]
  );

  return {
    modalOpen,
    queryName,
    loading,
    handleSetExample,
    setQueryName,
    handleModalClose,
    handleAddQuery,
    submitQuery,
  };
};
