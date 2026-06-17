import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Button from "../components/Button";
import Projects from "../components/Projects";
import LogoMarquee from "../components/LogoMarquee";
import GetStarted from "../components/GetStarted";
import Timeline from "../components/Timeline"
import { IoArrowForwardOutline, IoSearchOutline, IoLayersOutline, IoColorPaletteOutline, IoPhonePortraitOutline, IoAccessibilityOutline, IoGitBranchOutline, IoEyeOutline, IoGitCommitOutline, IoLaptopOutline, IoRocketOutline } from "react-icons/io5";
import {
  SiFigma, SiMiro, SiNotion, SiFramer, SiMaze, SiMural, SiInvision } from "react-icons/si";
  import { FaPalette, FaSketch } from "react-icons/fa";
import { BiLogoAdobe } from "react-icons/bi";
import { TbBrandAdobeXd } from "react-icons/tb";

// Structured data for Marquee Tool Stack
const tools = [
   { name: 'Figma', icon: <SiFigma size={26} className="text-[#F24E1E]" />, role: "Core Design & Prototyping" },
  { name: 'Miro', icon: <SiMiro size={26} className="text-[#FFD02F]" />, role: "Research & Ideation" },
  { name: 'Notion', icon: <SiNotion size={26} className="text-[#000000] dark:text-white" />, role: "Documentation" },
  { name: 'Framer', icon: <SiFramer size={24} className="text-[#0055FF] dark:text-white" />, role: "Interactive Design" },
  { name: 'Adobe XD', icon: <TbBrandAdobeXd size={26} className="text-[#FF61F6]" />, role: "Vector Design" },
   { name: 'Sketch', icon: <FaSketch size={26} className="text-[#FDB300]" />, role: "UI Design" },
  { name: 'Maze', icon: <SiMaze size={24} className="text-[#7B61FF]" />, role: "User Testing" },
  { name: 'Mural', icon: <SiMural size={26} className="text-[#E61F25]" />, role: "Brainstorming" },
  { name: 'InVision', icon: <SiInvision size={26} className="text-[#FF3366]" />, role: "Legacy Prototyping" }
]

// structured data for timeline section
const timelineSteps = [
  {
    phase: "01",
    title: "Discovery & User Research",
    description:
      "We audit your existing data, survey users, map competitor gaps, and run stakeholder workshops to clarify the product strategy before pushing pixels.",
    icon: <IoEyeOutline className="text-orange-500" size={22} />,
    accent: "border-orange-500/20 text-orange-500 bg-orange-500/5",
    details: ["User Surveys & Audits", "Competitor Gap Mapping", "Stakeholder Workshops"]
  },
  {
    phase: "02",
    title: "Information Architecture & Wireframes",
    description:
      "We establish content hierarchies, interaction layouts, and structural skeletal wireframes to perfect user journeys without distraction.",
    icon: <IoGitCommitOutline className="text-blue-500" size={22} />,
    accent: "border-blue-500/20 text-blue-500 bg-blue-500/5",
    details: ["Content Hierarchy Maps", "Interaction Layouts", "Skeletal Wireframes"]
  },
  {
    phase: "03",
    title: "Interactive Prototyping",
    description:
      "Turning logic into stunning high-fidelity visual UI designs. We integrate rich micro-interactions, layout components, and motion workflows to mimic the exact live code experience.",
    icon: <IoLaptopOutline className="text-cyan-500" size={22} />,
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    details: ["High-Fidelity UI Design", "Micro-Interaction Rules", "Motion Workflow Demos"]
  },
  {
    phase: "04",
    title: "Developer Handoff & Specifications",
    description:
      "We bundle complete, highly structured production design systems inside Figma, complete with dynamic tokens, responsive auto-layouts, and component specs for clean asset handoffs.",
    icon: <IoRocketOutline className="text-emerald-500" size={22} />,
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    details: ["Production Design Systems", "Dynamic Token Bundles", "Auto-Layout Component Specs"]
  },
];

