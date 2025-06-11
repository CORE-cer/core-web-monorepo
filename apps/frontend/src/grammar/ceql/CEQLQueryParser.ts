// Generated from src/grammar/ceql/CEQLQueryParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
// @ts-nocheck
import {
  ATN,
  ATNDeserializer,
  BailErrorStrategy,
  DFA,
  FailedPredicateException,
  Interval,
  IntervalSet,
  NoViableAltException,
  Parser,
  ParserATNSimulator,
  ParserRuleContext,
  PredictionContextCache,
  PredictionMode,
  RecognitionException,
  RuleContext,
  RuleNode,
  TerminalNode,
  Token,
  TokenStream,
} from 'antlr4';

import CEQLQueryParserListener from './CEQLQueryParserListener.js';


declare class ATNState {
    atn: ATN;
    stateNumber: number;
}
declare class DecisionState extends ATNState {
  decision: number;
  nonGreedy: boolean;
}

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CEQLQueryParser extends Parser {
  public static readonly K_ALL = 1;
  public static readonly K_AND = 2;
  public static readonly K_ANY = 3;
  public static readonly K_AS = 4;
  public static readonly K_BY = 5;
  public static readonly K_CONSUME = 6;
  public static readonly K_LIMIT = 7;
  public static readonly K_DISTINCT = 8;
  public static readonly K_EVENT = 9;
  public static readonly K_EVENTS = 10;
  public static readonly K_FILTER = 11;
  public static readonly K_FROM = 12;
  public static readonly K_HOURS = 13;
  public static readonly K_IN = 14;
  public static readonly K_LAST = 15;
  public static readonly K_LIKE = 16;
  public static readonly K_MAX = 17;
  public static readonly K_MINUTES = 18;
  public static readonly K_NEXT = 19;
  public static readonly K_NONE = 20;
  public static readonly K_NOT = 21;
  public static readonly K_OR = 22;
  public static readonly K_PARTITION = 23;
  public static readonly K_RANGE = 24;
  public static readonly K_SECONDS = 25;
  public static readonly K_SELECT = 26;
  public static readonly K_STREAM = 27;
  public static readonly K_STRICT = 28;
  public static readonly K_UNLESS = 29;
  public static readonly K_WHERE = 30;
  public static readonly K_WITHIN = 31;
  public static readonly PERCENT = 32;
  public static readonly PLUS = 33;
  public static readonly MINUS = 34;
  public static readonly STAR = 35;
  public static readonly SLASH = 36;
  public static readonly LE = 37;
  public static readonly LEQ = 38;
  public static readonly GE = 39;
  public static readonly GEQ = 40;
  public static readonly EQ = 41;
  public static readonly NEQ = 42;
  public static readonly SEMICOLON = 43;
  public static readonly COLON = 44;
  public static readonly COMMA = 45;
  public static readonly DOUBLE_DOT = 46;
  public static readonly LEFT_PARENTHESIS = 47;
  public static readonly RIGHT_PARENTHESIS = 48;
  public static readonly LEFT_SQUARE_BRACKET = 49;
  public static readonly RIGHT_SQUARE_BRACKET = 50;
  public static readonly LEFT_CURLY_BRACKET = 51;
  public static readonly RIGHT_CURLY_BRACKET = 52;
  public static readonly COLON_PLUS = 53;
  public static readonly IDENTIFIER = 54;
  public static readonly DOUBLE_LITERAL = 55;
  public static readonly INTEGER_LITERAL = 56;
  public static readonly NUMERICAL_EXPONENT = 57;
  public static readonly STRING_LITERAL = 58;
  public static readonly SINGLE_LINE_COMMENT = 59;
  public static readonly MULTILINE_COMMENT = 60;
  public static readonly SPACES = 61;
  public static readonly UNEXPECTED_CHAR = 62;
  public static readonly REGEX_START = 63;
  public static readonly REGEX_END = 64;
  public static readonly REGEX_END_ESCAPED = 65;
  public static readonly REGEX_PIPE = 66;
  public static readonly REGEX_EXCLAMAITON = 67;
  public static readonly REGEX_L_CURLY = 68;
  public static readonly REGEX_R_CURLY = 69;
  public static readonly REGEX_L_PAR = 70;
  public static readonly REGEX_R_PAR = 71;
  public static readonly REGEX_COMMA = 72;
  public static readonly REGEX_QUESTION = 73;
  public static readonly REGEX_PLUS = 74;
  public static readonly REGEX_STAR = 75;
  public static readonly REGEX_HAT = 76;
  public static readonly REGEX_HYPHEN = 77;
  public static readonly REGEX_L_BRACK = 78;
  public static readonly REGEX_R_BRACK = 79;
  public static readonly REGEX_BACKSLASH = 80;
  public static readonly REGEX_ALPHA = 81;
  public static readonly REGEX_DOT = 82;
  public static readonly REGEX_DOUBLED_DOT = 83;
  public static readonly UNRECOGNIZED = 84;
  public static readonly REGEX_DECIMAL_DIGIT = 85;
  public static readonly REGEX_NOT_DECIMAL_DIGIT = 86;
  public static readonly REGEX_WHITESPACE = 87;
  public static readonly REGEX_NOT_WHITESPACE = 88;
  public static readonly REGEX_ALPHANUMERIC = 89;
  public static readonly REGEX_NOT_ALPHANUMERIC = 90;
  public static readonly REGEX_DIGIT = 91;
  public static readonly EOF = Token.EOF;
  public static readonly RULE_parse = 0;
  public static readonly RULE_error = 1;
  public static readonly RULE_core_query = 2;
  public static readonly RULE_selection_strategy = 3;
  public static readonly RULE_list_of_variables = 4;
  public static readonly RULE_from_clause = 5;
  public static readonly RULE_cel_formula = 6;
  public static readonly RULE_partition_list = 7;
  public static readonly RULE_attribute_list = 8;
  public static readonly RULE_consumption_policy = 9;
  public static readonly RULE_limit = 10;
  public static readonly RULE_filter = 11;
  public static readonly RULE_predicate = 12;
  public static readonly RULE_string_literal = 13;
  public static readonly RULE_string_literal_or_regexp = 14;
  public static readonly RULE_math_expr = 15;
  public static readonly RULE_value_seq = 16;
  public static readonly RULE_number_seq = 17;
  public static readonly RULE_string_seq = 18;
  public static readonly RULE_time_window = 19;
  public static readonly RULE_event_span = 20;
  public static readonly RULE_time_span = 21;
  public static readonly RULE_hour_span = 22;
  public static readonly RULE_minute_span = 23;
  public static readonly RULE_second_span = 24;
  public static readonly RULE_custom_span = 25;
  public static readonly RULE_named_event = 26;
  public static readonly RULE_s_event_name_with_projection = 27;
  public static readonly RULE_s_event_name = 28;
  public static readonly RULE_event_name = 29;
  public static readonly RULE_atomic_cel_formula = 30;
  public static readonly RULE_stream_name = 31;
  public static readonly RULE_list_of_attribute_names = 32;
  public static readonly RULE_attribute_name = 33;
  public static readonly RULE_integer = 34;
  public static readonly RULE_double = 35;
  public static readonly RULE_number = 36;
  public static readonly RULE_string = 37;
  public static readonly RULE_any_name = 38;
  public static readonly RULE_keyword = 39;
  public static readonly RULE_regexp = 40;
  public static readonly RULE_regexp_alternation = 41;
  public static readonly RULE_regexp_exp = 42;
  public static readonly RULE_regexp_element = 43;
  public static readonly RULE_regexp_group = 44;
  public static readonly RULE_parenthesis = 45;
  public static readonly RULE_quantifier = 46;
  public static readonly RULE_quantity = 47;
  public static readonly RULE_quantExact = 48;
  public static readonly RULE_quantRange = 49;
  public static readonly RULE_quantMin = 50;
  public static readonly RULE_quantMax = 51;
  public static readonly RULE_atom = 52;
  public static readonly RULE_characterClass = 53;
  public static readonly RULE_ccAtom = 54;
  public static readonly RULE_ccRange = 55;
  public static readonly RULE_ccSingle = 56;
  public static readonly RULE_ccLiteral = 57;
  public static readonly RULE_ccEscapes = 58;
  public static readonly RULE_ccOther = 59;
  public static readonly RULE_literal = 60;
  public static readonly RULE_escapes = 61;
  public static readonly RULE_other = 62;
  public static readonly RULE_sharedAtom = 63;
  public static readonly RULE_regexp_number = 64;
  public static readonly literalNames: (string | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'%'",
    null,
    null,
    null,
    "'/'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    null,
    null,
    "';'",
    "':'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "':+'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'<<'",
    "'>>'",
    "'\\>'",
    "'|'",
    "'!'",
    null,
    null,
    null,
    null,
    null,
    "'?'",
    null,
    null,
    "'^'",
    null,
    null,
    null,
    "'\\'",
    null,
    "'.'",
    null,
    null,
    "'\\d'",
    "'\\D'",
    "'\\s'",
    "'\\S'",
    "'\\w'",
    "'\\W'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    'K_ALL',
    'K_AND',
    'K_ANY',
    'K_AS',
    'K_BY',
    'K_CONSUME',
    'K_LIMIT',
    'K_DISTINCT',
    'K_EVENT',
    'K_EVENTS',
    'K_FILTER',
    'K_FROM',
    'K_HOURS',
    'K_IN',
    'K_LAST',
    'K_LIKE',
    'K_MAX',
    'K_MINUTES',
    'K_NEXT',
    'K_NONE',
    'K_NOT',
    'K_OR',
    'K_PARTITION',
    'K_RANGE',
    'K_SECONDS',
    'K_SELECT',
    'K_STREAM',
    'K_STRICT',
    'K_UNLESS',
    'K_WHERE',
    'K_WITHIN',
    'PERCENT',
    'PLUS',
    'MINUS',
    'STAR',
    'SLASH',
    'LE',
    'LEQ',
    'GE',
    'GEQ',
    'EQ',
    'NEQ',
    'SEMICOLON',
    'COLON',
    'COMMA',
    'DOUBLE_DOT',
    'LEFT_PARENTHESIS',
    'RIGHT_PARENTHESIS',
    'LEFT_SQUARE_BRACKET',
    'RIGHT_SQUARE_BRACKET',
    'LEFT_CURLY_BRACKET',
    'RIGHT_CURLY_BRACKET',
    'COLON_PLUS',
    'IDENTIFIER',
    'DOUBLE_LITERAL',
    'INTEGER_LITERAL',
    'NUMERICAL_EXPONENT',
    'STRING_LITERAL',
    'SINGLE_LINE_COMMENT',
    'MULTILINE_COMMENT',
    'SPACES',
    'UNEXPECTED_CHAR',
    'REGEX_START',
    'REGEX_END',
    'REGEX_END_ESCAPED',
    'REGEX_PIPE',
    'REGEX_EXCLAMAITON',
    'REGEX_L_CURLY',
    'REGEX_R_CURLY',
    'REGEX_L_PAR',
    'REGEX_R_PAR',
    'REGEX_COMMA',
    'REGEX_QUESTION',
    'REGEX_PLUS',
    'REGEX_STAR',
    'REGEX_HAT',
    'REGEX_HYPHEN',
    'REGEX_L_BRACK',
    'REGEX_R_BRACK',
    'REGEX_BACKSLASH',
    'REGEX_ALPHA',
    'REGEX_DOT',
    'REGEX_DOUBLED_DOT',
    'UNRECOGNIZED',
    'REGEX_DECIMAL_DIGIT',
    'REGEX_NOT_DECIMAL_DIGIT',
    'REGEX_WHITESPACE',
    'REGEX_NOT_WHITESPACE',
    'REGEX_ALPHANUMERIC',
    'REGEX_NOT_ALPHANUMERIC',
    'REGEX_DIGIT',
  ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'parse',
    'error',
    'core_query',
    'selection_strategy',
    'list_of_variables',
    'from_clause',
    'cel_formula',
    'partition_list',
    'attribute_list',
    'consumption_policy',
    'limit',
    'filter',
    'predicate',
    'string_literal',
    'string_literal_or_regexp',
    'math_expr',
    'value_seq',
    'number_seq',
    'string_seq',
    'time_window',
    'event_span',
    'time_span',
    'hour_span',
    'minute_span',
    'second_span',
    'custom_span',
    'named_event',
    's_event_name_with_projection',
    's_event_name',
    'event_name',
    'atomic_cel_formula',
    'stream_name',
    'list_of_attribute_names',
    'attribute_name',
    'integer',
    'double',
    'number',
    'string',
    'any_name',
    'keyword',
    'regexp',
    'regexp_alternation',
    'regexp_exp',
    'regexp_element',
    'regexp_group',
    'parenthesis',
    'quantifier',
    'quantity',
    'quantExact',
    'quantRange',
    'quantMin',
    'quantMax',
    'atom',
    'characterClass',
    'ccAtom',
    'ccRange',
    'ccSingle',
    'ccLiteral',
    'ccEscapes',
    'ccOther',
    'literal',
    'escapes',
    'other',
    'sharedAtom',
    'regexp_number',
  ];
  public get grammarFileName(): string {
    return 'CEQLQueryParser.g4';
  }
  public get literalNames(): (string | null)[] {
    return CEQLQueryParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return CEQLQueryParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return CEQLQueryParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return CEQLQueryParser._serializedATN;
  }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(this, CEQLQueryParser._ATN, CEQLQueryParser.DecisionsToDFA, new PredictionContextCache());
  }
  // @RuleVersion(0)
  public parse(): ParseContext {
    let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CEQLQueryParser.RULE_parse);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 26 || _la === 62) {
          {
            this.state = 132;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case 26:
                {
                  this.state = 130;
                  this.core_query();
                }
                break;
              case 62:
                {
                  this.state = 131;
                  this.error();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          this.state = 136;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 137;
        this.match(CEQLQueryParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public error(): ErrorContext {
    let localctx: ErrorContext = new ErrorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CEQLQueryParser.RULE_error);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 139;
        localctx._UNEXPECTED_CHAR = this.match(CEQLQueryParser.UNEXPECTED_CHAR);

        throw new RuntimeException('UNEXPECTED_CHAR=' + (localctx._UNEXPECTED_CHAR != null ? localctx._UNEXPECTED_CHAR.text : undefined));
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public core_query(): Core_queryContext {
    let localctx: Core_queryContext = new Core_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CEQLQueryParser.RULE_core_query);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 142;
        this.match(CEQLQueryParser.K_SELECT);
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((_la & ~0x1f) === 0 && ((1 << _la) & 269123594) !== 0) {
          {
            this.state = 143;
            this.selection_strategy();
          }
        }

        this.state = 146;
        this.list_of_variables();
        this.state = 147;
        this.from_clause();
        this.state = 148;
        this.match(CEQLQueryParser.K_WHERE);
        this.state = 149;
        this.cel_formula(0);
        this.state = 153;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 23) {
          {
            this.state = 150;
            this.match(CEQLQueryParser.K_PARTITION);
            this.state = 151;
            this.match(CEQLQueryParser.K_BY);
            this.state = 152;
            this.partition_list();
          }
        }

        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 31) {
          {
            this.state = 155;
            this.match(CEQLQueryParser.K_WITHIN);
            this.state = 156;
            this.time_window();
          }
        }

        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 6) {
          {
            this.state = 159;
            this.match(CEQLQueryParser.K_CONSUME);
            this.state = 160;
            this.match(CEQLQueryParser.K_BY);
            this.state = 161;
            this.consumption_policy();
          }
        }

        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 7) {
          {
            this.state = 164;
            this.match(CEQLQueryParser.K_LIMIT);
            this.state = 165;
            this.limit();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public selection_strategy(): Selection_strategyContext {
    let localctx: Selection_strategyContext = new Selection_strategyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CEQLQueryParser.RULE_selection_strategy);
    try {
      this.state = 174;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 1:
          localctx = new Ss_allContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 168;
            this.match(CEQLQueryParser.K_ALL);
          }
          break;
        case 3:
          localctx = new Ss_anyContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 169;
            this.match(CEQLQueryParser.K_ANY);
          }
          break;
        case 15:
          localctx = new Ss_lastContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 170;
            this.match(CEQLQueryParser.K_LAST);
          }
          break;
        case 17:
          localctx = new Ss_maxContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 171;
            this.match(CEQLQueryParser.K_MAX);
          }
          break;
        case 19:
          localctx = new Ss_nextContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 172;
            this.match(CEQLQueryParser.K_NEXT);
          }
          break;
        case 28:
          localctx = new Ss_strictContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 173;
            this.match(CEQLQueryParser.K_STRICT);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public list_of_variables(): List_of_variablesContext {
    let localctx: List_of_variablesContext = new List_of_variablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CEQLQueryParser.RULE_list_of_variables);
    let _la: number;
    try {
      this.state = 186;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 35:
          localctx = new S_starContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 176;
            this.match(CEQLQueryParser.STAR);
          }
          break;
        case 20:
          localctx = new S_noneContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 177;
            this.match(CEQLQueryParser.K_NONE);
          }
          break;
        case 54:
          localctx = new S_event_name_with_projection_listContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 178;
            this.s_event_name_with_projection();
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 45) {
              {
                {
                  this.state = 179;
                  this.match(CEQLQueryParser.COMMA);
                  this.state = 180;
                  this.s_event_name_with_projection();
                }
              }
              this.state = 185;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public from_clause(): From_clauseContext {
    let localctx: From_clauseContext = new From_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CEQLQueryParser.RULE_from_clause);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 12) {
          {
            this.state = 188;
            this.match(CEQLQueryParser.K_FROM);
            this.state = 189;
            this.stream_name();
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 45) {
              {
                {
                  this.state = 190;
                  this.match(CEQLQueryParser.COMMA);
                  this.state = 191;
                  this.stream_name();
                }
              }
              this.state = 196;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public cel_formula(): Cel_formulaContext;
  public cel_formula(_p: number): Cel_formulaContext;
  // @RuleVersion(0)
  public cel_formula(_p?: number): Cel_formulaContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: Cel_formulaContext = new Cel_formulaContext(this, this._ctx, _parentState);
    let _prevctx: Cel_formulaContext = localctx;
    let _startState: number = 12;
    this.enterRecursionRule(localctx, 12, CEQLQueryParser.RULE_cel_formula, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 210;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 47:
            {
              localctx = new Par_cel_formulaContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 200;
              this.match(CEQLQueryParser.LEFT_PARENTHESIS);
              this.state = 201;
              this.cel_formula(0);
              this.state = 202;
              this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
            }
            break;
          case 54:
            {
              localctx = new Event_type_cel_formulaContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 204;
              this.s_event_name();
            }
            break;
          case 21:
          case 67:
            {
              localctx = new Not_event_type_atomic_cel_formulaContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 205;
              _la = this._input.LA(1);
              if (!(_la === 21 || _la === 67)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 206;
              this.match(CEQLQueryParser.LEFT_PARENTHESIS);
              this.state = 207;
              this.atomic_cel_formula(0);
              this.state = 208;
              this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 233;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 231;
              this._errHandler.sync(this);
              switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                  {
                    localctx = new Non_contiguous_sequencing_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 212;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
                    }
                    this.state = 213;
                    this.match(CEQLQueryParser.SEMICOLON);
                    this.state = 214;
                    this.cel_formula(5);
                  }
                  break;
                case 2:
                  {
                    localctx = new Contiguous_sequencing_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 215;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 216;
                    this.match(CEQLQueryParser.COLON);
                    this.state = 217;
                    this.cel_formula(4);
                  }
                  break;
                case 3:
                  {
                    localctx = new Or_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 218;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 219;
                    this.match(CEQLQueryParser.K_OR);
                    this.state = 220;
                    this.cel_formula(3);
                  }
                  break;
                case 4:
                  {
                    localctx = new As_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 221;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
                    }
                    this.state = 222;
                    this.match(CEQLQueryParser.K_AS);
                    this.state = 223;
                    this.event_name();
                  }
                  break;
                case 5:
                  {
                    localctx = new Non_contiguous_iteration_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 224;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
                    }
                    this.state = 225;
                    this.match(CEQLQueryParser.PLUS);
                  }
                  break;
                case 6:
                  {
                    localctx = new Contiguous_iteration_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 226;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 227;
                    this.match(CEQLQueryParser.COLON_PLUS);
                  }
                  break;
                case 7:
                  {
                    localctx = new Filter_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
                    this.state = 228;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
                    }
                    this.state = 229;
                    this.match(CEQLQueryParser.K_FILTER);
                    this.state = 230;
                    this.filter(0);
                  }
                  break;
              }
            }
          }
          this.state = 235;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public partition_list(): Partition_listContext {
    let localctx: Partition_listContext = new Partition_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CEQLQueryParser.RULE_partition_list);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 236;
        this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
        this.state = 237;
        this.attribute_list();
        this.state = 238;
        this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 45) {
          {
            this.state = 239;
            this.match(CEQLQueryParser.COMMA);
            this.state = 240;
            this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
            this.state = 241;
            this.attribute_list();
            this.state = 242;
            this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public attribute_list(): Attribute_listContext {
    let localctx: Attribute_listContext = new Attribute_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CEQLQueryParser.RULE_attribute_list);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 246;
        this.attribute_name();
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 45) {
          {
            {
              this.state = 247;
              this.match(CEQLQueryParser.COMMA);
              this.state = 248;
              this.attribute_name();
            }
          }
          this.state = 253;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public consumption_policy(): Consumption_policyContext {
    let localctx: Consumption_policyContext = new Consumption_policyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CEQLQueryParser.RULE_consumption_policy);
    try {
      this.state = 257;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 3:
          localctx = new Cp_anyContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 254;
            this.match(CEQLQueryParser.K_ANY);
          }
          break;
        case 23:
          localctx = new Cp_partitionContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 255;
            this.match(CEQLQueryParser.K_PARTITION);
          }
          break;
        case 20:
          localctx = new Cp_noneContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 256;
            this.match(CEQLQueryParser.K_NONE);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public limit(): LimitContext {
    let localctx: LimitContext = new LimitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CEQLQueryParser.RULE_limit);
    try {
      localctx = new L_integerContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 259;
        this.integer();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public filter(): FilterContext;
  public filter(_p: number): FilterContext;
  // @RuleVersion(0)
  public filter(_p?: number): FilterContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: FilterContext = new FilterContext(this, this._ctx, _parentState);
    let _prevctx: FilterContext = localctx;
    let _startState: number = 22;
    this.enterRecursionRule(localctx, 22, CEQLQueryParser.RULE_filter, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 271;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 47:
            {
              localctx = new Par_filterContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 262;
              this.match(CEQLQueryParser.LEFT_PARENTHESIS);
              this.state = 263;
              this.filter(0);
              this.state = 264;
              this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
            }
            break;
          case 54:
            {
              localctx = new Atomic_filterContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 266;
              this.s_event_name();
              this.state = 267;
              this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
              this.state = 268;
              this.predicate(0);
              this.state = 269;
              this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 281;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 279;
              this._errHandler.sync(this);
              switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                  {
                    localctx = new And_filterContext(this, new FilterContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_filter);
                    this.state = 273;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 274;
                    this.match(CEQLQueryParser.K_AND);
                    this.state = 275;
                    this.filter(3);
                  }
                  break;
                case 2:
                  {
                    localctx = new Or_filterContext(this, new FilterContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_filter);
                    this.state = 276;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
                    }
                    this.state = 277;
                    this.match(CEQLQueryParser.K_OR);
                    this.state = 278;
                    this.filter(2);
                  }
                  break;
              }
            }
          }
          this.state = 283;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  public predicate(): PredicateContext;
  public predicate(_p: number): PredicateContext;
  // @RuleVersion(0)
  public predicate(_p?: number): PredicateContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: PredicateContext = new PredicateContext(this, this._ctx, _parentState);
    let _prevctx: PredicateContext = localctx;
    let _startState: number = 24;
    this.enterRecursionRule(localctx, 24, CEQLQueryParser.RULE_predicate, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 320;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
          case 1:
            {
              localctx = new Par_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 285;
              this.match(CEQLQueryParser.LEFT_PARENTHESIS);
              this.state = 286;
              this.predicate(0);
              this.state = 287;
              this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
            }
            break;
          case 2:
            {
              localctx = new Not_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 289;
              this.match(CEQLQueryParser.K_NOT);
              this.state = 290;
              this.predicate(8);
            }
            break;
          case 3:
            {
              localctx = new Inequality_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 291;
              this.math_expr(0);
              this.state = 292;
              _la = this._input.LA(1);
              if (!(((_la - 37) & ~0x1f) === 0 && ((1 << (_la - 37)) & 63) !== 0)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 293;
              this.math_expr(0);
            }
            break;
          case 4:
            {
              localctx = new Equality_string_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 295;
              this.string_literal();
              this.state = 296;
              _la = this._input.LA(1);
              if (!(_la === 41 || _la === 42)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 297;
              this.string_literal_or_regexp();
            }
            break;
          case 5:
            {
              localctx = new Regex_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 299;
              this.attribute_name();
              this.state = 300;
              this.match(CEQLQueryParser.K_LIKE);
              this.state = 301;
              this.regexp();
            }
            break;
          case 6:
            {
              localctx = new In_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 303;
              this.attribute_name();
              this.state = 307;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 14:
                  {
                    this.state = 304;
                    this.match(CEQLQueryParser.K_IN);
                  }
                  break;
                case 21:
                  {
                    this.state = 305;
                    this.match(CEQLQueryParser.K_NOT);
                    this.state = 306;
                    this.match(CEQLQueryParser.K_IN);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 309;
              this.value_seq();
            }
            break;
          case 7:
            {
              localctx = new In_range_predicateContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 311;
              this.math_expr(0);
              this.state = 312;
              this.match(CEQLQueryParser.K_IN);
              this.state = 313;
              this.match(CEQLQueryParser.K_RANGE);
              this.state = 314;
              this.match(CEQLQueryParser.LEFT_PARENTHESIS);
              this.state = 315;
              this.math_expr(0);
              this.state = 316;
              this.match(CEQLQueryParser.COMMA);
              this.state = 317;
              this.math_expr(0);
              this.state = 318;
              this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
            }
            break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 330;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 328;
              this._errHandler.sync(this);
              switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                  {
                    localctx = new And_predicateContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_predicate);
                    this.state = 322;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 323;
                    this.match(CEQLQueryParser.K_AND);
                    this.state = 324;
                    this.predicate(6);
                  }
                  break;
                case 2:
                  {
                    localctx = new Or_predicateContext(this, new PredicateContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_predicate);
                    this.state = 325;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
                    }
                    this.state = 326;
                    this.match(CEQLQueryParser.K_OR);
                    this.state = 327;
                    this.predicate(5);
                  }
                  break;
              }
            }
          }
          this.state = 332;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public string_literal(): String_literalContext {
    let localctx: String_literalContext = new String_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CEQLQueryParser.RULE_string_literal);
    try {
      this.state = 335;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 58:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 333;
            this.string_();
          }
          break;
        case 54:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 334;
            this.attribute_name();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public string_literal_or_regexp(): String_literal_or_regexpContext {
    let localctx: String_literal_or_regexpContext = new String_literal_or_regexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CEQLQueryParser.RULE_string_literal_or_regexp);
    try {
      this.state = 340;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 58:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 337;
            this.string_();
          }
          break;
        case 54:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 338;
            this.attribute_name();
          }
          break;
        case 63:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 339;
            this.regexp();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public math_expr(): Math_exprContext;
  public math_expr(_p: number): Math_exprContext;
  // @RuleVersion(0)
  public math_expr(_p?: number): Math_exprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: Math_exprContext = new Math_exprContext(this, this._ctx, _parentState);
    let _prevctx: Math_exprContext = localctx;
    let _startState: number = 30;
    this.enterRecursionRule(localctx, 30, CEQLQueryParser.RULE_math_expr, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 351;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 47:
            {
              localctx = new Par_math_exprContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;

              this.state = 343;
              this.match(CEQLQueryParser.LEFT_PARENTHESIS);
              this.state = 344;
              this.math_expr(0);
              this.state = 345;
              this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
            }
            break;
          case 55:
          case 56:
            {
              localctx = new Number_math_exprContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 347;
              this.number_();
            }
            break;
          case 54:
            {
              localctx = new Attribute_math_exprContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 348;
              this.attribute_name();
            }
            break;
          case 33:
          case 34:
            {
              localctx = new Unary_math_exprContext(this, localctx);
              this._ctx = localctx;
              _prevctx = localctx;
              this.state = 349;
              _la = this._input.LA(1);
              if (!(_la === 33 || _la === 34)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 350;
              this.math_expr(3);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 361;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              this.state = 359;
              this._errHandler.sync(this);
              switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                  {
                    localctx = new Mul_math_exprContext(this, new Math_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_math_expr);
                    this.state = 353;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 354;
                    _la = this._input.LA(1);
                    if (!(((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 25) !== 0)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 355;
                    this.math_expr(3);
                  }
                  break;
                case 2:
                  {
                    localctx = new Sum_math_exprContext(this, new Math_exprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_math_expr);
                    this.state = 356;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
                    }
                    this.state = 357;
                    _la = this._input.LA(1);
                    if (!(_la === 33 || _la === 34)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 358;
                    this.math_expr(2);
                  }
                  break;
              }
            }
          }
          this.state = 363;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public value_seq(): Value_seqContext {
    let localctx: Value_seqContext = new Value_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CEQLQueryParser.RULE_value_seq);
    try {
      this.state = 372;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 30, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 364;
            this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
            this.state = 365;
            this.number_seq();
            this.state = 366;
            this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 368;
            this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
            this.state = 369;
            this.string_seq();
            this.state = 370;
            this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public number_seq(): Number_seqContext {
    let localctx: Number_seqContext = new Number_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CEQLQueryParser.RULE_number_seq);
    let _la: number;
    try {
      this.state = 395;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
        case 1:
          localctx = new Number_listContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 374;
            this.number_();
            this.state = 379;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === 45) {
              {
                {
                  this.state = 375;
                  this.match(CEQLQueryParser.COMMA);
                  this.state = 376;
                  this.number_();
                }
              }
              this.state = 381;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
        case 2:
          localctx = new Integer_rangeContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 382;
            this.integer();
            this.state = 383;
            this.match(CEQLQueryParser.DOUBLE_DOT);
            this.state = 384;
            this.integer();
          }
          break;
        case 3:
          localctx = new Double_rangeContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 386;
            this.double();
            this.state = 387;
            this.match(CEQLQueryParser.DOUBLE_DOT);
            this.state = 388;
            this.double();
          }
          break;
        case 4:
          localctx = new Number_range_lowerContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 390;
            this.number_();
            this.state = 391;
            this.match(CEQLQueryParser.DOUBLE_DOT);
          }
          break;
        case 5:
          localctx = new Number_range_upperContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 393;
            this.match(CEQLQueryParser.DOUBLE_DOT);
            this.state = 394;
            this.number_();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public string_seq(): String_seqContext {
    let localctx: String_seqContext = new String_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CEQLQueryParser.RULE_string_seq);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 397;
        this.string_();
        this.state = 402;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 45) {
          {
            {
              this.state = 398;
              this.match(CEQLQueryParser.COMMA);
              this.state = 399;
              this.string_();
            }
          }
          this.state = 404;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public time_window(): Time_windowContext {
    let localctx: Time_windowContext = new Time_windowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CEQLQueryParser.RULE_time_window);
    try {
      this.state = 408;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 405;
            this.event_span();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 406;
            this.time_span();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 407;
            this.custom_span();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public event_span(): Event_spanContext {
    let localctx: Event_spanContext = new Event_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CEQLQueryParser.RULE_event_span);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 410;
        this.integer();
        this.state = 411;
        this.match(CEQLQueryParser.K_EVENTS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public time_span(): Time_spanContext {
    let localctx: Time_spanContext = new Time_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CEQLQueryParser.RULE_time_span);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 414;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 35, this._ctx)) {
          case 1:
            {
              this.state = 413;
              this.hour_span();
            }
            break;
        }
        this.state = 417;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
          case 1:
            {
              this.state = 416;
              this.minute_span();
            }
            break;
        }
        this.state = 420;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 55 || _la === 56) {
          {
            this.state = 419;
            this.second_span();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public hour_span(): Hour_spanContext {
    let localctx: Hour_spanContext = new Hour_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CEQLQueryParser.RULE_hour_span);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 422;
        this.number_();
        this.state = 423;
        this.match(CEQLQueryParser.K_HOURS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public minute_span(): Minute_spanContext {
    let localctx: Minute_spanContext = new Minute_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CEQLQueryParser.RULE_minute_span);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 425;
        this.number_();
        this.state = 426;
        this.match(CEQLQueryParser.K_MINUTES);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public second_span(): Second_spanContext {
    let localctx: Second_spanContext = new Second_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CEQLQueryParser.RULE_second_span);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 428;
        this.number_();
        this.state = 429;
        this.match(CEQLQueryParser.K_SECONDS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public custom_span(): Custom_spanContext {
    let localctx: Custom_spanContext = new Custom_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CEQLQueryParser.RULE_custom_span);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 431;
        this.integer();
        this.state = 432;
        this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
        this.state = 433;
        this.any_name();
        this.state = 434;
        this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public named_event(): Named_eventContext {
    let localctx: Named_eventContext = new Named_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, CEQLQueryParser.RULE_named_event);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 436;
        this.s_event_name();
        this.state = 439;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 4) {
          {
            this.state = 437;
            this.match(CEQLQueryParser.K_AS);
            this.state = 438;
            this.event_name();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public s_event_name_with_projection(): S_event_name_with_projectionContext {
    let localctx: S_event_name_with_projectionContext = new S_event_name_with_projectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CEQLQueryParser.RULE_s_event_name_with_projection);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 441;
        this.s_event_name();
        this.state = 446;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 49) {
          {
            this.state = 442;
            this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
            this.state = 443;
            this.list_of_attribute_names();
            this.state = 444;
            this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public s_event_name(): S_event_nameContext {
    let localctx: S_event_nameContext = new S_event_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, CEQLQueryParser.RULE_s_event_name);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 451;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
          case 1:
            {
              this.state = 448;
              this.stream_name();
              this.state = 449;
              this.match(CEQLQueryParser.GE);
            }
            break;
        }
        this.state = 453;
        this.event_name();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public event_name(): Event_nameContext {
    let localctx: Event_nameContext = new Event_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, CEQLQueryParser.RULE_event_name);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 455;
        this.any_name();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public atomic_cel_formula(): Atomic_cel_formulaContext;
  public atomic_cel_formula(_p: number): Atomic_cel_formulaContext;
  // @RuleVersion(0)
  public atomic_cel_formula(_p?: number): Atomic_cel_formulaContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let localctx: Atomic_cel_formulaContext = new Atomic_cel_formulaContext(this, this._ctx, _parentState);
    let _prevctx: Atomic_cel_formulaContext = localctx;
    let _startState: number = 60;
    this.enterRecursionRule(localctx, 60, CEQLQueryParser.RULE_atomic_cel_formula, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        {
          localctx = new Atomic_cel_formula_rContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 458;
          this.s_event_name();
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 465;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            {
              {
                localctx = new Atomic_cel_formula_filterContext(this, new Atomic_cel_formulaContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_atomic_cel_formula);
                this.state = 460;
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
                }
                this.state = 461;
                this.match(CEQLQueryParser.K_FILTER);
                this.state = 462;
                this.filter(0);
              }
            }
          }
          this.state = 467;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  // @RuleVersion(0)
  public stream_name(): Stream_nameContext {
    let localctx: Stream_nameContext = new Stream_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, CEQLQueryParser.RULE_stream_name);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 468;
        this.any_name();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public list_of_attribute_names(): List_of_attribute_namesContext {
    let localctx: List_of_attribute_namesContext = new List_of_attribute_namesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, CEQLQueryParser.RULE_list_of_attribute_names);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 470;
        this.attribute_name();
        this.state = 475;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 45) {
          {
            {
              this.state = 471;
              this.match(CEQLQueryParser.COMMA);
              this.state = 472;
              this.attribute_name();
            }
          }
          this.state = 477;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public attribute_name(): Attribute_nameContext {
    let localctx: Attribute_nameContext = new Attribute_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, CEQLQueryParser.RULE_attribute_name);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 478;
        this.any_name();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public integer(): IntegerContext {
    let localctx: IntegerContext = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, CEQLQueryParser.RULE_integer);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 480;
        this.match(CEQLQueryParser.INTEGER_LITERAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public double(): DoubleContext {
    let localctx: DoubleContext = new DoubleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, CEQLQueryParser.RULE_double);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 482;
        this.match(CEQLQueryParser.DOUBLE_LITERAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public number_(): NumberContext {
    let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, CEQLQueryParser.RULE_number);
    try {
      this.state = 486;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 56:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 484;
            this.integer();
          }
          break;
        case 55:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 485;
            this.double();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public string_(): StringContext {
    let localctx: StringContext = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, CEQLQueryParser.RULE_string);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 488;
        this.match(CEQLQueryParser.STRING_LITERAL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public any_name(): Any_nameContext {
    let localctx: Any_nameContext = new Any_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, CEQLQueryParser.RULE_any_name);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 490;
        this.match(CEQLQueryParser.IDENTIFIER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public keyword(): KeywordContext {
    let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, CEQLQueryParser.RULE_keyword);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 492;
        _la = this._input.LA(1);
        if (!((_la & ~0x1f) === 0 && ((1 << _la) & 4294967166) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regexp(): RegexpContext {
    let localctx: RegexpContext = new RegexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, CEQLQueryParser.RULE_regexp);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 494;
        this.match(CEQLQueryParser.REGEX_START);
        this.state = 495;
        this.regexp_alternation();
        this.state = 496;
        this.match(CEQLQueryParser.REGEX_END);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regexp_alternation(): Regexp_alternationContext {
    let localctx: Regexp_alternationContext = new Regexp_alternationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, CEQLQueryParser.RULE_regexp_alternation);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 498;
        this.regexp_exp();
        this.state = 503;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 66) {
          {
            {
              this.state = 499;
              this.match(CEQLQueryParser.REGEX_PIPE);
              this.state = 500;
              this.regexp_exp();
            }
          }
          this.state = 505;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regexp_exp(): Regexp_expContext {
    let localctx: Regexp_expContext = new Regexp_expContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, CEQLQueryParser.RULE_regexp_exp);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 507;
        this._errHandler.sync(this);
        _alt = 1;
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 506;
                  this.regexp_element();
                }
              }
              break;
            default:
              throw new NoViableAltException(this);
          }
          this.state = 509;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regexp_element(): Regexp_elementContext {
    let localctx: Regexp_elementContext = new Regexp_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, CEQLQueryParser.RULE_regexp_element);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 511;
        this.regexp_group();
        this.state = 513;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((_la - 68) & ~0x1f) === 0 && ((1 << (_la - 68)) & 225) !== 0) {
          {
            this.state = 512;
            this.quantifier();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regexp_group(): Regexp_groupContext {
    let localctx: Regexp_groupContext = new Regexp_groupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, CEQLQueryParser.RULE_regexp_group);
    try {
      this.state = 517;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 70:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 515;
            this.parenthesis();
          }
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 67:
        case 72:
        case 76:
        case 77:
        case 78:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 516;
            this.atom();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public parenthesis(): ParenthesisContext {
    let localctx: ParenthesisContext = new ParenthesisContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, CEQLQueryParser.RULE_parenthesis);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 519;
        this.match(CEQLQueryParser.REGEX_L_PAR);
        this.state = 520;
        this.regexp_alternation();
        this.state = 521;
        this.match(CEQLQueryParser.REGEX_R_PAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public quantifier(): QuantifierContext {
    let localctx: QuantifierContext = new QuantifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, CEQLQueryParser.RULE_quantifier);
    try {
      this.state = 530;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 73:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 523;
            this.match(CEQLQueryParser.REGEX_QUESTION);
          }
          break;
        case 74:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 524;
            this.match(CEQLQueryParser.REGEX_PLUS);
          }
          break;
        case 75:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 525;
            this.match(CEQLQueryParser.REGEX_STAR);
          }
          break;
        case 68:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 526;
            this.match(CEQLQueryParser.REGEX_L_CURLY);
            this.state = 527;
            this.quantity();
            this.state = 528;
            this.match(CEQLQueryParser.REGEX_R_CURLY);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public quantity(): QuantityContext {
    let localctx: QuantityContext = new QuantityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, CEQLQueryParser.RULE_quantity);
    try {
      this.state = 536;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 532;
            this.quantExact();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 533;
            this.quantRange();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 534;
            this.quantMin();
          }
          break;
        case 4:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 535;
            this.quantMax();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public quantExact(): QuantExactContext {
    let localctx: QuantExactContext = new QuantExactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, CEQLQueryParser.RULE_quantExact);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 538;
        this.regexp_number();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public quantRange(): QuantRangeContext {
    let localctx: QuantRangeContext = new QuantRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, CEQLQueryParser.RULE_quantRange);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 540;
        this.regexp_number();
        this.state = 541;
        this.match(CEQLQueryParser.REGEX_COMMA);
        this.state = 542;
        this.regexp_number();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public quantMin(): QuantMinContext {
    let localctx: QuantMinContext = new QuantMinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, CEQLQueryParser.RULE_quantMin);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 544;
        this.regexp_number();
        this.state = 545;
        this.match(CEQLQueryParser.REGEX_COMMA);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public quantMax(): QuantMaxContext {
    let localctx: QuantMaxContext = new QuantMaxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, CEQLQueryParser.RULE_quantMax);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 547;
        this.match(CEQLQueryParser.REGEX_COMMA);
        this.state = 548;
        this.regexp_number();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public atom(): AtomContext {
    let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, CEQLQueryParser.RULE_atom);
    try {
      this.state = 553;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 550;
            this.characterClass();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 551;
            this.sharedAtom();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 552;
            this.literal();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public characterClass(): CharacterClassContext {
    let localctx: CharacterClassContext = new CharacterClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, CEQLQueryParser.RULE_characterClass);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 555;
        this.match(CEQLQueryParser.REGEX_L_BRACK);
        this.state = 557;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === 76) {
          {
            this.state = 556;
            this.match(CEQLQueryParser.REGEX_HAT);
          }
        }

        this.state = 560;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 559;
              this.ccAtom();
            }
          }
          this.state = 562;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (
          ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) ||
          (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) ||
          (((_la - 64) & ~0x1f) === 0 && ((1 << (_la - 64)) & 268390399) !== 0)
        );
        this.state = 564;
        this.match(CEQLQueryParser.REGEX_R_BRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ccAtom(): CcAtomContext {
    let localctx: CcAtomContext = new CcAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, CEQLQueryParser.RULE_ccAtom);
    try {
      this.state = 569;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 566;
            this.ccRange();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 567;
            this.sharedAtom();
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 568;
            this.ccSingle();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ccRange(): CcRangeContext {
    let localctx: CcRangeContext = new CcRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, CEQLQueryParser.RULE_ccRange);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 571;
        this.ccLiteral();
        this.state = 572;
        this.match(CEQLQueryParser.REGEX_HYPHEN);
        this.state = 573;
        this.ccLiteral();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ccSingle(): CcSingleContext {
    let localctx: CcSingleContext = new CcSingleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, CEQLQueryParser.RULE_ccSingle);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 575;
        this.ccLiteral();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ccLiteral(): CcLiteralContext {
    let localctx: CcLiteralContext = new CcLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, CEQLQueryParser.RULE_ccLiteral);
    try {
      this.state = 579;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 80:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 577;
            this.ccEscapes();
          }
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 78:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 578;
            this.ccOther();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ccEscapes(): CcEscapesContext {
    let localctx: CcEscapesContext = new CcEscapesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, CEQLQueryParser.RULE_ccEscapes);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 581;
        this.match(CEQLQueryParser.REGEX_BACKSLASH);
        this.state = 582;
        _la = this._input.LA(1);
        if (!(((_la - 76) & ~0x1f) === 0 && ((1 << (_la - 76)) & 27) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public ccOther(): CcOtherContext {
    let localctx: CcOtherContext = new CcOtherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, CEQLQueryParser.RULE_ccOther);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 584;
        _la = this._input.LA(1);
        if (_la <= 0 || (((_la - 76) & ~0x1f) === 0 && ((1 << (_la - 76)) & 27) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, CEQLQueryParser.RULE_literal);
    try {
      this.state = 589;
      this._errHandler.sync(this);
      switch (this._interp.adaptivePredict(this._input, 55, this._ctx)) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 586;
            this.escapes();
          }
          break;
        case 2:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 587;
            this.match(CEQLQueryParser.REGEX_DOT);
          }
          break;
        case 3:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 588;
            this.other();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public escapes(): EscapesContext {
    let localctx: EscapesContext = new EscapesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, CEQLQueryParser.RULE_escapes);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 591;
        this.match(CEQLQueryParser.REGEX_BACKSLASH);
        this.state = 592;
        _la = this._input.LA(1);
        if (!(((_la - 66) & ~0x1f) === 0 && ((1 << (_la - 66)) & 95165) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public other(): OtherContext {
    let localctx: OtherContext = new OtherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, CEQLQueryParser.RULE_other);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 594;
        _la = this._input.LA(1);
        if (_la <= 0 || (((_la - 66) & ~0x1f) === 0 && ((1 << (_la - 66)) & 29629) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public sharedAtom(): SharedAtomContext {
    let localctx: SharedAtomContext = new SharedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, CEQLQueryParser.RULE_sharedAtom);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 596;
        _la = this._input.LA(1);
        if (!(((_la - 85) & ~0x1f) === 0 && ((1 << (_la - 85)) & 63) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public regexp_number(): Regexp_numberContext {
    let localctx: Regexp_numberContext = new Regexp_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, CEQLQueryParser.RULE_regexp_number);
    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 599;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 598;
              this.match(CEQLQueryParser.REGEX_DIGIT);
            }
          }
          this.state = 601;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === 91);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 6:
        return this.cel_formula_sempred(localctx as Cel_formulaContext, predIndex);
      case 11:
        return this.filter_sempred(localctx as FilterContext, predIndex);
      case 12:
        return this.predicate_sempred(localctx as PredicateContext, predIndex);
      case 15:
        return this.math_expr_sempred(localctx as Math_exprContext, predIndex);
      case 30:
        return this.atomic_cel_formula_sempred(localctx as Atomic_cel_formulaContext, predIndex);
    }
    return true;
  }
  private cel_formula_sempred(localctx: Cel_formulaContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 4);
      case 1:
        return this.precpred(this._ctx, 3);
      case 2:
        return this.precpred(this._ctx, 2);
      case 3:
        return this.precpred(this._ctx, 7);
      case 4:
        return this.precpred(this._ctx, 6);
      case 5:
        return this.precpred(this._ctx, 5);
      case 6:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private filter_sempred(localctx: FilterContext, predIndex: number): boolean {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 2);
      case 8:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private predicate_sempred(localctx: PredicateContext, predIndex: number): boolean {
    switch (predIndex) {
      case 9:
        return this.precpred(this._ctx, 5);
      case 10:
        return this.precpred(this._ctx, 4);
    }
    return true;
  }
  private math_expr_sempred(localctx: Math_exprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 11:
        return this.precpred(this._ctx, 2);
      case 12:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }
  private atomic_cel_formula_sempred(localctx: Atomic_cel_formulaContext, predIndex: number): boolean {
    switch (predIndex) {
      case 13:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 91, 604, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11,
    7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7,
    22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7,
    33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7,
    44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7,
    55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 1, 0, 1, 0, 5, 0, 133, 8,
    0, 10, 0, 12, 0, 136, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 3, 2, 145, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 154, 8, 2, 1, 2, 1,
    2, 3, 2, 158, 8, 2, 1, 2, 1, 2, 1, 2, 3, 2, 163, 8, 2, 1, 2, 1, 2, 3, 2, 167, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 175, 8, 3, 1, 4, 1, 4, 1, 4,
    1, 4, 1, 4, 5, 4, 182, 8, 4, 10, 4, 12, 4, 185, 9, 4, 3, 4, 187, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 193, 8, 5, 10, 5, 12, 5, 196, 9, 5, 3, 5, 198, 8, 5, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 211, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 232, 8, 6, 10, 6, 12, 6, 235, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 245, 8, 7, 1, 8, 1,
    8, 1, 8, 5, 8, 250, 8, 8, 10, 8, 12, 8, 253, 9, 8, 1, 9, 1, 9, 1, 9, 3, 9, 258, 8, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 272, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 280, 8, 11, 10, 11, 12, 11, 283, 9, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12,
    1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 308, 8, 12, 1, 12, 1,
    12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 321, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 329, 8, 12, 10, 12,
    12, 12, 332, 9, 12, 1, 13, 1, 13, 3, 13, 336, 8, 13, 1, 14, 1, 14, 1, 14, 3, 14, 341, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    3, 15, 352, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 5, 15, 360, 8, 15, 10, 15, 12, 15, 363, 9, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
    1, 16, 3, 16, 373, 8, 16, 1, 17, 1, 17, 1, 17, 5, 17, 378, 8, 17, 10, 17, 12, 17, 381, 9, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 396, 8, 17, 1, 18, 1, 18, 1, 18, 5, 18, 401, 8, 18, 10, 18, 12, 18, 404, 9, 18, 1, 19, 1, 19, 1, 19, 3, 19, 409, 8, 19,
    1, 20, 1, 20, 1, 20, 1, 21, 3, 21, 415, 8, 21, 1, 21, 3, 21, 418, 8, 21, 1, 21, 3, 21, 421, 8, 21, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24,
    1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 3, 26, 440, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 447, 8, 27, 1, 28, 1, 28, 1, 28,
    3, 28, 452, 8, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 5, 30, 464, 8, 30, 10, 30, 12, 30, 467, 9, 30, 1, 31, 1, 31, 1, 32,
    1, 32, 1, 32, 5, 32, 474, 8, 32, 10, 32, 12, 32, 477, 9, 32, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 1, 36, 1, 36, 3, 36, 487, 8, 36, 1, 37, 1, 37, 1, 38,
    1, 38, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 5, 41, 502, 8, 41, 10, 41, 12, 41, 505, 9, 41, 1, 42, 4, 42, 508, 8, 42, 11, 42, 12,
    42, 509, 1, 43, 1, 43, 3, 43, 514, 8, 43, 1, 44, 1, 44, 3, 44, 518, 8, 44, 1, 45, 1, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3,
    46, 531, 8, 46, 1, 47, 1, 47, 1, 47, 1, 47, 3, 47, 537, 8, 47, 1, 48, 1, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 52, 1,
    52, 1, 52, 3, 52, 554, 8, 52, 1, 53, 1, 53, 3, 53, 558, 8, 53, 1, 53, 4, 53, 561, 8, 53, 11, 53, 12, 53, 562, 1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 3, 54, 570,
    8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 57, 1, 57, 3, 57, 580, 8, 57, 1, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 3, 60, 590, 8, 60,
    1, 61, 1, 61, 1, 61, 1, 62, 1, 62, 1, 63, 1, 63, 1, 64, 4, 64, 600, 8, 64, 11, 64, 12, 64, 601, 1, 64, 0, 5, 12, 22, 24, 30, 60, 65, 0, 2, 4, 6, 8, 10, 12,
    14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90,
    92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 0, 10, 2, 0, 21, 21, 67, 67, 1, 0, 37, 42, 1, 0, 41, 42, 1, 0,
    33, 34, 2, 0, 32, 32, 35, 36, 2, 0, 1, 6, 8, 31, 2, 0, 76, 77, 79, 80, 5, 0, 66, 66, 68, 71, 73, 75, 78, 80, 82, 82, 4, 0, 66, 66, 68, 71, 73, 75, 78, 80,
    1, 0, 85, 90, 626, 0, 134, 1, 0, 0, 0, 2, 139, 1, 0, 0, 0, 4, 142, 1, 0, 0, 0, 6, 174, 1, 0, 0, 0, 8, 186, 1, 0, 0, 0, 10, 197, 1, 0, 0, 0, 12, 210, 1, 0,
    0, 0, 14, 236, 1, 0, 0, 0, 16, 246, 1, 0, 0, 0, 18, 257, 1, 0, 0, 0, 20, 259, 1, 0, 0, 0, 22, 271, 1, 0, 0, 0, 24, 320, 1, 0, 0, 0, 26, 335, 1, 0, 0, 0, 28,
    340, 1, 0, 0, 0, 30, 351, 1, 0, 0, 0, 32, 372, 1, 0, 0, 0, 34, 395, 1, 0, 0, 0, 36, 397, 1, 0, 0, 0, 38, 408, 1, 0, 0, 0, 40, 410, 1, 0, 0, 0, 42, 414, 1,
    0, 0, 0, 44, 422, 1, 0, 0, 0, 46, 425, 1, 0, 0, 0, 48, 428, 1, 0, 0, 0, 50, 431, 1, 0, 0, 0, 52, 436, 1, 0, 0, 0, 54, 441, 1, 0, 0, 0, 56, 451, 1, 0, 0, 0,
    58, 455, 1, 0, 0, 0, 60, 457, 1, 0, 0, 0, 62, 468, 1, 0, 0, 0, 64, 470, 1, 0, 0, 0, 66, 478, 1, 0, 0, 0, 68, 480, 1, 0, 0, 0, 70, 482, 1, 0, 0, 0, 72, 486,
    1, 0, 0, 0, 74, 488, 1, 0, 0, 0, 76, 490, 1, 0, 0, 0, 78, 492, 1, 0, 0, 0, 80, 494, 1, 0, 0, 0, 82, 498, 1, 0, 0, 0, 84, 507, 1, 0, 0, 0, 86, 511, 1, 0, 0,
    0, 88, 517, 1, 0, 0, 0, 90, 519, 1, 0, 0, 0, 92, 530, 1, 0, 0, 0, 94, 536, 1, 0, 0, 0, 96, 538, 1, 0, 0, 0, 98, 540, 1, 0, 0, 0, 100, 544, 1, 0, 0, 0, 102,
    547, 1, 0, 0, 0, 104, 553, 1, 0, 0, 0, 106, 555, 1, 0, 0, 0, 108, 569, 1, 0, 0, 0, 110, 571, 1, 0, 0, 0, 112, 575, 1, 0, 0, 0, 114, 579, 1, 0, 0, 0, 116,
    581, 1, 0, 0, 0, 118, 584, 1, 0, 0, 0, 120, 589, 1, 0, 0, 0, 122, 591, 1, 0, 0, 0, 124, 594, 1, 0, 0, 0, 126, 596, 1, 0, 0, 0, 128, 599, 1, 0, 0, 0, 130,
    133, 3, 4, 2, 0, 131, 133, 3, 2, 1, 0, 132, 130, 1, 0, 0, 0, 132, 131, 1, 0, 0, 0, 133, 136, 1, 0, 0, 0, 134, 132, 1, 0, 0, 0, 134, 135, 1, 0, 0, 0, 135,
    137, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137, 138, 5, 0, 0, 1, 138, 1, 1, 0, 0, 0, 139, 140, 5, 62, 0, 0, 140, 141, 6, 1, -1, 0, 141, 3, 1, 0, 0, 0, 142, 144,
    5, 26, 0, 0, 143, 145, 3, 6, 3, 0, 144, 143, 1, 0, 0, 0, 144, 145, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146, 147, 3, 8, 4, 0, 147, 148, 3, 10, 5, 0, 148, 149,
    5, 30, 0, 0, 149, 153, 3, 12, 6, 0, 150, 151, 5, 23, 0, 0, 151, 152, 5, 5, 0, 0, 152, 154, 3, 14, 7, 0, 153, 150, 1, 0, 0, 0, 153, 154, 1, 0, 0, 0, 154,
    157, 1, 0, 0, 0, 155, 156, 5, 31, 0, 0, 156, 158, 3, 38, 19, 0, 157, 155, 1, 0, 0, 0, 157, 158, 1, 0, 0, 0, 158, 162, 1, 0, 0, 0, 159, 160, 5, 6, 0, 0, 160,
    161, 5, 5, 0, 0, 161, 163, 3, 18, 9, 0, 162, 159, 1, 0, 0, 0, 162, 163, 1, 0, 0, 0, 163, 166, 1, 0, 0, 0, 164, 165, 5, 7, 0, 0, 165, 167, 3, 20, 10, 0, 166,
    164, 1, 0, 0, 0, 166, 167, 1, 0, 0, 0, 167, 5, 1, 0, 0, 0, 168, 175, 5, 1, 0, 0, 169, 175, 5, 3, 0, 0, 170, 175, 5, 15, 0, 0, 171, 175, 5, 17, 0, 0, 172,
    175, 5, 19, 0, 0, 173, 175, 5, 28, 0, 0, 174, 168, 1, 0, 0, 0, 174, 169, 1, 0, 0, 0, 174, 170, 1, 0, 0, 0, 174, 171, 1, 0, 0, 0, 174, 172, 1, 0, 0, 0, 174,
    173, 1, 0, 0, 0, 175, 7, 1, 0, 0, 0, 176, 187, 5, 35, 0, 0, 177, 187, 5, 20, 0, 0, 178, 183, 3, 54, 27, 0, 179, 180, 5, 45, 0, 0, 180, 182, 3, 54, 27, 0,
    181, 179, 1, 0, 0, 0, 182, 185, 1, 0, 0, 0, 183, 181, 1, 0, 0, 0, 183, 184, 1, 0, 0, 0, 184, 187, 1, 0, 0, 0, 185, 183, 1, 0, 0, 0, 186, 176, 1, 0, 0, 0,
    186, 177, 1, 0, 0, 0, 186, 178, 1, 0, 0, 0, 187, 9, 1, 0, 0, 0, 188, 189, 5, 12, 0, 0, 189, 194, 3, 62, 31, 0, 190, 191, 5, 45, 0, 0, 191, 193, 3, 62, 31,
    0, 192, 190, 1, 0, 0, 0, 193, 196, 1, 0, 0, 0, 194, 192, 1, 0, 0, 0, 194, 195, 1, 0, 0, 0, 195, 198, 1, 0, 0, 0, 196, 194, 1, 0, 0, 0, 197, 188, 1, 0, 0, 0,
    197, 198, 1, 0, 0, 0, 198, 11, 1, 0, 0, 0, 199, 200, 6, 6, -1, 0, 200, 201, 5, 47, 0, 0, 201, 202, 3, 12, 6, 0, 202, 203, 5, 48, 0, 0, 203, 211, 1, 0, 0, 0,
    204, 211, 3, 56, 28, 0, 205, 206, 7, 0, 0, 0, 206, 207, 5, 47, 0, 0, 207, 208, 3, 60, 30, 0, 208, 209, 5, 48, 0, 0, 209, 211, 1, 0, 0, 0, 210, 199, 1, 0, 0,
    0, 210, 204, 1, 0, 0, 0, 210, 205, 1, 0, 0, 0, 211, 233, 1, 0, 0, 0, 212, 213, 10, 4, 0, 0, 213, 214, 5, 43, 0, 0, 214, 232, 3, 12, 6, 5, 215, 216, 10, 3,
    0, 0, 216, 217, 5, 44, 0, 0, 217, 232, 3, 12, 6, 4, 218, 219, 10, 2, 0, 0, 219, 220, 5, 22, 0, 0, 220, 232, 3, 12, 6, 3, 221, 222, 10, 7, 0, 0, 222, 223, 5,
    4, 0, 0, 223, 232, 3, 58, 29, 0, 224, 225, 10, 6, 0, 0, 225, 232, 5, 33, 0, 0, 226, 227, 10, 5, 0, 0, 227, 232, 5, 53, 0, 0, 228, 229, 10, 1, 0, 0, 229,
    230, 5, 11, 0, 0, 230, 232, 3, 22, 11, 0, 231, 212, 1, 0, 0, 0, 231, 215, 1, 0, 0, 0, 231, 218, 1, 0, 0, 0, 231, 221, 1, 0, 0, 0, 231, 224, 1, 0, 0, 0, 231,
    226, 1, 0, 0, 0, 231, 228, 1, 0, 0, 0, 232, 235, 1, 0, 0, 0, 233, 231, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 13, 1, 0, 0, 0, 235, 233, 1, 0, 0, 0, 236,
    237, 5, 49, 0, 0, 237, 238, 3, 16, 8, 0, 238, 244, 5, 50, 0, 0, 239, 240, 5, 45, 0, 0, 240, 241, 5, 49, 0, 0, 241, 242, 3, 16, 8, 0, 242, 243, 5, 50, 0, 0,
    243, 245, 1, 0, 0, 0, 244, 239, 1, 0, 0, 0, 244, 245, 1, 0, 0, 0, 245, 15, 1, 0, 0, 0, 246, 251, 3, 66, 33, 0, 247, 248, 5, 45, 0, 0, 248, 250, 3, 66, 33,
    0, 249, 247, 1, 0, 0, 0, 250, 253, 1, 0, 0, 0, 251, 249, 1, 0, 0, 0, 251, 252, 1, 0, 0, 0, 252, 17, 1, 0, 0, 0, 253, 251, 1, 0, 0, 0, 254, 258, 5, 3, 0, 0,
    255, 258, 5, 23, 0, 0, 256, 258, 5, 20, 0, 0, 257, 254, 1, 0, 0, 0, 257, 255, 1, 0, 0, 0, 257, 256, 1, 0, 0, 0, 258, 19, 1, 0, 0, 0, 259, 260, 3, 68, 34, 0,
    260, 21, 1, 0, 0, 0, 261, 262, 6, 11, -1, 0, 262, 263, 5, 47, 0, 0, 263, 264, 3, 22, 11, 0, 264, 265, 5, 48, 0, 0, 265, 272, 1, 0, 0, 0, 266, 267, 3, 56,
    28, 0, 267, 268, 5, 49, 0, 0, 268, 269, 3, 24, 12, 0, 269, 270, 5, 50, 0, 0, 270, 272, 1, 0, 0, 0, 271, 261, 1, 0, 0, 0, 271, 266, 1, 0, 0, 0, 272, 281, 1,
    0, 0, 0, 273, 274, 10, 2, 0, 0, 274, 275, 5, 2, 0, 0, 275, 280, 3, 22, 11, 3, 276, 277, 10, 1, 0, 0, 277, 278, 5, 22, 0, 0, 278, 280, 3, 22, 11, 2, 279,
    273, 1, 0, 0, 0, 279, 276, 1, 0, 0, 0, 280, 283, 1, 0, 0, 0, 281, 279, 1, 0, 0, 0, 281, 282, 1, 0, 0, 0, 282, 23, 1, 0, 0, 0, 283, 281, 1, 0, 0, 0, 284,
    285, 6, 12, -1, 0, 285, 286, 5, 47, 0, 0, 286, 287, 3, 24, 12, 0, 287, 288, 5, 48, 0, 0, 288, 321, 1, 0, 0, 0, 289, 290, 5, 21, 0, 0, 290, 321, 3, 24, 12,
    8, 291, 292, 3, 30, 15, 0, 292, 293, 7, 1, 0, 0, 293, 294, 3, 30, 15, 0, 294, 321, 1, 0, 0, 0, 295, 296, 3, 26, 13, 0, 296, 297, 7, 2, 0, 0, 297, 298, 3,
    28, 14, 0, 298, 321, 1, 0, 0, 0, 299, 300, 3, 66, 33, 0, 300, 301, 5, 16, 0, 0, 301, 302, 3, 80, 40, 0, 302, 321, 1, 0, 0, 0, 303, 307, 3, 66, 33, 0, 304,
    308, 5, 14, 0, 0, 305, 306, 5, 21, 0, 0, 306, 308, 5, 14, 0, 0, 307, 304, 1, 0, 0, 0, 307, 305, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0, 309, 310, 3, 32, 16, 0,
    310, 321, 1, 0, 0, 0, 311, 312, 3, 30, 15, 0, 312, 313, 5, 14, 0, 0, 313, 314, 5, 24, 0, 0, 314, 315, 5, 47, 0, 0, 315, 316, 3, 30, 15, 0, 316, 317, 5, 45,
    0, 0, 317, 318, 3, 30, 15, 0, 318, 319, 5, 48, 0, 0, 319, 321, 1, 0, 0, 0, 320, 284, 1, 0, 0, 0, 320, 289, 1, 0, 0, 0, 320, 291, 1, 0, 0, 0, 320, 295, 1, 0,
    0, 0, 320, 299, 1, 0, 0, 0, 320, 303, 1, 0, 0, 0, 320, 311, 1, 0, 0, 0, 321, 330, 1, 0, 0, 0, 322, 323, 10, 5, 0, 0, 323, 324, 5, 2, 0, 0, 324, 329, 3, 24,
    12, 6, 325, 326, 10, 4, 0, 0, 326, 327, 5, 22, 0, 0, 327, 329, 3, 24, 12, 5, 328, 322, 1, 0, 0, 0, 328, 325, 1, 0, 0, 0, 329, 332, 1, 0, 0, 0, 330, 328, 1,
    0, 0, 0, 330, 331, 1, 0, 0, 0, 331, 25, 1, 0, 0, 0, 332, 330, 1, 0, 0, 0, 333, 336, 3, 74, 37, 0, 334, 336, 3, 66, 33, 0, 335, 333, 1, 0, 0, 0, 335, 334, 1,
    0, 0, 0, 336, 27, 1, 0, 0, 0, 337, 341, 3, 74, 37, 0, 338, 341, 3, 66, 33, 0, 339, 341, 3, 80, 40, 0, 340, 337, 1, 0, 0, 0, 340, 338, 1, 0, 0, 0, 340, 339,
    1, 0, 0, 0, 341, 29, 1, 0, 0, 0, 342, 343, 6, 15, -1, 0, 343, 344, 5, 47, 0, 0, 344, 345, 3, 30, 15, 0, 345, 346, 5, 48, 0, 0, 346, 352, 1, 0, 0, 0, 347,
    352, 3, 72, 36, 0, 348, 352, 3, 66, 33, 0, 349, 350, 7, 3, 0, 0, 350, 352, 3, 30, 15, 3, 351, 342, 1, 0, 0, 0, 351, 347, 1, 0, 0, 0, 351, 348, 1, 0, 0, 0,
    351, 349, 1, 0, 0, 0, 352, 361, 1, 0, 0, 0, 353, 354, 10, 2, 0, 0, 354, 355, 7, 4, 0, 0, 355, 360, 3, 30, 15, 3, 356, 357, 10, 1, 0, 0, 357, 358, 7, 3, 0,
    0, 358, 360, 3, 30, 15, 2, 359, 353, 1, 0, 0, 0, 359, 356, 1, 0, 0, 0, 360, 363, 1, 0, 0, 0, 361, 359, 1, 0, 0, 0, 361, 362, 1, 0, 0, 0, 362, 31, 1, 0, 0,
    0, 363, 361, 1, 0, 0, 0, 364, 365, 5, 51, 0, 0, 365, 366, 3, 34, 17, 0, 366, 367, 5, 52, 0, 0, 367, 373, 1, 0, 0, 0, 368, 369, 5, 51, 0, 0, 369, 370, 3, 36,
    18, 0, 370, 371, 5, 52, 0, 0, 371, 373, 1, 0, 0, 0, 372, 364, 1, 0, 0, 0, 372, 368, 1, 0, 0, 0, 373, 33, 1, 0, 0, 0, 374, 379, 3, 72, 36, 0, 375, 376, 5,
    45, 0, 0, 376, 378, 3, 72, 36, 0, 377, 375, 1, 0, 0, 0, 378, 381, 1, 0, 0, 0, 379, 377, 1, 0, 0, 0, 379, 380, 1, 0, 0, 0, 380, 396, 1, 0, 0, 0, 381, 379, 1,
    0, 0, 0, 382, 383, 3, 68, 34, 0, 383, 384, 5, 46, 0, 0, 384, 385, 3, 68, 34, 0, 385, 396, 1, 0, 0, 0, 386, 387, 3, 70, 35, 0, 387, 388, 5, 46, 0, 0, 388,
    389, 3, 70, 35, 0, 389, 396, 1, 0, 0, 0, 390, 391, 3, 72, 36, 0, 391, 392, 5, 46, 0, 0, 392, 396, 1, 0, 0, 0, 393, 394, 5, 46, 0, 0, 394, 396, 3, 72, 36, 0,
    395, 374, 1, 0, 0, 0, 395, 382, 1, 0, 0, 0, 395, 386, 1, 0, 0, 0, 395, 390, 1, 0, 0, 0, 395, 393, 1, 0, 0, 0, 396, 35, 1, 0, 0, 0, 397, 402, 3, 74, 37, 0,
    398, 399, 5, 45, 0, 0, 399, 401, 3, 74, 37, 0, 400, 398, 1, 0, 0, 0, 401, 404, 1, 0, 0, 0, 402, 400, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 37, 1, 0, 0, 0,
    404, 402, 1, 0, 0, 0, 405, 409, 3, 40, 20, 0, 406, 409, 3, 42, 21, 0, 407, 409, 3, 50, 25, 0, 408, 405, 1, 0, 0, 0, 408, 406, 1, 0, 0, 0, 408, 407, 1, 0, 0,
    0, 409, 39, 1, 0, 0, 0, 410, 411, 3, 68, 34, 0, 411, 412, 5, 10, 0, 0, 412, 41, 1, 0, 0, 0, 413, 415, 3, 44, 22, 0, 414, 413, 1, 0, 0, 0, 414, 415, 1, 0, 0,
    0, 415, 417, 1, 0, 0, 0, 416, 418, 3, 46, 23, 0, 417, 416, 1, 0, 0, 0, 417, 418, 1, 0, 0, 0, 418, 420, 1, 0, 0, 0, 419, 421, 3, 48, 24, 0, 420, 419, 1, 0,
    0, 0, 420, 421, 1, 0, 0, 0, 421, 43, 1, 0, 0, 0, 422, 423, 3, 72, 36, 0, 423, 424, 5, 13, 0, 0, 424, 45, 1, 0, 0, 0, 425, 426, 3, 72, 36, 0, 426, 427, 5,
    18, 0, 0, 427, 47, 1, 0, 0, 0, 428, 429, 3, 72, 36, 0, 429, 430, 5, 25, 0, 0, 430, 49, 1, 0, 0, 0, 431, 432, 3, 68, 34, 0, 432, 433, 5, 49, 0, 0, 433, 434,
    3, 76, 38, 0, 434, 435, 5, 50, 0, 0, 435, 51, 1, 0, 0, 0, 436, 439, 3, 56, 28, 0, 437, 438, 5, 4, 0, 0, 438, 440, 3, 58, 29, 0, 439, 437, 1, 0, 0, 0, 439,
    440, 1, 0, 0, 0, 440, 53, 1, 0, 0, 0, 441, 446, 3, 56, 28, 0, 442, 443, 5, 49, 0, 0, 443, 444, 3, 64, 32, 0, 444, 445, 5, 50, 0, 0, 445, 447, 1, 0, 0, 0,
    446, 442, 1, 0, 0, 0, 446, 447, 1, 0, 0, 0, 447, 55, 1, 0, 0, 0, 448, 449, 3, 62, 31, 0, 449, 450, 5, 39, 0, 0, 450, 452, 1, 0, 0, 0, 451, 448, 1, 0, 0, 0,
    451, 452, 1, 0, 0, 0, 452, 453, 1, 0, 0, 0, 453, 454, 3, 58, 29, 0, 454, 57, 1, 0, 0, 0, 455, 456, 3, 76, 38, 0, 456, 59, 1, 0, 0, 0, 457, 458, 6, 30, -1,
    0, 458, 459, 3, 56, 28, 0, 459, 465, 1, 0, 0, 0, 460, 461, 10, 1, 0, 0, 461, 462, 5, 11, 0, 0, 462, 464, 3, 22, 11, 0, 463, 460, 1, 0, 0, 0, 464, 467, 1, 0,
    0, 0, 465, 463, 1, 0, 0, 0, 465, 466, 1, 0, 0, 0, 466, 61, 1, 0, 0, 0, 467, 465, 1, 0, 0, 0, 468, 469, 3, 76, 38, 0, 469, 63, 1, 0, 0, 0, 470, 475, 3, 66,
    33, 0, 471, 472, 5, 45, 0, 0, 472, 474, 3, 66, 33, 0, 473, 471, 1, 0, 0, 0, 474, 477, 1, 0, 0, 0, 475, 473, 1, 0, 0, 0, 475, 476, 1, 0, 0, 0, 476, 65, 1, 0,
    0, 0, 477, 475, 1, 0, 0, 0, 478, 479, 3, 76, 38, 0, 479, 67, 1, 0, 0, 0, 480, 481, 5, 56, 0, 0, 481, 69, 1, 0, 0, 0, 482, 483, 5, 55, 0, 0, 483, 71, 1, 0,
    0, 0, 484, 487, 3, 68, 34, 0, 485, 487, 3, 70, 35, 0, 486, 484, 1, 0, 0, 0, 486, 485, 1, 0, 0, 0, 487, 73, 1, 0, 0, 0, 488, 489, 5, 58, 0, 0, 489, 75, 1, 0,
    0, 0, 490, 491, 5, 54, 0, 0, 491, 77, 1, 0, 0, 0, 492, 493, 7, 5, 0, 0, 493, 79, 1, 0, 0, 0, 494, 495, 5, 63, 0, 0, 495, 496, 3, 82, 41, 0, 496, 497, 5, 64,
    0, 0, 497, 81, 1, 0, 0, 0, 498, 503, 3, 84, 42, 0, 499, 500, 5, 66, 0, 0, 500, 502, 3, 84, 42, 0, 501, 499, 1, 0, 0, 0, 502, 505, 1, 0, 0, 0, 503, 501, 1,
    0, 0, 0, 503, 504, 1, 0, 0, 0, 504, 83, 1, 0, 0, 0, 505, 503, 1, 0, 0, 0, 506, 508, 3, 86, 43, 0, 507, 506, 1, 0, 0, 0, 508, 509, 1, 0, 0, 0, 509, 507, 1,
    0, 0, 0, 509, 510, 1, 0, 0, 0, 510, 85, 1, 0, 0, 0, 511, 513, 3, 88, 44, 0, 512, 514, 3, 92, 46, 0, 513, 512, 1, 0, 0, 0, 513, 514, 1, 0, 0, 0, 514, 87, 1,
    0, 0, 0, 515, 518, 3, 90, 45, 0, 516, 518, 3, 104, 52, 0, 517, 515, 1, 0, 0, 0, 517, 516, 1, 0, 0, 0, 518, 89, 1, 0, 0, 0, 519, 520, 5, 70, 0, 0, 520, 521,
    3, 82, 41, 0, 521, 522, 5, 71, 0, 0, 522, 91, 1, 0, 0, 0, 523, 531, 5, 73, 0, 0, 524, 531, 5, 74, 0, 0, 525, 531, 5, 75, 0, 0, 526, 527, 5, 68, 0, 0, 527,
    528, 3, 94, 47, 0, 528, 529, 5, 69, 0, 0, 529, 531, 1, 0, 0, 0, 530, 523, 1, 0, 0, 0, 530, 524, 1, 0, 0, 0, 530, 525, 1, 0, 0, 0, 530, 526, 1, 0, 0, 0, 531,
    93, 1, 0, 0, 0, 532, 537, 3, 96, 48, 0, 533, 537, 3, 98, 49, 0, 534, 537, 3, 100, 50, 0, 535, 537, 3, 102, 51, 0, 536, 532, 1, 0, 0, 0, 536, 533, 1, 0, 0,
    0, 536, 534, 1, 0, 0, 0, 536, 535, 1, 0, 0, 0, 537, 95, 1, 0, 0, 0, 538, 539, 3, 128, 64, 0, 539, 97, 1, 0, 0, 0, 540, 541, 3, 128, 64, 0, 541, 542, 5, 72,
    0, 0, 542, 543, 3, 128, 64, 0, 543, 99, 1, 0, 0, 0, 544, 545, 3, 128, 64, 0, 545, 546, 5, 72, 0, 0, 546, 101, 1, 0, 0, 0, 547, 548, 5, 72, 0, 0, 548, 549,
    3, 128, 64, 0, 549, 103, 1, 0, 0, 0, 550, 554, 3, 106, 53, 0, 551, 554, 3, 126, 63, 0, 552, 554, 3, 120, 60, 0, 553, 550, 1, 0, 0, 0, 553, 551, 1, 0, 0, 0,
    553, 552, 1, 0, 0, 0, 554, 105, 1, 0, 0, 0, 555, 557, 5, 78, 0, 0, 556, 558, 5, 76, 0, 0, 557, 556, 1, 0, 0, 0, 557, 558, 1, 0, 0, 0, 558, 560, 1, 0, 0, 0,
    559, 561, 3, 108, 54, 0, 560, 559, 1, 0, 0, 0, 561, 562, 1, 0, 0, 0, 562, 560, 1, 0, 0, 0, 562, 563, 1, 0, 0, 0, 563, 564, 1, 0, 0, 0, 564, 565, 5, 79, 0,
    0, 565, 107, 1, 0, 0, 0, 566, 570, 3, 110, 55, 0, 567, 570, 3, 126, 63, 0, 568, 570, 3, 112, 56, 0, 569, 566, 1, 0, 0, 0, 569, 567, 1, 0, 0, 0, 569, 568, 1,
    0, 0, 0, 570, 109, 1, 0, 0, 0, 571, 572, 3, 114, 57, 0, 572, 573, 5, 77, 0, 0, 573, 574, 3, 114, 57, 0, 574, 111, 1, 0, 0, 0, 575, 576, 3, 114, 57, 0, 576,
    113, 1, 0, 0, 0, 577, 580, 3, 116, 58, 0, 578, 580, 3, 118, 59, 0, 579, 577, 1, 0, 0, 0, 579, 578, 1, 0, 0, 0, 580, 115, 1, 0, 0, 0, 581, 582, 5, 80, 0, 0,
    582, 583, 7, 6, 0, 0, 583, 117, 1, 0, 0, 0, 584, 585, 8, 6, 0, 0, 585, 119, 1, 0, 0, 0, 586, 590, 3, 122, 61, 0, 587, 590, 5, 82, 0, 0, 588, 590, 3, 124,
    62, 0, 589, 586, 1, 0, 0, 0, 589, 587, 1, 0, 0, 0, 589, 588, 1, 0, 0, 0, 590, 121, 1, 0, 0, 0, 591, 592, 5, 80, 0, 0, 592, 593, 7, 7, 0, 0, 593, 123, 1, 0,
    0, 0, 594, 595, 8, 8, 0, 0, 595, 125, 1, 0, 0, 0, 596, 597, 7, 9, 0, 0, 597, 127, 1, 0, 0, 0, 598, 600, 5, 91, 0, 0, 599, 598, 1, 0, 0, 0, 600, 601, 1, 0,
    0, 0, 601, 599, 1, 0, 0, 0, 601, 602, 1, 0, 0, 0, 602, 129, 1, 0, 0, 0, 57, 132, 134, 144, 153, 157, 162, 166, 174, 183, 186, 194, 197, 210, 231, 233, 244,
    251, 257, 271, 279, 281, 307, 320, 328, 330, 335, 340, 351, 359, 361, 372, 379, 395, 402, 408, 414, 417, 420, 439, 446, 451, 465, 475, 486, 503, 509, 513,
    517, 530, 536, 553, 557, 562, 569, 579, 589, 601,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!CEQLQueryParser.__ATN) {
      CEQLQueryParser.__ATN = new ATNDeserializer().deserialize(CEQLQueryParser._serializedATN);
    }

    return CEQLQueryParser.__ATN;
  }

  static DecisionsToDFA = CEQLQueryParser._ATN.decisionToState.map((ds: DecisionState, index: number) => new DFA(ds, index));
}

export class ParseContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public EOF(): TerminalNode {
    return this.getToken(CEQLQueryParser.EOF, 0);
  }
  public core_query_list(): Core_queryContext[] {
    return this.getTypedRuleContexts(Core_queryContext) as Core_queryContext[];
  }
  public core_query(i: number): Core_queryContext {
    return this.getTypedRuleContext(Core_queryContext, i) as Core_queryContext;
  }
  public error_list(): ErrorContext[] {
    return this.getTypedRuleContexts(ErrorContext) as ErrorContext[];
  }
  public error(i: number): ErrorContext {
    return this.getTypedRuleContext(ErrorContext, i) as ErrorContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_parse;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterParse) {
      listener.enterParse(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitParse) {
      listener.exitParse(this);
    }
  }
}

export class ErrorContext extends ParserRuleContext {
  public _UNEXPECTED_CHAR!: Token;
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public UNEXPECTED_CHAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.UNEXPECTED_CHAR, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_error;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterError) {
      listener.enterError(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitError) {
      listener.exitError(this);
    }
  }
}

export class Core_queryContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public K_SELECT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_SELECT, 0);
  }
  public list_of_variables(): List_of_variablesContext {
    return this.getTypedRuleContext(List_of_variablesContext, 0) as List_of_variablesContext;
  }
  public from_clause(): From_clauseContext {
    return this.getTypedRuleContext(From_clauseContext, 0) as From_clauseContext;
  }
  public K_WHERE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_WHERE, 0);
  }
  public cel_formula(): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, 0) as Cel_formulaContext;
  }
  public selection_strategy(): Selection_strategyContext {
    return this.getTypedRuleContext(Selection_strategyContext, 0) as Selection_strategyContext;
  }
  public K_PARTITION(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
  }
  public K_BY_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.K_BY);
  }
  public K_BY(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.K_BY, i);
  }
  public partition_list(): Partition_listContext {
    return this.getTypedRuleContext(Partition_listContext, 0) as Partition_listContext;
  }
  public K_WITHIN(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_WITHIN, 0);
  }
  public time_window(): Time_windowContext {
    return this.getTypedRuleContext(Time_windowContext, 0) as Time_windowContext;
  }
  public K_CONSUME(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_CONSUME, 0);
  }
  public consumption_policy(): Consumption_policyContext {
    return this.getTypedRuleContext(Consumption_policyContext, 0) as Consumption_policyContext;
  }
  public K_LIMIT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_LIMIT, 0);
  }
  public limit(): LimitContext {
    return this.getTypedRuleContext(LimitContext, 0) as LimitContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_core_query;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCore_query) {
      listener.enterCore_query(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCore_query) {
      listener.exitCore_query(this);
    }
  }
}

