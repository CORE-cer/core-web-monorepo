import { Controller, Get, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetStreamInfoDto } from 'middleware-api-schemas/streamInfo/streamInfoDto.js';
import { ZodValidationPipe } from 'nestjs-zod';

import { StreamInfoGetter } from './services/streamInfoGetter.js';

@ApiTags('StreamInfoController')
@ApiBearerAuth('jwt')
@UsePipes(ZodValidationPipe)
@Controller('convertibleNote')
export class StreamInfoController {
  constructor(private readonly streamInfoGetter: StreamInfoGetter) {}
  @Get()
  @ApiOkResponse({
    type: GetStreamInfoDto,
    description: 'Create car listing and return detail data',
  })
  getStreamsInfo(): Promise<GetStreamInfoDto[]> {
    return this.streamInfoGetter.getStreamsInfo();
  }
}
