import { Injectable } from '@nestjs/common';
import { GetStreamInfoDto } from 'middleware-api-schemas/streamInfo/streamInfoDto.js';
import { GetStreamInfoSchema } from 'middleware-api-schemas/streamInfo/streamInfoSchema.js';
import { z } from 'zod';

import { EnvVariableImporter } from '@src/helpers/envVariableImporter.js';

@Injectable()
export class StreamInfoGetter {
  private readonly coreCPPUrl: string;
  constructor(private readonly envVariableImporter: EnvVariableImporter) {
    this.coreCPPUrl = this.envVariableImporter.getCoreCPPUrl();
  }

  async getStreamsInfo(): Promise<GetStreamInfoDto[] | Error> {
    const url = `${this.coreCPPUrl}/all-streams-info`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return new Error(`Error fetching stream info: ${response.statusText}`);
      }

      const untypedData = (await response.json()) as unknown;

      const data = z.array(GetStreamInfoSchema).safeParse(untypedData);

      if (!data.success) {
        return new Error(`Error validating stream info: ${data.error.toString()}`);
      }

      return data.data;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }
}
