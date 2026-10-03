import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section name="education" className="w-full py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600 dark:border-cyan-400 text-gray-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="p-6 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-cyan-400">
              <FaGraduationCap size={60} />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                University of Gondar
              </h3>
              <p className="text-xl text-blue-600 dark:text-cyan-400 font-medium mb-4">
                BSc in Computer Science
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Graduated with a strong foundation in software engineering, algorithms, data structures, and database management. 
                Active participant in tech clubs and collaborative projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
