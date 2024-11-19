import { defineConfig } from 'drizzle-kit'
import { env } from './src/db/http/env'

export default defineConfig({
  schema: './src/db/schemas/*',
  dialect: 'postgresql',
  out: './.migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
