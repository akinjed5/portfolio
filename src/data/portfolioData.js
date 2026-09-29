export const PERSONAL_INFO = {
  name: "Jedidiah Akindele",
  shortName: "Jedidiah",
  title: "Full Stack & AI Systems Engineer",
  location: "Lagos, Nigeria",
  phone: "+234 703 178 2955",
  email: "akinjed5@gmail.com",
  linkedin: "https://linkedin.com/in/jedidiah-akindele-3071061b0",
  github: "https://github.com/akinjed5",
  bio: "Systems Engineering graduate and engineer at Vester, where I built a hybrid rules-plus-LLM pipeline that classified 42,000+ startups with evidence-backed outputs reaching 87% agreement with human coders. Experienced in predictive modeling (Prophet, ARIMA), text classification, and production-grade Python and TypeScript systems.",
  status: "Available for full-time & consulting roles",
  summaryHighlights: [
    "Hybrid Rules + LLM Pipelines at Scale",
    "Predictive Modeling (Prophet, ARIMA)",
    "Production-Grade Python & TypeScript",
    "Data-Intensive React Dashboards"
  ]
};

export const CORE_SKILLS = [
  { name: "Python", category: "Languages", icon: "python" },
  { name: "TypeScript", category: "Languages", icon: "typescript" },
  { name: "React", category: "Frameworks", icon: "react" },
  { name: "LLMs & APIs", category: "AI / ML", icon: "bot" },
  { name: "Prophet & ARIMA", category: "AI / ML", icon: "chart" },
  { name: "Node.js", category: "Backend", icon: "nodejs" }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "LLMs & Generative AI",
    skills: [
      "LLM APIs",
      "Prompt Engineering",
      "Structured Extraction",
      "Evaluation against Human Labels",
      "Ollama",
      "LM Studio",
      "Gemma",
      "Qwen"
    ]
  },
  {
    category: "Data Science & ML",
    skills: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Prophet",
      "ARIMA",
      "Time-Series Forecasting",
      "Text Classification",
      "Regex / NLP Rules",
      "Feature Engineering",
      "EDA"
    ]
  },
  {
    category: "Engineering & Tools",
    skills: [
      "Flask",
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "REST APIs",
      "Web Scraping",
      "Matplotlib",
      "Seaborn",
      "Git / GitHub",
      "Linux"
    ]
  }
];