export class Selection_strategyContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_selection_strategy;
  }
  public copyFrom(ctx: Selection_strategyContext): void {
    super.copyFrom(ctx);
  }
}
export class Ss_lastContext extends Selection_strategyContext {
  constructor(parser: CEQLQueryParser, ctx: Selection_strategyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_LAST(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_LAST, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSs_last) {
      listener.enterSs_last(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSs_last) {
      listener.exitSs_last(this);
    }
  }
}
export class Ss_strictContext extends Selection_strategyContext {
  constructor(parser: CEQLQueryParser, ctx: Selection_strategyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_STRICT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_STRICT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSs_strict) {
      listener.enterSs_strict(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSs_strict) {
      listener.exitSs_strict(this);
    }
  }
}
export class Ss_anyContext extends Selection_strategyContext {
  constructor(parser: CEQLQueryParser, ctx: Selection_strategyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_ANY(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_ANY, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSs_any) {
      listener.enterSs_any(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSs_any) {
      listener.exitSs_any(this);
    }
  }
}
export class Ss_nextContext extends Selection_strategyContext {
  constructor(parser: CEQLQueryParser, ctx: Selection_strategyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_NEXT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NEXT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSs_next) {
      listener.enterSs_next(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSs_next) {
      listener.exitSs_next(this);
    }
  }
}
export class Ss_maxContext extends Selection_strategyContext {
  constructor(parser: CEQLQueryParser, ctx: Selection_strategyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_MAX(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_MAX, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSs_max) {
      listener.enterSs_max(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSs_max) {
      listener.exitSs_max(this);
    }
  }
}
export class Ss_allContext extends Selection_strategyContext {
  constructor(parser: CEQLQueryParser, ctx: Selection_strategyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_ALL(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_ALL, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSs_all) {
      listener.enterSs_all(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSs_all) {
      listener.exitSs_all(this);
    }
  }
}

export class List_of_variablesContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_list_of_variables;
  }
  public copyFrom(ctx: List_of_variablesContext): void {
    super.copyFrom(ctx);
  }
}
export class S_starContext extends List_of_variablesContext {
  constructor(parser: CEQLQueryParser, ctx: List_of_variablesContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public STAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.STAR, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterS_star) {
      listener.enterS_star(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitS_star) {
      listener.exitS_star(this);
    }
  }
}
export class S_event_name_with_projection_listContext extends List_of_variablesContext {
  constructor(parser: CEQLQueryParser, ctx: List_of_variablesContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public s_event_name_with_projection_list(): S_event_name_with_projectionContext[] {
    return this.getTypedRuleContexts(S_event_name_with_projectionContext) as S_event_name_with_projectionContext[];
  }
  public s_event_name_with_projection(i: number): S_event_name_with_projectionContext {
    return this.getTypedRuleContext(S_event_name_with_projectionContext, i) as S_event_name_with_projectionContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, i);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterS_event_name_with_projection_list) {
      listener.enterS_event_name_with_projection_list(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitS_event_name_with_projection_list) {
      listener.exitS_event_name_with_projection_list(this);
    }
  }
}
export class S_noneContext extends List_of_variablesContext {
  constructor(parser: CEQLQueryParser, ctx: List_of_variablesContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_NONE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NONE, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterS_none) {
      listener.enterS_none(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitS_none) {
      listener.exitS_none(this);
    }
  }
}

export class From_clauseContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public K_FROM(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_FROM, 0);
  }
  public stream_name_list(): Stream_nameContext[] {
    return this.getTypedRuleContexts(Stream_nameContext) as Stream_nameContext[];
  }
  public stream_name(i: number): Stream_nameContext {
    return this.getTypedRuleContext(Stream_nameContext, i) as Stream_nameContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_from_clause;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterFrom_clause) {
      listener.enterFrom_clause(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitFrom_clause) {
      listener.exitFrom_clause(this);
    }
  }
}

