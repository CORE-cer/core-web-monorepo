import { Controller, Get, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetQueryInfoDto } from 'middleware-api-schemas/queryInfo/queryInfoDto.js';
import { ZodValidationPipe } from 'nestjs-zod';

import { QueryInfoGetter } from './services/queryInfoGetter.js';

@ApiTags('QueryInfoController')
@ApiBearerAuth('jwt')
@UsePipes(ZodValidationPipe)
@Controller('queryInfo')
export class QueryInfoController {
  constructor(private readonly queryInfoGetter: QueryInfoGetter) {}
  @Get()
  @ApiOkResponse({
    type: GetQueryInfoDto,
    description: 'Get all query info',
  })
  async getQueriesInfo(): Promise<GetQueryInfoDto[]> {
    const queriesInfo = await this.queryInfoGetter.getQueriesInfo();

    if (queriesInfo instanceof Error) {
      throw new Error(`Error calling getQueriesInfo: ${queriesInfo.message}`);
    }

    return queriesInfo;
  }
}
