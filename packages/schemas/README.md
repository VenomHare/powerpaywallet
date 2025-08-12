## `@powerpaywallet/schemas`

[![Zod](https://img.shields.io/badge/Zod-3-3068B7)](https://zod.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Shared Zod schemas for client, webhook, and bank modules.

### Exports

- `@powerpaywallet/schemas` — root index
- `@powerpaywallet/schemas/webhook`
- `@powerpaywallet/schemas/client`

### Usage

```ts
import { MockPaymentSchema } from '@powerpaywallet/schemas/webhook';

const parsed = MockPaymentSchema.parse(payload);
```

### About me

Built by Sarthak ([`@venomhare`](https://github.com/venomhare)).

