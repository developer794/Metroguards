import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

// Get database URL and ensure PgBouncer compatibility
function getDatabaseUrl() {
  let url = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!url) return undefined;
  
  // Ensure PgBouncer parameters are present for Supabase pooled connections
  if (url.includes('pooler.supabase.com') || url.includes(':6543')) {
    if (!url.includes('pgbouncer=true')) {
      url += url.includes('?') ? '&pgbouncer=true' : '?pgbouncer=true';
    }
    if (!url.includes('connection_limit=')) {
      url += '&connection_limit=1';
    }
  }
  return url;
}

// Create singleton Prisma client to prevent connection exhaustion
const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: getDatabaseUrl(),
    },
  },
});

// In development, preserve client across hot reloads
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
