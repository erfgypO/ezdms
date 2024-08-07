import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({
    path: '.env.local',
});

export default defineConfig({
    schema: "./src/data/*.ts",
    out: "./src/data/migrations",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.CONNECTION_STRING!,
    },
    verbose: true,
    strict: true,
})
