-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "bookingDate" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT now();
