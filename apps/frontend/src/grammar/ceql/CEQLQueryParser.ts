// Generated from ceql/CEQLQueryParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
// @ts-nocheck

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CEQLQueryParserListener from "./CEQLQueryParserListener.js";
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
	public static readonly RULE_math_expr = 14;
	public static readonly RULE_value_seq = 15;
	public static readonly RULE_number_seq = 16;
	public static readonly RULE_string_seq = 17;
	public static readonly RULE_time_window = 18;
	public static readonly RULE_event_span = 19;
	public static readonly RULE_time_span = 20;
	public static readonly RULE_hour_span = 21;
	public static readonly RULE_minute_span = 22;
	public static readonly RULE_second_span = 23;
	public static readonly RULE_custom_span = 24;
	public static readonly RULE_named_event = 25;
	public static readonly RULE_s_event_name_with_projection = 26;
	public static readonly RULE_s_event_name = 27;
	public static readonly RULE_event_name = 28;
	public static readonly RULE_atomic_cel_formula = 29;
	public static readonly RULE_stream_name = 30;
	public static readonly RULE_list_of_attribute_names = 31;
	public static readonly RULE_attribute_name = 32;
	public static readonly RULE_integer = 33;
	public static readonly RULE_double = 34;
	public static readonly RULE_number = 35;
	public static readonly RULE_string = 36;
	public static readonly RULE_any_name = 37;
	public static readonly RULE_keyword = 38;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'%'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'<'", 
                                                            "'<='", "'>'", 
                                                            "'>='", null, 
                                                            null, "';'", 
                                                            "':'", "','", 
                                                            "'..'", "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "':+'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "K_ALL", 
                                                             "K_AND", "K_ANY", 
                                                             "K_AS", "K_BY", 
                                                             "K_CONSUME", 
                                                             "K_LIMIT", 
                                                             "K_DISTINCT", 
                                                             "K_EVENT", 
                                                             "K_EVENTS", 
                                                             "K_FILTER", 
                                                             "K_FROM", "K_HOURS", 
                                                             "K_IN", "K_LAST", 
                                                             "K_LIKE", "K_MAX", 
                                                             "K_MINUTES", 
                                                             "K_NEXT", "K_NONE", 
                                                             "K_NOT", "K_OR", 
                                                             "K_PARTITION", 
                                                             "K_RANGE", 
                                                             "K_SECONDS", 
                                                             "K_SELECT", 
                                                             "K_STREAM", 
                                                             "K_STRICT", 
                                                             "K_UNLESS", 
                                                             "K_WHERE", 
                                                             "K_WITHIN", 
                                                             "PERCENT", 
                                                             "PLUS", "MINUS", 
                                                             "STAR", "SLASH", 
                                                             "LE", "LEQ", 
                                                             "GE", "GEQ", 
                                                             "EQ", "NEQ", 
                                                             "SEMICOLON", 
                                                             "COLON", "COMMA", 
                                                             "DOUBLE_DOT", 
                                                             "LEFT_PARENTHESIS", 
                                                             "RIGHT_PARENTHESIS", 
                                                             "LEFT_SQUARE_BRACKET", 
                                                             "RIGHT_SQUARE_BRACKET", 
                                                             "LEFT_CURLY_BRACKET", 
                                                             "RIGHT_CURLY_BRACKET", 
                                                             "COLON_PLUS", 
                                                             "IDENTIFIER", 
                                                             "DOUBLE_LITERAL", 
                                                             "INTEGER_LITERAL", 
                                                             "NUMERICAL_EXPONENT", 
                                                             "STRING_LITERAL", 
                                                             "SINGLE_LINE_COMMENT", 
                                                             "MULTILINE_COMMENT", 
                                                             "SPACES", "UNEXPECTED_CHAR" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "error", "core_query", "selection_strategy", "list_of_variables", 
		"from_clause", "cel_formula", "partition_list", "attribute_list", "consumption_policy", 
		"limit", "filter", "predicate", "string_literal", "math_expr", "value_seq", 
		"number_seq", "string_seq", "time_window", "event_span", "time_span", 
		"hour_span", "minute_span", "second_span", "custom_span", "named_event", 
		"s_event_name_with_projection", "s_event_name", "event_name", "atomic_cel_formula", 
		"stream_name", "list_of_attribute_names", "attribute_name", "integer", 
		"double", "number", "string", "any_name", "keyword",
	];
	public get grammarFileName(): string { return "CEQLQueryParser.g4"; }
	public get literalNames(): (string | null)[] { return CEQLQueryParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CEQLQueryParser.symbolicNames; }
	public get ruleNames(): string[] { return CEQLQueryParser.ruleNames; }
	public get serializedATN(): number[] { return CEQLQueryParser._serializedATN; }

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
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===26 || _la===62) {
				{
				this.state = 80;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 26:
					{
					this.state = 78;
					this.core_query();
					}
					break;
				case 62:
					{
					this.state = 79;
					this.error();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this.match(CEQLQueryParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 87;
			localctx._UNEXPECTED_CHAR = this.match(CEQLQueryParser.UNEXPECTED_CHAR);

			     throw new RuntimeException("UNEXPECTED_CHAR=" + (localctx._UNEXPECTED_CHAR != null ? localctx._UNEXPECTED_CHAR.text : undefined));
			   
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 90;
			this.match(CEQLQueryParser.K_SELECT);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 269123594) !== 0)) {
				{
				this.state = 91;
				this.selection_strategy();
				}
			}

			this.state = 94;
			this.list_of_variables();
			this.state = 95;
			this.from_clause();
			this.state = 96;
			this.match(CEQLQueryParser.K_WHERE);
			this.state = 97;
			this.cel_formula(0);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 98;
				this.match(CEQLQueryParser.K_PARTITION);
				this.state = 99;
				this.match(CEQLQueryParser.K_BY);
				this.state = 100;
				this.partition_list();
				}
			}

			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 103;
				this.match(CEQLQueryParser.K_WITHIN);
				this.state = 104;
				this.time_window();
				}
			}

			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 107;
				this.match(CEQLQueryParser.K_CONSUME);
				this.state = 108;
				this.match(CEQLQueryParser.K_BY);
				this.state = 109;
				this.consumption_policy();
				}
			}

			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 112;
				this.match(CEQLQueryParser.K_LIMIT);
				this.state = 113;
				this.limit();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selection_strategy(): Selection_strategyContext {
		let localctx: Selection_strategyContext = new Selection_strategyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CEQLQueryParser.RULE_selection_strategy);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				localctx = new Ss_allContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 116;
				this.match(CEQLQueryParser.K_ALL);
				}
				break;
			case 3:
				localctx = new Ss_anyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 117;
				this.match(CEQLQueryParser.K_ANY);
				}
				break;
			case 15:
				localctx = new Ss_lastContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 118;
				this.match(CEQLQueryParser.K_LAST);
				}
				break;
			case 17:
				localctx = new Ss_maxContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 119;
				this.match(CEQLQueryParser.K_MAX);
				}
				break;
			case 19:
				localctx = new Ss_nextContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 120;
				this.match(CEQLQueryParser.K_NEXT);
				}
				break;
			case 28:
				localctx = new Ss_strictContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 121;
				this.match(CEQLQueryParser.K_STRICT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				localctx = new S_starContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 124;
				this.match(CEQLQueryParser.STAR);
				}
				break;
			case 20:
				localctx = new S_noneContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 125;
				this.match(CEQLQueryParser.K_NONE);
				}
				break;
			case 54:
				localctx = new S_event_name_with_projection_listContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 126;
				this.s_event_name_with_projection();
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===45) {
					{
					{
					this.state = 127;
					this.match(CEQLQueryParser.COMMA);
					this.state = 128;
					this.s_event_name_with_projection();
					}
					}
					this.state = 133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 136;
				this.match(CEQLQueryParser.K_FROM);
				this.state = 137;
				this.stream_name();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===45) {
					{
					{
					this.state = 138;
					this.match(CEQLQueryParser.COMMA);
					this.state = 139;
					this.stream_name();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				{
				localctx = new Par_cel_formulaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 148;
				this.match(CEQLQueryParser.LEFT_PARENTHESIS);
				this.state = 149;
				this.cel_formula(0);
				this.state = 150;
				this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
				}
				break;
			case 54:
				{
				localctx = new Event_type_cel_formulaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 152;
				this.s_event_name();
				}
				break;
			case 21:
				{
				localctx = new Not_event_type_atomic_cel_formulaContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 153;
				this.match(CEQLQueryParser.K_NOT);
				this.state = 154;
				this.match(CEQLQueryParser.LEFT_PARENTHESIS);
				this.state = 155;
				this.atomic_cel_formula(0);
				this.state = 156;
				this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 181;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 179;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new Non_contiguous_sequencing_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 160;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 161;
						this.match(CEQLQueryParser.SEMICOLON);
						this.state = 162;
						this.cel_formula(5);
						}
						break;
					case 2:
						{
						localctx = new Contiguous_sequencing_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 163;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 164;
						this.match(CEQLQueryParser.COLON);
						this.state = 165;
						this.cel_formula(4);
						}
						break;
					case 3:
						{
						localctx = new Or_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 166;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 167;
						this.match(CEQLQueryParser.K_OR);
						this.state = 168;
						this.cel_formula(3);
						}
						break;
					case 4:
						{
						localctx = new As_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 169;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 170;
						this.match(CEQLQueryParser.K_AS);
						this.state = 171;
						this.event_name();
						}
						break;
					case 5:
						{
						localctx = new Non_contiguous_iteration_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 172;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 173;
						this.match(CEQLQueryParser.PLUS);
						}
						break;
					case 6:
						{
						localctx = new Contiguous_iteration_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 174;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 175;
						this.match(CEQLQueryParser.COLON_PLUS);
						}
						break;
					case 7:
						{
						localctx = new Filter_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
						this.state = 176;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 177;
						this.match(CEQLQueryParser.K_FILTER);
						this.state = 178;
						this.filter(0);
						}
						break;
					}
					}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 184;
			this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
			this.state = 185;
			this.attribute_list();
			this.state = 186;
			this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 187;
				this.match(CEQLQueryParser.COMMA);
				this.state = 188;
				this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
				this.state = 189;
				this.attribute_list();
				this.state = 190;
				this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 194;
			this.attribute_name();
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===45) {
				{
				{
				this.state = 195;
				this.match(CEQLQueryParser.COMMA);
				this.state = 196;
				this.attribute_name();
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public consumption_policy(): Consumption_policyContext {
		let localctx: Consumption_policyContext = new Consumption_policyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CEQLQueryParser.RULE_consumption_policy);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				localctx = new Cp_anyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 202;
				this.match(CEQLQueryParser.K_ANY);
				}
				break;
			case 23:
				localctx = new Cp_partitionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 203;
				this.match(CEQLQueryParser.K_PARTITION);
				}
				break;
			case 20:
				localctx = new Cp_noneContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 204;
				this.match(CEQLQueryParser.K_NONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 207;
			this.integer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				{
				localctx = new Par_filterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 210;
				this.match(CEQLQueryParser.LEFT_PARENTHESIS);
				this.state = 211;
				this.filter(0);
				this.state = 212;
				this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
				}
				break;
			case 54:
				{
				localctx = new Atomic_filterContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 214;
				this.s_event_name();
				this.state = 215;
				this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
				this.state = 216;
				this.predicate(0);
				this.state = 217;
				this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 227;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
					case 1:
						{
						localctx = new And_filterContext(this, new FilterContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_filter);
						this.state = 221;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 222;
						this.match(CEQLQueryParser.K_AND);
						this.state = 223;
						this.filter(3);
						}
						break;
					case 2:
						{
						localctx = new Or_filterContext(this, new FilterContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_filter);
						this.state = 224;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 225;
						this.match(CEQLQueryParser.K_OR);
						this.state = 226;
						this.filter(2);
						}
						break;
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				localctx = new Par_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 233;
				this.match(CEQLQueryParser.LEFT_PARENTHESIS);
				this.state = 234;
				this.predicate(0);
				this.state = 235;
				this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
				}
				break;
			case 2:
				{
				localctx = new Not_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 237;
				this.match(CEQLQueryParser.K_NOT);
				this.state = 238;
				this.predicate(8);
				}
				break;
			case 3:
				{
				localctx = new Inequality_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 239;
				this.math_expr(0);
				this.state = 240;
				_la = this._input.LA(1);
				if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 63) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 241;
				this.math_expr(0);
				}
				break;
			case 4:
				{
				localctx = new Equality_string_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 243;
				this.string_literal();
				this.state = 244;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===42)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 245;
				this.string_literal();
				}
				break;
			case 5:
				{
				localctx = new Regex_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 247;
				this.attribute_name();
				this.state = 248;
				this.match(CEQLQueryParser.K_LIKE);
				this.state = 249;
				this.string_literal();
				}
				break;
			case 6:
				{
				localctx = new In_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 251;
				this.attribute_name();
				this.state = 255;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 14:
					{
					this.state = 252;
					this.match(CEQLQueryParser.K_IN);
					}
					break;
				case 21:
					{
					this.state = 253;
					this.match(CEQLQueryParser.K_NOT);
					this.state = 254;
					this.match(CEQLQueryParser.K_IN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 257;
				this.value_seq();
				}
				break;
			case 7:
				{
				localctx = new In_range_predicateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 259;
				this.math_expr(0);
				this.state = 260;
				this.match(CEQLQueryParser.K_IN);
				this.state = 261;
				this.match(CEQLQueryParser.K_RANGE);
				this.state = 262;
				this.match(CEQLQueryParser.LEFT_PARENTHESIS);
				this.state = 263;
				this.math_expr(0);
				this.state = 264;
				this.match(CEQLQueryParser.COMMA);
				this.state = 265;
				this.math_expr(0);
				this.state = 266;
				this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 278;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 276;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						localctx = new And_predicateContext(this, new PredicateContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_predicate);
						this.state = 270;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 271;
						this.match(CEQLQueryParser.K_AND);
						this.state = 272;
						this.predicate(6);
						}
						break;
					case 2:
						{
						localctx = new Or_predicateContext(this, new PredicateContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_predicate);
						this.state = 273;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 274;
						this.match(CEQLQueryParser.K_OR);
						this.state = 275;
						this.predicate(5);
						}
						break;
					}
					}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_literal(): String_literalContext {
		let localctx: String_literalContext = new String_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CEQLQueryParser.RULE_string_literal);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 58:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 281;
				this.string_();
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 282;
				this.attribute_name();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		let _startState: number = 28;
		this.enterRecursionRule(localctx, 28, CEQLQueryParser.RULE_math_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				{
				localctx = new Par_math_exprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 286;
				this.match(CEQLQueryParser.LEFT_PARENTHESIS);
				this.state = 287;
				this.math_expr(0);
				this.state = 288;
				this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
				}
				break;
			case 55:
			case 56:
				{
				localctx = new Number_math_exprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 290;
				this.number_();
				}
				break;
			case 54:
				{
				localctx = new Attribute_math_exprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 291;
				this.attribute_name();
				}
				break;
			case 33:
			case 34:
				{
				localctx = new Unary_math_exprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 292;
				_la = this._input.LA(1);
				if(!(_la===33 || _la===34)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 293;
				this.math_expr(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 302;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						localctx = new Mul_math_exprContext(this, new Math_exprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_math_expr);
						this.state = 296;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 297;
						_la = this._input.LA(1);
						if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 25) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 298;
						this.math_expr(3);
						}
						break;
					case 2:
						{
						localctx = new Sum_math_exprContext(this, new Math_exprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_math_expr);
						this.state = 299;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 300;
						_la = this._input.LA(1);
						if(!(_la===33 || _la===34)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 301;
						this.math_expr(2);
						}
						break;
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value_seq(): Value_seqContext {
		let localctx: Value_seqContext = new Value_seqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CEQLQueryParser.RULE_value_seq);
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 307;
				this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
				this.state = 308;
				this.number_seq();
				this.state = 309;
				this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 311;
				this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
				this.state = 312;
				this.string_seq();
				this.state = 313;
				this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_seq(): Number_seqContext {
		let localctx: Number_seqContext = new Number_seqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CEQLQueryParser.RULE_number_seq);
		let _la: number;
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				localctx = new Number_listContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 317;
				this.number_();
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===45) {
					{
					{
					this.state = 318;
					this.match(CEQLQueryParser.COMMA);
					this.state = 319;
					this.number_();
					}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new Integer_rangeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 325;
				this.integer();
				this.state = 326;
				this.match(CEQLQueryParser.DOUBLE_DOT);
				this.state = 327;
				this.integer();
				}
				break;
			case 3:
				localctx = new Double_rangeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 329;
				this.double();
				this.state = 330;
				this.match(CEQLQueryParser.DOUBLE_DOT);
				this.state = 331;
				this.double();
				}
				break;
			case 4:
				localctx = new Number_range_lowerContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 333;
				this.number_();
				this.state = 334;
				this.match(CEQLQueryParser.DOUBLE_DOT);
				}
				break;
			case 5:
				localctx = new Number_range_upperContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 336;
				this.match(CEQLQueryParser.DOUBLE_DOT);
				this.state = 337;
				this.number_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_seq(): String_seqContext {
		let localctx: String_seqContext = new String_seqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CEQLQueryParser.RULE_string_seq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 340;
			this.string_();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===45) {
				{
				{
				this.state = 341;
				this.match(CEQLQueryParser.COMMA);
				this.state = 342;
				this.string_();
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public time_window(): Time_windowContext {
		let localctx: Time_windowContext = new Time_windowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CEQLQueryParser.RULE_time_window);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 348;
				this.event_span();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 349;
				this.time_span();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 350;
				this.custom_span();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public event_span(): Event_spanContext {
		let localctx: Event_spanContext = new Event_spanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, CEQLQueryParser.RULE_event_span);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 353;
			this.integer();
			this.state = 354;
			this.match(CEQLQueryParser.K_EVENTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public time_span(): Time_spanContext {
		let localctx: Time_spanContext = new Time_spanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CEQLQueryParser.RULE_time_span);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 356;
				this.hour_span();
				}
				break;
			}
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 359;
				this.minute_span();
				}
				break;
			}
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55 || _la===56) {
				{
				this.state = 362;
				this.second_span();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hour_span(): Hour_spanContext {
		let localctx: Hour_spanContext = new Hour_spanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CEQLQueryParser.RULE_hour_span);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 365;
			this.number_();
			this.state = 366;
			this.match(CEQLQueryParser.K_HOURS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public minute_span(): Minute_spanContext {
		let localctx: Minute_spanContext = new Minute_spanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CEQLQueryParser.RULE_minute_span);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 368;
			this.number_();
			this.state = 369;
			this.match(CEQLQueryParser.K_MINUTES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public second_span(): Second_spanContext {
		let localctx: Second_spanContext = new Second_spanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CEQLQueryParser.RULE_second_span);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.number_();
			this.state = 372;
			this.match(CEQLQueryParser.K_SECONDS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public custom_span(): Custom_spanContext {
		let localctx: Custom_spanContext = new Custom_spanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, CEQLQueryParser.RULE_custom_span);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.integer();
			this.state = 375;
			this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
			this.state = 376;
			this.any_name();
			this.state = 377;
			this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public named_event(): Named_eventContext {
		let localctx: Named_eventContext = new Named_eventContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, CEQLQueryParser.RULE_named_event);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 379;
			this.s_event_name();
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 380;
				this.match(CEQLQueryParser.K_AS);
				this.state = 381;
				this.event_name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public s_event_name_with_projection(): S_event_name_with_projectionContext {
		let localctx: S_event_name_with_projectionContext = new S_event_name_with_projectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, CEQLQueryParser.RULE_s_event_name_with_projection);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 384;
			this.s_event_name();
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 385;
				this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
				this.state = 386;
				this.list_of_attribute_names();
				this.state = 387;
				this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public s_event_name(): S_event_nameContext {
		let localctx: S_event_nameContext = new S_event_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, CEQLQueryParser.RULE_s_event_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 391;
				this.stream_name();
				this.state = 392;
				this.match(CEQLQueryParser.GE);
				}
				break;
			}
			this.state = 396;
			this.event_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public event_name(): Event_nameContext {
		let localctx: Event_nameContext = new Event_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, CEQLQueryParser.RULE_event_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 398;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		let _startState: number = 58;
		this.enterRecursionRule(localctx, 58, CEQLQueryParser.RULE_atomic_cel_formula, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Atomic_cel_formula_rContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 401;
			this.s_event_name();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 408;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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
					this.state = 403;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 404;
					this.match(CEQLQueryParser.K_FILTER);
					this.state = 405;
					this.filter(0);
					}
					}
				}
				this.state = 410;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stream_name(): Stream_nameContext {
		let localctx: Stream_nameContext = new Stream_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, CEQLQueryParser.RULE_stream_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 411;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_of_attribute_names(): List_of_attribute_namesContext {
		let localctx: List_of_attribute_namesContext = new List_of_attribute_namesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, CEQLQueryParser.RULE_list_of_attribute_names);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 413;
			this.attribute_name();
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===45) {
				{
				{
				this.state = 414;
				this.match(CEQLQueryParser.COMMA);
				this.state = 415;
				this.attribute_name();
				}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_name(): Attribute_nameContext {
		let localctx: Attribute_nameContext = new Attribute_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, CEQLQueryParser.RULE_attribute_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 421;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let localctx: IntegerContext = new IntegerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, CEQLQueryParser.RULE_integer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
			this.match(CEQLQueryParser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public double(): DoubleContext {
		let localctx: DoubleContext = new DoubleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, CEQLQueryParser.RULE_double);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(CEQLQueryParser.DOUBLE_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, CEQLQueryParser.RULE_number);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 427;
				this.integer();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 428;
				this.double();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, CEQLQueryParser.RULE_string);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 431;
			this.match(CEQLQueryParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public any_name(): Any_nameContext {
		let localctx: Any_nameContext = new Any_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, CEQLQueryParser.RULE_any_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
			this.match(CEQLQueryParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, CEQLQueryParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 435;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967166) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		case 14:
			return this.math_expr_sempred(localctx as Math_exprContext, predIndex);
		case 29:
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

	public static readonly _serializedATN: number[] = [4,1,62,438,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,
	0,1,0,5,0,81,8,0,10,0,12,0,84,9,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,93,8,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,102,8,2,1,2,1,2,3,2,106,8,2,1,2,1,2,1,
	2,3,2,111,8,2,1,2,1,2,3,2,115,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,123,8,3,1,
	4,1,4,1,4,1,4,1,4,5,4,130,8,4,10,4,12,4,133,9,4,3,4,135,8,4,1,5,1,5,1,5,
	1,5,5,5,141,8,5,10,5,12,5,144,9,5,3,5,146,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,3,6,159,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,180,8,6,10,6,12,6,183,9,6,1,7,1,7,
	1,7,1,7,1,7,1,7,1,7,1,7,3,7,193,8,7,1,8,1,8,1,8,5,8,198,8,8,10,8,12,8,201,
	9,8,1,9,1,9,1,9,3,9,206,8,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,11,3,11,220,8,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,228,8,11,
	10,11,12,11,231,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,256,
	8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,269,8,
	12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,277,8,12,10,12,12,12,280,9,12,1,13,
	1,13,3,13,284,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,295,
	8,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,303,8,14,10,14,12,14,306,9,14,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,316,8,15,1,16,1,16,1,16,5,16,
	321,8,16,10,16,12,16,324,9,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
	16,1,16,1,16,1,16,1,16,3,16,339,8,16,1,17,1,17,1,17,5,17,344,8,17,10,17,
	12,17,347,9,17,1,18,1,18,1,18,3,18,352,8,18,1,19,1,19,1,19,1,20,3,20,358,
	8,20,1,20,3,20,361,8,20,1,20,3,20,364,8,20,1,21,1,21,1,21,1,22,1,22,1,22,
	1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,3,25,383,8,25,1,
	26,1,26,1,26,1,26,1,26,3,26,390,8,26,1,27,1,27,1,27,3,27,395,8,27,1,27,
	1,27,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,5,29,407,8,29,10,29,12,29,
	410,9,29,1,30,1,30,1,31,1,31,1,31,5,31,417,8,31,10,31,12,31,420,9,31,1,
	32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,3,35,430,8,35,1,36,1,36,1,37,1,37,
	1,38,1,38,1,38,0,5,12,22,24,28,58,39,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
	74,76,0,5,1,0,37,42,1,0,41,42,1,0,33,34,2,0,32,32,35,36,2,0,1,6,8,31,464,
	0,82,1,0,0,0,2,87,1,0,0,0,4,90,1,0,0,0,6,122,1,0,0,0,8,134,1,0,0,0,10,145,
	1,0,0,0,12,158,1,0,0,0,14,184,1,0,0,0,16,194,1,0,0,0,18,205,1,0,0,0,20,
	207,1,0,0,0,22,219,1,0,0,0,24,268,1,0,0,0,26,283,1,0,0,0,28,294,1,0,0,0,
	30,315,1,0,0,0,32,338,1,0,0,0,34,340,1,0,0,0,36,351,1,0,0,0,38,353,1,0,
	0,0,40,357,1,0,0,0,42,365,1,0,0,0,44,368,1,0,0,0,46,371,1,0,0,0,48,374,
	1,0,0,0,50,379,1,0,0,0,52,384,1,0,0,0,54,394,1,0,0,0,56,398,1,0,0,0,58,
	400,1,0,0,0,60,411,1,0,0,0,62,413,1,0,0,0,64,421,1,0,0,0,66,423,1,0,0,0,
	68,425,1,0,0,0,70,429,1,0,0,0,72,431,1,0,0,0,74,433,1,0,0,0,76,435,1,0,
	0,0,78,81,3,4,2,0,79,81,3,2,1,0,80,78,1,0,0,0,80,79,1,0,0,0,81,84,1,0,0,
	0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,0,0,1,
	86,1,1,0,0,0,87,88,5,62,0,0,88,89,6,1,-1,0,89,3,1,0,0,0,90,92,5,26,0,0,
	91,93,3,6,3,0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,95,3,8,4,0,95,
	96,3,10,5,0,96,97,5,30,0,0,97,101,3,12,6,0,98,99,5,23,0,0,99,100,5,5,0,
	0,100,102,3,14,7,0,101,98,1,0,0,0,101,102,1,0,0,0,102,105,1,0,0,0,103,104,
	5,31,0,0,104,106,3,36,18,0,105,103,1,0,0,0,105,106,1,0,0,0,106,110,1,0,
	0,0,107,108,5,6,0,0,108,109,5,5,0,0,109,111,3,18,9,0,110,107,1,0,0,0,110,
	111,1,0,0,0,111,114,1,0,0,0,112,113,5,7,0,0,113,115,3,20,10,0,114,112,1,
	0,0,0,114,115,1,0,0,0,115,5,1,0,0,0,116,123,5,1,0,0,117,123,5,3,0,0,118,
	123,5,15,0,0,119,123,5,17,0,0,120,123,5,19,0,0,121,123,5,28,0,0,122,116,
	1,0,0,0,122,117,1,0,0,0,122,118,1,0,0,0,122,119,1,0,0,0,122,120,1,0,0,0,
	122,121,1,0,0,0,123,7,1,0,0,0,124,135,5,35,0,0,125,135,5,20,0,0,126,131,
	3,52,26,0,127,128,5,45,0,0,128,130,3,52,26,0,129,127,1,0,0,0,130,133,1,
	0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,134,
	124,1,0,0,0,134,125,1,0,0,0,134,126,1,0,0,0,135,9,1,0,0,0,136,137,5,12,
	0,0,137,142,3,60,30,0,138,139,5,45,0,0,139,141,3,60,30,0,140,138,1,0,0,
	0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,146,1,0,0,0,144,142,
	1,0,0,0,145,136,1,0,0,0,145,146,1,0,0,0,146,11,1,0,0,0,147,148,6,6,-1,0,
	148,149,5,47,0,0,149,150,3,12,6,0,150,151,5,48,0,0,151,159,1,0,0,0,152,
	159,3,54,27,0,153,154,5,21,0,0,154,155,5,47,0,0,155,156,3,58,29,0,156,157,
	5,48,0,0,157,159,1,0,0,0,158,147,1,0,0,0,158,152,1,0,0,0,158,153,1,0,0,
	0,159,181,1,0,0,0,160,161,10,4,0,0,161,162,5,43,0,0,162,180,3,12,6,5,163,
	164,10,3,0,0,164,165,5,44,0,0,165,180,3,12,6,4,166,167,10,2,0,0,167,168,
	5,22,0,0,168,180,3,12,6,3,169,170,10,7,0,0,170,171,5,4,0,0,171,180,3,56,
	28,0,172,173,10,6,0,0,173,180,5,33,0,0,174,175,10,5,0,0,175,180,5,53,0,
	0,176,177,10,1,0,0,177,178,5,11,0,0,178,180,3,22,11,0,179,160,1,0,0,0,179,
	163,1,0,0,0,179,166,1,0,0,0,179,169,1,0,0,0,179,172,1,0,0,0,179,174,1,0,
	0,0,179,176,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,
	13,1,0,0,0,183,181,1,0,0,0,184,185,5,49,0,0,185,186,3,16,8,0,186,192,5,
	50,0,0,187,188,5,45,0,0,188,189,5,49,0,0,189,190,3,16,8,0,190,191,5,50,
	0,0,191,193,1,0,0,0,192,187,1,0,0,0,192,193,1,0,0,0,193,15,1,0,0,0,194,
	199,3,64,32,0,195,196,5,45,0,0,196,198,3,64,32,0,197,195,1,0,0,0,198,201,
	1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,17,1,0,0,0,201,199,1,0,0,0,
	202,206,5,3,0,0,203,206,5,23,0,0,204,206,5,20,0,0,205,202,1,0,0,0,205,203,
	1,0,0,0,205,204,1,0,0,0,206,19,1,0,0,0,207,208,3,66,33,0,208,21,1,0,0,0,
	209,210,6,11,-1,0,210,211,5,47,0,0,211,212,3,22,11,0,212,213,5,48,0,0,213,
	220,1,0,0,0,214,215,3,54,27,0,215,216,5,49,0,0,216,217,3,24,12,0,217,218,
	5,50,0,0,218,220,1,0,0,0,219,209,1,0,0,0,219,214,1,0,0,0,220,229,1,0,0,
	0,221,222,10,2,0,0,222,223,5,2,0,0,223,228,3,22,11,3,224,225,10,1,0,0,225,
	226,5,22,0,0,226,228,3,22,11,2,227,221,1,0,0,0,227,224,1,0,0,0,228,231,
	1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,23,1,0,0,0,231,229,1,0,0,0,
	232,233,6,12,-1,0,233,234,5,47,0,0,234,235,3,24,12,0,235,236,5,48,0,0,236,
	269,1,0,0,0,237,238,5,21,0,0,238,269,3,24,12,8,239,240,3,28,14,0,240,241,
	7,0,0,0,241,242,3,28,14,0,242,269,1,0,0,0,243,244,3,26,13,0,244,245,7,1,
	0,0,245,246,3,26,13,0,246,269,1,0,0,0,247,248,3,64,32,0,248,249,5,16,0,
	0,249,250,3,26,13,0,250,269,1,0,0,0,251,255,3,64,32,0,252,256,5,14,0,0,
	253,254,5,21,0,0,254,256,5,14,0,0,255,252,1,0,0,0,255,253,1,0,0,0,256,257,
	1,0,0,0,257,258,3,30,15,0,258,269,1,0,0,0,259,260,3,28,14,0,260,261,5,14,
	0,0,261,262,5,24,0,0,262,263,5,47,0,0,263,264,3,28,14,0,264,265,5,45,0,
	0,265,266,3,28,14,0,266,267,5,48,0,0,267,269,1,0,0,0,268,232,1,0,0,0,268,
	237,1,0,0,0,268,239,1,0,0,0,268,243,1,0,0,0,268,247,1,0,0,0,268,251,1,0,
	0,0,268,259,1,0,0,0,269,278,1,0,0,0,270,271,10,5,0,0,271,272,5,2,0,0,272,
	277,3,24,12,6,273,274,10,4,0,0,274,275,5,22,0,0,275,277,3,24,12,5,276,270,
	1,0,0,0,276,273,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,
	279,25,1,0,0,0,280,278,1,0,0,0,281,284,3,72,36,0,282,284,3,64,32,0,283,
	281,1,0,0,0,283,282,1,0,0,0,284,27,1,0,0,0,285,286,6,14,-1,0,286,287,5,
	47,0,0,287,288,3,28,14,0,288,289,5,48,0,0,289,295,1,0,0,0,290,295,3,70,
	35,0,291,295,3,64,32,0,292,293,7,2,0,0,293,295,3,28,14,3,294,285,1,0,0,
	0,294,290,1,0,0,0,294,291,1,0,0,0,294,292,1,0,0,0,295,304,1,0,0,0,296,297,
	10,2,0,0,297,298,7,3,0,0,298,303,3,28,14,3,299,300,10,1,0,0,300,301,7,2,
	0,0,301,303,3,28,14,2,302,296,1,0,0,0,302,299,1,0,0,0,303,306,1,0,0,0,304,
	302,1,0,0,0,304,305,1,0,0,0,305,29,1,0,0,0,306,304,1,0,0,0,307,308,5,51,
	0,0,308,309,3,32,16,0,309,310,5,52,0,0,310,316,1,0,0,0,311,312,5,51,0,0,
	312,313,3,34,17,0,313,314,5,52,0,0,314,316,1,0,0,0,315,307,1,0,0,0,315,
	311,1,0,0,0,316,31,1,0,0,0,317,322,3,70,35,0,318,319,5,45,0,0,319,321,3,
	70,35,0,320,318,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,
	323,339,1,0,0,0,324,322,1,0,0,0,325,326,3,66,33,0,326,327,5,46,0,0,327,
	328,3,66,33,0,328,339,1,0,0,0,329,330,3,68,34,0,330,331,5,46,0,0,331,332,
	3,68,34,0,332,339,1,0,0,0,333,334,3,70,35,0,334,335,5,46,0,0,335,339,1,
	0,0,0,336,337,5,46,0,0,337,339,3,70,35,0,338,317,1,0,0,0,338,325,1,0,0,
	0,338,329,1,0,0,0,338,333,1,0,0,0,338,336,1,0,0,0,339,33,1,0,0,0,340,345,
	3,72,36,0,341,342,5,45,0,0,342,344,3,72,36,0,343,341,1,0,0,0,344,347,1,
	0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,35,1,0,0,0,347,345,1,0,0,0,348,
	352,3,38,19,0,349,352,3,40,20,0,350,352,3,48,24,0,351,348,1,0,0,0,351,349,
	1,0,0,0,351,350,1,0,0,0,352,37,1,0,0,0,353,354,3,66,33,0,354,355,5,10,0,
	0,355,39,1,0,0,0,356,358,3,42,21,0,357,356,1,0,0,0,357,358,1,0,0,0,358,
	360,1,0,0,0,359,361,3,44,22,0,360,359,1,0,0,0,360,361,1,0,0,0,361,363,1,
	0,0,0,362,364,3,46,23,0,363,362,1,0,0,0,363,364,1,0,0,0,364,41,1,0,0,0,
	365,366,3,70,35,0,366,367,5,13,0,0,367,43,1,0,0,0,368,369,3,70,35,0,369,
	370,5,18,0,0,370,45,1,0,0,0,371,372,3,70,35,0,372,373,5,25,0,0,373,47,1,
	0,0,0,374,375,3,66,33,0,375,376,5,49,0,0,376,377,3,74,37,0,377,378,5,50,
	0,0,378,49,1,0,0,0,379,382,3,54,27,0,380,381,5,4,0,0,381,383,3,56,28,0,
	382,380,1,0,0,0,382,383,1,0,0,0,383,51,1,0,0,0,384,389,3,54,27,0,385,386,
	5,49,0,0,386,387,3,62,31,0,387,388,5,50,0,0,388,390,1,0,0,0,389,385,1,0,
	0,0,389,390,1,0,0,0,390,53,1,0,0,0,391,392,3,60,30,0,392,393,5,39,0,0,393,
	395,1,0,0,0,394,391,1,0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,397,3,56,
	28,0,397,55,1,0,0,0,398,399,3,74,37,0,399,57,1,0,0,0,400,401,6,29,-1,0,
	401,402,3,54,27,0,402,408,1,0,0,0,403,404,10,1,0,0,404,405,5,11,0,0,405,
	407,3,22,11,0,406,403,1,0,0,0,407,410,1,0,0,0,408,406,1,0,0,0,408,409,1,
	0,0,0,409,59,1,0,0,0,410,408,1,0,0,0,411,412,3,74,37,0,412,61,1,0,0,0,413,
	418,3,64,32,0,414,415,5,45,0,0,415,417,3,64,32,0,416,414,1,0,0,0,417,420,
	1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,63,1,0,0,0,420,418,1,0,0,0,
	421,422,3,74,37,0,422,65,1,0,0,0,423,424,5,56,0,0,424,67,1,0,0,0,425,426,
	5,55,0,0,426,69,1,0,0,0,427,430,3,66,33,0,428,430,3,68,34,0,429,427,1,0,
	0,0,429,428,1,0,0,0,430,71,1,0,0,0,431,432,5,58,0,0,432,73,1,0,0,0,433,
	434,5,54,0,0,434,75,1,0,0,0,435,436,7,4,0,0,436,77,1,0,0,0,43,80,82,92,
	101,105,110,114,122,131,134,142,145,158,179,181,192,199,205,219,227,229,
	255,268,276,278,283,294,302,304,315,322,338,345,351,357,360,363,382,389,
	394,408,418,429];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CEQLQueryParser.__ATN) {
			CEQLQueryParser.__ATN = new ATNDeserializer().deserialize(CEQLQueryParser._serializedATN);
		}

		return CEQLQueryParser.__ATN;
	}


	static DecisionsToDFA = CEQLQueryParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

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
	    if(listener.enterParse) {
	 		listener.enterParse(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitParse) {
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
	    if(listener.enterError) {
	 		listener.enterError(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitError) {
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
	    if(listener.enterCore_query) {
	 		listener.enterCore_query(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitCore_query) {
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
	    if(listener.enterSs_last) {
	 		listener.enterSs_last(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSs_last) {
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
	    if(listener.enterSs_strict) {
	 		listener.enterSs_strict(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSs_strict) {
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
	    if(listener.enterSs_any) {
	 		listener.enterSs_any(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSs_any) {
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
	    if(listener.enterSs_next) {
	 		listener.enterSs_next(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSs_next) {
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
	    if(listener.enterSs_max) {
	 		listener.enterSs_max(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSs_max) {
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
	    if(listener.enterSs_all) {
	 		listener.enterSs_all(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSs_all) {
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
	    if(listener.enterS_star) {
	 		listener.enterS_star(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitS_star) {
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
	    if(listener.enterS_event_name_with_projection_list) {
	 		listener.enterS_event_name_with_projection_list(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitS_event_name_with_projection_list) {
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
	    if(listener.enterS_none) {
	 		listener.enterS_none(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitS_none) {
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
	    if(listener.enterFrom_clause) {
	 		listener.enterFrom_clause(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitFrom_clause) {
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
	    if(listener.enterContiguous_sequencing_cel_formula) {
	 		listener.enterContiguous_sequencing_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitContiguous_sequencing_cel_formula) {
	 		listener.exitContiguous_sequencing_cel_formula(this);
		}
	}
}
export class Not_event_type_atomic_cel_formulaContext extends Cel_formulaContext {
	constructor(parser: CEQLQueryParser, ctx: Cel_formulaContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public K_NOT(): TerminalNode {
		return this.getToken(CEQLQueryParser.K_NOT, 0);
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
	public enterRule(listener: CEQLQueryParserListener): void {
	    if(listener.enterNot_event_type_atomic_cel_formula) {
	 		listener.enterNot_event_type_atomic_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNot_event_type_atomic_cel_formula) {
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
	    if(listener.enterEvent_type_cel_formula) {
	 		listener.enterEvent_type_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitEvent_type_cel_formula) {
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
	    if(listener.enterContiguous_iteration_cel_formula) {
	 		listener.enterContiguous_iteration_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitContiguous_iteration_cel_formula) {
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
	    if(listener.enterPar_cel_formula) {
	 		listener.enterPar_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitPar_cel_formula) {
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
	    if(listener.enterFilter_cel_formula) {
	 		listener.enterFilter_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitFilter_cel_formula) {
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
	    if(listener.enterOr_cel_formula) {
	 		listener.enterOr_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitOr_cel_formula) {
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
	    if(listener.enterAs_cel_formula) {
	 		listener.enterAs_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAs_cel_formula) {
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
	    if(listener.enterNon_contiguous_sequencing_cel_formula) {
	 		listener.enterNon_contiguous_sequencing_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNon_contiguous_sequencing_cel_formula) {
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
	    if(listener.enterNon_contiguous_iteration_cel_formula) {
	 		listener.enterNon_contiguous_iteration_cel_formula(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNon_contiguous_iteration_cel_formula) {
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
	    if(listener.enterPartition_list) {
	 		listener.enterPartition_list(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitPartition_list) {
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
	    if(listener.enterAttribute_list) {
	 		listener.enterAttribute_list(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAttribute_list) {
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
	    if(listener.enterCp_partition) {
	 		listener.enterCp_partition(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitCp_partition) {
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
	    if(listener.enterCp_any) {
	 		listener.enterCp_any(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitCp_any) {
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
	    if(listener.enterCp_none) {
	 		listener.enterCp_none(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitCp_none) {
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
	    if(listener.enterL_integer) {
	 		listener.enterL_integer(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitL_integer) {
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
	    if(listener.enterPar_filter) {
	 		listener.enterPar_filter(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitPar_filter) {
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
	    if(listener.enterAnd_filter) {
	 		listener.enterAnd_filter(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAnd_filter) {
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
	    if(listener.enterAtomic_filter) {
	 		listener.enterAtomic_filter(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAtomic_filter) {
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
	    if(listener.enterOr_filter) {
	 		listener.enterOr_filter(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitOr_filter) {
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
	public string_literal(): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
	}
	public enterRule(listener: CEQLQueryParserListener): void {
	    if(listener.enterRegex_predicate) {
	 		listener.enterRegex_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitRegex_predicate) {
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
	    if(listener.enterIn_range_predicate) {
	 		listener.enterIn_range_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitIn_range_predicate) {
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
	    if(listener.enterIn_predicate) {
	 		listener.enterIn_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitIn_predicate) {
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
	    if(listener.enterNot_predicate) {
	 		listener.enterNot_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNot_predicate) {
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
	    if(listener.enterPar_predicate) {
	 		listener.enterPar_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitPar_predicate) {
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
	    if(listener.enterAnd_predicate) {
	 		listener.enterAnd_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAnd_predicate) {
	 		listener.exitAnd_predicate(this);
		}
	}
}
export class Equality_string_predicateContext extends PredicateContext {
	constructor(parser: CEQLQueryParser, ctx: PredicateContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public string_literal_list(): String_literalContext[] {
		return this.getTypedRuleContexts(String_literalContext) as String_literalContext[];
	}
	public string_literal(i: number): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, i) as String_literalContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(CEQLQueryParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(CEQLQueryParser.NEQ, 0);
	}
	public enterRule(listener: CEQLQueryParserListener): void {
	    if(listener.enterEquality_string_predicate) {
	 		listener.enterEquality_string_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitEquality_string_predicate) {
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
	    if(listener.enterInequality_predicate) {
	 		listener.enterInequality_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitInequality_predicate) {
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
	    if(listener.enterOr_predicate) {
	 		listener.enterOr_predicate(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitOr_predicate) {
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
	    if(listener.enterString_literal) {
	 		listener.enterString_literal(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitString_literal) {
	 		listener.exitString_literal(this);
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
	    if(listener.enterMul_math_expr) {
	 		listener.enterMul_math_expr(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitMul_math_expr) {
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
	    if(listener.enterSum_math_expr) {
	 		listener.enterSum_math_expr(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSum_math_expr) {
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
	    if(listener.enterNumber_math_expr) {
	 		listener.enterNumber_math_expr(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNumber_math_expr) {
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
	    if(listener.enterUnary_math_expr) {
	 		listener.enterUnary_math_expr(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitUnary_math_expr) {
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
	    if(listener.enterAttribute_math_expr) {
	 		listener.enterAttribute_math_expr(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAttribute_math_expr) {
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
	    if(listener.enterPar_math_expr) {
	 		listener.enterPar_math_expr(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitPar_math_expr) {
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
	    if(listener.enterValue_seq) {
	 		listener.enterValue_seq(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitValue_seq) {
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
	    if(listener.enterNumber_list) {
	 		listener.enterNumber_list(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNumber_list) {
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
	    if(listener.enterDouble_range) {
	 		listener.enterDouble_range(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitDouble_range) {
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
	    if(listener.enterNumber_range_lower) {
	 		listener.enterNumber_range_lower(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNumber_range_lower) {
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
	    if(listener.enterNumber_range_upper) {
	 		listener.enterNumber_range_upper(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNumber_range_upper) {
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
	    if(listener.enterInteger_range) {
	 		listener.enterInteger_range(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitInteger_range) {
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
	    if(listener.enterString_seq) {
	 		listener.enterString_seq(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitString_seq) {
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
	    if(listener.enterTime_window) {
	 		listener.enterTime_window(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitTime_window) {
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
	    if(listener.enterEvent_span) {
	 		listener.enterEvent_span(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitEvent_span) {
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
	    if(listener.enterTime_span) {
	 		listener.enterTime_span(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitTime_span) {
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
	    if(listener.enterHour_span) {
	 		listener.enterHour_span(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitHour_span) {
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
	    if(listener.enterMinute_span) {
	 		listener.enterMinute_span(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitMinute_span) {
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
	    if(listener.enterSecond_span) {
	 		listener.enterSecond_span(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitSecond_span) {
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
	    if(listener.enterCustom_span) {
	 		listener.enterCustom_span(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitCustom_span) {
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
	    if(listener.enterNamed_event) {
	 		listener.enterNamed_event(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNamed_event) {
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
	    if(listener.enterS_event_name_with_projection) {
	 		listener.enterS_event_name_with_projection(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitS_event_name_with_projection) {
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
	    if(listener.enterS_event_name) {
	 		listener.enterS_event_name(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitS_event_name) {
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
	    if(listener.enterEvent_name) {
	 		listener.enterEvent_name(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitEvent_name) {
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
	    if(listener.enterAtomic_cel_formula_filter) {
	 		listener.enterAtomic_cel_formula_filter(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAtomic_cel_formula_filter) {
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
	    if(listener.enterAtomic_cel_formula_r) {
	 		listener.enterAtomic_cel_formula_r(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAtomic_cel_formula_r) {
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
	    if(listener.enterStream_name) {
	 		listener.enterStream_name(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitStream_name) {
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
	    if(listener.enterList_of_attribute_names) {
	 		listener.enterList_of_attribute_names(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitList_of_attribute_names) {
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
	    if(listener.enterAttribute_name) {
	 		listener.enterAttribute_name(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAttribute_name) {
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
	    if(listener.enterInteger) {
	 		listener.enterInteger(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitInteger) {
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
	    if(listener.enterDouble) {
	 		listener.enterDouble(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitDouble) {
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
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitNumber) {
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
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitString) {
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
	    if(listener.enterAny_name) {
	 		listener.enterAny_name(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitAny_name) {
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
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: CEQLQueryParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}
