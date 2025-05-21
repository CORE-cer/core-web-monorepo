import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { KyselyConfig } from 'middleware-api-db/kysely.js';

import { KYSELY_MODULE_CONNECTION_TOKEN, KYSELY_MODULE_OPTIONS_TOKEN } from './constants/kysely.constants.js';
import { createKyselyClient, createKyselyProvider } from './factories/kysely-client.factory.js';
import { KyselyConfigWithNamespace, KyselyModuleAsyncOptions } from './kysely.interfaces.js';
import { KyselyService } from './kysely.service.js';
import { createAsyncProviders } from './providers/kysely.provider-factory.js';

@Global()
@Module({})
export class KyselyCoreModule {
  public static forRoot(config: KyselyConfig | KyselyConfigWithNamespace[]): DynamicModule {
    const providers: Provider[] = createKyselyProvider(config);

    return {
      exports: providers,
      module: KyselyCoreModule,
      providers: [...providers, KyselyService],
    };
  }

  public static forRootAsync(options: KyselyModuleAsyncOptions): DynamicModule {
    const provider: Provider = {
      inject: [KYSELY_MODULE_OPTIONS_TOKEN, KyselyService],
      provide: KYSELY_MODULE_CONNECTION_TOKEN(options.namespace),
      useFactory: (config: KyselyConfig, service: KyselyService) => createKyselyClient({ config, service }),
    };

    return {
      exports: [provider],
      imports: options.imports,
      module: KyselyCoreModule,
      providers: [...createAsyncProviders(options), provider, KyselyService],
    };
  }
}
