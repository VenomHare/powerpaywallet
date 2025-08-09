# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm & turbo globally
RUN corepack enable && npm install -g turbo

# Copy repo files
COPY . .

# Prune for this app only (reduces build context)
RUN turbo prune --scope=powerpayclient --docker

# Install dependencies (using workspace lockfile)
WORKDIR /app/out
RUN corepack enable && pnpm install --frozen-lockfile

# Build the app
RUN pnpm --filter=@powerpaywallet/db generate

RUN pnpm build --filter=powerpayclient...

# Stage 2: Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/out .

# Start app
CMD ["pnpm", "start", "--filter=powerpayclient..."]
