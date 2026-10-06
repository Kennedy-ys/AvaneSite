import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAngleRight,
  FaAngleLeft,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Rahim Chowdhury",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 2,
    name: "Mei Chen",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 3,
    name: "Marcus Boateng",
    role: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 4,
    name: "Sofia Marin",
    role: "Motion Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 5,
    name: "Karim Haddad",
    role: "Art Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 6,
    name: "Tim Chowdhury",
    role: "Strategist",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: 7,
    name: "Naomi Adeyemi",
    role: "Producer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
];

const Orange = "#ff7b00";
const N = teamMembers.length;
const pad = (n) => String(n).padStart(2, "0");

// Shortest signed distance on a circle, so cards wrap around on both sides
const getOffset = (index, active) => {
  const half = Math.floor(N / 2);
  return ((index - active + N + half) % N) - half;
};

// Per-distance layout: neighbours tuck behind the active card, further ones tuck behind those
const X_POSITIONS = [0, 190, 290, 360];
const SCALES = [1, 0.88, 0.78, 0.7];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((p) => (p === 0 ? N - 1 : p - 1));
  const handleNext = () => setActiveIndex((p) => (p === N - 1 ? 0 : p + 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const SWIPE_DISTANCE = 50; // px
  const SWIPE_VELOCITY = 400; // px/s

  const handlePanEnd = (_, info) => {
    const { offset, velocity } = info;
    if (offset.x < -SWIPE_DISTANCE || velocity.x < -SWIPE_VELOCITY)
      handleNext();
    else if (offset.x > SWIPE_DISTANCE || velocity.x > SWIPE_VELOCITY)
      handlePrev();
  };

  return (
    <section className="min-h-screen flex bg-linear-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-950 flex-col items-center justify-center overflow-hidden py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-zinc-300 md:text-5xl">
          Our Team
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500 dark:text-zinc-400">
          A creative collective of designers, developers, and strategists
          building the future of digital experiences.
        </p>
      </div>

      {/* Carousel */}
      <motion.div
        onPanEnd={handlePanEnd}
        className="relative flex h-112.5 w-full max-w-6xl items-center justify-center"
        style={{ perspective: 1400, touchAction: "pan-Y" }}
      >
        {teamMembers.map((member, index) => {
          const offset = getOffset(index, activeIndex);
          const abs = Math.abs(offset);
          const sign = Math.sign(offset);
          const isActive = offset === 0;

          return (
            <motion.div
              key={member.id}
              className="absolute flex h-96 w-72 cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-neutral-800 p-6 shadow-2xl"
              initial={false}
              animate={{
                x: sign * X_POSITIONS[abs],
                scale: SCALES[abs],
                rotateY: -sign * 22,
                opacity: abs > 3 ? 0 : 1,
                filter: isActive
                  ? "grayscale(0%) brightness(1)"
                  : `grayscale(100%) brightness(${abs === 1 ? 0.8 : 0.65})`,
                zIndex: 10 - abs,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(index)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

              <div className="text-left text-white">
                <h3 className="text-lg font-bold leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-300">{member.role}</p>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 flex gap-3"
                    >
                      {[
                        [member.socials.twitter, FaTwitter],
                        [member.socials.linkedin, FaLinkedin],
                        [member.socials.github, FaGithub],
                      ].map(([href, Icon], i) => {
                        const SocialIcon = Icon;
                        return (
                          href && (
                            <a
                              key={i}
                              href={href}
                              className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur-md transition hover:bg-white/90 hover:text-neutral-800"
                            >
                              <SocialIcon size={16} />
                            </a>
                          )
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Counter */}
      <p
        className="mt-8 font-mono text-sm tracking-wider"
        style={{ color: Orange }}
      >
        {pad(activeIndex + 1)}{" "}
        <span className="text-neutral-400">/ {pad(N)}</span>
      </p>

      {/* Controls: prev · dash indicators · next */}
      <div className="mt-5 flex items-center gap-5">
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white/60 text-neutral-700 transition hover:cursor-pointer hover:bg-white"
        >
          <FaAngleLeft />
        </button>

        <div className="flex items-center gap-2">
          {teamMembers.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${m.name}`}
              className="h-0.5 cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 40 : 20,
                background: i === activeIndex ? Orange : "#d6d0c4",
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white border border-slate-200 dark:border-white/10 dark:text-gray-200 hover:bg-slate-950 dark:hover:bg-white/5 transition hover:cursor-pointer"
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}
