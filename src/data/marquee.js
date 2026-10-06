import { BsMicrosoftTeams } from "react-icons/bs";
import {
  FiActivity,
  FiClock,
  FiEye,
  FiFeather,
  FiLayers,
  FiPieChart,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiAsana,
  SiClickup,
  SiConfluence,
  SiJira,
  SiLinear,
  SiMiro,
  SiNotion,
  SiTrello,
  SiBehance,
  SiBlender,
  SiCanvas,
  SiCoreldraw,
  SiGooglefonts,
  SiPinterest,
  SiKalilinux,
  SiWireshark,
  SiBurpsuite,
  SiVault,
  SiSplunk,
  SiMetasploit,
  SiCloudflare,
  SiDatadog,
  SiDocker,
  SiGnubash,
  SiLooker,
  SiGooglecloud,
  SiSnowflake,
  SiDatabricks,
  SiNumpy,
  SiRstudioide,
  SiPandas,
  SiJupyter,
  SiPython,
  SiZoom,
  SiTypeform,
  SiAirtable,
  SiGoogleanalytics,
  SiQualtrics,
  SiHotjar,
  SiMixpanel,
  SiGit,
  SiVite,
  SiGraphql,
  SiSupabase,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiMeta,
  SiTiktok,
  SiBuffer,
  SiHootsuite,
  SiX,
  SiFramer,
  SiMaze,
  SiMural,
} from "react-icons/si";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
  TbBrandAdobePremiere,
  TbBrandAdobeXd,
  TbBrandLinkedinFilled,
} from "react-icons/tb";
import { CapCut, Figma } from "@lobehub/icons";
import { IoLogoTableau, IoTerminal } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { FaAws, FaSketch, FaInvision } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";

// Dev Tools for Project Management
export const pManagementTools = [
  {
    name: "Jira Software",
    Icon: SiJira,
    iconColor: "text-[#0052CC]",
    role: "Epic & Backlog Tracking",
  },
  {
    name: "Linear",
    Icon: SiLinear,
    iconColor: "text-[#000000] dark:text-white",
    role: "High-Velocity Issue Tracking",
  },
  {
    name: "Confluence",
    Icon: SiConfluence,
    iconColor: "text-[#0052CC]",
    role: "Requirements & Spec Wiki",
  },
  {
    name: "Notion",
    Icon: SiNotion,
    iconColor: "text-[#000000] dark:text-white",
    role: "Knowledge Base Management",
  },
  {
    name: "Miro",
    Icon: SiMiro,
    iconColor: "text-[#FFD02F]",
    role: "User Story Mapping",
  },
  {
    name: "Slack",
    Icon: FaSlack,
    iconColor: "text-[#4A154B]",
    role: "Asynchronous Standups",
  },
  {
    name: "Asana",
    Icon: SiAsana,
    iconColor: "text-[#F06A6A]",
    role: "Milestone Scheduling",
  },
  {
    name: "ClickUp",
    Icon: SiClickup,
    iconColor: "text-[#7B68EE]",
    role: "Task Architecture",
  },
  {
    name: "Trello",
    Icon: SiTrello,
    iconColor: "text-[#0079BF]",
    role: "Visual Kanban Boards",
  },
  {
    name: "MS Teams",
    Icon: BsMicrosoftTeams,
    iconColor: "text-[#6264A7]",
    role: "Stakeholder Communications",
  },
  {
    name: "Velocity Monitor",
    Icon: FiActivity,
    iconColor: "text-[#6366F1]",
    role: "Sprint Burndown Analytics",
  },
  {
    name: "Toggl Track",
    Icon: FiClock,
    iconColor: "text-[#E57CD8]",
    role: "Capacity Utilization Planning",
  },
];

