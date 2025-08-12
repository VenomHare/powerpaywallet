## PowerPay Wallet Monorepo

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.x-f69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.x-000?logo=turborepo&logoColor=white)](https://turbo.build/repo)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zod](https://img.shields.io/badge/Zod-3-3068B7)](https://zod.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vitest](https://img.shields.io/badge/Vitest-3-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

PowerPay Wallet is a monorepo managed with Turborepo and pnpm. It contains a Next.js client, a mock bank, an Express webhook service, and shared packages for database, schemas, UI, store, and tooling.

### Monorepo layout

- `apps/powerpayclient`: Next.js app — the main wallet client (port 3001)
- `apps/mock-hdfc`: Next.js app — mock bank simulator (port 3003)
- `apps/bank-webhook`: Express service — receives bank webhooks (port 3002)
- `packages/db`: Prisma database package
- `packages/schemas`: Shared Zod schemas
- `packages/store`: Shared Redux store
- `packages/ui`: Shared React UI components
- `packages/eslint-config`: Shared ESLint config
- `packages/typescript-config`: Shared TS configs

### Requirements

- Node.js >= 18
- pnpm (workspace managed)
- Docker (for Postgres and optional app builds)

### Quickstart

1) Install dependencies

```bash
pnpm install
```

2) Start Postgres (local via Docker)

```bash
docker compose up -d powerpay_postgres
```

3) Set environment variables (see Environment) and run development servers

```bash
pnpm dev
```

Apps start on:

- Client: http://localhost:3001
- Webhook: http://localhost:3002
- Mock bank: http://localhost:3003

### Common scripts

```bash
pnpm build        # build all apps/packages
pnpm dev          # run all dev servers (uncached, persistent)
pnpm lint         # lint across the repo
pnpm test         # run tests
pnpm check-types  # TypeScript checks
pnpm db:generate  # prisma generate in packages/db
pnpm db:migrate   # prisma migrate dev in packages/db
pnpm studio       # prisma studio
```

### Environment

Global environment variables used across apps (configure at the root or per app as needed):

- `DATABASE_URL`
- `CLIENT_JWT_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `MERCHANT_AUTH_SECRET`
- `BANK_HOSTNAME`
- `SUCCESS_WEBHOOK_URL`
- `FAILURE_WEBHOOK_URL`
- `BANK_SECRET`
- `WEBHOOK_SECRET`
- `WEBHOOK_PORT` (default 3002)
- `POWERPAY_MOCKBANK_TRANSFER_REQ`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXTAUTH_URL`

See each app/package README for exact usage.

### Database

This repo includes a Postgres service via `docker-compose.yaml`.

```bash
docker compose up -d powerpay_postgres

# Then set DATABASE_URL, e.g.
export DATABASE_URL="postgresql://postgres:sacredpassword@localhost:5432/powerpay"

# Generate Prisma client
pnpm db:generate

# Run dev migrations
pnpm db:migrate
```

### Docker

Each app has its own `Dockerfile`. Example builds:

```bash
# Client (port 3001)
docker build -t powerpayclient -f apps/powerpayclient/Dockerfile .
docker run --rm -p 3001:3001 --env-file .env.local powerpayclient

# Webhook (port 3002)
docker build -t bank-webhook -f apps/bank-webhook/Dockerfile .
docker run --rm -p 3002:3002 -e WEBHOOK_SECRET=... -e WEBHOOK_PORT=3002 -e DATABASE_URL=... bank-webhook

# Mock bank (port 3003)
docker build -t mock-hdfc -f apps/mock-hdfc/Dockerfile .
docker run --rm -p 3003:3003 --env-file .env.mock mock-hdfc
```

### Tech

- Next.js 15, React 19
- Express
- Prisma
- Zod, Redux Toolkit
- Tailwind CSS
- Turborepo, pnpm

### Contributing

1. Create a feature branch
2. Make changes with tests
3. Run `pnpm lint && pnpm test`
4. Open a pull request

### License

MIT

### About me

Maintained by Sarthak ([`@venomhare`](https://github.com/venomhare)). I enjoy building full‑stack TypeScript apps and scalable monorepos. If you find this project helpful, please consider starring it and sharing feedback.
