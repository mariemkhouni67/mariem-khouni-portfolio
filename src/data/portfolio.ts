export interface ProjectDetail {
  overview: string
  problem: string
  solution: string
  architecture: string
  technologies: string[]
  aiComponents?: string[]
  features: string[]
  challenges: string
  whatILearned: string
  videoDemoUrl?: string
  posterUrl?: string
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
  videoUrl?: string
  gradient: string
  themeColor: string
}

export interface SkillItem {
  name: string
  category: string
  description: string
  isAiHighlight?: boolean
  relatedProjects?: string[]
}

export interface SkillCategory {
  title: string
  skills: SkillItem[]
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
  certificateFile?: string
}

export interface LanguageItem {
  language: string
  proficiency: string
  levelTag: string
}

export interface AIConcept {
  id: string
  name: string
  tag: string
  description: string
  workflowRole: string
}

export interface WorkflowStep {
  step: string
  title: string
  action: string
  agentRole: string
  iconType: string
}

export const PERSONAL_INFO = {
  name: 'Mariem Khouni',
  shortTitle: 'Software Engineering Student & Full-Stack Developer',
  tagline: 'Building modern web applications and AI-powered experiences.',
  location: 'Nabeul, Tunisia',
  phone: '+216 94 852 832',
  email: 'mariem.khouni@outlook.com',
  linkedin: 'https://linkedin.com/in/mariem-khouni',
  github: 'https://github.com/mariemkhouni67',
  graduationDate: 'June 2027',
  internshipTarget: 'Final-year internship (PFE) starting February 2027',
  profilePhotoPath: '/images/profile.jpg',
  summary:
    'Software Engineering student specializing in Web Development and Information Systems, seeking a final-year internship (PFE) starting February 2027. Full-stack developer experienced in building web applications with React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. Hands-on experience integrating AI capabilities including LLM APIs, RAG pipelines, embeddings, chatbots, and prompt engineering. Strong interest in AI-powered applications, scalable web systems, and modern software development. Expected graduation: June 2027.',
  aboutBadges: [
    { title: 'Software Engineering', desc: 'System modeling, algorithms & architecture' },
    { title: 'Full-Stack Development', desc: 'Modern reactive UIs & scalable APIs' },
    { title: 'AI & RAG', desc: 'LLM integration, embeddings & AI agents' },
    { title: 'Modern Web Applications', desc: 'Responsive, performant & user-centric' },
  ],
}

export const HERO_ROTATING_ROLES = [
  'Full-Stack Developer',
  'AI Builder',
  'React Developer',
  'Backend Developer',
  'AI Agents Explorer',
]

export const AI_AGENT_CONCEPTS: AIConcept[] = [
  {
    id: 'ai-agents',
    name: 'AI Agents',
    tag: 'Agentic Workflows',
    description:
      'Exploring agent-based workflows where AI models can reason, use tools, and execute multi-step tasks.',
    workflowRole: 'Autonomous Reasoning & Task Orchestration',
  },
  {
    id: 'mcp',
    name: 'MCP',
    tag: 'Protocol Standard',
    description:
      'Exploring Model Context Protocol for connecting AI systems with external tools and services.',
    workflowRole: 'Standardized Tool Interface & Context Exchange',
  },
  {
    id: 'rag',
    name: 'RAG',
    tag: 'Context Augmentation',
    description:
      'Retrieval-Augmented Generation workflows using vector search and embeddings.',
    workflowRole: 'Dynamic Context Retrieval from Vector Databases',
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    tag: 'Reasoning Engine',
    description:
      'Leveraging DeepSeek models and reasoning engines (DeepSeek R1) for automated summaries and analytical queries.',
    workflowRole: 'Automated Summarization & Inferential Reasoning',
  },
  {
    id: 'chromadb',
    name: 'ChromaDB',
    tag: 'Vector Storage',
    description:
      'Vector database used for persistent embedding storage and high-similarity context retrieval in RAG pipelines.',
    workflowRole: 'Vector Store & Nearest Neighbor Search',
  },
  {
    id: 'bge-m3',
    name: 'BGE-M3 Embeddings',
    tag: 'Dense Representation',
    description:
      'Dense multi-lingual vector representations supporting multi-modal search and RAG contexts.',
    workflowRole: 'High-Dimensional Semantic Embedding Generation',
  },
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    tag: 'Structured Input',
    description:
      'Designing structured instructions, system roles, and schemas for deterministic model outputs.',
    workflowRole: 'Context Framing & Instruction Tuning',
  },
  {
    id: 'llm-api',
    name: 'LLM API Integration',
    tag: 'Service Connectivity',
    description:
      'Integrating state-of-the-art language model APIs into robust Node.js and full-stack pipelines.',
    workflowRole: 'API Middleware & Streaming Communication',
  },
  {
    id: 'a2a',
    name: 'A2A',
    tag: 'Multi-Agent Systems',
    description:
      'Exploring Agent-to-Agent communication and cooperative task delegation architectures.',
    workflowRole: 'Inter-Agent Messaging & Coordination',
  },
]

