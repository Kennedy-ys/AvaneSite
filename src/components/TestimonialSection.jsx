import { useLayoutEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    rating: 5,
    text: "Avane completely transformed our outdated platform into a fast, modern web application. Their development process was smooth, transparent, and incredibly efficient.",
    author: "Daniel A.",
    company: "FinCore",
    initials: "DA",
    color: "bg-linear-to-br from-orange-500 to-amber-500 text-white",
  },
  {
    rating: 5,
    text: "The UI/UX redesign from Avane improved our customer engagement almost immediately. The interface feels premium and intuitive across all devices.",
    author: "Sophia M.",
    company: "NovaPay",
    initials: "SM",
    color: "bg-linear-to-br from-blue-600 to-cyan-500 text-white",
  },
  {
    rating: 5,
    text: "Working with Avane felt like having an in-house engineering team. They handled research, strategy, and development with exceptional attention to detail.",
    author: "Michael T.",
    company: "CloudSync",
    initials: "MT",
    color: "bg-orange-500 text-white",
  },
  {
    rating: 5,
    text: "Their team delivered our MVP ahead of schedule and helped us launch confidently to investors and early users.",
    author: "Grace E.",
    company: "LaunchGrid",
    initials: "GE",
    color: "bg-blue-600 text-white",
  },
  {
    rating: 4,
    text: "Avane's product research and UX strategy gave us clarity on what our users actually needed. The insights were invaluable.",
    author: "Kevin O.",
    company: "InsightLoop",
    initials: "KO",
    color: "bg-orange-600 text-white",
  },
  {
    rating: 5,
    text: "From branding to frontend development, Avane delivered a polished digital experience that elevated our entire online presence.",
    author: "Rachel B.",
    company: "Elevate Labs",
    initials: "RB",
    color: "bg-blue-700 text-white",
  },
];

