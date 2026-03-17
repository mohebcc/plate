# Plately MVP

Plately is a restaurant growth platform combining local discovery, direct online ordering, and managed restaurant websites.

## Tech stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- NextAuth (planned integration)
- Stripe (planned integration)

## Getting started
1. Install dependencies: `npm install`
2. Create `.env` from `.env.example`
3. Run Prisma generate: `npm run prisma:generate`
4. Start app: `npm run dev`

## Build / run
- Local production build: `npm run build && npm run start`
- Static export output: `out/` (configured for static hosting)

## Deployment (GitHub Pages via Actions)
This repo deploys using `.github/workflows/static.yml` with the official Pages artifact flow.

### Required repository setting
In **Settings → Pages**:
- Source: **GitHub Actions**

### What the workflow does
1. Configures Pages and resolves base path
2. Installs dependencies with `npm install --no-fund --no-audit`
3. Runs `npm run build` (Next static export)
4. Verifies `out/index.html` and `out/404.html`
5. Writes `out/.nojekyll`
6. Uploads `out/` artifact and deploys with `actions/deploy-pages`

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.
- App Router API route handlers are not supported in static export, so this Pages build uses a static `/health` page.

## If still not active
- In Actions, keep only this workflow active: **Deploy static content to Pages (static.yml)**.
- Open the latest failed run and check which step failed (Install / Build / Upload / Deploy).
- Ensure repository Pages source is **GitHub Actions** (not branch mode).
- Re-run the workflow manually with **Run workflow** after changing Pages settings.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
