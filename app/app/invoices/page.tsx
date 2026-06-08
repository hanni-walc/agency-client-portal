const invoices = [
  { id: 'INV-1042', client: 'Northstar Kitchen', total: '$4,200', paid: '$2,100', status: 'due soon' },
  { id: 'INV-1041', client: 'Aster Design Co', total: '$1,500', paid: '$500', status: 'overdue' },
  { id: 'INV-1039', client: 'Studio Juniper', total: '$3,900', paid: '$3,900', status: 'paid' },
];

export default function InvoicesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Invoices</p>
        <h1>Money visibility without friction.</h1>
        <p className="lead">Clients can see what is due, what is paid, and what happens next — no awkward back-and-forth.
        </p>
      </section>

      <section className="card">
        <table className="table">
          <thead><tr><th>Invoice</th><th>Client</th><th>Total</th><th>Paid</th><th>Status</th></tr></thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.client}</td>
                <td>{invoice.total}</td>
                <td>{invoice.paid}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