export const CONCEPTUAL_PIPELINE = [
  { label: 'USER', role: 'Human Intent', icon: 'user' },
  { label: 'PROMPT', role: 'Structured Context', icon: 'terminal' },
  { label: 'AI AGENT', role: 'Autonomous Reasoning', icon: 'bot' },
  { label: 'TOOLS', role: 'Functional Capabilities', icon: 'wrench' },
  { label: 'MCP', role: 'Model Context Protocol', icon: 'network' },
  { label: 'RAG / DATABASE', role: 'Vector & Relational Knowledge', icon: 'database' },
  { label: 'LLM', role: 'Inference & Synthesis', icon: 'cpu' },
  { label: 'RESULT', role: 'Production Output', icon: 'sparkles' },
]

export const HOW_I_BUILD_WITH_AI_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Understand',
    action: 'I thoroughly analyze the requirements, problem space, and desired outcome.',
    agentRole: 'Human sets boundaries and domain understanding',
    iconType: 'target',
  },
  {
    step: '02',
    title: 'Plan',
    action: 'I break the problem into modular technical tasks and architecture plans.',
    agentRole: 'Human architectures the system and interfaces',
    iconType: 'git-branch',
  },
  {
    step: '03',
    title: 'Prompt',
    action: 'I provide structured context, type schemas, and technical requirements.',
    agentRole: 'Human constructs precise prompt guidelines',
    iconType: 'terminal',
  },
  {
    step: '04',
    title: 'Build',
    action: 'AI agents help accelerate implementation and scaffold code.',
    agentRole: 'AI Agent assists with modular code generation',
    iconType: 'cpu',
  },
  {
    step: '05',
    title: 'Test',
    action: 'I run unit tests, test edge cases, and verify TypeScript compilation.',
    agentRole: 'Human validates resilience, correctness & types',
    iconType: 'shield-check',
  },
  {
    step: '06',
    title: 'Review',
    action: 'I inspect, debug, and ensure architectural alignment and security.',
    agentRole: 'Human oversees code review and decisions',
    iconType: 'check-circle-2',
  },
  {
    step: '07',
    title: 'Iterate',
    action: 'I refine the implementation until it matches the expected result.',
    agentRole: 'Continuous polish and production validation',
    iconType: 'refresh-cw',
  },
]

