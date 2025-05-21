import { ClsPluginTransactional } from '@nestjs-cls/transactional';
import { TransactionalAdapterKysely } from '@nestjs-cls/transactional-adapter-kysely';
import { Module } from '@nestjs/common';
import { DBType, Kysely, dialect } from 'middleware-api-db/kysely.js';
import { ClsModule } from 'nestjs-cls';

import { QueryModule } from '@src/endpoints/query/query.module.js';
import { StreamInfoModule } from '@src/endpoints/streamInfo/streamInfo.module.js';
import { KyselyModule } from '@src/kyselyAdapter/kysely.module.js';

@Module({
  imports: [
    KyselyModule.forRoot({
      dialect,
    }),
    ClsModule.forRoot({
      plugins: [
        new ClsPluginTransactional({
          imports: [KyselyModule],
          adapter: new TransactionalAdapterKysely({
            kyselyInstanceToken: Kysely<DBType>,
          }),
        }),
      ],
    }),
    StreamInfoModule,
    QueryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
