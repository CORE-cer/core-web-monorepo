import {
  ComplexEventSchema,
  EventDataSchema,
  type FormattedComplexEvent,
  type FormattedHit,
  type FormattedMarkedComplexEvent,
  HitSchema,
  type QueryInfo,
  type StreamInfo,
} from '@/types';
import { z } from 'zod';

export function formatHit(hit: z.infer<typeof HitSchema>, queryInfo: QueryInfo, streamInfo: StreamInfo): FormattedHit {
  if (!hit[0]) {
    throw new Error('Invalid hit format');
  }
  const end = hit[0];

  const complexEvents: FormattedMarkedComplexEvent[] = hit.map((complexEvent) => {
    return formatComplexEvent(complexEvent, queryInfo, streamInfo);
  });

  return {
    end: new Date(end.end / 1000000),
    complexEvents: complexEvents,
  };
}

function formatComplexEvent(complexEvent: z.infer<typeof ComplexEventSchema>, queryInfo: QueryInfo, streamInfo: StreamInfo): FormattedMarkedComplexEvent {
  const eventsByMarkedVariables: Record<string, FormattedComplexEvent[]> = {};

  for (const markedEvent of complexEvent.events) {
    for (const [markedVariable, event] of Object.entries(markedEvent)) {
      if (!eventsByMarkedVariables[markedVariable]) {
        eventsByMarkedVariables[markedVariable] = [];
      }

      eventsByMarkedVariables[markedVariable].push(formatEvent(event, markedVariable, queryInfo, streamInfo));
    }
  }
  return {
    start: new Date(complexEvent.start / 1000000),
    end: new Date(complexEvent.end / 1000000),
    complexEvents: eventsByMarkedVariables,
  };
}

function formatEvent(event: z.infer<typeof EventDataSchema>, markedVariable: string, queryInfo: QueryInfo, streamInfo: StreamInfo): FormattedComplexEvent {
  console.log('qqqq', queryInfo);
  const attribute_names: string[] = [];
  let eventType: string | undefined = undefined;
  if (markedVariable.includes('>')) {
    let stream: string | undefined = undefined;
    [stream, eventType] = markedVariable.split('>');
    if (!stream || !eventType) {
      throw new Error(`Invalid marked variable format: ${markedVariable}`);
    }

    for (const projection of queryInfo.attribute_projection_stream_event) {
      if (attribute_names.length > 0) {
        throw new Error(`Multiple attribute projections found for stream ${stream} and event ${eventType}`);
      }

      if (projection.stream_name === stream && projection.event_name === eventType) {
        attribute_names.push(...projection.attributes);
      }
    }
  } else {
    eventType = markedVariable;

    const attrs = queryInfo.attribute_projection_variable[eventType];
    if (attrs) {
      attribute_names.push(...attrs);
    }
  }

  // If no projection, use the streams default attributes
  if (attribute_names.length === 0) {
    for (const eventInfo of streamInfo.events_info) {
      if (eventInfo.name === eventType) {
        attribute_names.push(...eventInfo.attributes_info.map((attr) => attr.name));
        break;
      }
    }
  }

  if (attribute_names.length === 0) {
    throw new Error(`No attribute projections found for stream ${markedVariable}`);
  }
  return {
    eventName: event.event_type_id.toString(),
    // attributes: Object.fromEntries(event.attributes.map((attr, index) => [`attr${index}`, attr])),
    attributes: Object.fromEntries(
      attribute_names.map((name, index) => {
        const value = event.attributes[index];
        if (value === undefined) {
          throw new Error(`Missing value for attribute ${name} in event ${eventType}`);
        }
        return [name, value];
      })
    ),
  };
}
