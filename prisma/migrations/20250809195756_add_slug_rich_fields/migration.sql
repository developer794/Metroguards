-- AlterTable
ALTER TABLE "public"."Post" ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
