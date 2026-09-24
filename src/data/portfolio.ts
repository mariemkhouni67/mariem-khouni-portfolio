export interface ProjectDetail {
  overview: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  architecture: string
  challenges: string
  whatILearned: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  technologies: string[]
  highlights: string[]
  description: string[]
  modalDetails: ProjectDetail
  githubUrl?: string
  liveUrl?: string
  gradient: string
  themeColor: string
}

export interface SkillCategory {
  title: string
  skills: { name: string; isAiHighlight?: boolean }[]
}

export interface ExperienceItem {
  role: string
  company: string
  companyFullName: string
  location: string
  period: string
  points: string[]
}

export interface EducationItem {
  degree: string
  degreeFr: string
  institution: string
  institutionShort: string
  period: string
  status: string
}

export interface CertificationItem {
  name: string
  issuer: string
  status: 'Completed' | 'In Progress'
}

export interface LanguageItem {
  language: string
  proficiency: string
  levelTag: string
}

export const PERSONAL_INFO = {
  name: 'Mariem Khouni',
  shortTitle: 'Software Engineering Student & Full-Stack Developer',
  tagline: 'Building modern web applications and AI-powered experiences.',
  location: 'Nabeul, Tunisia',
  phone: '+216 94 852 832',
  email: 'mariem.khouni@outlook.com',
  linkedin: 'https://linkedin.com/in/mariem-khouni',
  github: 'https://github.com',
  graduationDate: 'June 2027',
  internshipTarget: 'Final-year internship (PFE) starting February 2027',
  summary:
    'Software Engineering student specializing in Web Development and Information Systems, seeking a final-year internship (PFE) starting February 2027. Full-stack developer experienced in building web applications with React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. Hands-on experience integrating AI capabilities including LLM APIs, RAG pipelines, embeddings, chatbots, and prompt engineering. Strong interest in AI-powered applications, scalable web systems, and modern software development. Expected graduation: June 2027.',
  aboutBadges: [
    { title: 'Software Engineering', desc: 'System modeling, algorithms & architecture' },
    { title: 'Full-Stack Development', desc: 'Modern reactive UIs & scalable APIs' },
    { title: 'AI & RAG', desc: 'LLM integration, embeddings & AI agents' },
    { title: 'Modern Web Applications', desc: 'Responsive, performant & user-centric' },
  ],
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Prisma' },
    ],
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'LLM API Integration', isAiHighlight: true },
      { name: 'DeepSeek', isAiHighlight: true },
      { name: 'Retrieval-Augmented Generation (RAG)', isAiHighlight: true },
      { name: 'ChromaDB', isAiHighlight: true },
      { name: 'BGE-M3 Embeddings', isAiHighlight: true },
      { name: 'Prompt Engineering', isAiHighlight: true },
      { name: 'AI Agents', isAiHighlight: true },
      { name: 'MCP', isAiHighlight: true },
      { name: 'A2A', isAiHighlight: true },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'Tools & UI/UX',
    skills: [
      { name: 'Figma' },
      { name: 'Postman' },
      { name: 'VS Code' },
      { name: 'UI/UX Design Principles' },
    ],
  },
  {
    title: 'Methodologies',
    skills: [
      { name: 'Agile' },
      { name: 'Scrum' },
      { name: 'Technical Documentation' },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'studymate',
    title: 'StudyMate',
    subtitle: 'Full-stack AI Study Platform',
    category: 'AI & Full-Stack Platform',
    themeColor: '#6366F1',
    gradient: 'from-indigo-600 via-indigo-500 to-cyan-400',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MySQL',
      'Docker',
      'DeepSeek',
      'RAG',
      'ChromaDB',
      'BGE-M3',
    ],
    highlights: [
      'AI course summaries',
      'RAG chatbot',
      'Adaptive quizzes',
      'Flashcards',
      'Study planning',
      'Streak tracking',
      'Gamification',
      'Bilingual UI',
    ],
    description: [
      'Developed a full-stack AI-powered study platform using React, TypeScript, Node.js, MySQL, and Docker.',
      'Integrated DeepSeek for automated course summaries.',
      'Implemented a Retrieval-Augmented Generation (RAG) chatbot using ChromaDB and BGE-M3 embeddings.',
      'Implemented adaptive quizzes.',
      'Implemented spaced-repetition flashcards.',
      'Implemented study planning.',
      'Implemented streak tracking.',
      'Implemented gamification.',
      'Added a bilingual user interface.',
    ],
    modalDetails: {
      overview:
        'StudyMate is a full-stack AI-powered educational platform designed to elevate the student learning journey through automated intelligence, personalized retrieval, and bilingual accessibility.',
      problem:
        'Students encounter information overload with complex course material and lack tailored, immediate question-answering tools grounded directly in their curriculum.',
      solution:
        'A comprehensive study platform unifying automated DeepSeek summaries, a conversational RAG chatbot powered by ChromaDB vector storage and BGE-M3 embeddings, adaptive testing, spaced repetition flashcards, and gamified streak tracking.',
      features: [
        'Automated course summaries generated by DeepSeek',
        'Retrieval-Augmented Generation (RAG) chatbot backed by ChromaDB and BGE-M3 embeddings',
        'Adaptive quizzes matching student proficiency levels',
        'Spaced-repetition flashcards for optimized long-term memory retention',
        'Intelligent study planning and schedule tracking',
        'Gamification mechanics including streaks and learning milestones',
        'Bilingual user interface for flexible language preferences',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'MySQL',
        'Docker',
        'DeepSeek',
        'RAG',
        'ChromaDB',
        'BGE-M3',
      ],
      architecture:
        'A React and TypeScript client layer connected via REST endpoints to a Node.js backend. Relational user, progress, and study data are stored in MySQL. The AI pipeline connects ChromaDB for vector retrieval with BGE-M3 dense embeddings and DeepSeek LLM for summarization and contextual chat, fully containerized with Docker.',
      challenges:
        'Orchestrating dense embedding retrieval via BGE-M3 and ChromaDB with low latency, handling bilingual text tokenization and UI switching, and synchronizing spaced-repetition schedules with gamified streak tracking.',
      whatILearned:
        'End-to-end RAG architecture design, practical vector database operations, prompt engineering for academic summarization, Docker container orchestration, and stateful full-stack TypeScript application design.',
    },
    // No URLs invented as per strict instructions:
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'travelscape',
    title: 'TravelScape',
    subtitle: 'Full-stack MERN Travel Booking Platform',
    category: 'Full-Stack Web & 3D UI',
    themeColor: '#06B6D4',
    gradient: 'from-cyan-500 via-teal-500 to-indigo-600',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Leaflet'],
    highlights: [
      '3D animated hero',
      'Glassmorphic UI',
      'Interactive maps',
      'Multilingual chatbot',
      'Search',
      'Bookings',
      'Favorites',
      'Reviews',
      'Admin dashboard',
    ],
    description: [
      'Developed a full-stack travel booking platform using the MERN stack.',
      'Built an interactive 3D animated interface.',
      'Designed a glassmorphic UI.',
      'Integrated Leaflet maps.',
      'Added a multilingual chatbot.',
      'Implemented search.',
      'Implemented bookings.',
      'Implemented favorites.',
      'Implemented reviews.',
      'Built an admin CRUD dashboard.',
    ],
    modalDetails: {
      overview:
        'TravelScape is an engaging, full-stack travel discovery and booking platform built on the MERN stack, offering an interactive 3D user experience, geospatial mapping, and complete reservation capabilities.',
      problem:
        'Modern travel planning requires engaging visual discovery, intuitive geographic exploration, and responsive administrative tools for bookings and reviews.',
      solution:
        'An interactive travel application combining 3D hero animation, elegant glassmorphism, interactive Leaflet geographic mapping, multilingual assistant capabilities, and a complete admin management system.',
      features: [
        'Interactive 3D animated hero section',
        'Modern glassmorphic aesthetic and responsive UI',
        'Interactive Leaflet map exploration for travel locations',
        'Multilingual conversational travel chatbot',
        'Real-time destination search and filtering',
        'End-to-end booking and reservation workflow',
        'User favorites and bookmarking functionality',
        'Community reviews and destination rating system',
        'Admin CRUD dashboard for managing listings and bookings',
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Leaflet'],
      architecture:
        'Client-side single-page application built with React, featuring Leaflet for mapping. Communicates through RESTful API routes with an Express.js and Node.js server, persisting destination, user, booking, and review records in MongoDB.',
      challenges:
        'Balancing interactive 3D elements and smooth map rendering with web performance, handling multilingual bot conversations, and designing a secure role-based admin CRUD workflow.',
      whatILearned:
        'Full-stack MERN development lifecycle, RESTful API design patterns, Leaflet geographic integrations, component state synchronization, and modern glassmorphic design principles.',
    },
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'decathlon-posture-coach',
    title: 'Decathlon Posture Coach',
    subtitle: 'AI-powered Fitness App',
    category: 'AI & Health Tech',
    themeColor: '#3B82F6',
    gradient: 'from-blue-600 via-indigo-600 to-sky-400',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'DeepSeek R1'],
    highlights: [
      'AI exercise recommendations',
      '873+ exercises',
      'Product matching',
      'Personalized recommendations',
    ],
    description: [
      'Developed an AI-powered fitness application.',
      'Integrated DeepSeek R1 to generate personalized exercise recommendations.',
      'Built a recommendation workflow covering 873+ exercises.',
      'Matched recommended exercises with Decathlon products.',
    ],
    modalDetails: {
      overview:
        'Decathlon Posture Coach is an AI-powered fitness application that pairs personalized posture correction routines with relevant Decathlon athletic products using DeepSeek R1 reasoning.',
      problem:
        'Users frequently suffer from postural imbalances and struggle to find targeted corrective exercise plans alongside the specific equipment required for proper execution.',
      solution:
        'An intelligent recommendation engine utilizing DeepSeek R1 to analyze posture requirements across a comprehensive library of 873+ exercises, automatically linking routines to matching Decathlon gear.',
      features: [
        'Personalized AI exercise recommendations powered by DeepSeek R1',
        'Extensive exercise database covering 873+ exercises',
        'Automated product matching connecting workouts to Decathlon equipment',
        'Streamlined, responsive user experience styled with Tailwind CSS',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'DeepSeek R1'],
      architecture:
        'React and TypeScript frontend styled with Tailwind CSS, querying a Node.js API backend that coordinates DeepSeek R1 reasoning prompts against an 873+ exercise dataset and Decathlon product catalog.',
      challenges:
        'Engineering accurate prompts for DeepSeek R1 to ensure ergonomically sound exercise recommendations and consistently mapping them to the proper Decathlon product inventory.',
      whatILearned:
        'Prompt optimization with reasoning models (DeepSeek R1), catalog search and attribute matching architectures, and delivering clean, responsive fitness UIs.',
    },
    githubUrl: undefined,
    liveUrl: undefined,
  },
]

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'Intern',
    company: 'SONEDE',
    companyFullName: "Société Nationale d'Exploitation et de Distribution des Eaux",
    location: 'Tunisia',
    period: 'Internship',
    points: [
      'Completed an internship focused on information systems and business processes within a national public utility.',
      'Gained practical exposure to information-system processes and organizational workflows.',
    ],
  },
]

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Software Engineering and Information Systems",
    degreeFr: "Licence en Génie Logiciel et Systèmes d'Information -- ISSAT",
    institution: "Institut Supérieur des Sciences Appliquées et de Technologie",
    institutionShort: 'ISSAT',
    period: '2024 -- Expected June 2027',
    status: 'In Progress (Expected Graduation: June 2027)',
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Web Development Certification',
    issuer: 'Udemy',
    status: 'Completed',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    status: 'Completed',
  },
  {
    name: 'AI Agents: Intensive Vibe Coding Course',
    issuer: 'Google',
    status: 'In Progress',
  },
]

export const LANGUAGES: LanguageItem[] = [
  {
    language: 'Arabic',
    proficiency: 'Native',
    levelTag: 'Native speaker',
  },
  {
    language: 'French',
    proficiency: 'Fluent',
    levelTag: 'Bilingual proficiency',
  },
  {
    language: 'English',
    proficiency: 'Professional Working Proficiency',
    levelTag: 'Professional working',
  },
  {
    language: 'German',
    proficiency: 'Basic',
    levelTag: 'Elementary proficiency',
  },
]