export class Cel_formulaContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_cel_formula;
  }
  public copyFrom(ctx: Cel_formulaContext): void {
    super.copyFrom(ctx);
  }
}
export class Contiguous_sequencing_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula_list(): Cel_formulaContext[] {
    return this.getTypedRuleContexts(Cel_formulaContext) as Cel_formulaContext[];
  }
  public cel_formula(i: number): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, i) as Cel_formulaContext;
  }
  public COLON(): TerminalNode {
    return this.getToken(CEQLQueryParser.COLON, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterContiguous_sequencing_cel_formula) {
      listener.enterContiguous_sequencing_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitContiguous_sequencing_cel_formula) {
      listener.exitContiguous_sequencing_cel_formula(this);
    }
  }
}
export class Not_event_type_atomic_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }
  public atomic_cel_formula(): Atomic_cel_formulaContext {
    return this.getTypedRuleContext(Atomic_cel_formulaContext, 0) as Atomic_cel_formulaContext;
  }
  public RIGHT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }
  public K_NOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }
  public REGEX_EXCLAMAITON(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_EXCLAMAITON, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNot_event_type_atomic_cel_formula) {
      listener.enterNot_event_type_atomic_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNot_event_type_atomic_cel_formula) {
      listener.exitNot_event_type_atomic_cel_formula(this);
    }
  }
}
export class Event_type_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public s_event_name(): S_event_nameContext {
    return this.getTypedRuleContext(S_event_nameContext, 0) as S_event_nameContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterEvent_type_cel_formula) {
      listener.enterEvent_type_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitEvent_type_cel_formula) {
      listener.exitEvent_type_cel_formula(this);
    }
  }
}
export class Contiguous_iteration_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula(): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, 0) as Cel_formulaContext;
  }
  public COLON_PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.COLON_PLUS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterContiguous_iteration_cel_formula) {
      listener.enterContiguous_iteration_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitContiguous_iteration_cel_formula) {
      listener.exitContiguous_iteration_cel_formula(this);
    }
  }
}
export class Par_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }
  public cel_formula(): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, 0) as Cel_formulaContext;
  }
  public RIGHT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterPar_cel_formula) {
      listener.enterPar_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitPar_cel_formula) {
      listener.exitPar_cel_formula(this);
    }
  }
}
export class Filter_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula(): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, 0) as Cel_formulaContext;
  }
  public K_FILTER(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_FILTER, 0);
  }
  public filter(): FilterContext {
    return this.getTypedRuleContext(FilterContext, 0) as FilterContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterFilter_cel_formula) {
      listener.enterFilter_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitFilter_cel_formula) {
      listener.exitFilter_cel_formula(this);
    }
  }
}
export class Or_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula_list(): Cel_formulaContext[] {
    return this.getTypedRuleContexts(Cel_formulaContext) as Cel_formulaContext[];
  }
  public cel_formula(i: number): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, i) as Cel_formulaContext;
  }
  public K_OR(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterOr_cel_formula) {
      listener.enterOr_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitOr_cel_formula) {
      listener.exitOr_cel_formula(this);
    }
  }
}
export class As_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula(): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, 0) as Cel_formulaContext;
  }
  public K_AS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_AS, 0);
  }
  public event_name(): Event_nameContext {
    return this.getTypedRuleContext(Event_nameContext, 0) as Event_nameContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAs_cel_formula) {
      listener.enterAs_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAs_cel_formula) {
      listener.exitAs_cel_formula(this);
    }
  }
}
export class Non_contiguous_sequencing_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula_list(): Cel_formulaContext[] {
    return this.getTypedRuleContexts(Cel_formulaContext) as Cel_formulaContext[];
  }
  public cel_formula(i: number): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, i) as Cel_formulaContext;
  }
  public SEMICOLON(): TerminalNode {
    return this.getToken(CEQLQueryParser.SEMICOLON, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNon_contiguous_sequencing_cel_formula) {
      listener.enterNon_contiguous_sequencing_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNon_contiguous_sequencing_cel_formula) {
      listener.exitNon_contiguous_sequencing_cel_formula(this);
    }
  }
}
export class Non_contiguous_iteration_cel_formulaContext extends Cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public cel_formula(): Cel_formulaContext {
    return this.getTypedRuleContext(Cel_formulaContext, 0) as Cel_formulaContext;
  }
  public PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.PLUS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNon_contiguous_iteration_cel_formula) {
      listener.enterNon_contiguous_iteration_cel_formula(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNon_contiguous_iteration_cel_formula) {
      listener.exitNon_contiguous_iteration_cel_formula(this);
    }
  }
}

