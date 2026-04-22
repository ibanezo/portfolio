export const profile = {
  name: "Martin Shterjoski",
  title: "Intermediate Software Engineer",
  company: "ti&m",
  location: "Düsseldorf, Germany",
  about:
    "Software Engineer with 7+ years of experience in the Backend field. Fast, creative and deadline oriented.",
  quote:
    "Learn as you will live forever, live as you will die tomorrow.",
  github: "https://github.com/ibanezo",
  githubUsername: "ibanezo",
  linkedin: "https://www.linkedin.com/in/martin-shterjoski/",
  repoUrl: "https://github.com/ibanezo/portfolio",
} as const;

export interface ExperienceEntry {
  company: string;
  title: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "ti&m",
    title: "Intermediate Software Engineer",
    type: "Full-time",
    period: "Mar 2023 – Present",
    location: "Düsseldorf, Germany",
    bullets: [],
  },
  {
    company: "Accenture",
    title: "Software Engineer Analyst",
    type: "Full-time",
    period: "Apr 2021 – Mar 2023",
    location: "Düsseldorf, Germany",
    bullets: [
      "Technical implementation of custom software solutions in Java",
      "Software quality assurance through JUnit, workflow, and integration tests",
      "Migration of services to newer Java versions",
      "Implementation planning including requirements analysis",
      "Mentoring new joiners",
    ],
  },
  {
    company: "Asseco South Eastern Europe",
    title: "Software Engineer",
    type: "Full-time",
    period: "Mar 2019 – Feb 2021",
    location: "Skopje, Macedonia",
    bullets: [
      "Implementing and managing software programs, modules and features",
      "Modifying software to fix errors and improve performance",
      "Software maintenance and testing of new features",
      "Preparing reports on project specifications and documentation",
    ],
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    type: "Freelance",
    period: "May 2020 – Oct 2020",
    location: "Skopje, Macedonia",
    bullets: [
      "Building features with Vue.js, Vuex, and Firebase",
      "Implementing responsive designs",
      "Integration with cloud services",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    name: "Certified Professional for Software Architecture",
    issuer: "iSAQB® — Foundation Level",
    date: "Jul 2024",
  },
  {
    name: "Certified Kubernetes Application Developer",
    issuer: "CNCF — CKAD",
    date: "May 2023",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services — Associate",
    date: "Jun 2022",
  },
  {
    name: "AWS Partner: Accreditation (Technical)",
    issuer: "Amazon Web Services",
    date: "Jun 2021",
  },
];

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  label: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: [{ name: "Java", icon: "devicon:java" }],
  },
  {
    label: "Frameworks",
    items: [{ name: "Spring Boot", icon: "devicon:spring" }],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", icon: "devicon:docker" },
      { name: "Kubernetes", icon: "devicon:kubernetes" },
      { name: "Jenkins", icon: "devicon:jenkins" },
      { name: "Terraform", icon: "devicon:terraform" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS", icon: "devicon:amazonwebservices-wordmark" },
      { name: "Azure", icon: "devicon:azure" },
    ],
  },
  {
    label: "Version Control",
    items: [
      { name: "Git", icon: "devicon:git" },
      { name: "GitHub", icon: "devicon:github" },
      { name: "GitLab", icon: "devicon:gitlab" },
    ],
  },
  {
    label: "Messaging",
    items: [{ name: "Apache Kafka", icon: "devicon:apachekafka" }],
  },
];

export interface ProficiencyItem {
  name: string;
  level: number;
}

export const techProficiency: ProficiencyItem[] = [
  { name: "Java", level: 95 },
  { name: "Spring Boot", level: 90 },
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 80 },
  { name: "AWS", level: 80 },
  { name: "PostgreSQL", level: 80 },
  { name: "Terraform", level: 70 },
  { name: "Apache Kafka", level: 70 },
  { name: "Azure", level: 65 },
  { name: "Vue.js", level: 60 },
];
