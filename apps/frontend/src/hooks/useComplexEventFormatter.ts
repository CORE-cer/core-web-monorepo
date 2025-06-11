// import { useCallback } from 'react';
//
// import type { ComplexEvent, EventInfo, FormattedHit, StreamInfo } from '@/types';
//
// export const useComplexEventFormatter = (streamsInfo: StreamInfo[]) => {
//   const formatComplexEvents = useCallback(
//     (complexEventsJson: ComplexEvent[]): FormattedHit[] => {
//       function getEventInfoFromEventId(eventId: string): EventInfo | undefined {
//         for (const streamInfo of streamsInfo) {
//           for (const eventInfo of streamInfo.events_info) {
//             if (eventInfo.id === eventId) {
//               return eventInfo;
//             }
//           }
//         }
//         return undefined;
//       }
//
//       const outputHits: FormattedHit[] = [];
//       for (const complexEvent of complexEventsJson) {
//         const outputComplexEvent = {
//           start: complexEvent.start,
//           end: complexEvent.end,
//           events: [] as { event_type: string; [key: string]: unknown }[],
//         };
//
//         for (const event of complexEvent.eventss) {
//           const eventData = event.event;
//           const eventInfo = getEventInfoFromEventId(eventData.event_type_id);
//
//           if (eventInfo) {
//             const eventOutput: { event_type: string; [key: string]: unknown } = {
//               event_type: eventInfo.name,
//             };
//
//             for (let i = 0; i < eventInfo.attributes_info.length; i++) {
//               const attributeInfo = eventInfo.attributes_info[i];
//               const attributeValue = eventData.attributes[i];
//               eventOutput[attributeInfo.name] = attributeValue;
//             }
//             outputComplexEvent.events.push(eventOutput);
//           }
//         }
//
//         const time = new Date(outputComplexEvent.end / 1000000);
//         outputHits.push({
//           time,
//           data: outputComplexEvent,
//         });
//       }
//       return outputHits;
//     },
//     [streamsInfo]
//   );
//
//   return formatComplexEvents;
// };
