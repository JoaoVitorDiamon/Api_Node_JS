import { defineConfig } from 'drizzle-kit'
import { env } from './src/api/http/env'

export default defineConfig({
  schema: './src/db/schemas/*',
  dialect: 'postgresql',
  out: './.migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
