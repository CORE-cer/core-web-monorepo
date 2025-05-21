import { Controller, Get, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetStreamInfoDto } from 'middleware-api-schemas/streamInfo/streamInfoDto.js';
import { ZodValidationPipe } from 'nestjs-zod';

import { StreamInfoGetter } from './services/streamInfoGetter.js';

@ApiTags('StreamInfoController')
@ApiBearerAuth('jwt')
@UsePipes(ZodValidationPipe)
@Controller('streamInfo')
export class StreamInfoController {
  constructor(private readonly streamInfoGetter: StreamInfoGetter) {}
  @Get()
  @ApiOkResponse({
    type: GetStreamInfoDto,
    description: 'Get all stream info',
  })
  async getStreamsInfo(): Promise<GetStreamInfoDto[]> {
    const streamsInfo = await this.streamInfoGetter.getStreamsInfo();

    if (streamsInfo instanceof Error) {
      throw new Error(`Error calling getStreamsInfo: ${streamsInfo.message}`);
    }

    return streamsInfo;
  }
}
