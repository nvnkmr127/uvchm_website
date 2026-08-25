import { neon } from '@neondatabase/serverless';

// Use a dummy connection string during Next.js static build if env var is missing
const connectionString = process.env.DATABASE_URL || 'postgres://user:pass@host/db';
export const sql = neon(connectionString);
