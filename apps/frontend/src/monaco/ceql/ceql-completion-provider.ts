import type monaco from 'monaco-editor-core';

const keywords = [
  'ALL',
  'AND',
  'ANY',
  'AS',
  'BY',
  'CONSUME',
  'LIMIT',
  'DISTINCT',
  'EVENT',
  'EVENTS',
  'FILTER',
  'FROM',
  'HOURS',
  'IN',
  'LAST',
  'LIKE',
  'MAX',
  'MINUTES',
  'NEXT',
  'NONE',
  'NOT',
  'OR',
  'PARTITION',
  'RANGE',
  'SECONDS',
  'SELECT',
  'STREAM',
  'STRICT',
  'UNLESS',
  'WHERE',
  'WITHIN',
];

function createSuggestions(range: monaco.IRange) {
  return keywords.map((kw) => ({
    label: kw,
    // Cannot import monaco here right now, so we use 17 === monaco.languages.CompletionItemKind.Keyword
    kind: 17,
    insertText: kw,
    range,
  }));
}

const CEQLCompletionProvider: monaco.languages.CompletionItemProvider = {
  provideCompletionItems: (model, position) => {
    const word = model.getWordUntilPosition(position);
    const range = {
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn,
    };
    return {
      suggestions: createSuggestions(range),
    };
  },
};

export default CEQLCompletionProvider;
