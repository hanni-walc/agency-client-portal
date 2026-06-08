export type ProjectInputs = {
  filesDelivered: number;
  approvalsCompleted: number;
  updateCount: number;
  invoicePaid: boolean;
};

export type InvoiceInputs = {
  total: number;
  paid: number;
  dueInDays: number;
};

export type PortalSummaryInput = {
  client: string;
  projectName: string;
  filesDelivered: number;
  approvalsCompleted: number;
  updateCount: number;
  invoiceTotal: number;
  invoicePaid: number;
  invoiceDueInDays: number;
};

export type PortalSummary = {
  client: string;
  projectName: string;
  progressScore: number;
  progressLabel: 'at risk' | 'on track' | 'ready to wrap';
  nextAction: string;
  invoice: {
    status: 'paid' | 'overdue' | 'due soon' | 'pending';
    label: 'paid' | 'overdue' | 'due soon' | 'pending';
    total: number;
    paid: number;
    balance: number;
  };
};

const roundMoney = (value: number) => Math.round(value * 100) / 100;

export function projectCompletionScore(input: ProjectInputs): number {
  const raw =
    14 +
    input.filesDelivered * 5 +
    input.approvalsCompleted * 6 +
    input.updateCount * 1.5 +
    (input.invoicePaid ? 15 : 0);

  return Math.min(95, Math.round(raw));
}

export function calculateInvoiceBalance(input: Pick<InvoiceInputs, 'total' | 'paid'>): number {
  return roundMoney(Math.max(0, input.total - input.paid));
}

export function invoiceStatus(input: InvoiceInputs): PortalSummary['invoice']['status'] {
  if (calculateInvoiceBalance(input) === 0) return 'paid';
  if (input.dueInDays < 0) return 'overdue';
  if (input.dueInDays <= 7) return 'due soon';
  return 'pending';
}

export function nextActionForProject(input: { projectScore: number; invoiceStatus: PortalSummary['invoice']['status'] }): string {
  if (input.invoiceStatus === 'overdue') {
    return 'Send a friendly payment reminder with the invoice link and clear next step.';
  }
  if (input.projectScore < 35) {
    return 'Push a concise project update and show the next milestone visually.';
  }
  if (input.projectScore < 90) {
    return 'Send the next polished update and request approval on the latest milestone.';
  }
  return 'Ask for final approval, confirm the invoice, and close the loop with a polished wrap-up.';
}

export function clientPortalSummary(input: PortalSummaryInput): PortalSummary {
  const progressScore = projectCompletionScore({
    filesDelivered: input.filesDelivered,
    approvalsCompleted: input.approvalsCompleted,
    updateCount: input.updateCount,
    invoicePaid: input.invoicePaid >= input.invoiceTotal,
  });

  const invoice = {
    total: input.invoiceTotal,
    paid: input.invoicePaid,
    balance: calculateInvoiceBalance({ total: input.invoiceTotal, paid: input.invoicePaid }),
    status: invoiceStatus({ total: input.invoiceTotal, paid: input.invoicePaid, dueInDays: input.invoiceDueInDays }),
  };

  const progressLabel: PortalSummary['progressLabel'] =
    progressScore < 45 ? 'at risk' : progressScore < 85 ? 'on track' : 'ready to wrap';

  return {
    client: input.client,
    projectName: input.projectName,
    progressScore,
    progressLabel,
    nextAction: nextActionForProject({ projectScore: progressScore, invoiceStatus: invoice.status }),
    invoice: {
      status: invoice.status,
      label: invoice.status,
      total: invoice.total,
      paid: invoice.paid,
      balance: invoice.balance,
    },
  };
}

export function clientPortalDemo() {
  return clientPortalSummary({
    client: 'Northstar Kitchen',
    projectName: 'Website redesign',
    filesDelivered: 6,
    approvalsCompleted: 4,
    updateCount: 9,
    invoiceTotal: 4200,
    invoicePaid: 2100,
    invoiceDueInDays: 5,
  });
}
