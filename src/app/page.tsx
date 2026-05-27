'use client';

import React, { useState, useEffect } from 'react';
import { Job, JobStatus } from '../types';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import { Search, Filter, ArrowUpDown, FileCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SEED_JOBS: Job[] = [
  {
    id: 1,
    company: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $175,000',
    description:
      'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
    status: 'not-applied',
  },
  {
    id: 2,
    company: 'WebFlow Agency',
    position: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$80,000 - $120,000',
    description:
      'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
    status: 'not-applied',
  },
  {
    id: 3,
    company: 'DataViz Solutions',
    position: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125,000 - $165,000',
    description:
      'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
    status: 'not-applied',
  },
  {
    id: 4,
    company: 'CloudFirst Inc',
    position: 'Backend Developer',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$140,000 - $190,000',
    description:
      'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
    status: 'not-applied',
  },
  {
    id: 5,
    company: 'Innovation Labs',
    position: 'UI/UX Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $150,000',
    description:
      'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
    status: 'not-applied',
  },
  {
    id: 6,
    company: 'MegaCorp Solutions',
    position: 'JavaScript Developer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $170,000',
    description:
      'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
    status: 'not-applied',
  },
  {
    id: 7,
    company: 'StartupXYZ',
    position: 'Full Stack Engineer',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description:
      'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
    status: 'not-applied',
  },
  {
    id: 8,
    company: 'TechCorp Industries',
    position: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$150,000 - $175,000',
    description:
      'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
    status: 'not-applied',
  },
];

export default function Dashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'interview' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('All');
  const [sortBy, setSortBy] = useState('company-asc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load jobs and dark mode from localStorage on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedJobs = localStorage.getItem('jobTrackerData');
    if (savedJobs) {
      try {
        setJobs(JSON.parse(savedJobs));
      } catch {
        setJobs(SEED_JOBS);
      }
    } else {
      setJobs(SEED_JOBS);
      localStorage.setItem('jobTrackerData', JSON.stringify(SEED_JOBS));
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleUpdateStatus = (id: number, newStatus: JobStatus) => {
    const updatedJobs = jobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job));
    setJobs(updatedJobs);
    localStorage.setItem('jobTrackerData', JSON.stringify(updatedJobs));
  };

  const handleDeleteJob = (id: number) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('jobTrackerData', JSON.stringify(updatedJobs));
  };

  const handleAddJob = (newJobData: Omit<Job, 'id'>) => {
    const nextId = jobs.length > 0 ? Math.max(...jobs.map((j) => j.id)) + 1 : 1;
    const newJob: Job = {
      id: nextId,
      ...newJobData,
    };
    const updatedJobs = [newJob, ...jobs];
    setJobs(updatedJobs);
    localStorage.setItem('jobTrackerData', JSON.stringify(updatedJobs));
  };

  // Stats calculation
  const totalCount = jobs.length;
  const interviewCount = jobs.filter((j) => j.status === 'interview').length;
  const rejectedCount = jobs.filter((j) => j.status === 'rejected').length;

  // Filtering & Sorting logic
  const filteredAndSortedJobs = jobs
    .filter((job) => {
      // Tab filter
      if (activeTab === 'interview' && job.status !== 'interview') return false;
      if (activeTab === 'rejected' && job.status !== 'rejected') return false;

      // Job Type filter
      if (selectedJobType !== 'All' && job.type.toLowerCase() !== selectedJobType.toLowerCase()) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesCompany = job.company.toLowerCase().includes(query);
        const matchesPosition = job.position.toLowerCase().includes(query);
        const matchesLocation = job.location.toLowerCase().includes(query);
        return matchesCompany || matchesPosition || matchesLocation;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'company-asc') {
        return a.company.localeCompare(b.company);
      }
      if (sortBy === 'company-desc') {
        return b.company.localeCompare(a.company);
      }
      if (sortBy === 'salary-desc') {
        // Simple numeric extractor for sorting salary
        const getSalVal = (salStr: string) => {
          const matched = salStr.replace(/[^0-9]/g, '');
          return matched ? parseInt(matched) : 0;
        };
        return getSalVal(b.salary) - getSalVal(a.salary);
      }
      return 0;
    });

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onAddJobClick={() => setIsModalOpen(true)}
      />

      {/* Main Content Workspace */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Hero Section */}
        <HeroSection
          totalJobs={totalCount}
          interviewCount={interviewCount}
          onAddJobClick={() => setIsModalOpen(true)}
        />

        {/* Features & How It Works Section */}
        <FeaturesSection />

        {/* Visual Stats Section */}
        <StatsSection total={totalCount} interview={interviewCount} rejected={rejectedCount} />

        {/* Search, Filter and Sorting Controls */}
        <div id="job-list-section" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 mb-8 shadow-sm space-y-4 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row gap-4 justify-between lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3 text-slate-400 dark:text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search by company, job title, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/50 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Select Controls (Type & Sort) */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
              {/* Type Filter */}
              <div className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl bg-slate-50/30 dark:bg-slate-950/20 flex-1 sm:flex-none">
                <Filter size={15} className="text-slate-400 dark:text-slate-500" />
                <select
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  className="bg-transparent border-none text-xs font-semibold focus:outline-none text-slate-600 dark:text-slate-350 pr-6 cursor-pointer"
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 px-3 py-2 rounded-xl bg-slate-50/30 dark:bg-slate-950/20 flex-1 sm:flex-none">
                <ArrowUpDown size={15} className="text-slate-400 dark:text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-xs font-semibold focus:outline-none text-slate-600 dark:text-slate-350 pr-6 cursor-pointer"
                >
                  <option value="company-asc">Company (A-Z)</option>
                  <option value="company-desc">Company (Z-A)</option>
                  <option value="salary-desc">Highest Salary</option>
                </select>
              </div>
            </div>
          </div>

          {/* Border Divider */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="bg-slate-100 dark:bg-slate-950 p-1 rounded-xl flex gap-1.5 w-full sm:w-auto">
              {(['all', 'interview', 'rejected'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-5 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 capitalize cursor-pointer ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/15'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Results Counters */}
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              {filteredAndSortedJobs.length} match{filteredAndSortedJobs.length !== 1 && 'es'} found
            </span>
          </div>
        </div>

        {/* Jobs Grid / Empty State */}
        {filteredAndSortedJobs.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onUpdateStatus={handleUpdateStatus}
                  onDelete={handleDeleteJob}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-16 text-center shadow-sm max-w-xl mx-auto transition-colors duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-5 bg-blue-50 dark:bg-blue-950/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner">
              <FileCode size={28} />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
              No matching applications
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
              We couldn&apos;t find any job applications matching your search query or selected active filters. Try refining your parameters.
            </p>
          </motion.div>
        )}
      </main>

      {/* Additional Landing Page Sections */}
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />

      {/* Footer Section */}
      <Footer />

      {/* Add Job Modal */}
      <JobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddJob={handleAddJob}
      />
    </div>
  );
}
