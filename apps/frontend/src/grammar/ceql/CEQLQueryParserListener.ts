// Generated from ceql/CEQLQueryParser.g4 by ANTLR 4.13.1
// @ts-nocheck
import { ParseTreeListener } from 'antlr4';

import { ParseContext } from './CEQLQueryParser';
import { ErrorContext } from './CEQLQueryParser';
import { Core_queryContext } from './CEQLQueryParser';
import { Ss_allContext } from './CEQLQueryParser';
import { Ss_anyContext } from './CEQLQueryParser';
import { Ss_lastContext } from './CEQLQueryParser';
import { Ss_maxContext } from './CEQLQueryParser';
import { Ss_nextContext } from './CEQLQueryParser';
import { Ss_strictContext } from './CEQLQueryParser';
import { S_starContext } from './CEQLQueryParser';
import { S_noneContext } from './CEQLQueryParser';
import { S_event_name_with_projection_listContext } from './CEQLQueryParser';
import { From_clauseContext } from './CEQLQueryParser';
import { Contiguous_sequencing_cel_formulaContext } from './CEQLQueryParser';
import { Not_event_type_atomic_cel_formulaContext } from './CEQLQueryParser';
import { Event_type_cel_formulaContext } from './CEQLQueryParser';
import { Contiguous_iteration_cel_formulaContext } from './CEQLQueryParser';
import { Par_cel_formulaContext } from './CEQLQueryParser';
import { Filter_cel_formulaContext } from './CEQLQueryParser';
import { Or_cel_formulaContext } from './CEQLQueryParser';
import { As_cel_formulaContext } from './CEQLQueryParser';
import { Non_contiguous_sequencing_cel_formulaContext } from './CEQLQueryParser';
import { Non_contiguous_iteration_cel_formulaContext } from './CEQLQueryParser';
import { Partition_listContext } from './CEQLQueryParser';
import { Attribute_listContext } from './CEQLQueryParser';
import { Cp_anyContext } from './CEQLQueryParser';
import { Cp_partitionContext } from './CEQLQueryParser';
import { Cp_noneContext } from './CEQLQueryParser';
import { L_integerContext } from './CEQLQueryParser';
import { Par_filterContext } from './CEQLQueryParser';
import { And_filterContext } from './CEQLQueryParser';
import { Atomic_filterContext } from './CEQLQueryParser';
import { Or_filterContext } from './CEQLQueryParser';
import { Regex_predicateContext } from './CEQLQueryParser';
import { In_range_predicateContext } from './CEQLQueryParser';
import { In_predicateContext } from './CEQLQueryParser';
import { Not_predicateContext } from './CEQLQueryParser';
import { Par_predicateContext } from './CEQLQueryParser';
import { And_predicateContext } from './CEQLQueryParser';
import { Equality_string_predicateContext } from './CEQLQueryParser';
import { Inequality_predicateContext } from './CEQLQueryParser';
import { Or_predicateContext } from './CEQLQueryParser';
import { String_literalContext } from './CEQLQueryParser';
import { Mul_math_exprContext } from './CEQLQueryParser';
import { Sum_math_exprContext } from './CEQLQueryParser';
import { Number_math_exprContext } from './CEQLQueryParser';
import { Unary_math_exprContext } from './CEQLQueryParser';
import { Attribute_math_exprContext } from './CEQLQueryParser';
import { Par_math_exprContext } from './CEQLQueryParser';
import { Value_seqContext } from './CEQLQueryParser';
import { Number_listContext } from './CEQLQueryParser';
import { Integer_rangeContext } from './CEQLQueryParser';
import { Double_rangeContext } from './CEQLQueryParser';
import { Number_range_lowerContext } from './CEQLQueryParser';
import { Number_range_upperContext } from './CEQLQueryParser';
import { String_seqContext } from './CEQLQueryParser';
import { Time_windowContext } from './CEQLQueryParser';
import { Event_spanContext } from './CEQLQueryParser';
import { Time_spanContext } from './CEQLQueryParser';
import { Hour_spanContext } from './CEQLQueryParser';
import { Minute_spanContext } from './CEQLQueryParser';
import { Second_spanContext } from './CEQLQueryParser';
import { Custom_spanContext } from './CEQLQueryParser';
import { Named_eventContext } from './CEQLQueryParser';
import { S_event_name_with_projectionContext } from './CEQLQueryParser';
import { S_event_nameContext } from './CEQLQueryParser';
import { Event_nameContext } from './CEQLQueryParser';
import { Atomic_cel_formula_filterContext } from './CEQLQueryParser';
import { Atomic_cel_formula_rContext } from './CEQLQueryParser';
import { Stream_nameContext } from './CEQLQueryParser';
import { List_of_attribute_namesContext } from './CEQLQueryParser';
import { Attribute_nameContext } from './CEQLQueryParser';
import { IntegerContext } from './CEQLQueryParser';
import { DoubleContext } from './CEQLQueryParser';
import { NumberContext } from './CEQLQueryParser';
import { StringContext } from './CEQLQueryParser';
import { Any_nameContext } from './CEQLQueryParser';
import { KeywordContext } from './CEQLQueryParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CEQLQueryParser`.
 */