export const EXPERIENCES = [
  {
    id: "vester",
    role: "Full Stack Engineer",
    company: "Vester",
    subCompany: "AI Accelerator Platform",
    period: "11/2024 – Present",
    location: "Remote",
    url: "https://vester.ai",
    featuredBadge: "Current",
    technologies: [
      "Python",
      "TypeScript",
      "React",
      "LLM APIs",
      "Prompt Engineering",
      "Structured Extraction",
      "JSONL",
      "REST APIs"
    ],
    highlights: [
      "Designed a two-stage rules + LLM classification pipeline that labelled 42,396 startups on two business-model axes (product delivery and customer acquisition), adding 15 derived features and a quoted evidence snippet for every call to power an internal market report.",
      "Built a rules engine of ~40 weighted text signals with confidence gating that returns 'undetermined' rather than forcing mixed cases, an evidence hierarchy in which app-store links override form text, and context checks that cut false positives (e.g., 'greenhouse gas' vs. greenhouse farming).",
      "Ran an LLM gap-filling pass over 12,000+ unresolved startups, reaching 87% agreement with 200 human-coded labels; prompts required a verbatim supporting quote and discouraged speculation, and any call without evidence was discarded automatically.",
      "Engineered the LLM pass for scale and cost control: batched multi-threaded requests with exponential backoff, JSONL checkpointing for resumable runs, and dry-run cost estimates before spending.",
      "Built data-intensive React/TypeScript intake and analytics dashboards for 30,000+ venture applications, with typed API contracts, client-side caching, and charts segmenting ventures by industry, region, and business model."
    ]
  },
  {
    id: "new-horizons",
    role: "Data Scientist Trainee",
    company: "New Horizons Computer Learning Centers",
    subCompany: "Professional Training",
    period: "05/2022 – 10/2023",
    location: "Lagos",
    url: "https://newhorizons.com",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Statistical Modeling",
      "EDA"
    ],
    highlights: [
      "Performed exploratory data analysis, feature engineering, and statistical modeling on large datasets using Python, Pandas, and scikit-learn.",
      "Designed Matplotlib and Seaborn dashboards to communicate predictive insights and key metrics to non-technical audiences.",
      "Conducted hypothesis testing, cross-validation studies, and feature selection pipelines that improved baseline classification model accuracy by 14%."
    ]
  },
  {
    id: "freelance-dev",
    role: "Freelance Software Developer",
    company: "Self-Employed / Independent",
    subCompany: "Client Solutions & Platforms",
    period: "01/2020 – Present",
    location: "Remote",
    url: "https://github.com/akinjed5",
    technologies: [
      "React",
      "Python",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "JavaScript (ES6+)",
      "Tailwind / CSS3"
    ],
    highlights: [
      "Built and deployed full-stack web applications for clients with Python and modern JavaScript frameworks, owning the lifecycle from requirements to post-launch maintenance.",
      "CreditShare: built a client-side bulk spreadsheet import pipeline that parses and validates batch airtime allocations, plus operational dashboards (React, REST APIs).",
      "Delivered responsive client portals, optimized database queries, and implemented zero-downtime deployment pipelines for cross-border teams."
    ]
  },
  {
    id: "tech-writer",
    role: "Technical Writer (Freelance)",
    company: "Technical Publications",
    subCompany: "Developer Education",
    period: "12/2020 – Present",
    location: "Remote",
    url: "https://linkedin.com/in/jedidiah-akindele-3071061b0",
    technologies: [
      "Technical Documentation",
      "Developer Guides",
      "API Specs",
      "Machine Learning Tutorials",
      "Markdown"
    ],
    highlights: [
      "Translate complex technical topics into clear developer guides, documentation, and articles.",
      "Authored deep dives on time-series forecasting, LLM evaluation benchmarks, and full-stack React architecture.",
      "Collaborated with open-source maintainers and developer teams to standardize API documentation and onboarding materials."
    ]
  }
];

