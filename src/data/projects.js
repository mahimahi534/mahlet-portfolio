import { LINKS } from '../config/links';

/**
 * Projects Data
 * Real project details strictly adhering to Mahlet Alemu's authentic portfolio work
 * No fake URLs, no fake live demos, no fabricated statistics
 */

export const PROJECTS_DATA = {
  featured: {
    id: 'doctor-ai',
    title: 'Doctor AI – Voice-Based Healthcare Support Chatbot',
    shortTitle: 'Doctor AI',
    type: 'Final Year Project',
    isFeatured: true,
    description:
      'Doctor AI is a voice and text-based healthcare support chatbot developed as a final-year Computer Science project. It is designed to provide healthcare-related guidance using natural language processing, medical knowledge, and basic risk assessment.',
    mainAreas: [
      'Pregnancy-related health support',
      'Diabetes management',
      'Mental health support',
    ],
    importantNotice:
      'The system is designed as a healthcare support tool and is not intended to replace medical professionals.',
    technologies: [
      'React Native',
      'Python',
      'NLP',
      'Machine Learning',
      'PostgreSQL',
    ],
    githubUrl: LINKS.doctorAI, // https://github.com/mahimahi534/Doctor-AI-Voice-Based-Healthcare-Chatbot
    demoUrl: null, // No live demo provided - strictly kept null
    badge: 'Featured · Final Year Project',
  },

  otherProjects: [
    {
      id: 'ethiopian-tour-guide',
      title: 'Ethiopian Tour Guide Agency',
      type: 'Web Platform',
      description:
        'A web-based tourism management platform designed for Ethiopian travel services, including tours, bookings, blogs, users, and administrative management.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
      githubUrl: null, // No public URL provided - strictly kept null
      demoUrl: null,
      badge: 'Full Stack Web',
    },
    {
      id: 'weatherwise',
      title: 'WeatherWise',
      type: 'Machine Learning Application',
      description:
        'A machine-learning weather prediction application that processes weather data and predicts weather conditions.',
      technologies: [
        'Python',
        'Flask',
        'Machine Learning',
        'Random Forest',
        'Data Processing',
      ],
      githubUrl: null, // No public URL provided - strictly kept null
      demoUrl: null,
      badge: 'ML & Predictive Analytics',
    },
    {
      id: 'ethiopian-property-price',
      title: 'Ethiopian Property Price Prediction',
      type: 'Machine Learning Model',
      description:
        'A machine-learning application designed to estimate Ethiopian property prices using a trained machine-learning model.',
      technologies: ['Python', 'Flask', 'LightGBM', 'Machine Learning'],
      githubUrl: null, // No public URL provided - strictly kept null
      demoUrl: null,
      badge: 'ML & Valuation Model',
    },
    {
      id: 'react-web-projects',
      title: 'React Web Development Projects',
      type: 'Frontend Collection',
      description:
        'A collection of practical frontend projects developed while learning and applying modern web development concepts.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'],
      githubUrl: null, // No public URL provided - strictly kept null
      demoUrl: null,
      badge: 'Frontend Engineering',
    },
  ],
};

export default PROJECTS_DATA;
