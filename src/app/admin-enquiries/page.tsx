import type { Metadata } from 'next';
import EnquiriesDashboard from './EnquiriesDashboard';

export const metadata: Metadata = {
  title: 'Enquiries Data | Internal Portal',
  description: 'Internal enquiries portal',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminEnquiriesPage() {
  return <EnquiriesDashboard />;
}
