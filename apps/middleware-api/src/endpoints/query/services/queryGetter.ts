import { Injectable } from '@nestjs/common';
import { GetQueryInfoDto } from 'middleware-api-schemas/query/queryDto.js';
import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { z } from 'zod';

import { EnvVariableImporter } from '@src/helpers/envVariableImporter.js';

@Injectable()
export class QueryGetter {
  private readonly coreCPPUrl: string;
  constructor(private readonly envVariableImporter: EnvVariableImporter) {
    this.coreCPPUrl = this.envVariableImporter.getCoreCPPUrl();
  }

  async getQueries(): Promise<GetQueryInfoDto[] | Error> {
    const url = `${this.coreCPPUrl}/all-queries-info`;

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
}
