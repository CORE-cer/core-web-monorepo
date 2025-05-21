import { Injectable } from '@nestjs/common';
import { GetQueryInfoDto } from 'middleware-api-schemas/queryInfo/queryInfoDto.js';
import { GetQueryInfoSchema } from 'middleware-api-schemas/queryInfo/queryInfoSchema.js';
import { z } from 'zod';

@Injectable()
export class QueryInfoGetter {
  async getQueriesInfo(): Promise<GetQueryInfoDto[] | Error> {
    const url = 'http://localhost:9001/all-queries-info';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return new Error(`Error fetching stream info: ${response.statusText}`);
      }

      const untypedData = (await response.json()) as unknown;

      const data = z.array(GetQueryInfoSchema).safeParse(untypedData);

      if (!data.success) {
        return new Error(`Error validating stream info: ${data.error.toString()}`);
      }

      return data.data;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }
}
