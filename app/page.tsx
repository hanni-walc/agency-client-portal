import Link from 'next/link';
import { withBasePath } from "@/lib/site-path";

const featureRows = [
  ['Branded client portals', 'Give every client a clean, premium workspace'],
  ['Approval tracking', 'Move deliverables from draft to approved fast'],
  ['Invoice visibility', 'Keep payment status obvious at all times'],
  ['Mobile friendly', 'Use it from a phone on site or at the office'],
];

const clients = [
  { name: 'Northstar Kitchen', status: 'Active', project: 'Website redesign', health: 'on track' },
  { name: 'Aster Design Co', status: 'Waiting on approval', project: 'Portal launch', health: 'at risk' },
  { name: 'Studio Juniper', status: 'Paid', project: 'Brand refresh', health: 'ready to wrap' },
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Agency Client Portal</p>
        <h1>Look premium, stay organized, get paid faster.</h1>
        <p className="lead">
          A client-facing portal for freelancers and small agencies. Centralize approvals, project updates, files, and invoices in one polished workspace.
        </p>
        <div className="row">
          <Link className="button" href={withBasePath('/app')}>Open dashboard</Link>
          <a className="ghost" href="#features">See features</a>
        </div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Why this sells</p>
          <h2>Clients want clarity, not another inbox.</h2>
          <p className="muted">
            The product makes the agency look more professional while reducing back-and-forth and helping projects move forward without chaos.
          </p>
          <ul className="list">
            <li>Branded per-client workspaces</li>
            <li>Comment threads and approval history</li>
            <li>Invoice and payment visibility</li>
            <li>Easy handoff between design, dev, and account management</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Monetization</p>
          <h2>Simple recurring subscription.</h2>
          <p className="muted">
            Charge by active client count or team size, with custom domain and white-label options as higher tiers.
          </p>
          <div className="row">
            <span className="pill">Per client pricing</span>
            <span className="pill">White-label add-on</span>
            <span className="pill">Custom domains</span>
          </div>
        </article>
      </section>

      <section id="features" className="grid cols-2" style={{ marginTop: 16 }}>
        {featureRows.map(([title, body]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p className="muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="grid cols-3" style={{ marginTop: 16 }}>
        {clients.map((client) => (
          <article className="card" key={client.name}>
            <p className="kicker">Client</p>
            <h3>{client.name}</h3>
            <p className="muted"><strong>Project:</strong> {client.project}</p>
            <p className="muted"><strong>Status:</strong> {client.status}</p>
            <p className="muted"><strong>Portal health:</strong> {client.health}</p>
          </article>
        ))}
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <p className="kicker">Built for any device</p>
        <h2>Phone, tablet, or desktop — the portal stays usable.</h2>
        <p className="footer-note">
          The dashboard, client pages, and public portal are all responsive. If you want to show a client something quickly, it works from a browser on any modern device.
        </p>
      </section>
    </main>
  );
}
