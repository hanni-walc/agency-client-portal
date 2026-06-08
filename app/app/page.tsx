import Link from 'next/link';
import { clientPortalDemo } from '@/lib/portal';
import { withBasePath } from "@/lib/site-path";

const demo = clientPortalDemo();

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Client portal dashboard</p>
        <h1>{demo.client}</h1>
        <p className="lead">
          Keep projects visible, approvals moving, and invoices easy to understand. This is the command center for the agency team.
        </p>
      </section>

      <section className="stats">
        <div className="stat"><strong>{demo.progressScore}</strong><span className="muted">Progress score</span></div>
        <div className="stat"><strong>{demo.progressLabel}</strong><span className="muted">Project health</span></div>
        <div className="stat"><strong>{demo.invoice.status}</strong><span className="muted">Invoice status</span></div>
        <div className="stat"><strong>${demo.invoice.balance.toFixed(2)}</strong><span className="muted">Remaining balance</span></div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Project</p>
          <h2>{demo.projectName}</h2>
          <p className="muted">A simple summary that shows progress without overwhelming the client.</p>
          <ul className="list">
            <li>Files delivered and approved</li>
            <li>Clear next action for the agency team</li>
            <li>Polished progress language for the client</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Next action</p>
          <h2>What to do now</h2>
          <p className="muted">{demo.nextAction}</p>
          <div className="row">
            <Link className="button" href={withBasePath('/app/projects/website-redesign')}>Open project</Link>
            <Link className="ghost" href={withBasePath('/app/invoices')}>View invoices</Link>
          </div>
        </article>
      </section>

      <section className="grid cols-3" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Approved files</p>
          <h3>Milestones</h3>
          <ul className="list">
            <li>Homepage wireframe</li>
            <li>Design mockups</li>
            <li>Copy draft</li>
            <li>Responsive QA</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Client portal</p>
          <h3>What they see</h3>
          <ul className="list">
            <li>Project updates</li>
            <li>Approval requests</li>
            <li>File previews</li>
            <li>Invoices and payment links</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Team controls</p>
          <h3>Agency tools</h3>
          <ul className="list">
            <li>Invite clients</li>
            <li>Post updates</li>
            <li>Request approvals</li>
            <li>Send reminders</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
