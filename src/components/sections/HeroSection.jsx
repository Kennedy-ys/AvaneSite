import React from "react";
import { motion } from "motion/react";
import BreadCrums from "../ui/BreadCrums";

const AboutHero = ({ subText, heading, HeroImg }) => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden px-4 pt-32 pb-20 transition-colors duration-300"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundPosition: "center 25%", // Lowers the asset focus to clear the sticky nav
      }}
    >
      {/* BACKGROUND OVERLAY */}
      <div className="absolute bg-slate-100/90 dark:bg-[#0d1527]/85 inset-0 pointer-events-none transition-colors duration-300" />

      {/* LEFT BACKGROUND VECTOR LINES */}
      <div className="absolute hidden md:block -left-10 top-0 w-1/4 opacity-60 dark:opacity-40 z-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 900"
          className="w-full h-full"
        >
          <g
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className="stroke-orange-500 dark:stroke-orange-400 transition-colors duration-300"
          >
            <path d="M230 0v600a170 170 0 0 1-340 0" />
            <path d="M270 0v600a210 210 0 0 1-420 0" />
            <path d="M310 0v600a250 250 0 0 1-500 0" />
            <path d="M350 0v600a290 290 0 0 1-580 0" />
          </g>
        </svg>
      </div>

      {/* RIGHT ORANGE CURVED FLUID SHAPE */}
      <div className="absolute right-0 bottom-0 top-16 w-[35%] md:w-[45%] pointer-events-none z-10">
        <div className="relative w-full h-full">
          {/* Main Orange Wave */}
          <svg
            className="w-full h-full absolute right-0 bottom-0"
            viewBox="0 0 400 500"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400,500 L400,0 C300,50 250,150 280,280 C300,380 200,450 0,500 Z"
              fill="#f16522"
            />
          </svg>

          {/* Right Floating White Circle */}
          <div className="absolute right-6 md:right-8 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full z-20 shadow-sm" />
        </div>
      </div>

      {/* CENTER FLOATING ORANGE CIRCLE GRAPHIC */}
      <div className="absolute left-[25%] md:left-[30%] top-[35%] md:top-[28%] pointer-events-none hidden sm:block">
        <div className="relative w-6 h-6 rounded-full bg-[#f16522]">
          <div className="absolute -inset-1.5 border border-[#f16522] rounded-full opacity-60 animate-ping" />
        </div>
      </div>

      {/* MAIN TEXT CONTENT CONTAINER */}
      <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center mt-4">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-wider uppercase font-sans mb-4 transition-colors duration-300"
        >
          {heading}
        </motion.h1>

        {/* Animated Subtitle Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-light tracking-wide mb-8 px-4 transition-colors duration-300"
        >
          {subText}
        </motion.p>

        {/* Animated Breadcrumb Navigation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white/40 dark:bg-gray-950/20 backdrop-blur-md border border-slate-300 dark:border-white/10 px-6 py-2.5 rounded-full mx-auto w-fit shadow-sm transition-all duration-300"
        >
          <BreadCrums />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
