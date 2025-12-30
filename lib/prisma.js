import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

// Create singleton Prisma client to prevent connection exhaustion
const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

// In development, preserve client across hot reloads
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
