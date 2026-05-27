'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Is the job application tracker free to use?',
    answer: 'Yes! The core tracking features are completely free forever. We believe everyone should have access to great tools for their job search.',
  },
  {
    question: 'Is my data stored securely?',
    answer: 'Absolutely. Your data is stored locally in your browser right now, meaning only you have access to it. We plan to introduce secure cloud sync in the future.',
  },
  {
    question: 'Can I export my job application data?',
    answer: 'We are working on an export feature that will allow you to download your data as a CSV or JSON file very soon.',
  },
  {
    question: 'How do I change the status of an application?',
    answer: 'On your dashboard, simply locate the job card and use the status dropdown or quick action buttons to update it from "Applied" to "Interview" or "Rejected".',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Got questions? We've got answers.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index} 
              className={`border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-white dark:bg-slate-900 shadow-md' : 'bg-transparent'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 overflow-hidden"
                  >
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
