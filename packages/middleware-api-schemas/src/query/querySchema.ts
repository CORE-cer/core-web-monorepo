import { z } from 'zod';

const AttributeProjectionStreamEventSchema = z.object({
  stream_name: z.string(),
  event_name: z.string(),
  attributes: z.array(z.string()),
});

export const GetQueryInfoSchema = z.object({
  result_handler_identifier: z.coerce.number(),
  result_handler_type: z.coerce.number(),
  query_string: z.string(),
  query_name: z.string(),
  active: z.boolean(),
  attribute_projection_stream_event: z.array(AttributeProjectionStreamEventSchema),
  attribute_projection_variable: z.record(z.array(z.string())),
});

export const CreateQuerySchema = z.object({
  query: z.string(),
  query_name: z.string(),
});
