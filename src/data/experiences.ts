export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'capital-one-intern',
    title: 'Software Engineer Intern',
    company: 'Capital One',
    location: 'McLean, VA',
    startDate: 'June 2025',
    endDate: 'August 2025',
    description: [
      'Built automated LLM evaluation pipeline in Python/Snowflake scaling model validation from dozens to 10K+ queries per deployment, reducing engineering time from days of manual review to overnight batch processing',
      'Trained ensemble classifiers with scikit-learn (Random Forest, XGBoost) and developed NLP scoring system (ROUGE, Levenshtein, fuzzy encoding) achieving 91.2% accuracy in deployment verification',
      'Engineered backtesting framework to validate metric/classifier updates against all previous evaluation runs',
    ],
    technologies: ['Python', 'Snowflake', 'Scikit-Learn'],
  },
  {
    id: 'umd-ml-researcher',
    title: 'Machine Learning Researcher',
    company: 'University of Maryland',
    location: 'College Park, MD',
    startDate: 'September 2025',
    endDate: 'Present',
    description: [
      'Investigating reinforcement learning approaches for enabling LLMs to self-improve on math and coding tasks',
    ],
    technologies: ['Python', 'Machine Learning', 'Reinforcement Learning'],
  },
  {
    id: 'umd-ta',
    title: 'Teaching Assistant, CMSC330 (Programming Languages)',
    company: 'University of Maryland',
    location: 'College Park, MD',
    startDate: 'January 2025',
    endDate: 'Present',
    description: [
      'Lead weekly discussion for 30+ students, host 5+ weekly office hours, and coordinate grading with 39 TAs',
      'Develop and test 7 OCaml/Rust projects, writing 50+ unit tests and documentation for 900+ students',
      'Streamline releases using GitHub, Docker, and GitHub Actions, improving deployment efficiency',
    ],
    technologies: ['OCaml', 'Rust', 'Docker', 'GitHub Actions', 'Git'],
  },
  {
    id: 'wise-cities-intern',
    title: 'Software Engineer Intern',
    company: 'WISE Cities',
    location: 'College Park, MD',
    startDate: 'February 2025',
    endDate: 'May 2025',
    description: [
      'Led backend development of a recommendation system for older adults to find local organizations and activities',
      'Engineered scalable gRPC microservice with MongoDB querying and Pydantic data validation',
      'Integrated all-MiniLM-L6-v2 and Pinecone to enable sub-100ms k-NN recommendations',
    ],
    technologies: ['Python', 'gRPC', 'MongoDB', 'Pydantic', 'Pinecone'],
  },
  {
    id: 'usda-intern',
    title: 'Technology Intern',
    company: 'USDA',
    location: 'Riverdale, MD',
    startDate: 'June 2024',
    endDate: 'August 2024',
    description: [
      'Automated inbox processing with Power Automate and Microsoft Lists; reduced team\'s manual load by 70%',
      'Directed accessibility testing across 142 web apps for Section 508 compliance',
      'Built Python tool for USDA document lifecycle validation using Pandas, reducing processing time by 80%',
    ],
    technologies: ['Python', 'Pandas', 'Power Automate', 'Microsoft Lists'],
  },
];

