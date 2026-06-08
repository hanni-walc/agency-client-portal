export default function LoginPage() {
  return (
    <main className="shell">
      <section className="frame hero" style={{ maxWidth: 760 }}>
        <p className="eyebrow">Sign in</p>
        <h1>Welcome back.</h1>
        <p className="lead">A calm login screen that fits the rest of the product and works on any device.</p>
        <div className="grid cols-2" style={{ marginTop: 18 }}>
          <article className="card"><h3>Email</h3><p className="muted">you@agency.com</p></article>
          <article className="card"><h3>Password</h3><p className="muted">••••••••</p></article>
        </div>
      </section>
    </main>
  );
}
