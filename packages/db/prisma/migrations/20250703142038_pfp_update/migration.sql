/*
  Warnings:

  - A unique constraint covering the columns `[pfpPublicId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pfpPublicId" TEXT;

-- CreateTable
CREATE TABLE "cloudinary_images" (
    "public_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "cloudinary_images_pkey" PRIMARY KEY ("public_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_pfpPublicId_key" ON "User"("pfpPublicId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pfpPublicId_fkey" FOREIGN KEY ("pfpPublicId") REFERENCES "cloudinary_images"("public_id") ON DELETE SET NULL ON UPDATE CASCADE;
