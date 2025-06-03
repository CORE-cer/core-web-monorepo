import { Injectable } from '@nestjs/common';

import { EnvVariableImporter } from '@src/helpers/envVariableImporter.js';

@Injectable()
export class QueryDeleter {
  private readonly coreCPPUrl: string;
  constructor(private readonly envVariableImporter: EnvVariableImporter) {
    this.coreCPPUrl = this.envVariableImporter.getCoreCPPUrl();
  }

  async inactivateQuery(id: number): Promise<null | Error> {
    const url = `${this.coreCPPUrl}/inactivate-query`;

    try {
      const response = await fetch(`${url}/${String(id)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        console.log(await response.text());
        return new Error(`Error inactivating query : ${response.statusText}`);
      }

      return null;
    } catch (error) {
      return new Error(`Unknown error: ${error as Error}`);
    }
  }
}
