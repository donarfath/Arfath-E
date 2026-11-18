export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: 'Systems' | 'Security' | 'AI & RAG';
  year: string;
  shortDescription: string;
  overview: string;
  architecturePoints: string[];
  tech: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  summary: string;
  items: { name: string; note: string }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  subtitle: string;
  verifyUrl: string;
}

export const PROFILE = {
  name: 'Arfath E',
  logoFirst: 'A',
  logoSecond: 'E',
  greeting: "Hi, I'm",
  role: 'Frontend Web Developer & AI/ML Student',
  heroDescription:
    'Passionate Computer Science student dedicated to building clean, responsive web interfaces and exploring artificial intelligence solutions. Looking for internship opportunities to grow and contribute.',
  aboutParagraphs: [
    'I am a dedicated third-year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at the Global Institute of Engineering and Technology, affiliated to Anna University.',
    'My core interest lies in bridging design and engineering by writing clean, modern code to build responsive web applications. Beyond frontend development, I enjoy solving problems using Python, strengthening my logical reasoning, and exploring software security fundamentals.',
    'I am actively looking for internship opportunities to gain real-world industrial exposure and collaborate on meaningful projects.',
  ],
  location: 'Tamil Nadu, India',
  email: 'arfatheliyas2006@gmail.com',
  githubUrl: 'https://github.com/donarfath',
  githubHandle: 'github.com/donarfath',
  linkedinUrl: 'https://www.linkedin.com/in/arfath0311/',
  linkedinHandle: 'linkedin.com/in/arfath0311',
  resumeUrl: '/resume/Arfath_E_Resume.pdf',
  externalResumeUrl: 'https://donarfath.github.io/Arfath_Portfolio/resume/Arfath_E_Resume.pdf',
  heroImage: '/assets/images/profile.jpg',
  heroFallbackImage: '/src/assets/images/hero_developer_portrait_1794986075464.jpg',
  heroImageAlt: 'Arfath E Profile Photo',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    summary: 'Building responsive, accessible interfaces with modern component architecture.',
    items: [
      { name: 'HTML', note: 'Semantic markup & structure' },
      { name: 'CSS', note: 'Responsive grids & styling' },
      { name: 'JavaScript', note: 'Interactive DOM & logic' },
      { name: 'React.js', note: 'Component-driven UI' },
    ],
  },
  {
    id: 'programming',
    category: 'Programming & Databases',
    summary: 'Core algorithmic problem solving, scripting, and relational data handling.',
    items: [
      { name: 'Python', note: 'Application logic & scripting' },
      { name: 'SQL', note: 'Relational queries & schemas' },
    ],
  },
  {
    id: 'aiml',
    category: 'AI & Machine Learning',
    summary: 'Applied machine learning foundations, data wrangling, and retrieval workflows.',
    items: [
      { name: 'AI / ML', note: 'NumPy · Pandas · Scikit-learn' },
      { name: 'RAG & GenAI', note: 'Grounded retrieval pipelines' },
    ],
  },
  {
    id: 'tools',
    category: 'Version Control & Workflow',
    summary: 'Collaborative source control, branching, and clean developer tooling.',
    items: [
      { name: 'Git', note: 'Commit history & branching' },
      { name: 'GitHub', note: 'Open-source repositories' },
      { name: 'VS Code', note: 'Primary development IDE' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'student-management-system',
    index: '01',
    title: 'Student Management System',
    category: 'Systems',
    year: '2025',
    shortDescription:
      'A Python-based Student Management System featuring login authentication, student records management, attendance tracking, GPA calculation, search, update, and delete functionality.',
    overview:
      'An end-to-end academic administration tool engineered in Python to streamline record lifecycle operations, track attendance percentages, and compute GPA accurately under authenticated access.',
    architecturePoints: [
      'Authenticated login gate safeguarding academic record modifications.',
      'Full CRUD record management with search, update, and safe deletion.',
      'Automated GPA calculation and attendance tracking across student records.',
    ],
    tech: ['Python', 'Authentication', 'CRUD'],
    githubUrl: 'https://github.com/donarfath/Student-Management-System-Pro',
    image: '/src/assets/images/project_student_system_1794986076618.jpg',
    fallbackImage: '/assets/images/student-management-system.png',
    imageAlt: 'Student Management System academic records and GPA analytics interface',
  },
  {
    id: 'password-security-toolkit',
    index: '02',
    title: 'Password Security Toolkit',
    category: 'Security',
    year: '2025',
    shortDescription:
      'A security-focused Python application that generates strong passwords, evaluates password strength, checks password safety, and promotes cybersecurity best practices.',
    overview:
      'A focused Python cybersecurity utility designed to audit credential resilience and produce strong passwords while educating users on common entropy pitfalls.',
    architecturePoints: [
      'Configurable high-entropy password generator across mixed character classes.',
      'Strength evaluator inspecting length, character variety, and weak patterns.',
      'Safety validation promoting practical credential hygiene.',
    ],
    tech: ['Python', 'Cybersecurity', 'Entropy Analysis'],
    githubUrl: 'https://github.com/donarfath/Password-Security-Toolkit',
    image: '/src/assets/images/project_password_security_1794986076548.jpg',
    fallbackImage: '/assets/images/password-security-toolkit.png',
    imageAlt: 'Password Security Toolkit cryptographic hardware and security mechanism',
  },
  {
    id: 'rag-ai-assistant',
    index: '03',
    title: 'RAG-Based AI Knowledge Assistant',
    category: 'AI & RAG',
    year: '2026',
    shortDescription:
      'An intelligent AI assistant that retrieves context from custom knowledge sources and answers user queries with grounded, relevant responses using retrieval-augmented generation.',
    overview:
      'Built to reduce hallucinations in domain-specific Q&A by grounding large language model outputs in indexed document chunks. User queries are matched against retrieved source passages before synthesis.',
    architecturePoints: [
      'Custom knowledge ingestion pipeline splitting source documents into retrievable context segments.',
      'Semantic similarity retrieval pairing user intent with high-relevance source chunks.',
      'Grounded prompt construction enforcing source-backed responses.',
    ],
    tech: ['Python', 'RAG', 'LLM'],
    githubUrl: 'https://github.com/donarfath/RAG-Based-AI-Assistant',
    image: '/src/assets/images/project_rag_assistant_1794986076830.jpg',
    fallbackImage: '/assets/images/portfolio-website.png',
    imageAlt: 'RAG-Based AI Knowledge Assistant retrieval-augmented architecture visualization',
  },
];

export const EDUCATION_TIMELINE = [
  {
    id: 'be-cse-aiml',
    duration: '2024–2028',
    degree: 'B.E Computer Science and Engineering (AI & ML)',
    institution: 'Global Institute of Engineering and Technology',
    affiliation: 'Affiliated to Anna University',
    location: 'Tamil Nadu, India',
    highlights:
      'Pursuing undergraduate coursework in Artificial Intelligence, Machine Learning, Data Structures, Database Management Systems (SQL), and Web Application Development.',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'coursera-ai-ml',
    title: 'Foundations of AI and Machine Learning',
    issuer: 'Coursera',
    subtitle: 'Verified Course Accomplishment',
    verifyUrl:
      'https://www.coursera.org/account/accomplishments/verify/SG2YLM6B75IO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    id: 'python-beginners',
    title: 'Python for Beginners',
    issuer: 'Skill Development Program',
    subtitle: 'Programming Foundations',
    verifyUrl: 'https://ibb.co/LDyJ0q6g',
  },
  {
    id: 'tcs-ion',
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    subtitle: 'Corporate Readiness Certification',
    verifyUrl: 'https://ibb.co/Fktb4PhQ',
  },
  {
    id: 'naan-mudhalvan',
    title: 'Naan Mudhalvan Digital Skills Program',
    issuer: 'Government Initiative Technical Course',
    subtitle: 'Technical Skill Advancement',
    verifyUrl: 'https://ibb.co/TBx7GHbt',
  },
];
