-- CreateTable
CREATE TABLE "BankWithdrawals" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "BankWithdrawals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankWithdrawals_token_key" ON "BankWithdrawals"("token");

-- AddForeignKey
ALTER TABLE "BankWithdrawals" ADD CONSTRAINT "BankWithdrawals_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "SavedBankAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankWithdrawals" ADD CONSTRAINT "BankWithdrawals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
