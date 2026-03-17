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

## Deployment (GitHub Pages - reliable mode)
This repo deploys with `.github/workflows/static.yml` by force-pushing static output to `gh-pages`.

### Required repository settings
1. **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
2. **Settings → Actions → General → Workflow permissions**
   - Set to **Read and write permissions**
   - Enable **Allow GitHub Actions to create and approve pull requests** (safe optional default)

### Workflow behavior
1. Attempts Next.js static build
2. If build fails, creates fallback `out/index.html` + `out/404.html`
3. Force-pushes `out/` to `gh-pages` using `GITHUB_TOKEN`

This guarantees your site has a valid `index.html` and avoids GitHub default 404.

## If still not active
- Confirm workflow **Deploy static content (gh-pages)** is green.
- Confirm `gh-pages` branch was updated by the latest run.
- Confirm Pages source is `gh-pages` / root.
- Wait 1–2 minutes and hard refresh.

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