// Dev Tools for Graphics Design
export const graphicsDesignTools = [
  {
    name: "Adobe Illustrator",
    Icon: TbBrandAdobeIllustrator,
    iconColor: "text-[#FF9A00]",
    role: "Vector Architecture & Marks",
  },
  {
    name: "Adobe Photoshop",
    Icon: TbBrandAdobePhotoshop,
    iconColor: "text-[#31A8FF]",
    role: "Asset Compositing & Mockups",
  },
  {
    name: "Adobe InDesign",
    Icon: TbBrandAdobeIndesign,
    iconColor: "text-[#FF3366]",
    role: "Stylebook & Print Layouts",
  },
  {
    name: "Figma",
    Icon: Figma,
    iconColor: "",
    role: "Digital Design Systems",
  },
  {
    name: "Blender 3D",
    Icon: SiBlender,
    iconColor: "text-[#EA7600]",
    role: "Dimensional Asset Modeling",
  },
  {
    name: "Google Fonts",
    Icon: SiGooglefonts,
    iconColor: "text-[#F9AB00]",
    role: "Typography Sourcing",
  },
  {
    name: "FontLab",
    Icon: FiFeather,
    iconColor: "text-[#EC4899]",
    role: "Custom Kerning & Type",
  },
  {
    name: "Adobe Premiere Pro",
    Icon: TbBrandAdobePremiere,
    iconColor: "text-[#9999FF]",
    role: "Motion Graphics Rendering",
  },
  {
    name: "Pantone Studio",
    Icon: FiLayers,
    iconColor: "text-[#3B82F6]",
    role: "Ink Profile Configuration",
  },
  {
    name: "Pinterest",
    Icon: SiPinterest,
    iconColor: "text-[#E60023]",
    role: "Visual Strategy Curation",
  },
  {
    name: "Behance",
    Icon: SiBehance,
    iconColor: "text-[#0057FF]",
    role: "Asset Trend Benchmarking",
  },
  {
    name: "Canva Pro",
    Icon: SiCanvas,
    iconColor: "text-[#00C4CC]",
    role: "Template Distribution Packs",
  },
  {
    name: "CorelDRAW",
    Icon: SiCoreldraw,
    iconColor: "text-[#00833E]",
    role: "Production Vector Geometry",
  },
];

// Dev Tools for Cybersecurity
export const cyberTools = [
  {
    name: "Kali Linux",
    Icon: SiKalilinux,
    iconColor: "text-[#8F8F8F]",
    role: "Offensive Audit Environment",
  },
  {
    name: "Wireshark",
    Icon: SiWireshark,
    iconColor: "text-[#1679A7]",
    role: "Packet Level Tracing",
  },
  {
    name: "Burp Suite",
    Icon: SiBurpsuite,
    iconColor: "text-[#FF6600]",
    role: "Web Application Stressing",
  },
  {
    name: "HashiCorp Vault",
    Icon: SiVault,
    iconColor: "text-[#000000] dark:text-white",
    role: "Cryptographic Key Storage",
  },
  {
    name: "Splunk Enterprise",
    Icon: SiSplunk,
    iconColor: "text-[#000000] dark:text-[#FF7A00]",
    role: "SIEM Log Aggregation",
  },
  {
    name: "Metasploit",
    Icon: SiMetasploit,
    iconColor: "text-[#3F5A94]",
    role: "Exploit Vector Simulation",
  },
  {
    name: "Cloudflare",
    Icon: SiCloudflare,
    iconColor: "text-[#F38020]",
    role: "DDoS Edge Defense Matrices",
  },
  {
    name: "Datadog Security",
    Icon: SiDatadog,
    iconColor: "text-[#632CA6]",
    role: "Cloud Posture Monitoring",
  },
  {
    name: "Docker Bench",
    Icon: SiDocker,
    iconColor: "text-[#2496ED]",
    role: "Runtime Kernel Hardening",
  },
  {
    name: "OpenVAS",
    Icon: FiShield,
    iconColor: "text-[#00C4CC]",
    role: "Automated Vulnerability Indexing",
  },
  {
    name: "Bash Scripting",
    Icon: SiGnubash,
    iconColor: "text-[#4EAA25]",
    role: "Automated Patch Execution",
  },
];
// Dev tools for Development
export const devTools = [
  {
    name: "VS Code",
    Icon: BiLogoVisualStudio,
    iconColor: "text-[#007ACC]",
    role: "Primary IDE",
  },
  {
    name: "React",
    Icon: SiReact,
    iconColor: "text-[#61DAFB]",
    role: "Frontend Framework",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    iconColor: "text-[#000000] dark:text-white",
    role: "Fullstack SSR Framework",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    iconColor: "text-[#3178C6]",
    role: "Type Safety",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    iconColor: "text-[#06B6D4]",
    role: "UI Styling",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    iconColor: "text-[#339933]",
    role: "Runtime Environment",
  },
  {
    name: "PostgreSQL",
    Icon: BiLogoPostgresql,
    iconColor: "text-[#4169E1]",
    role: "Relational Database",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    iconColor: "text-[#47A248]",
    role: "NoSQL Database",
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
    iconColor: "text-[#3ECF8E]",
    role: "Backend as a Service",
  },
  {
    name: "GraphQL",
    Icon: SiGraphql,
    iconColor: "text-[#E10098]",
    role: "API Query Language",
  },
  {
    name: "Vite",
    Icon: SiVite,
    iconColor: "text-[#646CFF]",
    role: "Frontend Build Tool",
  },
  {
    name: "Git",
    Icon: SiGit,
    iconColor: "text-[#F05032]",
    role: "Version Control",
  },
  {
    name: "Docker",
    Icon: SiDocker,
    iconColor: "text-[#2496ED]",
    role: "Containerization",
  },
  {
    name: "AWS",
    Icon: FaAws,
    iconColor: "text-[#FF9900]",
    role: "Cloud Infrastructure",
  },
  {
    name: "Terminal",
    Icon: IoTerminal,
    iconColor: "text-[#4AF626]",
    role: "Command Line Scripting",
  },
];

