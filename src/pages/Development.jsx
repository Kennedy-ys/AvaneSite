import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Button from "../components/ui/Button";
import CTA from "../components/sections/Call-To-Action";
import Timeline from "../components/sections/Timeline";
import Projects from "../components/sections/Projects";
import LogoMarquee from "../components/sections/LogoMarquee";
import { devTools } from "../data/marquee";
import { devCapabilities } from "../data/capabilities";
import { devHighlights } from "../data/highlights";
import { devTimelineSteps, devTimelineContext } from "../data/timeline";
import { devProjectContext, devProjects } from "../data/projects";
import { FaCode } from "react-icons/fa6";

const Development = () => {
  // For Interactive Button Calls-to-Action Group Section
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#0d1527] dark:to-[#0b1220] transition-colors duration-300 overflow-hidden">
        {/* 1. Background Structural Matrix Texture & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] pointer-events-none" />
        <div className="absolute left-[-10%] top-10 w-112.5 h-112.5 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute right-[-5%] bottom-10 w-125 h-125 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

        {/* Embedded Brand Curved Vector Line */}
        <div className="absolute right-4 top-1/4 bottom-1/4 w-24 hidden xl:flex items-center opacity-15 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M120,0 C40,100 30,160 30,200 C30,240 40,300 120,400" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
          {/* LEFT COLUMN: HERO MARKETING COPY PANEL */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 border border-blue-200/40 dark:border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <FaCode className="text-sm animate-pulse" />
              SERVICES / DEVELOPMENT
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
              We engineer <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-500 to-emerald-500">
                robust software
              </span>{" "}
              <br />& web applications.
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Bridging complex backend system pipelines with highly interactive,
              pixel-perfect frontend portals. We write clean, lightning-fast
              code custom-tailored to accelerate enterprise operations.
            </p>

            {/* Interactive Button Calls-to-Action Group */}
            <motion.div variants={fadeInUp} className="pt-2 w-auto sm:w-full">
              <Button
                as={Link}
                to="/contact"
                icon={
                  <IoArrowForwardOutline
                    className="text-orange-600"
                    size={18}
                  />
                }
                btnBgColor="bg-linear-to-r from-orange-500 to-amber-500 shadow-md shadow-blue-700/10"
                btnBgHover="bg-orange-500"
                size="18"
              >
                Start a Project
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: GRAPHIC ABSTRACT ENGINE PREVIEW CONTAINER */}
          <motion.div
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* Glowing Ambient Backdrop Circle */}
            <div className="absolute inset-0 m-auto w-72 h-72 bg-linear-to-tr from-blue-500 to-cyan-500 opacity-20 dark:opacity-10 blur-[80px] rounded-full pointer-events-none" />

            {/* Abstract Glassmorphic Terminal Card */}
            <div className="relative w-full max-w-105 bg-white/90 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-6 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Terminal Window Mac Buttons */}
              <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-slate-700/60 dark:border-white/5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
                <span className="text-[10px] text-slate-800 dark:text-gray-500 uppercase tracking-widest font-mono ml-3">
                  dev_environment.sh
                </span>
              </div>

              {/* Simulated Architecture Syntax Blocks */}
              <div className="space-y-4 font-mono text-xs text-left select-none">
                <div>
                  <p className="text-cyan-400">
                    <span className="text-purple-400">import</span>{" "}
                    {"{ cloudCluster, apiEngine }"}{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-emerald-400">
                      "avane-core-architecture"
                    </span>
                    ;
                  </p>
                </div>

                <div className="space-y-1.5 pl-4 border-l-2 border-slate-800">
                  <p className="text-slate-400">
                    // Constructing highly scalable ecosystem
                  </p>
                  <p className="text-slate-600 dark:text-slate-200">
                    <span className="text-rose-600 dark:text-rose-500">
                      const
                    </span>{" "}
                    enterprisePortal ={" "}
                    <span className="text-amber-500">new</span> apiEngine({"{"}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 pl-4">
                    frontendEngine:{" "}
                    <span className="text-emerald-400">"Next.js SPA"</span>,
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 pl-4">
                    backendDatabase:{" "}
                    <span className="text-emerald-400">
                      "Distributed PostgreSQL"
                    </span>
                    ,
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 pl-4">
                    cachingLayer:{" "}
                    <span className="text-emerald-400">
                      "Redis Matrix Cluster"
                    </span>
                    ,
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 pl-4">
                    loadBalancer: <span className="text-blue-400">true</span>,
                  </p>
                  <p className="text-slate-500 dark:text-slate-200">{"});"}</p>
                </div>

                <div className="pt-2 pl-5">
                  <p className="text-emerald-400 flex items-center gap-2">
                    <span className="animate-pulse block w-2 h-2 rounded-full bg-emerald-500" />
                    System status: STABLE // Ready for production deployment
                  </p>
                </div>
              </div>

              {/* Accent Floating Mini Badge Element */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Secondary Layer: Micro Decorative Floating Widget box */}
            <motion.div
              className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-4 rounded-xl max-w-50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                ⚡
              </div>
              <div className="text-left">
                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Metrics Scaled
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 font-light leading-none mt-0.5">
                  99.9% uptime uptime
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Matrix Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#0d1527] transition-colors duration-300">
        {/* Decorative Ambient Background Rings */}
        <div className="absolute right-1/4 top-1/3 w-125 h-125 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-96 h-96 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Typography Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col items-start text-left max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="block w-6 h-0.5 bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
                  CAPABILITIES MATRIX
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                Full-Stack <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                  Engineering Power
                </span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
              We eliminate the artificial boundary between web presentation and
              complex data software. Here is how we build modern digital
              platforms.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {devCapabilities.map((item, index) => {
              const { Icon, iconColor, title, description } = item;
              return (
                <motion.div
                  key={index}
                  className={`${item.gridSpan} bg-slate-50/70 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-xs text-left`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Top Row: Floating Utility Accent Glow Behind Icon */}
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 shadow-xs">
                      <Icon className={iconColor} size={24} />
                    </div>
                  </div>

                  {/* Central Information Stack */}
                  <div className="mt-8 relative z-10 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {title}
                    </h3>
                    <p className="text-sm font-light text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                      {description}
                    </p>
                  </div>

                  {/* Bottom Technology Pills Mapping */}
                  <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap gap-2 relative z-10">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs font-medium text-slate-500 dark:text-gray-400 px-3 py-1 rounded-md bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Internal Gradient Underlay Line that appears on block hover */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Global Assurance Banner Below Bento Rows */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/20 dark:bg-slate-900/5 backdrop-blur-xs text-left">
            {devHighlights.map((highlight, index) => {
              const { Icon, iconColor, text } = highlight;
              return (
                <div key={index} className="flex items-center gap-3 max-w-md">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <Icon className={iconColor} />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-gray-400">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Timeline Process Section */}
      <Timeline
        timelineSteps={devTimelineSteps}
        timelineContext={devTimelineContext}
      />

      {/* Project Section */}
      <Projects ProjectContext={devProjectContext} projects={devProjects} />

      {/* Tool Stack */}
      <LogoMarquee
        row1Data={devTools.slice(7, 15)}
        row2Data={devTools.slice(0, 6)}
        subText="Leveraging modern technology stacks and tools to build secure, speed-optimized, and scalable applications."
        title="Our Development Toolkit"
      />

      {/* CTA Section */}
      <CTA
        text="Ready to build something great together?"
        ctaText="Send a Message"
      />
    </>
  );
};

export default Development;
