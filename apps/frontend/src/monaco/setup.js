import * as monaco from 'monaco-editor-core';
import COREWorkerManager from './core-worker-manager';
import COREWorkerModule from './core.worker?worker';
import { CEQLDark, CEQLLight } from './ceql/ceql-themes';
import COREDiagnosticsAdapter from './core-diagnostics-adapter';
import CEQLTokensProvider from './ceql/ceql-tokens-provider';
import CEQLCompletionProvider from './ceql/ceql-completion-provider';

const LANG_ID = 'ceql';
const LANG_CONFIGURATION = {
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
self.MonacoEnvironment = {
  getWorker: function () {
    return new COREWorkerModule();
  },
};
// }

monaco.editor.defineTheme('ceql-dark', CEQLDark);
monaco.editor.defineTheme('ceql-light', CEQLLight);

const client = new COREWorkerManager();
const workerAccessor = (languageId, ...uris) =>
  client.getLanguageServiceWorker(languageId, ...uris);
new COREDiagnosticsAdapter(workerAccessor);

monaco.languages.register({ id: LANG_ID });
monaco.languages.onLanguage(LANG_ID, () => {
  monaco.languages.setLanguageConfiguration(LANG_ID, LANG_CONFIGURATION);
  monaco.languages.setTokensProvider(LANG_ID, new CEQLTokensProvider());
  monaco.languages.registerCompletionItemProvider(
    LANG_ID,
    CEQLCompletionProvider
  );
});
