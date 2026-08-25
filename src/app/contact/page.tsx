'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplyModal from '@/components/ApplyModal';
import { COLLEGE_INFO } from '@/data/collegeData';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Diploma in Hotel Management',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Contact Page' }),
      });
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', phone: '', email: '', course: 'Diploma in Hotel Management', message: '' });
      }, 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-600 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-32 pb-20 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#E80088]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#443C87]/30 to-[#0D0D0D] backdrop-blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#E80088]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Phone className="w-4 h-4 text-[#E80088]" />
            <span className="text-white">Admissions Desk & Campus Helpline</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Get in Touch with <span className="bg-gradient-to-r from-[#E80088] via-[#90268B] to-[#E80088] bg-clip-text text-transparent">UVCHM</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Have questions regarding admission eligibility, fee structures, scholarship support, or campus hostel facilities? Contact our counselor team today.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Cards Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-slate-900">Campus Contact Details</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Campus Address</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{COLLEGE_INFO.contact.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Admissions Helpline</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{COLLEGE_INFO.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Official Email</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{COLLEGE_INFO.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Working Hours</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">Monday – Saturday: 09:00 AM – 06:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overseas Inquiry Box */}
            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-pink-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-pink-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>UV Consultancy Foreign Placement Desk</span>
              </div>
              <h3 className="text-lg font-black">Looking for Overseas Hotel Jobs?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct foreign employment counseling is available on campus. Walk in or call our international recruitment coordinator.
              </p>
              <button
                onClick={() => setApplyModalOpen(true)}
                className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>APPLY FOR OVERSEAS PLACEMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-black text-pink-600 uppercase tracking-wider">Quick Inquiry Form</span>
                <h2 className="text-2xl font-black text-slate-900">Send an Admission Inquiry</h2>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-black">Inquiry Submitted Successfully!</h3>
                  <p className="text-xs text-emerald-700">Our admissions counselor will call you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 10-digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Interested Course</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-pink-600 focus:bg-white"
                    >
                      <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
                      <option value="Advance Diploma in Hotel Management">Advance Diploma in Hotel Management</option>
                      <option value="PG Diploma in Hotel Management">PG Diploma in Hotel Management</option>
                      <option value="Masters Diploma in Hotel Management">Masters Diploma in Hotel Management</option>
                      <option value="Bartending & Mixology">Bartending & Mixology</option>
                      <option value="Craft Course in Food Production">Craft Course in Food Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Query</label>
                    <textarea
                      rows={4}
                      placeholder="Ask about fees, eligibility, hostel facilities, or campus visit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-600 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-pink-600 hover:bg-pink-700 disabled:opacity-70 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <span>{isLoading ? 'SENDING...' : 'SEND INQUIRY NOW'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps Interactive Campus Location */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-black text-[#E80088] uppercase tracking-wider">Interactive Campus Map</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Find Us on Google Maps</h2>
          </div>
          <div className="text-xs font-bold text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs">
            📍 2nd floor, Never Give Up Building, 1, Gangastan, Nizamabad, Telangana 503003
          </div>
        </div>

        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.2454088011564!2d78.1210897!3d18.697827999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcdc5cf6f4ef12b%3A0xf45c0a77ad876208!2sUV%20College%20of%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1786014544053!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="UVCHM Google Maps Location"
          />
        </div>
      </section>

      <Footer />
      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </main>
  );
}
