import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * Reusable ThemeToggle Component
 * Allows seamless switching between Dark and Light mode
 */
export const ThemeToggle = ({ darkMode, setDarkMode, className = '' }) => {
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      {darkMode ? (
        <FiSun className="w-5 h-5 text-amber-400 animate-spin-slow transition-transform" />
      ) : (
        <FiMoon className="w-5 h-5 text-slate-700 transition-transform" />
      )}
    </button>
  );
};

export default ThemeToggle;
