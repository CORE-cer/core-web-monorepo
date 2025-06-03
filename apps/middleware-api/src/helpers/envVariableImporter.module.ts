import { Global, Module } from '@nestjs/common';

import { EnvVariableImporter } from './envVariableImporter.js';

@Global()
@Module({
  providers: [EnvVariableImporter],
  exports: [EnvVariableImporter],
})
export class EnvVariableImporterModule {}
