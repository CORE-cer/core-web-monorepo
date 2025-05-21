import { Injectable } from '@nestjs/common';
import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { z } from 'zod';

@Injectable()
export class QueryCreator {
  async addQuery({ query, queryName }: { query: string; queryName: string }): Promise<string | Error> {
    const url = 'http://localhost:9001/add-query';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          query_name: queryName,
        }),
      });

      if (!response.ok) {
        console.log(await response.text());
        return new Error(`Error adding query : ${response.statusText}`);
      }

      const untypedData = (await response.json()) as unknown;

      const queryIdentifier = z.coerce.string(GetQueryInfoSchema).safeParse(untypedData);

      if (!queryIdentifier.success) {
        return new Error(`Error validating query identifier : ${queryIdentifier.error.toString()}`);
      }

      return queryIdentifier.data;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }
}
