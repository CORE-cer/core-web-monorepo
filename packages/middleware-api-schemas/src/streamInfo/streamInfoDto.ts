import { createZodDto } from 'nestjs-zod';

import { GetStreamInfoSchema } from '@src/streamInfo/streamInfoSchema.js';

export class GetStreamInfoDto extends createZodDto(GetStreamInfoSchema) {}
