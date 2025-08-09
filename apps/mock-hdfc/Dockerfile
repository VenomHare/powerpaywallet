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
RUN turbo prune --scope=mock-hdfc --docker

# -------- Dependencies stage --------
FROM base AS deps
COPY --from=prune /app/out/json/ ./
COPY turbo.json pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# -------- Build stage --------
FROM base AS build
COPY --from=prune /app/out/full/ ./
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm install --filter=mock-hdfc...
RUN pnpm turbo run build --filter=mock-hdfc

# -------- Production stage --------
FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/apps/mock-hdfc/.next ./.next
COPY --from=build /app/apps/mock-hdfc/public ./public
COPY --from=build /app/apps/mock-hdfc/package.json ./package.json
COPY --from=build /app/apps/mock-hdfc/next.config.js ./next.config.js
EXPOSE 3003
CMD ["pnpm", "start"]