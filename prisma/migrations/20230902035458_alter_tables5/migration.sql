-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();
