import { Provider } from '@nestjs/common';
import { Kysely, KyselyConfig } from 'middleware-api-db/kysely.js';

import { KYSELY_MODULE_CONNECTION_TOKEN } from '../constants/kysely.constants.js';
import { KyselyConfigWithNamespace } from '../kysely.interfaces.js';
import { KyselyService } from '../kysely.service.js';

export const createKyselyClient = <DB>({ config, service }: { config: KyselyConfig; service: KyselyService }): Kysely<DB> => {
  const client = new Kysely<DB>(config);
  service.addClient(client);

  return client;
};

export const createKyselyProvider = (options: KyselyConfig | KyselyConfigWithNamespace[]): Provider[] => {
  if (Array.isArray(options)) {
    return options.map((opt) => {
      return {
        inject: [KyselyService],
        provide: KYSELY_MODULE_CONNECTION_TOKEN(opt.namespace),
        useFactory: (kyselyService: KyselyService) => createKyselyClient({ config: opt, service: kyselyService }),
      };
    });
  } else {
    return [
      {
        inject: [KyselyService],
        provide: KYSELY_MODULE_CONNECTION_TOKEN(),
        useFactory: (kyselyService: KyselyService) => createKyselyClient({ config: options, service: kyselyService }),
      },
    ];
  }
};
