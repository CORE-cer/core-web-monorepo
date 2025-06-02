// Editor Types
export interface EditorRef {
  getEditor: () => import('monaco-editor-core').editor.IStandaloneCodeEditor | null;
}

// Query Related Types
export interface QueryInfo {
  result_handler_identifier: string;
  query_name: string;
  active: boolean;
}

export type QueriesMap = Map<string, QueryInfo>;

export interface ExampleData {
  title: string;
  query: string;
}

// Stream and Event Types
export interface EventInfo {
  id: string;
  name: string;
  attributes_info: {
    name: string;
  }[];
}

export interface StreamInfo {
  events_info: EventInfo[];
}

// Complex Event Types
export interface ComplexEvent {
  start: number;
  end: number;
  eventss: {
    event: {
      event_type_id: string;
      attributes: unknown[];
    };
  }[];
}

export interface FormattedHit {
  time: Date;
  data: {
    start: number;
    end: number;
    events: {
      event_type: string;
      [key: string]: unknown;
    }[];
  };
}

export interface DataItem {
  qid: string;
  data: FormattedHit[];
}

// Statistics Types
export interface HitCount {
  numHits: number;
  numComplexEvents: number;
}

export interface HitStats {
  max: number;
  total: number;
}

export interface PerSecStat extends HitCount {
  time: Date;
}

export interface QueryStats {
  perSec: PerSecStat[];
  hitStats: HitStats;
  complexEventStats: HitStats;
}

// Schema Types
export interface TickerData {
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
}

export interface SchemaData {
  TICKER: {
    Buy: TickerData;
    Sell: TickerData;
  };
}

// View Mode Types
export type ViewMode = 'list' | 'stats' | 'charts';
