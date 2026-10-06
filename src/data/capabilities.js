import {
  IoAccessibilityOutline,
  IoAnalyticsOutline,
  IoBarChartOutline,
  IoCalendarOutline,
  IoChatbubblesOutline,
  IoCloudUploadOutline,
  IoColorPaletteOutline,
  IoEyeOutline,
  IoGitBranchOutline,
  IoGitNetworkOutline,
  IoHardwareChipOutline,
  IoLayersOutline,
  IoLockClosedOutline,
  IoPeopleOutline,
  IoPhonePortraitOutline,
  IoPieChartOutline,
  IoPrintOutline,
  IoPulseOutline,
  IoSearchOutline,
  IoServerOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoSpeedometerOutline,
  IoTerminalOutline,
  IoTextOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

// Project Management Capabilities
export const pmCapabilities = [
  {
    Icon: IoCalendarOutline,
    title: "Agile Sprint Architecture & Scoping",
    description:
      "Breaking complex, multi-quarter milestones into predictable 2-week delivery cycles. We manage backlogs, author detailed epic ticket requirements, and isolate strict MVP definitions to eliminate scope creep.",
    tags: [
      "Epic Breakdown",
      "Backlog Grooming",
      "MVP Definition",
      "User Stories",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    Icon: IoSpeedometerOutline,
    title: "Velocity Tracking & Burndown",
    description:
      "Monitoring engineering output metrics with mathematical precision. We establish baseline sprint points and optimize team velocity curves to guarantee your deadlines are systematically realistic.",
    tags: [
      "Velocity Tuning",
      "Burndown Charts",
      "Cycle Time KPI",
      "Jira Automation",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-purple-500 to-blue-500",
  },
  {
    Icon: IoPeopleOutline,
    title: "Fractional Scrum & Resource Balancing",
    description:
      "Aligning product designers, frontend engineers, and cloud architects under unified daily communication standups. We continuously optimize resource allocations to prevent dev cross-dependencies or engineering burnout.",
    tags: [
      "Capacity Planning",
      "Standup Rhythm",
      "Dependency Auditing",
      "Slack Loops",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    Icon: IoShieldCheckmarkOutline,
    title: "Quality Assurance & Risk Mitigation",
    description:
      "Enforcing strict Definition of Done parameters before any code passes to production. We manage user acceptance testing (UAT) tracks, coordinate staging code reviews, and map fallback strategies for high-risk updates.",
    tags: [
      "Definition of Done",
      "UAT Testing",
      "Staging Gateways",
      "Risk Matrices",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-purple-600 to-indigo-500",
  },
];

// Graphics Design Capabilities
export const designCapabilities = [
  {
    Icon: IoColorPaletteOutline,
    title: "Brand Identity Systems & Stylebooks",
    description:
      "Crafting foundational visual frameworks from scratch. We compile comprehensive design systems covering core logo marks, responsive brand typography layouts, mood boards, and complete usage guardrails.",
    tags: [
      "Logo Architecture",
      "Color Strategy",
      "Brand Guidelines",
      "Asset Matrixing",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-rose-500 to-fuchsia-500",
  },
  {
    Icon: IoTextOutline,
    title: "Typography Systems & Layout Scale",
    description:
      "Establishing structural text systems across print and digital media. We engineer highly legible typographic hierarchies, balancing display serif accents with clean body copy pairings to enhance visual reading flow.",
    tags: [
      "Type Scaling",
      "Pairing Frameworks",
      "Kerning Precision",
      "Editorial Layouts",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    Icon: IoLayersOutline,
    title: "Digital Vector Assets & Illustrative Systems",
    description:
      "Creating infinite-scale SVG iconography arrays and custom geometric layout shapes. All design assets are meticulously built as clean vector groups, perfectly ready for front-end integration or presentation use.",
    tags: [
      "Vector Engineering",
      "Custom Icon Sets",
      "UI Asset Toolkits",
      "Geometric Motifs",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-violet-500 to-rose-600",
  },
  {
    Icon: IoPrintOutline,
    title: "Premium Print Collateral & Physical Assets",
    description:
      "Translating digital brand concepts onto high-end paper stocks and packaging. We handle complex pre-print layouts, coordinate exact CMYK/Pantone ink swatches, and set bleed specifications for error-free production.",
    tags: [
      "CMYK/Pantone Tuning",
      "Packaging Prototypes",
      "Bleed & Cut Audits",
      "Corporate Stationeries",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-fuchsia-600 to-rose-500",
  },
];

// Cybersecurity Capabilities
export const CyberCapabilities = [
  {
    Icon: IoTerminalOutline,
    title: "Penetration Testing & Vulnerability Assessment",
    description:
      "Simulating advanced, persistent cyberattack vectors against network barriers and APIs. We stress-test access points, catalog architecture flaws, and deliver actionable patching documentation to close security gaps before exploitation.",
    tags: [
      "White-Box Audits",
      "API Exploit Testing",
      "CVE Indexing",
      "Static Analysis (SAST)",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    Icon: IoLockClosedOutline,
    title: "Zero-Trust Access & Cryptography",
    description:
      "Designing modern network security systems with absolute least-privilege verification. We construct mutual TLS identity frameworks, hardware key verification configurations, and automated session rotation controls.",
    tags: [
      "mTLS Handshakes",
      "RBAC Architecture",
      "Hardware WebAuthn",
      "Token Rotation",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-teal-500 to-cyan-500",
  },
  {
    Icon: IoEyeOutline,
    title: "Continuous SIEM Telemetry & Threat Hunting",
    description:
      "Setting up real-time monitoring infrastructure across distributed clusters. We build intelligent trace triggers to catch anomalous runtime behavior and identify payload injections instantly.",
    tags: [
      "Log Aggregation",
      "Anomaly Auditing",
      "Ingress Parsing",
      "Kernel Probing",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-cyan-500 to-emerald-600",
  },
  {
    Icon: IoShieldCheckmarkOutline,
    title: "Governance, Risk & Compliance (GRC)",
    description:
      "Hardening production frameworks to conform smoothly to global security standards. We audit data flows, configure cloud environment permissions, and verify cryptographic storage keys for enterprise readiness.",
    tags: [
      "SOC2 Type II",
      "ISO 27001 Tuning",
      "HIPAA Safeguards",
      "GDPR Hardening",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-teal-600 to-emerald-500",
  },
];

// Development Capabilities
export const devCapabilities = [
  {
    Icon: IoLayersOutline,
    iconColor: "text-blue-500",
    title: "High-Performance Web Apps",
    description:
      "Building ultra-fast, responsive frontends using Next.js and React. We focus on state management optimization, seamless page transitions, and pixel-perfect rendering pipelines.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    gridSpan: "lg:col-span-7",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    Icon: IoServerOutline,
    iconColor: "text-orange-500",
    title: "Core Software & APIs",
    description:
      "Engineering secure backend systems, robust RESTful/GraphQL APIs, and microservices built to withstand heavy computational scaling without breaks.",
    tags: ["Node.js", "Python", "GraphQL", "PostgreSQL"],
    gridSpan: "lg:col-span-5",
    accent: "from-orange-500 to-amber-500",
  },
  {
    Icon: IoCloudUploadOutline,
    iconColor: "text-cyan-500",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automating zero-downtime integration deployment sequences, container management matrices, and scalable server networks designed for high availability.",
    tags: ["AWS", "Docker", "GitHub Actions", "Terraform"],
    gridSpan: "lg:col-span-5",
    accent: "from-purple-600 to-indigo-500",
  },
  {
    Icon: IoSpeedometerOutline,
    iconColor: "text-emerald-500",
    title: "Database Optimization & Scaling",
    description:
      "Architecting high-availability relational databases, caching architectures, and data structures engineered to support complex real-time search logic and querying.",
    tags: ["Redis", "PostgreSQL", "MongoDB", "Supabase"],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500",
  },
];

// Social Media Management Capabilities
export const smSocialCapabilities = [
  {
    Icon: IoSparklesOutline,
    title: "Visual Strategy & Brand Metaphor Sourcing",
    description:
      "Deep-diving into your industry's attention economy. We conduct comprehensive multi-channel aesthetic audits, construct systematic brand style sheets for corporate channels, and lock down high-converting creative themes.",
    tags: [
      "Aesthetic Audits",
      "Style Sheet Framing",
      "Asset Direction",
      "Competitor Matrices",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-orange-500 to-rose-500",
  },
  {
    Icon: IoPieChartOutline,
    title: "Algorithmic Short-Form Video Production",
    description:
      "Engineering short-form and macro video assets calculated to capture algorithmic feeds. We script precise audience hooks, design dynamic overlays, and optimize pacing to keep viewer retention metrics exceptionally high.",
    tags: [
      "Retention Tuning",
      "Hook Architecture",
      "CapCut Engineering",
      "Short-Form Spreads",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-rose-500 to-indigo-500",
  },
  {
    Icon: IoChatbubblesOutline,
    title: "Active Outbound Community Growth",
    description:
      "Transforming passive views into responsive brand communities. Our managers execute intentional outbound interactions, track profile brand mentions, and run persistent engagement plays to validate corporate authority.",
    tags: [
      "Voice Calibration",
      "Outbound Triggers",
      "Inbound Desk Sweeps",
      "Trend Hijacking",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-indigo-500 to-orange-600",
  },
  {
    Icon: IoTrendingUpOutline,
    title: "Conversion Funnel Tracking & Data Logs",
    description:
      "Treating social networks as measurable acquisition layers. We build cross-platform destination links, measure true engagement velocities, capture user drop-off points, and adjust pacing based on verified conversions.",
    tags: [
      "Multi-Touch Funnels",
      "GA4 Event Profiling",
      "UTM Architecture",
      "ROI Log Compilation",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-rose-600 to-orange-500",
  },
];

// Structured data for UIUX Design features section
export const uiUxFeatures = [
  {
    Icon: IoSearchOutline,
    iconColor: "text-orange-500",
    title: "User Research & Discovery",
    description:
      "We dive deep into user behavior, target demographics, and competitor analysis to align your product with real market needs.",
    badge: "Strategy",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: IoLayersOutline,
    iconColor: "text-blue-500",
    title: "Wireframing & Architecture",
    description:
      "Mapping out low-fidelity structural blueprints to define clean user journeys and content priority blueprints.",
    badge: "Structure",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    Icon: IoPhonePortraitOutline,
    iconColor: "text-cyan-500",
    title: "High-Fidelity UI Design",
    description:
      "Transforming layouts into premium, pixel-perfect interfaces designed uniquely around your core visual brand identity.",
    badge: "Visuals",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    Icon: IoColorPaletteOutline,
    iconColor: "text-amber-500",
    title: "Scalable Design Systems",
    description:
      "Building production-ready component libraries in Figma, complete with reusable design tokens, typography scales, and UI assets for your development ecosystem.",
    badge: "Systems",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: IoAccessibilityOutline,
    iconColor: "text-purple-500",
    title: "Accessibility Testing (WCAG)",
    description:
      "Optimizing interfaces for absolute inclusivity, ensuring contrast, screen-reader compatibility, and focus states clear rigorous compliance audits.",
    badge: "Compliance",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    Icon: IoGitBranchOutline,
    iconColor: "text-emerald-500",
    title: "Interactive Prototyping",
    description:
      "Connecting complex micro-interactions and motion flows to test click-through parameters before shipping any live code lines.",
    badge: "Testing",
    className: "md:col-span-1 lg:col-span-1",
  },
];

// Structured data for Data Analytics Capabilities Matrix Section
export const analyticsCapabilities = [
  {
    Icon: IoGitNetworkOutline,
    iconColor: "text-teal-600",
    title: "Data Engineering & Pipelines",
    description:
      "Architecting high-throughput ETL/ELT data pipelines that ingest, process, and clean raw data streams. We connect disjointed operational systems into unified cloud data lakes with zero message loss.",
    tags: ["Apache Kafka", "Airflow", "Snowflake", "dbt"],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    Icon: IoBarChartOutline,
    iconColor: "text-blue-600",
    title: "Business Intelligence & BI",
    description:
      "Transforming raw data warehouses into interactive dashboard environments. We design predictive logic schemas and looker semantic layers that democratize decision-making metrics across your company.",
    tags: ["Looker", "Tableau", "PowerBI", "SQL Matrix"],
    gridSpan: "lg:col-span-5",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    Icon: IoHardwareChipOutline,
    iconColor: "text-indigo-500",
    title: "Predictive Analytics & AI/ML",
    description:
      "Deploying production-ready statistical algorithms, clustering arrays, and machine learning structures engineered to anticipate consumer behavior shifts and automate operations.",
    tags: ["Python", "Scikit-Learn", "PyTorch", "AWS SageMaker"],
    gridSpan: "lg:col-span-5",
    accent: "from-purple-600 to-indigo-500",
  },
  {
    Icon: IoShieldCheckmarkOutline,
    iconColor: "text-emerald-600",
    title: "Data Governance & Integrity",
    description:
      "Securing data pipelines with granular column-level encryption access masks, continuous security audits, and strict compliance layers built to clear rigorous privacy parameters.",
    tags: ["GDPR Compliance", "SOC2 Scope", "Data Lineage", "IAM Security"],
    gridSpan: "lg:col-span-7",
    accent: "from-teal-500 to-emerald-600",
  },
];

// Structured data for Capabilities
export const researchCapabilities = [
  {
    Icon: IoSearchOutline,
    iconColor: "text-emerald-600",
    title: "Qualitative User Discovery & Interviewing",
    description:
      "Conducting deep-dive contextual user interviews and ethnographic field observations. We design neutral test scripts and identify subtle usability friction points that traditional analytical logs often miss.",
    tags: [
      "User Interviews",
      "Field Observations",
      "Persona Modeling",
      "Journey Mapping",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    Icon: IoAnalyticsOutline,
    iconColor: "text-amber-600",
    title: "Quantitative Behavioral Analytics",
    description:
      "Extracting user patterns directly from real-world engagement tracking. We analyze large-scale heatmaps, optimize drop-off conversion funnels, and setup split A/B experiments to confirm core feature performance.",
    tags: [
      "Heatmap Telemetry",
      "Funnel Optimizations",
      "A/B Testing Loops",
      "Cohort Analysis",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-teal-500 to-amber-500",
  },
  {
    Icon: IoPulseOutline,
    iconColor: "text-teal-600",
    title: "Heuristic Auditing & Usability Benchmarking",
    description:
      "Evaluating digital architectures against industry-standard cognitive design rules. We map interface structures against systemic UX parameters to isolate and remediate user-experience roadblocks.",
    tags: [
      "Nielsen Heuristics",
      "Task Success Ratios",
      "Accessibility Checkups",
      "Friction Indexing",
    ],
    gridSpan: "lg:col-span-5",
    accent: "from-amber-500 to-emerald-600",
  },
  {
    Icon: IoShieldCheckmarkOutline,
    iconColor: "text-cyan-600",
    title: "Competitive Landscape & Market Synthesis",
    description:
      "Deconstructing competitor capabilities, feature patterns, and commercial positioning models. We deliver crisp, actionable market whitespace matrices that keep your feature roadmap ahead of the curve.",
    tags: [
      "Whitespace Identification",
      "Feature Matrices",
      "Market Sizing",
      "Foresight Mapping",
    ],
    gridSpan: "lg:col-span-7",
    accent: "from-teal-600 to-emerald-500",
  },
];
