'use client';
import React from 'react';
import { Job, JobStatus } from '../types';
import { MapPin, Clock, DollarSign, Trash2, CalendarCheck, XCircle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface JobCardProps {
  job: Job;
  onUpdateStatus: (id: number, status: JobStatus) => void;
  onDelete: (id: number) => void;
}

// Function to generate a stable, beautiful gradient based on string value
const getAvatarGradient = (name: string) => {
  const gradients = [
    'from-indigo-500 to-purple-500',
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-violet-500 to-fuchsia-500',
    'from-rose-500 to-orange-500',
    'from-amber-500 to-yellow-500',
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return gradients[sum % gradients.length];
};

export default function JobCard({ job, onUpdateStatus, onDelete }: JobCardProps) {
  const initials = job.company
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const avatarGradient = getAvatarGradient(job.company);

  const getStatusBadge = (status: JobStatus) => {
    switch (status) {
      case 'not-applied':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800/50">
            NOT APPLIED
          </span>
        );
      case 'interview':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/50">
            INTERVIEW
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-800/50">
            REJECTED
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-colors duration-300 group flex flex-col justify-between min-h-[220px]"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Visual Initials Avatar */}
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${avatarGradient} flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-white dark:ring-slate-950`}>
              {initials}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {job.company}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.position}</p>
            </div>
          </div>
          
          <button
            onClick={() => onDelete(job.id)}
            className="text-slate-400 hover:text-rose-500 dark:text-slate-500 dark:hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all active:scale-95 duration-200"
            title="Delete Job Application"
          >
            <Trash2 size={16} />
          </button>
        </div>

        {/* Details Row */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin size={13} className="text-slate-400 dark:text-slate-500" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-slate-400 dark:text-slate-500" />
            {job.type}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign size={13} className="text-slate-400 dark:text-slate-500" />
            {job.salary}
          </span>
        </div>

        {/* Status Badge */}
        <div className="mb-4">{getStatusBadge(job.status)}</div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed line-clamp-3">
          {job.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        {job.status !== 'interview' && (
          <button
            onClick={() => onUpdateStatus(job.id, 'interview')}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500/50 dark:text-emerald-400 dark:hover:bg-emerald-950/20 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            <CalendarCheck size={14} />
            INTERVIEW
          </button>
        )}
        {job.status !== 'rejected' && (
          <button
            onClick={() => onUpdateStatus(job.id, 'rejected')}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold border border-rose-600 text-rose-600 hover:bg-rose-50 dark:border-rose-500/50 dark:text-rose-400 dark:hover:bg-rose-950/20 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            <XCircle size={14} />
            REJECTED
          </button>
        )}
        {job.status !== 'not-applied' && (
          <button
            onClick={() => onUpdateStatus(job.id, 'not-applied')}
            className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold border border-slate-300 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 rounded-lg transition-all duration-200 active:scale-[0.98]"
            title="Reset to Not Applied"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
