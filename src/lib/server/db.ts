import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { env } from '../env';

const connectionPool = new Pool({
    connectionString: env.CONNECTION_STRING
})

export const db = drizzle(connectionPool);