export class Partition_listContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LEFT_SQUARE_BRACKET_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.LEFT_SQUARE_BRACKET);
  }
  public LEFT_SQUARE_BRACKET(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, i);
  }
  public attribute_list_list(): Attribute_listContext[] {
    return this.getTypedRuleContexts(Attribute_listContext) as Attribute_listContext[];
  }
  public attribute_list(i: number): Attribute_listContext {
    return this.getTypedRuleContext(Attribute_listContext, i) as Attribute_listContext;
  }
  public RIGHT_SQUARE_BRACKET_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
  }
  public RIGHT_SQUARE_BRACKET(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, i);
  }
  public COMMA(): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_partition_list;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterPartition_list) {
      listener.enterPartition_list(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitPartition_list) {
      listener.exitPartition_list(this);
    }
  }
}

export class Attribute_listContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public attribute_name_list(): Attribute_nameContext[] {
    return this.getTypedRuleContexts(Attribute_nameContext) as Attribute_nameContext[];
  }
  public attribute_name(i: number): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, i) as Attribute_nameContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_attribute_list;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAttribute_list) {
      listener.enterAttribute_list(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAttribute_list) {
      listener.exitAttribute_list(this);
    }
  }
}

export class Consumption_policyContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_consumption_policy;
  }
  public copyFrom(ctx: Consumption_policyContext): void {
    super.copyFrom(ctx);
  }
}
export class Cp_partitionContext extends Consumption_policyContext {
  constructor(parser: CEQLQueryParser, ctx: Consumption_policyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_PARTITION(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCp_partition) {
      listener.enterCp_partition(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCp_partition) {
      listener.exitCp_partition(this);
    }
  }
}
export class Cp_anyContext extends Consumption_policyContext {
  constructor(parser: CEQLQueryParser, ctx: Consumption_policyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_ANY(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_ANY, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCp_any) {
      listener.enterCp_any(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCp_any) {
      listener.exitCp_any(this);
    }
  }
}
export class Cp_noneContext extends Consumption_policyContext {
  constructor(parser: CEQLQueryParser, ctx: Consumption_policyContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_NONE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NONE, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCp_none) {
      listener.enterCp_none(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCp_none) {
      listener.exitCp_none(this);
    }
  }
}

export class LimitContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_limit;
  }
  public copyFrom(ctx: LimitContext): void {
    super.copyFrom(ctx);
  }
}
export class L_integerContext extends LimitContext {
  constructor(parser: CEQLQueryParser, ctx: LimitContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public integer(): IntegerContext {
    return this.getTypedRuleContext(IntegerContext, 0) as IntegerContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterL_integer) {
      listener.enterL_integer(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitL_integer) {
      listener.exitL_integer(this);
    }
  }
}

export class FilterContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_filter;
  }
  public copyFrom(ctx: FilterContext): void {
    super.copyFrom(ctx);
  }
}
export class Par_filterContext extends FilterContext {
  constructor(parser: CEQLQueryParser, ctx: FilterContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }
  public filter(): FilterContext {
    return this.getTypedRuleContext(FilterContext, 0) as FilterContext;
  }
  public RIGHT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterPar_filter) {
      listener.enterPar_filter(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitPar_filter) {
      listener.exitPar_filter(this);
    }
  }
}
export class And_filterContext extends FilterContext {
  constructor(parser: CEQLQueryParser, ctx: FilterContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public filter_list(): FilterContext[] {
    return this.getTypedRuleContexts(FilterContext) as FilterContext[];
  }
  public filter(i: number): FilterContext {
    return this.getTypedRuleContext(FilterContext, i) as FilterContext;
  }
  public K_AND(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_AND, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAnd_filter) {
      listener.enterAnd_filter(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAnd_filter) {
      listener.exitAnd_filter(this);
    }
  }
}
export class Atomic_filterContext extends FilterContext {
  constructor(parser: CEQLQueryParser, ctx: FilterContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public s_event_name(): S_event_nameContext {
    return this.getTypedRuleContext(S_event_nameContext, 0) as S_event_nameContext;
  }
  public LEFT_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
  }
  public predicate(): PredicateContext {
    return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
  }
  public RIGHT_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAtomic_filter) {
      listener.enterAtomic_filter(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAtomic_filter) {
      listener.exitAtomic_filter(this);
    }
  }
}
export class Or_filterContext extends FilterContext {
  constructor(parser: CEQLQueryParser, ctx: FilterContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public filter_list(): FilterContext[] {
    return this.getTypedRuleContexts(FilterContext) as FilterContext[];
  }
  public filter(i: number): FilterContext {
    return this.getTypedRuleContext(FilterContext, i) as FilterContext;
  }
  public K_OR(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterOr_filter) {
      listener.enterOr_filter(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitOr_filter) {
      listener.exitOr_filter(this);
    }
  }
}

export class PredicateContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_predicate;
  }
  public copyFrom(ctx: PredicateContext): void {
    super.copyFrom(ctx);
  }
}
export class Regex_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public attribute_name(): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, 0) as Attribute_nameContext;
  }
  public K_LIKE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_LIKE, 0);
  }
  public regexp(): RegexpContext {
    return this.getTypedRuleContext(RegexpContext, 0) as RegexpContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegex_predicate) {
      listener.enterRegex_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegex_predicate) {
      listener.exitRegex_predicate(this);
    }
  }
}
export class In_range_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public math_expr_list(): Math_exprContext[] {
    return this.getTypedRuleContexts(Math_exprContext) as Math_exprContext[];
  }
  public math_expr(i: number): Math_exprContext {
    return this.getTypedRuleContext(Math_exprContext, i) as Math_exprContext;
  }
  public K_IN(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_IN, 0);
  }
  public K_RANGE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_RANGE, 0);
  }
  public LEFT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }
  public COMMA(): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, 0);
  }
  public RIGHT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterIn_range_predicate) {
      listener.enterIn_range_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitIn_range_predicate) {
      listener.exitIn_range_predicate(this);
    }
  }
}
export class In_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public attribute_name(): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, 0) as Attribute_nameContext;
  }
  public value_seq(): Value_seqContext {
    return this.getTypedRuleContext(Value_seqContext, 0) as Value_seqContext;
  }
  public K_IN(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_IN, 0);
  }
  public K_NOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterIn_predicate) {
      listener.enterIn_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitIn_predicate) {
      listener.exitIn_predicate(this);
    }
  }
}
export class Not_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public K_NOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }
  public predicate(): PredicateContext {
    return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNot_predicate) {
      listener.enterNot_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNot_predicate) {
      listener.exitNot_predicate(this);
    }
  }
}
export class Par_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }
  public predicate(): PredicateContext {
    return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
  }
  public RIGHT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterPar_predicate) {
      listener.enterPar_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitPar_predicate) {
      listener.exitPar_predicate(this);
    }
  }
}
export class And_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public predicate_list(): PredicateContext[] {
    return this.getTypedRuleContexts(PredicateContext) as PredicateContext[];
  }
  public predicate(i: number): PredicateContext {
    return this.getTypedRuleContext(PredicateContext, i) as PredicateContext;
  }
  public K_AND(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_AND, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAnd_predicate) {
      listener.enterAnd_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAnd_predicate) {
      listener.exitAnd_predicate(this);
    }
  }
}
export class Equality_string_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public string_literal(): String_literalContext {
    return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
  }
  public string_literal_or_regexp(): String_literal_or_regexpContext {
    return this.getTypedRuleContext(String_literal_or_regexpContext, 0) as String_literal_or_regexpContext;
  }
  public EQ(): TerminalNode {
    return this.getToken(CEQLQueryParser.EQ, 0);
  }
  public NEQ(): TerminalNode {
    return this.getToken(CEQLQueryParser.NEQ, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterEquality_string_predicate) {
      listener.enterEquality_string_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitEquality_string_predicate) {
      listener.exitEquality_string_predicate(this);
    }
  }
}
export class Inequality_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public math_expr_list(): Math_exprContext[] {
    return this.getTypedRuleContexts(Math_exprContext) as Math_exprContext[];
  }
  public math_expr(i: number): Math_exprContext {
    return this.getTypedRuleContext(Math_exprContext, i) as Math_exprContext;
  }
  public LE(): TerminalNode {
    return this.getToken(CEQLQueryParser.LE, 0);
  }
  public LEQ(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEQ, 0);
  }
  public GE(): TerminalNode {
    return this.getToken(CEQLQueryParser.GE, 0);
  }
  public GEQ(): TerminalNode {
    return this.getToken(CEQLQueryParser.GEQ, 0);
  }
  public EQ(): TerminalNode {
    return this.getToken(CEQLQueryParser.EQ, 0);
  }
  public NEQ(): TerminalNode {
    return this.getToken(CEQLQueryParser.NEQ, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterInequality_predicate) {
      listener.enterInequality_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitInequality_predicate) {
      listener.exitInequality_predicate(this);
    }
  }
}
export class Or_predicateContext extends PredicateContext {
  constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public predicate_list(): PredicateContext[] {
    return this.getTypedRuleContexts(PredicateContext) as PredicateContext[];
  }
  public predicate(i: number): PredicateContext {
    return this.getTypedRuleContext(PredicateContext, i) as PredicateContext;
  }
  public K_OR(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterOr_predicate) {
      listener.enterOr_predicate(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitOr_predicate) {
      listener.exitOr_predicate(this);
    }
  }
}

