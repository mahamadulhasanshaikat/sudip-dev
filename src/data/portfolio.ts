// data/portfolio.ts

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github: string;
  linkedin: string;
  education: {
    degree: string;
    institution: string;
    cgpa: string;
    period: string;
    honors: string;
    thesis: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  details: string[];
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  featured: boolean;
  tech: string[];
  description: string;
  link: string;
  github?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PublicationItem {
  title: string;
  conference: string;
  publisher: string;
  year: string;
  doi: string;
  link: string;
  abstractSummary: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  link: string;
}

export interface ActivityItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: number;
}

export interface ReferenceItem {
  name: string;
  designation: string;
  department: string;
  institution: string;
  email: string;
  phone?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sudip Sarker",
  role: "Software Developer & ML Engineer",
  email: "sudipsarker2016@gmail.com",
  phone: "+880 1706364339",
  location: "Dhaka, Bangladesh",
  bio: "Dedicated Computer Science graduate specializing in enterprise backend development, cross-platform mobile architecture (Flutter), and machine learning research. Experienced in building scalable ERP modules, REST microservices, and deep learning diagnostic systems.",
  github: "https://github.com/sudipsarker14",
  linkedin: "https://linkedin.com/in/sudipsarker14",
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Southeast University",
    cgpa: "3.77 / 4.00",
    period: "July 2021 – June 2025",
    honors: "Awarded Merit Scholarship for Academic Excellence",
    thesis: "Machine Learning for Breast Cancer Classification: A Comparative Study of Grid Search-Optimized SVM, Random Forest, and XGBoost",
  },
  stats: [
    { label: "B.Sc. CGPA", value: "3.77", description: "Southeast University" },
    { label: "IEEE Papers", value: "2+", description: "Published Research" },
    { label: "Production Apps", value: "6+", description: "Web, Mobile & ML" },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    role: "Software Developer (Graduate Engineer Trainee)",
    company: "Tex Fasteners | Adamjee EPZ",
    location: "Narayanganj, Bangladesh",
    period: "Aug 2025 – Present",
    type: "Full-Time",
    details: [
      "Engineered an automated Vendor Bidding System inside custom Odoo Logistics with Lot/Serial tracking, reducing manual tender workflow time by 30%.",
      "Designed and deployed real-time Inventory & Sales KPI dashboards with valuation tracking and movement analytics across production lines.",
      "Implemented an NPS-based customer feedback engine integrated with CRM for continuous client satisfaction monitoring.",
    ],
    highlights: [
      "Engineered an automated Vendor Bidding System inside custom Odoo Logistics with Lot/Serial tracking, reducing manual tender workflow time by 30%.",
      "Designed and deployed real-time Inventory & Sales KPI dashboards with valuation tracking and movement analytics across production lines.",
      "Implemented an NPS-based customer feedback engine integrated with CRM for continuous client satisfaction monitoring.",
    ],
    skills: ["Python", "Odoo ERP", "PostgreSQL", "JavaScript", "XML", "QWeb Reports"],
  },
  {
    role: "Software Development Intern",
    company: "Sonali Bank PLC (Head Office, ITD)",
    location: "Dhaka, Bangladesh",
    period: "Mar 2025 – Jun 2025",
    type: "Internship",
    details: [
      "Contributed to building the Incident Response Register System to streamline IT incident reporting, role-based tracking, and security auditing.",
      "Developed and debugged resilient RESTful APIs using Spring Boot microservices, optimizing query performance with MySQL.",
    ],
    highlights: [
      "Contributed to building the Incident Response Register System to streamline IT incident reporting, role-based tracking, and security auditing.",
      "Developed and debugged resilient RESTful APIs using Spring Boot microservices, optimizing query performance with MySQL.",
    ],
    skills: ["Spring Boot", "ReactJS", "MySQL", "Microservices", "RESTful APIs"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Incident Response Register System",
    category: "Enterprise Full-Stack",
    featured: true,
    badge: "Enterprise",
    tech: ["Spring Boot", "ReactJS", "MySQL", "Microservices Architecture"],
    description: "Centralized web platform built for Sonali Bank PLC to log, triage, and audit IT and security incident workflows with role-based access control.",
    link: "https://github.com/sudipsarker14",
    github: "https://github.com/sudipsarker14",
  },
  {
    title: "Kabir E-commerce Mobile Platform",
    category: "Mobile Application",
    featured: false,
    badge: "Production App",
    tech: ["Dart", "Flutter", "Android", "iOS", "MVC Architecture"],
    description: "Production mobile application featuring dynamic catalogs, reusable widget architecture, state-managed shopping cart, checkout flows, and parcel tracking.",
    link: "https://github.com/sudipsarker14",
    github: "https://github.com/sudipsarker14",
  },
  {
    title: "Cloud E-commerce & Real-time Hub",
    category: "Mobile & Cloud",
    featured: true,
    badge: "Cloud Sync",
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    description: "Architected a full-featured e-commerce ecosystem with real-time database sync, personalized recommendation algorithms, and secure transactional checkout.",
    link: "https://github.com/sudipsarker14/sdp_e_commerce",
    github: "https://github.com/sudipsarker14/sdp_e_commerce",
  },
  {
    title: "Inventory Control & Valuation System",
    category: "Web Application",
    featured: false,
    badge: "Analytics",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP"],
    description: "Real-time stock valuation platform featuring automated low-inventory alerts, batch movement audits, and tabular financial summaries.",
    link: "https://github.com/sudipsarker14/inventory_management_system",
    github: "https://github.com/sudipsarker14/inventory_management_system",
  },
  {
    title: "Medical Expenditure Predictive Engine",
    category: "Machine Learning",
    featured: true,
    badge: "AI Model",
    tech: ["Python", "Keras", "Scikit-Learn", "Pandas", "NumPy"],
    description: "Healthcare insurance expenditure forecasting model utilizing regression algorithms and risk factor stratification to predict premium pricing.",
    link: "https://github.com/sudipsarker14/medical_expenditure_prediction",
    github: "https://github.com/sudipsarker14/medical_expenditure_prediction",
  },
  {
    title: "Colten Interactive Dating & Social App",
    category: "Mobile & Backend",
    featured: false,
    badge: "Social",
    tech: ["Flutter", "Dart", "RESTful APIs", "Cloud Storage"],
    description: "Social networking mobile app with encrypted partner connections, 'Special Moments' dynamic timeline feeds, and secure archive photo storage.",
    link: "https://github.com/sudipsarker14",
    github: "https://github.com/sudipsarker14",
  },
  {
    title: "Cat & Dog Deep Learning Classifier",
    category: "Computer Vision",
    featured: false,
    badge: "Deep Learning",
    tech: ["Python", "CNN", "Keras", "TensorFlow"],
    description: "Convolutional Neural Network (CNN) architecture trained for binary image classification with data augmentation and hyperparameter tuning.",
    link: "https://github.com/sudipsarker14/Deep_learning_models",
    github: "https://github.com/sudipsarker14/Deep_learning_models",
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "Dart", "JavaScript", "SQL", "R"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Flutter", "Spring Boot", "Tailwind CSS", "Keras", "Scikit-Learn"],
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Docker", "Git / GitHub"],
  },
  {
    title: "Architecture & Systems",
    skills: ["Odoo ERP", "Microservices", "RESTful APIs", "MVC Pattern", "System Design"],
  },
];