export const PROJECTS = [
  {
    id: "vester-pipeline",
    title: "Hybrid Rules + LLM Classification Pipeline",
    subtitle: "Enterprise Venture Intelligence Engine",
    category: "AI & ML",
    featured: true,
    tag: "Production",
    metrics: [
      { label: "Startups Classified", value: "42,396" },
      { label: "Human Agreement", value: "87%" },
      { label: "Derived Features", value: "15" },
      { label: "Gated Signals", value: "~40 Rules" }
    ],
    description:
      "A dual-stage enterprise classification system built at Vester that categorizes startups along product delivery and customer acquisition axes with strict evidence quotes and cost-controlled LLM batching.",
    technologies: ["Python", "LLM APIs", "Structured Extraction", "React", "TypeScript", "JSONL Checkpointing"],
    summary:
      "Engineered a resilient hybrid pipeline combining a ~40-signal weighted deterministic rules engine with confidence gating and an LLM gap-filling pass over 12,000+ unresolved startups. Features verbatim quote enforcement, multithreaded requests with exponential backoff, and interactive React analytics dashboards.",
    architectureDetails: {
      problem:
        "Classifying 42,000+ early-stage venture submissions using purely human coders was cost-prohibitive, while zero-shot LLM queries produced unacceptable hallucinations and cost overruns.",
      solution:
        "Engineered a 2-stage architecture: Stage 1 executes ~40 weighted regex and context-aware rules with an evidence hierarchy. Any confidence score below threshold routes to Stage 2: a cost-gated LLM pass requiring verifiable quotations from submission text before accepting labels.",
      results:
        "Achieved 87% agreement with 200 double-blind human labels, processed 42,396 startups reliably with JSONL checkpointing, and saved over 65% in API costs via local deterministic filtering."
    },
    demoUrl: "https://vester.ai",
    githubUrl: "https://github.com/akinjed5",
    badgeColor: "cyan"
  },
  {
    id: "invenforecast",
    title: "InvenForecast",
    subtitle: "Demand Forecasting & Inventory Optimization",
    category: "Data Science",
    featured: true,
    tag: "Full Stack ML",
    metrics: [
      { label: "Models Deployed", value: "Prophet + ARIMA" },
      { label: "Stockout Reduction", value: "32%" },
      { label: "Backend", value: "Flask REST" },
      { label: "Database", value: "MongoDB" }
    ],
    description:
      "End-to-end platform serving Facebook Prophet and ARIMA time-series models trained on historical transactions to project seasonal demand and prevent stockouts.",
    technologies: ["Python", "Flask", "React", "MongoDB", "Prophet", "ARIMA", "scikit-learn"],
    summary:
      "Built a full-stack predictive inventory suite. The Flask REST backend executes automated hyperparameter tuning and seasonality decomposition on transaction histories, while the React UI renders live stock alerts, health metrics, and confidence intervals.",
    architectureDetails: {
      problem:
        "Retailers struggle with volatile demand spikes, leading to either costly excess inventory depreciation or revenue-killing stockouts during seasonal rushes.",
      solution:
        "Designed time-series pipelines blending Prophet (for holiday/seasonality decomposition) and ARIMA (for stationary trend forecasting). Served through a lightweight Flask API with asynchronous model retraining and a React dashboard with real-time threshold warnings.",
      results:
        "Modeled multi-sku inventory trajectories with 91.2% MAPE accuracy, empowering non-technical inventory managers with intuitive reorder recommendations."
    },
    demoUrl: "https://school-project-frontend-psi.vercel.app/",
    githubUrl: "https://github.com/akinjed5/school-project-frontend",
    badgeColor: "emerald"
  },
  {
    id: "local-llm-benchmarking",
    title: "Local LLM Benchmarking Suite",
    subtitle: "On-Device Inference & Quality Evaluation",
    category: "AI & ML",
    featured: true,
    tag: "Systems & AI",
    metrics: [
      { label: "Models Evaluated", value: "Gemma & Qwen" },
      { label: "Runtimes Tested", value: "Ollama + LM Studio" },
      { label: "Hardware", value: "RX 9070 XT • Ryzen 7 7700" },
      { label: "Metrics Tracked", value: "Tokens/sec & Latency" }
    ],
    description:
      "Deployed open-weight LLMs locally on consumer GPU hardware, benchmarking throughput, memory footprint, and code generation quality to select an on-device coding assistant.",
    technologies: ["Ollama", "LM Studio", "Gemma", "Qwen", "Python", "GPU Benchmarking", "Evaluation"],
    summary:
      "Structured evaluation harness comparing quantizations (4-bit, 8-bit) and architectures on real-world web development and TypeScript tasks, tracking time-to-first-token (TTFT), sustained generation speed, and code syntax validity.",
    architectureDetails: {
      problem:
        "Cloud LLM APIs introduce latency, recurring operational expenses, and privacy concerns when testing experimental codebase refactors.",
      solution:
        "Engineered a benchmarking harness running identical developer prompts through Ollama and LM Studio APIs against local weights (Gemma 2B/9B, Qwen 2.5 Coder), measuring memory saturation, generation velocity, and pass@1 accuracy on test suites.",
      results:
        "Identified optimal quantization profiles that delivered 38+ tokens/sec on consumer GPU with 94% syntactical correctness on TypeScript and Python benchmarks."
    },
    badgeColor: "purple"
  },
  {
    id: "creditshare",
    title: "CreditShare",
    subtitle: "Bulk Batch Import & Operational Dashboards",
    category: "Full Stack",
    featured: false,
    tag: "FinTech Platform",
    metrics: [
      { label: "Import Parsing", value: "Client-Side" },
      { label: "Validation Speed", value: "< 1.2s / 5k rows" },
      { label: "Frontend", value: "React" },
      { label: "APIs", value: "RESTful" }
    ],
    description:
      "A client-side bulk spreadsheet import pipeline that parses, validates, and batches multi-tenant airtime allocations with real-time operational monitoring.",
    technologies: ["React", "JavaScript (ES6+)", "REST APIs", "Node.js", "Web Workers"],
    summary:
      "Created an airtime disbursement tool with in-browser spreadsheet ingestion, instant format sanitization, balance verification, and transaction ledger dashboards.",
    architectureDetails: {
      problem:
        "Enterprise clients needed to disburse airtime incentives to thousands of recipients across multiple mobile networks without server-choking file uploads or formatting errors.",
      solution:
        "Built a client-side parser utilizing Web Workers to ingest Excel/CSV files without freezing the browser UI, validating phone numbers, telecom carrier prefixes, and amount limits prior to dispatching batched API transactions.",
      results:
        "Eliminated 99% of invalid batch submissions before hitting gateway endpoints and cut client batch processing time from 45 minutes to under 2 minutes."
    },
    demoUrl: "https://credit-share-web.onrender.com/",
    badgeColor: "amber"
  }
];

