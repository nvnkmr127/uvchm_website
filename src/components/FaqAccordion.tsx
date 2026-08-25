'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqs.length === 0) return null;

  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
          ?
        </div>
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-pink-200 shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-pink-200'}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <h4 className="font-bold text-left text-slate-900 pr-4">{faq.question}</h4>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-pink-100 text-pink-600 rotate-180' : 'bg-slate-200 text-slate-500'}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
