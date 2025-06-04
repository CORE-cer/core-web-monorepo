import type { QueryIdToQueryInfoMap, StreamInfo } from '@/types';
import { getQueryInfos, getStreamsInfo, inactivateQuery } from '@/utils/api';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

function getErrorMessageFromUnknown(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return 'Unknown error';
}

function areMapsEqual(map1: Map<string, unknown>, map2: Map<string, unknown>): boolean {
  const map1Json = JSON.stringify(Array.from(map1.entries()));
  const map2Json = JSON.stringify(Array.from(map2.entries()));
  return map1Json === map2Json;
}

export const useQueryManager = () => {
  const [queriesInfo, setQueriesInfo] = useState<QueryIdToQueryInfoMap>(new Map());
  const [streamsInfo, setStreamsInfo] = useState<StreamInfo[]>([]);

  // Fetch queries and streams info
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const newQueryInfos = await getQueryInfos();
        setQueriesInfo((currentQueriesInfo) => {
          if (!areMapsEqual(currentQueriesInfo, newQueryInfos)) {
            console.log(queriesInfo);
            console.info('Updating queries info', newQueryInfos);
            return newQueryInfos;
          }
          return currentQueriesInfo;
        });
      } catch (err) {
        const errorMessage = getErrorMessageFromUnknown(err);
        enqueueSnackbar(`Error fetching queries info: ${errorMessage}`, { variant: 'error' });
      }
    };

    const fetchStreamsInfo = async () => {
      try {
        const newStreamsInfo = await getStreamsInfo();
        setStreamsInfo((currentStreamsInfo) => {
          if (JSON.stringify(currentStreamsInfo) !== JSON.stringify(newStreamsInfo)) {
            console.info('Updating streams info', newStreamsInfo);
            return newStreamsInfo;
          }
          return currentStreamsInfo;
        });
      } catch (err) {
        const errorMessage = getErrorMessageFromUnknown(err);
        enqueueSnackbar(`Error fetching streams info: ${errorMessage}`, {
          variant: 'error',
        });
      }
    };

    // First fetch
    fetchQueries().catch((err: unknown) => {
      const errorMessage = getErrorMessageFromUnknown(err);
      enqueueSnackbar(`Error fetching queries on mount: ${errorMessage}`, { variant: 'error' });
    });
    fetchStreamsInfo().catch((err: unknown) => {
      const errorMessage = getErrorMessageFromUnknown(err);
      enqueueSnackbar(`Error fetching streams on mount: ${errorMessage}`, { variant: 'error' });
    });

    // Fetch with some delay afterwards
    const interval = setInterval(async () => {
      await fetchQueries();
      await fetchStreamsInfo();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleInactivateQuery = (qid: string) => {
    inactivateQuery(qid)
      .then(() => enqueueSnackbar('Query inactivated successfully', { variant: 'success' }))
      .catch((err: unknown) => {
        const errorMessage = getErrorMessageFromUnknown(err);
        enqueueSnackbar(`Error inactivating query: ${errorMessage}`, { variant: 'error' });
      });
  };

  return {
    queries: queriesInfo,
    streamsInfo,
    handleInactivateQuery,
  };
};
