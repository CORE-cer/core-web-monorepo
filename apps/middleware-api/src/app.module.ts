import { Module } from '@nestjs/common';

import { QueryInfoModule } from '@src/endpoints/queryInfo/queryInfo.module.js';
import { StreamInfoModule } from '@src/endpoints/streamInfo/streamInfo.module.js';

@Module({
  imports: [StreamInfoModule, QueryInfoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
