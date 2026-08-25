import React from 'react';
import { notFound } from 'next/navigation';
import { getLocationData, getAllLocationSlugs, getAllLocations } from '@/lib/locations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Link from 'next/link';
import { ArrowLeft, MapPin, ShieldCheck, CheckCircle2, List, ChevronRight, Star, Quote, Calendar, Map as MapIcon } from 'lucide-react';
import ApplyButton from '@/components/ApplyButton';
import LocationLeadForm from '@/components/LocationLeadForm';
import FaqAccordion from '@/components/FaqAccordion';
import ImageCarousel from '@/components/ImageCarousel';

export async function generateStaticParams() {
  return getAllLocationSlugs();
}

function getExcerpt(content: string, length = 160) {
  // Very basic markdown stripping
  const stripped = content.replace(/[#*`_]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
  return stripped.length > length ? stripped.slice(0, length) + '...' : stripped;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const locationData = getLocationData(resolvedParams.slug);
  
  if (!locationData) {
    return {
      title: 'Location Not Found',
    };
  }

  const excerpt = getExcerpt(locationData.content);

  return {
    title: `${locationData.title} | UVCHM`,
    description: excerpt,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const locationData = getLocationData(resolvedParams.slug);

  if (!locationData) {
    notFound();
  }

  // Extract headings for TOC
  const headingMatches = locationData.content.match(/^#{2,3}\s+(.+)$/gm) || [];
  const toc = headingMatches.map((match) => {
    const level = match.startsWith('###') ? 3 : 2;
    let text = match.replace(/^#{2,3}\s+/, '').replace(/\*/g, ''); // strip bold/italic
    text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // strip markdown links
    // Simplified slug generation matching rehype-slug
    const slug = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return { level, text, slug };
  });

  // Get related locations (3 random/next locations excluding the current one)
  const allLocations = getAllLocations().filter(loc => loc.slug !== locationData.slug);
  // Deterministic shuffle based on slug length or just take the first 3 for simplicity
  const relatedLocations = allLocations.slice(0, 3);

  // Extract FAQs for Schema and Component
  const faqs: { question: string; answer: string }[] = [];
  const faqRegex = /#### Q:\s*([^\n]+)\n\*\*A:\*\*\s*([\s\S]+?)(?=\n#### Q:|$)/g;
  let match;
  while ((match = faqRegex.exec(locationData.content)) !== null) {
    faqs.push({ question: match[1].trim(), answer: match[2].trim() });
  }

  // Remove the FAQ section from the markdown content so we can render it via the React component instead
  const mainContent = locationData.content.replace(/## \*\*Frequently Asked Questions\*\*[\s\S]*/, '').trim();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollegeOrUniversity',
        name: 'UV College of Hotel Management',
        url: 'https://uvchm.com',
        logo: 'https://uvchm.com/logo.png', // Fallback URL
        sameAs: [
          'https://www.instagram.com/uv_chm?igsh=MW5rODhmNDQ3cm51ag%3D%3D&utm_source=qr',
          'https://wa.me/918463995959',
          'https://www.facebook.com/UVCHM/',
          'https://www.youtube.com/@uvchm',
          'https://www.linkedin.com/company/uv-college-of-hotel-managements/about/?viewAsMember=true'
        ]
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://uvchm.com' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://uvchm.com/location' },
          { '@type': 'ListItem', position: 3, name: locationData.title, item: `https://uvchm.com/location/${resolvedParams.slug}` }
        ]
      },
      ...(faqs.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      {/* Premium Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] opacity-90" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <Link href="/location" className="inline-flex items-center gap-2 text-pink-400 text-xs font-extrabold uppercase tracking-wider hover:text-pink-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Locations</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-pink-600 text-white text-xs font-black uppercase tracking-wider rounded-full flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              UVCHM LOCATION
            </span>
            <span className="px-3.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-500/30">
              100% Guaranteed Placements
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-4xl">
            {locationData.title}
          </h1>

          <div className="flex items-center gap-2 text-slate-300 text-xs font-medium">
            <Calendar className="w-4 h-4 text-pink-500" />
            <span>Published On: {new Date(locationData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <ApplyButton
              text="APPLY FOR ADMISSION NOW"
              className="px-8 py-3.5 bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#443C87] hover:opacity-90 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-[#E80088]/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            />
          </div>
        </div>
      </section>

      {/* Visual Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link href="/location" className="hover:text-pink-600 transition-colors">Locations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-pink-600 truncate">{locationData.title.split(':')[0]}</span>
          </nav>
        </div>
      </div>

      {/* Two Column Layout */}
      <section className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content (Left Column) */}
          <article className="lg:col-span-2 space-y-8">
            
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-4">
                  <List className="w-5 h-5 text-pink-600" />
                  Table of Contents
                </h2>
                <ul className="space-y-2">
                  {toc.map((item, index) => (
                    <li key={index} className={item.level === 3 ? 'ml-4' : ''}>
                      <a href={`#${item.slug}`} className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Featured Image Carousel */}
            <ImageCarousel />

            {/* Markdown Content */}
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-h2:text-3xl prose-h3:text-2xl prose-a:text-pink-600 hover:prose-a:text-pink-700 prose-img:rounded-2xl prose-img:shadow-lg prose-li:marker:text-pink-600 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200">
              <ReactMarkdown
                rehypePlugins={[rehypeSlug]}
                components={{
                  a: ({ node, href, children, ...props }) => {
                    if (!href) return <a {...props}>{children}</a>;
                    
                    let newHref = href;
                    // Internal URL re-mapping
                    if (href.startsWith('https://uvchm.com') || href.startsWith('http://uvchm.com')) {
                      const url = new URL(href);
                      newHref = url.pathname;
                      
                      // Map common old wordpress URLs to new local app router URLs
                      if (newHref === '/diploma-course-in-hotel-management/' || newHref === '/diploma-in-hotel-management/') newHref = '/courses/diploma-hotel-mgmt';
                      else if (newHref === '/advance-diploma-course-in-hotel-management/' || newHref === '/advance-diploma-in-hotel-management/') newHref = '/courses/advance-diploma-hotel-mgmt';
                      else if (newHref === '/master-diploma-course-in-hotel-management/' || newHref === '/master-diploma-in-hotel-management/') newHref = '/courses/masters-diploma-hotel-mgmt';
                      else if (newHref === '/pg-diploma-course-in-hotel-management/' || newHref === '/pg-diploma-in-hotel-management/') newHref = '/courses/pg-diploma-hotel-mgmt';
                    }

                    if (newHref.startsWith('/')) {
                      return <Link href={newHref}>{children}</Link>;
                    }
                    return <a href={newHref} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                  }
                }}
              >
                {mainContent}
              </ReactMarkdown>
            </div>
            
            {/* Interactive FAQ Accordion */}
            {faqs.length > 0 && <FaqAccordion faqs={faqs} />}

            {/* Embedded Google Map */}
            <div className="mt-12 bg-white p-2 rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=UV+College+of+Hotel+Management,+Nizamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '1.5rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="UVCHM Campus Location Map"
              ></iframe>
            </div>
          </article>

          {/* Sticky Sidebar (Right Column) */}
          <aside className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-pink-500/30 shadow-xl space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">Launch Your Career</span>
                <h3 className="text-2xl font-black">Join UVCHM Today</h3>
              </div>

              <div className="space-y-3 py-4 border-t border-b border-slate-800 text-sm font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Govt. Recognized Certification</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">100% Job Placement Assistance</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">6-Month Paid 5-Star Hotel Internship</span>
                </div>
              </div>

              {/* Embedded Quick Lead Form */}
              <LocationLeadForm locationName={locationData.title.split(':')[0]} />

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Admission Counseling Fee</span>
              </div>
            </div>

            {/* Embedded Testimonial (Social Proof) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
              <Quote className="w-8 h-8 text-pink-200" />
              <p className="text-sm text-slate-600 font-medium italic leading-relaxed">
                "Coming from a small town, I never thought I'd be working at a luxury Taj property in just 18 months. The practical training at UVCHM completely transformed my career!"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                  <img src="https://cdn.uvchm.com/images/testimonials/student_1.jpg" alt="Student" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Priya Sharma</div>
                  <div className="text-[10px] text-pink-600 font-bold uppercase tracking-wider">Placed at Taj Hotels</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Explore Other Locations */}
      {relatedLocations.length > 0 && (
        <section className="bg-slate-100 py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-pink-600">Discover More</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Explore Other Locations</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLocations.map((loc) => (
                <Link key={loc.slug} href={`/location/${loc.slug}`} className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <MapIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 line-clamp-2">{loc.title.split(':')[0]}</h3>
                  <div className="flex items-center text-xs font-bold text-pink-600 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
