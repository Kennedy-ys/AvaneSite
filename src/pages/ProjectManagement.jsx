import React from "react";
import { motion } from "motion/react";
import {
  IoCheckmarkDoneCircleOutline,
  IoRocketOutline,
  IoTimeOutline,
} from "react-icons/io5";
import Timeline from "../components/sections/Timeline";
import Projects from "../components/sections/Projects";
import LogoMarquee from "../components/sections/LogoMarquee";
import CTA from "../components/sections/Call-To-Action";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { TbArrowDownRight } from "react-icons/tb";
import { pmHighlights } from "../data/highlights";
import { pmCapabilities } from "../data/capabilities";
import { pManagementTools } from "../data/marquee";
import { pmProjects, pmProjectContext } from "../data/projects";
import { pmTimelineSteps, pmTimelineContext } from "../data/timeline";

const ProjectManagement = () => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#070a13] dark:to-[#04060c] transition-colors duration-300 overflow-hidden">
        {/* 1. Structural Timeline Grid Background Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

        {/* Operational Deep Indigo & Royal Glow Arrays */}
        <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-10 w-112.5 h-112.5 bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

        {/* Brand Vector Milestone Accent */}
        <div className="absolute left-12 top-1/3 bottom-1/3 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="50" r="6" fill="#6366f1" />
            <line
              x1="20"
              y1="56"
              x2="20"
              y2="244"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="20" cy="250" r="6" fill="#3b82f6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
          {/* LEFT COLUMN: VELOCITY MARKETING COPY PANEL */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200/40 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <IoCheckmarkDoneCircleOutline className="text-sm" />
              Enterprise Lifecycle Architecture
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
              De-risk delivery. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">
                Accelerate your
              </span>{" "}
              <br />
              product lifecycle.
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
              We eliminate scope creep and organizational bottlenecks. Our
              fractional product architects embed technical management pipelines
              that translate raw product roadmaps into precise, high-velocity
              software deployments.
            </p>

            {/* Call-To-Action Button Loops */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-auto sm:w-full pt-4">
              <Button
                as={Link}
                to="/contact"
                btnBgColor="bg-linear-to-r from-indigo-600 to-purple-500"
                btnBgHover="bg-indigo-500"
                icon={<IoRocketOutline className="text-indigo-600" />}
              >
                Optimize Our Delivery
              </Button>

              <Button
                as="a"
                href="#framework"
                btnBgColor="bg-white/90"
                btnTxtColor="text-slate-800 group-hover:text-white"
                btnBgHover="bg-indigo-600"
                iconBgColor="bg-indigo-600 group-hover:bg-white"
                icon={
                  <TbArrowDownRight className="text-white group-hover:text-indigo-600" />
                }
              >
                Management Frameworks
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SIMULATED DELIVERY TIMELINE SCREEN */}
          <motion.div
            className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* Central Radial Underlay Glow */}
            <div className="absolute inset-0 m-auto w-64 h-64 bg-linear-to-tr from-indigo-500 to-purple-500 opacity-20 dark:opacity-10 blur-[90px] rounded-full pointer-events-none" />

            {/* Premium Glass Delivery Platform Shell */}
            <div className="relative w-full max-w-115 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Control Header */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">
                    active_sprint_v4.1
                  </span>
                </div>
                <div className="text-[10px] font-mono text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-200/20 dark:border-indigo-500/10">
                  BURNDOWN: OPTIMAL
                </div>
              </div>

              {/* Simulated Workflow Progress Tracking */}
              <div className="space-y-4">
                {/* Phase Item 1: Completed Tracking Card */}
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left relative overflow-hidden group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded uppercase">
                        Milestone Alpha
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white mt-1.5">
                        Architecture Scope Alignment
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-emerald-500 font-mono flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      ✓ 100%
                    </span>
                  </div>
                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-full" />
                  </div>
                </div>

                {/* Phase Item 2: Active Tracking Card */}
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-purple-500 dark:text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded uppercase">
                        Sprint Cycle 02
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white mt-1.5">
                        Iterative Cross-Platform Deployment
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-indigo-500 font-mono flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                      🚀 Active
                    </span>
                  </div>
                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      className="bg-indigo-500 h-full"
                      animate={{ width: ["45%", "68%", "68%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Status Panel */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-gray-500 text-left">
                <div className="flex items-center gap-1.5">
                  <IoTimeOutline className="text-indigo-500 text-xs shrink-0" />
                  Next Handoff: Tuesday (UTC)
                </div>
                <span>Velocity KPI: 94.2 pts</span>
              </div>
            </div>

            {/* Decorative Floating Resource Load Indicator */}
            <motion.div
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-3.5 rounded-xl max-w-50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 text-xs">
                ⚡
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Resource Friction
                </h4>
                <p className="text-[11px] text-purple-500 font-mono font-bold leading-none mt-0.5">
                  0.0% Detected
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Matrix Section */}
      <section
        id="framework"
        className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#070a13] transition-colors duration-300"
      >
        {/* Background Structural Ambient Shadows */}
        <div className="absolute left-1/4 top-1/4 w-125 h-125 bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Typography Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col items-start text-left max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="block w-6 h-0.5 bg-indigo-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                  DELIVERY CAPABILITIES
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                Agile Frameworks <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500">
                  & Execution Pipelines
                </span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
              We structure chaotic feature backlogs into predictable,
              high-velocity sprints engineered to maximize development momentum
              and ensure stability.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {pmCapabilities.map((item, index) => {
              const { Icon, title, description } = item;
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
                  {/* Top Row: Icon Container */}
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 shadow-xs">
                      <Icon size={24} />
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

                  {/* Bottom Project Management Tooling / Process Pills */}
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

                  {/* Dynamic Indigo Border Highlight Line on Hover */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Metric Reassurance Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/20 dark:bg-slate-900/5 backdrop-blur-xs text-left">
            {pmHighlights.map((highlight, index) => {
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
        timelineContext={pmTimelineContext}
        timelineSteps={pmTimelineSteps}
      />

      {/* Project Section */}
      <Projects ProjectContext={pmProjectContext} projects={pmProjects} />

      {/* Tool Stack Section */}
      <LogoMarquee
        row1Data={pManagementTools.slice(0, 6)}
        row2Data={pManagementTools.slice(6, 12)}
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

export default ProjectManagement;
