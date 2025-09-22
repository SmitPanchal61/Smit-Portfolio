
import React from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Hammer, Layers } from "lucide-react";
import { motion } from "framer-motion";

// --- Simple data layer so it's easy to update ---
const PROFILE = {
  name: "Smit Mahesh Panchal",
  title: "M.S. in Software Engineering @ ASU (’26)",
  location: "Tempe, AZ",
  email: "smitpanchal1661@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/smit-panchal-9a83ba1b7/",
    github: "https://github.com/smitpanchal61",
    resume: "/Smit-Mahesh-Panchal-Resume.pdf" // points to public file
  }
};

const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "M.S. in Software Engineering",
    date: "Expected May 2026",
    gpa: "3.78 / 4.00",
  },
  {
    school: "University of Mumbai (AI & ML Honors)",
    degree: "B.E. in Computer Engineering",
    date: "Graduated",
    gpa: "3.58 / 4.00",
  },
];

const EXPERIENCE = [
  {
    role: "NLP & Machine Learning Intern",
    company: "Blue Clay Health – USA",
    date: "Aug 2025 – Sep 2025",
    bullets: [
      "Built AI-driven clinical documentation features for entity extraction, de-identification, and summarization.",
      "Designed RAG workflows with vector databases to boost query accuracy.",
      "Streamlined MLOps with experiment tracking, version control, and CI/CD; deployed on Vercel.",
      "Partnered with full‑stack engineers to integrate ML services into production.",
    ],
  },
];

const PROJECTS = [
  {
    name: "Web-Based Software Metrics Calculator (SER 516)",
    stack: ["Java", "Spring Boot", "Docker", "Vue.js", "MongoDB", "GitHub Actions"],
    desc:
      "Full‑stack app for software metrics (coupling, defect density, instability) with microservices, REST APIs, Docker, CI/CD, and a realtime Vue UI.",
    links: [],
  },
  {
    name: "Carpool: Ride‑Sharing Web Platform",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Django", "SQL"],
    desc:
      "Responsive carpooling site with secure account management and request tracking. Iterated with feedback from 30+ users across 3 testing cycles.",
    links: [
      { label: "Repo", href: "https://github.com/SmitPanchal61/CarPool" },
    ],
  },
  {
    name: "RecycleMate: AI‑Powered Waste Classification",
    stack: ["TensorFlow", "Keras", "OpenCV", "Python", "Django", "SQLite"],
    desc:
      "CNN model (85% accuracy) integrated into a Django app for real‑time recyclable vs non‑recyclable classification. Featured in an IEEE publication.",
    links: [
      { label: "Repo", href: "https://github.com/SmitPanchal61/RecycleMate" },
      { label: "IEEE", href: "https://ieeexplore.ieee.org/document/10425151" },
    ],
  },
  {
    name: "NLP‑Powered Short Video Enrichment System",
    stack: ["React", "Flask", "Firebase", "NLP"],
    desc:
      "Personalized short‑video recommendations using CountVectorizer + Cosine Similarity across 2,000+ videos; IEEE paper (Feb 2024).",
    links: [],
  },
];

const SKILLS = {
  programming: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Scala",
    "C/C++",
    "SQL",
    "OpenSSL",
    "Ajax",
  ],
  frameworks: [
    "Spring Boot",
    "Django",
    "React",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Snyk",
    "SonarQube",
    "Cppcheck",
  ],
  dataCloud: [
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Firebase",
    "AWS (S3, Lambda, EC2, EKS)",
    "Spark",
  ],
  tools: [
    "Git",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Gradle",
    "Maven",
    "CI/CD",
    "Agile/Scrum",
    "A/B Testing",
    "Valgrind",
  ],
};

const AWARDS = [
  {
    title: "Smart India Hackathon 2023 – Software Edition Winner (PS – SIH1453)",
    org: "Delhi, India",
    bullets: [
      "Security analysis on OpenVPN’s crypto library and OpenSSL integration using Snyk, Cppcheck, SonarQube, Valgrind, AddressSanitizer.",
      "Identified 60+ memory leaks and API misuse impacting security and stability; presented findings to directors.",
    ],
  },
];

