export const TITLE = "Agency Client Portal";
export const PROMISE = "A branded client workspace that keeps approvals, files, updates, and invoices in one place.";
export const BUYER = "freelancers, design/dev studios, small agencies";
export const PAIN = "Client work is scattered across email, drives, invoices, and chat.";
export const PRICING = "Tiered subscription by active clients and team members.";
export const WEDGE = "White-labeled client UX with approvals and status history that feels premium immediately.";
export const DEPLOY = "Vercel for web, Supabase/Neon for Postgres, S3/R2 for files, Stripe billing, Resend email.";
export const MVP = [
  "Branded portal per client",
  "Invite-only client access",
  "File upload and approval flow",
  "Project updates feed",
  "Invoice/payment links",
  "Mobile-responsive UI and PWA installability"
];
export const SCREENS = [
  "Landing page",
  "Auth",
  "Workspace dashboard",
  "Client project page",
  "File approvals",
  "Invoices",
  "Activity feed",
  "Settings"
];
export const ROUTES = [
  "/",
  "/login",
  "/app",
  "/app/clients",
  "/app/projects/[id]",
  "/app/invoices",
  "/c/[slug]"
];
export const LAUNCH = [
  "Ship the portal with one polished demo workspace",
  "Add a sample agency template",
  "Make onboarding reach a live workspace in <10 minutes"
];
export const V2 = [
  "Template library",
  "Custom domains",
  "Client messaging",
  "Automated reminders"
];
export const product = {
  title: TITLE,
  promise: PROMISE,
  buyer: BUYER,
  pain: PAIN,
  pricing: PRICING,
  wedge: WEDGE,
  deploy: DEPLOY,
  mvp: MVP,
  screens: SCREENS,
  routes: ROUTES,
  launch: LAUNCH,
  v2: V2,
  stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
};
