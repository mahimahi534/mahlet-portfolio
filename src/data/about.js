import { SITE_CONFIG } from '../config/site';

/**
 * About Section Structured Content
 * Highlights Mahlet Alemu's degree, university, graduation date, and core focus areas
 */

export const ABOUT_DATA = {
  name: SITE_CONFIG.name,
  degree: 'BSc Computer Science',
  university: 'University of Gondar',
  graduationDate: 'June 23, 2026',
  graduationStatus: 'Graduated June 23, 2026',
  location: 'Ethiopia',
  
  bioLead: "I am a Computer Science graduate from the University of Gondar with a deep focus on software engineering, web development, and intelligent computing.",

  pillars: [
    {
      id: 'software-web',
      title: 'Software & Web Development',
      badge: 'Core Specialty',
      description: 'Passionate about engineering full-stack digital solutions with clean architectures, responsive styling, and modern frameworks like React, JavaScript, HTML, and CSS.',
      icon: 'FiCode',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'python-ai-nlp',
      title: 'Python, AI & NLP',
      badge: 'Innovation Focus',
      description: 'Developing intelligent systems, voice-based chatbots (Doctor AI), and machine learning pipelines using Python to translate complex data into practical, user-centric tools.',
      icon: 'FiCpu',
      color: 'from-cyan-500 to-indigo-500',
    },
    {
      id: 'problem-solving',
      title: 'Analytical Problem Solving',
      badge: 'Algorithmic Mindset',
      description: 'Applying rigorous computer science principles—algorithms, data structures, and dynamic programming—to optimize code performance and solve complex real-world challenges.',
      icon: 'FiTarget',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      badge: 'Growth Driven',
      description: 'Committed to lifelong technical growth, exploring emerging AI breakthroughs, modern engineering best practices, and evolving tools to deliver modern solutions.',
      icon: 'FiTrendingUp',
      color: 'from-purple-500 to-pink-500',
    },
  ],

  highlights: [
    { label: 'Degree', value: 'BSc in Computer Science' },
    { label: 'University', value: 'University of Gondar' },
    { label: 'Milestone', value: 'Graduated June 23, 2026' },
    { label: 'Primary Language', value: 'Python & JavaScript' },
    { label: 'Specialization', value: 'Web Development & AI / NLP' },
  ],
};

export default ABOUT_DATA;
