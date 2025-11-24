export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
  hostedLink?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'empower-mint',
    title: 'EmpowerMint',
    description: 'An inclusive, gamified financial literacy and investing education web application powered by AI (Gemini).',
    longDescription: 'EmpowerMint helps beginners learn financial concepts through interactive scenarios, visual simulations, and personalized AI-powered explanations. The app emphasizes accessibility and inclusivity, especially for underrepresented genders and financially underserved users. Features include tailored learning paths, micro-lessons with interactive quizzes, gamified scenarios, wealth simulator for compound interest visualization, AI-powered explanations using Google Gemini API, progress tracking with XP and leveling, and accessibility-first design with colorblind-safe palettes, keyboard navigation, and adjustable fonts.',
    imageUrl: 'https://i.imgur.com/hWERWR4.jpeg',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Google Gemini API', 'SQLite', 'Tailwind CSS', 'Recharts'],
    githubLink: 'https://github.com/judelwin/empower-mint',
    featured: true,
  },
  {
    id: 'code-your-own-adventure',
    title: 'Code Your Own Adventure',
    description: 'A terminal-style adventure game to help UMD CS students navigate realistic college scenarios.',
    longDescription: 'Showcased to 80+ attendees at DCC Capstone Fair. Features stat tracking for Academic/Social/Career balance, energy limits for tradeoffs, and a modular system for expandable story scenarios.',
    imageUrl: 'https://github.com/judelwin/code-your-own-adventure/blob/main/public/title-screen.png?raw=true',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubLink: 'https://github.com/judelwin/code-your-own-adventure',
    featured: true,
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'A Firebase app for tracking habits with task management and Google sign-in.',
    longDescription: 'Add, delete, and check in on tasks to track your progress over time.',
    imageUrl: 'https://i.imgur.com/DA7NqlH.png',
    technologies: ['React', 'Firebase', 'JavaScript'],
    githubLink: 'https://github.com/judelwin/habit-tracker-new',
    hostedLink: 'https://habits.judelwin.com/',
    featured: true,
  },
  {
    id: 'todo-list',
    title: 'To-Do List',
    description: 'A MERN stack app with real-time task management.',
    longDescription: 'This app allows users to add, edit, delete tasks, and mark them as completed. Note: The backend may take up to 30 seconds to load due to the hosting service.',
    imageUrl: 'https://i.imgur.com/W8M9Ndz.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/judelwin/fullstack-todo-list',
    featured: true,
  },
  {
    id: 'game-recommendation',
    title: 'Game Recommendation Engine',
    description: 'A tool to help friends find similar games by comparing descriptions and metadata from a 97K+ Steam dataset.',
    longDescription: 'Serves top game recommendations and metadata through a Flask backend with simple query routing for local use.',
    imageUrl: 'https://placehold.co/600x400?text=Game+Recommendation+Engine',
    technologies: ['Python', 'Flask', 'Machine Learning'],
    githubLink: '',
  },
  {
    id: 'shell-junior',
    title: 'Shell Junior',
    description: 'A custom shell program in C supporting command execution, file redirection, piping, and subshell execution.',
    longDescription: 'Implements process management and error handling using fork, execvp, wait, dup2, and pipe to manage child processes and handle input/output redirection.',
    imageUrl: 'https://placehold.co/600x400?text=Shell+Junior',
    technologies: ['C', 'Systems Programming'],
  },
  {
    id: 'distributed-build-system',
    title: 'Distributed Build System',
    description: 'A distributed build system that parallelizes C++ compilation tasks across networked nodes.',
    longDescription: 'Built a distributed build system that parallelizes C++ compilation tasks across networked nodes using gRPC coordination and dependency-graph scheduling. Added artifact caching with Redis and containerized benchmarks to evaluate scalability and fault recovery.',
    imageUrl: 'https://placehold.co/600x400?text=Distributed+Build+System',
    technologies: ['C++', 'gRPC', 'Redis', 'Docker'],
    githubLink: 'https://github.com/judelwin/distributed-build-system',
    featured: true,
  },
  {
    id: 'logging-monitoring-platform',
    title: 'Logging and Monitoring Platform',
    description: 'A centralized logging and metrics service for containerized applications.',
    longDescription: 'Developed a centralized logging and metrics service for containerized apps using Redis Streams and Prometheus. Integrated PostgreSQL for structured log storage and Grafana dashboards for querying and visualization.',
    imageUrl: 'https://placehold.co/600x400?text=Logging+Monitoring+Platform',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis Streams', 'Prometheus', 'Grafana'],
    githubLink: 'https://github.com/judelwin/logging-monitoring-platform',
    featured: true,
  },
  {
    id: 'smart-study-assistant',
    title: 'Smart Study Assistant',
    description: 'A distributed study assistant allowing students to organize notes by course and query them in natural language.',
    longDescription: 'Developed a distributed study assistant using FastAPI, React, and Docker microservices, allowing students to organize notes by course and query them in natural language to retrieve cited excerpts for efficient review. Implemented RAG pipeline (Celery, Pinecone) for PDF parsing, chunking, and sub-200ms semantic search. Integrated Supabase for authentication and AWS S3 for storage, ensuring secure, scalable multi-course support.',
    imageUrl: 'https://placehold.co/600x400?text=Smart+Study+Assistant',
    technologies: ['Python', 'FastAPI', 'Celery', 'Docker', 'Supabase', 'Pinecone', 'AWS S3', 'React'],
    githubLink: 'https://github.com/judelwin/smart-study-assistant',
    featured: true,
  },
];

