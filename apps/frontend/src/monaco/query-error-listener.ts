import { ErrorListener, Token } from 'antlr4';

type ErrorType = {
  startLineNumber: number;
  endLineNumber: number;
  startColumn: number;
  endColumn: number;
  message: string;
  severity: number;
};
export default class gueryErrorListener<TSymbol> extends ErrorListener<TSymbol> {
  errors: ErrorType[] = [];

  syntaxError(_recognizer: unknown, offendingSymbol: TSymbol, line: number, column: number, msg: string) {
    if (!offendingSymbol || !(offendingSymbol instanceof Token)) {
      return;
    }

    const { start, stop } = offendingSymbol;
    this.errors.push({
      startLineNumber: line,
      endLineNumber: line,
      startColumn: column,
      endColumn: column + (stop - start) + 2,
      message: msg,
      // WebWorkers cannot import monaco right now, so we use 3 === monaco.MarkerSeverity.Error
      severity: 3,
    });
  }

  getErrors() {
    return this.errors;
  }
}
