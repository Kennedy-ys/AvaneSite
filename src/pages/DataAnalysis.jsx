import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoLogoTableau } from "react-icons/io5";
import Button from "../components/Button";
import { TbArrowDownRight } from "react-icons/tb";
import {  IoAnalyticsOutline, IoTrendingUpOutline, IoDiscOutline, IoGitNetworkOutline, IoBarChartOutline, IoGitMergeOutline, IoShieldCheckmarkOutline, IoPieChartOutline, IoHardwareChipOutline, IoSearchOutline, IoGitBranchOutline } from "react-icons/io5";
import Timeline from "../components/Timeline";
import GetStarted from "../components/GetStarted";
import { SiDatabricks, SiGooglecloud, SiJupyter, SiLooker, SiNumpy, SiPandas, SiPython, SiRstudioide, SiSnowflake } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Projects from "../components/Projects";
import LogoMarquee from "../components/LogoMarquee";

const DataAnalysis = () => {

  // Structured data for Capabilities Matrix Section
  const dataCapabilities = [
  {
    icon: <IoGitNetworkOutline size={24} />,
    title: "Data Engineering & Pipelines",
    description: "Architecting high-throughput ETL/ELT data pipelines that ingest, process, and clean raw data streams. We connect disjointed operational systems into unified cloud data lakes with zero message loss.",
    tags: ["Apache Kafka", "Airflow", "Snowflake", "dbt"],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500"
  },
  {
    icon: <IoBarChartOutline size={24} />,
    title: "Business Intelligence & BI",
    description: "Transforming raw data warehouses into interactive dashboard environments. We design predictive logic schemas and looker semantic layers that democratize decision-making metrics across your company.",
    tags: ["Looker", "Tableau", "PowerBI", "SQL Matrix"],
    gridSpan: "lg:col-span-5",
    accent: "from-cyan-500 to-blue-500"
  },
  {
    icon: <IoHardwareChipOutline size={24} />,
    title: "Predictive Analytics & AI/ML",
    description: "Deploying production-ready statistical algorithms, clustering arrays, and machine learning structures engineered to anticipate consumer behavior shifts and automate operations.",
    tags: ["Python", "Scikit-Learn", "PyTorch", "AWS SageMaker"],
    gridSpan: "lg:col-span-5",
    accent: "from-purple-600 to-indigo-500"
  },
  {
    icon: <IoShieldCheckmarkOutline size={24} />,
    title: "Data Governance & Integrity",
    description: "Securing data pipelines with granular column-level encryption access masks, continuous security audits, and strict compliance layers built to clear rigorous privacy parameters.",
    tags: ["GDPR Compliance", "SOC2 Scope", "Data Lineage", "IAM Security"],
    gridSpan: "lg:col-span-7",
    accent: "from-teal-500 to-emerald-600"
  }
];

const analyticHighlights = [
  { icon: <IoPieChartOutline className="text-emerald-500" />, text: "Sub-second analytical query speeds across billion-row data landscapes." },
  { icon: <IoGitMergeOutline className="text-cyan-500" />, text: "Clean data lineage tracking ensuring absolute source integrity." }
];

// For Roadmap Timeline Section
const timelineSteps = [
  {
    phase: "01",
    icon: <IoSearchOutline className="text-emerald-500" size={22} />,
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Data Discovery & Schema Auditing",
    description: "We begin by auditing your current data footprint. Our team profiles existing database infrastructures, maps out unstructured telemetry formats, discovers siloed metrics, and establishes strict compliance, security, and data lineage benchmarks.",
    details: ["Infrastructure Profiling", "Siloed Source Mapping", "Governance Benchmarking"]
  },
  {
    phase: "02",
    icon: <IoGitBranchOutline className="text-teal-500" size={22} />,
    accent: "border-teal-500/20 text-teal-500 bg-teal-500/5",
    title: "Pipeline Ingestion & ETL Engineering",
    description: "Next, we engineer automated, high-throughput ETL/ELT pipelines. We establish real-time data streams and reliable message queues that securely extract, clean, and consolidate raw data points into a unified cloud data warehouse.",
    details: ["Stream & Queue Tuning", "ETL Schema Modeling", "Warehouse Consolidation"]
  },
  {
    phase: "03",
    icon: <IoHardwareChipOutline className="text-cyan-500" size={22} />,
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    title: "Algorithmic Modeling & ML Sprints",
    description: "With clean pipelines active, we build out your system's predictive core. We program custom statistical analysis matrices, clustering models, and data mining protocols that detect trend patterns and automate intelligence layers.",
    details: ["Statistical Modeling", "Pattern Recognition", "Algorithmic Validation"]
  },
  {
    phase: "04",
    icon: <IoBarChartOutline className="text-blue-500" size={22} />,
    accent: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    title: "BI Integration & Actionable Deployment",
    description: "Finally, we deploy your custom analytical engine. We build semantic layout layers and design interactive, multi-tenant Business Intelligence dashboards that display clean, sub-second queries to maximize organizational growth.",
    details: ["Semantic Layer Setup", "Interactive BI Dashboards", "Query Velocity Tuning"]
  }
];

const timelineContext = {
  title: "Analytics Roadmap",
  heading1: "Our Intelligence",
  heading2: "Data Lifecycle", 
  description: "A secure, multi-stage analytical process engineered to translate chaotic database pools into predictive business decisions.",
  color: "emerald",
  gradientHeadingClasses: "from-emerald-500 via-teal-400 to-cyan-500",
  
};

const projects = [
  {
    title: "Algorithmic Customer Lifetime Prediction",
    category: "Predictive Analytics & ML",
    metric: "4.8x Conversion Rate Lift",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/work/customer-prediction",
    accentColor: "from-emerald-500 to-teal-500"
  },
  {
    title: "Supply Chain Latency Redesign",
    category: "Data Engineering Pipeline",
    metric: "-74% Inventory Overhead",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "/work/supply-chain-analytics",
    accentColor: "from-orange-500 to-amber-500"
  },
  {
    title: "SaaS Operational Health Dashboard",
    category: "Business Intelligence & BI",
    metric: "99.99% Metric Availability",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "/work/saas-intelligence",
    accentColor: "from-purple-600 to-indigo-500"
  },
  {
    title: "Real-Time Telematics Grid Auditing",
    category: "Data Governance & Lineage",
    metric: "100% GDPR/SOC2 Compliance",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    link: "/work/telematics-governance",
    accentColor: "from-cyan-500 to-blue-500"
  },
  {
    title: "Fintech Core Banking Anomaly Detection",
    category: "Machine Learning (ML)",
    metric: "-92% False Positives",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80",
    link: "/work/fintech-anomalies",
    accentColor: "from-rose-500 to-orange-500"
  },
  {
    title: "Cloud Infrastructure Cost Matrix",
    category: "Data Cost Optimization",
    metric: "-35% Cloud Computing Spend",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "/work/cloud-cost-analytics",
    accentColor: "from-indigo-600 to-purple-500"
  }
];

// For the Project section header context
 const ProjectContext = {
  title: "Intelligence Proofs",
  heading1: "Automated",
  heading2: "Growth Vectors",
  headerLineColor: "bg-emerald-500",
  gradientHeadingClasses: "from-emerald-500 via-teal-400 to-cyan-500",
  description: "Explore robust data warehouses, automated ML pipelines, and real-time analytical portals engineered to convert chaotic metrics into predictive decisions."
};

// For your existing tool stack marquee component
 const analyticsTools = [
  { 
    name: 'Python', 
    icon: <SiPython size={26} className="text-[#3776AB]" />, 
    role: "Core Analysis & ML" 
  },
  { 
    name: 'Jupyter', 
    icon: <SiJupyter size={26} className="text-[#F37626]" />, 
    role: "Exploratory Programming" 
  },
  { 
    name: 'PostgreSQL', 
    icon: <BiLogoPostgresql size={26} className="text-[#4169E1]" />, 
    role: "Database Engine" 
  },
  { 
    name: 'Pandas', 
    icon: <SiPandas size={26} className="text-[#150458]" />, 
    role: "Data Manipulation" 
  },
  { 
    name: 'RStudio', 
    icon: <SiRstudioide size={26} className="text-[#75AADB]" />, 
    role: "Statistical Computing" 
  },
  { 
    name: 'Numpy', 
    icon: <SiNumpy size={26} className="text-[#013243]" />, 
    role: "Numerical Analysis" 
  },
  { 
    name: 'Databricks', 
    icon: <SiDatabricks size={26} className="text-[#FF3621]" />, 
    role: "Lakehouse Architecture" 
  },
  { 
    name: 'Snowflake', 
    icon: <SiSnowflake size={26} className="text-[#29B5E8]" />, 
    role: "Cloud Data Warehouse" 
  },
  { 
    name: 'Google Cloud', 
    icon: <SiGooglecloud size={26} className="text-[#4285F4]" />, 
    role: "Cloud Infrastructure" 
  },
  { 
    name: 'Looker', 
    icon: <SiLooker size={26} className="text-[#4285F4]" />, 
    role: "Semantic BI Layer" 
  },
  { 
    name: 'Tableau', 
    icon: <IoLogoTableau size={26} className="text-[#E97627]" />, 
    role: "BI Visualization" 
  }
];

  return (
    <>
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 pt-32 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#080f1e] dark:to-[#060a15] transition-colors duration-300 overflow-hidden">
      
      {/* 1. Structural Dot Matrix Background Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#8080800f_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      
      {/* Cool Intellect Blue & Emerald Glow Arrays */}
      <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] bottom-10 w-md h-112 bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Brand Vector Geometric Accent (Mirrors page pattern framework) */}
      <div className="absolute left-12 top-1/3 bottom-1/3 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="0" x2="10" y2="300" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="50" x2="50" y2="250" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="50" cy="150" r="4" fill="#06b6d4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* LEFT COLUMN: INTELLIGENCE MARKETING COPY PANEL */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline Badge indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/40 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <IoAnalyticsOutline className="text-sm" />
            Predictive Business Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
            Turn raw metrics <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500">
              into automated
            </span> <br />
            growth vectors.
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
            We architect end-to-end data pipelines, custom BI modeling structures, and real-time analysis platforms that transform complex database chaos into clear operational decisions.
          </p>

          {/* Call-To-Action Button Loops */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            
              <Button as={Link} to="/contact" btnBgColor="bg-emerald-600" btnBgHover="bg-emerald-700" icon={<IoTrendingUpOutline className="text-emerald-600" />}>Request Data Audit</Button>

              <Button as="a" href="#stack" btnBgColor="bg-white" btnBgHover="bg-emerald-700" btnTxtColor="text-emerald-600 group-hover:text-white" iconBgColor="bg-emerald-600 group-hover:bg-white" icon={<TbArrowDownRight className="text-white group-hover:text-emerald-600" />}>Our Analysis Stack</Button>
            
          </div>
        </motion.div>

        {/* RIGHT COLUMN: SIMULATED INSIGHTS DASHBOARD FRAME */}
        <motion.div
          className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          {/* Central Radial Underlay Glow */}
          <div className="absolute inset-0 m-auto w-64 h-64 bg-linear-to-tr from-emerald-500 to-cyan-500 opacity-20 dark:opacity-10 blur-[90px] rounded-full pointer-events-none" />

          {/* Premium Glass Dashboard Shell */}
          <div className="relative w-full max-w-115 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
            
            {/* Dashboard Control Header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">live_stream_matrix</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 dark:text-gray-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200/40 dark:border-white/5">
                REFRESH: ACTIVE
              </div>
            </div>

            {/* Simulated Data Points visualization cards */}
            <div className="space-y-4">
              
              {/* Row 1: Conversion Chart Line Simulator */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Algorithmic Match Rate</p>
                  <p className="text-sm font-black text-emerald-500 font-mono">+34.8%</p>
                </div>
                {/* SVG Analytical Wave line drawing path */}
                <div className="h-12 w-full pt-2">
                  <svg className="w-full h-full" viewBox="0 0 300 40" preserveAspectRatio="none">
                    <path 
                      d="M0,35 Q30,10 60,25 T120,5 T180,30 T240,12 T300,3" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="2" 
                    />
                    <path 
                      d="M0,35 Q30,10 60,25 T120,5 T180,30 T240,12 T300,3 L300,40 L0,40 Z" 
                      fill="url(#gradient-cyan-flow)" 
                      opacity="0.1" 
                    />
                    <defs>
                      <linearGradient id="gradient-cyan-flow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Row 2: Split Tracking Progress Panels */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Queries Parsed</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white mt-1 font-mono">1.42M<span className="text-xs text-slate-400 font-light">/s</span></p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Anomaly Threshold</p>
                  <p className="text-xl font-black text-cyan-500 mt-1 font-mono">0.002%</p>
                </div>
              </div>

            </div>

            {/* Bottom mini status verification flag */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-[10px] font-mono text-slate-400 dark:text-gray-500 text-left">
              <IoDiscOutline className="text-emerald-500 animate-pulse text-xs shrink-0" />
              Models Optimized: Clustering Engine v4.2.1
            </div>

          </div>

          {/* Decorative Floating Insight Counter Widget */}
          <motion.div 
            className="absolute -top-4 -left-6 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-3.5 rounded-xl max-w-47.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-xs">
              📊
            </div>
            <div className="text-left">
              <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Data Latency</h4>
              <p className="text-[11px] text-emerald-500 font-mono font-bold leading-none mt-0.5">&lt; 14ms</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>

    {/* Capabilities Matrix Section */}
    <section id="stack" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#080f1e] transition-colors duration-300">
      
      {/* Background Structural Ambient Shadows */}
      <div className="absolute left-1/4 top-1/4 w-125 h-125 bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Typography Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left max-w-xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="block w-6 h-0.5 bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                CAPABILITIES MATRIX
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              Data Systems <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500">
                & Core Intelligence
              </span>
            </h2>
          </div>
          
          <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
            We extract critical core performance indicators from data noise, engineering highly robust analytical channels that power programmatic operations.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {dataCapabilities.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.gridSpan} bg-slate-50/70 dark:bg-slate-900/20 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-xs text-left`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Top Row: Floating Utility Accent Glow Behind Icon */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 shadow-xs">
                  {item.icon}
                </div>
              </div>

              {/* Central Information Stack */}
              <div className="mt-8 relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Bottom Technology Pills Mapping */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap gap-2 relative z-10">
                {item.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="text-[11px] font-bold text-slate-500 dark:text-gray-400 px-3 py-1 rounded-md bg-white dark:bg-slate-950/60 border border-slate-200/60 dark:border-white/5 tracking-wide font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Dynamic Internal Gradient Underlay Line that appears on block hover */}
              <div className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

            </motion.div>
          ))}
        </div>

        {/* Global Assurance Banner Below Bento Rows */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/20 dark:bg-slate-900/5 backdrop-blur-xs text-left">
          {analyticHighlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 max-w-md">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                {highlight.icon}
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-gray-400">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Design Timeline Process Section */}
      <Timeline timelineSteps={timelineSteps} timelineContext={timelineContext} />
      
            {/* Project Section */}
            <Projects ProjectContext={ProjectContext} projects={projects} />
      
            {/* Tool Stack */}
             <LogoMarquee
              row1Data={analyticsTools}
              row2Data={analyticsTools}
              subText="Leveraging modern data engineering pipelines and tools to build secure, high-performance, and scalable analytical models."
              title="Our Analytics Toolkit"

            />

      {/* CTA Section */}
      <GetStarted
        text="Ready to turn your raw data into actionable business growth?"
        ctaText="Send a Message"
      />

    </>
  );
};

export default DataAnalysis;