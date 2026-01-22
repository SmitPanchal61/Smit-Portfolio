
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
    resume: "/Smit_M_Panchal_Resume.pdf" // points to public file
  }
};

const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "Master of Science in Software Engineering",
    date: "Graduating May 2026",
    gpa: "3.93 / 4.00",
    coursework: ["Cloud Computing", "Data Processing at Scale", "Web-Based Applications", "Software Project", "Process & Quality Management", "Languages and Programming Paradigms", "Software Agility", "Advanced Data Structures and Algorithms", "Foundations of Software Engineering", "Semantic Web Engineering"]
  },
  {
    school: "University Of Mumbai (AI & ML Honors)",
    degree: "B.E. in Computer Engineering",
    date: "Dec 2020 – Apr 2024",
    gpa: "3.58 / 4.00",
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Software Engineering", "Machine Learning", "Artificial Intelligence", "Natural Language Processing", "Big Data Analytics", "Distributed Computing", "Applied Data Science"]
  },
];

const EXPERIENCE = [
  {
    role: "Machine Learning Engineering Intern",
    company: "Escape LLC – USA",
    date: "Oct 2025 – Jan 2026",
    bullets: [
      "Fine-tuned Meta MusicGen with LoRA to build personalized AI soundscape pipelines for emotion-aware wellness use cases.",
      "Engineered FastAPI microservices integrating OpenAI and Google Places API to enrich 20+ leads per city.",
      "Designed structured LLM prompts to generate company summaries, lead scores, growth signals, and opportunity angles in JSON.",
      "Built REST APIs returning FlutterFlow-compatible JSON to support downstream analytics and client applications.",
      "Implemented scalable data persistence using Firebase Firestore for storing AI-generated lead attributes.",
    ],
  },
  {
    role: "NLP & Machine Learning Intern",
    company: "Blue Clay Health – USA",
    date: "Aug 2025 – Sep 2025",
    bullets: [
      "Built pipelines to process uploaded documents, generate embeddings, and enable semantic retrieval using vector similarity search.",
      "Implemented audio-based RAG workflows combining speech inputs with embeddings for contextual question answering.",
      "Developed React components for document upload, listing, and actions to manage AI-processed files through a clean UI.",
      "Integrated backend AI pipelines with frontend workflows to support real-time document ingestion and retrieval.",
    ],
  },
];

