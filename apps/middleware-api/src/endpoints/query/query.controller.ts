// import { TransactionHost } from '@nestjs-cls/transactional';
// import { TransactionalAdapterKysely } from '@nestjs-cls/transactional-adapter-kysely';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterKysely } from '@nestjs-cls/transactional-adapter-kysely';
import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DBType } from 'middleware-api-db/kysely.js';
// import { DBType } from 'middleware-api-db/kysely.js';
import { CreateQueryDto, GetQueriesInfoDto } from 'middleware-api-schemas/query/queryDto.js';
import { ZodValidationPipe } from 'nestjs-zod';

import { QueryCreator } from './services/queryCreator.js';
import { QueryDeleter } from './services/queryDeleter.js';
import { QueryGetter } from './services/queryGetter.js';

@ApiTags('QueryController')
@UsePipes(ZodValidationPipe)
@UsePipes(new ValidationPipe({ transform: true }))
@Controller('query')
export class QueryController {
  constructor(
    private readonly queryGetter: QueryGetter,
    private readonly queryCreator: QueryCreator,
    private readonly queryDeleter: QueryDeleter,
    protected readonly txHost: TransactionHost<TransactionalAdapterKysely<DBType>>
  ) {}
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
    const queryIdentifier = await this.queryCreator.addQuery({ query: queryDto.query, queryName: queryDto.query_name });

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
    const response = await this.queryDeleter.inactivateQuery(id);

    if (response instanceof Error) {
      throw new Error(`Error calling inactivate-query: ${response.message}`);
    }
  }
}
