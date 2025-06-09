import { enqueueSnackbar } from 'notistack';
import { useCallback, useRef, useState } from 'react';

import type { EditorRef, ExampleData } from '../types';
import { addQuery } from '../utils/api';
import { useUser } from './useUser';

export const useQueryPage = () => {
  const editorRef = useRef<EditorRef>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [queryName, setQueryName] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useUser();

  const handleSetExample = useCallback((example: ExampleData) => {
    const text = `/*${example.title}*/\n${example.query}\n`;
    const editor = editorRef.current?.getEditor();
    if (editor) {
      editor.setValue(text);
    }
  }, []);

  const handleModalClose = useCallback(() => {
    if (loading) return; // Prevent closing modal while query is being added
    setModalOpen(false);
    setQueryName('');
  }, [loading]);

  const handleAddQuery = () => {
    setModalOpen(true);
  };

  // const submitQuery = async (e: React.FormEvent<HTMLFormElement>) => {
  //   setLoading(true);
  //   try {
  //     e.preventDefault();
  //     const editor = editorRef.current?.getEditor();
  //     const currentQuery = editor?.getValue() ?? '';
  //
  //     await addQuery({ query: currentQuery, queryName, userId: user.userId });
  //     enqueueSnackbar('Query added successfully', { variant: 'success' });
  //   } catch (err) {
  //     console.error(err);
  //     enqueueSnackbar(`Error adding query: ${(err as Error).toString()}`, {
  //       variant: 'error',
  //     });
  //   } finally {
  //     setLoading(false);
  //     handleModalClose();
  //   }
  // };
  //
  const submitQuery = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      setLoading(true);
      try {
        e.preventDefault();
        const editor = editorRef.current?.getEditor();
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
    [handleModalClose, queryName, user.userId]
  );

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
