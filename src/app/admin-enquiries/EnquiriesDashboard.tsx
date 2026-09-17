'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Lock,
  Search,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
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
  Globe,
  ExternalLink
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
  page_url?: string;
  referrer?: string;
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

    const savedStatuses = localStorage.getItem('uvchm_lead_statuses');
    if (savedStatuses) {
      try {
        setStatuses(JSON.parse(savedStatuses));
      } catch (e) {
        console.error('Error parsing statuses', e);
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
        setError(data.error || 'Wrong password. Please try again.');
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
      setError('Could not fetch data. Check your internet connection.');
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

  const uniqueCourses = useMemo(() => {
    const list = Array.from(new Set(inquiries.map((iq) => iq.course).filter(Boolean))) as string[];
    return list.sort();
  }, [inquiries]);

  const stats = useMemo(() => {
    const total = inquiries.length;
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayCount = inquiries.filter((iq) => iq.created_at && iq.created_at.slice(0, 10) === todayStr).length;

    const courseCounts: Record<string, number> = {};
    inquiries.forEach((iq) => {
      const c = iq.course || 'General';
      courseCounts[c] = (courseCounts[c] || 0) + 1;
    });
    const topCourse = Object.entries(courseCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    const cityCounts: Record<string, number> = {};
    inquiries.forEach((iq) => {
      const city = iq.city || 'Not Specified';
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });
    const topCity = Object.entries(cityCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    return { total, todayCount, topCourse, topCity };
  }, [inquiries]);

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
        (iq.page_url && iq.page_url.toLowerCase().includes(term)) ||
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

  const totalPages = Math.ceil(filteredInquiries.length / pageSize) || 1;
  const paginatedInquiries = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredInquiries.slice(start, start + pageSize);
  }, [filteredInquiries, currentPage, pageSize]);

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

  const getExportData = (onlySelected = false) => {
    return onlySelected
      ? inquiries.filter((iq) => selectedIds.includes(iq.id))
      : filteredInquiries;
  };

  const exportToCSV = (onlySelected = false) => {
    const data = getExportData(onlySelected);
    if (data.length === 0) return;

    const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Course', 'City', 'Status', 'Form Source', 'Page URL', 'Referrer', 'Message'];
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
      `"${(iq.page_url || '').replace(/"/g, '""')}"`,
      `"${(iq.referrer || '').replace(/"/g, '""')}"`,
      `"${(iq.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `enquiries_${onlySelected ? 'selected_' : ''}${new Date().toISOString().slice(0, 10)}.csv`);
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
    link.download = `enquiries_${onlySelected ? 'selected_' : ''}${new Date().toISOString().slice(0, 10)}.json`;
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
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800/50';
      case 'Contacted':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50';
      case 'Follow Up':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50';
      case 'Closed':
        return 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700';
      default:
        return 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/50';
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="text-center space-y-1.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center mx-auto">
              <Lock className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold text-zinc-900 dark:text-white">Admin Login</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Enter password to view student enquiries.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter password"
                className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 text-xs focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-mono"
                autoFocus
              />
            </div>

            {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? 'Checking...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-4 sm:p-8 font-sans print:bg-white print:text-black">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5 print:hidden">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Student Enquiries</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">View and manage admission leads with exact page & source tracking.</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => fetchEnquiries(passcode)}
              disabled={loading}
              className="px-3 py-1.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={() => exportToCSV(false)}
              disabled={filteredInquiries.length === 0}
              className="px-3 py-1.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition-all disabled:opacity-50 flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-green-600" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => exportToJSON(false)}
              disabled={filteredInquiries.length === 0}
              className="px-3 py-1.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition-all disabled:opacity-50 flex items-center gap-1.5"
            >
              <FileCode className="w-3.5 h-3.5 text-purple-600" />
              <span>JSON</span>
            </button>

            <button
              onClick={printReport}
              disabled={filteredInquiries.length === 0}
              className="px-3 py-1.5 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition-all disabled:opacity-50 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600" />
              <span>Print</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {messageNotice && (
          <p className="text-xs p-3 bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-300 rounded-lg border border-amber-200 dark:border-amber-900 print:hidden">
            {messageNotice}
          </p>
        )}

        {/* Minimal Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 print:grid-cols-4">
          <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <span className="text-[11px] text-zinc-500 font-medium">Total Leads</span>
            <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.total}</div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <span className="text-[11px] text-zinc-500 font-medium">Today</span>
            <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.todayCount}</div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <span className="text-[11px] text-zinc-500 font-medium">Top Course</span>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white mt-1 truncate" title={stats.topCourse}>
              {stats.topCourse}
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <span className="text-[11px] text-zinc-500 font-medium">Top City</span>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white mt-1 truncate" title={stats.topCity}>
              {stats.topCity}
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-2 print:hidden">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search name, phone, course, city, page URL..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedCourse}
              onChange={(e) => {
                setSelectedCourse(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              <option value="ALL">All Courses</option>
              {uniqueCourses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={selectedStatusFilter}
              onChange={(e) => {
                setSelectedStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Follow Up">Follow Up</option>
              <option value="Enrolled">Enrolled</option>
              <option value="Closed">Closed</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => {
                setDateFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              <option value="ALL">All Time</option>
              <option value="TODAY">Today</option>
              <option value="WEEK">Last 7 Days</option>
              <option value="MONTH">Last 30 Days</option>
            </select>
          </div>
        </div>

        {/* Bulk Action Bar */}
        {selectedIds.length > 0 && (
          <div className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl flex items-center justify-between gap-3 text-xs print:hidden">
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">{selectedIds.length} selected</span>

            <div className="flex items-center gap-2">
              <span className="text-zinc-500 text-[11px]">Mark as:</span>
              {(['Contacted', 'Follow Up', 'Enrolled', 'Closed'] as LeadStatus[]).map((st) => (
                <button
                  key={st}
                  onClick={() => bulkUpdateStatus(st)}
                  className="px-2.5 py-1 bg-white dark:bg-zinc-800 hover:bg-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-700 dark:text-zinc-300 text-[11px] font-medium"
                >
                  {st}
                </button>
              ))}

              <button
                onClick={() => exportToCSV(true)}
                className="px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded font-medium text-[11px]"
              >
                Export Selected CSV
              </button>

              <button onClick={() => setSelectedIds([])} className="p-1 text-zinc-400 hover:text-zinc-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Minimal Table */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden print:border-none">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-12 text-zinc-400 text-xs">No enquiries found.</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 font-medium">
                    <tr>
                      <th className="py-3 px-3 print:hidden">
                        <button onClick={toggleSelectAll}>
                          {selectedIds.length === filteredInquiries.length && filteredInquiries.length > 0 ? (
                            <CheckSquare className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
                          ) : selectedIds.length > 0 ? (
                            <MinusSquare className="w-3.5 h-3.5 text-zinc-600" />
                          ) : (
                            <Square className="w-3.5 h-3.5 text-zinc-400" />
                          )}
                        </button>
                      </th>
                      <th className="py-3 px-3">#</th>
                      <th className="py-3 px-3">Date</th>
                      <th className="py-3 px-3">Name</th>
                      <th className="py-3 px-3">Phone</th>
                      <th className="py-3 px-3">Course</th>
                      <th className="py-3 px-3">Page Source</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 print:hidden">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                    {paginatedInquiries.map((iq, index) => {
                      const isSelected = selectedIds.includes(iq.id);
                      const cleanPhone = getCleanPhone(iq.phone || '');
                      const currentStatus = statuses[iq.id] || 'New';
                      const whatsappText = encodeURIComponent(
                        `Hi ${iq.name}, regarding your UVCHM admission enquiry...`
                      );
                      const rowIndex = (currentPage - 1) * pageSize + index + 1;

                      return (
                        <tr
                          key={iq.id || index}
                          className={`hover:bg-zinc-50 dark:hover:bg-zinc-800/40 ${
                            isSelected ? 'bg-zinc-50 dark:bg-zinc-800/30' : ''
                          }`}
                        >
                          <td className="py-3 px-3 print:hidden">
                            <button onClick={() => toggleSelectOne(iq.id)}>
                              {isSelected ? (
                                <CheckSquare className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
                              ) : (
                                <Square className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-700" />
                              )}
                            </button>
                          </td>
                          <td className="py-3 px-3 text-zinc-400 font-mono text-[11px]">{iq.id || rowIndex}</td>
                          <td className="py-3 px-3 whitespace-nowrap text-zinc-500 font-mono text-[11px]">
                            {iq.created_at ? new Date(iq.created_at).toLocaleDateString('en-IN') : 'N/A'}
                          </td>
                          <td className="py-3 px-3 font-semibold text-zinc-900 dark:text-white whitespace-nowrap">
                            <button
                              onClick={() => setActiveModalLead(iq)}
                              className="hover:underline text-left"
                            >
                              {iq.name}
                            </button>
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap">
                            <div className="flex items-center gap-2 font-mono">
                              <a href={`tel:${iq.phone}`} className="text-zinc-900 dark:text-zinc-100 font-semibold hover:underline">
                                {iq.phone}
                              </a>
                              <button
                                onClick={() => copyToClipboard(iq.phone, `phone_${iq.id}`)}
                                className="text-zinc-400 hover:text-zinc-600 print:hidden"
                                title="Copy Phone"
                              >
                                {copiedId === `phone_${iq.id}` ? (
                                  <Check className="w-3 h-3 text-green-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap text-zinc-700 dark:text-zinc-300">
                            {iq.course || 'General'}
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap text-zinc-600 dark:text-zinc-400 max-w-xs truncate">
                            <div className="space-y-0.5">
                              <span className="font-medium text-zinc-800 dark:text-zinc-200 block text-[11px]">
                                {iq.source || 'Website Form'}
                              </span>
                              {iq.page_url && (
                                <span className="font-mono text-[10px] text-zinc-500 block truncate" title={iq.page_url}>
                                  {iq.page_url}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap">
                            <select
                              value={currentStatus}
                              onChange={(e) => updateLeadStatus(iq.id, e.target.value as LeadStatus)}
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold border cursor-pointer focus:outline-none ${getStatusBadge(
                                currentStatus
                              )}`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Follow Up">Follow Up</option>
                              <option value="Enrolled">Enrolled</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>
                          <td className="py-3 px-3 whitespace-nowrap print:hidden">
                            <div className="flex items-center gap-1.5">
                              {cleanPhone && (
                                <a
                                  href={`https://wa.me/${cleanPhone}?text=${whatsappText}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-2 py-1 bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 hover:bg-green-200 border border-green-200 dark:border-green-800 rounded text-[10px] font-medium flex items-center gap-1"
                                >
                                  <MessageCircle className="w-3 h-3" />
                                  <span>WhatsApp</span>
                                </a>
                              )}
                              <button
                                onClick={() => setActiveModalLead(iq)}
                                className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded text-[10px] font-medium"
                              >
                                View
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 print:hidden">
                <div>Total: {filteredInquiries.length} leads</div>
                <div className="flex items-center gap-2">
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1 border border-zinc-200 dark:border-zinc-800 rounded disabled:opacity-30"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1 border border-zinc-200 dark:border-zinc-800 rounded disabled:opacity-30"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Simple View Modal */}
      {activeModalLead && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4 relative">
            <button
              onClick={() => setActiveModalLead(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">{activeModalLead.name}</h2>
              <p className="text-xs text-zinc-500 font-mono">
                {activeModalLead.created_at ? new Date(activeModalLead.created_at).toLocaleString('en-IN') : ''}
              </p>
            </div>

            <div className="space-y-2 text-xs border-t border-b border-zinc-100 dark:border-zinc-800 py-3">
              <div className="flex justify-between">
                <span className="text-zinc-500">Phone:</span>
                <a href={`tel:${activeModalLead.phone}`} className="font-mono font-semibold text-zinc-900 dark:text-white">
                  {activeModalLead.phone}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Email:</span>
                <span className="font-mono text-zinc-800 dark:text-zinc-200">{activeModalLead.email || 'None'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Course:</span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{activeModalLead.course || 'General'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">City:</span>
                <span className="text-zinc-800 dark:text-zinc-200">{activeModalLead.city || 'None'}</span>
              </div>

              {/* Source Details */}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-1">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Form Source:</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">{activeModalLead.source || 'Website Form'}</span>
                </div>
                {activeModalLead.page_url && (
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Page URL:</span>
                    <a
                      href={activeModalLead.page_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-mono text-[11px] hover:underline flex items-center gap-1 max-w-[200px] truncate"
                    >
                      <span className="truncate">{activeModalLead.page_url}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                )}
                {activeModalLead.referrer && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Referrer:</span>
                    <span className="font-mono text-zinc-800 dark:text-zinc-200 text-[11px]">{activeModalLead.referrer}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Message:</span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 max-h-32 overflow-y-auto">
                {activeModalLead.message || 'No message provided.'}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {getCleanPhone(activeModalLead.phone || '') && (
                <a
                  href={`https://wa.me/${getCleanPhone(activeModalLead.phone || '')}?text=${encodeURIComponent(
                    `Hi ${activeModalLead.name}, regarding your UVCHM admission enquiry...`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-green-600 hover:bg-green-500 text-white font-medium text-xs rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              )}
              <a
                href={`tel:${activeModalLead.phone}`}
                className="flex-1 py-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-xs rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
