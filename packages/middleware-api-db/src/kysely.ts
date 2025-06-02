import { PostgresDialect } from 'kysely';
import { DB } from 'kysely-codegen';
import { Pool } from 'pg';

export { Kysely, KyselyConfig } from 'kysely';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
if (!process.env.MIDDLEWARE_API_SCHEMA) {
  throw new Error('MIDDLEWARE_API_SCHEMA is not defined');
}

export const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false,
    options: `--search_path=${process.env.MIDDLEWARE_API_SCHEMA}`,
  }),
});

export type DBType = DB;
