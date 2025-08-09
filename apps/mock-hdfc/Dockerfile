# -------- Base image --------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# -------- Prune stage --------
FROM base AS prune
RUN pnpm install -g turbo
COPY . .
RUN turbo prune --scope=mock-hdfc --docker

# -------- Install deps for build --------
FROM base AS deps
# Copy pruned package.jsons
COPY --from=prune /app/out/json/ ./
# Copy root configs so turbo can run
COPY turbo.json pnpm-workspace.yaml  ./
RUN pnpm install --frozen-lockfile

# -------- Build stage --------
FROM base AS build
COPY --from=prune /app/out/full/ ./
COPY --from=deps /app/node_modules ./node_modules
# Generate Prisma Client
RUN pnpm --filter=@powerpaywallet/db generate
# Build only the target app
RUN pnpm turbo run build --filter=mock-hdfc

# -------- Production image --------
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
# Copy only prod dependencies
COPY --from=deps /app/node_modules ./node_modules
# Copy build output (adjust for Next.js or Express)
COPY --from=build /app/apps/mock-hdfc/.next ./.next
COPY --from=build /app/apps/mock-hdfc/package.json ./
EXPOSE 3003
CMD ["pnpm", "start"]
