/*
  Warnings:

  - You are about to drop the column `bookingTime` on the `schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "bookingTime",
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT now();
