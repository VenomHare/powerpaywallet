## Mock HDFC Bank

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-3-3068B7)](https://zod.dev/)

Next.js app that simulates a bank. It exposes webhook endpoints and mock transfer APIs to test the wallet workflow.

Runs on port `3003` by default.

### Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm test
```

### Environment

- `BANK_HOSTNAME` (default `http://localhost:3003`)
- `BANK_SECRET` (required; bearer token checked by middleware)
- `WEBHOOK_SECRET` (required; forwarded to webhook service as `Authorization`)
- `SUCCESS_WEBHOOK_URL` (required for success webhook)
- `FAILURE_WEBHOOK_URL` (required for failure webhook)
- `TRANSFER_SUCCESS_WEBHOOK_URL` (required by transfer API)
- `TRANSFER_FAILURE_WEBHOOK_URL` (required by transfer API)
- `ALLOWED_ORIGIN` (optional; CORS `Access-Control-Allow-Origin`)

### Run locally

```bash
export BANK_HOSTNAME=http://localhost:3003
export BANK_SECRET=bank-secret
export WEBHOOK_SECRET=webhook-secret
export SUCCESS_WEBHOOK_URL=http://localhost:3002/v1/webhook/success
export FAILURE_WEBHOOK_URL=http://localhost:3002/v1/webhook/failure
export TRANSFER_SUCCESS_WEBHOOK_URL=http://localhost:3002/v1/webhook/transfer/success
export TRANSFER_FAILURE_WEBHOOK_URL=http://localhost:3002/v1/webhook/transfer/failure

pnpm dev
# http://localhost:3003
```

### Docker

```bash
docker build -t mock-hdfc -f apps/mock-hdfc/Dockerfile .
docker run --rm -p 3003:3003 --env-file .env.mock mock-hdfc
```

Where `.env.mock` contains the variables above.

### About me

Built by Sarthak ([`@venomhare`](https://github.com/venomhare)).
