'use client';

import React from 'react';
import {
  Clipboard,
  CalendarCheck,
  XCircle,
  Search,
  BarChart2,
  Bell,
  ShieldCheck,
  Zap,
  ChevronRight,
} from 'lucide-react';
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

const steps = [
  {
    icon: Clipboard,
    step: '01',
    title: 'Log Your Application',
    description:
      'Add each job you apply to with key details: company, role, location, salary range, and job type. Keep everything organized in one board.',
    color: 'blue',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-500',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-950/30',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200/60 dark:border-blue-800/40',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Track Your Progress',
    description:
      'Update statuses as your applications progress. Mark jobs as "Interview Scheduled" the moment you hear back, and watch your pipeline fill up.',
    color: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-500',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-950/30',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-200/60 dark:border-emerald-800/40',
  },
  {
    icon: BarChart2,
    step: '03',
    title: 'Analyze & Optimize',
    description:
      'Review your interview rate, rejection ratio, and overall pipeline health. Use insights from your stats to refine your job search strategy.',
    color: 'violet',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-fuchsia-500',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-950/30',
    textColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-200/60 dark:border-violet-800/40',
  },
];

const features = [
  {
    icon: Search,
    title: 'Instant Search',
    description: 'Filter your entire board by company name, job title, or location in real time.',
  },
  {
    icon: Bell,
    title: 'Status Tracking',
    description: 'Switch between Not Applied, Interview, and Rejected with a single tap.',
  },
  {
    icon: ShieldCheck,
    title: 'Local Persistence',
    description: 'All your data is stored in your browser\'s localStorage — no account needed.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Statically generated with Next.js 16 and Turbopack for near-instant loads.',
  },
  {
    icon: XCircle,
    title: 'Rejection Insights',
    description: 'Know your closure rate and pivot your approach before you burn more applications.',
  },
  {
    icon: BarChart2,
    title: 'Pipeline Metrics',
    description: 'See your interview-to-application ratio at a glance on the stats dashboard.',
  },
];

export default function FeaturesSection() {
  return (
    <div className="mb-10">
      {/* How It Works */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200 dark:to-slate-800" />
          <div className="text-center">
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
              The Process
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200 dark:to-slate-800" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-[2px] bg-gradient-to-r from-blue-300 via-emerald-300 to-violet-300 dark:from-blue-700 dark:via-emerald-700 dark:to-violet-700 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={step.step}
                className={`relative bg-white dark:bg-slate-900 border ${step.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group z-10`}
              >
                {/* Step Number */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl ${step.bgLight} ${step.bgDark} ${step.textColor} shadow-sm`}>
                    <Icon size={22} />
                  </div>
                  <span className={`text-4xl font-black ${step.textColor} opacity-20 leading-none`}>
                    {step.step}
                  </span>
                </div>

                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Gradient top bar indicator */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200 dark:to-slate-800" />
          <div className="text-center">
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
              Built-In Capabilities
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Everything You Need
            </h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200 dark:to-slate-800" />
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={feature.title}
                className="flex gap-4 items-start p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 group cursor-default"
              >
                <div className="p-2.5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 text-blue-600 dark:text-blue-400 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 sm:p-8 text-white shadow-lg shadow-blue-500/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-extrabold mb-1">
                Ready to take control of your search?
              </h3>
              <p className="text-blue-100 text-sm">
                All data is stored locally in your browser. No sign-up, no ads, no tracking.
              </p>
            </div>
            <a
              href="#job-list-section"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              Get Started
              <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
