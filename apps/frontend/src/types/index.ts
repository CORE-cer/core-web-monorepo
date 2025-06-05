import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { z } from 'zod';

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

// Editor Types
export type EditorRef = {
  getEditor: () => import('monaco-editor-core').editor.IStandaloneCodeEditor | null;
};

// Query Related Types

export type QueryId = Branded<number, 'QueryId'>;

type GetQueryInfoSchemaType = z.infer<typeof GetQueryInfoSchema>;

export type QueryInfo = GetQueryInfoSchemaType & { queryId: QueryId };

export type QueryIdToQueryInfoMap = Map<QueryId, QueryInfo>;
export type QueryIdToQueryStatMap = Map<QueryId, QueryStats>;
export type QueryIdToQueryWebSocketMap = Map<QueryId, WebSocket>;

export type ExampleData = {
  title: string;
  query: string;
};

// Stream and Event Types
export type EventInfo = {
  id: string;
  name: string;
  attributes_info: {
    name: string;
  }[];
};

export type StreamInfo = {
  events_info: EventInfo[];
};

// Complex Event Types
export type MarkVariable = string;

export type EventData = {
  event_type_id: number;
  attributes: (string | number)[];
};

export type ComplexEvent = {
  start: number;
  end: number;
  events: Record<MarkVariable, EventData>[];
};

export type FormattedHitData = {
  start: number;
  end: number;
  events: {
    dataString: string;
  }[];
};

export type FormattedHit = {
  time: Date;
  data: FormattedHitData;
};

export type DataItem = {
  qid: QueryId;
  data: FormattedHit[];
};

// Statistics Types
export type HitCount = {
  numHits: number;
  numComplexEvents: number;
};

export type HitStats = {
  max: number;
  total: number;
};

export type PerSecStat = {
  time: Date;
} & HitCount;

export type QueryStats = {
  perSec: PerSecStat[];
  hitStats: HitStats;
  complexEventStats: HitStats;
};

// Schema Types
export type TickerData = {
  product_id: string;
  open_24h: number;
  low_24h: number;
  volume_30d: number;
  best_bid_size: number;
  best_ask_size: number;
  price: number;
  volume_24h: number;
  high_24h: number;
  best_bid: number;
  best_ask: number;
  time: Date;
};

export type SchemaData = {
  TICKER: {
    Buy: TickerData;
    Sell: TickerData;
  };
};

// View Mode Types
export type ViewMode = 'list' | 'stats' | 'charts';
