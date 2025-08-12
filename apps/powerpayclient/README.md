## PowerPay Client

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

Next.js wallet client consuming the mock bank and webhook service. Runs on port `3001`.

### Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm check-types
```

This app depends on `@powerpaywallet/db` and triggers Prisma generate on install.

### Environment

- `CLIENT_JWT_SECRET` (required by NextAuth)
- `NEXTAUTH_URL` (e.g. `http://localhost:3001`)
- `BANK_SECRET` (shared secret used when calling bank APIs)
- `POWERPAY_MOCKBANK_TRANSFER` (optional endpoint for transfers)
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (Cloudinary)
- `NEXT_PUBLIC_CLOUDINARY_API_KEY` (Cloudinary)
- `CLOUDINARY_API_SECRET` (Cloudinary)
- `DATABASE_URL` (Prisma; provided via workspace `@powerpaywallet/db`)

### Run locally

```bash
export CLIENT_JWT_SECRET=dev-secret
export NEXTAUTH_URL=http://localhost:3001
export BANK_SECRET=bank-secret
export NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
export NEXT_PUBLIC_CLOUDINARY_API_KEY=...
export CLOUDINARY_API_SECRET=...
export DATABASE_URL="postgresql://postgres:sacredpassword@localhost:5432/powerpay"

pnpm dev
# http://localhost:3001
```

### Docker

```bash
docker build -t powerpayclient -f apps/powerpayclient/Dockerfile .
docker run --rm -p 3001:3001 --env-file .env.local powerpayclient
```

### About me

Built by Sarthak ([`@venomhare`](https://github.com/venomhare)).
