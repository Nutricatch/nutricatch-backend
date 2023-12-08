-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyConsumtion" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calories" DOUBLE PRECISION NOT NULL,
    "carbohydrates" DOUBLE PRECISION,
    "fat" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "healthId" INTEGER NOT NULL,

    CONSTRAINT "DailyConsumtion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Health" (
    "id" SERIAL NOT NULL,
    "weight" DOUBLE PRECISION,
    "age" INTEGER,
    "gender" "Gender",
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Health_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Health_userId_key" ON "Health"("userId");

-- AddForeignKey
ALTER TABLE "DailyConsumtion" ADD CONSTRAINT "DailyConsumtion_healthId_fkey" FOREIGN KEY ("healthId") REFERENCES "Health"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Health" ADD CONSTRAINT "Health_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
