import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Management Courses in Nizamabad | UVCHM',
  description: 'Explore UG, PG, and Diploma courses in Hotel Management, Culinary Arts, Mixology, and Housekeeping at UVCHM. Industry-ready curriculum with paid internships.',
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
