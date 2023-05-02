---
name: Vercel Postgres GraphQL Starter
slug: postgres-graphql
description: Simple Next.js template that uses Vercel Postgres as the database and StepZen for GraphQL.
framework: Next.js
useCase: Starter
css: Tailwind
database: Vercel Postgres + StepZen GraphQL
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fvercel-postgres-graphql&project-name=postgres-starter&repository-name=vercel-postgres-graphql&demo-title=Vercel%20Postgres%20GraphQL%20Starter&demo-description=Simple%20Next.js%20template%20that%20uses%20Vercel%20Postgres%20as%20the%20database.&demo-url=https%3A%2F%2Fpostgres-starter.vercel.app%2F&demo-image=https%3A%2F%2Fpostgres-starter.vercel.app%2Fopengraph-image.png&stores=%5B%7B"type"%3A"postgres"%7D%5D&integration-ids=oac_fS5U5f04cXnxV1N90Ws6SFXh&external-id=stepzen-dev%2Fvercel-postgres-graphql
demoUrl: https://postgres-starter.vercel.app/
relatedTemplates:
  - postgres-starter
---

# Vercel Postgres GraphQL Starter

Simple Next.js template that uses [Vercel Postgres](https://vercel.com/postgres) as the database, and [StepZen](https://stepzen.com/docs) for GraphQL.

## Demo

https://postgres-starter.vercel.app/

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fvercel-postgres-graphql&project-name=postgres-starter&repository-name=vercel-postgres-graphql&demo-title=Vercel%20Postgres%20GraphQL%20Starter&demo-description=Simple%20Next.js%20template%20that%20uses%20Vercel%20Postgres%20as%20the%20database.&demo-url=https%3A%2F%2Fpostgres-starter.vercel.app%2F&demo-image=https%3A%2F%2Fpostgres-starter.vercel.app%2Fopengraph-image.png&stores=%5B%7B"type"%3A"postgres"%7D%5D&integration-ids=oac_fS5U5f04cXnxV1N90Ws6SFXh&external-id=stepzen-dev%2Fvercel-postgres-graphql)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/storage/postgres-starter
```

Once that's done, copy the .env.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Then open .env.local and set the environment variables to match the ones in your Vercel Storage Dashboard. Your keys should be available under your database's `.env` tab.

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) ([Documentation](https://nextjs.org/docs/deployment)).