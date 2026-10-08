import React from "react";
import { motion } from "motion/react";
import {
  IoColorPaletteOutline,
  IoLayersOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import Timeline from "../components/sections/Timeline";
import Projects from "../components/sections/Projects";
import LogoMarquee from "../components/sections/LogoMarquee";
import CTA from "../components/sections/Call-To-Action";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { designCapabilities } from "../data/capabilities";
import { designHighlights } from "../data/highlights";
import { graphicsDesignTools } from "../data/marquee";
import { gdTimelineSteps, gdTimelineContext } from "../data/timeline";
import { gdProjects, gdProjectContext } from "../data/projects";

const GraphicsDesign = () => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pb-20 pt-32 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#0b0610] dark:to-[#050308] transition-colors duration-300 overflow-hidden">
        {/* 1. Geometric Grid Canvas Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

        {/* Premium Rose & Deep Violet Creative Glow Arrays */}
        <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-rose-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-10 w-112.5 h-112.5 bg-violet-600/5 blur-[130px] rounded-full pointer-events-none" />

        {/* Vector Layout Alignment Guides Accent */}
        <div className="absolute left-12 top-1/4 bottom-1/4 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="50"
              width="60"
              height="60"
              stroke="#f43f5e"
              strokeWidth="1"
            />
            <line
              x1="40"
              y1="0"
              x2="40"
              y2="400"
              stroke="#8b5cf6"
              strokeWidth="1"
              strokeDasharray="1 3"
            />
            <circle cx="40" cy="200" r="25" stroke="#f43f5e" strokeWidth="1" />
            <path
              d="M 10,320 L 70,320 L 40,370 Z"
              stroke="#8b5cf6"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
          {/* LEFT COLUMN: VISUAL BRAND NARRATIVE PANEL */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/20 border border-rose-200/40 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-widest">
              <IoColorPaletteOutline className="text-sm" />
              High-Fidelity Brand Systems
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
              Shape identity. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-fuchsia-500 to-violet-500">
                Command market
              </span>{" "}
              <br />
              visual authority.
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
              We build cohesive, asset-ready graphic ecosystems. From
              razor-sharp brand identity guidelines to premium corporate assets,
              we marry deliberate layout design with unforgettable visual
              narratives.
            </p>

            {/* Call-To-Action Button Loops */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-auto sm:w-full pt-4">
              <Button
                as={Link}
                to="/contact"
                btnBgColor="bg-linear-to-r from-rose-500 to-violet-500"
                btnBgHover="bg-fuchsia-500"
                icon={<IoSparklesOutline className="text-rose-600" />}
              >
                Initiate Design Loop
              </Button>

              <Button
                as="a"
                href="#projects"
                btnBgColor="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs"
                btnBgHover="hover:bg-white/50 dark:hover:bg-slate-900/50"
                btnTxtColor="text-slate-700 dark:text-white"
              >
                View Design System
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SIMULATED DYNAMIC ARTWORK WORKSPACE */}
          <motion.div
            className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* Radial Center Light Source */}
            <div className="absolute inset-0 m-auto w-64 h-64 bg-linear-to-tr from-rose-500 to-violet-600 opacity-20 dark:opacity-10 blur-[90px] rounded-full pointer-events-none" />

            {/* Premium Glass Design Workspace Shell */}
            <div className="relative w-full max-w-115 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Control Strip */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">
                    vector_artboard_01
                  </span>
                </div>
                <div className="text-[10px] font-mono text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded border border-rose-200/20 dark:border-rose-500/10">
                  SCALE: vector_infinite
                </div>
              </div>

              {/* Simulated Live Composition Architecture */}
              <div className="space-y-4">
                {/* Box 1: Typography Scale Framework Preview */}
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left relative overflow-hidden group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded uppercase">
                        Core Typeface Hierarchy
                      </span>
                      <h4 className="text-xl font-black text-slate-800 dark:text-white mt-2 font-serif tracking-tight">
                        Display Serif Bold
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">
                      64pt
                    </span>
                  </div>
                  {/* Visual alignment line indicators */}
                  <div className="mt-4 flex gap-1 items-center opacity-40">
                    <span className="w-full h-px bg-dashed bg-rose-500" />
                    <span className="w-2 h-2 shrink-0 rounded-full border border-rose-500" />
                  </div>
                </div>

                {/* Box 2: Split Palette Matrix Array */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <div className="h-8 rounded-lg bg-linear-to-br from-rose-500 to-rose-600 mb-2 shadow-xs" />
                    <p className="text-[9px] font-mono font-bold text-slate-700 dark:text-white uppercase leading-none">
                      #F43F5E
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 mt-1">
                      Brand Primary
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <div className="h-8 rounded-lg bg-linear-to-br from-fuchsia-500 to-fuchsia-600 mb-2 shadow-xs" />
                    <p className="text-[9px] font-mono font-bold text-slate-700 dark:text-white uppercase leading-none">
                      #D946EF
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 mt-1">
                      Accent High
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                    <div className="h-8 rounded-lg bg-linear-to-br from-violet-600 to-violet-700 mb-2 shadow-xs" />
                    <p className="text-[9px] font-mono font-bold text-slate-700 dark:text-white uppercase leading-none">
                      #7C3AED
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 mt-1">
                      Deep Structural
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Workspace Anchor Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-gray-500 text-left">
                <div className="flex items-center gap-1.5">
                  <IoLayersOutline className="text-rose-500 text-sm shrink-0" />
                  Active Composition Layers: 18 Vector Arrays
                </div>
                <span>DPI: 300 Print Ready</span>
              </div>
            </div>

            {/* Floating Aspect Box Asset */}
            <motion.div
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-3.5 rounded-xl max-w-45"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 text-xs">
                📐
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Aspect Lock
                </h4>
                <p className="text-[11px] text-rose-500 font-mono font-bold leading-none mt-0.5">
                  16:9 / 1:1 Gold
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cabalities Matrix */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#050308] transition-colors duration-300">
        {/* Background Creative Soft Radial Shadows */}
        <div className="absolute left-1/4 top-1/4 w-125 h-125 bg-rose-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-violet-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Typography Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col items-start text-left max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="block w-6 h-0.5 bg-rose-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
                  AESTHETIC CAPABILITIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                Artistic Precision <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-fuchsia-500 to-violet-500">
                  & Identity Design
                </span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
              We merge deliberate spacing math with elegant visual style to
              build memorable, highly unified corporate asset ecosystems.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {designCapabilities.map((item, index) => {
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
                  {/* Top Row: Icon Container */}
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors duration-300 shadow-xs">
                      <Icon size={24} />
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

                  {/* Bottom Process / Layout Pills */}
                  <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap gap-2 relative z-10">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs font-bold text-slate-500 dark:text-gray-400 px-3 py-1 rounded-md bg-white dark:bg-slate-950/40 border border-slate-200/60 dark:border-white/5 tracking-wide font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Gradient Accent Bottom Border Hover Effect */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Quality Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/10 dark:bg-slate-900/5 backdrop-blur-xs text-left">
            {designHighlights.map((highlight, index) => {
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

      {/* Roadmap Timeline Section */}
      <Timeline
        timelineContext={gdTimelineContext}
        timelineSteps={gdTimelineSteps}
      />

      {/* Project Section */}
      <Projects ProjectContext={gdProjectContext} projects={gdProjects} />

      {/* Tool Stack Section */}
      <LogoMarquee
        row1Data={graphicsDesignTools.slice(0, 6)}
        row2Data={graphicsDesignTools.slice(6, 13)}
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

export default GraphicsDesign;
