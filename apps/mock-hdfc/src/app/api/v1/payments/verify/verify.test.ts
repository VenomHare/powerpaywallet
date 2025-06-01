import { describe, test, expect, beforeEach } from "vitest";
import { createMocks } from "node-mocks-http";
import { GET } from "./route";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { NextRequest } from "next/server";
import { MockPayment } from "@powerpaywallet/schemas/webhook";

describe('/api/v1/payments/verify', () => {
    beforeEach(() => {
        // Clear the mock storage before each test
        (mockPaymentStorage as any).getAll().length = 0;
    });

    test("422 on missing token", async () => {
        const { req } = createMocks({
            method: "GET",
            url: "http://localhost:3003/api/v1/payments/verify"
        });

        const nextReq = new NextRequest(new Request(req.url));
        const response = await GET(nextReq);
        expect(response.status).toBe(422);
        const data = await response.json();
        expect(data.message).toBe("Not found");
    });

    test("422 on invalid token", async () => {
        const { req } = createMocks({
            method: "GET",
            url: "http://localhost:3003/api/v1/payments/verify?token=invalid_token"
        });

        const nextReq = new NextRequest(new Request(req.url));
        const response = await GET(nextReq);
        expect(response.status).toBe(422);
        const data = await response.json();
        expect(data.message).toBe("Not found");
    });

    test("successful payment verification", async () => {
        // First create a payment
        const payment: MockPayment = {
            token: "test_token_123",
            user_identifier: 13,
            amount: 1000,
            status: "processing",
            redirect_uri: "https://example.com/callback"
        };
        mockPaymentStorage.add(payment);

        // Now verify it
        const { req } = createMocks({
            method: "GET",
            url: `http://localhost:3003/api/v1/payments/verify?token=${payment.token}`
        });

        const nextReq = new NextRequest(new Request(req.url));
        const response = await GET(nextReq);
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toEqual(payment);
    });
});
