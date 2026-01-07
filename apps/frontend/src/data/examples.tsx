import type { StreamTypeExamples } from '@/types';

const examples: StreamTypeExamples = {
  coinbase: [
    {
      title: 'Show all Buy and Sell events',
      short_title: 'All Buy & Sell Events',
      query: `SELECT *
FROM TICKER
WHERE Buy OR Sell`,
    },
    {
      title: 'Show all Buy events with the price of Ethereum',
      short_title: 'Ethereum Buy Prices',
      query: `SELECT X[price]
FROM TICKER
WHERE Buy AS X
FILTER X[product_id='ETH-USD']
`,
    },
    {
      title: 'Show all Sell events with the price of Bitcoin',
      short_title: 'Bitcoin Sell Prices',
      query: `SELECT X[price]
FROM TICKER
WHERE Sell AS X
FILTER X[product_id='BTC-USD']
`,
    },
    {
      title: 'Show all Sell events with the price of Litecoin',
      short_title: 'Litecoin Sell Prices',
      query: `SELECT X[price]
FROM TICKER
WHERE Sell AS X
FILTER X[product_id='LTC-USD']
`,
    },
    {
      title: 'Find two Ethereum buys with a Bitcoin sell in between',
      short_title: 'ETH Buy, BTC Sell, ETH Buy Pattern',
      query: `SELECT X[price]
FROM TICKER
WHERE Buy AS X; Sell AS Y; Buy AS X
FILTER X[product_id='ETH-USD'] AND Y[product_id='BTC-USD']
WITHIN 3 seconds
`,
    },
    {
      title: 'Find a Litecoin sell followed by two consecutive Ethereum buys',
      short_title: 'LTC Sell then 2 ETH Buys',
      query: `SELECT X[price,product_id], Y[price,product_id]
FROM TICKER
WHERE Sell AS Y; Buy AS X: Buy AS X
FILTER X[product_id='ETH-USD'] AND Y[product_id='LTC-USD']
WITHIN 10 seconds
`,
    },
    {
      title: 'Find three consecutive Ethereum buys where the price is greater than or equal to the best bid',
      short_title: '3 ETH Buys Above Best Bid',
      query: `SELECT X[price, best_bid]
FROM TICKER
WHERE (Buy; Buy; Buy) AS X
FILTER X[product_id='ETH-USD'] AND X[price >= best_bid]
WITHIN 10 seconds
`,
    },
    {
      title: 'Capture all events between a buy at the 24h-low and a subsequent buy at the 24h-high',
      short_title: 'Events Between Daily Low & High Buys',
      query: `SELECT list
FROM TICKER
WHERE Buy as b1 : (Sell OR Buy):+ AS list : Buy as b2
FILTER b1[price <= low_24h] AND b2[price >= high_24h]
PARTITION BY [product_id]
WITHIN 30 MINUTES
`,
    },
    {
      title: 'Find two buys of Ethereum and the list of all sells of Ethereum in between',
      short_title: 'ETH Buys with Sells In-Between',
      query: `SELECT X[price]
FROM TICKER
WHERE Buy AS X: (((Buy OR Sell) AS Y):+ : Sell AS X):((Buy OR Sell) AS Y):+ :  Buy AS X
FILTER X[product_id='ETH-USD'] AND Y[product_id!='ETH-USD']
WITHIN 10 seconds
`,
    },
  ],
  bluesky: [
    {
      title: 'Detect all CreatePost',
      short_title: 'All Posts',
      query: `SELECT *
FROM Bluesky
WHERE CreatePost`,
    },
    {
      title: 'Detect all CreateLike',
      short_title: 'All Likes',
      query: `SELECT *
FROM Bluesky
WHERE CreateLike`,
    },
    {
      title: 'All CreatePost and CreateLike',
      short_title: 'All Posts/Likes',
      query: `SELECT *
FROM Bluesky
WHERE CreatePost OR CreateLike`,
    },
    {
      title: "Posts referring to 'Trump'",
      short_title: 'Trump',
      query: `SELECT *
FROM Bluesky
WHERE CreatePost
FILTER CreatePost[text LIKE '[Tt]rump']`,
    },
    {
      title: "Posts referring to 'Trump' in Spanish",
      short_title: 'Trump ES',
      query: `SELECT *
FROM Bluesky
WHERE CreatePost
FILTER CreatePost[text LIKE '[Tt]rump' AND langs = 'es']`,
    },
    {
      title: 'Two likes for a Trump Post',
      short_title: '2 Likes Trump',
      query: `SELECT *
FROM Bluesky
WHERE CreatePost ; CreateLike ; CreateLike
FILTER CreatePost[text LIKE '[Tt]rump']
PARTITION BY [subject_cid,cid]
WITHIN 40 SECONDS`,
    },
    {
      title: 'Two likes for a Trump Post Only Text',
      short_title: '2 Likes Only Text',
      query: `SELECT X[text]
FROM Bluesky
WHERE CreatePost AS X ; CreateLike ; CreateLike
FILTER CreatePost[text LIKE '[Tt]rump']
PARTITION BY [subject_cid,cid]
WITHIN 40 SECONDS`,
    },
    {
      title: 'Detect Bot Accounts (3 posts in 10 seconds)',
      short_title: 'Detect Bots',
      query: `SELECT *
FROM Bluesky
WHERE CreatePost ; CreatePost ; CreatePost
PARTITION BY [did]
WITHIN 10 SECONDS`,
    },
  ],
};

export default examples;
