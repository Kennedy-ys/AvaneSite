import React from "react";
import { motion } from "motion/react";
import { IoSearchSharp, IoCompassOutline, IoEyeOutline, IoSearchOutline, IoAnalyticsOutline, IoPulseOutline, IoShieldCheckmarkOutline, IoSparklesOutline, IoTrendingUpOutline, IoListOutline, IoPeopleOutline, IoPieChartOutline, IoDocumentTextOutline } from "react-icons/io5";
import GetStarted from "../components/GetStarted";
import LogoMarquee from "../components/LogoMarquee";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import { SiAirtable, SiGoogleanalytics, SiHotjar, SiMiro, SiMixpanel, SiNotion, SiQualtrics, SiTypeform, SiZoom } from "react-icons/si";
import { FiEye, FiPieChart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TbArrowDownRight } from "react-icons/tb";
import Button from "../components/Button";
import { Figma } from "@lobehub/icons";

const Research = () => {

  const researchCapabilities = [
  {
    icon: <IoSearchOutline size={24} />,
    title: "Qualitative User Discovery & Interviewing",
    description: "Conducting deep-dive contextual user interviews and ethnographic field observations. We design neutral test scripts and identify subtle usability friction points that traditional analytical logs often miss.",
    tags: ["User Interviews", "Field Observations", "Persona Modeling", "Journey Mapping"],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500"
  },
  {
    icon: <IoAnalyticsOutline size={24} />,
    title: "Quantitative Behavioral Analytics",
    description: "Extracting user patterns directly from real-world engagement tracking. We analyze large-scale heatmaps, optimize drop-off conversion funnels, and setup split A/B experiments to confirm core feature performance.",
    tags: ["Heatmap Telemetry", "Funnel Optimizations", "A/B Testing Loops", "Cohort Analysis"],
    gridSpan: "lg:col-span-5",
    accent: "from-teal-500 to-amber-500"
  },
  {
    icon: <IoPulseOutline size={24} />,
    title: "Heuristic Auditing & Usability Benchmarking",
    description: "Evaluating digital architectures against industry-standard cognitive design rules. We map interface structures against systemic UX parameters to isolate and remediate user-experience roadblocks.",
    tags: ["Nielsen Heuristics", "Task Success Ratios", "Accessibility Checkups", "Friction Indexing"],
    gridSpan: "lg:col-span-5",
    accent: "from-amber-500 to-emerald-600"
  },
  {
    icon: <IoShieldCheckmarkOutline size={24} />,
    title: "Competitive Landscape & Market Synthesis",
    description: "Deconstructing competitor capabilities, feature patterns, and commercial positioning models. We deliver crisp, actionable market whitespace matrices that keep your feature roadmap ahead of the curve.",
    tags: ["Whitespace Identification", "Feature Matrices", "Market Sizing", "Foresight Mapping"],
    gridSpan: "lg:col-span-7",
    accent: "from-teal-600 to-emerald-500"
  }
];

const researchHighlights = [
  { icon: <IoSparklesOutline className="text-emerald-500" />, text: "Actionable research blueprints backed by over 450+ cross-industry user verification sessions." },
  { icon: <IoTrendingUpOutline className="text-amber-500" />, text: "Empirical discoveries directly correlated with measurable business conversion improvements." }
];

// For Research & Insights Timeline Section
const timelineSteps = [
  {
    phase: "01",
    icon: <IoListOutline className="text-emerald-500" size={22} />,
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Scope Definition & Alignment",
    description: "We align research parameters with your core business targets. Our team interviews internal stakeholders, maps structural research hypotheses, defines precise user testing cohorts, and coordinates compliance matrices.",
    details: ["Hypothesis Formulation", "Target Persona Alignment", "Compliance Auditing"]
  },
  {
    phase: "02",
    icon: <IoPeopleOutline className="text-teal-500" size={22} />,
    accent: "border-teal-500/20 text-teal-500 bg-teal-500/5",
    title: "Field Fieldwork & Telemetry Ingestion",
    description: "Next, we run active testing operations. We moderate user interview tracks, set up heatmaps, conduct field observations, and benchmark navigation tasks across target user groups.",
    details: ["Moderated Testing Runs", "Heatmap Ingestion", "Task Success Logging"]
  },
  {
    phase: "03",
    icon: <IoPieChartOutline className="text-amber-500" size={22} />,
    accent: "border-amber-500/20 text-amber-500 bg-amber-500/5",
    title: "Thematic Synthesis & Root Friction Mapping",
    description: "We isolate pattern regularities across the raw telemetry data. Our researchers map user feedback trends, run usability heuristic audits, and trace exact interface drop-off points.",
    details: ["Thematic Coding Maps", "Heuristic Gap Scoring", "Friction Index Analysis"]
  },
  {
    phase: "04",
    icon: <IoDocumentTextOutline className="text-emerald-400" size={22} />,
    accent: "border-emerald-400/20 text-emerald-400 bg-emerald-400/5",
    title: "Strategic Action Plan Handoff",
    description: "We translate observations into engineering realities. We host an insights workshop with your team, present clear design wireframe models, and hand over a ranked product feature backlog.",
    details: ["Evidence-Led Wireframes", "Ranked Feature Backlogs", "Executive Strategy Briefings"]
  }
];

const timelineContext = {
  title: "Discovery Roadmap",
  heading1: "Our Empirical",
  heading2: "Research Cycle", 
  description: "A predictable, evidence-backed discovery timeline engineered to clear up market ambiguity and de-risk product development.",
  color: "emerald",
  gradientHeadingClasses: "from-emerald-500 via-teal-500 to-amber-500",
};

// Structured data for Research & Insights Showcase Section
const projects = [
  {
    title: "Neobank Enterprise App Usability Diagnostics",
    category: "Heuristic & Field Research",
    metric: "+46% Task Success Ratio",
    imageUrl: "https://images.unsplash.com/photo-1553484771-047a44eee27f?auto=format&fit=crop&w=800&q=80",
    link: "work/neobank-usability-diagnostics",
    accentColor: "from-emerald-600 to-teal-500"
  },
  {
    title: "E-Commerce Checkout Friction Synthesis",
    category: "Quantitative Behavioral Analytics",
    metric: "-28% Funnel Drop-off",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    link: "work/ecommerce-friction-synthesis",
    accentColor: "from-teal-600 to-amber-500"
  },
  {
    title: "SaaS Workflow Discovery & Persona Mapping",
    category: "Qualitative User Interviews",
    metric: "94% Feature Activation Rate",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    link: "work/saas-workflow-discovery",
    accentColor: "from-amber-600 to-emerald-500"
  }
];

// Context definitions for the Research & Insights header block
const ProjectContext = {
  title: "Empirical Proofs",
  heading1: "Evidence-Led",
  heading2: "Product Discoveries",
  headerLineColor: "bg-emerald-600",
  gradientHeadingClasses: "from-emerald-500 via-teal-500 to-amber-500",
  description: "Explore comprehensive discovery case studies, behavioral telemetry teardowns, and actionable market analysis blueprints designed to back product decisions with true user data."
};

const devTools = [
  { 
    name: 'Mixpanel', 
    icon: <SiMixpanel size={26} className="text-[#A13EA6]" />, 
    role: "Event Telemetry Analysis" 
  },
  { 
    name: 'Hotjar', 
    icon: <SiHotjar size={26} className="text-[#FF7227]" />, 
    role: "Heatmaps & Session Recording" 
  },
  { 
    name: 'Qualtrics', 
    icon: <SiQualtrics size={24} className="text-[#00B4F1]" />, 
    role: "Enterprise Survey Engine" 
  },
  { 
    name: 'Miro', 
    icon: <SiMiro size={26} className="text-[#FFD02F]" />, 
    role: "Affinity Mapping & Synthesis" 
  },
  { 
    name: 'Google Analytics', 
    icon: <SiGoogleanalytics size={24} className="text-[#E37400]" />, 
    role: "Traffic & Drop-off Auditing" 
  },
  { 
    name: 'Figma', 
    icon: <Figma.Color size={24} />, 
    role: "Interactive Prototype Testing" 
  },
  { 
    name: 'Notion', 
    icon: <SiNotion size={26} className="text-[#000000] dark:text-white" />, 
    role: "Research Repository Wiki" 
  },
  { 
    name: 'Airtable', 
    icon: <SiAirtable size={24} className="text-[#186BF2]" />, 
    role: "Insight Matrix Database" 
  },
  { 
    name: 'Typeform', 
    icon: <SiTypeform size={26} className="text-[#000000] dark:text-white" />, 
    role: "User Feedback Ingestion" 
  },
  { 
    name: 'Zoom', 
    icon: <SiZoom size={26} className="text-[#2D8CFF]" />, 
    role: "Moderated Video Interviews" 
  },
  { 
    name: 'UserTesting', 
    icon: <FiEye size={24} className="text-[#10B981]" />, 
    role: "Unmoderated Remote Testing" 
  },
  { 
    name: 'Optimal Workshop', 
    icon: <FiPieChart size={24} className="text-[#F59E0B]" />, 
    role: "Information Architecture Audits" 
  }
];

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#060c14] dark:to-[#03060a] transition-colors duration-300 overflow-hidden">
      
      {/* 1. Fine Crosshair Structural Background Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#8080800b_1.5px,transparent_1.5px)] bg-size-[32px,32px] pointer-events-none" />
      
      {/* Deep Intellectual Emerald & Warm Amber Subtle Glow Arrays */}
      <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] bottom-10 w-112.5 h-112.5 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Brand Vector Target Crosshair Overlay Accent */}
      <div className="absolute left-12 top-1/3 bottom-1/3 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="0" x2="30" y2="300" stroke="#10b981" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="30" cy="150" r="16" stroke="#f59e0b" strokeWidth="1" />
          <circle cx="30" cy="150" r="4" fill="#10b981" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* LEFT COLUMN: EMPIRICAL EVIDENCE & INSIGHT MARKETING COPY PANEL */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/40 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <IoSearchSharp className="text-sm" />
            Empirical Market Synthesis
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
            Uncover hidden <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-amber-500">
              user truth and
            </span> <br />
            market behavior.
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
            We bypass surface guesswork. Our researchers deploy comprehensive qualitative frameworks, heuristic evaluations, and deep demographic field audits to map clear product opportunities.
          </p>

          {/* Call-To-Action Button Loops */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            
            <Button as={Link} to="/contact" btnBgColor="bg-linear-to-r from-emerald-500 to-teal-500" btnBgHover="bg-emerald-700" icon={<IoCompassOutline className="text-emerald-600" />}>Commission Study</Button>
            
            <Button as="a" href="#framework" btnBgColor="bg-white/90" btnTxtColor="text-slate-800 group-hover:text-white" btnBgHover="bg-linear-to-r from-emerald-500 via-teal-500 to-amber-500" iconBgColor="bg-teal-600 group-hover:bg-white" icon={<TbArrowDownRight className="text-white group-hover:text-emerald-600"/>} >
              Research Methodology </Button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: SIMULATED COGNITIVE RESEARCH ANALYSIS PLATFORM */}
        <motion.div
          className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          {/* Central Radial Ambient Light Spill Underlay */}
          <div className="absolute inset-0 m-auto w-64 h-64 bg-linear-to-tr from-emerald-500 to-amber-500 opacity-20 dark:opacity-10 blur-[90px] rounded-full pointer-events-none" />

          {/* Premium Glass Research Panel Shell */}
          <div className="relative w-full max-w-115 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
            
            {/* Context Module Controller Header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">qualitative_synthesis_map</span>
              </div>
              <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-200/20 dark:border-emerald-500/10">
                SAMPLE SIZE: N=480
              </div>
            </div>

            {/* Simulated Live User Observation Metrics */}
            <div className="space-y-4">
              
              {/* Row 1: Sentiment Density Trace Indicator */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Friction Correlation</p>
                  <p className="text-sm font-black text-amber-500 font-mono">High Recurrence</p>
                </div>
                <p className="text-[11px] font-light text-slate-500 dark:text-gray-400 leading-tight">
                  "Users consistently abort onboarding flow when manual business validation inputs exceed 4 entry fields."
                </p>
              </div>

              {/* Row 2: Secondary Asymmetric Split Data Points */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Heuristic Score</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white mt-1 font-mono">8.4<span className="text-xs text-slate-400 font-normal">/10</span></p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">Confidence Index</p>
                  <p className="text-xl font-black text-emerald-500 mt-1 font-mono">98.6%</p>
                </div>
              </div>

            </div>

            {/* Bottom Insight Validation Baseline Tag */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-[10px] font-mono text-slate-400 dark:text-gray-500 text-left">
              <IoEyeOutline className="text-amber-500 text-sm shrink-0 animate-pulse" />
              Primary Vector: Behavioral Flow Node Redundancy
            </div>

          </div>

          {/* Floating Observation Count Pill Counter Widget */}
          <motion.div 
            className="absolute -top-4 -left-6 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-3.5 rounded-xl max-w-47.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-xs">
              🔍
            </div>
            <div className="text-left">
              <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Thematic Patterns</h4>
              <p className="text-[11px] text-emerald-500 font-mono font-bold leading-none mt-0.5">14 Cleared</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>

    {/* Capabilities Matrix Section */}
    <section id="framework" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#03060a] transition-colors duration-300">
      
      {/* Background Architectural Blur Overlays */}
      <div className="absolute left-1/3 top-1/4 w-125 h-125 bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute right-12 bottom-12 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Typography Section Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left max-w-xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="block w-6 h-0.5 bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                DISCOVERY METHODS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              Evidence-Led <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-amber-500">
                Insights & Diagnostics
              </span>
            </h2>
          </div>
          
          <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
            We systematically strip away personal assumptions, deploying strict qualitative and quantitative tests to unearth real user truths.
          </p>
        </div>

        {/* Bento Grid Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {researchCapabilities.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.gridSpan} bg-slate-50/70 dark:bg-slate-900/10 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-xs text-left`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Icon Frame */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 shadow-xs">
                  {item.icon}
                </div>
              </div>

              {/* Text Frame */}
              <div className="mt-8 relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Monospace Method Tags */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap gap-2 relative z-10">
                {item.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="text-[11px] font-bold text-slate-500 dark:text-gray-400 px-3 py-1 rounded-md bg-white dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5 tracking-wide font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive Edge Indicator */}
              <div className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

            </motion.div>
          ))}
        </div>

        {/* Footer Metrics Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/10 dark:bg-slate-900/5 backdrop-blur-xs text-left">
          {researchHighlights.map((highlight, index) => (
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
              row1Data={devTools.slice(6, 12)}
              row2Data={devTools.slice(0, 6)}
              subText="Leveraging modern technology stacks and tools to build secure, speed-optimized, and scalable applications."
              title="Our Development Toolkit"
            />

      {/* CTA Section */}
      <GetStarted
        text="Ready to build something great together?"
        ctaText="Send a Message"
      />
  
    </>    
  );
};

export default Research;