export const WORKFLOW_LABELS = [
  'Human',
  'AI Agent',
  'Tools',
  'Code',
  'Testing',
  'Human Review',
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', category: 'Frontend', description: 'Component-driven interactive web applications', relatedProjects: ['StudyMate', 'TravelScape', 'Decathlon Posture Coach'] },
      { name: 'Next.js', category: 'Frontend', description: 'Modern React framework for performant web systems', relatedProjects: ['Full-Stack Architectures'] },
      { name: 'TypeScript', category: 'Frontend', description: 'Strict type safety and robust code maintainability', relatedProjects: ['StudyMate', 'Decathlon Posture Coach'] },
      { name: 'JavaScript', category: 'Frontend', description: 'Core ES6+ scripting, asynchronous programming', relatedProjects: ['TravelScape', 'Web Applications'] },
      { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first styling, glassmorphism, responsive UI', relatedProjects: ['Decathlon Posture Coach', 'Portfolio'] },
      { name: 'HTML', category: 'Frontend', description: 'Semantic, accessible structure and web standards', relatedProjects: ['All Projects'] },
      { name: 'CSS', category: 'Frontend', description: 'Modern layouts, flexbox, grid, and CSS animations', relatedProjects: ['All Projects'] },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', category: 'Backend', description: 'Server-side runtime for high-throughput APIs', relatedProjects: ['StudyMate', 'TravelScape', 'Decathlon Posture Coach'] },
      { name: 'Express.js', category: 'Backend', description: 'RESTful API routing and middleware architectures', relatedProjects: ['TravelScape', 'API Services'] },
      { name: 'REST APIs', category: 'Backend', description: 'Structured JSON communication and endpoint design', relatedProjects: ['StudyMate', 'TravelScape', 'Decathlon Posture Coach'] },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', category: 'Databases', description: 'Relational data modeling and structured query execution', relatedProjects: ['Data Modeling'] },
      { name: 'MongoDB', category: 'Databases', description: 'Document-oriented database for dynamic collections', relatedProjects: ['TravelScape'] },
      { name: 'MySQL', category: 'Databases', description: 'Relational schemas, transactions, and indexing', relatedProjects: ['StudyMate'] },
      { name: 'Prisma', category: 'Databases', description: 'Type-safe ORM for database operations and migrations', relatedProjects: ['Database Systems'] },
    ],
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'LLM API Integration', category: 'AI & Data', description: 'Connecting full-stack apps to frontier model APIs', isAiHighlight: true, relatedProjects: ['StudyMate', 'Decathlon Posture Coach'] },
      { name: 'DeepSeek', category: 'AI & Data', description: 'Automated summaries and reasoning with DeepSeek R1', isAiHighlight: true, relatedProjects: ['StudyMate', 'Decathlon Posture Coach'] },
      { name: 'RAG', category: 'AI & Data', description: 'Retrieval-Augmented Generation for grounded answers', isAiHighlight: true, relatedProjects: ['StudyMate'] },
      { name: 'ChromaDB', category: 'AI & Data', description: 'Vector store for document embeddings and similarity search', isAiHighlight: true, relatedProjects: ['StudyMate'] },
      { name: 'BGE-M3 Embeddings', category: 'AI & Data', description: 'Dense multilingual embeddings for semantic retrieval', isAiHighlight: true, relatedProjects: ['StudyMate'] },
      { name: 'Prompt Engineering', category: 'AI & Data', description: 'Structured prompt design, schemas, and few-shot patterns', isAiHighlight: true, relatedProjects: ['StudyMate', 'Decathlon Posture Coach'] },
      { name: 'AI Agents', category: 'AI & Data', description: 'Exploring agentic decision loops, tools, and execution', isAiHighlight: true, relatedProjects: ['Agentic Exploration'] },
      { name: 'MCP', category: 'AI & Data', description: 'Model Context Protocol for tool and resource integration', isAiHighlight: true, relatedProjects: ['Protocol Integration'] },
      { name: 'A2A', category: 'AI & Data', description: 'Agent-to-Agent multi-agent collaboration architectures', isAiHighlight: true, relatedProjects: ['Multi-Agent Systems'] },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', category: 'Cloud & DevOps', description: 'Cloud fundamentals, resource management, AZ-900 certified', relatedProjects: ['Azure Fundamentals'] },
      { name: 'Git', category: 'Cloud & DevOps', description: 'Version control, branching strategies, and collaboration', relatedProjects: ['All Projects'] },
      { name: 'GitHub', category: 'Cloud & DevOps', description: 'Source code management, repositories, collaboration', relatedProjects: ['All Projects'] },
      { name: 'Docker', category: 'Cloud & DevOps', description: 'Containerization of applications and services', relatedProjects: ['StudyMate'] },
      { name: 'CI/CD', category: 'Cloud & DevOps', description: 'Automated build and deployment pipelines', relatedProjects: ['DevOps Workflows'] },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', category: 'Tools', description: 'UI/UX wireframing, component design systems, prototyping', relatedProjects: ['UI/UX Design'] },
      { name: 'Postman', category: 'Tools', description: 'API endpoint testing, request validation, and documentation', relatedProjects: ['StudyMate', 'TravelScape'] },
      { name: 'VS Code', category: 'Tools', description: 'Primary IDE, debugging, and development environment', relatedProjects: ['All Projects'] },
      { name: 'UI/UX Design Principles', category: 'Tools', description: 'Visual hierarchy, accessibility, and user-centric design', relatedProjects: ['TravelScape', 'Portfolio'] },
    ],
  },
  {
    title: 'Methodologies',
    skills: [
      { name: 'Agile', category: 'Methodologies', description: 'Iterative development, sprint cycles, and adaptive planning', relatedProjects: ['Team Collaboration'] },
      { name: 'Scrum', category: 'Methodologies', description: 'Sprint planning, reviews, and backlog management', relatedProjects: ['ISSAT Projects'] },
      { name: 'Technical Documentation', category: 'Methodologies', description: 'Architecture specifications, API docs, and user guides', relatedProjects: ['Academic & Project Docs'] },
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
    videoUrl: '/videos/studymate-demo.mp4',
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
      aiComponents: [
        'DeepSeek LLM Integration for summarization',
        'ChromaDB Vector Database for context retrieval',
        'BGE-M3 Multilingual Embedding Pipeline',
        'RAG Chatbot with grounded prompt architecture',
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
      videoDemoUrl: '/videos/studymate-demo.mp4',
    },
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
    videoUrl: '/videos/travelscape-demo.mp4',
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
      aiComponents: [
        'Multilingual conversational assistant chatbot',
        'Geospatial coordinate mapping with Leaflet',
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Leaflet'],
      architecture:
        'Client-side single-page application built with React, featuring Leaflet for mapping. Communicates through RESTful API routes with an Express.js and Node.js server, persisting destination, user, booking, and review records in MongoDB.',
      challenges:
        'Balancing interactive 3D elements and smooth map rendering with web performance, handling multilingual bot conversations, and designing a secure role-based admin CRUD workflow.',
      whatILearned:
        'Full-stack MERN development lifecycle, RESTful API design patterns, Leaflet geographic integrations, component state synchronization, and modern glassmorphic design principles.',
      videoDemoUrl: '/videos/travelscape-demo.mp4',
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
    videoUrl: '/videos/decathlon-demo.mp4',
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
      aiComponents: [
        'DeepSeek R1 Reasoning Model Integration',
        '873+ Exercise Recommendation Pipeline',
        'Automated Decathlon Product Matching Algorithm',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'DeepSeek R1'],
      architecture:
        'React and TypeScript frontend styled with Tailwind CSS, querying a Node.js API backend that coordinates DeepSeek R1 reasoning prompts against an 873+ exercise dataset and Decathlon product catalog.',
      challenges:
        'Engineering accurate prompts for DeepSeek R1 to ensure ergonomically sound exercise recommendations and consistently mapping them to the proper Decathlon product inventory.',
      whatILearned:
        'Prompt optimization with reasoning models (DeepSeek R1), catalog search and attribute matching architectures, and delivering clean, responsive fitness UIs.',
      videoDemoUrl: '/videos/decathlon-demo.mp4',
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
    certificateFile: '/certificates/udemy-web-dev.pdf',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    status: 'Completed',
    certificateFile: '/certificates/azure-az900.pdf',
  },
  {
    name: 'AI Agents: Intensive Vibe Coding Course',
    issuer: 'Google',
    status: 'In Progress',
    certificateFile: '/certificates/google-ai-agents.pdf',
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

export interface AssistantFAQ {
  question: string
  answer: string
  tags: string[]
}

export const ASSISTANT_KNOWLEDGE_BASE: AssistantFAQ[] = [
  {
    question: 'What projects has Mariem built?',
    answer:
      'Mariem has built three featured platforms: 1) StudyMate, a full-stack AI study platform with DeepSeek summaries, RAG chatbot (ChromaDB + BGE-M3), Docker, and MySQL; 2) TravelScape, a MERN travel booking platform with 3D hero, glassmorphism, Leaflet maps, and admin CRUD; and 3) Decathlon Posture Coach, an AI fitness app with DeepSeek R1 reasoning matching 873+ exercises with Decathlon products.',
    tags: ['projects', 'studymate', 'travelscape', 'decathlon'],
  },
  {
    question: 'What AI technologies does she use?',
    answer:
      'Mariem works with LLM API integrations, DeepSeek reasoning models (including DeepSeek R1), Retrieval-Augmented Generation (RAG) pipelines, ChromaDB vector database, BGE-M3 dense embeddings, prompt engineering, and is actively exploring AI Agents, MCP (Model Context Protocol), and A2A concepts.',
    tags: ['ai', 'technologies', 'llm', 'rag', 'deepseek', 'mcp'],
  },
  {
    question: 'Tell me about StudyMate.',
    answer:
      'StudyMate is a full-stack AI-powered study platform built using React, TypeScript, Node.js, MySQL, and Docker. It integrates DeepSeek for automated course summaries, a RAG chatbot using ChromaDB with BGE-M3 embeddings, adaptive quizzes, spaced-repetition flashcards, study planning, gamified streak tracking, and a bilingual interface.',
    tags: ['studymate', 'rag', 'deepseek', 'education', 'mysql'],
  },
  {
    question: "What is Mariem's experience with AI agents?",
    answer:
      'Mariem explores agent-based workflows where models reason and use tools (MCP), and is currently participating in the "AI Agents: Intensive Vibe Coding Course" by Google (In Progress). She focuses on practical agent tool execution, prompt structuring, and multi-agent coordination (A2A).',
    tags: ['ai agents', 'agents', 'google', 'mcp', 'a2a'],
  },
  {
    question: 'What technologies does she use for backend development?',
    answer:
      'For backend systems, Mariem uses Node.js, Express.js, and REST APIs, paired with databases like PostgreSQL, MongoDB, MySQL, and Prisma ORM, containerized with Docker.',
    tags: ['backend', 'node', 'express', 'mysql', 'mongodb', 'postgresql'],
  },
  {
    question: 'How does she use RAG?',
    answer:
      'In StudyMate, Mariem implemented a Retrieval-Augmented Generation pipeline using BGE-M3 dense multilingual embeddings and ChromaDB vector store. This allows students to ask questions grounded directly in course materials with low-latency contextual retrieval.',
    tags: ['rag', 'retrieval', 'embeddings', 'chromadb', 'bge-m3'],
  },
  {
    question: 'Where is Mariem located and when does she graduate?',
    answer:
      'Mariem is based in Nabeul, Tunisia. She is pursuing a Bachelor\'s Degree in Software Engineering and Information Systems at ISSAT (2024 – Expected June 2027) and is seeking a final-year internship (PFE) starting February 2027.',
    tags: ['location', 'graduation', 'issat', 'pfe', 'contact'],
  },
]
