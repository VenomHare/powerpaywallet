## `@powerpaywallet/db`

[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Prisma database package shared across apps.

### Commands

```bash
pnpm generate   # prisma generate
pnpm migrate    # prisma migrate dev --skip-generate
pnpm deploy     # prisma migrate deploy
pnpm studio     # prisma studio
```

### Environment

- `DATABASE_URL` (required)

### Schema

- Prisma schema: `packages/db/prisma/schema.prisma`

### Usage

```ts
import { prisma } from '@powerpaywallet/db';

const users = await prisma.user.findMany();
```

### About me

Built by Sarthak ([`@venomhare`](https://github.com/venomhare)).

