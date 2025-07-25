-- CreateTable
CREATE TABLE "SavedBankAccounts" (
    "id" SERIAL NOT NULL,
    "bankCode" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "holderName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SavedBankAccounts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavedBankAccounts" ADD CONSTRAINT "SavedBankAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
