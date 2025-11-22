# AI Career Platform

A Next.js (app router) application that provides AI-assisted career tools and job/career platform features. The project integrates modern React, Tailwind CSS, Prisma for database access, Clerk for authentication, Google Generative AI, and several UI libraries and utilities.

This repository contains the code for the platform. It is structured to be deployed on Vercel or run locally for development.

---

## Highlights / Features

- Next.js (v15) + React 19 app-router based project
- Clerk authentication integration
- Google Generative AI SDK integration for generation / assistant features
- Prisma for database modeling and client generation
- Tailwind CSS for styling + animations
- Inngest for background jobs / eventing
- UI primitives from Radix, Lucide icons, and several helper libraries
- Export utilities (html2pdf.js), charts (recharts), markdown editor, and more

---

## Tech Stack

- Framework: Next.js 15 (React 19)
- Language: JavaScript
- Styling: Tailwind CSS
- Database ORM: Prisma (@prisma/client, prisma)
- Auth: Clerk (@clerk/nextjs)
- AI: @google/generative-ai
- Background jobs / orchestration: inngest
- Other libs: react-hook-form, zod, radix-ui, lucide-react, sonner, date-fns, recharts

Language composition in repository:
- JavaScript: 156,565 bytes
- CSS: 2,789 bytes

Key package.json scripts:
- dev: next dev
- build: prisma generate && next build
- start: next start
- lint: next lint

---

## Repository layout (top-level)
- app/ — Next.js app directory (routes, pages, server/client components)
- components/ — UI components used by the app
- data/ — seed or static data files
- prisma/ — Prisma schema and migration artifacts (DB models)
- public/ — static assets
- lib/ — shared helpers and utilities
- hooks/ — custom React hooks
- actions/ — background or API action handlers (if present)
- middleware.js — Next middleware (routing / auth / redirects)
- next.config.mjs, tailwind.config.mjs, postcss.config.mjs, eslint.config.mjs — framework/tooling config
- package.json / package-lock.json — dependencies and scripts

---

## Getting started (local development)

Prerequisites:
- Node.js (recommend latest LTS; Node 18+ recommended)
- npm (or pnpm/yarn) — instructions below use npm
- A running database (Postgres, MySQL or SQLite depending on your prisma schema)
- Clerk account and API keys (if using auth features)
- Google Generative AI credentials (if using AI features)
- Any other service keys referenced in .env

1. Clone the repository
   git clone https://github.com/tailormst/job--AI---Career---Platform.git
   cd job--AI---Career---Platform

2. Install dependencies
   npm install

3. Environment variables
   Create a `.env` file in the repository root with at least the following variables configured for local development:

   - DATABASE_URL="postgresql://user:pass@localhost:5432/dbname" (or SQLite file path)
   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (Clerk frontend key)
   - CLERK_SECRET_KEY (Clerk secret key)
   - GOOGLE_API_KEY or GOOGLE_APPLICATION_CREDENTIALS (depending on how you configure the Google generative SDK)
   - NEXT_PUBLIC_BASE_URL (e.g., http://localhost:3000)
   - Any other keys used by third-party integrations (inngest, analytics, etc.)

   Note: The exact env variable names used by the codebase may vary; search for process.env usages to ensure you set required values.

4. Prisma
   Generate the Prisma client and apply migrations as appropriate:
   - npm run build will run `prisma generate` before building, but for development you can run:
     npx prisma generate
   - If migrations are included and you want to apply them:
     npx prisma migrate dev --name init

5. Run the dev server
   npm run dev
   Open http://localhost:3000

6. Linting
   npm run lint

---

## Building for production

- Ensure all environment variables are set for production (DB, Clerk, Google credentials).
- Build:
  npm run build
- Start:
  npm start

For Vercel deployment:
- Set the environment variables in the Vercel project settings.
- Vercel will run the Next.js build; ensure Prisma client generation runs successfully in the build step. If necessary, configure a build step or pre-build step to run `npx prisma generate`.

---

## Notes & Recommendations

- The project uses Next.js middleware (middleware.js). Review middleware to confirm routing/auth behavior aligns with your environment (especially on Vercel vs custom servers).
- Google Generative AI integration requires proper credentials. The repository includes @google/generative-ai as a dependency — follow Google Cloud docs for configuring application credentials or API key.
- Clerk integration requires Clerk keys and appropriate configuration in the app (frontend + backend keys). Make sure you set the publishable key with NEXT_PUBLIC_ prefix and secret key as server env var.
- If you plan to use a managed database in production, update DATABASE_URL accordingly and ensure migrations are applied.
- Some packages (Next 15 / React 19) are cutting-edge; verify all transitive dependencies are compatible with your deployment target.

---

## Contributing

- Fork the repo and open a PR for changes.
- Follow existing code style and run linting before submitting.
- If you add features that require new env vars or services, update the README and add example .env files or a .env.example if desired.

---

## Troubleshooting

- Build errors related to Prisma: ensure `npx prisma generate` has been run and the Prisma schema matches your DATABASE_URL.
- Auth-related errors: verify Clerk keys and domain/redirect URLs are correctly configured in your Clerk dashboard.
- Google AI errors: verify credentials and IAM permissions for the configured service account / API key.

---

## Contact

Repo owner: tailormst
For questions or help, open an issue in the repository.

---
