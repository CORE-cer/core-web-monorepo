import antlr4, { CharStream } from 'antlr4';

import CEQLQueryLexer from '../../grammar/ceql/CEQLQueryLexer';
import CEQLQueryParser from '../../grammar/ceql/CEQLQueryParser';
import QueryErrorListener from '../query-error-listener.js';

export default class CEQLLanguageService {
  doValidation(document: string) {
    // TODO: Try/catch to handle in-grammar errors

    const queryErrorListener = new QueryErrorListener();

    const input = new CharStream(document);
    const lexer = new CEQLQueryLexer(input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(queryErrorListener);

    const tokenStream = new antlr4.CommonTokenStream(lexer);
    const parser = new CEQLQueryParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(queryErrorListener);
    parser.parse();

    return queryErrorListener.getErrors();
  }
}
