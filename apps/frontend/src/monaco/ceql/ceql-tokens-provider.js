import antlr4 from 'antlr4';
import CEQLQueryLexer from '../../grammar/ceql/CEQLQueryLexer';

function antlr4TokenToMonacoToken(token) {
  switch (token.type) {
    case CEQLQueryLexer.SINGLE_LINE_COMMENT:
    case CEQLQueryLexer.MULTILINE_COMMENT:
      return 'comment';
    case CEQLQueryLexer.STRING_LITERAL:
      return 'string';
    case CEQLQueryLexer.DOUBLE_LITERAL:
    case CEQLQueryLexer.INTEGER_LITERAL:
    case CEQLQueryLexer.NUMERICAL_EXPONENT:
      return 'number';
    case CEQLQueryLexer.IDENTIFIER:
      return 'variable';
    case CEQLQueryLexer.PERCENT:
    case CEQLQueryLexer.PLUS:
    case CEQLQueryLexer.MINUS:
    case CEQLQueryLexer.STAR:
    case CEQLQueryLexer.SLASH:
    case CEQLQueryLexer.LE:
    case CEQLQueryLexer.LEQ:
    case CEQLQueryLexer.GE:
    case CEQLQueryLexer.GEQ:
    case CEQLQueryLexer.EQ:
    case CEQLQueryLexer.NEQ:
      return 'operator';
    case CEQLQueryLexer.K_ALL:
    case CEQLQueryLexer.K_AND:
    case CEQLQueryLexer.K_ANY:
    case CEQLQueryLexer.K_AS:
    case CEQLQueryLexer.K_BY:
    case CEQLQueryLexer.K_CONSUME:
    case CEQLQueryLexer.K_LIMIT:
    case CEQLQueryLexer.K_DISTINCT:
    case CEQLQueryLexer.K_EVENT:
    case CEQLQueryLexer.K_EVENTS:
    case CEQLQueryLexer.K_FILTER:
    case CEQLQueryLexer.K_FROM:
    case CEQLQueryLexer.K_HOURS:
    case CEQLQueryLexer.K_IN:
    case CEQLQueryLexer.K_LAST:
    case CEQLQueryLexer.K_LIKE:
    case CEQLQueryLexer.K_MAX:
    case CEQLQueryLexer.K_MINUTES:
    case CEQLQueryLexer.K_NEXT:
    case CEQLQueryLexer.K_NONE:
    case CEQLQueryLexer.K_NOT:
    case CEQLQueryLexer.K_OR:
    case CEQLQueryLexer.K_PARTITION:
    case CEQLQueryLexer.K_RANGE:
    case CEQLQueryLexer.K_SECONDS:
    case CEQLQueryLexer.K_SELECT:
    case CEQLQueryLexer.K_STREAM:
    case CEQLQueryLexer.K_STRICT:
    case CEQLQueryLexer.K_UNLESS:
    case CEQLQueryLexer.K_WHERE:
    case CEQLQueryLexer.K_WITHIN:
      return 'keyword';
    default:
      return '';
  }
}

class CEQLTokensProviderState {
  clone() {
    return new CEQLTokensProviderState();
  }

  equals() {
    return true;
  }
}

class CEQLTokensProvider {
  getInitialState() {
    return new CEQLTokensProviderState();
  }

  tokenize(line) {
    const inputStream = new antlr4.InputStream(line);
    const lexer = new CEQLQueryLexer(inputStream);

    return {
      endState: new CEQLTokensProviderState(),
      tokens: lexer
        .getAllTokens()
        .filter((token) => token !== null && token.type !== -1)
        .map((token) => ({
          scopes: antlr4TokenToMonacoToken(token),
          startIndex: token.column,
        }))
        .sort((a, b) => a.startIndex - b.startIndex),
    };
  }
}

export default CEQLTokensProvider;
