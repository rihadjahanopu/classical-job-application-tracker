'use client';

import React from 'react';
import { Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const footerVariants: Variants = {
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

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 pt-20 pb-10 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle modern background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16"
        >
          {/* Logo & Intro */}
          <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-xl shadow-md shadow-blue-500/20">
                <Briefcase size={16} />
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                JobTracker
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              A premium, classical application tracking dashboard built with Next.js, TSX, and Tailwind CSS. Empowering your career journey.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* GitHub Inline SVG */}
              <a href="#" className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 duration-300 flex items-center justify-center group" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              {/* LinkedIn Inline SVG */}
              <a href="#" className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white dark:hover:border-[#0A66C2] transition-all shadow-sm hover:shadow-md hover:-translate-y-1 duration-300 flex items-center justify-center group" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Twitter/X Inline SVG */}
              <a href="#" className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-white hover:bg-black dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:border-slate-100 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 duration-300 flex items-center justify-center group" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-6">
              Dashboard
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  Pipeline Stats
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  History Logs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  <span>Documentation <ExternalLink size={12} className="inline ml-0.5" /></span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  Guides & Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                  Security Guidelines
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom copyright row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-200/50 dark:border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} JobTracker. Designed with Next.js, TSX, and Tailwind CSS.
          </p>
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500 text-center sm:text-right bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            Active version: <span className="text-slate-700 dark:text-slate-300">1.0.0</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
