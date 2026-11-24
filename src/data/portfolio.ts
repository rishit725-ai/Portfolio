export const profile = {
  name: "Rishit Jena",
  firstName: "Rishit",
  title: "AI/ML & Full Stack Engineer",
  location: "Bangalore, India",
  status: "Graduating June 2027 — open to full-time roles & internships",
  email: "rishitjena725@gmail.com",
  resume: "/RishitJena_Resume.pdf",
  github: "https://github.com/rishit725-ai",
  linkedin: "https://www.linkedin.com/in/rishit-jena-008948313",
  intro:
    "Computer Science student at PES University. I build machine-learning systems and the full-stack apps around them — most recently a guardrails library for enterprise AI at Sify and an award-winning smart agriculture platform.",
  roles: ["AI/ML Engineer", "Full Stack Developer", "AI Guardrails Builder", "Workflow Intelligence Engineer"],
};

export const stats = [
  { value: 1, prefix: "#", suffix: "", label: "Terrathon 4.0 (Cisco)" },
  { value: 5, prefix: "", suffix: "", label: "ML models in one system" },
  { value: 2, prefix: "", suffix: "", label: "industry internships" },
  { value: 77, prefix: "", suffix: "%", label: "NPTEL Deep Learning · Silver" },
];

export const focusAreas = [
  {
    icon: "cpu",
    title: "Applied Machine Learning",
    desc: "Deep learning and classical ML — from CNN feature extractors to multi-model systems serving real users.",
  },
  {
    icon: "shield",
    title: "AI Safety & Guardrails",
    desc: "Configurable input validation, security, and compliance layers for enterprise AI.",
  },
  {
    icon: "code",
    title: "Full Stack Development",
    desc: "React front ends and Node.js / FastAPI back ends that put ML inference in front of users.",
  },
  {
    icon: "workflow",
    title: "Workflow Intelligence",
    desc: "Dependency-aware tracking and bottleneck detection, grounded in real manufacturing operations.",
  },
] as const;

export const experience = [
  {
    role: "AI/ML Intern",
    company: "Sify Technologies Limited",
    location: "Bangalore",
    period: "Jun — Aug 2026",
    points: [
      "Developed a modular Guardrails Library in Python for enterprise AI systems, implementing configurable processors for input validation, security, and compliance.",
      "Contributed to a scalable, open-source framework by designing reusable guardrail components, testing workflows, and developer documentation.",
    ],
    tags: ["Python", "AI Safety", "Guardrails", "Open Source"],
  },
  {
    role: "Intern",
    company: "Vishesh Innovative Technologies",
    location: "Bangalore",
    period: "Jun — Jul 2025",
    points: [
      "Analyzed end-to-end EMS manufacturing workflows across Procurement, Production, QA, SCM, and HR to identify process gaps and accuracy risks.",
      "Mapped ERP-driven process digitization, inventory management, and production planning systems.",
      "Documented workflow dependencies and bottlenecks, translating findings into recommendations for tighter, more efficient processes.",
    ],
    tags: ["EMS", "ERP", "Process Analysis"],
  },
];

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  stat: { value: string; label: string };
  hue: "emerald" | "blue" | "violet";
  award?: string;
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Smart Agriculture System",
    summary:
      "An AI platform for sustainable farming that puts five ML models behind a real-time farmer assistant. Built for the Cisco Systems problem statement at Terrathon 4.0 — and won.",
    highlights: [
      "Five ML models for disease detection, crop recommendation, irrigation scheduling, and price forecasting",
      "React chatbot wired to ML inference services for real-time assistance",
      "Owned ML integration, data preprocessing, and the frontend",
    ],
    stack: ["Python", "React", "InceptionV3", "XGBoost", "scikit-learn"],
    stat: { value: "1st Place", label: "Terrathon 4.0 · ₹25,000" },
    hue: "emerald",
    award: "Hackathon winner",
    github: "https://github.com/rishit725-ai/Terrathon-Cisco-main",
  },
  {
    title: "Smart EMS Workflow Intelligence Platform",
    summary:
      "A full-stack platform that tracks electronics-manufacturing workflows from RFQ to dispatch, maps dependencies between stages, and flags where production is about to stall.",
    highlights: [
      "Dependency-aware workflow tracking with inventory and QA monitoring",
      "Operational alerts when stages stall or dependencies break",
      "Intelligence layer that surfaces bottlenecks and production recommendations",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "FastAPI"],
    stat: { value: "RFQ → Dispatch", label: "end-to-end tracking" },
    hue: "blue",
    github: "https://github.com/rishit725-ai/Smart-EMS-Main",
  },
  {
    title: "Music Genre Classification",
    summary:
      "A hybrid pipeline that uses a CNN as a learned feature extractor and feeds compact embeddings into classical classifiers (SVM, GDA) on the GTZAN dataset.",
    highlights: [
      "Compressed the feature space from 25,840 to 320 dimensions while improving accuracy",
      "Benchmarked classifiers on accuracy vs. compute — CNN + SVM came out on top",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "NumPy"],
    stat: { value: "25,840 → 320", label: "feature dimensions" },
    hue: "violet",
    github: "https://github.com/rishit725-ai/Music-Classification-through-CNN-and-Classical-Algorithms",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "C", "Java"] },
  {
    title: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "CNNs", "PyTorch", "scikit-learn", "XGBoost", "LLM Guardrails"],
  },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Data Analytics"] },
  { title: "Web & Backend", items: ["React", "Node.js", "Express", "FastAPI", "REST APIs"] },
  { title: "Domain", items: ["Workflow & Risk Monitoring", "ERP Process Digitization", "EMS Manufacturing"] },
  { title: "Professional", items: ["Team Leadership", "People Management", "Cross-functional Coordination"] },
];

export const marquee = [
  "Python",
  "PyTorch",
  "scikit-learn",
  "XGBoost",
  "InceptionV3",
  "React",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "SQL",
  "Java",
  "C",
];

export const achievements = [
  {
    icon: "trophy",
    title: "1st Place — Terrathon 4.0",
    meta: "Cisco Systems problem statement · ₹25,000 prize",
    desc: "Won with an AI-powered smart agriculture platform integrating five ML models.",
  },
  {
    icon: "award",
    title: "Silver Medal — NPTEL Deep Learning",
    meta: "IIT Ropar · 77%",
    desc: "Silver Medal in the NPTEL Deep Learning certification from the Indian Institute of Technology Ropar.",
  },
] as const;

export const education = [
  { school: "PES University", degree: "B.Tech, Computer Science", period: "2023 — 2027" },
  { school: "AECS Maaruti Magnolia Public School", degree: "Senior Secondary (CBSE)", period: "2021 — 2023" },
  { school: "National Public School", degree: "Secondary (CBSE)", period: "2016 — 2020" },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
