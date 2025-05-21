import { z } from 'zod';

import { GetAttributeInfoSchema } from '@src/attributeInfo/attributeInfoSchema.js';

export const GetEventInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
  attributes_info: z.array(GetAttributeInfoSchema),
});
