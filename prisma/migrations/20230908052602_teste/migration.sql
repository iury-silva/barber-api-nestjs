-- AlterTable
ALTER TABLE "barbers" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DEFAULT now();

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "bookingDate" DATE NOT NULL,
    "bookingTime" TIME NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'reservado',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "userId" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
