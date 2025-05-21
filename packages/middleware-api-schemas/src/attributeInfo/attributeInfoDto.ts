import { createZodDto } from 'nestjs-zod';

import { GetAttributeInfoSchema } from './attributeInfoSchema.js';

export class GetAttributeInfoDto extends createZodDto(GetAttributeInfoSchema) {}
