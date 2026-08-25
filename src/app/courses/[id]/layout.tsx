import { PROGRAMS } from '@/data/collegeData';
import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const program = PROGRAMS.find((p) => p.id === id);

  if (!program) {
    return {
      title: 'Course Not Found | UVCHM',
    };
  }

  return {
    title: `${program.title} | UVCHM Nizamabad`,
    description: `Enroll in the ${program.title} at UVCHM. ${program.description} 100% placement guaranteed.`,
  };
}

export default async function CourseLayout({ children, params }: Props) {
  const { id } = await params;
  const program = PROGRAMS.find((p) => p.id === id);

  let jsonLd = null;
  if (program && program.faq) {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": program.faq.map((faqItem) => ({
        "@type": "Question",
        "name": faqItem.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqItem.answer
        }
      }))
    };
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
