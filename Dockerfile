FROM node:20-alpine AS base

RUN npm install -g pnpm

WORKDIR /powerpay

COPY pnpm-workspace.yaml .
COPY pnpm-lock.yaml .
COPY package.json .

COPY apps/*/package.json ./apps/
COPY packages/*/package.json ./packages/

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3001
EXPOSE 3002
EXPOSE 3003

CMD ["pnpm", "start"]
