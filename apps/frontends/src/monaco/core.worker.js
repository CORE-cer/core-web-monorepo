import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import COREWorker from './core-worker';

self.onmessage = () => {
  worker.initialize((ctx, createData) => new COREWorker(ctx, createData));
};
