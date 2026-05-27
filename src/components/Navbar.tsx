'use client';

import React, { useState } from 'react';
import { Briefcase, Sun, Moon, Menu, X, Bell, Plus } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onAddJobClick: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode, onAddJobClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-xl shadow-md shadow-blue-500/20">
                <Briefcase size={20} />
              </div>
              <div>
                <h1 className="text-lg font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight">
                  JobTracker
                </h1>
                <p className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mt-0.5">
                  Classical Board
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              <a href="#" className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                Dashboard
              </a>
              <a href="#" className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850/50 hover:text-slate-900 dark:hover:text-white transition-all">
                Analytics
              </a>
              <a href="#" className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850/50 hover:text-slate-900 dark:hover:text-white transition-all">
                Resources
              </a>
            </div>
          </div>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={17} className="text-amber-400 animate-pulse" /> : <Moon size={17} />}
            </button>

            {/* Notification Bell */}
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-all relative">
              <Bell size={17} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white dark:ring-slate-900" />
            </button>

            {/* Divider */}
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800" />

            {/* User Profile */}
            <div className="flex items-center gap-2">
              <button
                onClick={onAddJobClick}
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-sm font-bold shadow-sm shadow-blue-500/10 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Plus size={14} />
                Add Job
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-offset-2 ring-blue-500/20 dark:ring-offset-slate-950">
                RJ
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-500 dark:text-slate-400 transition-all duration-200 active:scale-95"
            >
              {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-lg text-base font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
              Dashboard
            </a>
            <a href="#" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white transition-all">
              Analytics
            </a>
            <a href="#" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white transition-all">
              Resources
            </a>
            <div className="border-t border-slate-100 dark:border-slate-800/80 my-2 pt-2 flex items-center justify-between px-3">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Profile</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-350">Rihad Jahan</span>
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                  RJ
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
