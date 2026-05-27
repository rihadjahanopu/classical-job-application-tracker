'use client';
import React from 'react';
import { Briefcase, Calendar, XCircle, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface StatsSectionProps {
  total: number;
  interview: number;
  rejected: number;
}

export default function StatsSection({ total, interview, rejected }: StatsSectionProps) {
  const interviewRate = total > 0 ? Math.round((interview / total) * 100) : 0;
  
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Total Jobs Card */}
      <motion.div variants={cardVariants} className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/30 group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:scale-110" />
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Applications</p>
          <div className="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-600 dark:text-blue-400">
            <Briefcase size={20} />
          </div>
        </div>
        <p className="text-3xl font-bold text-slate-900 dark:text-white transition-all duration-300">
          {total}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">Active tracker instances</p>
      </motion.div>

      {/* Interviews Card */}
      <motion.div variants={cardVariants} className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-500/30 group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:scale-110" />
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Interviews Scheduled</p>
          <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg text-emerald-600 dark:text-emerald-400">
            <Calendar size={20} />
          </div>
        </div>
        <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 transition-all duration-300">
          {interview}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          {total > 0 ? `${Math.round((interview / total) * 100)}%` : '0%'} of total applications
        </p>
      </motion.div>

      {/* Rejected Card */}
      <motion.div variants={cardVariants} className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-rose-500/30 group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:scale-110" />
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Rejections</p>
          <div className="p-2 bg-rose-50 dark:bg-rose-950/40 rounded-lg text-rose-600 dark:text-rose-400">
            <XCircle size={20} />
          </div>
        </div>
        <p className="text-3xl font-bold text-rose-500 dark:text-rose-400 transition-all duration-300">
          {rejected}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          {total > 0 ? `${Math.round((rejected / total) * 100)}%` : '0%'} closure rate
        </p>
      </motion.div>

      {/* Conversion / Success Rate Card */}
      <motion.div variants={cardVariants} className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-violet-500/30 group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:scale-110" />
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Interview Rate</p>
          <div className="p-2 bg-violet-50 dark:bg-violet-950/40 rounded-lg text-violet-600 dark:text-violet-400">
            <TrendingUp size={20} />
          </div>
        </div>
        <p className="text-3xl font-bold text-violet-600 dark:text-violet-400 transition-all duration-300">
          {interviewRate}%
        </p>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-violet-500 to-indigo-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${interviewRate}%` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
