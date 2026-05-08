import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const teamMembers = [
  {
    id: 1,
    name: "Marcus Thorne",
    role: "Founder & Creative Director",
    roleColor: "orange",
    description:
      "Bridging the gap between high-frequency engineering and premium editorial design for over a decade.",
    initial: "MT",
    accent: "border-dashed border-2 border-blue-300 dark:border-blue-700",
  },
  {
    id: 2,
    name: "Sienna Vance",
    role: "Principal Systems Architect",
    roleColor: "orange",
    description:
      "Expert in distributed ledgers and low-latency systems. Architect of our proprietary kinetic framework.",
    initial: "SV",
    accent: "",
  },
  {
    id: 3,
    name: "Elias Brandt",
    role: "Head of Interactive Engineering",
    roleColor: "blue",
    description:
      "Transforming static concepts into fluid, responsive experiences that defy standard UI conventions.",
    initial: "EB",
    accent: "",
  },
  {
    id: 4,
    name: "Lena Hartwell",
    role: "Motion Design Lead",
    roleColor: "orange",
    description:
      "Crafting micro-interactions and animated sequences that breathe life into complex interfaces.",
    initial: "LH",
    accent: "",
  },
  {
    id: 5,
    name: "Kai Oduya",
    role: "Systems Integration Engineer",
    roleColor: "blue",
    description:
      "Specializing in seamless API architecture and high-throughput data pipelines for enterprise clients.",
    initial: "KO",
    accent: "",
  },
  {
    id: 6,
    name: "Vera Solano",
    role: "Brand Strategy Director",
    roleColor: "orange",
    description:
      "Aligning technical precision with narrative craft to build brands that resonate across every touchpoint.",
    initial: "VS",
    accent: "",
  },
];


function AvatarSVG({ initial, isHovered }) {
  return (
    <svg
      viewBox="0 0 320 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id={`grad-${initial}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor={isHovered ? "#1d4ed8" : "#94a3b8"}
            stopOpacity="0.3"
          />
          <stop
            offset="100%"
            stopColor={isHovered ? "#3b82f6" : "#64748b"}
            stopOpacity="0.15"
          />
        </linearGradient>
      </defs>
      <rect width="320" height="360" fill={`url(#grad-${initial})`} />
      <circle
        cx="160"
        cy="130"
        r="72"
        fill={isHovered ? "rgba(59,130,246,0.35)" : "rgba(148,163,184,0.25)"}
      />
      <ellipse
        cx="160"
        cy="320"
        rx="110"
        ry="90"
        fill={isHovered ? "rgba(59,130,246,0.25)" : "rgba(148,163,184,0.2)"}
      />
      <text
        x="160"
        y="148"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="52"
        fontWeight="600"
        fill={isHovered ? "rgba(219,234,254,0.9)" : "rgba(203,213,225,0.7)"}
      >
        {initial}
      </text>
    </svg>
  );
}

function TeamCard({ member, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.018 }}
      style={{ transition: "box-shadow 0.3s ease" }}
    >
      {/* Card border (dashed for first) */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none z-10 ${member.accent}`}
      />

      {/* Main card bg */}
      <motion.div
        className="rounded-2xl overflow-hidden"
        animate={{
          boxShadow: hovered
            ? "0 24px 60px rgba(37,99,235,0.28), 0 8px 20px rgba(37,99,235,0.18)"
            : "0 2px 12px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.35 }}
      >
        {/* Photo area */}
        <div className="relative overflow-hidden" style={{ height: 240 }}>
          <motion.div
            className="absolute inset-0"
            animate={{
              background: hovered
                ? "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)"
                : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Grayscale avatar that colorizes on hover */}
          <motion.div
            className="absolute inset-0"
            animate={{ filter: hovered ? "none" : "grayscale(100%)" }}
            transition={{ duration: 0.4 }}
          >
            <AvatarSVG initial={member.initial} isHovered={hovered} />
          </motion.div>

          {/* Subtle overlay grid pattern */}
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={{ opacity: hovered ? 0.06 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.8) 20px, rgba(255,255,255,0.8) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.8) 20px, rgba(255,255,255,0.8) 21px)",
            }}
          />
        </div>

        {/* Content area */}
        <motion.div
          className="px-5 py-5"
          animate={{
            backgroundColor: hovered ? "#ffffff" : "#ffffff",
          }}
        >
          <motion.div
            className="dark:bg-gray-900 bg-white"
            animate={{ backgroundColor: hovered ? "#f0f7ff" : "" }}
          >
            <h3
              className={`text-lg font-bold tracking-tight mb-1 transition-colors duration-300 ${
                hovered ? "text-blue-900" : "text-gray-900 dark:text-gray-100"
              }`}
            >
              {member.name}
            </h3>

            <motion.p
              className="text-sm font-semibold mb-3 tracking-wide uppercase"
              animate={{
                color:
                  hovered
                    ? "#1d4ed8"
                    : member.roleColor === "orange"
                    ? "#ea580c"
                    : "#2563eb",
              }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: "0.72rem", letterSpacing: "0.05em" }}
            >
              {member.role}
            </motion.p>

            <p
              className={`text-sm leading-relaxed transition-colors duration-300 ${
                hovered ? "text-blue-800/80" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {member.description}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function AvaneTeamSection() {

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 text-xs font-semibold uppercase tracking-widest">
              The Team
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
            We are a multidisciplinary cluster of engineers, designers, and
            strategists obsessed with the intersection of{" "}
            <span className="text-gray-900 dark:text-white font-medium">
              motion and precision.
            </span>
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        
      </div>
    </div>
  );
}