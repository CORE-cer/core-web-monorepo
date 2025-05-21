import { Injectable } from '@nestjs/common';
import { GetQueryInfoDto } from 'middleware-api-schemas/query/queryDto.js';
import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { z } from 'zod';

@Injectable()
export class QueryGetter {
  async getQueries(): Promise<GetQueryInfoDto[] | Error> {
    const url = 'http://localhost:9001/all-queries-info';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return new Error(`Error fetching stream : ${response.statusText}`);
      }

      const untypedData = (await response.json()) as unknown;

      const data = z.array(GetQueryInfoSchema).safeParse(untypedData);

      if (!data.success) {
        return new Error(`Error validating stream : ${data.error.toString()}`);
      }

      return data.data;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }

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

  async inactivateQuery(id: number): Promise<null | Error> {
    const url = 'http://localhost:9001/inactivate-query';

    try {
      const response = await fetch(`${url}/${String(id)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.log(await response.text());
        return new Error(`Error inactivating query : ${response.statusText}`);
      }

      return null;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }
}
