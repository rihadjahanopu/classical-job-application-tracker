import React from 'react';
import { Search, ClipboardList, Briefcase, TrendingUp } from 'lucide-react';
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const steps = [
  {
    icon: <Search size={32} />,
    title: 'Find Opportunities',
    description: 'Discover jobs on your favorite platforms and bring them here.',
  },
  {
    icon: <ClipboardList size={32} />,
    title: 'Add Details',
    description: 'Log the role, company, salary, and paste the job description.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Track Progress',
    description: 'Move applications from Applied to Interview and manage your pipeline.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Get Hired',
    description: 'Analyze your success rate and land your dream job faster.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A simple 4-step process to organize your job search and boost your hiring chances.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div variants={itemVariants} key={index} className="relative flex flex-col items-center text-center group">
              {/* Connection Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-slate-300 dark:border-slate-700 z-0"></div>
              )}
              
              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md border border-slate-100 dark:border-slate-700 mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-slate-50 dark:border-slate-950">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