export class String_literalContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public string_(): StringContext {
    return this.getTypedRuleContext(StringContext, 0) as StringContext;
  }
  public attribute_name(): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, 0) as Attribute_nameContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_string_literal;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterString_literal) {
      listener.enterString_literal(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitString_literal) {
      listener.exitString_literal(this);
    }
  }
}

export class String_literal_or_regexpContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public string_(): StringContext {
    return this.getTypedRuleContext(StringContext, 0) as StringContext;
  }
  public attribute_name(): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, 0) as Attribute_nameContext;
  }
  public regexp(): RegexpContext {
    return this.getTypedRuleContext(RegexpContext, 0) as RegexpContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_string_literal_or_regexp;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterString_literal_or_regexp) {
      listener.enterString_literal_or_regexp(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitString_literal_or_regexp) {
      listener.exitString_literal_or_regexp(this);
    }
  }
}

export class Math_exprContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_math_expr;
  }
  public copyFrom(ctx: Math_exprContext): void {
    super.copyFrom(ctx);
  }
}
export class Mul_math_exprContext extends Math_exprContext {
  constructor(parser: CEQLQueryParser, ctx: Math_exprContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public math_expr_list(): Math_exprContext[] {
    return this.getTypedRuleContexts(Math_exprContext) as Math_exprContext[];
  }
  public math_expr(i: number): Math_exprContext {
    return this.getTypedRuleContext(Math_exprContext, i) as Math_exprContext;
  }
  public STAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.STAR, 0);
  }
  public SLASH(): TerminalNode {
    return this.getToken(CEQLQueryParser.SLASH, 0);
  }
  public PERCENT(): TerminalNode {
    return this.getToken(CEQLQueryParser.PERCENT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterMul_math_expr) {
      listener.enterMul_math_expr(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitMul_math_expr) {
      listener.exitMul_math_expr(this);
    }
  }
}
export class Sum_math_exprContext extends Math_exprContext {
  constructor(parser: CEQLQueryParser, ctx: Math_exprContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public math_expr_list(): Math_exprContext[] {
    return this.getTypedRuleContexts(Math_exprContext) as Math_exprContext[];
  }
  public math_expr(i: number): Math_exprContext {
    return this.getTypedRuleContext(Math_exprContext, i) as Math_exprContext;
  }
  public PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.PLUS, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.MINUS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSum_math_expr) {
      listener.enterSum_math_expr(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSum_math_expr) {
      listener.exitSum_math_expr(this);
    }
  }
}
export class Number_math_exprContext extends Math_exprContext {
  constructor(parser: CEQLQueryParser, ctx: Math_exprContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNumber_math_expr) {
      listener.enterNumber_math_expr(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNumber_math_expr) {
      listener.exitNumber_math_expr(this);
    }
  }
}
export class Unary_math_exprContext extends Math_exprContext {
  constructor(parser: CEQLQueryParser, ctx: Math_exprContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public math_expr(): Math_exprContext {
    return this.getTypedRuleContext(Math_exprContext, 0) as Math_exprContext;
  }
  public PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.PLUS, 0);
  }
  public MINUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.MINUS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterUnary_math_expr) {
      listener.enterUnary_math_expr(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitUnary_math_expr) {
      listener.exitUnary_math_expr(this);
    }
  }
}
export class Attribute_math_exprContext extends Math_exprContext {
  constructor(parser: CEQLQueryParser, ctx: Math_exprContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public attribute_name(): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, 0) as Attribute_nameContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAttribute_math_expr) {
      listener.enterAttribute_math_expr(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAttribute_math_expr) {
      listener.exitAttribute_math_expr(this);
    }
  }
}
export class Par_math_exprContext extends Math_exprContext {
  constructor(parser: CEQLQueryParser, ctx: Math_exprContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public LEFT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }
  public math_expr(): Math_exprContext {
    return this.getTypedRuleContext(Math_exprContext, 0) as Math_exprContext;
  }
  public RIGHT_PARENTHESIS(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterPar_math_expr) {
      listener.enterPar_math_expr(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitPar_math_expr) {
      listener.exitPar_math_expr(this);
    }
  }
}

