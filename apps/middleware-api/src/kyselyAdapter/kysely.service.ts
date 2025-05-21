import { OnApplicationShutdown } from '@nestjs/common';
import { Kysely } from 'middleware-api-db/kysely.js';

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-generic-constructors */
export class KyselyService implements OnApplicationShutdown {
  private storedActiveClients: Set<Kysely<any>> = new Set();

  get activeClients() {
    return Array.from(this.storedActiveClients);
  }

  addClient(client: Kysely<any>) {
    this.storedActiveClients.add(client);
  }

  async onApplicationShutdown() {
    for (const client of this.storedActiveClients.values()) {
      try {
        await client.destroy();
        this.storedActiveClients.delete(client);
      } catch (e) {
        console.error(`Failed to destroy Kysely client: ${e as Error}`);
      }
    }
  }
}
