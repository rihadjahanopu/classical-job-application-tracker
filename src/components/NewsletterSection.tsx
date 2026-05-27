import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Level Up Your Career
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for weekly tips on resume building, interview prep, and industry insights delivered straight to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/20 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            required
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-white text-blue-600 dark:text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <span>Subscribe</span>
            <Send size={18} />
          </button>
        </form>
        <p className="text-blue-200 text-xs mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  );
}
