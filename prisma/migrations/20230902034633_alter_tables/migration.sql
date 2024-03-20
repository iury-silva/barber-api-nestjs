/*
  Warnings:

  - You are about to drop the column `date` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `hour` on the `schedules` table. All the data in the column will be lost.
  - Added the required column `bookingDate` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "date",
DROP COLUMN "hour",
ADD COLUMN     "bookingDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" VARCHAR(20) NOT NULL DEFAULT 'reservado',
ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();