export class Value_seqContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public LEFT_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_CURLY_BRACKET, 0);
  }
  public number_seq(): Number_seqContext {
    return this.getTypedRuleContext(Number_seqContext, 0) as Number_seqContext;
  }
  public RIGHT_CURLY_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_CURLY_BRACKET, 0);
  }
  public string_seq(): String_seqContext {
    return this.getTypedRuleContext(String_seqContext, 0) as String_seqContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_value_seq;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterValue_seq) {
      listener.enterValue_seq(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitValue_seq) {
      listener.exitValue_seq(this);
    }
  }
}

export class Number_seqContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_number_seq;
  }
  public copyFrom(ctx: Number_seqContext): void {
    super.copyFrom(ctx);
  }
}
export class Number_listContext extends Number_seqContext {
  constructor(parser: CEQLQueryParser, ctx: Number_seqContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public number__list(): NumberContext[] {
    return this.getTypedRuleContexts(NumberContext) as NumberContext[];
  }
  public number_(i: number): NumberContext {
    return this.getTypedRuleContext(NumberContext, i) as NumberContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, i);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNumber_list) {
      listener.enterNumber_list(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNumber_list) {
      listener.exitNumber_list(this);
    }
  }
}
export class Double_rangeContext extends Number_seqContext {
  constructor(parser: CEQLQueryParser, ctx: Number_seqContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public double_list(): DoubleContext[] {
    return this.getTypedRuleContexts(DoubleContext) as DoubleContext[];
  }
  public double(i: number): DoubleContext {
    return this.getTypedRuleContext(DoubleContext, i) as DoubleContext;
  }
  public DOUBLE_DOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterDouble_range) {
      listener.enterDouble_range(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitDouble_range) {
      listener.exitDouble_range(this);
    }
  }
}
export class Number_range_lowerContext extends Number_seqContext {
  constructor(parser: CEQLQueryParser, ctx: Number_seqContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
  }
  public DOUBLE_DOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNumber_range_lower) {
      listener.enterNumber_range_lower(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNumber_range_lower) {
      listener.exitNumber_range_lower(this);
    }
  }
}
export class Number_range_upperContext extends Number_seqContext {
  constructor(parser: CEQLQueryParser, ctx: Number_seqContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public DOUBLE_DOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNumber_range_upper) {
      listener.enterNumber_range_upper(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNumber_range_upper) {
      listener.exitNumber_range_upper(this);
    }
  }
}
export class Integer_rangeContext extends Number_seqContext {
  constructor(parser: CEQLQueryParser, ctx: Number_seqContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public integer_list(): IntegerContext[] {
    return this.getTypedRuleContexts(IntegerContext) as IntegerContext[];
  }
  public integer(i: number): IntegerContext {
    return this.getTypedRuleContext(IntegerContext, i) as IntegerContext;
  }
  public DOUBLE_DOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterInteger_range) {
      listener.enterInteger_range(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitInteger_range) {
      listener.exitInteger_range(this);
    }
  }
}

