'use client';

import React, { useState } from 'react';
import { Job, JobStatus } from '../types';
import { X, Briefcase, MapPin, DollarSign, AlignLeft } from 'lucide-react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddJob: (job: Omit<Job, 'id'>) => void;
}

export default function JobModal({ isOpen, onClose, onAddJob }: JobModalProps) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Full-time');
  const [salary, setSalary] = useState('');
  const [status, setStatus] = useState<JobStatus>('not-applied');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!company.trim()) newErrors.company = 'Company name is required';
    if (!position.trim()) newErrors.position = 'Position is required';
    if (!location.trim()) newErrors.location = 'Location is required';
    if (!salary.trim()) newErrors.salary = 'Salary range is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onAddJob({
      company: company.trim(),
      position: position.trim(),
      location: location.trim(),
      type,
      salary: salary.trim(),
      status,
      description: description.trim(),
    });

    // Reset Form
    setCompany('');
    setPosition('');
    setLocation('');
    setType('Full-time');
    setSalary('');
    setStatus('not-applied');
    setDescription('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-slate-800 transition-all transform scale-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg">
              <Briefcase size={18} />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Add Job Application</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4 flex-1">
          {/* Company & Position */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Google"
                className={`w-full px-3.5 py-2 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                  errors.company ? 'border-rose-500 dark:border-rose-500/50' : 'border-slate-200 dark:border-slate-800'
                }`}
              />
              {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Job Position
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="e.g. Frontend Engineer"
                className={`w-full px-3.5 py-2 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                  errors.position ? 'border-rose-500 dark:border-rose-500/50' : 'border-slate-200 dark:border-slate-800'
                }`}
              />
              {errors.position && <p className="text-xs text-rose-500 mt-1">{errors.position}</p>}
            </div>
          </div>

          {/* Location & Salary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 text-slate-400 dark:text-slate-500" size={16} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Remote / New York, NY"
                  className={`w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                    errors.location ? 'border-rose-500 dark:border-rose-500/50' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
              </div>
              {errors.location && <p className="text-xs text-rose-500 mt-1">{errors.location}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Salary Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 text-slate-400 dark:text-slate-500" size={16} />
                <input
                  type="text"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="e.g. $120,000 - $150,000"
                  className={`w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${
                    errors.salary ? 'border-rose-500 dark:border-rose-500/50' : 'border-slate-200 dark:border-slate-800'
                  }`}
                />
              </div>
              {errors.salary && <p className="text-xs text-rose-500 mt-1">{errors.salary}</p>}
            </div>
          </div>

          {/* Job Type & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Job Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Initial Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as JobStatus)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              >
                <option value="not-applied">Not Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Job Description
            </label>
            <div className="relative">
              <AlignLeft className="absolute left-3 top-3 text-slate-400 dark:text-slate-500" size={16} />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly explain the role, responsibilities, or notes about the position..."
                rows={4}
                className={`w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white dark:bg-slate-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none ${
                  errors.description ? 'border-rose-500 dark:border-rose-500/50' : 'border-slate-200 dark:border-slate-800'
                }`}
              />
            </div>
            {errors.description && <p className="text-xs text-rose-500 mt-1">{errors.description}</p>}
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm shadow-blue-500/10 active:scale-95"
            >
              Save Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
