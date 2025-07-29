/*
  Warnings:

  - Added the required column `fee` to the `BankWithdrawals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gateway` to the `BankWithdrawals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `net_amount` to the `BankWithdrawals` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WithdrawalOption" AS ENUM ('bank_transfer');

-- AlterTable
ALTER TABLE "BankWithdrawals" ADD COLUMN     "fee" INTEGER NOT NULL,
ADD COLUMN     "gateway" "WithdrawalOption" NOT NULL,
ADD COLUMN     "net_amount" INTEGER NOT NULL;
