import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section name="contact" className="w-full py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-8 text-center"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-600 dark:border-cyan-400 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="py-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 mt-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 rounded-full">
                <FiMail size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Email</h4>
                <a href="mailto:mmahletalemu@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400">
                  mmahletalemu@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 rounded-full">
                <FiPhone size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Phone</h4>
                <a href="tel:+251902936623" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400">
                  +251 902 936 623
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 rounded-full">
                <FiMapPin size={30} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700"
          >
            <form className="flex flex-col space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 text-gray-900 dark:text-white transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
