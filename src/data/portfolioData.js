export const profileData = {
  name: "Vignesh Rahul E.",
  title: "Aspiring Machine Learning Engineer",
  tagline: "I build real-world solutions with Machine Learning.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "vigneshe6766@gmail.com",
  phone: "+91 8667053190",
  github: "https://github.com/vignesh-developer6766",
  linkedin: "https://www.linkedin.com/in/vignesh-rahul-e-a6496432a/",
  resumePdf: "/resume/Vignesh_Rahul_E_Resume.pdf",
  profileImage: "/vignesh.jpg",
  availability: "Open to ML Opportunities",
  
  summary:
    "I am a Computer Science and Engineering student passionate about Machine Learning, Python development, and building practical AI-powered applications. I enjoy solving real-world problems through data-driven solutions and developing software that combines machine learning with useful application features.",

  aboutNarrative: [
    "I am a Computer Science and Engineering student at Dr. N.G.P. Institute of Technology, Coimbatore, with a strong interest in Machine Learning and Python development.",
    "I enjoy learning how machine learning algorithms work and applying them to practical software applications. Through my projects, I explore data processing, model integration, application development, and user-focused problem solving.",
    "My goal is to become a Machine Learning Engineer who can build reliable, useful, and well-designed AI-powered applications."
  ],

  aboutHighlights: [
    { title: "Python Development", desc: "Clean, modular code with object-oriented and functional paradigms." },
    { title: "Machine Learning Fundamentals", desc: "Feature preprocessing, model evaluation, and classical algorithms." },
    { title: "Data Processing", desc: "Structured data pipelines with Pandas, NumPy, and statistical methods." },
    { title: "ML-Powered Applications", desc: "Embedding predictive models into production web interfaces." },
    { title: "Web Application Development", desc: "Robust full-stack systems using Flask, Django, and RESTful APIs." }
  ],

  skillCategories: [
    {
      name: "Programming",
      skills: ["Python", "SQL"]
    },
    {
      name: "Machine Learning & Data",
      skills: ["Machine Learning", "NumPy", "Pandas", "Scikit-learn"]
    },
    {
      name: "Frameworks & Web Development",
      skills: ["Flask", "Django", "FastAPI"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Google Colab", "Docker"]
    },
    {
      name: "Additional Technologies",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ],

  featuredProjects: [
    {
      id: "expenseshare-ai",
      title: "ExpenseShare AI",
      number: "01",
      badge: "Primary Featured Project",
      category: "AI-Powered Expense Sharing Application",
      description:
        "ExpenseShare AI is an expense-sharing web application designed to help users manage group expenses, split bills, track balances, and simplify settlements.",
      technologies: [
        "Python",
        "Flask",
        "SQLite",
        "Scikit-learn",
        "Pandas",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      keyFeatures: [
        "User authentication and profile management",
        "Group expense management with flexible splitting engines",
        "ML-based transaction category prediction via TF-IDF & Naive Bayes",
        "Receipt text extraction using Optical Character Recognition (OCR)",
        "Greedy graph simplification algorithm to minimize debt transfers",
        "Spending analytics dashboard and visual trend charts"
      ],
      liveDemoUrl: "https://expenseshare-ai-vignesh.netlify.app",
      sourceCodeUrl: "https://github.com/vignesh-developer6766/Expense-Share",
      verifiedRepo: true,
      detailRoute: "/projects/expenseshare-ai",
      thumbnail: "/images/projects/expenseshare/dashboard-desktop.png",
      
      // Technical Detail Page Content
      problemStatement:
        "Shared living and group activities frequently lead to complicated debt networks, messy manual expense accounting, and confusion over categorizing varied receipt purchases.",
      solution:
        "ExpenseShare AI combines relational transaction tracking with automated machine learning categorization and OCR receipt scanning. It simplifies group settlements through an algorithmic debt-minimization engine that eliminates cyclical debts.",
      mlPipeline: {
        title: "Transaction Categorization Workflow",
        steps: [
          "Transaction Description Input (from manual form or OCR extraction)",
          "Text Preprocessing (lowercasing, punctuation stripping, stopword removal)",
          "TF-IDF Vectorization (n-gram term frequency weighting)",
          "Multinomial Naive Bayes Classifier (probabilistic category prediction)",
          "Predicted Expense Category (Food, Groceries, Travel, Utilities, Rent, etc.)"
        ]
      },
      ocrDetails:
        "Utilizes Pytesseract combined with PIL contrast enhancement to extract itemized lines and purchase totals directly from receipt bill snapshots.",
      debtAlgorithm:
        "Implements a greedy graph simplification algorithm (minimum cash-flow problem) that computes net member balances and consolidates multilateral debts into the fewest possible direct peer-to-peer transfers.",
      databaseArchitecture:
        "Structured SQLite relational database managing users, groups, memberships, expense records, splits, and settlement transaction logs.",
      screenshots: [
        {
          title: "Executive Dashboard",
          caption: "Overview of user balances, monthly budget trends, and quick settlement actions.",
          url: "/images/projects/expenseshare/dashboard-desktop.png"
        },
        {
          title: "AI Spending Assistant",
          caption: "Categorization insights and intelligent natural language transaction parsing.",
          url: "/images/projects/expenseshare/ai-assistant-desktop.png"
        },
        {
          title: "Nexus.AI Conversational Interface",
          caption: "Interactive conversational helper for quick financial queries and bill entries.",
          url: "/images/projects/expenseshare/nexus-ai-chat-desktop.png"
        },
        {
          title: "Authentication Portal",
          caption: "Secure session management with encrypted credential storage.",
          url: "/images/projects/expenseshare/login-desktop.png"
        }
      ]
    },
    {
      id: "estateval-ai",
      title: "EstateVal AI",
      number: "02",
      badge: "Machine Learning Model",
      category: "House Price Prediction Engine",
      description:
        "A machine learning application and REST API that predicts residential real estate valuations based on architectural, regional, and structural property attributes.",
      technologies: ["Python", "Scikit-Learn", "Flask", "NumPy", "Pandas", "HTML/CSS"],
      keyFeatures: [
        "Gradient Boosting Regressor trained for high-precision valuation",
        "Interactive real-time prediction sliders and scenario presets",
        "Feature importance breakdown explaining key property value drivers",
        "Lightweight Flask REST API serving real-time prediction endpoints"
      ],
      liveDemoUrl: null,
      sourceCodeUrl: "https://github.com/vignesh-developer6766",
      verifiedRepo: false, // Configurable profile fallback
      detailRoute: null,
      thumbnail: null
    },
    {
      id: "mapmymood",
      title: "MapMyMood",
      number: "03",
      badge: "Web Application",
      category: "Mood-Based Travel Recommendation",
      description:
        "A tourism-focused web application that recommends travel destinations, itineraries, and experiences curated according to user mood preferences.",
      technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      keyFeatures: [
        "Curated mood categorization for destinations and experiences",
        "Django backend with relational database schema for travel spots",
        "Responsive interface for exploring destinations and saving favorites"
      ],
      liveDemoUrl: null,
      sourceCodeUrl: "https://github.com/vignesh-developer6766",
      verifiedRepo: false, // Configurable profile fallback
      detailRoute: null,
      thumbnail: null
    }
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      organization: "Techvolt Pvt. Ltd.",
      duration: "15 Days",
      type: "Internship",
      highlights: [
        "Completed a 15-day internship focused on practical Machine Learning fundamentals.",
        "Gained hands-on exposure to data preprocessing and feature normalization techniques.",
        "Learned model training pipelines, cross-validation workflows, and evaluation metrics.",
        "Strengthened Python programming and algorithmic problem-solving capabilities."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Dr. N.G.P. Institute of Technology",
      location: "Coimbatore, Tamil Nadu, India",
      period: "2024 – 2028",
      status: "Currently Pursuing (Ongoing)",
      description:
        "Rigorous computer science curriculum focusing on algorithms, data structures, database management systems, Python programming, and foundational artificial intelligence."
    }
  ],

  certificationsAndActivities: [
    {
      title: "Full Stack with Python and Django",
      organization: "Pinesphere Solutions",
      type: "Certification",
      category: "cert"
    },
    {
      title: "Machine Learning Internship Certification",
      organization: "Techvolt Pvt. Ltd.",
      type: "Certification",
      category: "cert"
    },
    {
      title: "24-Hour Hackathon",
      organization: "SNS College of Technology, Coimbatore",
      type: "Event Participation",
      category: "activity",
      note: "Collaborative 24-hour engineering hackathon designing rapid software solutions."
    },
    {
      title: "Academic Paper Presentation",
      organization: "CGT College, Coimbatore",
      type: "Event Participation",
      category: "activity",
      note: "Participated in regional technical paper presentation sessions."
    }
  ]
};
