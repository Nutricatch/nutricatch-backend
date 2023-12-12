-- CreateEnum
CREATE TYPE "ActivityLevel" AS ENUM ('LIGHT', 'MODERATE', 'ATHLETIC');

-- AlterTable
ALTER TABLE "Health" ADD COLUMN     "activityLevel" "ActivityLevel";
