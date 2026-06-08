import { describe, expect, it } from 'vitest';
import {
  calculateInvoiceBalance,
  clientPortalSummary,
  invoiceStatus,
  nextActionForProject,
  projectCompletionScore,
} from './portal';

describe('projectCompletionScore', () => {
  it('scores a project higher when it has more progress signals', () => {
    expect(
      projectCompletionScore({
        filesDelivered: 8,
        approvalsCompleted: 5,
        updateCount: 12,
        invoicePaid: true,
      }),
    ).toBe(95);
  });

  it('scores a project lower when it is still mostly pending', () => {
    expect(
      projectCompletionScore({
        filesDelivered: 1,
        approvalsCompleted: 0,
        updateCount: 2,
        invoicePaid: false,
      }),
    ).toBe(22);
  });
});

describe('invoice helpers', () => {
  it('returns overdue when balance remains after due date', () => {
    expect(invoiceStatus({ total: 2400, paid: 900, dueInDays: -4 })).toBe('overdue');
  });

  it('returns paid when balance is zero', () => {
    expect(invoiceStatus({ total: 1800, paid: 1800, dueInDays: -12 })).toBe('paid');
  });

  it('calculates remaining balance', () => {
    expect(calculateInvoiceBalance({ total: 3200, paid: 1250 })).toBe(1950);
  });
});

describe('clientPortalSummary', () => {
  it('builds a clean summary for a premium client workspace', () => {
    const summary = clientPortalSummary({
      client: 'Northstar Kitchen',
      projectName: 'Website redesign',
      filesDelivered: 6,
      approvalsCompleted: 4,
      updateCount: 9,
      invoiceTotal: 4200,
      invoicePaid: 2100,
      invoiceDueInDays: 5,
    });

    expect(summary.client).toBe('Northstar Kitchen');
    expect(summary.projectName).toBe('Website redesign');
    expect(summary.progressLabel).toBe('on track');
    expect(summary.nextAction).toBe('Send the next polished update and request approval on the latest milestone.');
    expect(summary.invoice.label).toBe('due soon');
    expect(summary.invoice.balance).toBe(2100);
  });

  it('switches the action to payment chase when the invoice is overdue', () => {
    const summary = clientPortalSummary({
      client: 'Aster Design Co',
      projectName: 'Portal launch',
      filesDelivered: 2,
      approvalsCompleted: 1,
      updateCount: 3,
      invoiceTotal: 1500,
      invoicePaid: 500,
      invoiceDueInDays: -7,
    });

    expect(summary.invoice.label).toBe('overdue');
    expect(summary.nextAction).toBe('Send a friendly payment reminder with the invoice link and clear next step.');
  });
});

describe('nextActionForProject', () => {
  it('pushes delivery when the project has low progress', () => {
    expect(
      nextActionForProject({
        projectScore: 18,
        invoiceStatus: 'pending',
      }),
    ).toBe('Push a concise project update and show the next milestone visually.');
  });

  it('pushes payment when the invoice is overdue', () => {
    expect(
      nextActionForProject({
        projectScore: 78,
        invoiceStatus: 'overdue',
      }),
    ).toBe('Send a friendly payment reminder with the invoice link and clear next step.');
  });
});
