import React from 'react'
import BreadCrums from "../components/BreadCrums";
import { motion } from 'motion/react';


const Research = () => {

  return (
    <div className="mb-8 mt-5">
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-white dark:bg-[#050816] '
      style={{
  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="w3.org" viewBox="0 0 100 200" fill="none" stroke="rgba(0,0,0,1)" stroke-width="2"><path d="M10,0 V100 A40,40 0 0 0 50,140 H100 M20,0 V100 A30,30 0 0 0 50,130 H100 M30,0 V100 A20,20 0 0 0 50,120 H100 M40,0 V100 A10,10 0 0 0 50,110 H100"/></svg>'), url('data:image/svg+xml;utf8,<svg xmlns="w3.org" viewBox="0 0 100 200" fill="none" stroke="rgba(0,0,0,1)" stroke-width="2"><path d="M10,0 V100 A40,40 0 0 0 50,140 H100 M20,0 V100 A30,30 0 0 0 50,130 H100 M30,0 V100 A20,20 0 0 0 50,120 H100 M40,0 V100 A10,10 0 0 0 50,110 H100"/></svg>')`,
  backgroundPosition: 'left top, right top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '150px auto'
}}

      >
        
        <motion.div
        animate={{
          backgroundColor: ["rgba(124, 58, 237, 0.2)", "rgba(6, 182, 212, 0.2)", "rgba(251, 191, 36, 0.1)"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 top-0 h-125 w-125 rounded-full bg-violet-600/20 blur-3xl" />

        <motion.div
        animate={{
          backgroundColor: ["rgba(6, 182, 212, 0.2)", "rgba(251, 191, 36, 0.1)", "rgba(124, 58, 237, 0.2)"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 top-[20%] h-100 w-100 rounded-full bg-cyan-500/20 blur-3xl" />

        <motion.div
        animate={{
          backgroundColor: ["rgba(251, 191, 36, 0.1)", "rgba(124, 58, 237, 0.2)", "rgba(6, 182, 212, 0.2)"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      
      <div className="max-7xl mx-auto px-6 py-20 lg:px-10">

      </div>

        <div className='bg-white/50 dark:bg-gray-950/50 backdrop-blur-md p-4 rounded-full mx-auto w-fit'><BreadCrums /></div>


      </section>

        
        </div>
  )
}

export default Research
