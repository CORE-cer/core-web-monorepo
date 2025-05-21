import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateQueryDto, GetQueriesInfoDto } from 'middleware-api-schemas/query/queryDto.js';
import { ZodValidationPipe } from 'nestjs-zod';

import { QueryGetter } from './services/queryGetter.js';

@ApiTags('QueryController')
@ApiBearerAuth('jwt')
@UsePipes(ZodValidationPipe)
@Controller('query')
export class QueryController {
  constructor(private readonly queryGetter: QueryGetter) {}
  @Get()
  @ApiOkResponse({
    type: GetQueriesInfoDto,
    description: 'Get all queries',
  })
  async getQueries(): Promise<GetQueriesInfoDto> {
    const queries = await this.queryGetter.getQueries();

    if (queries instanceof Error) {
      throw new Error(`Error calling getQueries: ${queries.message}`);
    }

    return queries;
  }

  @Post()
  @ApiCreatedResponse({
    type: String,
    description: 'Add a query and return its identifier',
  })
  async addQuery(@Body() queryDto: CreateQueryDto): Promise<string> {
    const queryIdentifier = await this.queryGetter.addQuery({ query: queryDto.query, queryName: queryDto.query_name });

    if (queryIdentifier instanceof Error) {
      throw new Error(`Error calling addQuery: ${queryIdentifier.message}`);
    }

    return queryIdentifier;
  }
}
