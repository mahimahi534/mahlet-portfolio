import React from 'react';
import { 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiCpu, 
  FiTool, 
  FiLayers, 
  FiCheckCircle 
} from 'react-icons/fi';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaPython, 
  FaPhp, 
  FaGitAlt, 
  FaGithub, 
  FaBrain 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiFlask, 
  SiPostgresql, 
  SiMysql 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const Skills = () => {
  // Defined skill categories strictly matching user specifications
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      badge: 'Client-Side',
      icon: <FiLayout className="w-5 h-5 text-blue-500" />,
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="w-5 h-5 text-orange-500" />, type: 'Markup' },
        { name: 'CSS', icon: <FaCss3Alt className="w-5 h-5 text-blue-500" />, type: 'Styling' },
        { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-400" />, type: 'Language' },
        { name: 'React', icon: <FaReact className="w-5 h-5 text-cyan-400" />, type: 'Library / UI' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      badge: 'Server-Side',
      icon: <FiServer className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: 'Python', icon: <FaPython className="w-5 h-5 text-sky-400" />, type: 'Primary Language' },
        { name: 'Flask', icon: <SiFlask className="w-5 h-5 text-slate-300" />, type: 'Microframework' },
        { name: 'PHP', icon: <FaPhp className="w-5 h-5 text-indigo-400" />, type: 'Web Backend' },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      badge: 'Persistence',
      icon: <FiDatabase className="w-5 h-5 text-cyan-500" />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-blue-400" />, type: 'Relational DBMS' },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-amber-500" />, type: 'Relational DBMS' },
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI / Machine Learning',
      badge: 'Intelligent Systems',
      icon: <FiCpu className="w-5 h-5 text-purple-500" />,
      skills: [
        { name: 'Machine Learning', icon: <FaBrain className="w-5 h-5 text-purple-400" />, type: 'Algorithms & Models' },
        { name: 'NLP', icon: <FiCpu className="w-5 h-5 text-cyan-400" />, type: 'Natural Language Processing' },
        { name: 'Python', icon: <FaPython className="w-5 h-5 text-sky-400" />, type: 'AI & Data Ecosystem' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      badge: 'Workflow & IDE',
      icon: <FiTool className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt className="w-5 h-5 text-rose-500" />, type: 'Version Control' },
        { name: 'GitHub', icon: <FaGithub className="w-5 h-5 text-slate-300" />, type: 'Collaboration & CI' },
        { name: 'VS Code', icon: <VscVscode className="w-5 h-5 text-blue-400" />, type: 'Primary Code Editor' },
      ],
    },
    {
      id: 'computer-science',
      title: 'Computer Science',
      badge: 'Foundations',
      icon: <FiLayers className="w-5 h-5 text-amber-500" />,
      skills: [
        { name: 'Algorithms', icon: <FiCheckCircle className="w-5 h-5 text-amber-400" />, type: 'Analysis & Complexity' },
        { name: 'Data Structures', icon: <FiLayers className="w-5 h-5 text-emerald-400" />, type: 'Trees, Graphs, Queues' },
        { name: 'Dynamic Programming', icon: <FiCpu className="w-5 h-5 text-indigo-400" />, type: 'Optimization Problems' },
        { name: 'Software Engineering', icon: <FiLayout className="w-5 h-5 text-blue-400" />, type: 'SDLC, Clean Architecture' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[var(--bg-base)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-theme text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <FiLayers className="w-3.5 h-3.5 text-blue-500" />
            <span>Technical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Skills &amp;{' '}
            <span className="text-gradient">Competencies</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A structured breakdown of my technical stack across frontend, backend, databases, AI/ML, developer tools, and computer science foundations.
          </p>
        </div>

        {/* 6 Category Grid - Fully Responsive, No Percentage Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="card-theme p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[var(--bg-pill)]">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    {category.badge}
                  </span>
                </div>

                {/* Skill Chips / Badges (No percentage bars) */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] hover:border-blue-500/40 hover:bg-[var(--bg-card-hover)] transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 p-1.5 rounded-lg bg-[var(--bg-card)] shadow-xs group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-semibold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-medium text-[var(--text-muted)] group-hover:text-blue-500 transition-colors">
                        {skill.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Indicator */}
              <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>{category.skills.length} core competencies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Rigorous CS Foundation Footer Callout */}
        <div className="mt-10 card-theme p-6 rounded-2xl bg-gradient-to-r from-blue-950/20 via-slate-900/10 to-indigo-950/20 border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
              <FiLayers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                Grounded in Rigorous Computer Science Fundamentals
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                BSc Computer Science graduate from the University of Gondar, applying algorithmic thinking and clean architecture to every project.
              </p>
            </div>
          </div>

          <span className="shrink-0 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-[var(--bg-pill)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
            June 23, 2026
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
