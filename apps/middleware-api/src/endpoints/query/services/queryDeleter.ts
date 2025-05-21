import { Injectable } from '@nestjs/common';

@Injectable()
export class QueryDeleter {
  async inactivateQuery(id: number): Promise<null | Error> {
    const url = 'http://localhost:9001/inactivate-query';

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
