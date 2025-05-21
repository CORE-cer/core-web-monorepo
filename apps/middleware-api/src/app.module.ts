import { Module } from '@nestjs/common';

import { StreamInfoModule } from '@src/endpoints/streamInfo/streamInfo.module.js';

@Module({
  imports: [StreamInfoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
