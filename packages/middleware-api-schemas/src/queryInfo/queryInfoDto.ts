import { createZodDto } from 'nestjs-zod';

import { GetQueryInfoSchema } from '@src/queryInfo/queryInfoSchema.js';

export class GetQueryInfoDto extends createZodDto(GetQueryInfoSchema) {}
