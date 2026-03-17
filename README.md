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

## Deployment (GitHub Pages)
This repo deploys using `.github/workflows/static.yml`.

### Recommended Pages setting
In **Settings → Pages** use one of these (both are supported by the workflow):
1. **Source: GitHub Actions** (primary)
2. **Deploy from a branch → gh-pages /(root)** (fallback)

### What the workflow does
1. Builds Next export (with fallback page if install/build fails)
2. Uploads artifact for official Pages deploy
3. Tries `actions/deploy-pages` (GitHub Actions source)
4. Also publishes the same static output to `gh-pages` branch (branch-source fallback)

## Deployment notes
- GitHub Pages supports static export only. Dynamic server features (auth callbacks, webhooks, server actions requiring runtime) should be deployed to Vercel or another Node-capable host.
- App Router API route handlers are not supported in static export, so this Pages build uses a static `/health` page.

## If still not active
- Open the latest workflow run and confirm `build` and `deploy_branch_source` are green.
- `deploy_actions_source` is best-effort and can fail if repo Pages settings are locked/misconfigured; `deploy_branch_source` still publishes `gh-pages`.
- If `deploy_actions_source` fails repeatedly, set Pages source to `gh-pages` branch and the site will still work.
- Ensure only `.github/workflows/static.yml` is used for Pages deploys.

## Architecture docs
See `docs/architecture.md` for system design, RBAC, onboarding, and MVP roadmap.
