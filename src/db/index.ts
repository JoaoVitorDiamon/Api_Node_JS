import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schemas/index'

export const client = postgres("postgresql://EventEasy_owner:ZDoJGPY5WH9k@ep-summer-mud-a5umaof9.us-east-2.aws.neon.tech/EventEasy?sslmode=require")
export const db = drizzle(client, { schema, logger: true },)


