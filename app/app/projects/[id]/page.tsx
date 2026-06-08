export default function ProjectPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Project detail</p>
        <h1>Website redesign</h1>
        <p className="lead">A single project view with updates, approvals, files, and invoice context. Ready for a real backend when you wire one in.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Progress</p>
          <ul className="list">
            <li>Discovery complete</li>
            <li>Design approved</li>
            <li>Build in progress</li>
            <li>Launch prep</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Client note</p>
          <p className="muted">The next update should show what changed, what is blocked, and what approval is needed next.</p>
        </article>
      </section>
    </main>
  );
}
