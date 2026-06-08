import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agency Client Portal',
  description: 'A polished client workspace for approvals, files, updates, and invoices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
