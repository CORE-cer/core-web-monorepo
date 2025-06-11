import * as monaco from 'monaco-editor';

import CEQLCompletionProvider from './ceql/ceql-completion-provider';
import { CEQLDark, CEQLLight } from './ceql/ceql-themes';
import CEQLTokensProvider from './ceql/ceql-tokens-provider';

// import COREDiagnosticsAdapter from './core-diagnostics-adapter';
// import COREWorkerManager from './core-worker-manager.js';
// import COREWorkerModule from './core.worker?worker';

export function setupMonaco(monaco: typeof import('monaco-editor')) {
  const LANG_ID = 'ceql';
  const LANG_CONFIGURATION: monaco.languages.LanguageConfiguration = {
    comments: {
      lineComment: '--',
      blockComment: ['/*', '*/'],
    },

    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ],

    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: "'", close: "'", notIn: ['string'] },
      { open: '`', close: '`' },
    ],
  };

  // export function setupMonaco() {
  // self.MonacoEnvironment = {
  //   getWorker: function () {
  //     return new COREWorkerModule();
  //   },
  // };
  // }

  console.log('Setting up Monaco Editor for CEQL...');

  monaco.editor.defineTheme('ceql-dark', CEQLDark);
  monaco.editor.defineTheme('ceql-light', CEQLLight);

  // const client = new COREWorkerManager();
  // const workerAccessor = (languageId, ...uris) => client.getLanguageServiceWorker(languageId, ...uris);
  // new COREDiagnosticsAdapter(workerAccessor);

  monaco.languages.register({ id: LANG_ID });
  monaco.languages.onLanguage(LANG_ID, () => {
    monaco.languages.setLanguageConfiguration(LANG_ID, LANG_CONFIGURATION);
    monaco.languages.setTokensProvider(LANG_ID, new CEQLTokensProvider());
    monaco.languages.registerCompletionItemProvider(LANG_ID, CEQLCompletionProvider);
  });
}
