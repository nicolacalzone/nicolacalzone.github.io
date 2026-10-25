// All site content lives here. Edit this file to update the portfolio.
// Links set to "#" are placeholders (TODO) and are hidden on the page until filled in.

window.SITE = {
  profile: {
    name: "Nicola Calzone",
    role: "Software & AI Engineer",
    tagline:
      "I build machine-learning systems end to end — from fraud-detection models and synthetic-data generators to RAG pipelines, agentic tools and the backends that serve them.",
    location: "Italy · open to roles across the EU",
    email: "nicolacalzone14@gmail.com",
    github: "https://github.com/nicolacalzone",
    linkedin: "https://www.linkedin.com/in/nicolacalzone/",
    cv: "Nicola_Calzone_CV_English.pdf",
    now: "ML Engineer @ AlfaGroup",
    focus: ["fraud detection", "generative models", "RAG & agents", "NLP"],
  },

  about: [
    "I'm a Computer Engineer (M.Eng., University of Padova) who enjoys the whole path of an ML system: shaping the data, training and evaluating the model, and shipping it behind a reliable backend that people can actually use.",
    "My research at Charles University in Prague asked whether Transformers can learn synchronous context-free grammars, which left me with a habit of designing careful experiments and reading model behaviour critically. In industry I've worked on banking backends at UniCredit, a hybrid-search RAG platform for healthcare at LAIFE Reply, and now low-latency fraud detection at AlfaGroup.",
    "Outside of work I've run a tutoring practice since 2022 — 30+ students in calculus and Python — and I speak Italian, English, Spanish and Russian.",
  ],

  experience: [
    {
      company: "AlfaGroup",
      role: "Machine Learning Engineer",
      type: "Project contract",
      period: "Sep 2026 — Present",
      points: [
        "Developing ML models for low-latency clustering and detection of fraudulent or suspicious transactions.",
        "Pre-training generative models on the company's GPU infrastructure to produce millions of anonymized, realistic synthetic transactions from real data.",
      ],
      tags: ["PyTorch", "Generative models", "Fraud detection", "GPU"],
    },
    {
      company: "LAIFE Reply",
      role: "Full Stack AI Engineer",
      type: "Project contract",
      period: "Dec 2025 — Sep 2026",
      points: [
        "Full-stack architect (React · Java/Spring Boot microservices) in a 3-person squad on a healthcare application; owned the roadmap and end-to-end delivery.",
        "Built a hybrid-search RAG pipeline: indexed 20 GB of documentation into LanceDB with full-text + dense embeddings, exposing semantic, corpus and summarization tools through an MCP server.",
        "Built KPI dashboards tracking oncology care for thousands of patients, plus a chatbot that queries databases and generates graphs.",
      ],
      tags: ["RAG", "LanceDB", "MCP", "React", "Spring Boot"],
    },
    {
      company: "Charles University",
      role: "Student Research Assistant",
      type: "Part-time · Prague",
      period: "Sep 2024 — Jul 2025",
      points: [
        "Co-authored research on Transformers pre-trained on formal grammars with Prof. Bojar and Prof. Satta (under review).",
        "Owned experiments end to end: built a BERT-like encoder-only acceptor in PyTorch and trained a seq2seq Transformer translator with Fairseq (96.7% and 74%).",
      ],
      tags: ["PyTorch", "Fairseq", "Transformers", "Research"],
    },
    {
      company: "UniCredit",
      role: "Back-end Software Developer",
      type: "Full-time, during studies",
      period: "Feb 2024 — Sep 2024",
      points: [
        "Resolved a JVM crash under load, enabling a 10% increase in peak-hour traffic with full system stability.",
        "Eliminated path-traversal, XML and HTML injection vulnerabilities; raised test coverage to 100%, driving a 30% higher bug-detection rate.",
      ],
      tags: ["Java", "Spring Boot", "JPA", "Jenkins", "Dynatrace", "Splunk"],
    },
  ],

  additionalExperience: [
    {
      role: "Freelance Private Teacher",
      org: "Calculus · Physics · Programming",
      period: "Mar 2022 — Present",
      text: "Built and ran a solo tutoring practice: 30+ clients retained over 3+ years, 90% success rate in university exams and language certifications.",
    },
    {
      role: "Volunteer",
      org: "Erasmus Student Network",
      period: "Feb 2019 — Jan 2020",
      text: "Led groups of 100+ international students, organized tours and helped with housing.",
    },
  ],

  // Categories: ai (AI & NLP), vision (Vision & Robotics), web (Web & Mobile), systems (Systems & Data)
  featured: [
    {
      title: "Can Transformers Learn SCFGs?",
      kind: "M.Eng. research thesis",
      category: "ai",
      description:
        "Pre-training Transformers on automatically generated synthetic languages to test whether they can learn synchronous context-free grammars and other formal languages across the Chomsky hierarchy — with an encoder-only acceptor and a seq2seq translator.",
      tags: ["PyTorch", "Fairseq", "Formal languages", "NLTK"],
      links: [{ label: "Code", url: "https://github.com/nicolacalzone/cfl_gen" }],
    },
    {
      title: "Harry Potter RAG Chatbot",
      kind: "NLP project",
      category: "ai",
      description:
        "A retrieval-augmented generation chatbot that answers questions about the Harry Potter books by retrieving relevant passages and grounding the LLM's answers in them.",
      tags: ["RAG", "LLMs", "Embeddings", "Python"],
      links: [
        {
          label: "Notebook",
          url: "https://github.com/nicolacalzone/RAG_ChatBot_HarryPotter/blob/main/CalzoneNicola_VendraminRiccardo_Project2.ipynb",
        },
      ],
    },
    {
      title: "TIAGo Pick-and-Place",
      kind: "Intelligent Robotics",
      category: "vision",
      description:
        "An autonomous robotic system on the TIAGo robot: navigation, AprilTag-based object recognition, grasping and placement, simulated in Gazebo and orchestrated with ROS.",
      tags: ["ROS", "Gazebo", "C++", "OpenCV", "AprilTag"],
      links: [
        { label: "Code", url: "https://github.com/IntelligentRoboticsTEAM/final_project" },
        { label: "Demo", url: "https://drive.google.com/drive/u/2/folders/118kZRKBSzeeYpfmI9ssGQVtmpA15t2gf" },
        { label: "Report", url: "https://drive.google.com/file/d/1pcuhNBLArBtnwdYgtXl43QE5flJhFTNR/preview?usp=embed_googleplus" },
      ],
    },
    {
      title: "BookShare",
      kind: "Web & mobile app",
      category: "web",
      description:
        "A web and mobile app for managing book collections among friends and family, now evolving into a location-based social network for local book exchanges.",
      tags: ["Web", "Mobile", "Geolocation"],
      links: [{ label: "Code", url: "#" }], // TODO
    },
    {
      title: "Smart Booking Multi-Agent",
      kind: "Kaggle Agents competition",
      category: "ai",
      description:
        "A multi-agent system that handles bookings for restaurants, salons and similar businesses — agents coordinate availability, preferences and confirmations.",
      tags: ["Multi-agent", "Agentic AI", "LLMs"],
      links: [{ label: "Code", url: "#" }], // TODO
    },
    {
      title: "NLTK: SCFG Generation & Parsing",
      kind: "Open-source contribution",
      category: "ai",
      description:
        "Contribution to the Natural Language Toolkit adding support for generating and parsing synchronous context-free grammars, born out of the thesis tooling.",
      tags: ["Python", "NLTK", "Open source"],
      links: [{ label: "GitHub", url: "#" }], // TODO
    },
  ],

  archive: [
    {
      title: "LocalTable",
      kind: "In progress",
      category: "web",
      description: "Mobile app connecting local producers of fruit, vegetables and natural products to nearby restaurants, bars, cafés and customers.",
      tags: ["Mobile"],
      links: [{ label: "Code", url: "#" }], // TODO
    },
    {
      title: "Smart Fraud Detection",
      kind: "Reply AI Challenge 2026",
      category: "ai",
      description: "Competition entry on detecting fraudulent transactions with machine learning.",
      tags: ["ML", "Fraud detection"],
      links: [],
    },
    {
      title: "Deep Learning Competitions",
      kind: "Course competitions",
      category: "ai",
      description: "Model-building competitions from deep learning coursework.",
      tags: ["PyTorch", "Deep learning"],
      links: [{ label: "Code", url: "#" }], // TODO
    },
    {
      title: "Russian Dependency Parser",
      kind: "NLP project",
      category: "ai",
      description: "Fine-tuned BERT model that produces dependency trees for Russian sentences.",
      tags: ["BERT", "HuggingFace", "Parsing"],
      links: [],
    },
    {
      title: "NLP for Bug Detection",
      kind: "B.Eng. thesis",
      category: "ai",
      description: "Natural language processing techniques applied to detecting bugs in software systems.",
      tags: ["NLP", "Software engineering"],
      links: [],
    },
    {
      title: "Canteen Food-Waste Tracker",
      kind: "Computer Vision",
      category: "vision",
      description: "Computer-vision system that recognizes dishes to measure food waste in the University of Padova canteen.",
      tags: ["OpenCV", "Recognition"],
      links: [
        { label: "Code", url: "https://github.com/CV-FoodRecognition/FoodRecognition-FinalProject" },
        { label: "Report", url: "https://drive.google.com/file/d/1V4h0WOFoxQiyVGZgT6TxNcvC5bUd70XG/preview?usp=embed_googleplus" },
      ],
    },
    {
      title: "Bitcoin Trust-Network Risk",
      kind: "Learning from Networks",
      category: "systems",
      description: "Flags potentially risky Bitcoin users from trust/distrust networks by computing graph metrics and comparing them with random graphs.",
      tags: ["Graphs", "Python"],
      links: [
        { label: "Notebook", url: "https://github.com/AFParadox/LFN_Bitcoin/blob/main/LFN_Bitcoin.ipynb" },
        { label: "Report", url: "https://drive.google.com/file/d/1q9uz05-JYkS-pRumJA-rhkLGCdUMS8y6/preview?usp=embed_googleplus" },
      ],
    },
    {
      title: "Concurrent Producer-Consumer",
      kind: "Real-time systems",
      category: "systems",
      description: "Multi-threaded producer-consumer system with remote status monitoring over TCP/IP.",
      tags: ["Concurrency", "Threads", "TCP/IP"],
      links: [
        { label: "Code", url: "https://github.com/nicolacalzone/ConcurrentRealTime_ProducerConsumerTCP-IP/tree/secondProject" },
      ],
    },
    {
      title: "P2P Messaging & Chatrooms",
      kind: "Networking",
      category: "systems",
      description: "Peer-to-peer messaging apps plus half-duplex and full-duplex chatrooms.",
      tags: ["Sockets", "Networking"],
      links: [],
    },
    {
      title: "Android Apps",
      kind: "Mobile",
      category: "web",
      description: "Simple games and a device-geolocation app that works without Google APIs.",
      tags: ["Android"],
      links: [],
    },
    {
      title: "Blood Donation Platform",
      kind: "Software engineering",
      category: "web",
      description: "Regional blood-donation management platform with separate clients for regional staff, hospitals and donors.",
      tags: ["Client-server"],
      links: [{ label: "Code", url: "https://github.com/trasfusionigroup/centroTrasfusioni" }],
    },
  ],

  skills: [
    { group: "AI & Data", items: ["PyTorch", "HuggingFace", "Fairseq", "pandas", "LLMs", "RAG", "LangChain", "MCP", "Google ADK", "LanceDB", "FAISS", "NLTK", "OpenCV"] },
    { group: "Languages", items: ["Python", "Java", "C", "C++", "SQL", "R", "Matlab", "MIPS / x86 Assembly"] },
    { group: "Backend & Web", items: ["Spring Boot", "JPA", "Maven", "REST APIs", "Swagger", "React", "PostgreSQL"] },
    { group: "Cloud & DevOps", items: ["Docker", "Git", "GitHub Actions", "Jenkins", "GCP · Vertex AI", "AWS · Bedrock, EC2, S3", "Dynatrace", "Splunk"] },
    { group: "Robotics", items: ["ROS", "Gazebo", "TIAGo", "Make"] },
    { group: "Spoken", items: ["Italian — native", "English — C1", "Spanish — C1", "Russian — B2"] },
  ],

  education: [
    {
      degree: "M.Eng. in Computer Engineering",
      school: "Università degli Studi di Padova",
      place: "Italy",
      period: "2022 — 2025",
      grade: "GPA 3.88 / 4.0",
    },
    {
      degree: "M.Eng. Research Thesis · Erasmus+",
      school: "Univerzita Karlova (Charles University)",
      place: "Prague, Czechia",
      period: "2024 — 2025",
      grade: "GPA 4.0 / 4.0",
      note: "“Can Transformers Learn SCFGs? An Analysis of Pretraining on Automatically Generated Datasets”",
    },
    {
      degree: "B.Eng. in Computer Engineering",
      school: "Università degli Studi del Sannio",
      place: "Italy · Erasmus+ at Universidad de Granada",
      period: "until Feb 2022",
    },
    {
      degree: "High School Diploma (Liceo Classico)",
      school: "Liceo Classico P. Giannone",
      place: "Italy",
      grade: "GPA 3.7 / 4.0",
      note: "Honorable mention in the Greek Translation Olympiad; twice a participant in the Latin Translation Olympiad.",
    },
  ],

  certificates: [
    { issuer: "NVIDIA", title: "Fundamentals of Deep Learning for Computer Vision", url: "https://learn.nvidia.com/certificates?id=4d5fe8d85b1c49a18972e1157c597ae5" },
    { issuer: "NVIDIA", title: "Fundamentals of Deep Learning for Multiple Data Types", url: "https://learn.nvidia.com/certificates?id=9f3550b8b89d46f6bb1146f03fb8c9bb" },
    { issuer: "NVIDIA", title: "Fundamentals of Deep Learning for NLP", url: "https://learn.nvidia.com/certificates?id=6185c11324d7462a813976e1b2427a29" },
    { issuer: "Kaggle · Google", title: "AI Agents Intensive Course" },
    { issuer: "GitHub", title: "GitHub Foundations" },
    { issuer: "Anthropic", title: "Introduction to Model Context Protocol" },
    { issuer: "Anthropic", title: "MCP: Advanced Topics" },
    { issuer: "Anthropic", title: "Introduction to Agent Skills" },
    { issuer: "Anthropic", title: "Introduction to Subagents" },
    { issuer: "Anthropic", title: "Claude Code 101" },
  ],
};
