import { z } from 'zod';

export const GetQueryInfoSchema = z.object({
  result_handler_identifier: z.string(),
  result_handler_type: z.string(),
  query_string: z.string(),
  active: z.boolean(),
});
