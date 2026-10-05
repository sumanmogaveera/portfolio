import type { Project, SkillCategory, TimelineItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Suman Mogaveera",
  role: "3rd-Year Computer Science Engineering Student & Aspiring Software Developer",
  shortRole: "3rd-Year CSE Student & Developer",
  location: "Karnataka, India",
  tagline: "I build practical software solutions, explore emerging technologies, and continuously improve my problem-solving and development skills.",
  about: `I am a 3rd-year Computer Science and Engineering student with a deep passion for building robust software applications. My journey revolves around understanding computer science fundamentals from first principles—data structures, algorithms, relational database systems, and object-oriented design—while turning theoretical knowledge into practical, working software.

Whether it is building community web applications like the Lost & Found finder, engineering automated attendance systems with computer vision, or studying privacy preservation in sensitive data, I relish tackling real-world problems through clean code. I believe in consistent learning, methodical debugging, and writing code that is readable, scalable, and impactful.`,
  email: "sumanmogaveera79@gmail.com",
  github: "https://github.com/sumanmogaveera",
  linkedin: "https://linkedin.com/in/suman-mogaveera",
  stats: [
    { label: "Engineering Progress", value: "3rd Year", detail: "2024 – 2028 CSE curriculum & practical labs" },
    { label: "Projects / Mini Projects", value: "10+", detail: "Academic, lab & self-directed builds" },
    { label: "Core Technologies", value: "Multiple", detail: "Java, Python, C, SQL & Web Stack" },
    { label: "Growth Mindset", value: "Always", detail: "Continuous learning & skill expansion" }
  ],
  heroBadges: ["Java", "Python", "C", "SQL", "JavaScript", "HTML", "CSS"]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages used for problem solving, algorithmic thinking, and application logic.",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Core Focus", percentage: 82, experience: "OOP principles, collections, lab projects & algorithms" },
      { name: "C", level: "Proficient", percentage: 78, experience: "Memory management, pointers, data structures & systems fundamentals" },
      { name: "Python", level: "Proficient", percentage: 80, experience: "Scripting, Flask APIs, automation & data handling" }
    ]
  },
  {
    title: "Web Development",
    description: "Client-side and responsive interface development with standard web standards.",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "Core Focus", percentage: 88, experience: "Semantic markup, accessibility, modern document architecture" },
      { name: "CSS3", level: "Proficient", percentage: 82, experience: "Flexbox, Grid layouts, animations & responsive media queries" },
      { name: "JavaScript", level: "Working Knowledge", percentage: 75, experience: "ES6+ syntax, DOM manipulation, asynchronous fetch APIs" }
    ]
  },
  {
    title: "Database Management",
    description: "Relational database schema design, normalization, querying, and backend integration.",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Proficient", percentage: 80, experience: "Complex joins, indexing, normalization, triggers & stored procedures" },
      { name: "SQLite", level: "Proficient", percentage: 82, experience: "Embedded application databases, lightweight schemas, local storage" }
    ]
  },
  {
    title: "Computer Science Fundamentals",
    description: "Theoretical bedrock powering reliable software engineering.",
    icon: "Cpu",
    skills: [
      { name: "Data Structures", level: "Core Focus", percentage: 80, experience: "Arrays, Linked Lists, Stacks, Queues, Trees & Graphs" },
      { name: "Algorithms", level: "Proficient", percentage: 76, experience: "Sorting, searching, recursion, divide-and-conquer, time complexity" },
      { name: "DBMS", level: "Core Focus", percentage: 84, experience: "Relational algebra, ER modeling, ACID properties & transaction control" },
      { name: "Operating Systems", level: "Foundational", percentage: 72, experience: "Processes, threads, CPU scheduling, memory management & system calls" }
    ]
  },
  {
    title: "Developer Tools & Environment",
    description: "Daily development workflow, version control, and IDE ecosystems.",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Proficient", percentage: 80, experience: "Branching, merging, commit staging, workflow management" },
      { name: "GitHub", level: "Proficient", percentage: 82, experience: "Remote repository hosting, issues, collaboration & releases" },
      { name: "VS Code", level: "Core Focus", percentage: 88, experience: "Primary code editor, extensions, terminal integration, debugging" },
      { name: "Eclipse", level: "Working Knowledge", percentage: 74, experience: "Java IDE for object-oriented lab experiments & project builds" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "lost-and-found",
    title: "Lost & Found Item Finder",
    category: "Full Stack Web Application",
    badge: "Community Utility Platform",
    shortDescription: "A web platform that connects people who have lost items with those who have found them, featuring item reporting, image-based listings, search, filtering, and claim management.",
    problem: "When students or campus members lose everyday essentials like ID cards, keys, notebooks, or electronics, notices are scattered across chat groups and noticeboards, leading to high frustration and low recovery rates.",
    solution: "Built a centralized, responsive web platform allowing users to post lost and found item reports with photos, category tags, and exact location details. Equipped with instant keyword search, status filtering, and secure verification claim handling.",
    technologies: ["HTML", "CSS", "JavaScript", "Python / Flask", "SQLite", "Image Upload"],
    keyFeatures: [
      "Streamlined item reporting workflows for both 'Lost' and 'Found' categories",
      "Image-based listings with visual previews and detailed item descriptions",
      "Dynamic search and category filtering (Electronics, Documents, Books, Accessories)",
      "Secure claim management system enabling finders to verify claimant proof of ownership",
      "Status lifecycle tracking (Reported, Under Claim, Verified, Returned)"
    ],
    githubUrl: "https://github.com/sumanmogaveera/lost-and-found-item-finder",
    liveUrl: "https://lost-and-found-demo.example.com",
    architectureNotes: "Relational database schema modeling users, item listings, categories, and claim verification logs with file upload handling and responsive client UI."
  },
  {
    id: "hostel-attendance",
    title: "Smart Hostel Attendance Management System",
    category: "Full Stack / Computer Vision",
    badge: "Featured System",
    shortDescription: "A smart attendance management system designed to simplify hostel attendance using QR-based identification and facial recognition.",
    problem: "Manual hostel attendance verification suffers from proxy entries, slow physical roll calls, paper record errors, and delayed reporting to wardens and administrators during night curfews.",
    solution: "Engineered an automated dual-verification attendance portal with Flask and Python. Leverages individual QR tokens paired with instant facial recognition cross-validation, logging timestamps directly to an optimized SQLite database with instant anomaly alerts.",
    technologies: ["Flask", "Python", "SQLite", "QR Code", "Face Recognition", "OpenCV", "HTML/CSS"],
    keyFeatures: [
      "Dynamic QR code generation and instant camera-based decoding",
      "Face recognition verification module to eliminate proxy check-ins",
      "Warden dashboard for real-time occupancy status and late-entry tracking",
      "Automated attendance logs exportable in CSV/JSON formats",
      "Lightweight responsive client interface for student self check-in"
    ],
    githubUrl: "https://github.com/sumanmogaveera/smart-hostel-attendance",
    liveUrl: "https://hostel-attendance-demo.example.com",
    architectureNotes: "Client-server architecture using Flask microframework, OpenCV Haar cascade/face encodings, and SQLite relational tables for students, logs, and warden sessions."
  },
  {
    id: "medical-data-protection",
    title: "Privacy-Preserving Medical Data Protection",
    category: "Data Security & Machine Learning",
    badge: "Security & Research",
    shortDescription: "A privacy-focused framework for detecting and protecting sensitive information in multimodal medical data.",
    problem: "Sharing medical records and diagnostic images for clinical research poses severe patient privacy risks if Personally Identifiable Information (PII) or Protected Health Information (PHI) is exposed.",
    solution: "Formulated a privacy-preserving pipeline in Python incorporating machine learning models to detect PII across text records and apply selective anonymization/masking techniques without compromising the diagnostic utility of the data.",
    technologies: ["Python", "Machine Learning", "Privacy Techniques", "Data Security", "NumPy", "Pandas"],
    keyFeatures: [
      "Automated extraction and classification of sensitive patient metadata (PHI/PII)",
      "k-Anonymity and differential privacy principles applied to diagnostic datasets",
      "Selective redaction and reversible cryptographic masking for authorized clinical audits",
      "Information loss vs. privacy preservation trade-off metrics calculation",
      "Comprehensive evaluation on multi-attribute medical research records"
    ],
    githubUrl: "https://github.com/sumanmogaveera/medical-data-privacy-protection",
    liveUrl: "https://medical-privacy-research.example.com",
    architectureNotes: "Built with Python data stack, implementing text entity recognition pipelines, noise addition mechanisms, and structured evaluation benchmarking."
  }
];