// Tools  for Social Media Management
export const smManagementTools = [
  {
    name: "Figma",
    Icon: Figma.Color,
    iconColor: "",
    role: "Static Graphic Frameworks",
  },
  {
    name: "CapCut Pro",
    Icon: CapCut,
    iconColor: "text-[#000000] dark:text-white",
    role: "Shortform Mobile Cuts",
  },
  {
    name: "Adobe Photoshop",
    Icon: TbBrandAdobePhotoshop,
    iconColor: "text-[#31A8FF]",
    role: "Thumbnail Composition",
  },
  {
    name: "Adobe Premiere Pro",
    Icon: TbBrandAdobePremiere,
    iconColor: "text-[#9999FF]",
    role: "High-Fidelity Audio & Cuts",
  },
  {
    name: "Meta Business Suite",
    Icon: SiMeta,
    iconColor: "text-[#0668E1]",
    role: "Paid Funnel Tracking",
  },
  {
    name: "LinkedIn Campaign Manager",
    Icon: TbBrandLinkedinFilled,
    iconColor: "text-[#0A66C2]",
    role: "B2B Authority Distribution",
  },
  {
    name: "TikTok For Business",
    Icon: SiTiktok,
    iconColor: "text-[#000000] dark:text-white",
    role: "Algorithmic Retention Tuning",
  },
  {
    name: "X Professional",
    Icon: SiX,
    iconColor: "text-[#000000] dark:text-white",
    role: "Real-Time Thread Engagement",
  },
  {
    name: "Buffer",
    Icon: SiBuffer,
    iconColor: "text-[#2C3E50] dark:text-[#34495E]",
    role: "Cadence Automation Hooks",
  },
  {
    name: "Hootsuite Enterprise",
    Icon: SiHootsuite,
    iconColor: "text-[#1F1F1F] dark:text-[#E4A025]",
    role: "Aggregated Inbound Queues",
  },
  {
    name: "Google Analytics 4",
    Icon: SiGoogleanalytics,
    iconColor: "text-[#E37400]",
    role: "Profile Conversion Logs",
  },
  {
    name: "AnswerThePublic",
    Icon: FiTrendingUp,
    iconColor: "text-[#FF4F00]",
    role: "Semantic Topic Auditing",
  },
];

// Structured data for UI/UX Tool Stack
export const uiUxTools = [
  {
    name: "Figma",
    Icon: Figma.Color,
    iconColor: "",
    role: "Core Design & Prototyping",
  },
  {
    name: "Miro",
    Icon: SiMiro,
    iconColor: "text-[#FFD02F]",
    role: "Research & Ideation",
  },
  {
    name: "Notion",
    Icon: SiNotion,
    iconColor: "text-[#000000] dark:text-white",
    role: "Documentation",
  },
  {
    name: "Framer",
    Icon: SiFramer,
    iconColor: "text-[#0055FF] dark:text-white",
    role: "Interactive Design",
  },
  {
    name: "Adobe XD",
    Icon: TbBrandAdobeXd,
    iconColor: "text-[#FF61F6]",
    role: "Vector Design",
  },
  {
    name: "Sketch",
    Icon: FaSketch,
    iconColor: "text-[#FDB300]",
    role: "UI Design",
  },
  {
    name: "Maze",
    Icon: SiMaze,
    iconColor: "text-[#7B61FF]",
    role: "User Testing",
  },
  {
    name: "Mural",
    Icon: SiMural,
    iconColor: "text-[#E61F25]",
    role: "Brainstorming",
  },
  {
    name: "InVision",
    Icon: FaInvision,
    iconColor: "text-[#FF3366]",
    role: "Legacy Prototyping",
  },
];

