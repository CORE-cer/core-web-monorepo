import type { StreamTypeSchemas } from '@/types';

const COINBASE_SCHEMA = {
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
    },
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
    },
  },
};

const BLUESKY_SCHEMA = {
  Bluesky: {
    CreatePost: {
      did: 'did:plc:ovwabcu6febdpxar2diytg2s',
      kind: 'commit',
      time: new Date('2022-10-19T23:28:22.061769Z'),
      cid: 'bafyreib2aakiovz3lkrtt2ftqhyws4uaxre2ee3huv2phk4sbyidrlridy',
      operation: 'create',
      record_type: 'app.bsky.feed.post',
      langs: 'en, ja',
      text: 'My first post',
    },
    CreateFollow: {
      did: 'did:plc:ovwabcu6febdpxar2diytg2s',
      kind: 'commit',
      time: new Date('2022-10-19T23:28:22.061769Z'),
      cid: 'bafyreib2aakiovz3lkrtt2ftqhyws4uaxre2ee3huv2phk4sbyidrlridy',
      operation: 'create',
      record_type: 'app.bsky.graph.follow',
      subject: 'did:plc:2pw4kg45i3tyedg3kpnzr3zi',
    },
    CreateLike: {
      did: 'did:plc:ovwabcu6febdpxar2diytg2s',
      kind: 'commit',
      time: new Date('2022-10-19T23:28:22.061769Z'),
      cid: 'bafyreib2aakiovz3lkrtt2ftqhyws4uaxre2ee3huv2phk4sbyidrlridy',
      operation: 'create',
      record_type: 'app.bsky.feed.like',
      subject_cid: 'bafyreifvpyzaq5i5wtfe2okbqfc67huiysqpahrzqu5qhe443f4crpvaw4',
      subject_uri: 'at://did:plc:dekcamj33b4raprbyvflrzkd/app.bsky.feed.post/3lwmd7o3wes2m',
    },
    CreateRepost: {
      did: 'did:plc:ovwabcu6febdpxar2diytg2s',
      kind: 'commit',
      time: new Date('2022-10-19T23:28:22.061769Z'),
      cid: 'bafyreib2aakiovz3lkrtt2ftqhyws4uaxre2ee3huv2phk4sbyidrlridy',
      operation: 'create',
      record_type: 'app.bsky.feed.repost',
      subject_cid: 'bafyreifvpyzaq5i5wtfe2okbqfc67huiysqpahrzqu5qhe443f4crpvaw4',
      subject_uri: 'at://did:plc:dekcamj33b4raprbyvflrzkd/app.bsky.feed.post/3lwmd7o3wes2m',
    },
  },
};

export const SCHEMAS: StreamTypeSchemas = {
  bluesky: BLUESKY_SCHEMA,
  coinbase: COINBASE_SCHEMA,
};