const timelineContext = {
  title: "Our Design Process",
  heading1: "From concept to",
  heading2: "production handoff", 
  description: "We follow a rigorous, agile roadmap engineered to protect speed-to-market loops while keeping human-design principles center.",
  color: "orange",
  gradientHeadingClasses: "from-orange-500 to-amber-500",
}

// Structured data for features section
const features = [
  {
    icon: <IoSearchOutline className="text-orange-500" size={24} />,
    title: "User Research & Discovery",
    description:
      "We dive deep into user behavior, target demographics, and competitor analysis to align your product with real market needs.",
    badge: "Strategy",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: <IoLayersOutline className="text-blue-500" size={24} />,
    title: "Wireframing & Architecture",
    description:
      "Mapping out low-fidelity structural blueprints to define clean user journeys and content priority blueprints.",
    badge: "Structure",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <IoPhonePortraitOutline className="text-cyan-500" size={24} />,
    title: "High-Fidelity UI Design",
    description:
      "Transforming layouts into premium, pixel-perfect interfaces designed uniquely around your core visual brand identity.",
    badge: "Visuals",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <IoColorPaletteOutline className="text-amber-500" size={24} />,
    title: "Scalable Design Systems",
    description:
      "Building production-ready component libraries in Figma, complete with reusable design tokens, typography scales, and UI assets for your development ecosystem.",
    badge: "Systems",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: <IoAccessibilityOutline className="text-purple-500" size={24} />,
    title: "Accessibility Testing (WCAG)",
    description:
      "Optimizing interfaces for absolute inclusivity, ensuring contrast, screen-reader compatibility, and focus states clear rigorous compliance audits.",
    badge: "Compliance",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <IoGitBranchOutline className="text-emerald-500" size={24} />,
    title: "Interactive Prototyping",
    description:
      "Connecting complex micro-interactions and motion flows to test click-through parameters before shipping any live code lines.",
    badge: "Testing",
    className: "md:col-span-1 lg:col-span-1",
  },
];

// Structured data for Project section
const projects = [
  {
    title: "Fintech Dashboard Redesign",
    category: "Web Application",
    metric: "-40% Onboarding Drop-off",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Replace with your project asset path
    link: "/work/fintech-dashboard",
    accentColor: "from-blue-600 to-cyan-500"
  },
  {
    title: "E-Commerce Mobile Workspace",
    category: "iOS & Android App",
    metric: "+125% Conversion Boost",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", // Replace with your project asset path
    link: "/work/ecommerce-app",
    accentColor: "from-orange-500 to-amber-500"
  },
  {
    title: "SaaS Analytics Platform UI",
    category: "Complex Web Portal",
    metric: "2.4x User Engagement",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // Replace with your project asset path
    link: "/work/saas-analytics",
    accentColor: "from-purple-600 to-indigo-500"
  }
];

const ProjectContext = {
  title: "Case studies",
  heading1: "Selected",
  heading2: "Design Proof", 
  description: "Real products built for real users, proving that human-centric experiences catalyze massive business scale.",
  headerLineColor: "bg-orange-600",
  gradientHeadingClasses: "from-orange-600 to-amber-500",
}

