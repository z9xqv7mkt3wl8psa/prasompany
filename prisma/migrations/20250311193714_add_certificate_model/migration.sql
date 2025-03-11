/*
  Warnings:

  - You are about to drop the column `certificateUrl` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `issuedAt` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the column `secretKey` on the `Certificate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Certificate_certificateUrl_key";

-- DropIndex
DROP INDEX "Certificate_secretKey_key";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "certificateUrl",
DROP COLUMN "issuedAt",
DROP COLUMN "secretKey",
ADD COLUMN     "issuedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_id_key" ON "Certificate"("id");
