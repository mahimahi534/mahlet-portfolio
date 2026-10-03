import React from 'react';
import { FiCheckCircle, FiLayers, FiCode, FiMoon, FiGlobe, FiFolder, FiExternalLink } from 'react-icons/fi';
import { LINKS } from '../config/links';
import { SITE_CONFIG } from '../config/site';

export const FoundationStatus = () => {
  const foundationChecklist = [
    {
      title: 'Vite 8 + React 19 Engine',
      description: 'Ultra-fast HMR and optimized production bundling verified.',
      icon: <FiCode className="w-5 h-5 text-blue-500" />,
    },
    {
      title: 'Responsive CSS & Tokens',
      description: 'CSS custom properties for colors, spacing, borders, and shadows.',
      icon: <FiLayers className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: 'Dark / Light Theme Engine',
      description: 'Persistent theme switching with system preference detection and smooth transitions.',
      icon: <FiMoon className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'SEO & Favicon Architecture',
      description: 'Open Graph, Twitter cards, meta description, and custom MA monogram SVG favicon.',
      icon: <FiGlobe className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: 'Central Configuration Layer',
      description: 'Centralized links for GitHub, Doctor AI, and Portfolio URL in src/config.',
      icon: <FiFolder className="w-5 h-5 text-cyan-500" />,
    },
    {
      title: 'Structured Personal Data',
      description: 'Central data model for Mahlet Alemu, University of Gondar, and graduation date.',
      icon: <FiCheckCircle className="w-5 h-5 text-sky-500" />,
    },
  ];

  return (
    <section id="foundation" className="py-16 md:py-20 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Part 1: Professional Foundation
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            A solid, performant, and extensible baseline built with Vite + React, CSS variables, and centralized configuration for {SITE_CONFIG.name}.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {foundationChecklist.map((item, index) => (
            <div
              key={index}
              className="card-theme p-6 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Configuration Preview Card */}
        <div className="card-theme p-6 sm:p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-500">
                Central Links Configuration
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mt-1">
                Verified Config Endpoints
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 max-w-xl">
                All external repositories and profiles are centrally managed in <code className="px-1.5 py-0.5 rounded bg-[var(--bg-pill)] text-blue-500 text-xs">src/config/links.js</code>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-blue-500 hover:border-blue-400 transition-colors"
              >
                <span>GitHub:</span>
                <span className="font-mono text-xs text-[var(--text-muted)] truncate max-w-[140px]">mahimahi534</span>
                <FiExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href={LINKS.doctorAI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-blue-500 hover:border-blue-400 transition-colors"
              >
                <span>Doctor AI:</span>
                <span className="font-mono text-xs text-[var(--text-muted)] truncate max-w-[140px]">Voice Healthcare</span>
                <FiExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                <span>Portfolio:</span>
                <span className="font-mono text-xs text-amber-500 truncate max-w-[120px]">{LINKS.portfolio}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoundationStatus;
