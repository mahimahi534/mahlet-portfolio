import React, { useState } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiArrowRight, 
  FiMail, 
  FiCode, 
  FiTerminal, 
  FiCheck, 
  FiCopy, 
  FiCpu, 
  FiMapPin, 
  FiCalendar 
} from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { LINKS } from '../config/links';

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const rawPythonCode = `class SoftwareDeveloper:
    def __init__(self):
        self.name = "Mahlet Alemu"
        self.role = "Software Developer"
        self.university = "University of Gondar"
        self.degree = "BSc Computer Science"
        self.graduation = "June 23, 2026"
        self.location = "Ethiopia"

        self.interests = [
            "Software Development",
            "Web Development",
            "Python",
            "Machine Learning",
            "AI",
        ]
        self.featured = "Doctor AI Voice Chatbot"

    def status(self):
        return "Ready to innovate and build impactful software"`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(rawPythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Background Ambient Aura */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/15 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Text, Introductions, and Buttons ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Graduation Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold tracking-wide mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Opportunities</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="font-mono text-[11px]">{personalInfo.education.formattedGraduation}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4">
              {personalInfo.name}
            </h1>

            {/* Professional Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-6">
              {personalInfo.title}
            </h2>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-6">
              I am a Computer Science graduate from the{' '}
              <strong className="font-semibold text-[var(--text-primary)]">University of Gondar</strong>{' '}
              with a deep passion for{' '}
              <span className="text-blue-500 font-medium">software development</span>,{' '}
              <span className="text-cyan-500 font-medium">web development</span>,{' '}
              <span className="text-indigo-400 font-medium">Python</span>,{' '}
              <span className="text-purple-400 font-medium">machine learning</span>, and{' '}
              <span className="text-emerald-400 font-medium">AI</span>.
              Dedicated to building scalable, user-centric web applications and intelligent systems that solve real-world problems.
            </p>

            {/* Quick Tech Focus Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Software Development',
                'Web Development',
                'Python',
                'Machine Learning',
                'Artificial Intelligence',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--bg-pill)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects, GitHub, Contact Me */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              
              {/* Button 1: View Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: GitHub */}
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-blue-500 font-semibold text-sm sm:text-base shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FiGithub className="w-5 h-5 text-blue-500" />
                <span>GitHub</span>
                <FiExternalLink className="w-4 h-4 text-[var(--text-muted)]" />
              </a>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[var(--border-subtle)] bg-transparent hover:bg-[var(--bg-pill)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FiMail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

            </div>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)] w-full">
              <span className="flex items-center gap-1.5">
                <span className="text-blue-500">🎓</span>
                <span>{personalInfo.education.institution} ({personalInfo.education.degree})</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-3.5 h-3.5 text-cyan-500" />
                <span>Graduation: June 23, 2026</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Developer/Code-Inspired Visual ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Top Floating Badge */}
            <div className="absolute -top-5 -left-4 sm:-left-6 z-20 px-3.5 py-2 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-lg flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] animate-bounce-slow">
              <span className="p-1 rounded-md bg-amber-500/10 text-amber-500">
                <FiTerminal className="w-4 h-4" />
              </span>
              <span>Python &amp; ML Architecture</span>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 px-3.5 py-2 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-lg flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <span className="p-1 rounded-md bg-cyan-500/10 text-cyan-500">
                <FiCpu className="w-4 h-4" />
              </span>
              <span>Doctor AI Chatbot</span>
            </div>

            {/* Code Window Card */}
            <div className="w-full card-theme rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-card)]">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Tab Name */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  <FiCode className="w-3.5 h-3.5 text-blue-500" />
                  <span>developer.py</span>
                </div>

                {/* Copy Code Button */}
                <button
                  type="button"
                  onClick={handleCopyCode}
                  aria-label="Copy developer code snippet"
                  title="Copy code"
                  className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-blue-500 hover:bg-[var(--bg-pill)] transition-colors"
                >
                  {copied ? <FiCheck className="w-4 h-4 text-emerald-500" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-[var(--bg-card)]">
                <div className="text-[var(--text-muted)] mb-2 italic"># Mahlet Alemu — Developer Profile</div>
                
                <p>
                  <span className="text-purple-400 font-semibold">class</span>{' '}
                  <span className="text-yellow-400 font-semibold">SoftwareDeveloper</span>
                  <span className="text-[var(--text-primary)]">:</span>
                </p>

                <p className="pl-4">
                  <span className="text-purple-400 font-semibold">def</span>{' '}
                  <span className="text-blue-400">__init__</span>
                  <span className="text-[var(--text-primary)]">(self):</span>
                </p>

                <p className="pl-8">
                  <span className="text-cyan-400">self</span>.name ={' '}
                  <span className="text-emerald-400">&quot;Mahlet Alemu&quot;</span>
                </p>

                <p className="pl-8">
                  <span className="text-cyan-400">self</span>.role ={' '}
                  <span className="text-emerald-400">&quot;Software Developer&quot;</span>
                </p>

                <p className="pl-8">
                  <span className="text-cyan-400">self</span>.university ={' '}
                  <span className="text-emerald-400">&quot;University of Gondar&quot;</span>
                </p>

                <p className="pl-8">
                  <span className="text-cyan-400">self</span>.graduation ={' '}
                  <span className="text-emerald-400">&quot;June 23, 2026&quot;</span>
                </p>

                <p className="pl-8">
                  <span className="text-cyan-400">self</span>.location ={' '}
                  <span className="text-emerald-400">&quot;Ethiopia&quot;</span>
                </p>

                <p className="pl-8 mt-2 text-[var(--text-muted)] italic">
                  # Core Interests &amp; Technologies
                </p>

                <p className="pl-8">
                  <span className="text-cyan-400">self</span>.passions = [
                </p>
                <p className="pl-12 text-emerald-400">&quot;Software Development&quot;,</p>
                <p className="pl-12 text-emerald-400">&quot;Web Development&quot;,</p>
                <p className="pl-12 text-emerald-400">&quot;Python&quot;,</p>
                <p className="pl-12 text-emerald-400">&quot;Machine Learning&quot;,</p>
                <p className="pl-12 text-emerald-400">&quot;Artificial Intelligence&quot;,</p>
                <p className="pl-8">]</p>

                <p className="pl-8 mt-2">
                  <span className="text-cyan-400">self</span>.featured_work ={' '}
                  <span className="text-emerald-400">&quot;Doctor AI&quot;</span>
                </p>

                <p className="pl-4 mt-3">
                  <span className="text-purple-400 font-semibold">def</span>{' '}
                  <span className="text-blue-400">build_future</span>
                  <span className="text-[var(--text-primary)]">(self):</span>
                </p>
                <p className="pl-8">
                  <span className="text-purple-400 font-semibold">return</span>{' '}
                  <span className="text-emerald-400">&quot;Innovative, scalable &amp; intelligent code.&quot;</span>
                </p>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    UTF-8
                  </span>
                  <span>Python 3.12</span>
                </div>
                <div>
                  <span className="text-blue-400">git:(</span>
                  <span className="text-amber-400">main</span>
                  <span className="text-blue-400">)</span> ✓
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
