# Agency Client Portal

Repo: `agency-client-portal`

## One-line pitch
A branded client workspace that keeps approvals, files, updates, and invoices in one place.

## Buyer
freelancers, design/dev studios, small agencies

## Pain
Client work is scattered across email, drives, invoices, and chat.

## Monetization
Tiered subscription by active clients and team members.

## Differentiator
White-labeled client UX with approvals and status history that feels premium immediately.

## What ships in v1
- Branded portal per client
- Invite-only client access
- File upload and approval flow
- Project updates feed
- Invoice/payment links
- Mobile-responsive UI and PWA installability

## Screens
- Landing page
- Auth
- Workspace dashboard
- Client project page
- File approvals
- Invoices
- Activity feed
- Settings

## Routes
- `/`
- `/login`
- `/app`
- `/app/clients`
- `/app/projects/[id]`
- `/app/invoices`
- `/c/[slug]`

## Deployment
Vercel for web, Supabase/Neon for Postgres, S3/R2 for files, Stripe billing, Resend email.

## Launch checklist
- Ship the portal with one polished demo workspace
- Add a sample agency template
- Make onboarding reach a live workspace in <10 minutes

## v2
- Template library
- Custom domains
- Client messaging
- Automated reminders

## Local development
```bash
pnpm install
pnpm dev
```

## Environment variables
Copy `.env.example` and fill in the provider keys for auth, storage, email, and billing.

## Files that matter
- `app/page.tsx`
- `app/app/page.tsx`
- `app/api/health/route.ts`
- `lib/product.ts`
- `.github/workflows/ci.yml`
