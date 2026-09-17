'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Search, Download, RefreshCw, Phone, Mail, MapPin, GraduationCap, Calendar, ShieldCheck, AlertCircle } from 'lucide-react';

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email?: string;
  course?: string;
  city?: string;
  message?: string;
  source?: string;
  created_at?: string;
}

export default function EnquiriesDashboard() {
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [messageNotice, setMessageNotice] = useState('');

  useEffect(() => {
    const savedKey = sessionStorage.getItem('uvchm_admin_key');
    if (savedKey) {
      setPasscode(savedKey);
      fetchEnquiries(savedKey);
    }
  }, []);

  const fetchEnquiries = async (keyToUse: string) => {
    setLoading(true);
    setError('');
    setMessageNotice('');

    try {
      const res = await fetch(`/api/enquiries?key=${encodeURIComponent(keyToUse)}`);
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || 'Authentication failed. Please check passcode.');
        setAuthenticated(false);
        sessionStorage.removeItem('uvchm_admin_key');
      } else {
        setAuthenticated(true);
        setInquiries(data.inquiries || []);
        sessionStorage.setItem('uvchm_admin_key', keyToUse);
        if (data.message) {
          setMessageNotice(data.message);
        }
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Network error occurred while fetching enquiries.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) return;
    fetchEnquiries(passcode.trim());
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPasscode('');
    sessionStorage.removeItem('uvchm_admin_key');
  };

  const exportToCSV = () => {
    if (inquiries.length === 0) return;

    const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Course', 'City/Village', 'Source', 'Message'];
    const rows = filteredInquiries.map((iq) => [
      iq.id,
      iq.created_at ? new Date(iq.created_at).toLocaleString() : 'N/A',
      `"${(iq.name || '').replace(/"/g, '""')}"`,
      `"${(iq.phone || '').replace(/"/g, '""')}"`,
      `"${(iq.email || '').replace(/"/g, '""')}"`,
      `"${(iq.course || '').replace(/"/g, '""')}"`,
      `"${(iq.city || '').replace(/"/g, '""')}"`,
      `"${(iq.source || '').replace(/"/g, '""')}"`,
      `"${(iq.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `uvchm_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter((iq) => {
    const term = searchTerm.toLowerCase();
    return (
      (iq.name && iq.name.toLowerCase().includes(term)) ||
      (iq.phone && iq.phone.toLowerCase().includes(term)) ||
      (iq.email && iq.email.toLowerCase().includes(term)) ||
      (iq.course && iq.course.toLowerCase().includes(term)) ||
      (iq.city && iq.city.toLowerCase().includes(term)) ||
      (iq.source && iq.source.toLowerCase().includes(term)) ||
      (iq.message && iq.message.toLowerCase().includes(term))
    );
  });

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4 selection:bg-pink-600 selection:text-white">
        <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-pink-600/20 text-pink-500 border border-pink-500/30 flex items-center justify-center mx-auto shadow-lg shadow-pink-500/10">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">Private Portal</h1>
            <p className="text-xs text-slate-400">Enter security passcode to access admission enquiries.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter access code"
                className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-mono text-sm"
                autoFocus
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-pink-600/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
              <span>Unlock Dashboard</span>
            </button>
          </form>

          <div className="text-center">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-mono">
              Confidential Internal Portal • No-Index Active
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-pink-600 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-full text-[10px] font-black uppercase tracking-wider">
                Private Data
              </span>
              <span className="text-xs text-slate-400 font-mono">Robots: No-Index</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Admission Enquiries</h1>
            <p className="text-xs text-slate-400">Total Enquiries: <span className="text-pink-400 font-bold">{inquiries.length}</span></p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchEnquiries(passcode)}
              disabled={loading}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={filteredInquiries.length === 0}
              className="px-4 py-2.5 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-pink-600/30 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-bold rounded-xl border border-red-500/30 transition-all"
            >
              Lock
            </button>
          </div>
        </div>

        {messageNotice && (
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{messageNotice}</span>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, phone, email, course, city, or message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>

        {/* Table View */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-300">No enquiries found</p>
              <p className="text-xs text-slate-500">
                {searchTerm ? 'Try searching for a different term.' : 'Form submissions will appear here live as users submit.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300 border-collapse">
                <thead className="bg-slate-950/60 text-slate-400 uppercase tracking-wider font-mono text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 font-bold">#</th>
                    <th className="py-4 px-4 font-bold">Date & Time</th>
                    <th className="py-4 px-4 font-bold">Student Name</th>
                    <th className="py-4 px-4 font-bold">Phone Number</th>
                    <th className="py-4 px-4 font-bold">Course</th>
                    <th className="py-4 px-4 font-bold">City/Village</th>
                    <th className="py-4 px-4 font-bold">Source</th>
                    <th className="py-4 px-4 font-bold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredInquiries.map((iq, index) => (
                    <tr key={iq.id || index} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-4 text-slate-500 font-mono">{iq.id || index + 1}</td>
                      <td className="py-4 px-4 whitespace-nowrap text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{iq.created_at ? new Date(iq.created_at).toLocaleString('en-IN') : 'N/A'}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-bold text-white whitespace-nowrap">{iq.name}</td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <a href={`tel:${iq.phone}`} className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" />
                          <span>{iq.phone}</span>
                        </a>
                        {iq.email && (
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3 text-slate-500" />
                            <span>{iq.email}</span>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-lg text-[11px] font-semibold flex items-center gap-1 w-fit">
                          <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                          <span>{iq.course || 'General Admission'}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="flex items-center gap-1 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{iq.city || 'N/A'}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md text-[10px] font-mono">
                          {iq.source || 'Website Form'}
                        </span>
                      </td>
                      <td className="py-4 px-4 max-w-xs truncate text-slate-400" title={iq.message}>
                        {iq.message || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
