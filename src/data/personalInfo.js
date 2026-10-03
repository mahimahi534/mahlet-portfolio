import { LINKS } from '../config/links';
import { SITE_CONFIG } from '../config/site';

/**
 * Personal Information for Mahlet Alemu
 * Central structured data source for the portfolio
 */
export const personalInfo = {
  name: SITE_CONFIG.name,
  firstName: SITE_CONFIG.firstName,
  title: SITE_CONFIG.title,
  shortTitle: SITE_CONFIG.shortTitle,
  location: SITE_CONFIG.location,
  
  education: {
    institution: SITE_CONFIG.university,
    degree: SITE_CONFIG.degree,
    fieldOfStudy: 'Computer Science',
    graduationDate: SITE_CONFIG.graduationDate,
    formattedGraduation: 'Graduation: June 23, 2026',
    status: 'Graduating June 23, 2026',
  },

  github: LINKS.github,
  doctorAI: LINKS.doctorAI,
  portfolioUrl: LINKS.portfolio,

  // Professional introduction highlighting core interests
  introduction: "I am a Computer Science graduate from the University of Gondar with a deep passion for software development, modern web applications, Python engineering, machine learning, and AI. Dedicated to architecting robust, scalable systems and building intelligent, user-focused digital solutions.",

  focusAreas: [
    { name: 'Software Development', icon: 'FiCode' },
    { name: 'Web Development', icon: 'FiGlobe' },
    { name: 'Python', icon: 'FiTerminal' },
    { name: 'Machine Learning', icon: 'FiCpu' },
    { name: 'AI Solutions', icon: 'FiActivity' },
  ],

  codeSnippet: {
    fileName: 'mahlet_developer.py',
    language: 'python',
    lines: [
      { line: 1, text: 'class SoftwareDeveloper:' },
      { line: 2, text: '    def __init__(self):' },
      { line: 3, text: '        self.name = "Mahlet Alemu"' },
      { line: 4, text: '        self.title = "Computer Science Graduate"' },
      { line: 5, text: '        self.university = "University of Gondar"' },
      { line: 6, text: '        self.graduation = "June 23, 2026"' },
      { line: 7, text: '        self.location = "Ethiopia"' },
      { line: 8, text: '        self.passions = [' },
      { line: 9, text: '            "Software Development",' },
      { line: 10, text: '            "Web Development",' },
      { line: 11, text: '            "Python",' },
      { line: 12, text: '            "Machine Learning",' },
      { line: 13, text: '            "Artificial Intelligence",' },
      { line: 14, text: '        ]' },
      { line: 15, text: '        self.featured_work = "Doctor AI"' },
      { line: 16, text: '' },
      { line: 17, text: '    def create_impact(self):' },
      { line: 18, text: '        return "Building intelligent & scalable software."' },
    ],
  },
};

export default personalInfo;
