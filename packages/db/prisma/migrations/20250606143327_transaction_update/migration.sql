/*
  Warnings:

  - Added the required column `Statement` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionType` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('Debit', 'Credit');

-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "Statement" TEXT NOT NULL,
ADD COLUMN     "transactionType" "TransactionType" NOT NULL;