// Stagger orchestration for the features section cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Individual animations for each card in the features section
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stagger orchestration for the typography block of the hero section
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Individual animations for each text element in the hero section
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const Design = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#050816] transition-colors duration-300">
        {/* BACKGROUND ACCENTS: GLOW SPHERES */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* TEXT CONTENT COLUMN */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6 text-left items-start"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200/40 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest"
            >
              <FaPalette className="animate-spin-slow text-sm animate-pulse" />
              SERVICES / UI-UX DESIGN
            </motion.div>

            {/* Core Value Proposition Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[1.05]"
            >
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                Experiences
              </span>{" "}
              That Convert
            </motion.h1>

            {/* Paragraph Description */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-xl font-light"
            >
              We align stunning visuals with deep human behavioral insights.
              From wireframes to premium high-fidelity prototypes, we build
              custom digital products that drop churn rates and make users fall
              in love.
            </motion.p>

            {/* Quick Metrics Ticker */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-6 py-2 border-t border-b border-slate-200 dark:border-slate-800/80 w-full max-w-md"
            >
              <div>
                <p className="text-2xl font-black text-blue-600 dark:text-cyan-400">
                  94%
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-500 font-medium tracking-wide">
                  First Impression Retention
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-orange-500">2.5x</p>
                <p className="text-xs text-slate-500 dark:text-gray-500 font-medium tracking-wide">
                  Average Conversion Boost
                </p>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div variants={fadeInUp} className="pt-2">
              <Button
                as={Link}
                to="/contact"
                icon={
                  <IoArrowForwardOutline className="text-blue-600" size={18} />
                }
                btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500 shadow-md shadow-blue-700/10"
                btnBgHover="bg-blue-800"
                size="20"
              >
                Start a Project
              </Button>
            </motion.div>
          </motion.div>

          {/* INTERACTIVE WORKSPACE GRAPHIC COLUMN */}
          <motion.div
            className="lg:col-span-5 relative w-full flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Main Visual: Glassmorphic UI Simulator Box */}
            <motion.div
              className="w-full max-w-105 aspect-square rounded-3xl bg-white/40 dark:bg-slate-900/30 border border-slate-200/80 dark:border-white/5 backdrop-blur-md p-6 relative shadow-2xl flex flex-col justify-between"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Terminal Window Mac Button */}
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                <span className="w-3 h-3 rounded-full bg-green-400 block" />
              </div>

              {/* Wireframe Skeletal Content Box */}
              <div className="space-y-4 my-auto w-full">
                <div className="h-6 w-2/3 bg-slate-300 dark:bg-slate-800 rounded-md animate-pulse" />
                <div className="h-24 w-full border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-600 text-xs font-mono">
                  [ Hero Workspace Component ]
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-orange-500 rounded-full" />
                  <div className="h-8 w-8 bg-blue-100 dark:bg-blue-950 rounded-full" />
                </div>
              </div>

              {/* Micro Floating Tool Cards (Parallax Layout Elements) */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-mono text-xs font-bold">
                  Px
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Spacing
                  </p>
                  <p className="text-xs font-black dark:text-white">
                    Auto Layout
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-6 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Active Palette
                  </p>
                  <p className="text-xs font-black dark:text-white">#f16522</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services / Features */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#0d1527] transition-colors duration-300">
        {/* Decorative Grid Lines Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] pointer-events-none" />

        {/* Dynamic Background Glow */}
        <div className="absolute right-[-10%] top-1/3 w-96 h-96 bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-start text-left max-w-2xl mb-16 space-y-4">
            <div className="flex items-center gap-2">
              <span className="block w-6 h-0.5 bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                OUR CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              How we shape <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                digital products
              </span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg leading-relaxed">
              From strategic discovery to component architecture, we cover every
              angle needed to build robust, modern interfaces.
            </p>
          </div>

          {/* Features Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${feature.className} p-8 rounded-2xl border bg-slate-50/50 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 backdrop-blur-xs flex flex-col justify-between group hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none transition-shadow duration-300`}
              >
                <div>
                  {/* Icon Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-xs border border-slate-200/60 dark:border-white/10 flex items-center justify-center transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-gray-400">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Decorative Arrow */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-white/5 flex justify-end">
                  <span className="text-slate-400 group-hover:text-orange-500 transition-colors duration-300 text-sm font-bold">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Timeline Process Section */}
      <Timeline timelineSteps={timelineSteps} timelineContext={timelineContext}  />

      {/* Project Section */}
      <Projects projects={projects} ProjectContext={ProjectContext} />

      {/* Tool Stack */}
      <LogoMarquee
        row1Data={tools}
        row2Data={tools}
        subText="Utilizing a suite of advanced design software, we craft visually captivating and highly functional user experiences."
        title="Our Integrated Design Ecosystem"
      />

      {/* CTA Section */}
      <GetStarted
        text="Have a Vision? Let's design it together"
        ctaText="Let's Chat"
      />
    </>
  );
};

export default Design;