export const journeyTimeline: TimelineItem[] = [
  {
    period: "3rd Year CSE • 2025 - Present",
    title: "Project Development & Applied Systems",
    role: "Practical Real-World Applications",
    description: "Synthesizing full-stack web technologies, computer vision, and machine learning into end-to-end systems. Building reliable tools to address everyday campus and logistical challenges.",
    skills: ["Full Stack Architecture", "API Integration", "Flask & Python", "System Design"],
    highlights: [
      "Built the Smart Hostel Attendance dual-verification prototype",
      "Explored privacy preservation methodologies in sensitive healthcare datasets",
      "Emphasized clean repository structures, git commits, and documentation"
    ]
  },
  {
    period: "2nd - 3rd Year CSE • 2024 - 2025",
    title: "Database Development & Systems",
    role: "Relational Modeling & Structured Querying",
    description: "Deepened knowledge in database systems, relational algebra, SQL optimization, and backend database connections.",
    skills: ["MySQL", "SQLite", "Database Normalization (1NF-3NF)", "ER Diagrams", "ACID Transactions"],
    highlights: [
      "Designed normalized relational database schemas for web applications",
      "Wrote complex SQL queries, views, and data integrity constraints",
      "Gained hands-on experience in DBMS laboratory exercises and reporting"
    ]
  },
  {
    period: "2nd Year CSE • 2024",
    title: "Web Development Foundations",
    role: "Frontend & Responsive Web Architecture",
    description: "Learned modern web standards to build intuitive, accessible, and responsive user interfaces for software systems.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive UI Design", "DOM APIs"],
    highlights: [
      "Constructed multi-page interactive web layouts with CSS Grid & Flexbox",
      "Integrated client-side validation and dynamic asynchronous updates",
      "Implemented mobile-first design principles across web prototypes"
    ]
  },
  {
    period: "1st - 2nd Year CSE • 2024",
    title: "Programming Fundamentals & Data Structures",
    role: "Core Language Mastery & Algorithmic Problem Solving",
    description: "Built a solid bedrock in computer science principles, starting with procedural programming in C, transitioning to Object-Oriented Programming in Java, and exploring Python.",
    skills: ["C Programming", "Java Core & OOP", "Data Structures", "Pointers & Memory", "Algorithms"],
    highlights: [
      "Implemented standard data structures (LinkedLists, Stacks, Queues, Binary Trees) from scratch",
      "Practiced algorithmic problem solving, sorting algorithms, and complexity analysis",
      "Mastered OOP principles: Encapsulation, Inheritance, Polymorphism, and Abstraction"
    ]
  },
  {
    period: "Undergraduate Degree • 2024 - 2028",
    title: "Computer Science Engineering",
    role: "Bachelor of Engineering (B.E.)",
    description: "Pursuing rigorous 4-year undergraduate degree in Computer Science and Engineering in Karnataka, India.",
    skills: ["Engineering Mathematics", "Digital Logic", "Computer Architecture", "Software Engineering"],
    highlights: [
      "Active participant in technical lab practicals, coding workshops, and seminars",
      "Maintained consistent academic engagement across fundamental CSE subjects"
    ]
  }
];

