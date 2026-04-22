export const profile = {
  name: "Martin Shterjoski",
  title: "Intermediate Software Engineer",
  company: "ti&m",
  location: "Düsseldorf, Germany",
  about:
    "Software Engineer with 7+ years of experience in the Backend field. Fast, creative and deadline oriented. Passionate about AI Agents and leveraging tools like Claude Code to supercharge development workflows.",
  quote:
    "Learn as you will live forever, live as you will die tomorrow.",
  github: "https://github.com/ibanezo",
  githubUsername: "ibanezo",
  linkedin: "https://www.linkedin.com/in/martin-shterjoski/",
  email: "martin.sterjoski@gmail.com",
  phone: "+491636860351",
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
    bullets: [
      "Developing microservice architectures using Java, Kotlin, Spring Boot, and Quarkus across public sector, healthcare, and finance",
      "Designing RESTful APIs with OpenAPI for high-throughput, multi-stakeholder platforms",
      "Building event-driven systems with Apache Kafka for real-time data processing",
      "Automating business processes with Camunda BPM and integrating identity management via KeyCloak",
      "Leading application migrations from Java to Kotlin and Spring Boot to Quarkus",
      "Managing DevOps and infrastructure on Kubernetes and OpenShift with CI/CD pipelines",
      "Driving end-to-end process digitalization for government and financial workflows",
      "Working with AI Agents and tools like Claude Code to enhance development workflows",
    ],
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
    items: [
      { name: "Java", icon: "devicon:java" },
      { name: "Kotlin", icon: "devicon:kotlin" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Spring Boot", icon: "devicon:spring" },
      { name: "Quarkus", icon: "devicon:quarkus" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Oracle DB", icon: "devicon:oracle" },
      { name: "Elasticsearch", icon: "devicon:elasticsearch" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", icon: "devicon:docker" },
      { name: "Kubernetes", icon: "devicon:kubernetes" },
      { name: "OpenShift", icon: "devicon:redhat" },
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
  {
    label: "AI & Agents",
    items: [
      { name: "Claude Code", icon: "devicon:aiassistant" },
      { name: "AI Agents", icon: "devicon:aiassistant" },
      { name: "Prompt Engineering", icon: "devicon:aiassistant" },
    ],
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Martin is a highly skilled backend engineer who consistently delivers clean, well-architected solutions. His expertise with Spring Boot and Kafka made a real impact on our project.",
    author: "Placeholder Name",
    role: "Tech Lead",
    company: "ti&m",
  },
  {
    quote: "A reliable team player who takes ownership of complex problems. Martin's ability to bridge the gap between architecture and implementation is exceptional.",
    author: "Placeholder Name",
    role: "Project Manager",
    company: "Accenture",
  },
  {
    quote: "Martin brought strong technical skills and a positive attitude to our team. His contributions to our microservice migration were invaluable.",
    author: "Placeholder Name",
    role: "Senior Engineer",
    company: "Asseco SEE",
  },
];

export interface ProficiencyItem {
  name: string;
  level: number;
}

export const techProficiency: ProficiencyItem[] = [
  { name: "Java", level: 95 },
  { name: "Spring Boot", level: 90 },
  { name: "Kotlin", level: 80 },
  { name: "Docker", level: 85 },
  { name: "Kubernetes / OpenShift", level: 80 },
  { name: "Apache Kafka", level: 80 },
  { name: "PostgreSQL", level: 80 },
  { name: "AWS", level: 75 },
  { name: "AI Agents & LLMs", level: 75 },
  { name: "Quarkus", level: 70 },
  { name: "Camunda BPM", level: 70 },
  { name: "Terraform", level: 70 },
];
