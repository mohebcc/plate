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
- Static export output: `out/` (configured for GitHub Pages compatibility)

## GitHub Pages deployment fix (for 404)
If you saw GitHub Pages `404 File not found`, make sure:
1. GitHub Pages source is set to **GitHub Actions** in repository settings.
2. The workflow `.github/workflows/deploy-pages.yml` is present and successful (it uses `actions/configure-pages` to compute the correct base path).
3. Your default branch is `main` or `master` (or update workflow trigger accordingly).
4. For project pages (`username/repo`), app base path is auto-derived during Actions builds.

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.
- App Router API route handlers are not supported in static export, so this Pages build uses a static `/health` page instead of `/api/health`.
- The deploy workflow writes `out/.nojekyll` so `_next/` assets are served correctly on Pages.

### CI note about `npm ci`
If your pipeline fails with `npm ci` lockfile sync errors, use `npm install --no-fund --no-audit` in the Pages build job until a fully regenerated lockfile is committed from a network-enabled environment.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
