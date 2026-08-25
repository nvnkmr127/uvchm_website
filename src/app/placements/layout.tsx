import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100% Guaranteed 5-Star Placements | UVCHM',
  description: 'UVCHM offers 100% guaranteed placements in top luxury hotels like Taj, Marriott, and Oberoi, plus international career opportunities via UV Consultancy.',
};

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
