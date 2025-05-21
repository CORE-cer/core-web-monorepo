import { Module } from '@nestjs/common';

import { QueryController } from './query.controller.js';
import { QueryGetter } from './services/queryGetter.js';

@Module({
  controllers: [QueryController],
  providers: [QueryGetter],
  imports: [],
})
export class QueryModule {}
