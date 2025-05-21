import { Injectable } from '@nestjs/common';
import { GetStreamInfoDto } from 'middleware-api-schemas/streamInfo/streamInfoDto.js';
import { GetStreamInfoSchema } from 'middleware-api-schemas/streamInfo/streamInfoSchema.js';
import { z } from 'zod';

@Injectable()
export class StreamInfoGetter {
  async getStreamsInfo(): Promise<GetStreamInfoDto[]> {
    const url = 'http://localhost:9001/all-streams-info';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching stream info: ${response.statusText}`);
      }

      const untypedData = (await response.json()) as unknown;
      console.log(untypedData);

      const data = z.array(GetStreamInfoSchema).parse(untypedData);

      return data;
    } catch (error) {
      throw new Error(`Error fetching stream info: ${(error as Error).message}`);
    }
  }
}
