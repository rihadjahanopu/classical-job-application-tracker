import React from 'react';
import { Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function PricingSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your job search journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Basic Plan */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Basic</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Perfect for casual job seekers</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
              <span className="text-slate-500 dark:text-slate-400">/forever</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Track unlimited jobs', 'Basic analytics', 'Local browser storage', 'Standard support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <Check size={18} className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-xl font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 border border-blue-500 shadow-xl shadow-blue-500/20 flex flex-col relative transition-colors duration-300"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <p className="text-blue-100 text-sm mb-6">For the serious career builder</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">$9</span>
              <span className="text-blue-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Cloud sync across devices', 'Advanced analytics & insights', 'AI resume tailored suggestions', 'Email reminders', 'Priority support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check size={18} className="text-blue-200 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-xl font-bold text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-sm">
              Upgrade to Pro
            </button>
          </motion.div>

          {/* Lifetime Plan */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 border border-slate-700 dark:border-slate-800 shadow-sm flex flex-col relative transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2">Lifetime</h3>
            <p className="text-slate-400 text-sm mb-6">Pay once, own forever</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">$99</span>
              <span className="text-slate-500">/one-time</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Everything in Pro', 'Lifetime updates', 'Early access to features', '1-on-1 coaching session', 'Priority 24/7 support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check size={18} className="text-blue-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 rounded-xl font-bold text-slate-900 bg-blue-400 hover:bg-blue-300 transition-colors shadow-sm">
              Get Lifetime
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
