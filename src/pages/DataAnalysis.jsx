import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Button from "../components/ui/Button";
import { TbArrowDownRight } from "react-icons/tb";
import Timeline from "../components/sections/Timeline";
import CTA from "../components/sections/Call-To-Action";
import Projects from "../components/sections/Projects";
import LogoMarquee from "../components/sections/LogoMarquee";
import { analyticsTools } from "../data/marquee";
import { analyticHighlights } from "../data/highlights";
import { analyticsCapabilities } from "../data/capabilities";
import {
  analyticsTimelineContext,
  analyticsTimelineSteps,
} from "../data/timeline";
import { analyticsProjects, analyticsProjectContext } from "../data/projects";
import {
  IoAnalyticsOutline,
  IoDiscOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

const DataAnalysis = () => {
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
          <svg
            className="w-full h-full"
            viewBox="0 0 100 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="10"
              y1="0"
              x2="10"
              y2="300"
              stroke="#10b981"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="250"
              stroke="#06b6d4"
              strokeWidth="1.5"
            />
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
              </span>{" "}
              <br />
              growth vectors.
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
              We architect end-to-end data pipelines, custom BI modeling
              structures, and real-time analysis platforms that transform
              complex database chaos into clear operational decisions.
            </p>

            {/* Call-To-Action Button Loops */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-auto sm:w-full pt-4">
              <Button
                as={Link}
                to="/contact"
                btnBgColor="bg-emerald-600"
                btnBgHover="bg-emerald-700"
                size="18"
                icon={<IoTrendingUpOutline className="text-emerald-600" />}
              >
                Request Data Audit
              </Button>

              <Button
                as="a"
                href="#stack"
                btnBgColor="bg-white"
                btnBgHover="bg-emerald-700"
                btnTxtColor="text-emerald-600 group-hover:text-white"
                size="18"
                iconBgColor="bg-emerald-600 group-hover:bg-white"
                icon={
                  <TbArrowDownRight className="text-white group-hover:text-emerald-600" />
                }
              >
                Our Analysis Stack
              </Button>
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
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">
                    live_stream_matrix
                  </span>
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
                    <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                      Algorithmic Match Rate
                    </p>
                    <p className="text-sm font-black text-emerald-500 font-mono">
                      +34.8%
                    </p>
                  </div>
                  {/* SVG Analytical Wave line drawing path */}
                  <div className="h-12 w-full pt-2">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 300 40"
                      preserveAspectRatio="none"
                    >
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
                        <linearGradient
                          id="gradient-cyan-flow"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#10b981" />
                          <stop
                            offset="100%"
                            stopColor="#10b981"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Row 2: Split Tracking Progress Panels */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
                      Queries Parsed
                    </p>
                    <p className="text-xl font-black text-slate-900 dark:text-white mt-1 font-mono">
                      1.42M
                      <span className="text-xs text-slate-400 font-light">
                        /s
                      </span>
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
                      Anomaly Threshold
                    </p>
                    <p className="text-xl font-black text-cyan-500 mt-1 font-mono">
                      0.002%
                    </p>
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
                <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Data Latency
                </h4>
                <p className="text-[11px] text-emerald-500 font-mono font-bold leading-none mt-0.5">
                  &lt; 14ms
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Matrix Section */}
      <section
        id="stack"
        className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#080f1e] transition-colors duration-300"
      >
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
              We extract critical core performance indicators from data noise,
              engineering highly robust analytical channels that power
              programmatic operations.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {analyticsCapabilities.map((item, index) => {
              const { Icon, iconColor, title, description } = item;
              return (
                <motion.div
                  key={index}
                  className={`${item.gridSpan} bg-slate-50/70 dark:bg-slate-900/20 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-xs text-left`}
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
                  <div className="bg-clip flex items-start justify-between relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white transition-colors duration-300 shadow-xs">
                      <Icon className={`group-hover:${iconColor}`} size={24} />
                    </div>
                  </div>

                  {/* Central Information Stack */}
                  <div className="mt-8 relative z-10 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
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
                        className="text-[11px] font-bold text-slate-500 dark:text-gray-400 px-3 py-1 rounded-md bg-white dark:bg-slate-950/60 border border-slate-200/60 dark:border-white/5 tracking-wide font-mono"
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
            {analyticHighlights.map((highlight, index) => {
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
        timelineSteps={analyticsTimelineSteps}
        timelineContext={analyticsTimelineContext}
      />

      {/* Project Section */}
      <Projects
        analyticsProjectContext={analyticsProjectContext}
        projects={analyticsProjects}
      />

      {/* Tool Stack */}
      <LogoMarquee
        row1Data={analyticsTools}
        row2Data={analyticsTools}
        subText="Leveraging modern data engineering pipelines and tools to build secure, high-performance, and scalable analytical models."
        title="Our Analytics Toolkit"
      />

      {/* CTA Section */}
      <CTA
        text="Ready to turn your raw data into actionable business growth?"
        ctaText="Send a Message"
      />
    </>
  );
};

export default DataAnalysis;
