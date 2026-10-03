import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section name="experience" className="w-full py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600 dark:border-cyan-400 text-gray-900 dark:text-white">
            Experience
          </h2>
        </motion.div>

        <div className="mt-12 relative border-l-4 border-blue-600 dark:border-cyan-400 ml-3 md:ml-6 space-y-12">
          
          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="hidden md:block absolute w-6 h-6 bg-blue-600 dark:bg-cyan-400 rounded-full -left-[15px] top-1 border-4 border-white dark:border-slate-800 z-10 shadow"></div>
            <div className="md:pl-10">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web Developer Intern</h3>
                    <h4 className="text-lg text-blue-600 dark:text-cyan-400 font-medium">Abyssinia Software</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-semibold">
                    Duration: 2 Months
                  </span>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Engineered highly responsive and modern web interfaces, ensuring cross-browser compatibility.</li>
                  <li>Architected and developed modular React components to accelerate the UI development process.</li>
                  <li>Integrated RESTful APIs to fetch and display dynamic data, significantly reducing page load times.</li>
                  <li>Collaborated closely with senior developers, participating in code reviews to elevate frontend code quality.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
