import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterKysely } from '@nestjs-cls/transactional-adapter-kysely';
import { Injectable } from '@nestjs/common';
import { DBType } from 'middleware-api-db/kysely.js';
import { GetQueryInfoDto } from 'middleware-api-schemas/query/queryDto.js';
import { GetQueryInfoSchema } from 'middleware-api-schemas/query/querySchema.js';
import { z } from 'zod';

import { EnvVariableImporter } from '@src/helpers/envVariableImporter.js';

@Injectable()
export class QueryGetter {
  private readonly coreCPPUrl: string;
  constructor(
    private readonly envVariableImporter: EnvVariableImporter,
    private readonly txHost: TransactionHost<TransactionalAdapterKysely<DBType>>
  ) {
    this.coreCPPUrl = this.envVariableImporter.getCoreCPPUrl();
  }

  async getQueries({ userId }: { userId: string }): Promise<GetQueryInfoDto[] | Error> {
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

      const userQueryIdObjects = await this.txHost.tx.selectFrom('user_queries').select('query_id').where('user_id', '=', userId).execute();
      const userQueryIds = new Set(userQueryIdObjects.map((obj) => obj.query_id));

      const filteredData = data.data.filter((query) => userQueryIds.has(query.result_handler_identifier));

      return filteredData;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }
}
