-- AlterTable
ALTER TABLE "barbers" ADD COLUMN     "user_type" VARCHAR(20) NOT NULL DEFAULT 'barber',
ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "schedules" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "user_type" VARCHAR(20) NOT NULL DEFAULT 'user',
ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "updatedAt" SET DEFAULT now();
