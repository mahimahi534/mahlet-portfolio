import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import { LINKS, NAV_ITEMS } from '../config/links';
import { SITE_CONFIG } from '../config/site';
import ThemeToggle from './ThemeToggle';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to update sticky navbar styles and active section indicator
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll (only matching rendered sections with content)
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
        (el) => el && el.offsetHeight > 50
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80; // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-glass shadow-md shadow-slate-900/5 dark:shadow-black/20 border-b border-[var(--border-subtle)] py-3.5 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={`${SITE_CONFIG.name} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:scale-105 group-hover:shadow-blue-500/25 transition-all">
              &lt;MA /&gt;
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[11px] font-medium text-[var(--text-muted)] -mt-1 hidden sm:block">
                {SITE_CONFIG.shortTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <ul className="flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-blue-500 font-semibold bg-blue-500/10'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-blue-500 rounded-full" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-5 w-[1px] bg-[var(--border-subtle)] mx-2 xl:mx-3" />

            {/* Desktop Action Buttons: GitHub & Theme Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)] hover:border-blue-500 hover:text-blue-500 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                title="View Mahlet Alemu's GitHub Profile"
              >
                <FiGithub className="w-4 h-4 text-blue-500" />
                <span>GitHub</span>
                <FiExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </a>

              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </nav>

          {/* Medium Screen / Tablet Navigation (compact) */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-blue-500 transition-colors"
              title="GitHub Profile"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-blue-500 transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Screen Controls (Theme Toggle & Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] focus:outline-none hover:border-blue-500 transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-4 border-t border-[var(--border-subtle)] bg-[var(--bg-card)]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[var(--border-subtle)] animate-in fade-in slide-in-from-top-4 duration-200">
            <ul className="flex flex-col gap-1.5 mb-5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-500/10 text-blue-500 font-semibold'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:text-blue-500'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all"
              >
                <FiGithub className="w-5 h-5" />
                <span>Visit GitHub Profile</span>
                <FiExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
