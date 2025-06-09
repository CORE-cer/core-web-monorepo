import { TransactionHost, Transactional } from '@nestjs-cls/transactional';
import { TransactionalAdapterKysely } from '@nestjs-cls/transactional-adapter-kysely';
import { Injectable } from '@nestjs/common';
import { DBType } from 'middleware-api-db/kysely.js';
import { z } from 'zod';

import { EnvVariableImporter } from '@src/helpers/envVariableImporter.js';

@Injectable()
export class QueryCreator {
  private readonly coreCPPUrl: string;
  constructor(
    private readonly envVariableImporter: EnvVariableImporter,
    private readonly txHost: TransactionHost<TransactionalAdapterKysely<DBType>>
  ) {
    this.coreCPPUrl = this.envVariableImporter.getCoreCPPUrl();
  }

  @Transactional()
  async addQuery({ query, queryName, userId }: { query: string; queryName: string; userId: string }): Promise<number> {
    const user = await this.txHost.tx.selectFrom('users').select('id').where('id', '=', userId).executeTakeFirst();
    if (!user) {
      await this.txHost.tx.insertInto('users').values({ id: userId }).execute();
    }

    const url = `${this.coreCPPUrl}/add-query`;
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
      throw new Error(`Error adding query : ${response.statusText}`);
    }

    const untypedData = (await response.json()) as unknown;

    const queryIdentifier = z.coerce.number().safeParse(untypedData);

    if (!queryIdentifier.success) {
      throw new Error(`Error validating query identifier : ${queryIdentifier.error.toString()}`);
    }

    await this.txHost.tx.insertInto('queries').values({ id: queryIdentifier.data, query_text: query }).execute();
    await this.txHost.tx.insertInto('user_queries').values({ user_id: userId, query_id: queryIdentifier.data }).execute();

    return queryIdentifier.data;
  }
}
