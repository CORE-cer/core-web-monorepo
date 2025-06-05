import { z } from 'zod';

export const GetQueryInfoSchema = z.object({
  result_handler_identifier: z.coerce.number(),
  result_handler_type: z.coerce.number(),
  query_string: z.string(),
  query_name: z.string(),
  active: z.boolean(),
});

export const CreateQuerySchema = z.object({
  query: z.string(),
  query_name: z.string(),
});
