# -------- Base image --------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# -------- Prune stage --------
FROM base AS prune
RUN pnpm add -g turbo
COPY . .
RUN turbo prune --scope=bank-webhook --docker

# -------- Dependencies stage --------
FROM base AS deps
COPY --from=prune /app/out/json/ ./
COPY turbo.json pnpm-workspace.yaml ./
COPY packages/db/prisma ./packages/db/prisma
RUN pnpm install --frozen-lockfile

# -------- Build stage --------
FROM base AS build
COPY --from=prune /app/out/full/ ./
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm install --filter=bank-webhook...
RUN pnpm turbo run build --filter=bank-webhook

# -------- Production stage --------
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/apps/bank-webhook/dist ./dist
COPY --from=build /app/apps/bank-webhook/package.json ./package.json
EXPOSE 3002
CMD ["pnpm", "list"]
CMD ["pnpm", "install"]
CMD ["pnpm", "start"]