import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

import type { QueriesMap, StreamInfo } from '../types';
import { getQueries, getStreamsInfo, inactivateQuery } from '../utils/api';

function getErrorMessageFromUnknown(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  return 'Unknown error';
}
export const useQueryManager = () => {
  const [queries, setQueries] = useState<QueriesMap>(new Map());
  const [streamsInfo, setStreamsInfo] = useState<StreamInfo[]>([]);

  // Fetch queries and streams info
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        setQueries(await getQueries());
      } catch (err) {
        const errorMessage = getErrorMessageFromUnknown(err);
        enqueueSnackbar(`Error fetching queries: ${errorMessage}`, { variant: 'error' });
      }
    };

    const fetchStreamsInfo = async () => {
      try {
        setStreamsInfo(await getStreamsInfo());
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
    queries,
    streamsInfo,
    handleInactivateQuery,
  };
};
