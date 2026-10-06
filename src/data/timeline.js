import {
  IoAnalyticsOutline,
  IoBarChartOutline,
  IoBriefcaseOutline,
  IoCalendarClearOutline,
  IoChatbubblesOutline,
  IoCheckmarkDoneOutline,
  IoCloudDoneOutline,
  IoColorFilterOutline,
  IoCompassOutline,
  IoDocumentTextOutline,
  IoEyeOutline,
  IoGitBranchOutline,
  IoGitCommitOutline,
  IoGitMergeOutline,
  IoHardwareChipOutline,
  IoLaptopOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPeopleOutline,
  IoPieChartOutline,
  IoRocketOutline,
  IoSearchOutline,
  IoShapesOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoTerminalOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import { TbTypography } from "react-icons/tb";

// For Project Management Roadmap Timeline Section
export const pmTimelineSteps = [
  {
    phase: "01",
    Icon: IoCompassOutline,
    iconColor: "text-indigo-500",
    accent: "border-indigo-500/20 text-indigo-500 bg-indigo-500/5",
    title: "Discovery & Requirements Alignment",
    description:
      "We map your strategic product goals into manageable project deliverables. Our team works with stakeholders to define the absolute Minimum Viable Product (MVP), author technical specs, identify operational blockers, and draft explicit acceptance parameters.",
    details: [
      "MVP Boundary Definition",
      "Technical Dependency Mapping",
      "User Story Matrixing",
    ],
  },
  {
    phase: "02",
    Icon: IoCalendarClearOutline,
    iconColor: "text-purple-500",
    accent: "border-purple-500/20 text-purple-500 bg-purple-500/5",
    title: "Agile Estimation & Sprint Planning",
    description:
      "Next, we transform the product backlog into executable tasks. We establish a team capacity framework, lead collaborative story point estimation sessions, organize task allocations inside Jira, and lock down explicit 2-week sprint boundaries.",
    details: [
      "Backlog Story Pointing",
      "Jira Epic Structuring",
      "Capacity & Load Balancing",
    ],
  },
  {
    phase: "03",
    Icon: IoGitCommitOutline,
    iconColor: "text-blue-500",
    accent: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    title: "Active Sprint Execution & Velocity Monitoring",
    description:
      "During active execution, we unblock technical development. We moderate daily asynchronous or synchronous standups, monitor team velocity burn-down metrics closely, isolate scope expansion attempts, and keep project timelines tightly on track.",
    details: [
      "Daily Standup Moderation",
      "Velocity Burndown Audits",
      "Scope Creep Mitigation",
    ],
  },
  {
    phase: "04",
    Icon: IoCheckmarkDoneOutline,
    iconColor: "text-indigo-400",
    accent: "border-indigo-400/20 text-indigo-400 bg-indigo-400/5",
    title: "UAT Sign-off & Delivery Retrospective",
    description:
      "We lead the final delivery validation gateway. Our team manages user acceptance testing loops against the baseline requirements, handles feature handoffs to production environments, and coordinates retrospectives to optimize future team output speed.",
    details: [
      "User Acceptance Sign-off",
      "Production Release Gates",
      "Process Optimization Audits",
    ],
  },
];

export const pmTimelineContext = {
  title: "Delivery Roadmap",
  heading1: "Our Strategic",
  heading2: "Execution Loop",
  description:
    "A predictable, point-driven delivery timeline engineered to eliminate deadline variance and guarantee reliable software releases.",
  color: "indigo",
  gradientHeadingClasses: "from-indigo-500 via-purple-500 to-blue-500",
};

// For Graphics Design Roadmap Timeline Section
export const gdTimelineSteps = [
  {
    phase: "01",
    Icon: IoColorFilterOutline,
    iconColor: "text-rose-500",
    accent: "border-rose-500/20 text-rose-500 bg-rose-500/5",
    title: "Mood Boarding & Visual Strategy",
    description:
      "We define the creative direction before drafting vectors. Our team conducts market aesthetic audits, curates directional mood boards, explores primary color palettes, and aligns on core brand metaphors with your stakeholders.",
    details: [
      "Aesthetic Competitor Audits",
      "Color Harmony Mapping",
      "Visual Vector Metaphors",
    ],
  },
  {
    phase: "02",
    Icon: IoShapesOutline,
    iconColor: "text-fuchsia-500",
    accent: "border-fuchsia-500/20 text-fuchsia-500 bg-fuchsia-500/5",
    title: "Logo Architecture & Asset Drafting",
    description:
      "Next, we translate chosen concepts into concrete geometric symbols. We sketch, grid, and iterate raw logo structures inside high-precision vector frames, establishing balance, scalable outlines, and responsive asset layout limits.",
    details: [
      "Geometric Grid Alignment",
      "Responsive Asset Framing",
      "Vector Anchor Optimizations",
    ],
  },
  {
    phase: "03",
    Icon: TbTypography,
    iconColor: "text-violet-500",
    accent: "border-violet-500/20 text-violet-500 bg-violet-500/5",
    title: "Typography Scale & Layout Engineering",
    description:
      "We construct rigorous layout guardrails for the visual assets. Our designers build mathematical text scales, choose premium display and body font pairings, test editorial grids, and map print bleed parameters.",
    details: [
      "Font Pairing Architecture",
      "Type Alignment Testing",
      "CMYK Print Bleed Scoping",
    ],
  },
  {
    phase: "04",
    Icon: IoBriefcaseOutline,
    iconColor: "text-rose-400",
    accent: "border-rose-400/20 text-rose-400 bg-rose-400/5",
    title: "Stylebook Compilation & Asset Handoff",
    description:
      "We package your comprehensive visual brand system. We generate multi-page brand guidelines documentation, compile layered asset folders (SVG, EPS, PNG), and deliver print-ready color specifications.",
    details: [
      "Brand Guidelines Publishing",
      "Layered Vector Distributions",
      "Pantone Production Matrices",
    ],
  },
];

export const gdTimelineContext = {
  title: "Creative Roadmap",
  heading1: "Our Deliberate",
  heading2: "Design Lifecycle",
  description:
    "A transparent, milestone-driven visual development pipeline engineered to strip away subjective guessing and deliver cohesive corporate asset systems.",
  color: "rose",
  gradientHeadingClasses: "from-rose-500 via-fuchsia-500 to-violet-500",
};

// Structured data for Cybersecurity Roadmap Timeline Section
export const cyberTimelineSteps = [
  {
    phase: "01",
    Icon: IoTerminalOutline,
    iconColor: "text-emerald-500",
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Zero-State Compromise Assessment",
    description:
      "We execute deep binary static analysis, environment configuration state audits, and edge-to-edge network map tracing. This initial diagnostic phase catalogs your current threat posture surface, rogue processes, and active permission blind spots without altering live system runtime environments.",
    details: [
      "Static Code Analysis (SAST)",
      "Vulnerability Footprint Auditing",
      "Network Perimeter Tracing",
    ],
  },
  {
    phase: "02",
    Icon: IoLockClosedOutline,
    iconColor: "text-teal-500",
    accent: "border-teal-500/20 text-teal-500 bg-teal-500/5",
    title: "Target Penetration Testing & Exploitation",
    description:
      "Our defensive engineers perform aggressive, white-hat vulnerability exploration. We stress-test edge firewalls, map out private API endpoints, simulate malicious multi-vector injection patterns, and safely exploit backdoors to confirm protection limits under real-world pressure.",
    details: [
      "API exploit Testing",
      "Auth Gateway Stressing",
      "Attack Vector Log Generation",
    ],
  },
  {
    phase: "03",
    Icon: IoEyeOutline,
    iconColor: "text-cyan-500",
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    title: "Systemic Architecture Remediation",
    description:
      "We transition your infrastructure into an intentional zero-trust posture. We code rigorous mutual TLS identity handshakes, deploy granular role-based access tokens (RBAC), enforce automatic key rotation intervals, and tighten cloud perimeter security boundaries.",
    details: [
      "mTLS Handshake Integration",
      "Least-Privilege Token Setup",
      "Automated Policy Isolation",
    ],
  },
  {
    phase: "04",
    Icon: IoShieldCheckmarkOutline,
    iconColor: "text-emerald-400",
    accent: "border-emerald-400/20 text-emerald-400 bg-emerald-400/5",
    title: "SIEM Telemetry & Threat Hunting",
    description:
      "We connect advanced security information and event management (SIEM) systems across your engineering stack. Our monitoring scripts parse real-time traffic payloads, configure sub-second telemetry alerts, and hook automated system quarantine responses.",
    details: [
      "SIEM Pipeline Connection",
      "Kernel Anomaly Probing",
      "Incident Isolation Triggers",
    ],
  },
];

export const cyberTimelineContext = {
  title: "Defensive Roadmap",
  heading1: "Our Hardening",
  heading2: "Deployment Lifecycle",
  description:
    "A secure, milestone-driven digital defense timeline engineered to eliminate structural infrastructure vulnerabilities and protect your core enterprise assets.",
  color: "emerald",
  gradientHeadingClasses: "from-emerald-500 via-teal-500 to-cyan-500",
};

// For Develpoment Roadmap Timeline Secction
export const devTimelineSteps = [
  {
    phase: "01",
    Icon: IoAnalyticsOutline,
    iconColor: "text-orange-500",
    accent: "border-orange-500/20 text-orange-500 bg-orange-500/5",
    title: "System Architecture & Blueprinting",
    description:
      "Before writing a single line of code, we map out full platform specifications. This includes establishing security parameters, choosing the core tech stack matrix, and drafting comprehensive cloud performance blueprints.",
    details: [
      "Infrastructure Mapping",
      "Tech Stack Selection",
      "Security Scoping",
    ],
  },
  {
    phase: "02",
    Icon: IoGitMergeOutline,
    iconColor: "text-blue-500",
    accent: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    title: "Database Schema & API Prototyping",
    description:
      "Next, we build out robust, scalable backend foundations. We design relational database schemas, model data interactions, and configure clean RESTful or GraphQL API endpoints.",
    details: [
      "Data Schema Modeling",
      "API Routing Blueprints",
      "Mock Environment Runs",
    ],
  },
  {
    phase: "03",
    Icon: IoTerminalOutline,
    iconColor: "text-cyan-500",
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    title: "Frontend Interactivity & Logic Sprints",
    description:
      "Our development team transforms static user interface layouts into responsive frontends. We focus on clean state management, modular component creation, and smooth user flow logic.",
    details: [
      "Component Engineering",
      "State & Cache Tuning",
      "Cross-Device QA Testing",
    ],
  },
  {
    phase: "04",
    Icon: IoCloudDoneOutline,
    iconColor: "text-emerald-500",
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Cloud Optimization & Live Handoff",
    description:
      "Finally, we push your platform live. We deploy the build to production servers, configure automated CI/CD deployment pipelines, and hand over clean, thoroughly documented code repositories.",
    details: [
      "Production Server Deployment",
      "CI/CD Pipeline Audits",
      "Full Repository Turnovers",
    ],
  },
];

export const devTimelineContext = {
  title: "Development Roadmap",
  heading1: "Our Engineering",
  heading2: "Workflow Loop",
  description:
    "A predictable, multi-phase delivery timeline engineered to eliminate delays and ensure enterprise-grade stability.",
  color: "blue",
  gradientHeadingClasses: "from-blue-500 to-cyan-500",
};

// Structured data for Social Media Roadmap Timeline Section
export const smTimelineSteps = [
  {
    phase: "01",
    Icon: IoSparklesOutline,
    iconColor: "text-orange-500",
    accent: "border-orange-500/20 text-orange-500 bg-orange-500/5",
    title: "Aesthetic Audit & Core Brand Metaphors",
    description:
      "We deep-dive into your market's attention landscape. Our team executes high-level visual competitor positioning matrices, designs structured platform style sheets, curates custom art directions, and aligns on core brand positioning hooks with your stakeholders.",
    details: [
      "Aesthetic Competitor Audits",
      "Color Harmony Mapping",
      "Platform Style Sheet Rules",
    ],
  },
  {
    phase: "02",
    Icon: IoPieChartOutline,
    iconColor: "text-rose-500",
    accent: "border-rose-500/20 text-rose-500 bg-rose-500/5",
    title: "Algorithmic Indexing & Content Design",
    description:
      "We engineer short-form and macro asset engines engineered to survive algorithmic updates. By building custom video hooks, content templates, and value-first written scripts, we maximize organic retention profiles across B2B and consumer channels.",
    details: [
      "Hook Retention Profiling",
      "Template Layout Production",
      "Platform Distribution Strategy",
    ],
  },
  {
    phase: "03",
    Icon: IoChatbubblesOutline,
    iconColor: "text-fuchsia-500",
    accent: "border-fuchsia-500/20 text-fuchsia-500 bg-fuchsia-500/5",
    title: "Active Community Nurturing & Engagement",
    description:
      "We transform loose impressions into real conversation nodes. Our managers handle continuous outbound community handshakes, inbound profile monitoring, brand voice alignment execution, and real-time social event responses to build long-term brand authority.",
    details: [
      "Real-time Inbound Control",
      "Outbound Network Triggers",
      "Brand Voice System Alignment",
    ],
  },
  {
    phase: "04",
    Icon: IoTrendingUpOutline,
    iconColor: "text-indigo-500",
    accent: "border-indigo-500/20 text-indigo-500 bg-indigo-500/5",
    title: "Funnel Optimization & Performance Logs",
    description:
      "Every channel is treated as a conversion loop. We hook deep multi-touch tracking links to measure brand velocity metrics, capture profile bounce attributes, and continually balance parameters to maximize real sales pipelines.",
    details: [
      "Multi-Touch Funnel Tracking",
      "Inbound Loop Metrics",
      "Conversion Performance Logs",
    ],
  },
];

export const smTimelineContext = {
  title: "Creative Roadmap",
  heading1: "Our Deliberate",
  heading2: "Growth Lifecycle",
  description:
    "A transparent, milestone-driven visual development pipeline engineered to strip away subjective guessing and deliver cohesive, high-performance corporate asset systems.",
  color: "orange",
  gradientHeadingClasses: "from-orange-500 via-rose-500 to-indigo-500",
};

// structured data for timeline section
export const uiUxTimelineSteps = [
  {
    phase: "01",
    title: "Discovery & User Research",
    description:
      "We audit your existing data, survey users, map competitor gaps, and run stakeholder workshops to clarify the product strategy before pushing pixels.",
    Icon: IoEyeOutline,
    iconColor: "text-orange-500",
    accent: "border-orange-500/20 text-orange-500 bg-orange-500/5",
    details: [
      "User Surveys & Audits",
      "Competitor Gap Mapping",
      "Stakeholder Workshops",
    ],
  },
  {
    phase: "02",
    title: "Information Architecture & Wireframes",
    description:
      "We establish content hierarchies, interaction layouts, and structural skeletal wireframes to perfect user journeys without distraction.",
    Icon: IoGitCommitOutline,
    iconColor: "text-blue-500",
    accent: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    details: [
      "Content Hierarchy Maps",
      "Interaction Layouts",
      "Skeletal Wireframes",
    ],
  },
  {
    phase: "03",
    title: "Interactive Prototyping",
    description:
      "Turning logic into stunning high-fidelity visual UI designs. We integrate rich micro-interactions, layout components, and motion workflows to mimic the exact live code experience.",
    Icon: IoLaptopOutline,
    iconColor: "text-cyan-500",
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    details: [
      "High-Fidelity UI Design",
      "Micro-Interaction Rules",
      "Motion Workflow Demos",
    ],
  },
  {
    phase: "04",
    title: "Developer Handoff & Specifications",
    description:
      "We bundle complete, highly structured production design systems inside Figma, complete with dynamic tokens, responsive auto-layouts, and component specs for clean asset handoffs.",
    Icon: IoRocketOutline,
    iconColor: "text-emerald-500",
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    details: [
      "Production Design Systems",
      "Dynamic Token Bundles",
      "Auto-Layout Component Specs",
    ],
  },
];

export const uiUxTimelineContext = {
  title: "Our Design Process",
  heading1: "From concept to",
  heading2: "production handoff",
  description:
    "We follow a rigorous, agile roadmap engineered to protect speed-to-market loops while keeping human-design principles center.",
  color: "orange",
  gradientHeadingClasses: "from-orange-500 to-amber-500",
};

// For Data Analytics Roadmap Timeline Section
export const analyticsTimelineSteps = [
  {
    phase: "01",
    Icon: IoSearchOutline,
    iconColor: "text-emerald-500",
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Data Discovery & Schema Auditing",
    description:
      "We begin by auditing your current data footprint. Our team profiles existing database infrastructures, maps out unstructured telemetry formats, discovers siloed metrics, and establishes strict compliance, security, and data lineage benchmarks.",
    details: [
      "Infrastructure Profiling",
      "Siloed Source Mapping",
      "Governance Benchmarking",
    ],
  },
  {
    phase: "02",
    Icon: IoGitBranchOutline,
    iconColor: "text-teal-500",
    accent: "border-teal-500/20 text-teal-500 bg-teal-500/5",
    title: "Pipeline Ingestion & ETL Engineering",
    description:
      "Next, we engineer automated, high-throughput ETL/ELT pipelines. We establish real-time data streams and reliable message queues that securely extract, clean, and consolidate raw data points into a unified cloud data warehouse.",
    details: [
      "Stream & Queue Tuning",
      "ETL Schema Modeling",
      "Warehouse Consolidation",
    ],
  },
  {
    phase: "03",
    Icon: IoHardwareChipOutline,
    iconColor: "text-cyan-500",
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    title: "Algorithmic Modeling & ML Sprints",
    description:
      "With clean pipelines active, we build out your system's predictive core. We program custom statistical analysis matrices, clustering models, and data mining protocols that detect trend patterns and automate intelligence layers.",
    details: [
      "Statistical Modeling",
      "Pattern Recognition",
      "Algorithmic Validation",
    ],
  },
  {
    phase: "04",
    Icon: IoBarChartOutline,
    iconColor: "text-blue-500",
    accent: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    title: "BI Integration & Actionable Deployment",
    description:
      "Finally, we deploy your custom analytical engine. We build semantic layout layers and design interactive, multi-tenant Business Intelligence dashboards that display clean, sub-second queries to maximize organizational growth.",
    details: [
      "Semantic Layer Setup",
      "Interactive BI Dashboards",
      "Query Velocity Tuning",
    ],
  },
];

export const analyticsTimelineContext = {
  title: "Analytics Roadmap",
  heading1: "Our Intelligence",
  heading2: "Data Lifecycle",
  description:
    "A secure, multi-stage analytical process engineered to translate chaotic database pools into predictive business decisions.",
  color: "emerald",
  gradientHeadingClasses: "from-emerald-500 via-teal-400 to-cyan-500",
};

// For Research & Insights Timeline Section
export const researchTimelineSteps = [
  {
    phase: "01",
    Icon: IoListOutline,
    iconColor: "text-emerald-500",
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Scope Definition & Alignment",
    description:
      "We align research parameters with your core business targets. Our team interviews internal stakeholders, maps structural research hypotheses, defines precise user testing cohorts, and coordinates compliance matrices.",
    details: [
      "Hypothesis Formulation",
      "Target Persona Alignment",
      "Compliance Auditing",
    ],
  },
  {
    phase: "02",
    Icon: IoPeopleOutline,
    iconColor: "text-teal-500",
    accent: "border-teal-500/20 text-teal-500 bg-teal-500/5",
    title: "Field Fieldwork & Telemetry Ingestion",
    description:
      "Next, we run active testing operations. We moderate user interview tracks, set up heatmaps, conduct field observations, and benchmark navigation tasks across target user groups.",
    details: [
      "Moderated Testing Runs",
      "Heatmap Ingestion",
      "Task Success Logging",
    ],
  },
  {
    phase: "03",
    Icon: IoPieChartOutline,
    iconColor: "text-amber-500",
    accent: "border-amber-500/20 text-amber-500 bg-amber-500/5",
    title: "Thematic Synthesis & Root Friction Mapping",
    description:
      "We isolate pattern regularities across the raw telemetry data. Our researchers map user feedback trends, run usability heuristic audits, and trace exact interface drop-off points.",
    details: [
      "Thematic Coding Maps",
      "Heuristic Gap Scoring",
      "Friction Index Analysis",
    ],
  },
  {
    phase: "04",
    Icon: IoDocumentTextOutline,
    iconColor: "text-emerald-400",
    accent: "border-emerald-400/20 text-emerald-400 bg-emerald-400/5",
    title: "Strategic Action Plan Handoff",
    description:
      "We translate observations into engineering realities. We host an insights workshop with your team, present clear design wireframe models, and hand over a ranked product feature backlog.",
    details: [
      "Evidence-Led Wireframes",
      "Ranked Feature Backlogs",
      "Executive Strategy Briefings",
    ],
  },
];

export const researchTimelineContext = {
  title: "Discovery Roadmap",
  heading1: "Our Empirical",
  heading2: "Research Cycle",
  description:
    "A predictable, evidence-backed discovery timeline engineered to clear up market ambiguity and de-risk product development.",
  color: "emerald",
  gradientHeadingClasses: "from-emerald-500 via-teal-500 to-amber-500",
};
