import { Module } from '@nestjs/common';

import { QueryModule } from '@src/endpoints/query/query.module.js';
import { StreamInfoModule } from '@src/endpoints/streamInfo/streamInfo.module.js';

@Module({
  imports: [StreamInfoModule, QueryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