const testimonialsCol2 = [
  {
    rating: 5,
    text: "The communication throughout the project was excellent. Avane kept us updated every step of the way and delivered exactly what we envisioned.",
    author: "Victor C.",
    company: "PrimeStack",
    initials: "VC",
    color: "bg-linear-to-br from-blue-600 to-cyan-500 text-white",
  },
  {
    rating: 5,
    text: "Their design system made scaling our product so much easier. Every screen feels consistent, modern, and user-focused.",
    author: "Linda P.",
    company: "PixelWare",
    initials: "LP",
    color: "bg-orange-500 text-white",
  },
  {
    rating: 4,
    text: "Avane helped us validate our startup idea through detailed market and user research before development even began.",
    author: "NextSphere",
    company: "NextSphere",
    initials: "NJ",
    color: "bg-blue-500 text-white",
  },
  {
    rating: 5,
    text: "The final product exceeded our expectations. Performance, responsiveness, and design quality were all top-tier.",
    author: "Ella K.",
    company: "BrightTech",
    initials: "EK",
    color: "bg-orange-600 text-white",
  },
  {
    rating: 5,
    text: "Avane combines creativity with technical expertise. Their team truly understands how to build products users enjoy using.",
    author: "Samuel D.",
    company: "CoreFlow",
    initials: "SD",
    color: "bg-blue-700 text-white",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5 mb-3">
    {[1, 2, 3, 4, 5].map((s, index) => (
      <FaStar
        key={index}
        className={`w-3.5 h-3.5 ${s <= rating ? "text-orange-500" : "text-slate-200 dark:text-slate-800"}`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="bg-white/40 dark:bg-slate-900/30 rounded-2xl p-6 border border-slate-200/60 dark:border-white/5 backdrop-blur-md mb-4 shadow-xs group hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300">
    <StarRating rating={item.rating} />
    <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed mb-5">
      "{item.text}"
    </p>
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center text-xs font-black shrink-0 tracking-wider shadow-xs`}>
        {item.initials}
      </div>
      <div className="text-left">
        <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">
          {item.author}
        </p>
        {item.company && (
          <p className="text-[11px] font-medium text-slate-400 dark:text-gray-500 mt-1 uppercase tracking-wider">
            {item.company}
          </p>
        )}
      </div>
    </div>
  </div>
);

const ScrollColumn = ({ items, speed = 30, direction = 1 }) => {
  const containerRef = useRef(null);
  const duplicated = [...items, ...items];
  const y = useMotionValue(0);
  const contentHeightRef = useRef(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    contentHeightRef.current = containerRef.current.scrollHeight / 2;
  }, [items]);

  useAnimationFrame((t, delta) => {
    const contentHeight = contentHeightRef.current;
    if (!contentHeight) return;

    let next = y.get();

    if (direction === 1) {
      next -= (delta / 1000) * speed;
      if (Math.abs(next) >= contentHeight) next = 0;
    }

    if (direction === -1) {
      next += (delta / 1000) * speed;
      if (next >= 0) next = -contentHeight;
    }

    y.set(next);
  });

  return (
    <div className="overflow-hidden h-135 relative mask-vertical-fade">
      <motion.div ref={containerRef} style={{ y }} className="pr-1">
        {duplicated.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Badge = ({ label, sub }) => (
  <div className="flex flex-col items-start text-left border border-slate-200/80 dark:border-white/5 bg-white/40 dark:bg-slate-900/20 backdrop-blur-xs rounded-xl p-4 min-w-30 shrink-0">
    <div className="flex gap-1 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
    </div>
    <p className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none">
      {label}
    </p>
    <p className="text-xs font-black text-slate-800 dark:text-slate-200 mt-1.5 leading-none">
      {sub}
    </p>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-linear-to-b from-white to-slate-50 dark:from-[#0d1527] dark:to-[#0b1220] py-24 px-6 lg:px-12 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Micro Glow Fields to tie in with Hero section */}
      <div className="absolute left-[-10%] top-1/3 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-[-15%] bottom-1/4 w-125 h-125 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Embedded Brand Curved Vector Line Path Asset (Mirrors About/Hero section layouts) */}
      {/*<div className="absolute left-4 bottom-12 top-12 w-20 hidden xl:flex items-center opacity-20 pointer-events-none">
        <svg className="w-full h-[60%]" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#f16522" strokeWidth="1.5" strokeLinecap="round">
            <path d="M-20,0 C40,0 50,60 50,200 C50,340 40,400 -20,400" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT BRAND PANEL CONTAINER */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Indicator Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200/40 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
            <FaStar className="text-[10px] animate-pulse" />
            Social Proof
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              innovative
            </span>{" "}
            brands worldwide.
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md">
            We partner with ambitious startups and established companies to deliver highly scalable applications, conversions-optimized UI/UX designs, and clean production architecture loops.
          </p>

          {/* Metric Badges Info Row */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md">
            <Badge label="Agency Stat" sub="Top Rated" />
            <Badge label="Client Score" sub="98% Positive" />
            <Badge label="Framework" sub="Recommended" />
          </div>

          {/* Bottom Summary Score Block */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 dark:border-white/5 w-full max-w-md flex items-center gap-4">
            {/* Replaced generic visual circles with a clean modern project tracker text metric */}
            <div className="text-left">
              <p className="text-2xl font-black text-blue-600 dark:text-cyan-400 leading-none">120+</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-gray-500 mt-1.5 uppercase tracking-wider">Shipped Digital Products</p>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-white/5 mx-2" />
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FaStar key={s} className="w-3.5 h-3.5 text-orange-500" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-300 mt-2">
                4.8 / 5 Average Rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT MARQUEE SCROLLING COLUMNS CONTAINER */}
        <motion.div
          className="lg:col-span-7 grid sm:grid-cols-2 gap-4 relative w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <ScrollColumn items={testimonials} speed={24} direction={1} />
          <ScrollColumn items={testimonialsCol2} speed={18} direction={-1} />
        </motion.div>
        
      </div>

      {/* Embedded CSS style overrides to smoothly fade column top/bottom cutoffs */}
      <style>{`
        .mask-vertical-fade {
          mask-image: linear-gradient(to bottom, transparent, white 12%, white 88%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, white 12%, white 88%, transparent);
        }
      `}</style>

    </section>
  );
}