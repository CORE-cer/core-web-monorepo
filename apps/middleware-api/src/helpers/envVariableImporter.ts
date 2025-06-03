import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvVariableImporter {
  public getCoreCPPUrl(): string {
    const env = process.env.CORECPP_URL;
    if (!env) {
      throw new Error('CORECPP_URL is not set');
    }
    return env;
  }
}
