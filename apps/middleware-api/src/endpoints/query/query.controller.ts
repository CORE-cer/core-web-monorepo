import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateQueryDto, GetQueriesInfoDto } from 'middleware-api-schemas/query/queryDto.js';
import { ZodValidationPipe } from 'nestjs-zod';

import { QueryGetter } from './services/queryGetter.js';

@ApiTags('QueryController')
@ApiBearerAuth('jwt')
@UsePipes(ZodValidationPipe)
@UsePipes(new ValidationPipe({ transform: true }))
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

  @Delete(':id')
  @ApiOkResponse({
    description: 'Inactivate a query',
  })
  async inactivateQuery(@Param('id') id: number): Promise<void> {
    const response = await this.queryGetter.inactivateQuery(id);

    if (response instanceof Error) {
      throw new Error(`Error calling inactivate-query: ${response.message}`);
    }
  }
}
