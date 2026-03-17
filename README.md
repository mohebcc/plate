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

## Deployment (GitHub Pages - stable mode)
This repo deploys with `.github/workflows/static.yml` by publishing `out/` directly to the `gh-pages` branch.

### Required repository setting
In **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **gh-pages**
- Folder: **/ (root)**

### Workflow behavior
1. Attempts Next.js build (`npm install` + `npm run build`)
2. If build fails, generates a fallback `out/index.html` and `out/404.html`
3. Publishes `out/` to `gh-pages`

This guarantees your domain does not stay on GitHub’s default 404 page.

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.
- App Router API route handlers are not supported in static export, so this Pages build uses a static `/health` page.

## If still not active
- Confirm `gh-pages` branch updates after workflow success.
- Confirm Pages source is branch mode (`gh-pages` / root).
- Hard refresh browser cache after deploy.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
