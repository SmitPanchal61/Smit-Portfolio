export const PROFILE = {
  name: "Smit Mahesh Panchal",
  title: "M.S. in Software Engineering @ ASU (’26)",
  location: "Tempe, AZ",
  email: "smitpanchal1661@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/smit-panchal-9a83ba1b7/",
    github: "https://github.com/smitpanchal61",
    resume: "/Smit_M_Panchal_Resume.pdf"
  }
};

export const EDUCATION = [
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

export const EXPERIENCE = [
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

export const PROJECTS = [
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

export const SKILLS = {
  languages: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "SQL"],
  ai_ml: ["NLP", "LLMs", "RAG", "Embeddings", "CNNs", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Spark"],
  genai: ["LangChain", "OpenAI API", "Ollama", "ChromaDB", "Vector DB", "Cursor", "Claude Code"],
  frameworks: ["FastAPI", "Flask", "Django", "Spring Boot", "React", "Node.js", "Express.js"],
  cloud: ["AWS (Lambda, S3, EC2, ECR, SQS, IoT)", "Docker", "Kubernetes", "CI/CD"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite"],
  professional: ["Technical Support", "Salesforce CRM", "Incident Management", "Security Analysis", "Vulnerability Reporting", "Team Collaboration", "Stakeholder Communication", "Problem Solving"],
};

export const EXTRACURRICULAR = [
  {
    role: "Customer Service Specialist",
    company: "Arizona State University",
    date: "Apr 2025 – Present",
    location: "Tempe, AZ",
    bullets: [
      "Provided technical support for system access, authentication, and platform-related issues across ASU’s digital services using Salesforce CRM, MyASU, and internal tools, handled an average of 60–80+ support queries per shift.",
      "Partnered with engineering and QA teams to test and refine an AI-powered chatbot, contributing detailed usability feedback and designing test scenarios to improve automated responses and escalation handling.",
      "Documented and optimized incident workflows in Salesforce, enhancing support team efficiency and improving end-user experience through faster ticket resolution and clearer escalation paths.",
      "Assisted with peer and cross-department technical support during peak periods, helping resolve system access and platform issues to maintain service continuity during high-volume rush times.",
    ],
  },
];

export const AWARDS = [
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Software Edition Winner (PS - SIH1453)",
    date: "Dec 2023",
    bullets: [
      "Analyzed open-source codebase (OpenVPN) using Snyk and SonarQube to identify CVEs, security vulnerabilities, and code quality issues.",
      "Collaborated in a cross-functional team of 5 to document findings and assess potential impact on production systems.",
      "Presented vulnerability reports and remediation recommendations to company stakeholders with clear technical explanations.",
    ],
  },
];
