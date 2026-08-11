import React from 'react'
import { motion } from 'motion/react'
import Timeline from '../components/Timeline'
import Projects from '../components/Projects'
import LogoMarquee from '../components/LogoMarquee'
import GetStarted from '../components/GetStarted'
import { IoEyeOutline, IoLockClosedOutline, IoPulseOutline, IoShieldCheckmarkOutline, IoSparklesOutline, IoTerminalOutline } from 'react-icons/io5'
import { LuShieldAlert } from 'react-icons/lu'
import { SiBurpsuite, SiCloudflare, SiDatadog, SiDocker, SiGnubash, SiKalilinux, SiMetasploit, SiSplunk, SiVault, SiWireshark } from 'react-icons/si'
import { FiShield } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { TbArrowDownRight } from 'react-icons/tb'

const Cybersecurity = () => {

  const securityCapabilities = [
  {
    icon: <IoTerminalOutline size={24} />,
    title: "Penetration Testing & Vulnerability Assessment",
    description: "Simulating advanced, persistent cyberattack vectors against network barriers and APIs. We stress-test access points, catalog architecture flaws, and deliver actionable patching documentation to close security gaps before exploitation.",
    tags: ["White-Box Audits", "API Exploit Testing", "CVE Indexing", "Static Analysis (SAST)"],
    gridSpan: "lg:col-span-7",
    accent: "from-emerald-500 to-teal-500"
  },
  {
    icon: <IoLockClosedOutline size={24} />,
    title: "Zero-Trust Access & Cryptography",
    description: "Designing modern network security systems with absolute least-privilege verification. We construct mutual TLS identity frameworks, hardware key verification configurations, and automated session rotation controls.",
    tags: ["mTLS Handshakes", "RBAC Architecture", "Hardware WebAuthn", "Token Rotation"],
    gridSpan: "lg:col-span-5",
    accent: "from-teal-500 to-cyan-500"
  },
  {
    icon: <IoEyeOutline size={24} />,
    title: "Continuous SIEM Telemetry & Threat Hunting",
    description: "Setting up real-time monitoring infrastructure across distributed clusters. We build intelligent trace triggers to catch anomalous runtime behavior and identify payload injections instantly.",
    tags: ["Log Aggregation", "Anomaly Auditing", "Ingress Parsing", "Kernel Probing"],
    gridSpan: "lg:col-span-5",
    accent: "from-cyan-500 to-emerald-600"
  },
  {
    icon: <IoShieldCheckmarkOutline size={24} />,
    title: "Governance, Risk & Compliance (GRC)",
    description: "Hardening production frameworks to conform smoothly to global security standards. We audit data flows, configure cloud environment permissions, and verify cryptographic storage keys for enterprise readiness.",
    tags: ["SOC2 Type II", "ISO 27001 Tuning", "HIPAA Safeguards", "GDPR Hardening"],
    gridSpan: "lg:col-span-7",
    accent: "from-teal-600 to-emerald-500"
  }
];

const securityHighlights = [
  { icon: <IoSparklesOutline className="text-emerald-500" />, text: "Hardened security architectures designed to satisfy stringent corporate SOC2 Type II compliance standards." },
  { icon: <LuShieldAlert className="text-cyan-500" />, text: "Proactive threat minimization systems backed by real-time infrastructure event logging and automated isolation rings." }
];

// Structured data for Cybersecurity Roadmap Timeline Section
const timelineSteps = [
  {
    phase: "01",
    icon: <IoTerminalOutline className="text-emerald-500" size={22} />,
    accent: "border-emerald-500/20 text-emerald-500 bg-emerald-500/5",
    title: "Zero-State Compromise Assessment",
    description: "We execute deep binary static analysis, environment configuration state audits, and edge-to-edge network map tracing. This initial diagnostic phase catalogs your current threat posture surface, rogue processes, and active permission blind spots without altering live system runtime environments.",
    details: ["Static Code Analysis (SAST)", "Vulnerability Footprint Auditing", "Network Perimeter Tracing"]
  },
  {
    phase: "02",
    icon: <IoLockClosedOutline className="text-teal-500" size={22} />,
    accent: "border-teal-500/20 text-teal-500 bg-teal-500/5",
    title: "Target Penetration Testing & Exploitation",
    description: "Our defensive engineers perform aggressive, white-hat vulnerability exploration. We stress-test edge firewalls, map out private API endpoints, simulate malicious multi-vector injection patterns, and safely exploit backdoors to confirm protection limits under real-world pressure.",
    details: ["API exploit Testing", "Auth Gateway Stressing", "Attack Vector Log Generation"]
  },
  {
    phase: "03",
    icon: <IoEyeOutline className="text-cyan-500" size={22} />,
    accent: "border-cyan-500/20 text-cyan-500 bg-cyan-500/5",
    title: "Systemic Architecture Remediation",
    description: "We transition your infrastructure into an intentional zero-trust posture. We code rigorous mutual TLS identity handshakes, deploy granular role-based access tokens (RBAC), enforce automatic key rotation intervals, and tighten cloud perimeter security boundaries.",
    details: ["mTLS Handshake Integration", "Least-Privilege Token Setup", "Automated Policy Isolation"]
  },
  {
    phase: "04",
    icon: <IoShieldCheckmarkOutline className="text-emerald-400" size={22} />,
    accent: "border-emerald-400/20 text-emerald-400 bg-emerald-400/5",
    title: "SIEM Telemetry & Threat Hunting",
    description: "We connect advanced security information and event management (SIEM) systems across your engineering stack. Our monitoring scripts parse real-time traffic payloads, configure sub-second telemetry alerts, and hook automated system quarantine responses.",
    details: ["SIEM Pipeline Connection", "Kernel Anomaly Probing", "Incident Isolation Triggers"]
  }
];

const timelineContext = {
  title: "Defensive Roadmap",
  heading1: "Our Hardening",
  heading2: "Deployment Lifecycle", 
  description: "A secure, milestone-driven digital defense timeline engineered to eliminate structural infrastructure vulnerabilities and protect your core enterprise assets.",
  color: "emerald",
  gradientHeadingClasses: "from-emerald-500 via-teal-500 to-cyan-500",
};

// Structured data for Cybersecurity Showcase Section
const projects = [
  {
    title: "Global FinTech Perimeter Hardening & Penetration Audit",
    category: "Zero-Trust Infrastructure",
    metric: "99.9% Exploit Surface Reduction",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    link: "work/fintech-perimeter-hardening",
    accentColor: "from-emerald-600 to-teal-500"
  },
  {
    title: "Healthcare SaaS Distributed Core Gateway mTLS Integration",
    category: "Cryptographic Identity Controls",
    metric: "<14ms Auth Token Latency",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    link: "work/saas-mtls-integration",
    accentColor: "from-teal-600 to-cyan-500"
  },
  {
    title: "Logistics Enterprise Cluster SIEM Telemetry Deployment",
    category: "Continuous Posture Monitoring",
    metric: "100% SOC2 Type II Audit Pass",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    link: "work/enterprise-siem-telemetry",
    accentColor: "from-cyan-600 to-emerald-500"
  }
];

// Context definitions for the Cybersecurity header block
const ProjectContext = {
  title: "Defensive Proofs",
  heading1: "Hardened",
  heading2: "Digital Perimeters",
  headerLineColor: "bg-emerald-600",
  gradientHeadingClasses: "from-emerald-500 via-teal-500 to-cyan-500",
  description: "Explore comprehensive penetration test logs, cryptographic access implementations, and real-time SIEM logging blueprints engineered to lock down complex enterprise software clusters."
};

const devTools = [
  { 
    name: 'Kali Linux', 
    icon: <SiKalilinux size={26} className="text-[#8F8F8F]" />, 
    role: "Offensive Audit Environment" 
  },
  { 
    name: 'Wireshark', 
    icon: <SiWireshark size={26} className="text-[#1679A7]" />, 
    role: "Packet Level Tracing" 
  },
  { 
    name: 'Burp Suite', 
    icon: <SiBurpsuite size={26} className="text-[#FF6600]" />, 
    role: "Web Application Stressing" 
  },
  { 
    name: 'HashiCorp Vault', 
    icon: <SiVault size={24} className="text-[#000000] dark:text-white" />, 
    role: "Cryptographic Key Storage" 
  },
  { 
    name: 'Splunk Enterprise', 
    icon: <SiSplunk size={26} className="text-[#000000] dark:text-[#FF7A00]" />, 
    role: "SIEM Log Aggregation" 
  },
  { 
    name: 'Metasploit', 
    icon: <SiMetasploit size={26} className="text-[#3F5A94]" />, 
    role: "Exploit Vector Simulation" 
  },
  { 
    name: 'Cloudflare', 
    icon: <SiCloudflare size={26} className="text-[#F38020]" />, 
    role: "DDoS Edge Defense Matrices" 
  },
  { 
    name: 'Datadog Security', 
    icon: <SiDatadog size={24} className="text-[#632CA6]" />, 
    role: "Cloud Posture Monitoring" 
  },
  { 
    name: 'Docker Bench', 
    icon: <SiDocker size={26} className="text-[#2496ED]" />, 
    role: "Runtime Kernel Hardening" 
  },
  { 
    name: 'OpenVAS', 
    icon: <FiShield size={24} className="text-[#00C4CC]" />, 
    role: "Automated Vulnerability Indexing" 
  },
  { 
    name: 'Bash Scripting', 
    icon: <SiGnubash size={24} className="text-[#4EAA25]" />, 
    role: "Automated Patch Execution" 
  }
];

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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            
            <Button as={Link} to="/contact" btnBgColor="bg-linear-to-r from-teal-500 to-cyan-500" btnBgHover="bg-teal-500" icon={<IoLockClosedOutline className="text-cyan-600" />}>Request Penetration Audit</Button>

              <Button as="a" href="#framework" btnBgColor="bg-white" btnTxtColor="text-slate-800 group-hover:text-white" btnBgHover="bg-linear-to-r from-teal-600 to-emerald-500" iconBgColor="bg-teal-500 group-hover:bg-white" icon={<TbArrowDownRight className="text-white group-hover:text-teal-600"/>} >
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
          {securityCapabilities.map((item, index) => (
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
                  {item.icon}
                </div>
              </div>

              {/* Central Information Typography Stack */}
              <div className="mt-8 relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {item.description}
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
          ))}
        </div>

        {/* Footer Integrity Indicators Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/10 dark:bg-slate-900/5 backdrop-blur-xs text-left">
          {securityHighlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 max-w-md">
              <div className="w-5 h-5 flex items-center justify-center shrink-0">
                {highlight.icon}
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-gray-400">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Roadmap Timeline Section */}
          <Timeline
            timelineContext={timelineContext}
            timelineSteps={timelineSteps}
          />
    
          {/* Project Section */}
          <Projects ProjectContext={ProjectContext} projects={projects} />
    
          {/* Tool Stack Section */}
          <LogoMarquee
            row1Data={devTools.slice(0, 5)}
            row2Data={devTools.slice(5, 10)}
            subText="Leveraging modern technology stacks and tools to build secure, speed-optimized, and scalable applications."
            title="Our Development Toolkit"
          />
    
          {/* CTA Section */}
          <GetStarted
            text="Ready to build something great together?"
            ctaText="Send a Message"
          />

    </>
  )
}

export default Cybersecurity