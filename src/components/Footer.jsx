import React from 'react';
import { FiGithub, FiExternalLink, FiCode, FiMapPin, FiCalendar } from 'react-icons/fi';
import { SITE_CONFIG } from '../config/site';
import { LINKS } from '../config/links';
import { personalInfo } from '../data/personalInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-[var(--bg-card)] border-t border-[var(--border-subtle)] py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner & Socials Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-subtle)] items-start">
          
          {/* Left: Branding & Bio summary */}
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
                &lt;MA /&gt;
              </span>
              <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm font-semibold text-blue-500 mb-2">
              {personalInfo.title}
            </p>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mb-4">
              Computer Science graduate from the University of Gondar specializing in software engineering, modern web applications, Python, and AI/NLP systems.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5 text-cyan-500" />
                <span>{personalInfo.education.formattedGraduation}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          {/* Right: Quick Links & Contact Channels */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between h-full">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 md:text-right">
                Connect &amp; Explore
              </h4>
              <div className="flex flex-wrap md:justify-end gap-3 mb-4">
                {/* GitHub */}
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] hover:bg-blue-600 hover:text-white text-xs sm:text-sm font-semibold text-[var(--text-primary)] transition-all shadow-sm"
                  title="View GitHub Profile"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <FiExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* Doctor AI Featured Project */}
                <a
                  href={LINKS.doctorAI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] hover:bg-cyan-600 hover:text-white text-xs sm:text-sm font-semibold text-[var(--text-primary)] transition-all shadow-sm"
                  title="View Doctor AI on GitHub"
                >
                  <FiCode className="w-4 h-4 text-cyan-500" />
                  <span>Doctor AI</span>
                  <FiExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] md:text-right mt-2">
              Available for software engineering and developer opportunities.
            </p>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>BSc Computer Science</span>
            <span>•</span>
            <span>University of Gondar</span>
            <span>•</span>
            <span>Ethiopia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
