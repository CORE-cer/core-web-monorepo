// Editor Types
export type EditorRef = {
  getEditor: () => import('monaco-editor-core').editor.IStandaloneCodeEditor | null;
};

// Query Related Types

export type QueryId = string;

export type QueryInfo = {
  result_handler_identifier: QueryId;
  query_name: string;
  active: boolean;
};

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
export type ComplexEvent = {
  start: number;
  end: number;
  eventss: {
    event: {
      event_type_id: string;
      attributes: unknown[];
    };
  }[];
};

export type FormattedHit = {
  time: Date;
  data: {
    start: number;
    end: number;
    events: {
      event_type: string;
      [key: string]: unknown;
    }[];
  };
};

export type DataItem = {
  qid: string;
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