const PROJECTS = [
  {
    name: "RaceLine AI",
    category: "LLM & Full Stack",
    stack: ["FastAPI", "LangChain", "React", "PostgreSQL", "Docker"],
    desc: "LLM-Powered Formula 1 Analytics Platform ingesting multi-season data and serving RAG-based insights via Llama 3.2.",
    bullets: [
      "Built a full-stack analytics platform ingesting multi-season Formula 1 data via FastF1 and serving results through FastAPI APIs.",
      "Implemented RAG-based language querying using LangChain, ChromaDB, and Llama 3.2 via Ollama to answer context-aware F1 questions.",
      "Designed embedding pipelines to index historical race data for semantic search and retrieval-augmented inference.",
      "Developed interactive React dashboards with filters, pagination, and charts to visualize driver and championship performance.",
      "Dockerized backend, database, and frontend services using Docker Compose for reproducible local deployment and scaling.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/SmitPanchal61/Raceline-AI" }
    ],
    image: "/images/projects/raceline.png", 
  },
  {
    name: "Cloud Face Recognition",
    category: "Cloud / IoT",
    stack: ["AWS Lambda", "IoT Greengrass", "Docker", "PyTorch"],
    desc: "Cloud-based face detection pipeline using MTCNN and FaceNet, deployed on AWS Lambda and Edge devices.",
    bullets: [
      "Built a cloud-based face detection and recognition pipeline using AWS Lambda, SQS, and ECR to process IoT video frames.",
      "Implemented face detection with MTCNN and face recognition with FaceNet to generate embeddings and classify identities.",
      "Designed event-driven Lambda workflows with SQS request and response queues to enable asynchronous, scalable processing.",
      "Deployed containerized Lambda functions using Docker and optimized images for CPU-based inference in AWS environments.",
      "Extended the pipeline to edge computing using AWS IoT Greengrass and MQTT for low-latency, on-device face detection.",
    ],
    links: [],
    image: "/images/projects/cloud-face.png",
  },
  {
    name: "RecycleMate",
    category: "AI / ML",
    stack: ["CNN", "Django", "TensorFlow", "OpenCV"],
    desc: "AI-powered waste classification system with 85% accuracy provided via a real-time Django web app.",
    bullets: [
      "Engineered a CNN-based AI model with 85% accuracy to classify recyclable and non-recyclable waste.",
      "Integrated the model into a Django-based web application, enabling real-time predictions through an intuitive user interface.",
      "Leveraged TensorFlow, OpenCV, and Keras for efficient image processing and accurate waste classification.",
      "Utilized SQLite for efficient data storage and Django’s template rendering system to display classification results.",
    ],
    links: [
        { label: "Live Demo", href: "https://recyclemate.onrender.com/" },
        { label: "GitHub", href: "https://github.com/SmitPanchal61/RecycleMate" },
        { label: "IEEE Paper", href: "https://ieeexplore.ieee.org/document/10205704" }
    ],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Metrics Calculator",
    category: "Full Stack",
    stack: ["Java", "Spring Boot", "Vue.js", "MongoDB", "Docker"],
    desc: "Distributed microservices app computing software metrics like defect density, scaling to 16 services.",
    bullets: [
      "Developed a modular web app computing software metrics like defect density and coupling using distributed microservices.",
      "Built a Vue.js frontend with interactive metric visualization and historical trend tracking for project insights.",
      "Automated CI/CD pipelines using GitHub Actions, ensuring consistent builds across all backend services in Agile sprints.",
      "Collaborated in a 24-member Agile team, scaling to 16 microservices and delivering 118 story points in the final sprint.",
    ],
    links: [],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
  },
  {
    name: "Carpool: Ride-Sharing Web Platform",
    category: "Web App",
    stack: ["Django", "Python", "JavaScript", "SQL", "HTML", "CSS"],
    desc: "Built a full-stack web application enabling authenticated users to create, join, and manage ride-sharing trips.",
    bullets: [
      "Designed relational SQL schemas to store user profiles, trip details, and ride requests with data integrity constraints.",
      "Implemented backend REST endpoints in Django to handle trip creation, search, and request workflows.",
      "Integrated frontend views with backend APIs to support dynamic form submission and real-time data updates.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/SmitPanchal61/CarPool" },
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop", 
  },
  {
    name: "NLP-Driven Short Video Recommendation System",
    category: "NLP / AI",
    stack: ["Flask", "Firebase", "React", "NLP", "Python"],
    desc: "Designed and implemented an NLP-based short video recommendation system using Count Vectorization and Cosine Similarity.",
    bullets: [
      "Built an end-to-end recommendation pipeline processing 2,000+ short videos, leveraging hashtags, descriptions, and user interaction data.",
      "Developed a scalable backend architecture using Flask and Firebase (Firestore + Storage) to dynamically serve personalized recommendations.",
      "Applied NLP preprocessing (tokenization, stop-word removal, frequency-based features) to improve semantic similarity accuracy.",
      "Integrated a React.js frontend with a ML backend to create a dual-feed system (general + recommended), enhancing user discovery.",
    ],
    links: [
      { label: "IEEE Paper", href: "https://ieeexplore.ieee.org/document/10425151" }
    ],
    image: "/images/projects/video-rec.png", 
  },
];

