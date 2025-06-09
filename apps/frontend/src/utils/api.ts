import type { QueryId, QueryIdToQueryInfoMap, QueryInfo, StreamId, StreamInfo } from '@/types';
import { CreateQuerySchema, GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { GetStreamInfoSchema } from 'middleware-api-schemas/streamInfo/streamInfoSchema.js';

function getMiddlewareBaseUrl(): string {
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

type SharedHeadersType = Record<string, string>;

function getSharedHeaders({ userId }: { userId: string }): SharedHeadersType {
  return {
    'user-id': userId,
  };
}

export async function getQueryInfos({ userId }: { userId: string }): Promise<QueryIdToQueryInfoMap> {
  const baseUrl = getMiddlewareBaseUrl();
  const sharedHeaders = getSharedHeaders({ userId });
  const fetchRes = await fetch(baseUrl + '/query', {
    method: 'GET',
    headers: {
      ...sharedHeaders,
    },
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
}

export async function getStreamsInfo({ userId }: { userId: string }): Promise<StreamInfo[]> {
  const baseUrl = getMiddlewareBaseUrl();
  const sharedHeaders = getSharedHeaders({ userId });
  const fetchRes = await fetch(baseUrl + '/stream', {
    method: 'GET',
    headers: {
      ...sharedHeaders,
    },
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
}

export async function inactivateQuery({ queryId, userId }: { queryId: QueryId; userId: string }): Promise<void> {
  const baseUrl = getMiddlewareBaseUrl();
  const sharedHeaders = getSharedHeaders({ userId });
  const fetchRes = await fetch(baseUrl + '/query/' + queryId.toString(), {
    method: 'DELETE',
    headers: {
      ...sharedHeaders,
    },
  });
  if (!fetchRes.ok) {
    throw new Error('Failed to inactivate query');
  }
  console.info('Successfully inactivated query', queryId);
}

export const addQuery = async ({ query, queryName, userId }: { query: string; queryName: string; userId: string }): Promise<void> => {
  const createQueryParse = CreateQuerySchema.safeParse({
    query,
    query_name: queryName,
  });

  if (!createQueryParse.success) {
    throw new Error('Failed to create new query due to error: ' + createQueryParse.error.message);
  }

  const baseUrl = getMiddlewareBaseUrl();
  const sharedHeaders = getSharedHeaders({ userId });
  const res = await fetch(baseUrl + '/query', {
    method: 'POST',
    headers: {
      ...sharedHeaders,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createQueryParse.data),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
};