export class String_seqContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public string__list(): StringContext[] {
    return this.getTypedRuleContexts(StringContext) as StringContext[];
  }
  public string_(i: number): StringContext {
    return this.getTypedRuleContext(StringContext, i) as StringContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_string_seq;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterString_seq) {
      listener.enterString_seq(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitString_seq) {
      listener.exitString_seq(this);
    }
  }
}

export class Time_windowContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public event_span(): Event_spanContext {
    return this.getTypedRuleContext(Event_spanContext, 0) as Event_spanContext;
  }
  public time_span(): Time_spanContext {
    return this.getTypedRuleContext(Time_spanContext, 0) as Time_spanContext;
  }
  public custom_span(): Custom_spanContext {
    return this.getTypedRuleContext(Custom_spanContext, 0) as Custom_spanContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_time_window;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterTime_window) {
      listener.enterTime_window(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitTime_window) {
      listener.exitTime_window(this);
    }
  }
}

export class Event_spanContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public integer(): IntegerContext {
    return this.getTypedRuleContext(IntegerContext, 0) as IntegerContext;
  }
  public K_EVENTS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_EVENTS, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_event_span;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterEvent_span) {
      listener.enterEvent_span(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitEvent_span) {
      listener.exitEvent_span(this);
    }
  }
}

export class Time_spanContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public hour_span(): Hour_spanContext {
    return this.getTypedRuleContext(Hour_spanContext, 0) as Hour_spanContext;
  }
  public minute_span(): Minute_spanContext {
    return this.getTypedRuleContext(Minute_spanContext, 0) as Minute_spanContext;
  }
  public second_span(): Second_spanContext {
    return this.getTypedRuleContext(Second_spanContext, 0) as Second_spanContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_time_span;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterTime_span) {
      listener.enterTime_span(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitTime_span) {
      listener.exitTime_span(this);
    }
  }
}

export class Hour_spanContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
  }
  public K_HOURS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_HOURS, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_hour_span;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterHour_span) {
      listener.enterHour_span(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitHour_span) {
      listener.exitHour_span(this);
    }
  }
}

export class Minute_spanContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
  }
  public K_MINUTES(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_MINUTES, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_minute_span;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterMinute_span) {
      listener.enterMinute_span(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitMinute_span) {
      listener.exitMinute_span(this);
    }
  }
}

export class Second_spanContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public number_(): NumberContext {
    return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
  }
  public K_SECONDS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_SECONDS, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_second_span;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSecond_span) {
      listener.enterSecond_span(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSecond_span) {
      listener.exitSecond_span(this);
    }
  }
}

export class Custom_spanContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public integer(): IntegerContext {
    return this.getTypedRuleContext(IntegerContext, 0) as IntegerContext;
  }
  public LEFT_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
  }
  public any_name(): Any_nameContext {
    return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
  }
  public RIGHT_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_custom_span;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCustom_span) {
      listener.enterCustom_span(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCustom_span) {
      listener.exitCustom_span(this);
    }
  }
}

export class Named_eventContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public s_event_name(): S_event_nameContext {
    return this.getTypedRuleContext(S_event_nameContext, 0) as S_event_nameContext;
  }
  public K_AS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_AS, 0);
  }
  public event_name(): Event_nameContext {
    return this.getTypedRuleContext(Event_nameContext, 0) as Event_nameContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_named_event;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNamed_event) {
      listener.enterNamed_event(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNamed_event) {
      listener.exitNamed_event(this);
    }
  }
}

export class S_event_name_with_projectionContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public s_event_name(): S_event_nameContext {
    return this.getTypedRuleContext(S_event_nameContext, 0) as S_event_nameContext;
  }
  public LEFT_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
  }
  public list_of_attribute_names(): List_of_attribute_namesContext {
    return this.getTypedRuleContext(List_of_attribute_namesContext, 0) as List_of_attribute_namesContext;
  }
  public RIGHT_SQUARE_BRACKET(): TerminalNode {
    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_s_event_name_with_projection;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterS_event_name_with_projection) {
      listener.enterS_event_name_with_projection(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitS_event_name_with_projection) {
      listener.exitS_event_name_with_projection(this);
    }
  }
}

export class S_event_nameContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public event_name(): Event_nameContext {
    return this.getTypedRuleContext(Event_nameContext, 0) as Event_nameContext;
  }
  public stream_name(): Stream_nameContext {
    return this.getTypedRuleContext(Stream_nameContext, 0) as Stream_nameContext;
  }
  public GE(): TerminalNode {
    return this.getToken(CEQLQueryParser.GE, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_s_event_name;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterS_event_name) {
      listener.enterS_event_name(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitS_event_name) {
      listener.exitS_event_name(this);
    }
  }
}

export class Event_nameContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public any_name(): Any_nameContext {
    return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_event_name;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterEvent_name) {
      listener.enterEvent_name(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitEvent_name) {
      listener.exitEvent_name(this);
    }
  }
}

export class Atomic_cel_formulaContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_atomic_cel_formula;
  }
  public copyFrom(ctx: Atomic_cel_formulaContext): void {
    super.copyFrom(ctx);
  }
}
export class Atomic_cel_formula_filterContext extends Atomic_cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Atomic_cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public atomic_cel_formula(): Atomic_cel_formulaContext {
    return this.getTypedRuleContext(Atomic_cel_formulaContext, 0) as Atomic_cel_formulaContext;
  }
  public K_FILTER(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_FILTER, 0);
  }
  public filter(): FilterContext {
    return this.getTypedRuleContext(FilterContext, 0) as FilterContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAtomic_cel_formula_filter) {
      listener.enterAtomic_cel_formula_filter(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAtomic_cel_formula_filter) {
      listener.exitAtomic_cel_formula_filter(this);
    }
  }
}
export class Atomic_cel_formula_rContext extends Atomic_cel_formulaContext {
  constructor(parser: CEQLQueryParser, ctx: Atomic_cel_formulaContext) {
    super(parser, ctx.parentCtx, ctx.invokingState);
    super.copyFrom(ctx);
  }
  public s_event_name(): S_event_nameContext {
    return this.getTypedRuleContext(S_event_nameContext, 0) as S_event_nameContext;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAtomic_cel_formula_r) {
      listener.enterAtomic_cel_formula_r(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAtomic_cel_formula_r) {
      listener.exitAtomic_cel_formula_r(this);
    }
  }
}

export class Stream_nameContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public any_name(): Any_nameContext {
    return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_stream_name;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterStream_name) {
      listener.enterStream_name(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitStream_name) {
      listener.exitStream_name(this);
    }
  }
}

