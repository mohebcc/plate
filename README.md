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
2. The workflow `.github/workflows/deploy-pages.yml` is present and successful.
3. Your default branch is `main` (or update workflow trigger accordingly).
4. For project pages (`username/repo`), app base path is auto-derived from repo name during Actions builds.

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
