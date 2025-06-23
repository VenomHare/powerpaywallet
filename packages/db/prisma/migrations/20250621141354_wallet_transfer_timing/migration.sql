/*
  Warnings:

  - You are about to drop the column `completedAt` on the `WalletTransfers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WalletTransfers" DROP COLUMN "completedAt",
ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
