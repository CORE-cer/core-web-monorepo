import { Abstract, ModuleMetadata, Type } from '@nestjs/common';
import { KyselyConfig } from 'middleware-api-db/kysely.js';

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unnecessary-type-arguments */
type InjectType = (string | symbol | Type<any> | Abstract<any> | (() => void))[];

export interface KyselyModuleOptionsFactory {
  createKyselyModuleOptions(): Promise<KyselyConfig> | KyselyConfig;
}

export interface KyselyModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  namespace?: string;
  inject?: InjectType;
  useClass?: Type<KyselyConfig>;
  useExisting?: Type<KyselyModuleOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<KyselyConfig> | KyselyConfig;
}

export interface KyselyConfigWithNamespace extends KyselyConfig {
  namespace: string;
}
