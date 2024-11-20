import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in environment variables");
}

export const env = envSchema.parse(process.env);
