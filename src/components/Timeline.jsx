import React from 'react'
import { motion } from "motion/react";

const Timeline = ({timelineSteps, timelineContext}) => {

   const TimelineStep = ({ step, index }) => {
   const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 last:mb-0 w-full">
      {/* 1. Left Side Column Block (Displays Content on Even, Layout Spacer on Odd) */}
      <div
        className={`w-full md:w-[45%] flex ${isEven ? "justify-end text-right" : "justify-start text-left md:order-last"}`}
      >
        <motion.div
          className="bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xs max-w-md w-full relative group transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10"
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Phase Number Badge floating inside box */}
          <span className="absolute top-1 right-4 text-3xl font-black font-mono text-slate-200 dark:text-slate-800/60 tracking-tighter select-none">
            {step.phase}
          </span>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-wide">
            {step.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed">
            {step.description}
          </p>

          {/* Floating Checklist Matrix Sub-items */}
          <div className={`flex flex-wrap gap-1.5 ${isEven ? "justify-end text-right" : "justify-start text-left md:order-last"} pt-4 border-t border-slate-100 dark:border-white/5`}>
            {step.details.map((detail, dIdx) => (
              <span 
                key={dIdx} 
                className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-200/40 dark:border-white/5"
              >
                ✓ {detail}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 2. Central Central Anchor Pin Node indicator */}
      <div className="absolute left-2 md:left-1/2 -top-3 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
        <motion.div
          className={`w-12 h-12 rounded-full bg-white dark:bg-[#0d1527] border-2 flex items-center justify-center shadow-md transition-colors ${step.accent}`}
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        >
          {step.icon}
        </motion.div>
      </div>

      {/* 3. Empty Layout Placeholder Column to balance grid symmetry on desktop scales */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

  return (
    <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-50/50 dark:bg-[#0b1220] transition-colors duration-300">
            {/* Decorative Branding Accents */}
            <div className={`absolute left-[-5%] top-1/4 w-80 h-80 bg-${timelineContext.color}-500/5 blur-[120px] rounded-full pointer-events-none`} />
            <div className="absolute right-[-5%] bottom-1/4 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    
            <div className="max-w-6xl mx-auto relative z-10">
              {/* Header Block text */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-4">
                <div className="flex items-center gap-2 justify-center">
                  <span className={`block w-6 h-0.5 bg-${timelineContext.color}-500`} />
                  <span className={`text-xs font-bold uppercase tracking-widest text-${timelineContext.color}-500`}>
                    {timelineContext.title}
                  </span>
                  <span className={`block w-6 h-0.5 bg-${timelineContext.color}-500`} />
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                  {timelineContext.heading1}{" "}
                  <span className={`text-transparent bg-clip-text bg-linear-to-r ${timelineContext.gradientHeadingClasses}`}>
                    {timelineContext.heading2}
                  </span>
                </h2>
                <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-xl">
                  {timelineContext.description}
                </p>
              </div>
    
              {/* Timeline Dynamic Track Wrapper */}
              <div className="relative w-full mt-12 md:mt-20">
                {/* Global Vertical Central Vector Line */}
                <motion.div
                  className="absolute left-2 md:left-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-orange-500 via-cyan-500 to-emerald-500 origin-top transform md:-translate-x-1/2 opacity-30 dark:opacity-20"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
    
                {/* Individual timeline item nodes rendering sequence */}
                <div className="space-y-12 md:space-y-0 pl-12 md:pl-0">
                  {timelineSteps.map((step, index) => (
                    <TimelineStep key={index} step={step} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>
  )
}

export default Timeline