import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact UVCHM | Admissions Open in Nizamabad',
  description: 'Contact UVCHM for admissions. Address: 2nd floor, Never Give Up Building, 1, Gangastan, Nizamabad, Telangana 503003. Call us at +91 84639 95959.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
