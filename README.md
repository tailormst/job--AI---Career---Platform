# AI Career Platform

A comprehensive platform for AI-assisted career tools and job/career features, built with **Next.js 15 (React 19)**. This project integrates modern web technologies, robust authentication, generative AI, and scalable background job orchestration—deployable on [Vercel](https://vercel.com/) or locally.

---

## 🌟 Highlights & Features

- **Next.js v15 & React 19**: Modern app-router architecture for server/client components.
- **Clerk Authentication**: Secure, flexible user management.
- **Google Generative AI SDK (gemini-2.5-flash)**: Advanced assistant features and content generation.
- **Prisma ORM**: Typesafe database modeling & migrations.
- **Tailwind CSS**: Utility-first CSS & UI animations.
- **Inngest**: Robust background jobs and event orchestration.
- **Rich UI Primitives**: Radix UI, Lucide Icons, markdown editor, charts (recharts), PDF export, and more.
- **Helper Libraries**: Seamless form integration, validation, date utilities.
- **Export & Visualization**: Generate PDFs, rich charting, markdown editing.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Database ORM**: Prisma (`@prisma/client`, `prisma`)
- **Authentication**: Clerk (`@clerk/nextjs`)
- **AI**: `@google/generative-ai` (using `gemini-2.5-flash` model)
- **Background Jobs**: `inngest`
- **UI/State/Helpers**: `react-hook-form`, `zod`, `radix-ui`, `lucide-react`, `sonner`, `date-fns`, `recharts`

**Language composition:**
- JavaScript: `156,565 bytes`
- CSS: `2,789 bytes`

---

## 📁 Repository Layout

```text
app/              - Next.js app-router directory (routes, pages, server/client components)
components/       - Reusable UI components
data/             - Seed/static data files
prisma/           - Prisma schema and migrations
public/           - Static assets (images, etc.)
lib/              - Shared helpers/utilities
hooks/            - Custom React hooks
actions/          - API/background action handlers (including all Gemini calls)
middleware.js     - Next.js middleware (routing/auth/redirects)
next.config.mjs, tailwind.config.mjs, postcss.config.mjs, eslint.config.mjs
                  - Framework/tooling config files
package.json, package-lock.json
                  - Dependency and script definitions
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) — Latest LTS recommended (Node 18+)
- npm (or [pnpm](https://pnpm.io) / [yarn](https://yarnpkg.com))
- A running database ([PostgreSQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), or [SQLite](https://www.sqlite.org/) per your schema)
- [Clerk](https://clerk.com) account & API keys (if using auth features)
- [Google Generative AI](https://cloud.google.com/generative-ai) credentials
- Any other service keys referenced in `.env`

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/tailormst/job--AI---Career---Platform.git
   cd job--AI---Career---Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` in the root with at least:
   ```env
   DATABASE_URL="postgresql://user:pass@localhost:5432/dbname"   # Or SQLite file path
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   GEMINI_API_KEY=your_google_generative_ai_key   # Key for the @google/generative-ai SDK
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   # Any other keys as required by integrations (inngest, analytics, etc.)
   ```
   > **Note:** The exact variable names depend on codebase usage. Search `process.env` for all required keys.

4. **Set up Prisma**
   ```bash
   npx prisma generate
   # Apply migrations to your local development database (if necessary)
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev       # Starts at http://localhost:3000
   ```

6. **Lint**
   ```bash
   npm run lint
   ```

### Key `package.json` Scripts

- `dev`    : Start dev server (`next dev`)
- `build`  : Generate Prisma client & build Next.js (`prisma generate && next build`)
- `start`  : Start production server (`next start`)
- `lint`   : Run ESLint (`next lint`)

---

## 🏢 Building & Deploying

### Production Build

- Ensure all environment variables are set for production (DB, Clerk, Google credentials, etc.)

**Build:**
```bash
npm run build
```

**Start:**
```bash
npm start
```

### Deploying on Vercel

- **Prisma Setup:**  
  Ensure your production `DATABASE_URL` is set in your Vercel Environment Variables. Apply your database schema using:
  ```bash
  npx prisma migrate deploy
  ```
  Run this locally against your production database before deployment.

- **Environment Variables:**  
  Set all required env vars (`DATABASE_URL`, `CLERK_SECRET_KEY`, `GEMINI_API_KEY`, etc.) in Vercel Project Settings.

- **Deploy:**  
  Vercel will automatically run the Next.js build (`next build`).

- **Final Steps:**  
  Review `middleware.js` to confirm routing/auth requirements and update your Clerk dashboard with the live domain URL.

---

## ⚠️ Notes & Recommendations

- **Google Generative AI:**  
  Ensure `GEMINI_API_KEY` is set. The platform uses `gemini-2.5-flash` for all content generation for stability.

- **SSR Compatibility:**  
  Libraries relying on the browser's `window` object (e.g., `jspdf` or `html2pdf.js` for PDF generation) **must** be dynamically imported in Next.js using `next/dynamic` with `{ ssr: false }` to prevent `ReferenceError: window is not defined` during server-side rendering.

- **Clerk:**  
  Set the frontend key with the `NEXT_PUBLIC_` prefix, and the secret key as a server environment variable. Configure domain/redirect URLs in your Clerk dashboard.

- **Database:**  
  Verify migration application using `npx prisma migrate deploy`.

---

## 🩺 Troubleshooting

| Category         | Common Issue                                  | Solution                                         |
|------------------|-----------------------------------------------|--------------------------------------------------|
| **Vercel/SSR**   | `ReferenceError: window is not defined`       | Use `next/dynamic` with `{ ssr: false }` for client-side libraries. |
| **Generative AI**| 404 Model Not Found / API Errors              | Ensure `GEMINI_API_KEY` is set and model is `gemini-2.5-flash`. |
| **Prisma (DB)**  | Build error: client not generated or mismatch | Run `npx prisma generate`. Check `DATABASE_URL` and schema. |
| **Auth (Clerk)** | 401/redirect errors, failed login             | Verify keys, configure domain/routes in Clerk dashboard. |

---

## 👥 Contributing

- Fork this repo and create a PR for your changes.
- Follow existing coding style; run `npm run lint`.
- Document new features, especially if new services or env vars are required.
- Add/update example `.env` files for reference.

---

## 📄 License

This project is [MIT licensed](LICENSE).

---

> **Want to contribute, ask for help, or suggest a feature?**  
> Please open an issue—PRs are welcome!