export default class CEQLQueryParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `CEQLQueryParser.parse`.
   * @param ctx the parse tree
   */
  enterParse?: (ctx: ParseContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.parse`.
   * @param ctx the parse tree
   */
  exitParse?: (ctx: ParseContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.error`.
   * @param ctx the parse tree
   */
  enterError?: (ctx: ErrorContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.error`.
   * @param ctx the parse tree
   */
  exitError?: (ctx: ErrorContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.core_query`.
   * @param ctx the parse tree
   */
  enterCore_query?: (ctx: Core_queryContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.core_query`.
   * @param ctx the parse tree
   */
  exitCore_query?: (ctx: Core_queryContext) => void;
  /**
   * Enter a parse tree produced by the `ss_all`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  enterSs_all?: (ctx: Ss_allContext) => void;
  /**
   * Exit a parse tree produced by the `ss_all`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  exitSs_all?: (ctx: Ss_allContext) => void;
  /**
   * Enter a parse tree produced by the `ss_any`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  enterSs_any?: (ctx: Ss_anyContext) => void;
  /**
   * Exit a parse tree produced by the `ss_any`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  exitSs_any?: (ctx: Ss_anyContext) => void;
  /**
   * Enter a parse tree produced by the `ss_last`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  enterSs_last?: (ctx: Ss_lastContext) => void;
  /**
   * Exit a parse tree produced by the `ss_last`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  exitSs_last?: (ctx: Ss_lastContext) => void;
  /**
   * Enter a parse tree produced by the `ss_max`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  enterSs_max?: (ctx: Ss_maxContext) => void;
  /**
   * Exit a parse tree produced by the `ss_max`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  exitSs_max?: (ctx: Ss_maxContext) => void;
  /**
   * Enter a parse tree produced by the `ss_next`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  enterSs_next?: (ctx: Ss_nextContext) => void;
  /**
   * Exit a parse tree produced by the `ss_next`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  exitSs_next?: (ctx: Ss_nextContext) => void;
  /**
   * Enter a parse tree produced by the `ss_strict`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  enterSs_strict?: (ctx: Ss_strictContext) => void;
  /**
   * Exit a parse tree produced by the `ss_strict`
   * labeled alternative in `CEQLQueryParser.selection_strategy`.
   * @param ctx the parse tree
   */
  exitSs_strict?: (ctx: Ss_strictContext) => void;
  /**
   * Enter a parse tree produced by the `s_star`
   * labeled alternative in `CEQLQueryParser.list_of_variables`.
   * @param ctx the parse tree
   */
  enterS_star?: (ctx: S_starContext) => void;
  /**
   * Exit a parse tree produced by the `s_star`
   * labeled alternative in `CEQLQueryParser.list_of_variables`.
   * @param ctx the parse tree
   */
  exitS_star?: (ctx: S_starContext) => void;
  /**
   * Enter a parse tree produced by the `s_none`
   * labeled alternative in `CEQLQueryParser.list_of_variables`.
   * @param ctx the parse tree
   */
  enterS_none?: (ctx: S_noneContext) => void;
  /**
   * Exit a parse tree produced by the `s_none`
   * labeled alternative in `CEQLQueryParser.list_of_variables`.
   * @param ctx the parse tree
   */
  exitS_none?: (ctx: S_noneContext) => void;
  /**
   * Enter a parse tree produced by the `s_event_name_with_projection_list`
   * labeled alternative in `CEQLQueryParser.list_of_variables`.
   * @param ctx the parse tree
   */
  enterS_event_name_with_projection_list?: (ctx: S_event_name_with_projection_listContext) => void;
  /**
   * Exit a parse tree produced by the `s_event_name_with_projection_list`
   * labeled alternative in `CEQLQueryParser.list_of_variables`.
   * @param ctx the parse tree
   */
  exitS_event_name_with_projection_list?: (ctx: S_event_name_with_projection_listContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.from_clause`.
   * @param ctx the parse tree
   */
  enterFrom_clause?: (ctx: From_clauseContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.from_clause`.
   * @param ctx the parse tree
   */
  exitFrom_clause?: (ctx: From_clauseContext) => void;
  /**
   * Enter a parse tree produced by the `contiguous_sequencing_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterContiguous_sequencing_cel_formula?: (ctx: Contiguous_sequencing_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `contiguous_sequencing_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitContiguous_sequencing_cel_formula?: (ctx: Contiguous_sequencing_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `not_event_type_atomic_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterNot_event_type_atomic_cel_formula?: (ctx: Not_event_type_atomic_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `not_event_type_atomic_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitNot_event_type_atomic_cel_formula?: (ctx: Not_event_type_atomic_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `event_type_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterEvent_type_cel_formula?: (ctx: Event_type_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `event_type_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitEvent_type_cel_formula?: (ctx: Event_type_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `contiguous_iteration_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterContiguous_iteration_cel_formula?: (ctx: Contiguous_iteration_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `contiguous_iteration_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitContiguous_iteration_cel_formula?: (ctx: Contiguous_iteration_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `par_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterPar_cel_formula?: (ctx: Par_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `par_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitPar_cel_formula?: (ctx: Par_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `filter_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterFilter_cel_formula?: (ctx: Filter_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `filter_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitFilter_cel_formula?: (ctx: Filter_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `or_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterOr_cel_formula?: (ctx: Or_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `or_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitOr_cel_formula?: (ctx: Or_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `as_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterAs_cel_formula?: (ctx: As_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `as_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitAs_cel_formula?: (ctx: As_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `non_contiguous_sequencing_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterNon_contiguous_sequencing_cel_formula?: (ctx: Non_contiguous_sequencing_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `non_contiguous_sequencing_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitNon_contiguous_sequencing_cel_formula?: (ctx: Non_contiguous_sequencing_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by the `non_contiguous_iteration_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  enterNon_contiguous_iteration_cel_formula?: (ctx: Non_contiguous_iteration_cel_formulaContext) => void;
  /**
   * Exit a parse tree produced by the `non_contiguous_iteration_cel_formula`
   * labeled alternative in `CEQLQueryParser.cel_formula`.
   * @param ctx the parse tree
   */
  exitNon_contiguous_iteration_cel_formula?: (ctx: Non_contiguous_iteration_cel_formulaContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.partition_list`.
   * @param ctx the parse tree
   */
  enterPartition_list?: (ctx: Partition_listContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.partition_list`.
   * @param ctx the parse tree
   */
  exitPartition_list?: (ctx: Partition_listContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.attribute_list`.
   * @param ctx the parse tree
   */
  enterAttribute_list?: (ctx: Attribute_listContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.attribute_list`.
   * @param ctx the parse tree
   */
  exitAttribute_list?: (ctx: Attribute_listContext) => void;
  /**
   * Enter a parse tree produced by the `cp_any`
   * labeled alternative in `CEQLQueryParser.consumption_policy`.
   * @param ctx the parse tree
   */
  enterCp_any?: (ctx: Cp_anyContext) => void;
  /**
   * Exit a parse tree produced by the `cp_any`
   * labeled alternative in `CEQLQueryParser.consumption_policy`.
   * @param ctx the parse tree
   */
  exitCp_any?: (ctx: Cp_anyContext) => void;
  /**
   * Enter a parse tree produced by the `cp_partition`
   * labeled alternative in `CEQLQueryParser.consumption_policy`.
   * @param ctx the parse tree
   */
  enterCp_partition?: (ctx: Cp_partitionContext) => void;
  /**
   * Exit a parse tree produced by the `cp_partition`
   * labeled alternative in `CEQLQueryParser.consumption_policy`.
   * @param ctx the parse tree
   */
  exitCp_partition?: (ctx: Cp_partitionContext) => void;
  /**
   * Enter a parse tree produced by the `cp_none`
   * labeled alternative in `CEQLQueryParser.consumption_policy`.
   * @param ctx the parse tree
   */
  enterCp_none?: (ctx: Cp_noneContext) => void;
  /**
   * Exit a parse tree produced by the `cp_none`
   * labeled alternative in `CEQLQueryParser.consumption_policy`.
   * @param ctx the parse tree
   */
  exitCp_none?: (ctx: Cp_noneContext) => void;
  /**
   * Enter a parse tree produced by the `l_integer`
   * labeled alternative in `CEQLQueryParser.limit`.
   * @param ctx the parse tree
   */
  enterL_integer?: (ctx: L_integerContext) => void;
  /**
   * Exit a parse tree produced by the `l_integer`
   * labeled alternative in `CEQLQueryParser.limit`.
   * @param ctx the parse tree
   */
  exitL_integer?: (ctx: L_integerContext) => void;
  /**
   * Enter a parse tree produced by the `par_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  enterPar_filter?: (ctx: Par_filterContext) => void;
  /**
   * Exit a parse tree produced by the `par_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  exitPar_filter?: (ctx: Par_filterContext) => void;
  /**
   * Enter a parse tree produced by the `and_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  enterAnd_filter?: (ctx: And_filterContext) => void;
  /**
   * Exit a parse tree produced by the `and_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  exitAnd_filter?: (ctx: And_filterContext) => void;
  /**
   * Enter a parse tree produced by the `atomic_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  enterAtomic_filter?: (ctx: Atomic_filterContext) => void;
  /**
   * Exit a parse tree produced by the `atomic_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  exitAtomic_filter?: (ctx: Atomic_filterContext) => void;
  /**
   * Enter a parse tree produced by the `or_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  enterOr_filter?: (ctx: Or_filterContext) => void;
  /**
   * Exit a parse tree produced by the `or_filter`
   * labeled alternative in `CEQLQueryParser.filter`.
   * @param ctx the parse tree
   */
  exitOr_filter?: (ctx: Or_filterContext) => void;
  /**
   * Enter a parse tree produced by the `regex_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterRegex_predicate?: (ctx: Regex_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `regex_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitRegex_predicate?: (ctx: Regex_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `in_range_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterIn_range_predicate?: (ctx: In_range_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `in_range_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitIn_range_predicate?: (ctx: In_range_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `in_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterIn_predicate?: (ctx: In_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `in_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitIn_predicate?: (ctx: In_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `not_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterNot_predicate?: (ctx: Not_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `not_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitNot_predicate?: (ctx: Not_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `par_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterPar_predicate?: (ctx: Par_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `par_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitPar_predicate?: (ctx: Par_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `and_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterAnd_predicate?: (ctx: And_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `and_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitAnd_predicate?: (ctx: And_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `equality_string_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterEquality_string_predicate?: (ctx: Equality_string_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `equality_string_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitEquality_string_predicate?: (ctx: Equality_string_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `inequality_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterInequality_predicate?: (ctx: Inequality_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `inequality_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitInequality_predicate?: (ctx: Inequality_predicateContext) => void;
  /**
   * Enter a parse tree produced by the `or_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  enterOr_predicate?: (ctx: Or_predicateContext) => void;
  /**
   * Exit a parse tree produced by the `or_predicate`
   * labeled alternative in `CEQLQueryParser.predicate`.
   * @param ctx the parse tree
   */
  exitOr_predicate?: (ctx: Or_predicateContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.string_literal`.
   * @param ctx the parse tree
   */
  enterString_literal?: (ctx: String_literalContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.string_literal`.
   * @param ctx the parse tree
   */
  exitString_literal?: (ctx: String_literalContext) => void;
  /**
   * Enter a parse tree produced by the `mul_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  enterMul_math_expr?: (ctx: Mul_math_exprContext) => void;
  /**
   * Exit a parse tree produced by the `mul_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  exitMul_math_expr?: (ctx: Mul_math_exprContext) => void;
  /**
   * Enter a parse tree produced by the `sum_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  enterSum_math_expr?: (ctx: Sum_math_exprContext) => void;
  /**
   * Exit a parse tree produced by the `sum_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  exitSum_math_expr?: (ctx: Sum_math_exprContext) => void;
  /**
   * Enter a parse tree produced by the `number_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  enterNumber_math_expr?: (ctx: Number_math_exprContext) => void;
  /**
   * Exit a parse tree produced by the `number_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  exitNumber_math_expr?: (ctx: Number_math_exprContext) => void;
  /**
   * Enter a parse tree produced by the `unary_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  enterUnary_math_expr?: (ctx: Unary_math_exprContext) => void;
  /**
   * Exit a parse tree produced by the `unary_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  exitUnary_math_expr?: (ctx: Unary_math_exprContext) => void;
  /**
   * Enter a parse tree produced by the `attribute_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  enterAttribute_math_expr?: (ctx: Attribute_math_exprContext) => void;
  /**
   * Exit a parse tree produced by the `attribute_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  exitAttribute_math_expr?: (ctx: Attribute_math_exprContext) => void;
  /**
   * Enter a parse tree produced by the `par_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  enterPar_math_expr?: (ctx: Par_math_exprContext) => void;
  /**
   * Exit a parse tree produced by the `par_math_expr`
   * labeled alternative in `CEQLQueryParser.math_expr`.
   * @param ctx the parse tree
   */
  exitPar_math_expr?: (ctx: Par_math_exprContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.value_seq`.
   * @param ctx the parse tree
   */
  enterValue_seq?: (ctx: Value_seqContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.value_seq`.
   * @param ctx the parse tree
   */
  exitValue_seq?: (ctx: Value_seqContext) => void;
  /**
   * Enter a parse tree produced by the `number_list`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  enterNumber_list?: (ctx: Number_listContext) => void;
  /**
   * Exit a parse tree produced by the `number_list`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  exitNumber_list?: (ctx: Number_listContext) => void;
  /**
   * Enter a parse tree produced by the `integer_range`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  enterInteger_range?: (ctx: Integer_rangeContext) => void;
  /**
   * Exit a parse tree produced by the `integer_range`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  exitInteger_range?: (ctx: Integer_rangeContext) => void;
  /**
   * Enter a parse tree produced by the `double_range`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  enterDouble_range?: (ctx: Double_rangeContext) => void;
  /**
   * Exit a parse tree produced by the `double_range`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  exitDouble_range?: (ctx: Double_rangeContext) => void;
  /**
   * Enter a parse tree produced by the `number_range_lower`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  enterNumber_range_lower?: (ctx: Number_range_lowerContext) => void;
  /**
   * Exit a parse tree produced by the `number_range_lower`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  exitNumber_range_lower?: (ctx: Number_range_lowerContext) => void;
  /**
   * Enter a parse tree produced by the `number_range_upper`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  enterNumber_range_upper?: (ctx: Number_range_upperContext) => void;
  /**
   * Exit a parse tree produced by the `number_range_upper`
   * labeled alternative in `CEQLQueryParser.number_seq`.
   * @param ctx the parse tree
   */
  exitNumber_range_upper?: (ctx: Number_range_upperContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.string_seq`.
   * @param ctx the parse tree
   */
  enterString_seq?: (ctx: String_seqContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.string_seq`.
   * @param ctx the parse tree
   */
  exitString_seq?: (ctx: String_seqContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.time_window`.
   * @param ctx the parse tree
   */
  enterTime_window?: (ctx: Time_windowContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.time_window`.
   * @param ctx the parse tree
   */
  exitTime_window?: (ctx: Time_windowContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.event_span`.
   * @param ctx the parse tree
   */
  enterEvent_span?: (ctx: Event_spanContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.event_span`.
   * @param ctx the parse tree
   */
  exitEvent_span?: (ctx: Event_spanContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.time_span`.
   * @param ctx the parse tree
   */
  enterTime_span?: (ctx: Time_spanContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.time_span`.
   * @param ctx the parse tree
   */
  exitTime_span?: (ctx: Time_spanContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.hour_span`.
   * @param ctx the parse tree
   */
  enterHour_span?: (ctx: Hour_spanContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.hour_span`.
   * @param ctx the parse tree
   */
  exitHour_span?: (ctx: Hour_spanContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.minute_span`.
   * @param ctx the parse tree
   */
  enterMinute_span?: (ctx: Minute_spanContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.minute_span`.
   * @param ctx the parse tree
   */
  exitMinute_span?: (ctx: Minute_spanContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.second_span`.
   * @param ctx the parse tree
   */
  enterSecond_span?: (ctx: Second_spanContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.second_span`.
   * @param ctx the parse tree
   */
  exitSecond_span?: (ctx: Second_spanContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.custom_span`.
   * @param ctx the parse tree
   */
  enterCustom_span?: (ctx: Custom_spanContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.custom_span`.
   * @param ctx the parse tree
   */
  exitCustom_span?: (ctx: Custom_spanContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.named_event`.
   * @param ctx the parse tree
   */
  enterNamed_event?: (ctx: Named_eventContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.named_event`.
   * @param ctx the parse tree
   */
  exitNamed_event?: (ctx: Named_eventContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.s_event_name_with_projection`.
   * @param ctx the parse tree
   */
  enterS_event_name_with_projection?: (ctx: S_event_name_with_projectionContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.s_event_name_with_projection`.
   * @param ctx the parse tree
   */
  exitS_event_name_with_projection?: (ctx: S_event_name_with_projectionContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.s_event_name`.
   * @param ctx the parse tree
   */
  enterS_event_name?: (ctx: S_event_nameContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.s_event_name`.
   * @param ctx the parse tree
   */
  exitS_event_name?: (ctx: S_event_nameContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.event_name`.
   * @param ctx the parse tree
   */
  enterEvent_name?: (ctx: Event_nameContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.event_name`.
   * @param ctx the parse tree
   */
  exitEvent_name?: (ctx: Event_nameContext) => void;
  /**
   * Enter a parse tree produced by the `atomic_cel_formula_filter`
   * labeled alternative in `CEQLQueryParser.atomic_cel_formula`.
   * @param ctx the parse tree
   */
  enterAtomic_cel_formula_filter?: (ctx: Atomic_cel_formula_filterContext) => void;
  /**
   * Exit a parse tree produced by the `atomic_cel_formula_filter`
   * labeled alternative in `CEQLQueryParser.atomic_cel_formula`.
   * @param ctx the parse tree
   */
  exitAtomic_cel_formula_filter?: (ctx: Atomic_cel_formula_filterContext) => void;
  /**
   * Enter a parse tree produced by the `atomic_cel_formula_r`
   * labeled alternative in `CEQLQueryParser.atomic_cel_formula`.
   * @param ctx the parse tree
   */
  enterAtomic_cel_formula_r?: (ctx: Atomic_cel_formula_rContext) => void;
  /**
   * Exit a parse tree produced by the `atomic_cel_formula_r`
   * labeled alternative in `CEQLQueryParser.atomic_cel_formula`.
   * @param ctx the parse tree
   */
  exitAtomic_cel_formula_r?: (ctx: Atomic_cel_formula_rContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.stream_name`.
   * @param ctx the parse tree
   */
  enterStream_name?: (ctx: Stream_nameContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.stream_name`.
   * @param ctx the parse tree
   */
  exitStream_name?: (ctx: Stream_nameContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.list_of_attribute_names`.
   * @param ctx the parse tree
   */
  enterList_of_attribute_names?: (ctx: List_of_attribute_namesContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.list_of_attribute_names`.
   * @param ctx the parse tree
   */
  exitList_of_attribute_names?: (ctx: List_of_attribute_namesContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.attribute_name`.
   * @param ctx the parse tree
   */
  enterAttribute_name?: (ctx: Attribute_nameContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.attribute_name`.
   * @param ctx the parse tree
   */
  exitAttribute_name?: (ctx: Attribute_nameContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.integer`.
   * @param ctx the parse tree
   */
  enterInteger?: (ctx: IntegerContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.integer`.
   * @param ctx the parse tree
   */
  exitInteger?: (ctx: IntegerContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.double`.
   * @param ctx the parse tree
   */
  enterDouble?: (ctx: DoubleContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.double`.
   * @param ctx the parse tree
   */
  exitDouble?: (ctx: DoubleContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.number`.
   * @param ctx the parse tree
   */
  enterNumber?: (ctx: NumberContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.number`.
   * @param ctx the parse tree
   */
  exitNumber?: (ctx: NumberContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.string`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.string`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.any_name`.
   * @param ctx the parse tree
   */
  enterAny_name?: (ctx: Any_nameContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.any_name`.
   * @param ctx the parse tree
   */
  exitAny_name?: (ctx: Any_nameContext) => void;
  /**
   * Enter a parse tree produced by `CEQLQueryParser.keyword`.
   * @param ctx the parse tree
   */
  enterKeyword?: (ctx: KeywordContext) => void;
  /**
   * Exit a parse tree produced by `CEQLQueryParser.keyword`.
   * @param ctx the parse tree
   */
  exitKeyword?: (ctx: KeywordContext) => void;
}
