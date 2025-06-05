import type { QueryId, QueryIdToQueryInfoMap, QueryInfo, StreamId, StreamInfo } from '@/types';
import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { GetStreamInfoSchema } from 'middleware-api-schemas/streamInfo/streamInfoSchema.js';

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

export const getQueryInfos = async (): Promise<QueryIdToQueryInfoMap> => {
  const baseUrl = getMiddlewareBaseUrl();
  const fetchRes = await fetch(baseUrl + '/query', {
    method: 'GET',
  });
  const queriesUntyped: unknown = await fetchRes.json();

  const queriesParse = GetQueryInfoSchema.array().safeParse(queriesUntyped);

  if (!queriesParse.success) {
    throw new Error('Failed to parse query info: ' + queriesParse.error.message);
  }

  const queries = queriesParse.data;

  const activeQueryInfos = queries.filter((query) => query.active);
  const res: QueryIdToQueryInfoMap = new Map();
  for (const getQueryInfo of activeQueryInfos) {
    const queryId = getQueryInfo.result_handler_identifier as QueryId;
    const queryInfo: QueryInfo = {
      ...getQueryInfo,
      queryId,
    };
    res.set(queryId, queryInfo);
  }
  return res;
};

export const getStreamsInfo = async (): Promise<StreamInfo[]> => {
  const baseUrl = getMiddlewareBaseUrl();
  const fetchRes = await fetch(baseUrl + '/stream', {
    method: 'GET',
  });
  const streamsInfoUntyped: unknown = await fetchRes.json();

  const streamsInfoParse = GetStreamInfoSchema.array().safeParse(streamsInfoUntyped);

  if (!streamsInfoParse.success) {
    throw new Error('Failed to parse streams info: ' + streamsInfoParse.error.message);
  }

  const getStreamsInfo = streamsInfoParse.data;

  const streamsInfo: StreamInfo[] = getStreamsInfo.map((streamInfo) => ({
    ...streamInfo,
    streamId: streamInfo.id as StreamId,
  }));

  return streamsInfo;
};

export const inactivateQuery = async (qid: QueryId): Promise<void> => {
  const baseUrl = getCoreCPPBaseUrl();
  const fetchRes = await fetch(baseUrl + '/inactivate-query/' + qid.toString(), {
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
