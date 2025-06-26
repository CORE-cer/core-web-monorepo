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
      title: 'Show all Buy events with its price of Ethereum',
      short_title: 'Ethereum Buy Prices',
      query: `SELECT X[price]
FROM TICKER
WHERE Buy AS X
FILTER X[product_id='ETH-USD']
`,
    },
    {
      title: 'Show all Sell events with its price of Bitcoin',
      short_title: 'Bitcoin Sell Prices',
      query: `X[price]
FROM TICKER
WHERE Sell AS X
FILTER X[product_id='BTC-USD']
`,
    },
    {
      title: 'Show all Buy events with its price of Litcoin',
      short_title: 'Litecoin Sell Prices',
      query: `SELECT X[price]
FROM TICKER
WHERE Sell AS X
FILTER X[product_id='LTC-USD']
`,
    },
    {
      title: 'Find two ethereums buy with some sell of bitcoins in between',
      short_title: 'ETH Buy, BTC Sell, ETH Buy Pattern',
      query: `SELECT X[price]
FROM TICKER
WHERE Buy AS X; Sell AS Y; Buy AS X
FILTER X[product_id='ETH-USD'] AND Y[product_id='BTC-USD']
WITHIN 3 seconds
`,
    },
    {
      title: 'Find two consecutive ethereums with some sell of bitcoins in the past',
      short_title: 'LTC Sell then 2 ETH Buys',
      query: `SELECT X[price,product_id], Y[price,product_id]
FROM TICKER
WHERE Sell AS Y; Buy AS X: Buy AS X
FILTER X[product_id='ETH-USD'] AND Y[product_id='LTC-USD']
WITHIN 10 seconds
`,
    },
    {
      title: 'Find three buys where the price is bigger than the best bid',
      short_title: '3 ETH Buys Above Best Bid',
      query: `SELECT X[price, best_bid]
FROM TICKER
WHERE (Buy; Buy; Buy) AS X
FILTER X[product_id='ETH-USD'] AND X[price >= best_bid]
WITHIN 10 seconds
`,
    },
    {
      title: 'Show all Sell and Buy lists when Buy reaches the lowest of the day and then the highest of the day',
      short_title: 'Events Between Daily Low & High Buys',
      query: `SELECT list
FROM TICKER
WHERE Buy as b1 : (Sell OR Buy):+ AS list : Buy as b2
FILTER b1[price <= low_24h] AND b2[price >= high_24h]
PARTITION BY [product_id]
WITHIN 30 MINUTES
`,
    },
  ],
};

export default examples;
