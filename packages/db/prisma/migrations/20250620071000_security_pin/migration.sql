/*
  Warnings:

  - Added the required column `securityPin` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "failedPinTries" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastFailedPinTry" TIMESTAMP(3),
ADD COLUMN     "securityPin" TEXT NOT NULL;