export const educationInfo = {
  degree: "Bachelor of Engineering (B.E.)",
  major: "Computer Science & Engineering",
  year: "Currently in 3rd Year (2024 – 2028)",
  institution: "Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM)",
  affiliation: "Affiliated to Visvesvaraya Technological University (VTU)",
  location: "Karnataka, India",
  highlights: [
    "Core focus on Data Structures, Algorithms, DBMS, and Object-Oriented Programming",
    "Hands-on practical programming laboratory sessions in C, Java, and Database Systems",
    "Active member of departmental student coding activities and technical development projects",
    "Consistent academic coursework emphasizing software engineering fundamentals"
  ],
  coursework: [
    "Data Structures & Applications",
    "Object Oriented Programming with Java",
    "Database Management Systems (DBMS)",
    "Operating Systems Fundamentals",
    "Computer Organization & Architecture",
    "Design & Analysis of Algorithms",
    "Discrete Mathematics & Logic",
    "Principles of Software Engineering"
  ]
};

export const certifications: CertificationItem[] = [
  {
    id: "cert-java",
    title: "Java Programming",
    issuer: "Academic & Professional Credential",
    status: "Ready to Upload",
    description: "Comprehensive coverage of core Java concepts, object-oriented design, collections framework, exception handling, and multithreading.",
    skillsCovered: ["Java Core", "OOP Principles", "Collections Framework", "File I/O"]
  },
  {
    id: "cert-python",
    title: "Python Programming",
    issuer: "Academic & Professional Credential",
    status: "Ready to Upload",
    description: "Practical Python proficiency spanning scripting, data structures, modular package architecture, and web framework fundamentals.",
    skillsCovered: ["Python 3", "Data Structures", "Flask Basics", "Automation Scripts"]
  },
  {
    id: "cert-dbms",
    title: "Database Management Systems",
    issuer: "Academic & Professional Credential",
    status: "Ready to Upload",
    description: "Relational database modeling, query construction, schema normalization, index tuning, and integrity constraints.",
    skillsCovered: ["SQL Queries", "Schema Normalization", "Relational Algebra", "MySQL Administration"]
  },
  {
    id: "cert-web",
    title: "Web Development",
    issuer: "Academic & Professional Credential",
    status: "Ready to Upload",
    description: "Full-spectrum client-side web engineering covering semantic HTML5, modern CSS3 styling, and JavaScript ES6+ features.",
    skillsCovered: ["HTML5", "CSS3 / Flexbox / Grid", "JavaScript (ES6+)", "Responsive Design"]
  }
];

export const githubProfile = {
  username: "sumanmogaveera",
  profileUrl: "https://github.com/sumanmogaveera",
  publicRepos: 12,
  primaryLanguages: [
    { name: "Java", percentage: 38, color: "#EA580C" },
    { name: "Python", percentage: 28, color: "#3B82F6" },
    { name: "JavaScript / Web", percentage: 20, color: "#EAB308" },
    { name: "C", percentage: 14, color: "#06B6D4" }
  ],
  pinnedRepos: [
    {
      name: "lost-and-found-item-finder",
      description: "Web platform connecting people who lost items with finders, featuring photo listings, search, and claim workflows.",
      language: "JavaScript / Python",
      stars: "★ 4",
      forks: "1"
    },
    {
      name: "smart-hostel-attendance",
      description: "Automated hostel attendance system using QR code validation and facial recognition with Flask and SQLite.",
      language: "Python",
      stars: "★ 3",
      forks: "1"
    },
    {
      name: "medical-data-privacy-protection",
      description: "Privacy-preserving machine learning framework for sensitive medical record masking and PII anonymization.",
      language: "Python",
      stars: "★ 5",
      forks: "2"
    }
  ]
};
