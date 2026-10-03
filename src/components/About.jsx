import React from 'react';
import { 
  FiAward, 
  FiCalendar, 
  FiMapPin, 
  FiCode, 
  FiCpu, 
  FiTarget, 
  FiTrendingUp, 
  FiArrowRight, 
  FiCheckCircle, 
  FiBookOpen 
} from 'react-icons/fi';
import { ABOUT_DATA } from '../data/about';

export const About = () => {
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      const yOffset = -80;
      const y = skillsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const pillarIcons = {
    'FiCode': <FiCode className="w-5 h-5 text-blue-500" />,
    'FiCpu': <FiCpu className="w-5 h-5 text-cyan-500" />,
    'FiTarget': <FiTarget className="w-5 h-5 text-indigo-500" />,
    'FiTrendingUp': <FiTrendingUp className="w-5 h-5 text-purple-500" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <FiBookOpen className="w-3.5 h-3.5 text-blue-500" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Passionate About Building{' '}
            <span className="text-gradient">Intelligent Software</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {ABOUT_DATA.bioLead}
          </p>
        </div>

        {/* Modern Visual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Credentials & Core Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="card-theme p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              {/* Subtle card glow header */}
              <div className="flex items-center gap-3 pb-6 border-b border-[var(--border-subtle)] mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-base shadow-md">
                  &lt;MA /&gt;
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {ABOUT_DATA.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-500">
                    {ABOUT_DATA.degree}
                  </p>
                </div>
              </div>

              {/* Verified Education & Milestone Credentials */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-pill)] text-sm">
                  <FiAward className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Academic Degree</span>
                    <span className="font-semibold text-[var(--text-primary)]">{ABOUT_DATA.degree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-pill)] text-sm">
                  <span className="text-blue-500 text-sm shrink-0 mt-0.5">🏛️</span>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Institution</span>
                    <span className="font-semibold text-[var(--text-primary)]">{ABOUT_DATA.university}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-pill)] text-sm">
                  <FiCalendar className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Graduation Status</span>
                    <span className="font-semibold text-emerald-500">{ABOUT_DATA.graduationStatus}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-pill)] text-sm">
                  <FiMapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Location</span>
                    <span className="font-semibold text-[var(--text-primary)]">{ABOUT_DATA.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Strengths Checklist */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Key Developer Traits
                </h4>
                {[
                  'Analytical problem solver with strong mathematical foundations',
                  'Focused on software development, Python, ML & AI/NLP',
                  'Dedicated to continuous learning & clean code architecture',
                  'Hands-on experience in full-stack web applications',
                ].map((trait, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <FiCheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>

              {/* Quick Navigation to Skills */}
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)]">
                <a
                  href="#skills"
                  onClick={handleScrollToSkills}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Technical Skills</span>
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: 4 Core Visual Pillars (Not one large paragraph) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ABOUT_DATA.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="card-theme p-6 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--bg-pill)]">
                      {pillarIcons[pillar.icon]}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2.5">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-features or tags */}
                <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span className="font-mono text-[11px]">Mahlet Alemu</span>
                  <span className="text-blue-500 font-medium">Core Focus</span>
                </div>
              </div>
            ))}

            {/* Full-width Summary Banner beneath the 4 cards */}
            <div className="sm:col-span-2 card-theme p-6 rounded-2xl bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-cyan-900/10 border border-blue-500/20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-[var(--text-primary)]">
                    Graduated with a Strong Computer Science Baseline
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                    Equipped with deep fundamentals in algorithms, data structures, and software engineering from the University of Gondar (June 23, 2026).
                  </p>
                </div>
                <span className="shrink-0 px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-semibold shadow-sm">
                  June 23, 2026
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
