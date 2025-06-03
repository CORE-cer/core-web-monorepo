import type { QueriesMap, QueryInfo, StreamInfo } from '../types';

export function getMiddlewareBaseUrl(): string {
  const baseUrl: unknown = import.meta.env.VITE_MIDDLEWARE_API_URL;
  if (baseUrl) {
    return baseUrl as string;
  }
  throw new Error('VITE_MIDDLEWARE_API_URL is not defined in environment variables');
}

export function getCoreCPPBaseUrl(): string {
  const baseUrl: unknown = import.meta.env.VITE_CORECPP_URL;
  if (baseUrl) {
    return baseUrl as string;
  }
  throw new Error('VITE_CORECPP_URL is not defined in environment variables');
}

export const getQueries = async (): Promise<QueriesMap> => {
  const baseUrl = getCoreCPPBaseUrl();
  const fetchRes = await fetch(baseUrl + '/all-queries-info', {
    method: 'GET',
  });
  const queries: QueryInfo[] = (await fetchRes.json()) as QueryInfo[];

  const activeQueries = queries.filter((query) => query.active);
  const res: QueriesMap = new Map();
  for (const query of activeQueries) {
    res.set(query.result_handler_identifier, query);
  }
  return res;
};

export const getStreamsInfo = async (): Promise<StreamInfo[]> => {
  const baseUrl = getCoreCPPBaseUrl();
  const fetchRes = await fetch(baseUrl + '/all-streams-info', {
    method: 'GET',
  });
  const streamsInfo: StreamInfo[] = (await fetchRes.json()) as StreamInfo[];
  return streamsInfo;
};

export const inactivateQuery = async (qid: string): Promise<void> => {
  const baseUrl = getCoreCPPBaseUrl();
  const fetchRes = await fetch(baseUrl + '/inactivate-query/' + qid, {
    method: 'DELETE',
  });
  if (!fetchRes.ok) {
    throw new Error('Failed to inactivate query');
  }
  console.info('Successfully inactivated query', qid);
};

export const addQuery = async (query: string, queryName: string): Promise<void> => {
  const baseUrl = getCoreCPPBaseUrl();
  const res = await fetch(baseUrl + '/add-query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      query_name: queryName,
    }),
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
};
