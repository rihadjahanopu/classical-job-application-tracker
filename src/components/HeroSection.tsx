'use client';

import React from 'react';
import { Plus, Compass, Sparkles } from 'lucide-react';
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface HeroSectionProps {
  totalJobs: number;
  interviewCount: number;
  onAddJobClick: () => void;
}

export default function HeroSection({ totalJobs, interviewCount, onAddJobClick }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-10 mb-8 shadow-xl border border-slate-800">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <motion.div 
        className="relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sparkle Tag */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-blue-400 mb-4 animate-pulse">
          <Sparkles size={12} />
          <span>Streamline Your Career Hunt</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-tight">
          Track Your Job Applications <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            With Clinical Precision.
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p variants={itemVariants} className="text-slate-350 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
          Never miss an interview follow-up or salary review again. Organize your dashboard, monitor status changes in real time, and gain clean pipeline stats.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 items-center">
          <button
            onClick={onAddJobClick}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-lg active:scale-95 transition-all duration-205 cursor-pointer"
          >
            <Plus size={16} />
            Track New Job
          </button>
          
          <a
            href="#job-list-section"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-700/60 active:scale-95 transition-all duration-205"
          >
            <Compass size={16} />
            View Active List
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Counter Side Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        className="hidden lg:flex absolute bottom-8 right-10 z-10 flex-col items-end text-right"
      >
        <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Active Tracker State</span>
        <span className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mt-1">
          {totalJobs} Applications
        </span>
        <span className="text-slate-350 text-xs mt-1">
          {interviewCount} Interview{interviewCount !== 1 && 's'} in progress
        </span>
      </motion.div>
    </div>
  );
}