// Tools for Research Tools
export const researchTools = [
  {
    name: "Mixpanel",
    Icon: SiMixpanel,
    iconColor: "text-[#A13EA6]",
    role: "Event Telemetry Analysis",
  },
  {
    name: "Hotjar",
    Icon: SiHotjar,
    iconColor: "text-[#FF7227]",
    role: "Heatmaps & Session Recording",
  },
  {
    name: "Qualtrics",
    Icon: SiQualtrics,
    iconColor: "text-[#00B4F1]",
    role: "Enterprise Survey Engine",
  },
  {
    name: "Miro",
    Icon: SiMiro,
    iconColor: "text-[#FFD02F]",
    role: "Affinity Mapping & Synthesis",
  },
  {
    name: "Google Analytics",
    Icon: SiGoogleanalytics,
    iconColor: "text-[#E37400]",
    role: "Traffic & Drop-off Auditing",
  },
  {
    name: "Figma",
    Icon: Figma.Color,
    iconColor: "",
    role: "Interactive Prototype Testing",
  },
  {
    name: "Notion",
    Icon: SiNotion,
    iconColor: "text-[#000000] dark:text-white",
    role: "Research Repository Wiki",
  },
  {
    name: "Airtable",
    Icon: SiAirtable,
    iconColor: "text-[#186BF2]",
    role: "Insight Matrix Database",
  },
  {
    name: "Typeform",
    Icon: SiTypeform,
    iconColor: "text-[#000000] dark:text-white",
    role: "User Feedback Ingestion",
  },
  {
    name: "Zoom",
    Icon: SiZoom,
    iconColor: "text-[#2D8CFF]",
    role: "Moderated Video Interviews",
  },
  {
    name: "UserTesting",
    Icon: FiEye,
    iconColor: "text-[#10B981]",
    role: "Unmoderated Remote Testing",
  },
  {
    name: "Optimal Workshop",
    Icon: FiPieChart,
    iconColor: "text-[#F59E0B]",
    role: "Information Architecture Audits",
  },
];

//  Tools for Data Analytics
export const analyticsTools = [
  {
    name: "Python",
    Icon: SiPython,
    iconColor: "text-[#3776AB]",
    role: "Core Analysis & ML",
  },
  {
    name: "Jupyter",
    Icon: SiJupyter,
    iconColor: "text-[#F37626]",
    role: "Exploratory Programming",
  },
  {
    name: "PostgreSQL",
    Icon: BiLogoPostgresql,
    iconColor: "text-[#4169E1]",
    role: "Database Engine",
  },
  {
    name: "Pandas",
    Icon: SiPandas,
    iconColor: "text-[#150458]",
    role: "Data Manipulation",
  },
  {
    name: "RStudio",
    Icon: SiRstudioide,
    iconColor: "text-[#75AADB]",
    role: "Statistical Computing",
  },
  {
    name: "Numpy",
    Icon: SiNumpy,
    iconColor: "text-[#013243]",
    role: "Numerical Analysis",
  },
  {
    name: "Databricks",
    Icon: SiDatabricks,
    iconColor: "text-[#FF3621]",
    role: "Lakehouse Architecture",
  },
  {
    name: "Snowflake",
    Icon: SiSnowflake,
    iconColor: "text-[#29B5E8]",
    role: "Cloud Data Warehouse",
  },
  {
    name: "Google Cloud",
    Icon: SiGooglecloud,
    iconColor: "text-[#4285F4]",
    role: "Cloud Infrastructure",
  },
  {
    name: "Looker",
    Icon: SiLooker,
    iconColor: "text-[#4285F4]",
    role: "Semantic BI Layer",
  },
  {
    name: "Tableau",
    Icon: IoLogoTableau,
    iconColor: "text-[#E97627]",
    role: "BI Visualization",
  },
];