export const publications: PublicationItem[] = [
  {
    title: "Machine Learning for Breast Cancer Classification: A Comparative Study of Grid Search-Optimized SVM, Random Forest, and XGBoost",
    conference: "2025 IEEE International Conference on Quantum Photonics, AI, and Networking (QPAIN)",
    publisher: "IEEE",
    year: "2025",
    doi: "10.1109/QPAIN66474.2025.11172245",
    link: "https://ieeexplore.ieee.org/document/11172245",
    abstractSummary: "Comparative benchmark of optimized ensemble methods and SVM classifiers achieving superior diagnostic precision on oncology datasets.",
  },
  {
    title: "Mel-XNet: A Dual-Architecture Ensemble for High-Accuracy Melanoma Detection with Integrated Explainability",
    conference: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
    publisher: "IEEE",
    year: "2025",
    doi: "10.1109/ICCIT.2025",
    link: "https://ieeexplore.ieee.org/document/11491531",
    abstractSummary: "Dual-architecture deep learning ensemble for early melanoma skin lesion detection featuring Grad-CAM based model explainability.",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Turning Data into Decisions using Python",
    issuer: "IBM SkillsBuild",
    year: "2024 – 2025",
    link: "https://www.credly.com/badges/a9be9f2d-61bb-4c1c-af2d-b94665fca928/print",
  },
  {
    title: "Data Science Math Skills",
    issuer: "Duke University (Coursera)",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/9KZZ2HN6N4UM",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/9KZZ2HN6N4UM",
  },
  {
    title: "AI Master Class (30 Days)",
    issuer: "Pantech Prolabs India",
    year: "2023",
    link: "https://drive.google.com/file/d/19QETknwF0CKpTZJ3bX6anja_sT6nHU9A/view?usp=sharing",
  },
  {
    title: "Python Libraries for Machine Learning",
    issuer: "Great Learning Academy",
    year: "2024",
    link: "https://drive.google.com/file/d/16nwgGCHK9Y5CBuxKGb6UwaknqPsaJG5E/view?usp=drive_link",
  },
  {
    title: "Data Analytics Foundations",
    issuer: "LinkedIn Learning",
    year: "2024",
    link: "https://drive.google.com/file/d/12w9Z3CqOcBdwBEqUyhPi0avy_3C2FVFb/view?usp=drive_link",
  },
];

export const activities: ActivityItem[] = [
  {
    role: "IEEE Student Member",
    organization: "IEEE",
    period: "2025 – 2026",
    description: "Actively involved in peer technical seminars, scientific paper peer groups, and global electrical & computer engineering forums.",
  },
  {
    role: "Youth Officer",
    organization: "GEIST International Foundation & US Embassy",
    period: "2022",
    description: "Coordinated logistics and workshops for the International Leadership Education Program (ILEP V3), fostering youth STEM leadership.",
  },
  {
    role: "Department Representative",
    organization: "Southeast Model United Nations Club",
    period: "2022 – 2024",
    description: "Represented the Department of CSE in competitive debate circuits, parliamentary simulations, and inter-university technical symposia.",
  },
];

export const languages: LanguageItem[] = [
  { language: "Bengali", proficiency: "Native / Mother Tongue", level: 100 },
  { language: "English", proficiency: "Professional Working Proficiency (CEFR C1 Level)", level: 85 },
];

export const references: ReferenceItem[] = [
  {
    name: "Md. Mijanur Rahman",
    designation: "Assistant Professor",
    department: "Department of CSE",
    institution: "Southeast University",
    email: "mijanur.rahman@seu.edu.bd",
    // phone: "+880 1911354201",
  },
  {
    name: "Shahriar Manzoor",
    designation: "Associate Professor & Chairman",
    department: "Department of CSE",
    institution: "Southeast University",
    email: "smanzoor@seu.edu.bd",
  },
];