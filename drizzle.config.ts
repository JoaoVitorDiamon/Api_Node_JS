import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schemas/*',
  dialect: 'postgresql',
  out: './.migrations',
  dbCredentials: {
    url: "postgresql://EventEasy_owner:ZDoJGPY5WH9k@ep-summer-mud-a5umaof9.us-east-2.aws.neon.tech/EventEasy?sslmode=require",
  },
})
