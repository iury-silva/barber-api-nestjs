/*
  Warnings:

  - Added the required column `barberId` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "barberId" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