export class List_of_attribute_namesContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public attribute_name_list(): Attribute_nameContext[] {
    return this.getTypedRuleContexts(Attribute_nameContext) as Attribute_nameContext[];
  }
  public attribute_name(i: number): Attribute_nameContext {
    return this.getTypedRuleContext(Attribute_nameContext, i) as Attribute_nameContext;
  }
  public COMMA_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.COMMA);
  }
  public COMMA(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.COMMA, i);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_list_of_attribute_names;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterList_of_attribute_names) {
      listener.enterList_of_attribute_names(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitList_of_attribute_names) {
      listener.exitList_of_attribute_names(this);
    }
  }
}

export class Attribute_nameContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public any_name(): Any_nameContext {
    return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_attribute_name;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAttribute_name) {
      listener.enterAttribute_name(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAttribute_name) {
      listener.exitAttribute_name(this);
    }
  }
}

export class IntegerContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public INTEGER_LITERAL(): TerminalNode {
    return this.getToken(CEQLQueryParser.INTEGER_LITERAL, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_integer;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterInteger) {
      listener.enterInteger(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitInteger) {
      listener.exitInteger(this);
    }
  }
}

export class DoubleContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public DOUBLE_LITERAL(): TerminalNode {
    return this.getToken(CEQLQueryParser.DOUBLE_LITERAL, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_double;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterDouble) {
      listener.enterDouble(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitDouble) {
      listener.exitDouble(this);
    }
  }
}

export class NumberContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public integer(): IntegerContext {
    return this.getTypedRuleContext(IntegerContext, 0) as IntegerContext;
  }
  public double(): DoubleContext {
    return this.getTypedRuleContext(DoubleContext, 0) as DoubleContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_number;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterNumber) {
      listener.enterNumber(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitNumber) {
      listener.exitNumber(this);
    }
  }
}

export class StringContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public STRING_LITERAL(): TerminalNode {
    return this.getToken(CEQLQueryParser.STRING_LITERAL, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_string;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterString) {
      listener.enterString(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitString) {
      listener.exitString(this);
    }
  }
}

export class Any_nameContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(CEQLQueryParser.IDENTIFIER, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_any_name;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAny_name) {
      listener.enterAny_name(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAny_name) {
      listener.exitAny_name(this);
    }
  }
}

export class KeywordContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public K_ALL(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_ALL, 0);
  }
  public K_AND(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_AND, 0);
  }
  public K_ANY(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_ANY, 0);
  }
  public K_AS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_AS, 0);
  }
  public K_BY(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_BY, 0);
  }
  public K_CONSUME(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_CONSUME, 0);
  }
  public K_DISTINCT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_DISTINCT, 0);
  }
  public K_EVENT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_EVENT, 0);
  }
  public K_EVENTS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_EVENTS, 0);
  }
  public K_FILTER(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_FILTER, 0);
  }
  public K_FROM(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_FROM, 0);
  }
  public K_HOURS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_HOURS, 0);
  }
  public K_IN(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_IN, 0);
  }
  public K_LAST(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_LAST, 0);
  }
  public K_LIKE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_LIKE, 0);
  }
  public K_MAX(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_MAX, 0);
  }
  public K_MINUTES(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_MINUTES, 0);
  }
  public K_NEXT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NEXT, 0);
  }
  public K_NONE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NONE, 0);
  }
  public K_NOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }
  public K_OR(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }
  public K_PARTITION(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
  }
  public K_RANGE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_RANGE, 0);
  }
  public K_SECONDS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_SECONDS, 0);
  }
  public K_SELECT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_SELECT, 0);
  }
  public K_STREAM(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_STREAM, 0);
  }
  public K_STRICT(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_STRICT, 0);
  }
  public K_UNLESS(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_UNLESS, 0);
  }
  public K_WHERE(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_WHERE, 0);
  }
  public K_WITHIN(): TerminalNode {
    return this.getToken(CEQLQueryParser.K_WITHIN, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_keyword;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterKeyword) {
      listener.enterKeyword(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitKeyword) {
      listener.exitKeyword(this);
    }
  }
}

export class RegexpContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_START(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_START, 0);
  }
  public regexp_alternation(): Regexp_alternationContext {
    return this.getTypedRuleContext(Regexp_alternationContext, 0) as Regexp_alternationContext;
  }
  public REGEX_END(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_END, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_regexp;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegexp) {
      listener.enterRegexp(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegexp) {
      listener.exitRegexp(this);
    }
  }
}

export class Regexp_alternationContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public regexp_exp_list(): Regexp_expContext[] {
    return this.getTypedRuleContexts(Regexp_expContext) as Regexp_expContext[];
  }
  public regexp_exp(i: number): Regexp_expContext {
    return this.getTypedRuleContext(Regexp_expContext, i) as Regexp_expContext;
  }
  public REGEX_PIPE_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.REGEX_PIPE);
  }
  public REGEX_PIPE(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_PIPE, i);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_regexp_alternation;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegexp_alternation) {
      listener.enterRegexp_alternation(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegexp_alternation) {
      listener.exitRegexp_alternation(this);
    }
  }
}

export class Regexp_expContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public regexp_element_list(): Regexp_elementContext[] {
    return this.getTypedRuleContexts(Regexp_elementContext) as Regexp_elementContext[];
  }
  public regexp_element(i: number): Regexp_elementContext {
    return this.getTypedRuleContext(Regexp_elementContext, i) as Regexp_elementContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_regexp_exp;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegexp_exp) {
      listener.enterRegexp_exp(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegexp_exp) {
      listener.exitRegexp_exp(this);
    }
  }
}

export class Regexp_elementContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public regexp_group(): Regexp_groupContext {
    return this.getTypedRuleContext(Regexp_groupContext, 0) as Regexp_groupContext;
  }
  public quantifier(): QuantifierContext {
    return this.getTypedRuleContext(QuantifierContext, 0) as QuantifierContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_regexp_element;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegexp_element) {
      listener.enterRegexp_element(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegexp_element) {
      listener.exitRegexp_element(this);
    }
  }
}

export class Regexp_groupContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public parenthesis(): ParenthesisContext {
    return this.getTypedRuleContext(ParenthesisContext, 0) as ParenthesisContext;
  }
  public atom(): AtomContext {
    return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_regexp_group;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegexp_group) {
      listener.enterRegexp_group(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegexp_group) {
      listener.exitRegexp_group(this);
    }
  }
}

export class ParenthesisContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_L_PAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
  }
  public regexp_alternation(): Regexp_alternationContext {
    return this.getTypedRuleContext(Regexp_alternationContext, 0) as Regexp_alternationContext;
  }
  public REGEX_R_PAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_parenthesis;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterParenthesis) {
      listener.enterParenthesis(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitParenthesis) {
      listener.exitParenthesis(this);
    }
  }
}

export class QuantifierContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_QUESTION(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
  }
  public REGEX_PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
  }
  public REGEX_STAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
  }
  public REGEX_L_CURLY(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
  }
  public quantity(): QuantityContext {
    return this.getTypedRuleContext(QuantityContext, 0) as QuantityContext;
  }
  public REGEX_R_CURLY(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_quantifier;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterQuantifier) {
      listener.enterQuantifier(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitQuantifier) {
      listener.exitQuantifier(this);
    }
  }
}

export class QuantityContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public quantExact(): QuantExactContext {
    return this.getTypedRuleContext(QuantExactContext, 0) as QuantExactContext;
  }
  public quantRange(): QuantRangeContext {
    return this.getTypedRuleContext(QuantRangeContext, 0) as QuantRangeContext;
  }
  public quantMin(): QuantMinContext {
    return this.getTypedRuleContext(QuantMinContext, 0) as QuantMinContext;
  }
  public quantMax(): QuantMaxContext {
    return this.getTypedRuleContext(QuantMaxContext, 0) as QuantMaxContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_quantity;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterQuantity) {
      listener.enterQuantity(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitQuantity) {
      listener.exitQuantity(this);
    }
  }
}

export class QuantExactContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public regexp_number(): Regexp_numberContext {
    return this.getTypedRuleContext(Regexp_numberContext, 0) as Regexp_numberContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_quantExact;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterQuantExact) {
      listener.enterQuantExact(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitQuantExact) {
      listener.exitQuantExact(this);
    }
  }
}

export class QuantRangeContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public regexp_number_list(): Regexp_numberContext[] {
    return this.getTypedRuleContexts(Regexp_numberContext) as Regexp_numberContext[];
  }
  public regexp_number(i: number): Regexp_numberContext {
    return this.getTypedRuleContext(Regexp_numberContext, i) as Regexp_numberContext;
  }
  public REGEX_COMMA(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_quantRange;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterQuantRange) {
      listener.enterQuantRange(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitQuantRange) {
      listener.exitQuantRange(this);
    }
  }
}

export class QuantMinContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public regexp_number(): Regexp_numberContext {
    return this.getTypedRuleContext(Regexp_numberContext, 0) as Regexp_numberContext;
  }
  public REGEX_COMMA(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_quantMin;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterQuantMin) {
      listener.enterQuantMin(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitQuantMin) {
      listener.exitQuantMin(this);
    }
  }
}

export class QuantMaxContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_COMMA(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
  }
  public regexp_number(): Regexp_numberContext {
    return this.getTypedRuleContext(Regexp_numberContext, 0) as Regexp_numberContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_quantMax;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterQuantMax) {
      listener.enterQuantMax(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitQuantMax) {
      listener.exitQuantMax(this);
    }
  }
}

export class AtomContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public characterClass(): CharacterClassContext {
    return this.getTypedRuleContext(CharacterClassContext, 0) as CharacterClassContext;
  }
  public sharedAtom(): SharedAtomContext {
    return this.getTypedRuleContext(SharedAtomContext, 0) as SharedAtomContext;
  }
  public literal(): LiteralContext {
    return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_atom;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterAtom) {
      listener.enterAtom(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitAtom) {
      listener.exitAtom(this);
    }
  }
}

export class CharacterClassContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_L_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
  }
  public REGEX_R_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }
  public REGEX_HAT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
  }
  public ccAtom_list(): CcAtomContext[] {
    return this.getTypedRuleContexts(CcAtomContext) as CcAtomContext[];
  }
  public ccAtom(i: number): CcAtomContext {
    return this.getTypedRuleContext(CcAtomContext, i) as CcAtomContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_characterClass;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCharacterClass) {
      listener.enterCharacterClass(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCharacterClass) {
      listener.exitCharacterClass(this);
    }
  }
}

export class CcAtomContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ccRange(): CcRangeContext {
    return this.getTypedRuleContext(CcRangeContext, 0) as CcRangeContext;
  }
  public sharedAtom(): SharedAtomContext {
    return this.getTypedRuleContext(SharedAtomContext, 0) as SharedAtomContext;
  }
  public ccSingle(): CcSingleContext {
    return this.getTypedRuleContext(CcSingleContext, 0) as CcSingleContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_ccAtom;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCcAtom) {
      listener.enterCcAtom(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCcAtom) {
      listener.exitCcAtom(this);
    }
  }
}

export class CcRangeContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ccLiteral_list(): CcLiteralContext[] {
    return this.getTypedRuleContexts(CcLiteralContext) as CcLiteralContext[];
  }
  public ccLiteral(i: number): CcLiteralContext {
    return this.getTypedRuleContext(CcLiteralContext, i) as CcLiteralContext;
  }
  public REGEX_HYPHEN(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_ccRange;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCcRange) {
      listener.enterCcRange(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCcRange) {
      listener.exitCcRange(this);
    }
  }
}

export class CcSingleContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ccLiteral(): CcLiteralContext {
    return this.getTypedRuleContext(CcLiteralContext, 0) as CcLiteralContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_ccSingle;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCcSingle) {
      listener.enterCcSingle(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCcSingle) {
      listener.exitCcSingle(this);
    }
  }
}

export class CcLiteralContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ccEscapes(): CcEscapesContext {
    return this.getTypedRuleContext(CcEscapesContext, 0) as CcEscapesContext;
  }
  public ccOther(): CcOtherContext {
    return this.getTypedRuleContext(CcOtherContext, 0) as CcOtherContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_ccLiteral;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCcLiteral) {
      listener.enterCcLiteral(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCcLiteral) {
      listener.exitCcLiteral(this);
    }
  }
}

export class CcEscapesContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_BACKSLASH_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.REGEX_BACKSLASH);
  }
  public REGEX_BACKSLASH(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, i);
  }
  public REGEX_HAT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
  }
  public REGEX_HYPHEN(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
  }
  public REGEX_R_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_ccEscapes;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCcEscapes) {
      listener.enterCcEscapes(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCcEscapes) {
      listener.exitCcEscapes(this);
    }
  }
}

export class CcOtherContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_HAT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
  }
  public REGEX_HYPHEN(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
  }
  public REGEX_R_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }
  public REGEX_BACKSLASH(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_ccOther;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterCcOther) {
      listener.enterCcOther(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitCcOther) {
      listener.exitCcOther(this);
    }
  }
}

export class LiteralContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public escapes(): EscapesContext {
    return this.getTypedRuleContext(EscapesContext, 0) as EscapesContext;
  }
  public REGEX_DOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_DOT, 0);
  }
  public other(): OtherContext {
    return this.getTypedRuleContext(OtherContext, 0) as OtherContext;
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_literal;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterLiteral) {
      listener.enterLiteral(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitLiteral) {
      listener.exitLiteral(this);
    }
  }
}

export class EscapesContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_BACKSLASH_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.REGEX_BACKSLASH);
  }
  public REGEX_BACKSLASH(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, i);
  }
  public REGEX_L_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
  }
  public REGEX_R_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }
  public REGEX_L_PAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
  }
  public REGEX_R_PAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
  }
  public REGEX_L_CURLY(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
  }
  public REGEX_R_CURLY(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
  }
  public REGEX_STAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
  }
  public REGEX_PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
  }
  public REGEX_QUESTION(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
  }
  public REGEX_PIPE(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_PIPE, 0);
  }
  public REGEX_DOT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_DOT, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_escapes;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterEscapes) {
      listener.enterEscapes(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitEscapes) {
      listener.exitEscapes(this);
    }
  }
}

export class OtherContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_L_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
  }
  public REGEX_R_BRACK(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }
  public REGEX_L_PAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
  }
  public REGEX_R_PAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
  }
  public REGEX_L_CURLY(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
  }
  public REGEX_R_CURLY(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
  }
  public REGEX_STAR(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
  }
  public REGEX_PLUS(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
  }
  public REGEX_QUESTION(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
  }
  public REGEX_PIPE(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_PIPE, 0);
  }
  public REGEX_BACKSLASH(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_other;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterOther) {
      listener.enterOther(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitOther) {
      listener.exitOther(this);
    }
  }
}

export class SharedAtomContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_DECIMAL_DIGIT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_DECIMAL_DIGIT, 0);
  }
  public REGEX_NOT_DECIMAL_DIGIT(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_NOT_DECIMAL_DIGIT, 0);
  }
  public REGEX_WHITESPACE(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_WHITESPACE, 0);
  }
  public REGEX_NOT_WHITESPACE(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_NOT_WHITESPACE, 0);
  }
  public REGEX_ALPHANUMERIC(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_ALPHANUMERIC, 0);
  }
  public REGEX_NOT_ALPHANUMERIC(): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_NOT_ALPHANUMERIC, 0);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_sharedAtom;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterSharedAtom) {
      listener.enterSharedAtom(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitSharedAtom) {
      listener.exitSharedAtom(this);
    }
  }
}

export class Regexp_numberContext extends ParserRuleContext {
  constructor(parser?: CEQLQueryParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public REGEX_DIGIT_list(): TerminalNode[] {
    return this.getTokens(CEQLQueryParser.REGEX_DIGIT);
  }
  public REGEX_DIGIT(i: number): TerminalNode {
    return this.getToken(CEQLQueryParser.REGEX_DIGIT, i);
  }
  public get ruleIndex(): number {
    return CEQLQueryParser.RULE_regexp_number;
  }
  public enterRule(listener: CEQLQueryParserListener): void {
    if (listener.enterRegexp_number) {
      listener.enterRegexp_number(this);
    }
  }
  public exitRule(listener: CEQLQueryParserListener): void {
    if (listener.exitRegexp_number) {
      listener.exitRegexp_number(this);
    }
  }
}
