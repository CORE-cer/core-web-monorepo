import { Module } from '@nestjs/common';

import { QueryInfoController } from './queryInfo.controller.js';
import { QueryInfoGetter } from './services/queryInfoGetter.js';

@Module({
  controllers: [QueryInfoController],
  providers: [QueryInfoGetter],
  imports: [],
})
export class QueryInfoModule {}
