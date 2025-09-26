import type { StreamType } from '@/types';

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type GlobalFAQ = {
  general: FAQItem[];
  ceql: FAQItem[];
  technical: FAQItem[];
};

export type SchemaSpecificFAQ = Record<StreamType, {
  overview: string;
  description: string;
  faqs: FAQItem[];
}>;

export const globalFAQ: GlobalFAQ = {
  general: [
    {
      id: 'what-is-core',
      question: 'What is CORE?',
      answer: 'CORE is a Complex Event Processing (CEP) system that allows you to query and analyze real-time event streams using a specialized query language called CEQL (Complex Event Query Language).',
      category: 'overview'
    },
    {
      id: 'how-to-get-started',
      question: 'How do I get started with CORE?',
      answer: 'Start by exploring the example queries in the Query tab. Each example demonstrates different CEQL patterns and use cases. You can modify these examples or create your own queries to process event streams.',
      category: 'getting-started'
    },
    {
      id: 'what-are-streams',
      question: 'What are streams and how do they work?',
      answer: 'Streams are continuous flows of data events. CORE currently supports multiple stream types like Coinbase (cryptocurrency trading data) and Bluesky (social media events). Each stream has its own schema defining the structure of events.',
      category: 'concepts'
    },
    {
      id: 'real-time-vs-historical',
      question: 'Does CORE process real-time or historical data?',
      answer: 'CORE processes real-time streaming data as it arrives. The system is designed for live event processing and pattern detection, not for historical data analysis.',
      category: 'concepts'
    }
  ],
  ceql: [
    {
      id: 'what-is-ceql',
      question: 'What is CEQL?',
      answer: 'CEQL (Complex Event Query Language) is a SQL-like language designed specifically for querying complex event patterns in real-time streams. It supports temporal operators, pattern matching, and event correlations.',
      category: 'language'
    },
    {
      id: 'basic-query-structure',
      question: 'What is the basic structure of a CEQL query?',
      answer: 'A basic CEQL query follows this pattern: SELECT [fields] FROM [stream] WHERE [pattern] FILTER [conditions] WITHIN [time_window]. The WHERE clause defines event patterns, while FILTER adds conditions.',
      category: 'syntax'
    },
    {
      id: 'pattern-operators',
      question: 'What pattern operators are available in CEQL?',
      answer: 'CEQL supports various pattern operators: semicolon (;) for sequence, OR for alternatives, AS for variable binding, :+ for one-or-more repetition, and parentheses for grouping. Time windows can be specified with WITHIN clauses.',
      category: 'patterns'
    },
    {
      id: 'time-windows',
      question: 'How do time windows work in CEQL?',
      answer: 'Time windows limit pattern matching to specific time periods. Use WITHIN followed by a duration (e.g., "WITHIN 30 seconds", "WITHIN 5 minutes"). Patterns must complete within the specified window.',
      category: 'temporal'
    },
    {
      id: 'variable-binding',
      question: 'How does variable binding work with AS?',
      answer: 'Use AS to bind events to variables for later reference. For example, "Buy AS X" binds a Buy event to variable X, which can then be used in SELECT clauses or FILTER conditions like X[price] or X[product_id=\'ETH-USD\'].',
      category: 'variables'
    }
  ],
  technical: [
    {
      id: 'query-performance',
      question: 'How can I optimize query performance?',
      answer: 'Use specific filters early in your patterns, limit time windows appropriately, and avoid overly complex nested patterns. The system works best with focused, well-defined event patterns.',
      category: 'performance'
    },
    {
      id: 'error-handling',
      question: 'What should I do if my query has errors?',
      answer: 'Check the query syntax against CEQL documentation, ensure field names match the schema, verify time window formats, and make sure variable names are used consistently throughout the query.',
      category: 'debugging'
    },
    {
      id: 'result-limits',
      question: 'Are there limits on query results?',
      answer: 'Yes, queries have result limits to ensure system performance. Complex patterns with broad time windows may return fewer results than expected. Consider narrowing your patterns or time windows if needed.',
      category: 'limitations'
    },
    {
      id: 'data-retention',
      question: 'How long is streaming data retained?',
      answer: 'CORE processes events in real-time with limited buffering. Historical data retention depends on system configuration. Focus on real-time patterns rather than long-term historical analysis.',
      category: 'data'
    }
  ]
};

