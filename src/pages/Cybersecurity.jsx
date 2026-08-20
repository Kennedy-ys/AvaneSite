import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Timeline from '../components/sections/Timeline'
import Projects from '../components/sections/Projects'
import LogoMarquee from '../components/sections/LogoMarquee'
import CTA from '../components/sections/Call-To-Action'
import { IoLockClosedOutline, IoPulseOutline, IoShieldCheckmarkOutline, } from 'react-icons/io5'
import Button from '../components/ui/Button'
import { TbArrowDownRight } from 'react-icons/tb'
import { cyberTimelineContext, cyberTimelineSteps } from '../data/timeline'
import { CyberCapabilities } from '../data/capabilities'
import { cyberProjects, cyberProjectContext } from "../data/projects"
import { cyberTools } from "../data/marquee"
import { cyberSecurityHighlights } from "../data/highlights"

const Cybersecurity = () => {

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#040907] dark:to-[#020504] transition-colors duration-300 overflow-hidden">
      
      {/* 1. Structural Digital Matrix Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98108_1.5px,transparent_1.5px)] bg-size-[24px_24px] pointer-events-none" />
      
      {/* Hard Threat Mitigation Cyber Lime & Steel Blue Glow Arrays */}
      <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] bottom-10 w-112.5 h-112.5 bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Perimeter Scanning Visual Overlay Guides */}
      <div className="absolute left-12 top-1/4 bottom-1/4 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="60" height="320" rx="6" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="120" x2="100" y2="120" stroke="#06b6d4" strokeWidth="1" />
          <line x1="0" y1="280" x2="100" y2="280" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="50" cy="200" r="30" stroke="#10b981" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* LEFT COLUMN: CRISP DEFENSIVE POSTURE AND COPY PANEL */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/40 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">
            <IoShieldCheckmarkOutline className="text-sm animate-pulse" />
            Zero-Trust Architecture Matrix
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
            Harden systems. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500">
              Neutralize threat
            </span> <br />
            vectors instantly.
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
            We systematically bulletproof enterprise perimeters. From comprehensive penetration tests to strict zero-trust identity token engineering, we map out and close vulnerabilities before exploitation occurs.
          </p>

          {/* Call-To-Action Button Loops */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-auto sm:w-full pt-4">
            
            <Button as={Link} to="/contact" btnBgColor="bg-linear-to-r from-teal-500 to-cyan-500" btnBgHover="bg-teal-500" size="18" icon={<IoLockClosedOutline className="text-cyan-600" />}>Request Penetration Audit</Button>

              <Button as="a" href="#framework" btnBgColor="bg-white" btnTxtColor="text-slate-800 group-hover:text-white" btnBgHover="bg-linear-to-r from-teal-600 to-emerald-500" size="18" iconBgColor="bg-teal-500 group-hover:bg-white" icon={<TbArrowDownRight className="text-white group-hover:text-teal-600"/>} >
                Security Frameworks
              </Button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: SIMULATED DYNAMIC SECURITY OBSERVATION WORKSPACE */}
        <motion.div
          className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          {/* Radial Center Light Source */}
          <div className="absolute inset-0 m-auto w-64 h-64 bg-linear-to-tr from-emerald-500 to-cyan-500 opacity-20 dark:opacity-10 blur-[90px] rounded-full pointer-events-none" />

          {/* Premium Glass Cyber Shield Shell */}
          <div className="relative w-full max-w-115 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
            
            {/* Control Strip */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] text-slate-400 dark:text-gray-500 uppercase font-bold tracking-widest font-mono">perimeter_defense_active</span>
              </div>
              <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-200/20 dark:border-cyan-500/10">
                TLS 1.3 SIGNED
              </div>
            </div>

            {/* Simulated Live Integrity Telemetry */}
            <div className="space-y-4">
              
              {/* Row 1: Memory Ingestion Scan Indicator */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left relative">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider font-mono">Cryptographic Check</p>
                  <p className="text-sm font-black text-emerald-500 font-mono">Verified</p>
                </div>
                <p className="text-[11px] font-light text-slate-500 dark:text-gray-400 leading-tight font-mono">
                  SHA-256 integrity block pass: zero anomalous binary payload mutations located inside current filesystem stack.
                </p>
              </div>

              {/* Row 2: Symmetric Security State Split Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest font-mono">Intercepted CVEs</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white mt-1 font-mono">0<span className="text-xs text-emerald-500 font-normal"> Critical</span></p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/60 dark:border-white/5 text-left">
                  <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest font-mono">Firewall State</p>
                  <p className="text-xl font-black text-cyan-500 mt-1 font-mono">100% Lock</p>
                </div>
              </div>

            </div>

            {/* Bottom Real-Time Telemetry Log Line */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-[10px] font-mono text-slate-400 dark:text-gray-500 text-left">
              <IoPulseOutline className="text-emerald-500 text-sm shrink-0 animate-pulse" />
              Ingress Payload parsing loop: 0x4F92AA cleared.
            </div>

          </div>

          {/* Floating Cryptographic Key Token */}
          <motion.div 
            className="absolute -top-4 -left-6 hidden sm:flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-xl p-3.5 rounded-xl max-w-47.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 text-xs">
              🛡️
            </div>
            <div className="text-left">
              <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider font-mono">Token State</h4>
              <p className="text-[11px] text-emerald-500 font-mono font-bold leading-none mt-0.5">mTLS Rotated</p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>

    <section id="framework" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#020504] transition-colors duration-300">
      
      {/* Background Structural Soft Grid Blurs */}
      <div className="absolute left-1/3 top-1/4 w-125 h-125 bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute right-12 bottom-12 w-96 h-96 bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left max-w-xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="block w-6 h-0.5 bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">
                SEC_POSTURE_CONTROLS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              Defensive Rigor <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500">
                & Perimeter Hardening
              </span>
            </h2>
          </div>
          
          <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg max-w-md text-left leading-relaxed">
            We bypass reactive patch management, engineering deep zero-trust boundaries to shield infrastructure from advanced vector attacks.
          </p>
        </div>

        {/* Asymmetric Bento Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {CyberCapabilities.map((item, index) => {
            const {Icon, title, description} = item;
            return (
            <motion.div
              key={index}
              className={`${item.gridSpan} bg-slate-50/70 dark:bg-slate-900/10 border border-slate-200/60 dark:border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 hover:shadow-xs text-left`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Icon Container Layout */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 shadow-xs">
                  <Icon size={24} />
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
              <div className={`absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

            </motion.div>
          )})}
        </div>

        {/* Footer Integrity Indicators Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/10 dark:bg-slate-900/5 backdrop-blur-xs text-left">
          {cyberSecurityHighlights.map((highlight, index) => {
            const {Icon, iconColor, text } = highlight;
            return (
            <div key={index} className="flex items-center gap-3 max-w-md">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                <Icon className={iconColor}/>
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-gray-400">
                {text}
              </p>
            </div>
          )})}
        </div>

      </div>
    </section>

    {/* Roadmap Timeline Section */}
          <Timeline
            timelineContext={cyberTimelineContext}
            timelineSteps={cyberTimelineSteps}
          />
    
          {/* Project Section */}
          <Projects ProjectContext={cyberProjectContext} projects={cyberProjects} />
    
          {/* Tool Stack Section */}
          <LogoMarquee
            row1Data={cyberTools.slice(0, 5)}
            row2Data={cyberTools.slice(5, 10)}
            subText="Leveraging modern technology stacks and tools to build secure, speed-optimized, and scalable applications."
            title="Our Development Toolkit"
          />
    
          {/* CTA Section */}
          <CTA
            text="Ready to build something great together?"
            ctaText="Send a Message"
          />

    </>
  )
}

export default Cybersecurity