/**
 * Skills Data Configuration
 * Organized skill categories strictly matching Mahlet Alemu's qualifications
 * No percentage bars used — categorized with semantic badges and modern styling
 */

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    categoryBadge: 'Client-Side',
    description: 'Crafting responsive, accessible, and high-performance user interfaces.',
    skills: [
      { name: 'HTML', tag: 'Markup', level: 'Proficient' },
      { name: 'CSS', tag: 'Styling', level: 'Proficient' },
      { name: 'JavaScript', tag: 'Core', level: 'Advanced' },
      { name: 'React', tag: 'Framework', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    categoryBadge: 'Server-Side',
    description: 'Building reliable REST APIs, server logic, and scalable web services.',
    skills: [
      { name: 'Python', tag: 'Primary', level: 'Advanced' },
      { name: 'Flask', tag: 'Microframework', level: 'Proficient' },
      { name: 'PHP', tag: 'Web Engine', level: 'Intermediate' },
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    categoryBadge: 'Data Persistence',
    description: 'Relational data modeling, query optimization, and schema design.',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational / ACID', level: 'Proficient' },
      { name: 'MySQL', tag: 'Relational', level: 'Proficient' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    categoryBadge: 'Intelligent Systems',
    description: 'Natural language processing, predictive models, and conversational agents.',
    skills: [
      { name: 'Machine Learning', tag: 'Models', level: 'Core' },
      { name: 'NLP', tag: 'Text & Voice', level: 'Specialization' },
      { name: 'Python', tag: 'AI Ecosystem', level: 'Advanced' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    categoryBadge: 'Workflow & DevOps',
    description: 'Modern version control, code editors, and development workflows.',
    skills: [
      { name: 'Git', tag: 'Version Control', level: 'Essential' },
      { name: 'GitHub', tag: 'Collaboration', level: 'Daily' },
      { name: 'VS Code', tag: 'Editor & Debugger', level: 'Daily' },
    ],
  },
  {
    id: 'cs-foundations',
    title: 'Computer Science Foundations',
    categoryBadge: 'Theory & Architecture',
    description: 'Algorithmic efficiency, optimization, and software engineering rigor.',
    skills: [
      { name: 'Algorithms', tag: 'Analysis & Design', level: 'Foundational' },
      { name: 'Data Structures', tag: 'Trees, Graphs, Arrays', level: 'Foundational' },
      { name: 'Dynamic Programming', tag: 'Optimization', level: 'Advanced' },
      { name: 'Software Engineering', tag: 'SDLC & Architecture', level: 'Core' },
    ],
  },
];

export default SKILL_CATEGORIES;
