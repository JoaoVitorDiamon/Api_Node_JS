import z from 'zod';

const envSchema = z.object({
   DATABASE_URL: z.string().url(),
});



export const env = envSchema.parse("postgresql://EventEasy_owner:ZDoJGPY5WH9k@ep-summer-mud-a5umaof9.us-east-2.aws.neon.tech/EventEasy?sslmode=require");
