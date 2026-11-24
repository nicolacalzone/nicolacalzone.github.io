// All site content lives here. Edit this file to update the portfolio.
// Links set to "#" are placeholders (TODO) and are hidden on the page until filled in.

window.SITE = {
  // Optional. URL of the deployed counter Worker's /cv-download route (see worker/README.md). Empty = no tracking.
  config: {
    cvDownloadEndpoint: "https://cv-download-counter.nicolacalzone14.workers.dev/cv-download",
  },

  profile: {
    name: "Nicola Calzone",
    role: "Software & AI Engineer",
    tagline:
      "I build machine-learning systems, from the data and the models to the software around them.",
    email: "nicolacalzone14@gmail.com",
    github: "https://github.com/nicolacalzone",
    linkedin: "https://www.linkedin.com/in/nicolacalzone/",
    // PDFs are pushed here by the private CV repo's CI (see README). First entry is the default.
    cv: [
      { id: "en", label: "English", file: "cv/Nicola_Calzone_CV_English.pdf" },
      { id: "it", label: "Italiano", file: "cv/Nicola_Calzone_CV_Italian.pdf" },
      { id: "ru", label: "Русский", file: "cv/Nicola_Calzone_CV_Russian.pdf" },
    ],
    now: "ML Engineer @ AlfaGroup",
    focus: ["machine learning", "language", "agents", "software"],
  },

  about: [
    "I'm a computer engineer (M.Eng., University of Padova) interested in machine learning, language, and the software that puts them to work.",
    "I studied in Italy, Czechia and Spain, and speak Italian, English, Spanish and Russian. My research at Charles University in Prague looked at whether Transformers can learn formal grammars. I also teach calculus and programming.",
  ],

  experience: [
    { company: "AlfaGroup", role: "Machine Learning Engineer", type: "Project", period: "Sep 2026 - Present" },
    { company: "LAIFE Reply", role: "Full Stack AI Engineer", type: "Project", period: "Dec 2025 - Sep 2026" },
    { company: "Charles University", role: "Student Research Assistant", type: "Part-time · Prague", period: "Sep 2024 - Jul 2025" },
    { company: "UniCredit", role: "Back-end Software Developer", type: "Full-time, during studies", period: "Feb 2024 - Sep 2024" },
  ],

  additionalExperience: [
    { role: "Private Teacher", org: "Calculus · Physics · Programming", period: "Mar 2022 - Present" },
    { role: "Volunteer", org: "Erasmus Student Network", period: "Feb 2019 - Jan 2020" },
  ],

  // Categories: ai (AI & NLP), vision (Vision & Robotics), web (Web & Mobile), systems (Systems & Data)
  featured: [
    {
      title: "Can Transformers Learn SCFGs?",
      kind: "M.Eng. research thesis",
      category: "ai",
      description:
        "Pre-training Transformers on automatically generated synthetic languages to test whether they can learn synchronous context-free grammars and other formal languages across the Chomsky hierarchy - with an encoder-only acceptor and a seq2seq translator.",
      tags: ["PyTorch", "Fairseq", "Formal languages", "NLTK"],
      links: [
        { label: "Code", url: "https://github.com/nicolacalzone/cfl_gen" },
        { label: "Thesis", url: "https://drive.google.com/file/d/15-P9-z8ciu9YR4aV2jvXegaLlPrr1HXh/view?usp=sharing" },
      ],
    },
    {
      title: "OpenRussian MCP Server",
      kind: "Open-source MCP server",
      category: "ai",
      description:
        "An unofficial, local MCP server that gives AI assistants a real Russian dictionary to check stress, cases, aspect and verb government - serving the OpenRussian dataset through SQLite, with a periodical GitHub Actions data refresh.",
      tags: ["MCP", "Python", "SQLite", "LLMs"],
      links: [{ label: "Code", url: "https://github.com/nicolacalzone/mcp-openrussian" }],
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
        "A multi-agent system that handles bookings for restaurants, salons and similar businesses - agents coordinate availability, preferences and confirmations.",
      tags: ["Multi-agent", "Agentic AI", "LLMs"],
      links: [{ label: "Code", url: "https://github.com/nicolacalzone/secretary_agent" }],
    },
    {
      title: "NLTK: SCFG Generation & Parsing",
      kind: "Open-source contribution",
      category: "ai",
      description:
        "Contribution to the Natural Language Toolkit adding support for generating and parsing synchronous context-free grammars, born out of the thesis tooling.",
      tags: ["Python", "NLTK", "Open source"],
      links: [{ label: "GitHub", url: "https://github.com/nicolacalzone/nltk/" }],
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
      links: [{ label: "Challenge", url: "https://challenges.reply.com/challenges/ai-agent/home/" }],
    },
    {
      title: "Deep Learning Competitions",
      kind: "Course competitions",
      category: "ai",
      description: "Model-building competitions from deep learning coursework.",
      tags: ["PyTorch", "Deep learning"],
      links: [{ label: "Code", url: "https://github.com/nicolacalzone/deep_learning_projects" }],
    },
    {
      title: "Harry Potter RAG Chatbot",
      kind: "NLP project",
      category: "ai",
      description: "Retrieval-augmented chatbot that answers questions about the Harry Potter books, grounding the LLM's answers in retrieved passages.",
      tags: ["RAG", "LLMs", "Embeddings"],
      links: [
        {
          label: "Notebook",
          url: "https://github.com/nicolacalzone/RAG_ChatBot_HarryPotter/blob/main/CalzoneNicola_VendraminRiccardo_Project2.ipynb",
        },
      ],
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
    { group: "AI & Data", items: ["PyTorch", "HuggingFace", "Fairseq", "pandas", "LLMs", "RAG", "LangChain", "MCP", "Google ADK", "LanceDB", "FAISS", "NLTK", "OpenCV", "LangFuse", "LangSmith"] },
    { group: "Languages", items: ["Python", "Java", "C", "C++", "SQL", "R", "Matlab", "MIPS / x86 Assembly"] },
    { group: "Backend & Web", items: ["Spring Boot", "JPA", "Maven", "REST APIs", "Swagger", "React", "PostgreSQL"] },
    { group: "Cloud & DevOps", items: ["Docker", "Git", "GitHub Actions", "Jenkins", "GCP · Vertex AI", "AWS · Bedrock, EC2, S3", "Dynatrace", "Splunk"] },
    { group: "Robotics", items: ["ROS", "Gazebo", "TIAGo", "Make"] },
    { group: "Spoken", items: ["Italian", "English", "Spanish", "Russian"] },
  ],

  education: [
    {
      degree: "M.Eng. in Computer Engineering",
      school: "Università degli Studi di Padova",
      place: "Italy",
      period: "2022 - 2025",
    },
    {
      degree: "M.Eng. Research Thesis · Erasmus+",
      school: "Univerzita Karlova (Charles University)",
      place: "Prague, Czechia",
      period: "2024 - 2025",
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
    },
  ],

  certificates: [
    { issuer: "NVIDIA", title: "Fundamentals of Deep Learning for Computer Vision", url: "https://learn.nvidia.com/certificates?id=4d5fe8d85b1c49a18972e1157c597ae5" },
    { issuer: "NVIDIA", title: "Fundamentals of Deep Learning for Multiple Data Types", url: "https://learn.nvidia.com/certificates?id=9f3550b8b89d46f6bb1146f03fb8c9bb" },
    { issuer: "NVIDIA", title: "Fundamentals of Deep Learning for NLP", url: "https://learn.nvidia.com/certificates?id=6185c11324d7462a813976e1b2427a29" },
    { issuer: "Kaggle · Google", title: "AI Agents Intensive Course", url: "https://www.kaggle.com/certification/badges/nicolacalzone/105" },
    { issuer: "Anthropic", title: "Introduction to Model Context Protocol", url: "https://academy.claude.com/verify/64565eed10fd9588f5431d01127b3a6a" },
    { issuer: "Anthropic", title: "MCP: Advanced Topics", url: "https://academy.claude.com/verify/00d87be051ebe9cd8f3d944d60fe1142" },
    { issuer: "Anthropic", title: "Claude Code 101", url: "https://academy.claude.com/verify/fb49037ceff54fb7b78a2746c4d19f84" },
  ],
};
