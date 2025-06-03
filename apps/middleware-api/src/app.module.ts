import { ClsPluginTransactional } from '@nestjs-cls/transactional';
import { TransactionalAdapterKysely } from '@nestjs-cls/transactional-adapter-kysely';
import { Module } from '@nestjs/common';
import { dialect } from 'middleware-api-db/kysely.js';
import { ClsModule } from 'nestjs-cls';

import { QueryModule } from '@src/endpoints/query/query.module.js';
import { StreamInfoModule } from '@src/endpoints/streamInfo/streamInfo.module.js';
import { EnvVariableImporterModule } from '@src/helpers/envVariableImporter.module.js';
import { KYSELY_MODULE_CONNECTION_TOKEN } from '@src/kyselyAdapter/constants/kysely.constants.js';
import { KyselyModule } from '@src/kyselyAdapter/kysely.module.js';

console.log(process.env.DATABASE_URL_MIDDLEWARE_API);

@Module({
  imports: [
    EnvVariableImporterModule,
    KyselyModule.forRoot({
      dialect,
    }),
    ClsModule.forRoot({
      plugins: [
        new ClsPluginTransactional({
          imports: [KyselyModule],
          adapter: new TransactionalAdapterKysely({
            kyselyInstanceToken: KYSELY_MODULE_CONNECTION_TOKEN(),
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
