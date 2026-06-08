export default function PublicClientPortalPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Client portal</p>
        <h1>Northstar Kitchen project workspace</h1>
        <p className="lead">This public-facing sample shows how the agency can present work professionally to a client.</p>
      </section>
      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Recent update</p>
          <p className="muted">We finished the homepage revisions and moved the contact flow into QA.</p>
        </article>
        <article className="card">
          <p className="kicker">Pending approval</p>
          <p className="muted">Please review the final hero section and approve the mobile menu treatment.</p>
        </article>
      </section>
    </main>
  );
}
