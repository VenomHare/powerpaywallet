/*
  Warnings:

  - The `status` column on the `BankWithdrawals` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ActionStatus" AS ENUM ('APPROVAL_PENDING', 'NOT_APPROVED', 'Processing', 'Failure', 'Success');

-- AlterTable
ALTER TABLE "BankWithdrawals" DROP COLUMN "status",
ADD COLUMN     "status" "ActionStatus" NOT NULL DEFAULT 'APPROVAL_PENDING';
