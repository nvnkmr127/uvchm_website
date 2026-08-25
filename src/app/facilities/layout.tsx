import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our 5-Star Facilities | UVCHM Campus Nizamabad',
  description: 'Tour UVCHM\'s 5-star standard campus infrastructure. Featuring 2 training kitchens, Front Office lab, Mock Bar, and luxury housekeeping suites.',
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
