export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ProjectStatus =
  | "planned"
  | "in-progress"
  | "completed"
  | "prototype";

export type WorkflowStage = {
  id: "data" | "retrieval" | "model" | "api";
  label: string;
  title: string;
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  slug: string;
  subtitle?: string;
  sourceNote?: string;
  summary: string;
  status: ProjectStatus;
  year?: number;
  technologies: string[];
  problem?: string;
  approach?: string;
  results?: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  architecture?: { label: string; detail: string }[];
};

export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type PortfolioContent = {
  navigation: NavigationItem[];
  profile: {
    initials: string;
    name: string;
    role: string;
    headline: string;
    introduction: string;
  };
  about: {
    eyebrow: string;
    title: string;
    biography: string;
  };
  experience: Experience[];
  education: Education[];
  skillGroups: SkillGroup[];
  contact: {
    eyebrow: string;
    title: string;
    message: string;
    email: string;
    linkedInUrl: string;
    resumeUrl: string;
  };
};

export const portfolio: PortfolioContent = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  profile: {
    initials: "OMZ",
    name: "Osman Mohammed Zamin",
    role: "AI Engineer",
    headline: "AI Engineer building intelligent applications",
    introduction:
      "I build AI-enabled applications and Python backend systems, including REST APIs, retrieval pipelines, and LLM-powered workflows.",
  },
  about: {
    eyebrow: "About",
    title: "AI engineering, from data to production",
    biography:
      "My work focuses on AI-enabled applications and the backend services that support them. I have worked with machine learning workflows, REST APIs, retrieval-augmented generation, and production monitoring, with an emphasis on reliable systems and clear collaboration.",
  },
  experience: [
    {
      role: "AI Engineer",
      company: "True Solutions",
      startDate: "January 2025",
      endDate: "Present",
      highlights: [
        "Develop AI and machine learning solutions with Python, Pandas, NumPy, SQL, and scikit-learn, covering data preparation, feature engineering, model development, and evaluation.",
        "Build Python backend services and REST APIs with FastAPI, PostgreSQL, Redis, and microservice-oriented components.",
        "Develop LLM workflows using prompt engineering, retrieval-augmented generation, LangChain, and Hugging Face.",
        "Contributed to 20+ software releases while working with engineering, QA, and stakeholder teams.",
      ],
    },
    {
      role: "Junior Software Engineer",
      company: "Websleak",
      startDate: "November 2021",
      endDate: "November 2022",
      highlights: [
        "Developed and maintained backend applications and REST APIs using Java, Python, and SQL.",
        "Optimized SQL queries and data-processing workflows, improving application response times and backend performance by approximately 20%.",
        "Investigated defects through debugging and root-cause analysis, and participated in code reviews, testing, and deployment activities.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Campbellsville University",
      startYear: "2023",
      endYear: "2024",
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Osmania University",
      startYear: "2018",
      endYear: "2022",
    },
  ],
  skillGroups: [
    {
      category: "Programming & Data",
      skills: [
        "Python",
        "Java",
        "SQL",
        "Pandas",
        "NumPy",
        "Data Processing",
        "Data Preprocessing",
        "Feature Engineering",
        "ETL/ELT",
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "scikit-learn",
        "Supervised Learning",
        "Model Development",
        "Model Evaluation",
        "NLP",
        "PyTorch",
        "TensorFlow",
      ],
    },
    {
      category: "Generative AI & LLMs",
      skills: [
        "LLMs",
        "OpenAI APIs",
        "Prompt Engineering",
        "Hybrid Prompting",
        "RAG",
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "Hugging Face",
        "Retrieval Pipelines",
        "Vector Search",
        "Vector Databases",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "REST APIs",
        "FastAPI",
        "Python Backend Systems",
        "API Development",
        "AI Workflow Automation",
        "Microservices",
        "OOP",
        "Software Engineering",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      category: "DevOps & Operations",
      skills: [
        "Git",
        "GitHub Actions",
        "Azure DevOps",
        "CI/CD",
        "Docker",
        "Linux",
        "PowerShell",
        "Model Deployment",
        "Testing",
        "Monitoring",
        "Logging",
        "Troubleshooting",
        "Root-Cause Analysis",
        "Production Support",
      ],
    },
    {
      category: "Security & Responsible AI",
      skills: [
        "RBAC",
        "IAM",
        "OAuth 2.0",
        "API Rate Limiting",
        "Data Encryption",
        "Access Control",
      ],
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Let’s connect",
    message: "Reach me by email or connect with me on LinkedIn.",
    email: "osmanzaminmohammed@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/osmanmz08/",
    resumeUrl: "/Osman_SE.pdf",
  },
};

export const workflowStages: WorkflowStage[] = [
  {
    id: "data",
    label: "Data",
    title: "Start with a solid foundation.",
    description:
      "Clean, transform and structure source data so the next stage has something reliable to work with.",
    technologies: ["Python", "Pandas", "SQL"],
  },
  {
    id: "retrieval",
    label: "Retrieval",
    title: "Find the context that matters.",
    description:
      "Connect a question to relevant information through retrieval pipelines and vector search.",
    technologies: ["RAG", "LangChain", "Vector Search"],
  },
  {
    id: "model",
    label: "Model",
    title: "Turn context into a useful response.",
    description:
      "Combine retrieved context with carefully designed prompts, then evaluate the output against the task.",
    technologies: ["LLMs", "Hugging Face", "Prompt Engineering"],
  },
  {
    id: "api",
    label: "API",
    title: "Make it work beyond the notebook.",
    description:
      "Expose the workflow through a backend service, with validation, logging and monitoring to support the application.",
    technologies: ["FastAPI", "Docker", "Monitoring"],
  },
];

export const projects: Project[] = [
  {
    title: "TradBot",
    slug: "tradbot",
    subtitle: "Python Trading Dashboard",
    sourceNote:
      "An earlier prototype, last committed in May 2022. This overview is based on source inspection; current exchange compatibility and trading performance have not been verified.",
    summary:
      "A Python desktop prototype for monitoring cryptocurrency markets and configuring automated trading strategies. Integrates Binance and BitMEX through REST APIs and WebSockets, with a Tkinter interface for watchlists, strategy settings and trade monitoring.",
    status: "prototype",
    year: 2022,
    technologies: [
      "Python",
      "Pandas",
      "Tkinter",
      "SQLite",
      "REST APIs",
      "WebSockets",
    ],
    problem:
      "Bring market monitoring, strategy configuration and order tracking into one desktop workspace.",
    approach:
      "Separate exchange connectors, shared data models, strategy logic and interface components.",
    results: [
      "RSI/MACD and volume-filtered breakout strategies.",
      "Configurable position sizing, stop-loss and take-profit logic.",
      "SQLite persistence for watchlists and strategy settings.",
    ],
    repositoryUrl: "https://github.com/Osman0810/TradBot",
    architecture: [
      { label: "Exchange feeds", detail: "Binance / BitMEX" },
      { label: "Strategies", detail: "Technical / Breakout" },
      { label: "Orders / Dashboard", detail: "Execution / Tkinter UI" },
    ],
  },
];
