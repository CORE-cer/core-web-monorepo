import { createZodDto } from 'nestjs-zod';

import { CreateQuerySchema, GetQueryInfoSchema } from './querySchema.js';

export class GetQueryInfoDto extends createZodDto(GetQueryInfoSchema) {}

export class GetQueriesInfoDto extends createZodDto(GetQueryInfoSchema.array()) {}

export class CreateQueryDto extends createZodDto(CreateQuerySchema) {}
