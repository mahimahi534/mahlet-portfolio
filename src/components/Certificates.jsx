import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  return (
    <section name="certificates" className="w-full py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600 dark:border-cyan-400 text-gray-900 dark:text-white">
            Certificates
          </h2>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-slate-600 flex items-center gap-6 hover:shadow-xl transition-shadow"
          >
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl text-yellow-500 shadow-sm">
              <FaCertificate size={40} />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Udacity AI Certificate
              </h3>
              <p className="text-blue-600 dark:text-cyan-400 font-medium mt-1">
                Udacity
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
