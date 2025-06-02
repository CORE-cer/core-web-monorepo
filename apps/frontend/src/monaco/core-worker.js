import CEQLLanguageService from './ceql/ceql-language-service';

export default class COREWorker {
  constructor(ctx) {
    this._ctx = ctx;
    this._languageService = new CEQLLanguageService();
  }

  doValidation(uri) {
    const document = this._getTextDocument(uri);
    if (document) {
      return Promise.resolve(this._languageService.doValidation(document));
    }
    return Promise.resolve([]);
  }

  _getTextDocument(uri) {
    let models = this._ctx.getMirrorModels();
    for (const model of models) {
      if (model.uri.toString() === uri) {
        return model.getValue();
      }
    }
    return null;
  }
}
