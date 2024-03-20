/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `barbers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "barbers" DROP COLUMN "updatedAt",
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "updatedAt",
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" DROP COLUMN "updatedAt",
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" DROP COLUMN "updatedAt",
ALTER COLUMN "createdAt" SET DEFAULT now();
