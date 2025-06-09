import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it, suite } from 'vitest'
import app from '..'
import { prisma } from '@powerpaywallet/db/client'
import { $Enums } from '@powerpaywallet/db'

let user: any;
let balance: any;
let transaction: any;

beforeAll(async () => {
    // Create test user
    user = await prisma.user.create({
        data: {
            number: "12321312",
            password: "password"
        }
    });

    // Create balance for user
    balance = await prisma.balance.create({
        data: {
            userId: user.id,
            amount: 0
        }
    });

    // Create initial transaction
    transaction = await prisma.onRampTransaction.create({
        data: {
            token: "pay_tok_sa2sn21ia1g931",
            userId: user.id,
            Statement: "Test Transaction",
            amount: 4000,
            provider: "POWERPAY_MOCKBANK",
            transactionType: "Credit",
            onRampStatus: "Processing",
        }
    });
});

afterAll(async () => {
    // Clean up all test data in reverse order
    if (transaction) {
        await prisma.onRampTransaction.deleteMany({
            where: { userId: user.id }
        });
    }

    if (balance) {
        await prisma.balance.delete({
            where: { id: balance.id }
        });
    }

    if (user) {
        await prisma.user.delete({
            where: { id: user.id }
        });
    }
});

describe('v1 Router', () => {
    suite('v1/mock/powerpay/success', async () => {

        it("should reject with invalid body", async () => {

            const res = await request(app)
                .post("/v1/mock/powerpay/success")
                .send({})
                .set('Authorization', process.env.WEBHOOK_SECRET||"");
            expect(res.status).toBe(411);
            expect(res.body.message).toBe("Invalid Parameters");
        });

        it("should reject if onRamp transaction entry not found", async () => {
            const res = await request(app)
                .post("/v1/mock/powerpay/success")
                .send({
                    token: "pay_tok_somerandomtoken",
                    user_identifier: user.id,
                    amount: 4000
                })
                .set('Authorization', process.env.WEBHOOK_SECRET||"");

            const userBalance = await prisma.balance.findFirst({
                where: {
                    id: user.id
                }
            })

            expect(res.status).toBe(411);
            expect(res.body.message).toBe("Error while processing Webhook Request");
            expect(userBalance?.amount).toBe(0);
        })

        it("should reject if balance entry not found", async () => {
            const res = await request(app)
                .post("/v1/mock/powerpay/success")
                .send({
                    token: transaction.token,
                    user_identifier: 213123,
                    amount: transaction.amount
                })
                .set('Authorization', process.env.WEBHOOK_SECRET||"");

            expect(res.status).toBe(411);
            expect(res.body.message).toBe("Error while processing Webhook Request");
        })

        it("should update user's balance", async () => {

            const res = await request(app)
                .post("/v1/mock/powerpay/success")
                .send({
                    token: transaction.token,
                    user_identifier: user.id,
                    amount: transaction.amount
                })
                .set('Authorization', process.env.WEBHOOK_SECRET||"");

            const tnx = await prisma.onRampTransaction.findUnique({
                where: {
                    token: transaction.token
                }
            })

            const userBalance = await prisma.balance.findUnique({
                where: {
                    id: balance.id
                }
            })
            expect(res.status).toBe(200);
            expect(res.body.message).toBe("captured");
            expect(tnx?.onRampStatus).toBe($Enums.OnRampStatus.Success);
            expect(userBalance?.amount).toBe(transaction.amount);
        })
    })
    suite('v1/mock/powerpay/failure', async () => {
        it("should reject with invalid body", async () => {
            const res = await request(app)
                .post("/v1/mock/powerpay/failure")
                .send({})
                .set('Authorization', process.env.WEBHOOK_SECRET||"");

            expect(res.status).toBe(411);
            expect(res.body.message).toBe("Invalid Parameters");
        });

        it("should return 500 if transaction not found", async () => {
            const res = await request(app)
                .post("/v1/mock/powerpay/failure")
                .send({
                    token: "pay_tok_nonexistent",
                    user_identifier: user.id,
                    amount: 1000
                })
                .set('Authorization', process.env.WEBHOOK_SECRET||"");;

            expect(res.status).toBe(500);
            expect(res.body.message).toBe("Failed to record the failed payment");
        });

        it("should successfully mark transaction as failed", async () => {
            const failureTransaction = await prisma.onRampTransaction.create({
                data: {
                    token: "pay_tok_failure_test",
                    userId: user.id,
                    Statement: "Test Failed Transaction",
                    amount: 5000,
                    provider: "POWERPAY_MOCKBANK",
                    transactionType: "Credit",
                    onRampStatus: "Processing"
                }
            });

            const res = await request(app)
                .post("/v1/mock/powerpay/failure")
                .send({
                    token: failureTransaction.token,
                    user_identifier: user.id,
                    amount: failureTransaction.amount
                })
                .set('Authorization', process.env.WEBHOOK_SECRET||"");
                

            const updatedTnx = await prisma.onRampTransaction.findUnique({
                where: {
                    token: failureTransaction.token
                }
            });

            expect(res.status).toBe(200);
            expect(res.body.message).toBe("recorded");
            expect(updatedTnx?.onRampStatus).toBe($Enums.OnRampStatus.Failure);

            await prisma.onRampTransaction.delete({
                where: { id: failureTransaction.id }
            });
        });
    });
});