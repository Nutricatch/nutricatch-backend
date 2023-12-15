/*
  Warnings:

  - The values [LIGHTLY,MODERATELY,EXTREMELY_ACTIVE] on the enum `ActivityLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActivityLevel_new" AS ENUM ('SEDENTARY', 'MODERATELY_ACTIVE', 'VERY_ACTIVE');
ALTER TABLE "Health" ALTER COLUMN "activityLevel" TYPE "ActivityLevel_new" USING ("activityLevel"::text::"ActivityLevel_new");
ALTER TYPE "ActivityLevel" RENAME TO "ActivityLevel_old";
ALTER TYPE "ActivityLevel_new" RENAME TO "ActivityLevel";
DROP TYPE "ActivityLevel_old";
COMMIT;
