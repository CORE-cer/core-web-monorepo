import { Module } from '@nestjs/common';

import { StreamInfoGetter } from './services/streamInfoGetter.js';
import { StreamInfoController } from './streamInfo.controller.js';

@Module({
  controllers: [StreamInfoController],
  providers: [StreamInfoGetter],
  imports: [],
})
export class StreamInfoModule {}
