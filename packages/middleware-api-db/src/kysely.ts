import { PostgresDialect } from 'kysely';
import { DB } from 'kysely-codegen';
import { Pool } from 'pg';

export { Kysely, KyselyConfig } from 'kysely';

if (!process.env.DATABASE_URL_MIDDLEWARE_API) {
  throw new Error('DATABASE_URL_MIDDLEWARE_API is not defined');
}

export const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL_MIDDLEWARE_API,
  }),
});

export type DBType = DB;
