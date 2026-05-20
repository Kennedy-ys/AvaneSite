import React from 'react';
import { motion } from 'motion/react';
import BreadCrums from "./BreadCrums";

const AboutHero = ({subText, heading, HeroImg}) => {
  return (
    <section className="relative w-full min-h-112.5 bg-[#0d1527] flex items-center justify-center overflow-hidden px-4 py-16">
      
      {/* LEFT BACKGROUND VECTOR LINES */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-20 pointer-events-none md:block">
        <svg className="w-full h-full" viewBox="0 0 200 400" fill="none" xmlns="http://w3.org">
          <path d="M-50,0 C50,50 50,150 -50,200 M-50,20 C70,70 70,130 -50,180" stroke="white" strokeWidth="1.5" />
          <path d="M-50,50 C100,100 100,300 -50,350" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      {/* BACKGROUND IMAGE WITH NAVY BLUE OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
        style={{ 
          backgroundImage: `url(${HeroImg})`, 
        }}
      />

      {/* RIGHT ORANGE CURVED FLUID SHAPE */}
      <div className="absolute right-0 bottom-0 top-10 w-[30%] md:w-[45%] pointer-events-none z-10">
        <div className="relative w-full h-full">
          {/* Main Orange Wave */}
          <svg className="w-full h-full absolute right-0 bottom-0" viewBox="0 0 400 500" preserveAspectRatio="none" fill="none" xmlns="http://w3.org">
            <path d="M400,500 L400,0 C300,50 250,150 280,280 C300,380 200,450 0,500 Z" fill="#f16522" />
          </svg>
          
          {/* Right Floating White Circle */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full z-20 opacity-80" />
          
          
        </div>
      </div>

      {/* CENTER FLOATING ORANGE CIRCLE GRAPHIC */}
      <div className="absolute left-[30%] top-[25%] pointer-events-none lg:block">
        <div className="relative w-8 h-8 rounded-full bg-[#f16522]">
          <div className="absolute -inset-1.5 border border-[#f16522] rounded-full opacity-60 animate-ping" />
        </div>
      </div>

      {/* MAIN TEXT CONTENT CONTAINER */}
      <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-black text-white tracking-wider uppercase font-sans mb-4"
        >
          {heading}
        </motion.h1>

        {/* Animated Subtitle Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-light tracking-wide mb-8 px-4"
        >
          {subText}
        </motion.p>

        {/* Animated Breadcrumb Navigation Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='bg-gray-950/10 backdrop-blur border border-white/10 p-4 rounded-full mx-auto w-fit'><BreadCrums /></motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
