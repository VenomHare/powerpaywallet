import request from 'supertest'
import { describe, expect, it, suite } from 'vitest'
import app from '.'


describe('v1 Router', () => {
    suite('middleware', async () => {
        it("should unauthorize if no token passed", async ()=>{
            const res = await request(app).post("/v1/mock/powerpay/success")
                .send({});

            expect(res.status).toBe(403);
            expect(res.body.message).toBe("Unauthorized");
        });
        it("should unauthorize if incorrect token passed", async ()=>{
            const res = await request(app).post("/v1/mock/powerpay/success")
                .send({})
                .set("Authorization","12321432132asdjn");

            expect(res.status).toBe(403);
            expect(res.body.message).toBe("Unauthorized");
        });
        it("should authorize if correct token passed", async ()=>{
            const res = await request(app).post("/v1/mock/powerpay/success")
                .send({})
                .set("Authorization", process.env.WEBHOOK_SECRET||"");
            
            expect(res.status).not.toBe(403);
            expect(res.body.message).not.toBe("Unauthorized");
        });
    });
});