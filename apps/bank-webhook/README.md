## Bank Webhook Service

[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)

Express-based webhook receiver for bank events. Listens on `WEBHOOK_PORT` (default 3002) and authenticates requests via `WEBHOOK_SECRET`.

### Scripts

```bash
pnpm dev       # compile + start with ts-node
pnpm build     # tsc compile to dist
pnpm start     # ts-node src/index.ts
pnpm test      # vitest
pnpm lint
```

### Environment

- `WEBHOOK_PORT` (default `3002`)
- `WEBHOOK_SECRET` (required; incoming `Authorization` must match)
- `DATABASE_URL` (required; Prisma connection for writes/reads)

### Run locally

```bash
export WEBHOOK_SECRET=supersecret
export WEBHOOK_PORT=3002
export DATABASE_URL="postgresql://postgres:sacredpassword@localhost:5432/powerpay"

pnpm dev
# http://localhost:3002
```

### Docker

The `Dockerfile` supports multi-stage builds.

```bash
docker build -t bank-webhook -f apps/bank-webhook/Dockerfile .
docker run --rm \
  -p 3002:3002 \
  -e WEBHOOK_SECRET=supersecret \
  -e WEBHOOK_PORT=3002 \
  -e DATABASE_URL=postgresql://... \
  bank-webhook
```

### Notes

- Requests must include `Authorization: <WEBHOOK_SECRET>` header.
- Tests use Vitest and Supertest.

### About me

Built by Sarthak ([`@venomhare`](https://github.com/venomhare)).

