const clients = [
  { name: 'Northstar Kitchen', tier: 'Agency Pro', portal: 'Live', projects: 3, balance: '$2,100 due soon' },
  { name: 'Aster Design Co', tier: 'Agency', portal: 'Live', projects: 1, balance: '$500 overdue' },
  { name: 'Studio Juniper', tier: 'White-label', portal: 'Live', projects: 5, balance: '$0 paid' },
];

export default function ClientsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Clients</p>
        <h1>Everything organized by client workspace.</h1>
        <p className="lead">A clean list for the agency team, with clear portal state and payment visibility.</p>
      </section>

      <section className="card">
        <table className="table">
          <thead><tr><th>Name</th><th>Tier</th><th>Portal</th><th>Projects</th><th>Balance</th></tr></thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.name}>
                <td>{client.name}</td>
                <td>{client.tier}</td>
                <td>{client.portal}</td>
                <td>{client.projects}</td>
                <td>{client.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
