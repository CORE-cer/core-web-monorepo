import { Controller, Get, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetStreamsInfoDto } from 'middleware-api-schemas/streamInfo/streamInfoDto.js';
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
    type: GetStreamsInfoDto,
    description: 'Get all stream info',
  })
  async getStreamsInfo(): Promise<GetStreamsInfoDto> {
    const streamsInfo = await this.streamInfoGetter.getStreamsInfo();

    if (streamsInfo instanceof Error) {
      throw new Error(`Error calling getStreamsInfo: ${streamsInfo.message}`);
    }

    return streamsInfo;
  }
}
