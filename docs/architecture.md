# Plately MVP Architecture Blueprint

## 1) System architecture overview
- **Frontend (Next.js App Router + Tailwind + shadcn/ui)**
  - Public marketing and directory pages are statically optimized where possible.
  - Restaurant pages and dashboards use server components with selective client components for interactivity.
- **API layer (Route Handlers + Server Actions)**
  - Route handlers for webhooks, checkout intent creation, health, and ingestion APIs.
  - Server actions for CRUD operations from authenticated dashboards.
- **Data layer (PostgreSQL + Prisma)**
  - Multi-tenant core with `Restaurant` as tenant anchor.
  - All restaurant-owned entities include `restaurantId` and policy checks.
- **Auth + RBAC (NextAuth)**
  - Email/password or OAuth providers with role claims (`ADMIN`, `RESTAURANT_OWNER`, `CUSTOMER`).
- **Billing (Stripe)**
  - Setup fee + recurring subscriptions per selected plan.
  - Webhook-driven subscription state sync.
- **Storage + media**
  - S3-compatible storage / UploadThing with DB metadata in `MediaAsset`.
- **Notifications**
  - Transactional emails via Resend for order lifecycle + onboarding events.

## 2) Folder structure
- `app/` – app router routes and layouts
- `components/` – reusable UI modules by domain
- `lib/` – shared types, data access, utilities, validation
- `prisma/` – schema and seed scripts
- `docs/` – architecture and implementation planning docs

## 3) Route map (MVP)
- `/` landing page
- `/directory` local discovery directory
- `/restaurant/[slug]` public restaurant site + ordering entry
- `/city/[slug]` city SEO listing page
- `/cuisine/[slug]` cuisine SEO listing page
- `/dashboard/restaurant` restaurant owner hub
- `/dashboard/admin` internal admin hub
- `/api/health` service health endpoint

## 4) Component map (initial batch)
- `components/landing/hero.tsx` hero section and core messaging
- `components/landing/pricing.tsx` pricing cards for Starter/Growth/Premium
- `components/directory/restaurant-card.tsx` reusable restaurant listing card

## 5) Database seed strategy
- Seed static subscription plans first (idempotent upsert).
- Seed operator admin account.
- Extend seed with city, cuisine, and 10 manually onboarded pilot restaurants.
- Future: split into deterministic fixtures (`plans`, `taxonomy`, `demoRestaurants`).

## 6) Authentication + RBAC plan
- Use NextAuth with Prisma adapter and JWT session strategy.
- Add role + tenant claims to session callback.
- Middleware route protection:
  - `/dashboard/admin/**` => `ADMIN`
  - `/dashboard/restaurant/**` => `RESTAURANT_OWNER` for owned tenants
- Server-side authorization helper: `assertTenantAccess(userId, restaurantId)`.

## 7) Stripe billing flow
1. Admin or owner selects plan.
2. Create Stripe customer (if absent).
3. Collect setup fee via PaymentIntent.
4. Create Stripe subscription for monthly fee.
5. Persist `Subscription` record and IDs.
6. Stripe webhooks update status (`ACTIVE`, `PAST_DUE`, `CANCELED`).
7. Expose invoice history in dashboard from Stripe API + DB cache.

## 8) Restaurant onboarding flow
1. Admin creates restaurant with business profile, slug, and subdomain.
2. Plan is assigned and setup payment is collected.
3. Menu is imported manually or via dashboard forms.
4. Owner invite email issued with secure activation link.
5. Optional custom domain setup starts (`DomainMapping` status lifecycle).
6. Restaurant becomes visible in directory and city/cuisine pages.

## 9) MVP implementation plan
### Phase 1
- Landing page, directory, restaurant pages
- Basic cart and checkout with Stripe PaymentIntents
- Restaurant dashboard (profile/menu/orders)
- Admin dashboard (onboarding/plans/featured)

### Phase 2
- Reviews and moderation queue
- Analytics dashboards and conversion metrics
- Domain mapping self-serve UI
- SEO city/cuisine content enrichment

### Phase 3
- Delivery routing support
- POS integrations
- Marketing automation + promotions
- AI-assisted menu optimization and SEO generation
