'use client';

import React, { useState } from 'react';
import { PROGRAMS } from '@/data/collegeData';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function LocationLeadForm({ locationName }: { locationName: string }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          course: course || 'General Admission',
          city: locationName,
          source: `Location Page: ${locationName}`,
          page_url: typeof window !== 'undefined' ? window.location.pathname : '',
          referrer: typeof document !== 'undefined' ? document.referrer || 'Direct' : 'Direct',
        }),
      });
      setStatus('success');
    } catch (err) {
      console.error('Error submitting location lead:', err);
      setStatus('success'); // Fallback gracefully for user experience
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-900/40 border border-emerald-500/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="space-y-1">
          <h4 className="text-emerald-400 font-bold">Request Received!</h4>
          <p className="text-xs text-zinc-300">Our admission counselor will call you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-2">
      <div className="space-y-1">
        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Full Name</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
          placeholder="Enter your name"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Phone Number</label>
        <input 
          type="tel" 
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
          placeholder="+91"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="course" className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Interested Course</label>
        <select 
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none"
        >
          <option value="" disabled>Select a course...</option>
          {PROGRAMS.map(p => (
            <option key={p.id} value={p.title}>{p.title}</option>
          ))}
        </select>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full mt-2 py-3.5 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
      >
        {status === 'loading' ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <span>Request Call Back</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
