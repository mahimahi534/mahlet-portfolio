import React from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCpu, 
  FiCheckCircle, 
  FiInfo, 
  FiFolder, 
  FiGlobe, 
  FiCloud, 
  FiHome, 
  FiCode, 
  FiMic 
} from 'react-icons/fi';
import { PROJECTS_DATA } from '../data/projects';

export const Projects = () => {
  const { featured, otherProjects } = PROJECTS_DATA;

  // Icon mapping for non-featured projects
  const getProjectIcon = (id) => {
    switch (id) {
      case 'ethiopian-tour-guide':
        return <FiGlobe className="w-5 h-5 text-blue-500" />;
      case 'weatherwise':
        return <FiCloud className="w-5 h-5 text-cyan-500" />;
      case 'ethiopian-property-price':
        return <FiHome className="w-5 h-5 text-indigo-500" />;
      case 'react-web-projects':
        return <FiCode className="w-5 h-5 text-purple-500" />;
      default:
        return <FiFolder className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Background Subtle Ambient Lighting */}
      <div 
        className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-500/5 dark:bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/5 dark:bg-purple-500/5 blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <FiFolder className="w-3.5 h-3.5 text-blue-500" />
            <span>Featured Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Projects &amp;{' '}
            <span className="text-gradient">Innovations</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Real software engineering projects, machine learning models, and full-stack applications built by Mahlet Alemu.
          </p>
        </div>

        {/* ===================================================================
            FEATURED PROJECT: Doctor AI (Visually Larger & Highlighted)
            =================================================================== */}
        <div className="mb-16">
          <div className="card-theme rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-500/30 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-blue-500/5 dark:to-cyan-950/20 shadow-xl relative overflow-hidden">
            
            {/* Top Ribbon / Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2.5">
                <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                  <FiCpu className="w-6 h-6" />
                </span>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-sm">
                    {featured.badge}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] ml-3 hidden sm:inline-block font-mono">
                    Computer Science Degree Showcase
                  </span>
                </div>
              </div>

              {/* Verified GitHub Action Button */}
              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  title="View Doctor AI on GitHub"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <FiExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}
            </div>

            {/* Main Content Layout: 2 Columns on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title, Description, Focus Areas, Disclaimer */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
                    {featured.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  {/* Main Areas Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                      Core Functional Domains
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {featured.mainAreas.map((area, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)]"
                        >
                          <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Medical Disclaimer Notice */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs sm:text-sm leading-relaxed mb-6">
                    <FiInfo className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
                    <p>
                      <strong>Important Notice:</strong> {featured.importantNotice}
                    </p>
                  </div>
                </div>

                {/* Mobile GitHub Button */}
                <div className="sm:hidden pt-2">
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Voice/AI Card & Tech Stack Badges */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                
                {/* Visual Audio / AI Terminal Card */}
                <div className="card-theme p-5 sm:p-6 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-500">
                      <FiMic className="w-4 h-4 text-rose-500 animate-pulse" />
                      Voice &amp; NLP Interface
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      PostgreSQL Data Engine
                    </span>
                  </div>

                  {/* Audio Waveform Visual */}
                  <div className="py-4 px-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center gap-1.5 h-16">
                    {[35, 60, 85, 45, 95, 70, 50, 80, 65, 90, 40, 75, 55, 30].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                    Processes spoken &amp; textual inputs to evaluate basic risk factors across diabetes, pregnancy health, and mental well-being.
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="card-theme p-5 sm:p-6 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Technologies Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featured.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ===================================================================
            OTHER PROJECTS GRID: 2-Column Responsive Layout
            =================================================================== */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Additional Selected Projects
            </h3>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {otherProjects.length} Applications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="card-theme p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-200 group border border-[var(--border-subtle)] hover:border-blue-500/40"
              >
                <div>
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-pill)] group-hover:bg-blue-500/10 transition-colors">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[var(--bg-pill)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors mb-3">
                    {project.title}
                  </h4>

                  {/* Project Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom: Technology Tags (No fake links) */}
                <div>
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-pill)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
