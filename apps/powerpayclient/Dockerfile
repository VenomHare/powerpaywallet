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
RUN turbo prune --scope=powerpayclient --scope=@powerpaywallet/db --docker

# -------- Install deps for build --------
FROM base AS deps
COPY --from=prune /app/out/json/ ./
COPY turbo.json pnpm-workspace.yaml ./
# Install ALL dependencies (including dev) for build tools like Prisma
RUN pnpm install --frozen-lockfile

# -------- Build stage --------
FROM base AS build
COPY --from=prune /app/out/full/ ./
COPY --from=deps /app/node_modules ./node_modules
# Generate Prisma client
RUN pnpm --filter=@powerpaywallet/db generate
# Build app
RUN pnpm turbo run build --filter=powerpayclient

# -------- Production image --------
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
# Install only prod deps in final image
COPY --from=deps /app/node_modules ./node_modules
# Copy Next.js build output & assets
COPY --from=build /app/apps/powerpayclient/.next ./.next
COPY --from=build /app/apps/powerpayclient/public ./public
COPY --from=build /app/apps/powerpayclient/package.json ./package.json
COPY --from=build /app/apps/powerpayclient/next.config.js ./next.config.js
EXPOSE 3001
CMD ["pnpm", "start"]
