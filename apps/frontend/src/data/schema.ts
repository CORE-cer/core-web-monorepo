import type { BinanceTickerData, CoinbaseTickerData, KrakenTickerData, SchemaData, StreamTypeSchemas } from '@/types';

const COINBASE_SCHEMA: SchemaData = {
  TICKER: {
    Buy: {
      product_id: 'ETH-USD',
      open_24h: 1310.79,
      low_24h: 1280.52,
      volume_30d: 245532.79269678,
      best_bid_size: 0.46688654,
      best_ask_size: 1.5663704,
      price: 1285.22,
      volume_24h: 245532.79269678,
      high_24h: 1313.8,
      best_bid: 1285.04,
      best_ask: 1285.27,
      time: new Date('2022-10-19T23:28:22.061769Z'),
    } as CoinbaseTickerData,
    Sell: {
      product_id: 'ETH-USD',
      open_24h: 1310.79,
      low_24h: 1280.52,
      volume_30d: 245532.79269678,
      best_bid_size: 0.46688654,
      best_ask_size: 1.5663704,
      price: 1285.22,
      volume_24h: 245532.79269678,
      high_24h: 1313.8,
      best_bid: 1285.04,
      best_ask: 1285.27,
      time: new Date('2022-10-19T23:28:22.061769Z'),
    } as CoinbaseTickerData,
  },
};

const BINANCE_SCHEMA: SchemaData = {
  TICKER: {
    Buy: {
      symbol: 'BTCUSDT',
      price: 45000.0,
      quantity: 0.5,
      timestamp: new Date('2022-10-19T23:28:22.061769Z'),
      side: 'BUY',
    } as BinanceTickerData,
    Sell: {
      symbol: 'BTCUSDT',
      price: 45000.0,
      quantity: 0.5,
      timestamp: new Date('2022-10-19T23:28:22.061769Z'),
      side: 'SELL',
    } as BinanceTickerData,
  },
};

const KRAKEN_SCHEMA: SchemaData = {
  TICKER: {
    Buy: {
      pair: 'XBT/USD',
      price: 45000.0,
      volume: 0.5,
      time: new Date('2022-10-19T23:28:22.061769Z'),
      type: 'buy',
    } as KrakenTickerData,
    Sell: {
      pair: 'XBT/USD',
      price: 45000.0,
      volume: 0.5,
      time: new Date('2022-10-19T23:28:22.061769Z'),
      type: 'sell',
    } as KrakenTickerData,
  },
};

export const SCHEMAS: StreamTypeSchemas = {
  coinbase: COINBASE_SCHEMA,
  binance: BINANCE_SCHEMA,
  kraken: KRAKEN_SCHEMA,
};

// Keep backward compatibility
export const SCHEMA = COINBASE_SCHEMA;
