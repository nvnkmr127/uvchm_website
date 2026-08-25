import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About UVCHM | Government Recognized Hospitality Education',
  description: 'Learn about the history and mission of UVCHM. Backed by UV Consultancy, we bridge the gap between academic education and real-world luxury hotel operations.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