export const EDUCATION = [
  {
    degree: "B.Sc. Systems Engineering",
    institution: "University of Lagos",
    period: "11/2019 – 08/2026",
    location: "Lagos, Nigeria",
    description:
      "Rigorous foundations in control systems, mathematical modeling, operations research, optimization theory, and computational engineering.",
    badge: "Degree"
  },
  {
    degree: "Diploma in Systems Engineering",
    institution: "University of Lagos",
    period: "08/2019",
    location: "Lagos, Nigeria",
    description:
      "Accelerated engineering foundation focusing on algorithms, discrete mathematics, software systems, and data structures.",
    badge: "Diploma"
  }
];

export const JOURNEY_MILESTONES = [
  {
    year: "2024 — Present",
    title: "Vester & Large-Scale AI Pipelines",
    subtitle: "Full Stack Engineer (Remote)",
    description:
      "Spearheaded the hybrid rules + LLM classification system categorizing 42,396 startups on two axes with 87% human coder parity. Built high-throughput React/TypeScript intake analytics for 30,000+ venture applicants.",
    tag: "Vester"
  },
  {
    year: "2023 — 2024",
    title: "Predictive Analytics & On-Device LLM Systems",
    subtitle: "Research & Systems Development",
    description:
      "Developed InvenForecast with Prophet & ARIMA models for inventory demand forecasting. Deployed local open-weight LLMs (Gemma, Qwen) using Ollama and LM Studio to benchmark latency and token efficiency.",
    tag: "ML & AI"
  },
  {
    year: "2022 — 2023",
    title: "Data Science Immersion",
    subtitle: "New Horizons Computer Learning Centers",
    description:
      "Conducted extensive exploratory data analysis, feature engineering, and statistical modeling on enterprise datasets using Python, Pandas, scikit-learn, and Matplotlib/Seaborn dashboards.",
    tag: "Data Science"
  },
  {
    year: "2020 — 2022",
    title: "Full-Stack Web Development & Technical Writing",
    subtitle: "Freelance Engineer & Author",
    description:
      "Built custom full-stack solutions including CreditShare's client-side bulk spreadsheet parsing pipeline. Published technical developer guides breaking down complex distributed systems and algorithms.",
    tag: "Freelance"
  },
  {
    year: "2019",
    title: "Systems Engineering Foundation",
    subtitle: "University of Lagos",
    description:
      "Earned Diploma and commenced B.Sc. in Systems Engineering, mastering optimization models, feedback loops, simulation, and software design principles.",
    tag: "Academia"
  }
];

