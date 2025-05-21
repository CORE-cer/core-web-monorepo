import { z } from 'zod';

import { GetEventInfoSchema } from '@src/eventInfo/eventInfoSchema.js';

export const GetStreamInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
  events_info: z.array(GetEventInfoSchema),
});
