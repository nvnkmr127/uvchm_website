import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Faculty | Learn from Global Hospitality Leaders at UVCHM',
  description: 'Meet the UVCHM faculty. Our instructors have 20+ years of international 5-star experience across Taj, Marriott, Burj Al Arab, and global cruise liners.',
};

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
