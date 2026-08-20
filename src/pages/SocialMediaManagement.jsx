import React from "react";
import { motion } from "motion/react";
import { IoShareSocialOutline, IoTrendingUpOutline, IoSparklesOutline, IoMegaphoneOutline } from "react-icons/io5";
import Timeline from "../components/sections/Timeline";
import Projects from "../components/sections/Projects";
import LogoMarquee from "../components/sections/LogoMarquee";
import CTA from "../components/sections/Call-To-Action";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { smManagementTools } from "../data/marquee"
import { smProjectContext, smProjects } from "../data/projects"
import { smTimelineSteps, smTimelineContext } from "../data/timeline"
import { smSocialCapabilities } from "../data/capabilities"
import { smSocialHighlights } from "../data/highlights"

const SocialMediaManagement = () => {
  
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#0c0503] dark:to-[#060201] transition-colors duration-300 overflow-hidden">
        {/* 1. Structural Distribution Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

        {/* Premium Sunset Coral & Electric Indigo Dynamic Glow Arrays */}
        <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-10 w-112.5 h-112.5 bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none" />

        {/* Social Funnel Overlay Alignment Guides Accent */}
        <div className="absolute left-12 top-1/4 bottom-1/4 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10,20 L 90,20 L 70,120 L 30,120 Z"
              stroke="#ff6b6b"
              strokeWidth="1"
              fill="none"
            />
            <line
              x1="50"
              y1="120"
              x2="50"
              y2="280"
              stroke="#6366f1"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <circle cx="50" cy="200" r="20" stroke="#ff6b6b" strokeWidth="1" />
            <circle
              cx="50"
              cy="200"
              r="35"
              stroke="#6366f1"
              strokeWidth="1"
              strokeDasharray="1 3"
            />
            <path
              d="M 30,300 L 70,300 L 50,350 Z"
              stroke="#ff6b6b"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
          {/* LEFT COLUMN: BRAND AMPLIFICATION COPY PANEL */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200/40 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest font-mono">
              <IoShareSocialOutline className="text-sm" />
              Multichannel Velocity Framework
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
              Own the feed. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-rose-500 to-indigo-500">
                Scale audience
              </span>{" "}
              <br />
              market attention.
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
              We turn silent profiles into market-dominating brand authorities.
              We manage high-performance content pipelines, optimize platform
              algorithms, and convert cold impressions into dedicated brand
              advocates.
            </p>

            {/* Call-To-Action Button Loops */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-auto sm:w-full pt-4">
              <Button
                as={Link}
                to="/contact"
                btnBgColor="bg-linear-to-r from-orange-500 to-rose-500"
                btnBgHover="bg-linear-to-r from-rose-500 to-orange-500" size="18"
                icon={<IoSparklesOutline className="text-orange-600" />}
              >
                Scale Your Distribution
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SIMULATED ENGAGEMENT TELEMETRY WORKSPACE */}
          <motion.div
            className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* Radial Center Light Source */}
            <div className="absolute inset-0 m-auto w-64 h-64 bg-linear-to-tr from-orange-500 to-indigo-600 opacity-20 dark:opacity-10 blur-[90px] rounded-full pointer-events-none" />

            {/* Premium Glass Social Workspace Shell */}
            <div className="relative w-full max-w-125 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Control Strip */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">
                    distribution_cluster_04
                  </span>
                </div>
                <div className="text-[10px] font-mono text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded border border-orange-200/20 dark:border-orange-500/10">
                  VELOCITY: +244% ALPHA
                </div>
              </div>

              {/* Simulated Live Distribution Architecture */}
              <div className="space-y-4">
                {/* Box 1: Core Performance Stream */}
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left relative overflow-hidden group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
                        Aggregated Feed Metric
                      </span>
                      <h4 className="text-xl font-black text-slate-800 dark:text-white mt-2 font-mono tracking-tight">
                        4.8M Impressions
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-bold">
                      +44.2%
                    </span>
                  </div>
                  {/* Visual conversion waveform layout */}
                  <div className="mt-4 flex gap-1 items-end h-8 opacity-60">
                    <span className="w-full h-3 bg-orange-400 dark:bg-orange-500 rounded-xs" />
                    <span className="w-full h-5 bg-rose-400 dark:bg-rose-500 rounded-xs" />
                    <span className="w-full h-4 bg-fuchsia-400 dark:bg-fuchsia-500 rounded-xs" />
                    <span className="w-full h-7 bg-indigo-500 dark:bg-indigo-600 rounded-xs animate-pulse" />
                    <span className="w-full h-6 bg-purple-400 dark:bg-purple-500 rounded-xs" />
                  </div>
                </div>

                {/* Box 2: Platforms Core Distribution Matrix Array */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <p className="text-[9px] font-mono font-bold text-indigo-500 uppercase leading-none">
                      B2B Authority
                    </p>
                    <p className="text-sm font-black text-slate-700 dark:text-white mt-1.5">
                      LinkedIn Enterprise
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 mt-1">
                      CTR: 4.82% Peak
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <p className="text-[9px] font-mono font-bold text-orange-500 uppercase leading-none">
                      Shortform Alg
                    </p>
                    <p className="text-sm font-black text-slate-700 dark:text-white mt-1.5">
                      TikTok & Reels
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 mt-1">
                      Retention: 72% Hold
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Workspace Anchor Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-gray-500 text-left">
                <div className="flex items-center gap-1.5">
                  <IoMegaphoneOutline className="text-orange-500 text-sm shrink-0" />
                  Active Queue: 14 Optimized Deployments
                </div>
                <span className="flex items-center gap-1">
                  <IoTrendingUpOutline className="text-emerald-500" /> ROI
                  Verified
                </span>
              </div>
            </div>

            {/* Floating Conversion Velocity Asset */}
            <motion.div
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-3.5 rounded-xl max-w-45"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 text-xs">
                🔥
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Inbound Loop
                </h4>
                <p className="text-[11px] text-orange-500 font-mono font-bold leading-none mt-0.5">
                  Lead Capture ON
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#060201] transition-colors duration-300">
        {/* Background Strategic Soft Grid Blurs */}
        <div className="absolute left-1/4 top-1/3 w-125 h-125 bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col items-start text-left max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="block w-6 h-0.5 bg-orange-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
                  GROWTH_POSTURE_CONTROLS
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                Algorithmic Scale <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-rose-500 to-indigo-500">
                  & Attention Domination
                </span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
              We eliminate uncalculated publishing schedules, deploying clear
              content asset pipelines engineered to build brand value and
              attract customers.
            </p>
          </div>

          {/* Asymmetric Bento Grid System */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {smSocialCapabilities.map((item, index) => {
              const { Icon, title, description } = item;
              return (
              <motion.div
                key={index}
                className={`${item.gridSpan} bg-slate-50/70 dark:bg-slate-900/10 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-xs text-left`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Icon Container Layout */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 shadow-xs">
                    <Icon size={24} />y
                  </div>
                </div>

                {/* Central Information Typography Stack */}
                <div className="mt-8 relative z-10 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    {title}
                  </h3>
                  <p className="text-sm font-light text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                    {description}
                  </p>
                </div>

                {/* Monospace Architectural Technology Pills */}
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

                {/* Edge Accent Indicator */}
                <div
                  className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            )})}
          </div>

          {/* Footer Integrity Indicators Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/10 dark:bg-slate-900/5 backdrop-blur-xs text-left">
            {smSocialHighlights.map((highlight, index) => {
              const { Icon, iconColor, text } = highlight;
              return (
              <div key={index} className="flex items-center gap-3 max-w-xl">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Icon className={iconColor} />
                </div>
                <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-gray-400">
                  {text}
                </p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Design Timeline Process Section */}
      <Timeline
        timelineSteps={smTimelineSteps}
        timelineContext={smTimelineContext}
      />

      {/* Project Section */}
      <Projects ProjectContext={smProjectContext} projects={smProjects} />

      {/* Tool Stack */}
      <LogoMarquee
        row1Data={smManagementTools.slice(6, 12)}
        row2Data={smManagementTools.slice(0, 6)}
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

export default SocialMediaManagement;
