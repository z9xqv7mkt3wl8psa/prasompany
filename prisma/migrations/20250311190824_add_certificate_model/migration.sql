-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "certificateUrl" TEXT NOT NULL,
    "secretKey" TEXT NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_certificateUrl_key" ON "Certificate"("certificateUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_secretKey_key" ON "Certificate"("secretKey");
