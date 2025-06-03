import { describe, test, expect, beforeEach } from "vitest";
import { createMocks } from "node-mocks-http";
import { POST } from "./route";
import { mockPaymentStorage } from "@/lib/MockPaymentStorage";
import { NextRequest } from "next/server";

describe('/api/v1/payments/token', () => {
    beforeEach(() => {
        // Clear the mock storage before each test by replacing the array
        (mockPaymentStorage as any).getAll().length = 0;
    });

    test("422 on invalid params", async () => {
        const { req } = createMocks({
            method: "POST",
            url: "http://localhost:3003/api/v1/payments/token",
            body: {} // Empty body should trigger validation error
        });

        const nextReq = new NextRequest(new Request(req.url, {
            method: 'POST',
            body: JSON.stringify(req.body)
        }));

        const response = await POST(nextReq);
        expect(response.status).toBe(422);
        const data = await response.json();
        expect(data.message).toBe("Invalid Parameters");
    });

    test("successful token generation", async () => {
        const validPayload = {
            user_identifier: 13,
            amount: 1000,
        };

        const { req } = createMocks({
            method: "POST",
            url: "http://localhost:3003/api/v1/payments/token",
            body: validPayload
        });

        const nextReq = new NextRequest(new Request(req.url, {
            method: 'POST',
            body: JSON.stringify(req.body)
        }));

        const response = await POST(nextReq);
        expect(response.status).toBe(200);
        const data = await response.json();
        
        // Verify response structure
        expect(data).toHaveProperty('token');
        expect(data).toHaveProperty('url');
        expect(data.token).toMatch(/^pay_tok_/);
        expect(data.url).toContain(data.token);

        // Verify payment was stored
        const storedPayments = mockPaymentStorage.getAll();
        expect(storedPayments).toHaveLength(1);
        expect(storedPayments[0]).toMatchObject({
            user_identifier: validPayload.user_identifier,
            amount: validPayload.amount,
            status: "processing"
        });
    });
});