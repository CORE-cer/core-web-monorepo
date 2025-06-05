import type { EditorRef } from '@/types';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import * as monaco from 'monaco-editor-core';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { ForwardedRef } from 'react';

type EditorProps = {
  query?: string;
  sx?: SxProps<Theme>;
  [key: string]: unknown;
};

const Editor = React.forwardRef<EditorRef, EditorProps>(({ query, ...props }, ref: ForwardedRef<EditorRef>) => {
  const theme = useTheme();

  const monacoEl = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      getEditor: () => editor,
    }),
    [editor]
  );

  useEffect(() => {
    monaco.editor.setTheme(theme.palette.mode === 'dark' ? 'ceql-dark' : 'ceql-light');
  }, [theme.palette.mode]);

  useEffect(() => {
    if (editor) {
      const model = editor.getModel();
      if (query && typeof query === 'string' && model) {
        model.setValue(query);
      }
    }
  }, [editor, query]);

  useEffect(() => {
    if (monacoEl.current) {
      const editorInstance = monaco.editor.create(monacoEl.current, {
        theme: theme.palette.mode === 'dark' ? 'ceql-dark' : 'ceql-light',
        language: 'ceql',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        renderWhitespace: 'all',
        tabSize: 2,
        fontSize: 20,
        scrollbar: {
          alwaysConsumeMouseWheel: false,
        },
      });

      setEditor(editorInstance);

      return () => {
        editorInstance.dispose();
        monaco.editor.getModels().forEach((model) => {
          model.dispose();
        });
      };
    }
  }, []);

  return <Box className="editor" ref={monacoEl} {...props}></Box>;
});

Editor.displayName = 'Editor';

export default Editor;
