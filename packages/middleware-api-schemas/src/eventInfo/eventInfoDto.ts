import { createZodDto } from 'nestjs-zod';

import { GetAttributeInfoSchema } from '@src/attributeInfo/attributeInfoSchema.js';

export class GetEventInfoDto extends createZodDto(GetAttributeInfoSchema) {}