const SKILLS = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "SQL"],
  ai_ml: ["NLP", "LLMs", "RAG", "Embeddings", "CNNs", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Spark"],
  genai: ["LangChain", "OpenAI API", "Ollama", "ChromaDB", "Vector DB", "Cursor", "Claude Code"],
  frameworks: ["FastAPI", "Flask", "Django", "Spring Boot", "React", "Node.js", "Express.js"],
  cloud: ["AWS (Lambda, S3, EC2, ECR, SQS, IoT)", "Docker", "Kubernetes", "CI/CD"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite"],
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
const Section = ({ id, className = "", children }: any) => (
  <section id={id} className={`py-24 sm:py-32 scroll-mt-0 ${className}`}>
    <motion.div 
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Apple-style custom bezier
      className="mx-auto max-w-7xl px-6"
    >
      {children}
    </motion.div>
  </section>
);

const SectionHeader = ({ title, subtitle }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="mb-16 max-w-2xl"
  >
    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-earth-text mb-6 tracking-tight leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-earth-muted leading-relaxed">{subtitle}</p>}
  </motion.div>
);

const PillButton = ({ href, children, variant = "primary", icon: Icon }: any) => {
  const base = "inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1";
  const styles = variant === "primary" 
    ? "bg-earth-accent text-white hover:bg-earth-accent/90 shadow-lg shadow-earth-accent/20" 
    : "bg-white text-earth-text border border-earth-secondary hover:border-earth-accent/30";
  
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </a>
  );
};

const ExperienceCard = ({ role, company, date, bullets }: any) => (
  <div className="flex flex-col md:flex-row gap-8 items-start p-8 md:p-10 rounded-[2.5rem] bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-earth-accent/30 group">
      <div className="shrink-0 md:w-1/3">
          <div className="inline-block px-4 py-2 rounded-full bg-earth-bg text-earth-primary text-xs font-bold uppercase tracking-widest mb-4">
              {date}
          </div>
          <h3 className="text-2xl font-heading font-bold text-earth-text mb-1 leading-tight">{company}</h3>
          <p className="text-earth-muted font-medium">{role}</p>
      </div>
      <div className="md:w-2/3 pl-0 md:pl-8 md:border-l border-earth-accent/50 text-earth-text/80 leading-relaxed space-y-3">
           {bullets.map((b: string, i: number) => (
               <p key={i} className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-earth-primary/40">
                  {b}
               </p>
           ))}
      </div>
  </div>
);

const ProjectCard = ({ project, index }: any) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`group flex flex-col md:flex-row gap-8 items-stretch rounded-[2.5rem] overflow-hidden bg-white hover:shadow-xl transition-all duration-500 border border-earth-accent/30 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden shrink-0">
           <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
           <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'}`}>
               <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-earth-primary text-xs font-bold uppercase tracking-widest shadow-sm">
                  {project.category}
               </span>
           </div>
        </div>
        <div className="flex flex-col justify-between flex-1 p-8 md:p-12">
            <div>
              <h3 className="text-3xl font-heading font-bold text-earth-text mb-4 leading-tight group-hover:text-earth-primary transition-colors">{project.name}</h3>
              <p className="text-earth-muted leading-relaxed mb-6 italic text-lg">{project.desc}</p>
              {project.bullets && project.bullets.length > 0 && (
                  <ul className="space-y-3 mb-8 text-earth-text/80">
                      {project.bullets.map((b: string, i: number) => (
                          <li key={i} className="flex gap-3 items-start">
                               <span className="mt-2 w-1.5 h-1.5 rounded-full bg-earth-accent shrink-0"></span>
                               <span>{b}</span>
                          </li>
                      ))}
                  </ul>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between pt-6 border-t border-earth-bg mt-auto gap-4">
               <div className="flex flex-wrap gap-2">
                  {project.stack.map((s: string) => (
                      <span key={s} className="px-3 py-1 bg-earth-bg rounded-lg text-[10px] font-bold text-earth-muted uppercase tracking-wider border border-earth-accent/10">
                          {s}
                      </span>
                  ))}
               </div>
               
               <div className="flex flex-wrap gap-3">
                  {project.links?.map((link: any, i: number) => (
                      <a 
                        key={i}
                        href={link.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-primary text-white text-xs font-bold hover:bg-earth-primary/80 transition-all shadow-md shadow-earth-primary/10"
                      >
                         <span>{link.label}</span>
                         <ExternalLink className="w-3 h-3" />
                      </a>
                  ))}
               </div>
            </div>
        </div>
    </div>
  );
};

// --- Main Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-earth-bg text-earth-text font-body selection:bg-earth-primary selection:text-white">
      {/* Nav */}
      <header className="fixed top-0 w-full z-40 bg-earth-bg/80 backdrop-blur-md border-b border-earth-accent/30">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#home" className="text-xl font-heading font-bold tracking-tight text-earth-text">
            SMIT PANCHAL.
          </a>
          <div className="flex items-center gap-1">
            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-white hover:scale-105 transition-all text-earth-text"><Linkedin className="w-5 h-5"/></a>
            <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-white hover:scale-105 transition-all text-earth-text"><Github className="w-5 h-5"/></a>
            <a href={`mailto:${PROFILE.email}`} className="p-3 rounded-full hover:bg-white hover:scale-105 transition-all text-earth-text"><Mail className="w-5 h-5"/></a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-40 md:pt-48 pb-20">
        <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-earth-secondary/50 text-earth-primary text-sm font-bold uppercase tracking-widest border border-earth-secondary">
                 <span className="w-2 h-2 rounded-full bg-earth-accent animate-pulse"></span>
                 Software Engineer • Master's Student
             </div>
             
             <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold text-earth-text leading-[1] tracking-tight mb-8">
                 Building digital <br/>
                 <span className="text-earth-accent relative inline-block">
                    experiences
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-earth-secondary -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                 </span> that matter.
             </h1>
             
             <p className="text-xl sm:text-2xl text-earth-muted leading-relaxed max-w-2xl mx-auto mb-12">
                 {PROFILE.title}. <br/>
                 Crafting scalable architecture and intuitive interfaces with a focus on performance and precision.
             </p>
             
             <div className="flex flex-wrap justify-center gap-6">
                 <PillButton href="#projects" icon={Hammer}>View Projects</PillButton>
                 <PillButton href={PROFILE.links.resume} variant="secondary" icon={ExternalLink}>Resume</PillButton>
             </div>
             
             {/* Abstract Decor instead of Photo */}
             <div className="mt-20 relative h-32 overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-earth-secondary/30 rounded-full blur-3xl"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[400px] h-[400px] bg-earth-accent/10 rounded-full blur-2xl"></div>
             </div>
        </div>
      </Section>

      {/* Education - Moved to top as requested */}
      <Section id="education" className="bg-earth-bg rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
           <SectionHeader 
             title="Education" 
             subtitle="Academic qualifications and honors." 
          />
          <div className="grid md:grid-cols-2 gap-10">
              {EDUCATION.map((e, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-earth-accent/20">
                      <h4 className="text-2xl font-heading font-bold text-earth-text mb-2">{e.school}</h4>
                      <p className="text-earth-primary font-medium text-lg mb-4">{e.degree}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-earth-muted font-bold tracking-wide uppercase">
                           <span className="bg-earth-bg px-3 py-1 rounded-full">{e.date}</span>
                           <span className="bg-earth-accent/10 text-earth-accent px-3 py-1 rounded-full">{e.gpa} GPA</span>
                      </div>
                      
                      {e.coursework && (
                          <div className="mt-8 pt-6 border-t border-earth-bg">
                              <h5 className="text-xs font-bold uppercase tracking-widest text-earth-muted mb-4">Relevant Coursework</h5>
                              <div className="flex flex-wrap gap-2">
                                  {e.coursework.map((course: string) => (
                                      <span key={course} className="px-3 py-1 bg-earth-bg/50 rounded-lg text-sm text-earth-text/70 border border-earth-accent/10">
                                          {course}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
           <SectionHeader 
             title="Professional Experience" 
             subtitle="My background in the industry, from internships to full-time roles." 
          />
          <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
              ))}
          </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="bg-earth-bg rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32">
          <SectionHeader 
             title="Featured Projects" 
             subtitle="A selection of software engineering work, spanning from AI/ML models to full-stack web applications." 
          />
          <div className="flex flex-col gap-16">
              {PROJECTS.map((p, i) => (
                  <ProjectCard key={i} project={p} index={i} />
              ))}
          </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="bg-white rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-24 md:pt-32 pb-40">
           <div>
               <h3 className="text-3xl font-heading font-bold text-earth-text mb-12">Technical Skills</h3>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.languages.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">AI & Machine Learning</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.ai_ml.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">GenAI Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.genai.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Frameworks & Backend</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.frameworks.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Cloud & MLOps</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.cloud.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-earth-text uppercase tracking-widest text-xs mb-4">Databases</h4>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.databases.map(s => <span key={s} className="px-3 py-1.5 bg-earth-bg rounded-lg text-sm text-earth-muted">{s}</span>)}
                            </div>
                        </div>
                   </div>
           </div>
      </Section>

      {/* Footer */}
      <footer className="bg-earth-primary text-white py-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 relative z-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-center md:text-left">
                  <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Let's work together.</h2>
                  <p className="text-white/80 max-w-md text-lg">Open to new opportunities and collaborations. Feel free to reach out.</p>
              </div>
               <div className="flex items-center gap-4">
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full bg-earth-secondary/20 hover:bg-earth-accent hover:text-white transition-all text-white"><Linkedin className="w-6 h-6"/></a>
                  <a href={`mailto:${PROFILE.email}`} className="px-10 py-5 rounded-full bg-earth-accent text-white font-heading font-bold hover:bg-white hover:text-earth-primary transition-all shadow-lg shadow-earth-accent/30">
                      Contact Me
                  </a>
               </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-white/40">
              <p>© {new Date().getFullYear()} Smit Panchal</p>
              <p>Crafted to reflect skills, experience, and the ability to solve real problems</p>
          </div>
      </footer>
    </div>
  );
}
