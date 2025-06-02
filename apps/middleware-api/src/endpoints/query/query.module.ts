import { Module } from '@nestjs/common';

import { QueryController } from './query.controller.js';
import { QueryCreator } from './services/queryCreator.js';
import { QueryDeleter } from './services/queryDeleter.js';
import { QueryGetter } from './services/queryGetter.js';

@Module({
  controllers: [QueryController],
  providers: [QueryGetter, QueryCreator, QueryDeleter],
  imports: [],
})
export class QueryModule {}
