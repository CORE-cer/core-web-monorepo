import { DynamicModule, Module } from '@nestjs/common';
import { KyselyConfig } from 'middleware-api-db/kysely.js';

import { KyselyCoreModule } from './kysely.core.module.js';
import { KyselyConfigWithNamespace, KyselyModuleAsyncOptions } from './kysely.interfaces.js';

@Module({})
export class KyselyModule {
  public static forRoot(config: KyselyConfig | KyselyConfigWithNamespace[]): DynamicModule {
    return {
      module: KyselyModule,
      imports: [KyselyCoreModule.forRoot(config)],
      exports: [KyselyCoreModule],
    };
  }

  public static forRootAsync(options: KyselyModuleAsyncOptions): DynamicModule {
    return {
      module: KyselyModule,
      imports: [KyselyCoreModule.forRootAsync(options)],
      exports: [KyselyCoreModule],
    };
  }
}
