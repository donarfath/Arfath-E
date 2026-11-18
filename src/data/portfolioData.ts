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
  issuerTagline: string;
  certificateType: string;
  issueDate: string;
  certificateId: string;
  verificationNote: string;
  certificateImageUrl: string;
  fallbackImageUrl?: string;
  summary: string;
  highlights: string[];
  skills: string[];
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
  resumeUrl: '/assets/aistudio/ResumeMe_3acaf722.pdf',
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
    issuer: 'Microsoft · Coursera',
    issuerTagline: 'Authorized by Microsoft and offered through Coursera',
    certificateType: 'Course Certificate',
    issueDate: '05 Apr 2026',
    certificateId: 'SG2YLM6B75IO',
    verificationNote: 'Identity & Completion Verified',
    certificateImageUrl: '/assets/certificates/coursera-ai-ml.jpg',
    summary:
      'Successfully completed the online course authorized by Microsoft on Coursera covering core AI & ML infrastructure, data pipelines, model development frameworks, and deployment readiness.',
    highlights: [
      'Studied critical AI & ML infrastructure components, data preprocessing workflows, and model frameworks.',
      'Verified by Coursera and Microsoft (Certificate ID: SG2YLM6B75IO) on 05 Apr 2026.',
    ],
    skills: ['AI & ML', 'Data Pipelines', 'Model Deployment', 'Python'],
  },
  {
    id: 'naan-mudhalvan',
    title: 'Naan Mudhalvan Digital Skills Program',
    issuer: 'TNSDC · Microsoft',
    issuerTagline: 'Government of Tamil Nadu — Naan Mudhalvan Scheme',
    certificateType: 'Certificate of Achievement',
    issueDate: '17 Nov 2025',
    certificateId: 'NMO2526EAU35688864444',
    verificationNote: 'Digitally Signed · Reg No: 510924148001',
    certificateImageUrl: '/assets/certificates/naan-mudhalvan.jpg',
    summary:
      'Awarded Certificate of Achievement for the successful completion of Digital Skills sponsored by the Naan Mudhalvan Program, Tamil Nadu Skill Development Corporation, and conducted by Microsoft.',
    highlights: [
      'Completed statewide technical skill advancement curriculum conducted in collaboration with Microsoft.',
      'Digitally signed by Tamil Nadu Skill Development Corporation on 17/11/2025.',
    ],
    skills: ['Digital Skills', 'Microsoft', 'Technical Advancement'],
  },
  {
    id: 'python-beginners',
    title: 'Python for Beginners',
    issuer: 'Simplilearn SkillUP',
    issuerTagline: 'Online Skill Development Program',
    certificateType: 'Certificate of Completion',
    issueDate: '12 Oct 2025',
    certificateId: '9152474',
    verificationNote: 'Verified Credential',
    certificateImageUrl: '/assets/certificates/python-beginners.jpg',
    summary:
      'Completed the Python for Beginners online course via Simplilearn SkillUP, building strong foundations in Python syntax, control structures, and foundational scripting.',
    highlights: [
      'Strengthened core programming logic, data types, loops, and modular Python basics.',
      'Certified by Simplilearn (Certificate code: 9152474) on 12 October 2025.',
    ],
    skills: ['Python', 'Control Flow', 'Programming Foundations'],
  },
  {
    id: 'tcs-ion',
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    issuerTagline: 'Tata Consultancy Services',
    certificateType: 'Certificate of Achievement',
    issueDate: '22 Jul 2025',
    certificateId: '240640-28614784-1016',
    verificationNote: '08 Jul 2025 – 22 Jul 2025 · Certified',
    certificateImageUrl: '/assets/certificates/tcs-ion.jpg',
    summary:
      'Completed the TCS iON Career Edge – Young Professional course covering IT Foundational Skills, Overview of Artificial Intelligence, structured communication, and corporate readiness.',
    highlights: [
      'Covered IT Foundational Skills, Overview of Artificial Intelligence, and Accounting Fundamentals.',
      'Completed professional communication, interview, and presentation modules (Cert ID: 240640-28614784-1016).',
    ],
    skills: ['IT Foundations', 'Overview of AI', 'Communication', 'Career Readiness'],
  },
];

export interface CompletedInternship {
  id: string;
  role: string;
  company: string;
  companyTagline: string;
  type: string;
  duration: string;
  dateRange: string;
  issueDate: string;
  certificateId: string;
  issuerEmail: string;
  certificateImageUrl: string;
  certificatePdfUrl: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export const COMPLETED_INTERNSHIPS: CompletedInternship[] = [
  {
    id: 'codevedx-python-internship',
    role: 'Python Programming Intern',
    company: 'CodeVedX',
    companyTagline: 'Coding Knowledge, Delivered X-factor.',
    type: 'Virtual Internship · 12 Weeks',
    duration: '12 Weeks',
    dateRange: '28 Jul 2026 – 20 Oct 2026',
    issueDate: '23 Oct 2026',
    certificateId: 'CV-PP-2026-1538',
    issuerEmail: 'service.codevedx@gmail.com',
    certificateImageUrl: '/assets/aistudio/Arfath_E_0bf5431f.jpg',
    certificatePdfUrl: '/assets/aistudio/Arfath_E__cb9337d4.pdf',
    summary:
      'Successfully completed a 12-week virtual internship program in Python Programming at CodeVedX, earning commendation for showcased technical skills and contributions across tasks and projects.',
    highlights: [
      'Completed 12 weeks of structured Python programming tasks and real project deliverables.',
      'Recognized by the CodeVedX team for consistent execution, problem solving, and project contributions.',
      'Awarded QR-verified Certificate of Completion on 23/10/2026.',
    ],
    skills: ['Python Programming', 'Task Execution', 'Project Delivery', '12-Week Internship'],
  },
];

export interface InternshipRole {
  index: string;
  role: string;
  summary: string;
  tools: string[];
}

export const INTERNSHIP_PROFILE = {
  headline: 'Open for 2026–2027 Software & AI/ML Internships',
  availability: 'Immediate / Academic Break & Part-Time Remote',
  locations: 'Chennai, Tamil Nadu · Hybrid · Remote',
  objective:
    'Building on my 12-week Python Programming internship at CodeVedX, I am seeking hands-on roles in frontend web development, Python engineering, and AI/ML.',
  targetRoles: [
    {
      index: '01',
      role: 'Frontend Web Developer Intern',
      summary:
        'Crafting clean, responsive user interfaces, semantic layouts, and interactive components backed by version-controlled workflows.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      index: '02',
      role: 'AI / Machine Learning Intern',
      summary:
        'Supporting data preprocessing, classical ML modeling, evaluation pipelines, and retrieval-augmented generation (RAG) prototypes.',
      tools: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    },
    {
      index: '03',
      role: 'Python Developer Intern',
      summary:
        'Building modular Python scripts, structured CRUD utilities, SQL-backed workflows, and security-focused command-line tools.',
      tools: ['Python', 'SQL', 'Git', 'GitHub'],
    },
  ] as InternshipRole[],
};

