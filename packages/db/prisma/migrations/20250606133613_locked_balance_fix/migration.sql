/*
  Warnings:

  - The `locked` column on the `Balance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Balance" DROP COLUMN "locked",
ADD COLUMN     "locked" INTEGER NOT NULL DEFAULT 0;
