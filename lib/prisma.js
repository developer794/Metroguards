import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

// Create a singleton Prisma client with better connection handling
const prisma = globalForPrisma.prisma || new PrismaClient({
  // Let Prisma use the DATABASE_URL from schema.prisma (POSTGRES_URL from .env)
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

// Ensure the Prisma instance is cleaned up properly
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
} else {
  // In production, ensure we don't keep creating new instances
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
}

export default prisma;
