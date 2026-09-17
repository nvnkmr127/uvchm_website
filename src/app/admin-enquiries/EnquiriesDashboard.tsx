'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Lock,
  Search,
  Download,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  ShieldCheck,
  AlertCircle,
  MessageCircle,
  Copy,
  Check,
  Filter,
  Users,
  Clock,
  Printer,
  FileCode,
  FileSpreadsheet,
  CheckSquare,
  Square,
  MinusSquare,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2
} from 'lucide-react';

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

type LeadStatus = 'New' | 'Contacted' | 'Follow Up' | 'Enrolled' | 'Closed';

export default function EnquiriesDashboard() {
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('ALL');
  const [dateFilter, setDateFilter] = useState('ALL');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');
  const [messageNotice, setMessageNotice] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Bulk selection state
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  // Detail Modal State
  const [activeModalLead, setActiveModalLead] = useState<Inquiry | null>(null);

  // Local status tracking map
  const [statuses, setStatuses] = useState<Record<number, LeadStatus>>({});

  useEffect(() => {
    const savedKey = sessionStorage.getItem('uvchm_admin_key');
    if (savedKey) {
      setPasscode(savedKey);
      fetchEnquiries(savedKey);
    }
    
    // Load local statuses
    const savedStatuses = localStorage.getItem('uvchm_lead_statuses');
    if (savedStatuses) {
      try {
        setStatuses(JSON.parse(savedStatuses));
      } catch (e) {
        console.error('Error parsing lead statuses', e);
      }
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

  const updateLeadStatus = (id: number, newStatus: LeadStatus) => {
    const updated = { ...statuses, [id]: newStatus };
    setStatuses(updated);
    localStorage.setItem('uvchm_lead_statuses', JSON.stringify(updated));
  };

  const bulkUpdateStatus = (newStatus: LeadStatus) => {
    if (selectedIds.length === 0) return;
    const updated = { ...statuses };
    selectedIds.forEach((id) => {
      updated[id] = newStatus;
    });
    setStatuses(updated);
    localStorage.setItem('uvchm_lead_statuses', JSON.stringify(updated));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCleanPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) return `91${digits}`;
    return digits;
  };

  // Distinct courses list for filter dropdown
  const uniqueCourses = useMemo(() => {
    const list = Array.from(new Set(inquiries.map((iq) => iq.course).filter(Boolean))) as string[];
    return list.sort();
  }, [inquiries]);

  // Analytics Stats
  const stats = useMemo(() => {
    const total = inquiries.length;
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayCount = inquiries.filter((iq) => iq.created_at && iq.created_at.slice(0, 10) === todayStr).length;

    // Course distribution
    const courseCounts: Record<string, number> = {};
    inquiries.forEach((iq) => {
      const c = iq.course || 'Unspecified';
      courseCounts[c] = (courseCounts[c] || 0) + 1;
    });
    const topCourse = Object.entries(courseCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    // City distribution
    const cityCounts: Record<string, number> = {};
    inquiries.forEach((iq) => {
      const city = iq.city || 'Not Specified';
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });
    const topCity = Object.entries(cityCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    return { total, todayCount, topCourse, topCity };
  }, [inquiries]);

  // Filtered List
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((iq) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        (iq.name && iq.name.toLowerCase().includes(term)) ||
        (iq.phone && iq.phone.toLowerCase().includes(term)) ||
        (iq.email && iq.email.toLowerCase().includes(term)) ||
        (iq.course && iq.course.toLowerCase().includes(term)) ||
        (iq.city && iq.city.toLowerCase().includes(term)) ||
        (iq.source && iq.source.toLowerCase().includes(term)) ||
        (iq.message && iq.message.toLowerCase().includes(term));

      const matchesCourse = selectedCourse === 'ALL' || iq.course === selectedCourse;
      const leadStatus = statuses[iq.id] || 'New';
      const matchesStatus = selectedStatusFilter === 'ALL' || leadStatus === selectedStatusFilter;

      let matchesDate = true;
      if (dateFilter !== 'ALL' && iq.created_at) {
        const date = new Date(iq.created_at);
        const now = new Date();
        if (dateFilter === 'TODAY') {
          matchesDate = date.toDateString() === now.toDateString();
        } else if (dateFilter === 'WEEK') {
          const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
          matchesDate = diffDays <= 7;
        } else if (dateFilter === 'MONTH') {
          const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
          matchesDate = diffDays <= 30;
        }
      }

      return matchesSearch && matchesCourse && matchesStatus && matchesDate;
    });
  }, [inquiries, searchTerm, selectedCourse, selectedStatusFilter, dateFilter, statuses]);

  // Paginated List
  const totalPages = Math.ceil(filteredInquiries.length / pageSize) || 1;
  const paginatedInquiries = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredInquiries.slice(start, start + pageSize);
  }, [filteredInquiries, currentPage, pageSize]);

  // Toggle selection
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredInquiries.length && filteredInquiries.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredInquiries.map((iq) => iq.id));
    }
  };

  const toggleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Export functions
  const getExportData = (onlySelected = false) => {
    const targets = onlySelected
      ? inquiries.filter((iq) => selectedIds.includes(iq.id))
      : filteredInquiries;
    return targets;
  };

  const exportToCSV = (onlySelected = false) => {
    const data = getExportData(onlySelected);
    if (data.length === 0) return;

    const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Course', 'City/Village', 'Status', 'Source', 'Message'];
    const rows = data.map((iq) => [
      iq.id,
      iq.created_at ? new Date(iq.created_at).toLocaleString('en-IN') : 'N/A',
      `"${(iq.name || '').replace(/"/g, '""')}"`,
      `"${(iq.phone || '').replace(/"/g, '""')}"`,
      `"${(iq.email || '').replace(/"/g, '""')}"`,
      `"${(iq.course || '').replace(/"/g, '""')}"`,
      `"${(iq.city || '').replace(/"/g, '""')}"`,
      `"${statuses[iq.id] || 'New'}"`,
      `"${(iq.source || '').replace(/"/g, '""')}"`,
      `"${(iq.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `uvchm_enquiries_${onlySelected ? 'selected_' : ''}${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = (onlySelected = false) => {
    const data = getExportData(onlySelected).map((iq) => ({
      ...iq,
      status: statuses[iq.id] || 'New',
    }));

    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `uvchm_enquiries_${onlySelected ? 'selected_' : ''}${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printReport = () => {
    window.print();
  };

  const getStatusBadge = (status: LeadStatus = 'New') => {
    switch (status) {
      case 'Enrolled':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Contacted':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Follow Up':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Closed':
        return 'bg-slate-700/50 text-slate-400 border-slate-600/30';
      default:
        return 'bg-pink-500/20 text-pink-300 border-pink-500/30 animate-pulse';
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 selection:bg-pink-600 selection:text-white">
        <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-600 text-white border border-pink-500/40 flex items-center justify-center mx-auto shadow-xl shadow-pink-600/20">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">UVCHM Private Portal</h1>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Secure internal access to real-time admission leads & student inquiries.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Security Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter access passcode"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all font-mono text-sm"
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
              className="w-full py-3.5 px-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-pink-600/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
              <span>Authenticate & Access</span>
            </button>
          </form>

          <div className="text-center pt-2">
            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-mono">
              Confidential Internal System • No-Index & No-Follow Active
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-pink-600 selection:text-white print:bg-white print:text-slate-900 print:p-0">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Navigation / Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90 backdrop-blur-2xl border border-slate-800 p-6 rounded-3xl shadow-2xl print:hidden">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-full text-[10px] font-black uppercase tracking-wider">
                Private Portal
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Live Database Connected
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Admission Enquiries</h1>
            <p className="text-xs text-slate-400">
              Real-time student leads captured from website forms & location pages.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            <button
              onClick={() => fetchEnquiries(passcode)}
              disabled={loading}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            {/* Export Dropdown Group */}
            <div className="flex items-center gap-1 bg-slate-800/80 border border-slate-700 p-1 rounded-xl">
              <button
                onClick={() => exportToCSV(false)}
                disabled={filteredInquiries.length === 0}
                className="px-3 py-1.5 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-lg shadow-sm transition-all disabled:opacity-50 flex items-center gap-1.5"
                title="Export all filtered leads to CSV"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>

              <button
                onClick={() => exportToJSON(false)}
                disabled={filteredInquiries.length === 0}
                className="px-3 py-1.5 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center gap-1.5"
                title="Export all filtered leads to JSON"
              >
                <FileCode className="w-3.5 h-3.5 text-purple-400" />
                <span>JSON</span>
              </button>

              <button
                onClick={printReport}
                disabled={filteredInquiries.length === 0}
                className="px-3 py-1.5 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center gap-1.5"
                title="Print Summary Report"
              >
                <Printer className="w-3.5 h-3.5 text-blue-400" />
                <span>Print</span>
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-bold rounded-xl border border-red-500/30 transition-all"
            >
              Lock
            </button>
          </div>
        </div>

        {messageNotice && (
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-300 text-xs flex items-center gap-2 print:hidden">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{messageNotice}</span>
          </div>
        )}

        {/* Overview Analytics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-4 print:gap-2">
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 print:bg-slate-100 print:border-slate-300 print:text-black">
            <div className="flex items-center justify-between text-slate-400 print:text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">Total Leads</span>
              <Users className="w-4 h-4 text-pink-500 print:text-pink-600" />
            </div>
            <div className="text-3xl font-black text-white print:text-black">{stats.total}</div>
            <p className="text-[11px] text-slate-500 print:text-slate-600">All-time form submissions</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 print:bg-slate-100 print:border-slate-300 print:text-black">
            <div className="flex items-center justify-between text-slate-400 print:text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">Today's Leads</span>
              <Clock className="w-4 h-4 text-purple-400 print:text-purple-600" />
            </div>
            <div className="text-3xl font-black text-purple-300 print:text-black">{stats.todayCount}</div>
            <p className="text-[11px] text-slate-500 print:text-slate-600">Submitted today</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 print:bg-slate-100 print:border-slate-300 print:text-black">
            <div className="flex items-center justify-between text-slate-400 print:text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">Top Course</span>
              <GraduationCap className="w-4 h-4 text-blue-400 print:text-blue-600" />
            </div>
            <div className="text-base font-bold text-white print:text-black truncate" title={stats.topCourse}>
              {stats.topCourse}
            </div>
            <p className="text-[11px] text-slate-500 print:text-slate-600">Most requested program</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-2 print:bg-slate-100 print:border-slate-300 print:text-black">
            <div className="flex items-center justify-between text-slate-400 print:text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">Top Location</span>
              <MapPin className="w-4 h-4 text-emerald-400 print:text-emerald-600" />
            </div>
            <div className="text-base font-bold text-white print:text-black truncate" title={stats.topCity}>
              {stats.topCity}
            </div>
            <p className="text-[11px] text-slate-500 print:text-slate-600">Highest student origin</p>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row gap-3 print:hidden">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by student name, phone, email, course, city..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedCourse}
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="ALL">All Courses ({uniqueCourses.length})</option>
                {uniqueCourses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedStatusFilter}
                onChange={(e) => {
                  setSelectedStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="ALL">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Follow Up">Follow Up</option>
                <option value="Enrolled">Enrolled</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={dateFilter}
                onChange={(e) => {
                  setDateFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="ALL">All Time</option>
                <option value="TODAY">Today</option>
                <option value="WEEK">Last 7 Days</option>
                <option value="MONTH">Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Floating / Sticky Bulk Action Bar */}
        {selectedIds.length > 0 && (
          <div className="sticky top-4 z-20 bg-gradient-to-r from-pink-900/90 via-slate-900/95 to-purple-900/90 backdrop-blur-2xl border border-pink-500/40 p-4 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200 print:hidden">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-pink-600 text-white font-black text-xs flex items-center justify-center">
                {selectedIds.length}
              </span>
              <span className="text-xs font-bold text-white">Leads Selected</span>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              <span className="text-[11px] text-slate-300 font-semibold mr-1">Bulk Status:</span>
              {(['Contacted', 'Follow Up', 'Enrolled', 'Closed'] as LeadStatus[]).map((status) => (
                <button
                  key={status}
                  onClick={() => bulkUpdateStatus(status)}
                  className="px-2.5 py-1 bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-[11px] font-bold rounded-lg border border-slate-700 transition-all"
                >
                  Set {status}
                </button>
              ))}

              <div className="h-4 w-px bg-slate-700 mx-1" />

              <button
                onClick={() => exportToCSV(true)}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-lg shadow-sm transition-all flex items-center gap-1"
              >
                <FileSpreadsheet className="w-3 h-3" />
                <span>CSV</span>
              </button>

              <button
                onClick={() => exportToJSON(true)}
                className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold rounded-lg shadow-sm transition-all flex items-center gap-1"
              >
                <FileCode className="w-3 h-3" />
                <span>JSON</span>
              </button>

              <button
                onClick={() => setSelectedIds([])}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-all"
                title="Deselect All"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Data Table */}
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-xl overflow-hidden print:bg-white print:border-slate-300 print:shadow-none">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-20 px-4 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-500 flex items-center justify-center mx-auto border border-slate-700">
                <Search className="w-7 h-7" />
              </div>
              <p className="text-base font-bold text-slate-200">No matching enquiries found</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {searchTerm || selectedCourse !== 'ALL' || dateFilter !== 'ALL'
                  ? 'Try clearing or tweaking your filter criteria.'
                  : 'New website form submissions will appear here in real time.'}
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300 border-collapse print:text-black">
                  <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-mono text-[10px] border-b border-slate-800 print:bg-slate-200 print:text-slate-800">
                    <tr>
                      <th className="py-4 px-4 font-bold print:hidden">
                        <button
                          onClick={toggleSelectAll}
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Select / Deselect All Filtered Leads"
                        >
                          {selectedIds.length === filteredInquiries.length && filteredInquiries.length > 0 ? (
                            <CheckSquare className="w-4 h-4 text-pink-500" />
                          ) : selectedIds.length > 0 ? (
                            <MinusSquare className="w-4 h-4 text-pink-400" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-600" />
                          )}
                        </button>
                      </th>
                      <th className="py-4 px-4 font-bold">#</th>
                      <th className="py-4 px-4 font-bold">Date & Time</th>
                      <th className="py-4 px-4 font-bold">Student Name</th>
                      <th className="py-4 px-4 font-bold">Contact Details</th>
                      <th className="py-4 px-4 font-bold">Course Requested</th>
                      <th className="py-4 px-4 font-bold">City / Origin</th>
                      <th className="py-4 px-4 font-bold">Status</th>
                      <th className="py-4 px-4 font-bold">Source</th>
                      <th className="py-4 px-4 font-bold print:hidden">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 print:divide-slate-300">
                    {paginatedInquiries.map((iq, index) => {
                      const isSelected = selectedIds.includes(iq.id);
                      const cleanPhone = getCleanPhone(iq.phone || '');
                      const currentStatus = statuses[iq.id] || 'New';
                      const whatsappText = encodeURIComponent(
                        `Hello ${iq.name}, thank you for contacting UV College of Hotel Management (UVCHM) regarding the ${iq.course || 'Hotel Management'} program. How can we assist you with admissions?`
                      );

                      const rowIndex = (currentPage - 1) * pageSize + index + 1;

                      return (
                        <tr
                          key={iq.id || index}
                          className={`transition-colors group ${
                            isSelected ? 'bg-pink-950/20 hover:bg-pink-950/30' : 'hover:bg-slate-800/40'
                          }`}
                        >
                          <td className="py-4 px-4 print:hidden">
                            <button
                              onClick={() => toggleSelectOne(iq.id)}
                              className="text-slate-500 hover:text-white transition-colors"
                            >
                              {isSelected ? (
                                <CheckSquare className="w-4 h-4 text-pink-500" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-700" />
                              )}
                            </button>
                          </td>
                          <td className="py-4 px-4 text-slate-500 font-mono">{iq.id || rowIndex}</td>
                          <td className="py-4 px-4 whitespace-nowrap text-slate-400 font-mono">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-500 print:hidden" />
                              <span>{iq.created_at ? new Date(iq.created_at).toLocaleString('en-IN') : 'N/A'}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-bold text-white print:text-black whitespace-nowrap">
                            <button
                              onClick={() => setActiveModalLead(iq)}
                              className="hover:text-pink-400 hover:underline text-left transition-all"
                            >
                              {iq.name}
                            </button>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <a
                                  href={`tel:${iq.phone}`}
                                  className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 font-mono text-xs"
                                >
                                  <Phone className="w-3.5 h-3.5 print:hidden" />
                                  <span>{iq.phone}</span>
                                </a>
                                <button
                                  onClick={() => copyToClipboard(iq.phone, `phone_${iq.id}`)}
                                  className="text-slate-500 hover:text-slate-300 transition-colors print:hidden"
                                  title="Copy Phone Number"
                                >
                                  {copiedId === `phone_${iq.id}` ? (
                                    <Check className="w-3 h-3 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </button>
                              </div>

                              {iq.email && (
                                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                                  <Mail className="w-3 h-3 text-slate-500 print:hidden" />
                                  <span>{iq.email}</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-xl text-[11px] font-semibold flex items-center gap-1.5 w-fit print:bg-slate-200 print:text-black print:border-none">
                              <GraduationCap className="w-3.5 h-3.5 text-purple-400 print:hidden" />
                              <span>{iq.course || 'General Admission'}</span>
                            </span>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className="flex items-center gap-1 text-slate-300 print:text-black">
                              <MapPin className="w-3.5 h-3.5 text-slate-500 print:hidden" />
                              <span>{iq.city || 'N/A'}</span>
                            </span>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <select
                              value={currentStatus}
                              onChange={(e) => updateLeadStatus(iq.id, e.target.value as LeadStatus)}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border cursor-pointer focus:outline-none print:border-slate-400 print:bg-white print:text-black ${getStatusBadge(
                                currentStatus
                              )}`}
                            >
                              <option value="New" className="bg-slate-900 text-pink-300">
                                New
                              </option>
                              <option value="Contacted" className="bg-slate-900 text-blue-300">
                                Contacted
                              </option>
                              <option value="Follow Up" className="bg-slate-900 text-amber-300">
                                Follow Up
                              </option>
                              <option value="Enrolled" className="bg-slate-900 text-emerald-300">
                                Enrolled
                              </option>
                              <option value="Closed" className="bg-slate-900 text-slate-400">
                                Closed
                              </option>
                            </select>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md text-[10px] font-mono border border-slate-700/50 print:bg-transparent print:border-none print:text-slate-700">
                              {iq.source || 'Website Form'}
                            </span>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap print:hidden">
                            <div className="flex items-center gap-1.5">
                              {cleanPhone && (
                                <a
                                  href={`https://wa.me/${cleanPhone}?text=${whatsappText}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded-lg transition-all"
                                  title="WhatsApp Chat"
                                >
                                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                                </a>
                              )}
                              <button
                                onClick={() => setActiveModalLead(iq)}
                                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg transition-all"
                                title="View Full Details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination Bar */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Show</span>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-2 py-1 bg-slate-900 border border-slate-800 rounded-lg text-white font-medium focus:outline-none"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={9999}>All</option>
                  </select>
                  <span>per page • Total {filteredInquiries.length} leads</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono mr-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40 rounded-lg text-slate-300 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40 rounded-lg text-slate-300 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Lead Detail Modal */}
      {activeModalLead && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setActiveModalLead(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Student Enquiry Detail
              </span>
              <h2 className="text-xl font-black text-white">{activeModalLead.name}</h2>
              <p className="text-xs text-slate-400 font-mono">
                Submitted: {activeModalLead.created_at ? new Date(activeModalLead.created_at).toLocaleString('en-IN') : 'N/A'}
              </p>
            </div>

            <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Phone</span>
                <a href={`tel:${activeModalLead.phone}`} className="text-pink-400 font-bold font-mono">
                  {activeModalLead.phone}
                </a>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Email</span>
                <span className="text-slate-200 font-mono">{activeModalLead.email || 'Not provided'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Course</span>
                <span className="text-purple-300 font-semibold">{activeModalLead.course || 'General'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-bold uppercase tracking-wider">City/Village</span>
                <span className="text-slate-200">{activeModalLead.city || 'Not specified'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Source</span>
                <span className="text-slate-400 font-mono">{activeModalLead.source || 'Website Form'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Status</span>
                <select
                  value={statuses[activeModalLead.id] || 'New'}
                  onChange={(e) => updateLeadStatus(activeModalLead.id, e.target.value as LeadStatus)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getStatusBadge(
                    statuses[activeModalLead.id] || 'New'
                  )}`}
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Follow Up">Follow Up</option>
                  <option value="Enrolled">Enrolled</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Full Message / Notes</label>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-300 leading-relaxed max-h-36 overflow-y-auto">
                {activeModalLead.message || 'No additional message was included in this form submission.'}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {getCleanPhone(activeModalLead.phone || '') && (
                <a
                  href={`https://wa.me/${getCleanPhone(activeModalLead.phone || '')}?text=${encodeURIComponent(
                    `Hello ${activeModalLead.name}, thank you for contacting UVCHM regarding admission in ${activeModalLead.course || 'Hotel Management'}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/20 text-center transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
              )}
              <a
                href={`tel:${activeModalLead.phone}`}
                className="flex-1 py-3 bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-pink-600/20 text-center transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Student</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
