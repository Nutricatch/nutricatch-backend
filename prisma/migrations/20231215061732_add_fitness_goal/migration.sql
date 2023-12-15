-- CreateEnum
CREATE TYPE "FitnessGoal" AS ENUM ('WeightLoss', 'Maintenance', 'WeightGain');

-- AlterTable
ALTER TABLE "Health" ADD COLUMN     "fitnessGoal" "FitnessGoal";
