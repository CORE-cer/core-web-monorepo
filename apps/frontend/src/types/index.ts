import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { GetStreamInfoSchema } from 'middleware-api-schemas/streamInfo/streamInfoSchema.js';
import { z } from 'zod';

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

// Editor Types
// export type EditorRef = {
//   getEditor: () => import('monaco-editor-core').editor.IStandaloneCodeEditor | null;
// };

// Query Related Types

export type QueryId = Branded<number, 'QueryId'>;
export type StreamId = Branded<number, 'StreamId'>;

type GetQueryInfoSchemaType = z.infer<typeof GetQueryInfoSchema>;
type GetStreamInfoSchemaType = z.infer<typeof GetStreamInfoSchema>;

export type QueryInfo = GetQueryInfoSchemaType & { queryId: QueryId };
export type StreamInfo = GetStreamInfoSchemaType & { streamId: StreamId };

export type QueryIdToQueryInfoMap = Map<QueryId, QueryInfo>;
export type QueryIdToQueryStatMap = Map<QueryId, QueryStats>;
export type QueryIdToQueryWebSocketMap = Map<QueryId, WebSocket>;

export type ExampleData = {
  title: string;
  query: string;
  streamType?: StreamType; // Add stream type to examples
};

// Stream Types
export type StreamType = 'coinbase' | 'binance' | 'kraken'; // Add more stream types as needed

export type StreamTypeExamples = Record<StreamType, ExampleData[]>;

export type StreamTypeSchemas = Record<StreamType, SchemaData>;

// Stream and Event Types
export type EventInfo = {
  id: string;
  name: string;
  attributes_info: {
    name: string;
  }[];
};

export const EventDataSchema = z.object({
  event_type_id: z.number(),
  attributes: z.array(z.union([z.string(), z.number()])),
});

export const ComplexEventSchema = z.object({
  start: z.number(),
  end: z.number(),
  events: z.array(z.record(z.string(), EventDataSchema)),
});

export const HitSchema = ComplexEventSchema.array();

export type FormattedComplexEvent = {
  eventName: string;
  attributes: Record<string, string | number>;
};

export type FormattedMarkedComplexEvent = {
  start: number;
  end: number;
  complexEvents: Record<string, FormattedComplexEvent[]>;
};

export type FormattedHit = {
  end: number;
  complexEvents: FormattedMarkedComplexEvent[];
};

export type DataItem = {
  qid: QueryId;
  data: FormattedHit;
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
export type CoinbaseTickerData = {
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

export type BinanceTickerData = {
  symbol: string;
  price: number;
  quantity: number;
  timestamp: Date;
  side: string;
};

export type KrakenTickerData = {
  pair: string;
  price: number;
  volume: number;
  time: Date;
  type: string;
};

export type TickerData = CoinbaseTickerData | BinanceTickerData | KrakenTickerData;

export type SchemaData = {
  TICKER: {
    Buy: TickerData;
    Sell: TickerData;
  };
};

// View Mode Types
export type ViewMode = 'list' | 'stats' | 'charts' | 'timeline';

// Timeline Types
export type TimelineEvent = {
  id: string;
  queryId: QueryId;
  receivedAt: Date;
  data: FormattedMarkedComplexEvent;
};

export type TimelineConfig = {
  timeHorizonSeconds: number;
  maxEventsPerQuery: number;
};