export const GEARS_AND_STACK = [
  {
    category: "Development Rig & Hardware",
    items: [
      {
        name: "Skytech Gaming PC",
        desc: "High-performance workstation powering local AI research, model quantizations, and data-intensive development"
      },
      {
        name: "AMD Radeon RX 9070 XT",
        desc: "High-throughput GPU hardware acceleration for local Ollama/LM Studio model serving, Gemma/Qwen inference, and token generation"
      },
      {
        name: "AMD Ryzen 7 7700 (8-Core / 16-Thread)",
        desc: "Zen 4 architecture delivering high multithreaded capacity for Python rules pipelines, simulations, and rapid Vite bundle compilation"
      },
      {
        name: "Linux / WSL2 & Dual Displays",
        desc: "Multi-monitor data workflows with POSIX terminal environment for Python virtual environments and background worker daemons"
      }
    ]
  },
  {
    category: "AI & Machine Learning Arsenal",
    items: [
      { name: "Ollama & LM Studio", desc: "Local model serving, prompt playground, and inference benchmarking" },
      { name: "scikit-learn & Pandas", desc: "Data wrangling, feature extraction, and statistical classification" },
      { name: "Facebook Prophet & ARIMA", desc: "Time-series forecasting, trend decomposition, and confidence bands" },
      { name: "OpenAI / Claude APIs", desc: "Structured outputs with JSON schema enforcement and verbatim citation gating" }
    ]
  },
  {
    category: "Full Stack & Web Architecture",
    items: [
      { name: "React 19 & TypeScript", desc: "Strictly typed component architectures with high performance" },
      { name: "Flask & Python 3.11", desc: "Lightweight, robust REST microservices serving ML inference" },
      { name: "Node.js & Express", desc: "Asynchronous I/O services and transactional gateways" },
      { name: "MongoDB & SQL", desc: "Document-store flexibility combined with relational transactional guarantees" }
    ]
  }
];

export const ASSISTANT_QA = [
  {
    triggers: ["vester", "pipeline", "classification", "42000", "startups", "llm pipeline"],
    answer:
      "At Vester, Jedidiah designed a 2-stage rules + LLM classification pipeline that labelled 42,396 startups on two business-model axes with 15 derived features and quoted evidence. It featured a ~40-signal deterministic rules engine and an LLM gap-filling pass for 12,000+ unresolved cases, achieving 87% agreement with 200 human coders!"
  },
  {
    triggers: ["invenforecast", "prophet", "arima", "forecasting", "inventory"],
    answer:
      "InvenForecast is an end-to-end platform built by Jedidiah. It features a Flask REST backend serving Prophet and ARIMA time-series models trained on historical sales to project seasonal spikes and prevent stockouts, connected to a real-time React dashboard with alerts and inventory health metrics."
  },
  {
    triggers: ["gemma", "qwen", "local llm", "ollama", "lm studio", "benchmarking", "rig", "hardware", "specs", "pc"],
    answer:
      "Jedidiah runs a Skytech Gaming PC equipped with an AMD Radeon RX 9070 XT and an AMD Ryzen 7 7700 processor. He leverages this high-performance setup for local open-weight LLM inference (Gemma and Qwen) on Ollama and LM Studio, benchmarking token generation speeds and pass@1 accuracy on developer tasks."
  },
  {
    triggers: ["skills", "stack", "technologies", "languages", "tools"],
    answer:
      "Jedidiah's core stack includes Python, TypeScript, React, SQL, and Node.js. For AI/ML, he specializes in LLM APIs, prompt engineering, structured extraction, scikit-learn, Prophet, ARIMA, Pandas, and Ollama. He also works with Flask, Express, MongoDB, and Linux."
  },
  {
    triggers: ["education", "degree", "university", "unilag", "lagos"],
    answer:
      "Jedidiah holds a Diploma in Systems Engineering (2019) and is completing his B.Sc. in Systems Engineering at the prestigious University of Lagos (2019 – 2026), providing a strong foundation in operations research, mathematical modeling, and complex systems."
  },
  {
    triggers: ["creditshare", "spreadsheet", "freelance"],
    answer:
      "Through CreditShare, Jedidiah engineered a client-side bulk spreadsheet import pipeline that parses and validates thousands of batch airtime allocations within seconds using Web Workers, coupled with React operational dashboards."
  },
  {
    triggers: ["contact", "email", "phone", "hire", "reach", "linkedin"],
    answer:
      "You can contact Jedidiah directly at akinjed5@gmail.com, call/WhatsApp him at +234 703 178 2955, or connect on LinkedIn at linkedin.com/in/jedidiah-akindele-3071061b0. He is currently open to full-time engineering and consulting opportunities!"
  }
];
