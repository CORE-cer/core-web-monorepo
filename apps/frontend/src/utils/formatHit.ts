import { ComplexEventSchema, EventDataSchema, type FormattedComplexEvent, type FormattedHit, type FormattedMarkedComplexEvent, HitSchema } from '@/types';
import { z } from 'zod';

export function formatHit(hit: z.infer<typeof HitSchema>): FormattedHit {
  if (!hit[0]) {
    throw new Error('Invalid hit format');
  }
  const end = hit[0];

  const complexEvents: FormattedMarkedComplexEvent[] = hit.map((complexEvent) => {
    return formatComplexEvent(complexEvent);
  });

  return {
    end: new Date(end.end / 1000000),
    complexEvents: complexEvents,
  };
}

function formatComplexEvent(complexEvent: z.infer<typeof ComplexEventSchema>): FormattedMarkedComplexEvent {
  const eventsByMarkedVariables: Record<string, FormattedComplexEvent[]> = {};

  for (const markedEvent of complexEvent.events) {
    for (const [markedVariable, event] of Object.entries(markedEvent)) {
      if (!eventsByMarkedVariables[markedVariable]) {
        eventsByMarkedVariables[markedVariable] = [];
      }

      eventsByMarkedVariables[markedVariable].push(formatEvent(event));
    }
  }
  return {
    start: new Date(complexEvent.start / 1000000),
    end: new Date(complexEvent.end / 1000000),
    complexEvents: eventsByMarkedVariables,
  };
}

function formatEvent(event: z.infer<typeof EventDataSchema>): FormattedComplexEvent {
  return {
    eventName: event.event_type_id.toString(),
    attributes: Object.fromEntries(event.attributes.map((attr, index) => [`attr${index}`, attr])),
  };
}
