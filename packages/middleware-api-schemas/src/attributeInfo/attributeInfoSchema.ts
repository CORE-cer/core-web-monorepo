import { z } from 'zod';

export const GetAttributeInfoSchema = z.object({
  name: z.string(),
  value_type: z.number(),
});