export const schemaSpecificFAQ: SchemaSpecificFAQ = {
  coinbase: {
    overview: 'Coinbase Pro Trading Data',
    description: 'Real-time cryptocurrency trading events from Coinbase Pro, including buy and sell ticker data with price, volume, and market information.',
    faqs: [
      {
        id: 'coinbase-event-types',
        question: 'What event types are available in the Coinbase stream?',
        answer: 'The Coinbase stream includes Buy and Sell events from the TICKER stream. Each event contains price, volume, bid/ask spreads, and 24-hour statistics for various cryptocurrency pairs.',
        category: 'events'
      },
      {
        id: 'coinbase-products',
        question: 'Which cryptocurrency pairs are available?',
        answer: 'Common pairs include ETH-USD (Ethereum), BTC-USD (Bitcoin), LTC-USD (Litecoin), and many others. Use the product_id field to filter for specific trading pairs.',
        category: 'products'
      },
      {
        id: 'coinbase-price-fields',
        question: 'What price-related fields are available?',
        answer: 'Key price fields include: price (current), best_bid, best_ask, open_24h, high_24h, low_24h. These can be used for price-based filtering and analysis.',
        category: 'pricing'
      },
      {
        id: 'coinbase-volume-data',
        question: 'How does volume data work?',
        answer: 'Volume fields include volume_24h (24-hour volume), volume_30d (30-day volume), best_bid_size, and best_ask_size. These indicate trading activity and liquidity.',
        category: 'volume'
      },
      {
        id: 'coinbase-time-precision',
        question: 'What is the time precision of Coinbase events?',
        answer: 'Coinbase events include precise timestamps. Use these for time-based patterns and correlations. The system can detect patterns within seconds or minutes.',
        category: 'timing'
      }
    ]
  },
  bluesky: {
    overview: 'Bluesky Social Network Events',
    description: 'Real-time social media events from Bluesky, including posts, follows, likes, and reposts with user interactions and content metadata.',
    faqs: [
      {
        id: 'bluesky-event-types',
        question: 'What event types are available in the Bluesky stream?',
        answer: 'Bluesky events include CreatePost, CreateFollow, CreateLike, and CreateRepost. Each represents different user interactions on the social platform.',
        category: 'events'
      },
      {
        id: 'bluesky-user-identity',
        question: 'How are users identified in Bluesky events?',
        answer: 'Users are identified by DID (Decentralized Identifier) fields like "did:plc:..." which uniquely identify users across the network. These can be used to track user activity patterns. You can resolve DIDs to human-readable handles using the Bluesky API.',
        category: 'identity'
      },
      {
        id: 'bluesky-did-resolution',
        question: 'How can I convert a DID to a readable handle?',
        answer: 'Use the Bluesky API endpoint: https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=<DID_OR_HANDLE>. This works with both DIDs (did:plc:...) and handles (username.bsky.social). The response includes the handle, display name, follower counts, and other profile information.',
        category: 'identity'
      },
      {
        id: 'bluesky-profile-data',
        question: 'What profile information can I get from the Bluesky API?',
        answer: 'The getProfile endpoint returns handle, displayName, avatar, description, follower/following counts, post counts, creation date, and other profile metadata. This can help you understand user context when analyzing DIDs in event streams.',
        category: 'identity'
      },
      {
        id: 'bluesky-content-fields',
        question: 'What content information is available?',
        answer: 'CreatePost events include text content, language information (langs), and metadata. Other events include references to posts via subject_uri and subject_cid fields.',
        category: 'content'
      },
      {
        id: 'bluesky-operations',
        question: 'What do the operation and record_type fields mean?',
        answer: 'The operation field indicates the action type (usually "create"), while record_type specifies the content type like app.bsky.feed.post, app.bsky.graph.follow, etc.',
        category: 'operations'
      },
      {
        id: 'bluesky-patterns',
        question: 'What are some useful patterns to detect?',
        answer: 'Common patterns include: user posting followed by likes/reposts, follow relationships, viral content spreading, and user engagement sequences. Use DIDs and content references for correlation.',
        category: 'patterns'
      }
    ]
  }
};

export const getSchemaInfo = (streamType: StreamType) => {
  return schemaSpecificFAQ[streamType];
};

export const getAllFAQCategories = () => {
  const categories = new Set<string>();
  
  Object.values(globalFAQ).forEach(section => {
    section.forEach(item => {
      if (item.category) categories.add(item.category);
    });
  });
  
  Object.values(schemaSpecificFAQ).forEach(schema => {
    schema.faqs.forEach(item => {
      if (item.category) categories.add(item.category);
    });
  });
  
  return Array.from(categories);
};
