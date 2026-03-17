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

## Deployment (GitHub Pages via `gh-pages` branch)
This repo deploys the static export using `.github/workflows/deploy-pages.yml` by publishing `out/` to the `gh-pages` branch.

### Required repository setting
In **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **gh-pages**
- Folder: **/ (root)**

### What the workflow does
1. Installs dependencies with `npm install --no-fund --no-audit`
2. Runs `npm run build` (Next static export)
3. Verifies `out/index.html` and `out/404.html`
4. Writes `out/.nojekyll`
5. Publishes `out/` to `gh-pages`

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.
- App Router API route handlers are not supported in static export, so this Pages build uses a static `/health` page.

## If nothing happens
- Confirm Actions are enabled for the repo and workflow ran on push to `main`/`master`.
- Check that the `gh-pages` branch gets updated after workflow success.
- Confirm Pages source is set to `gh-pages` branch root.
- If the site is blank/old, hard refresh browser cache.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