// --- UI helpers ---
const Section = ({ id, title, icon: Icon, children }: any) => (
  <section id={id} className="scroll-mt-24">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="grid gap-5">{children}</div>
  </section>
);

const Card = ({ children }: any) => (
  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/60 shadow-sm backdrop-blur">
    {children}
  </div>
);

const Tag = ({ label }: any) => (
  <span className="px-2 py-1 rounded-full border text-xs border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
    {label}
  </span>
);

// --- Main Component ---
export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-gray-200/70 dark:border-gray-800/70 backdrop-blur bg-white/70 dark:bg-gray-950/70">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Hi, there!</a>
          <div className="flex items-center gap-2">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><Linkedin className="w-5 h-5"/></a>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><Github className="w-5 h-5"/></a>
            <a href={`mailto:${PROFILE.email}`} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"><Mail className="w-5 h-5"/></a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-10"
      >
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{PROFILE.title}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4"/> {PROFILE.location}</span>
              <span className="inline-flex items-center gap-1"><Mail className="w-4 h-4"/> <a className="underline underline-offset-4" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></span>
            </div>
            <div className="mt-5 flex gap-3">
              <a href={PROFILE.links.resume} className="px-4 py-2 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90">Download Resume</a>
              <a href="#projects" className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">View Projects</a>
            </div>
          </div>
          <Card>
            <div className="flex items-center gap-4">
              <img src="/images/Smit-Photo-Professional.png.jpg" alt="Smit Mahesh Panchal" className="h-28 w-28 rounded-2xl object-cover ring-4 ring-white/70 dark:ring-white/10 shadow-md" />
              <p className="text-sm leading-relaxed">
                I build practical, production‑ready software and ML systems. Recent work includes RAG workflows for clinical docs, a metrics platform scaling to 16 microservices,
                and applied CNN/NLP projects published with IEEE. I enjoy shipping clean code, collaborating in agile teams, and turning ideas into reliable products.
              </p>
            </div>
          </Card>
        </div>
      </motion.section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 space-y-14">
        {/* Experience */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          {EXPERIENCE.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{exp.date}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </Card>
            </motion.div>
          ))}
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={Hammer}>
          <div className="grid md:grid-cols-2 gap-5">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold leading-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => <Tag key={t} label={t} />)}
                  </div>
                  {p.links?.length ? (
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      {p.links.map((l, k) => (
                        <a key={k} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
                          {l.label} <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Technical Skills" icon={Layers}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Card>
              <h4 className="font-semibold">Programming & Scripting</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.programming.map((s) => <Tag key={s} label={s} />)}
              </div>
            </Card>
            <Card>
              <h4 className="font-semibold">Frameworks & Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.frameworks.map((s) => <Tag key={s} label={s} />)}
              </div>
            </Card>
            <Card>
              <h4 className="font-semibold">Databases & Cloud</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.dataCloud.map((s) => <Tag key={s} label={s} />)}
              </div>
            </Card>
            <Card>
              <h4 className="font-semibold">Tools & Dev</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.tools.map((s) => <Tag key={s} label={s} />)}
              </div>
            </Card>
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={GraduationCap}>
          <div className="grid md:grid-cols-2 gap-5">
            {EDUCATION.map((e, i) => (
              <Card key={i}>
                <h3 className="font-semibold leading-tight">{e.school}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{e.degree}</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex gap-3 flex-wrap">
                  <span>{e.date}</span>
                  <span>GPA: {e.gpa}</span>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards & Achievements" icon={Award}>
          {AWARDS.map((a, i) => (
            <Card key={i}>
              <h3 className="font-semibold leading-tight">{a.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{a.org}</p>
              <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                {a.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="inline-flex items-center gap-1 underline underline-offset-4" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            <a className="inline-flex items-center gap-1 underline underline-offset-4" href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="w-4 h-4"/> GitHub</a>
            <a className="inline-flex items-center gap-1 underline underline-offset-4" href={`mailto:${PROFILE.email}`}><Mail className="w-4 h-4"/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
