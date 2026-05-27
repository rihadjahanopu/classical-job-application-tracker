import React from 'react';
import { Star } from 'lucide-react';
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

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    content: 'This application tracker completely changed how I organize my job search. I landed my dream job within weeks!',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Designer',
    content: 'The visual stats and intuitive UI make it so easy to see my progress. Highly recommended for anyone on the job hunt.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Software Engineer',
    content: 'I love the dark mode and how responsive it is. It keeps me motivated to keep applying every day.',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">What Our Users Say</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream roles using our tracker.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div variants={itemVariants} key={testimonial.id} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 hover:shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-blue-100 dark:border-blue-900" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
