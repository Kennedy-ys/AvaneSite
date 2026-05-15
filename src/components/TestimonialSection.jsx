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
    color: "bg-linear-to-r from-orange-500 to-amber-500",
  },
  {
    rating: 5,
    text: "The UI/UX redesign from Avane improved our customer engagement almost immediately. The interface feels premium and intuitive across all devices.",
    author: "Sophia M.",
    company: "NovaPay",
    initials: "SM",
    color: "bg-blue-600",
  },
  {
    rating: 5,
    text: "Working with Avane felt like having an in-house engineering team. They handled research, strategy, and development with exceptional attention to detail.",
    author: "Michael T.",
    company: "CloudSync",
    initials: "MT",
    color: "bg-orange-400",
  },
  {
    rating: 5,
    text: "Their team delivered our MVP ahead of schedule and helped us launch confidently to investors and early users.",
    author: "Grace E.",
    company: "LaunchGrid",
    initials: "GE",
    color: "bg-blue-500",
  },
  {
    rating: 4,
    text: "Avane's product research and UX strategy gave us clarity on what our users actually needed. The insights were invaluable.",
    author: "Kevin O.",
    company: "InsightLoop",
    initials: "KO",
    color: "bg-orange-600",
  },
  {
    rating: 5,
    text: "From branding to frontend development, Avane delivered a polished digital experience that elevated our entire online presence.",
    author: "Rachel B.",
    company: "Elevate Labs",
    initials: "RB",
    color: "bg-blue-700",
  },
];

const testimonialsCol2 = [
  {
    rating: 5,
    text: "The communication throughout the project was excellent. Avane kept us updated every step of the way and delivered exactly what we envisioned.",
    author: "Victor C.",
    company: "PrimeStack",
    initials: "VC",
    color: "bg-blue-600",
  },
  {
    rating: 5,
    text: "Their design system made scaling our product so much easier. Every screen feels consistent, modern, and user-focused.",
    author: "Linda P.",
    company: "PixelWare",
    initials: "LP",
    color: "bg-orange-500",
  },
  {
    rating: 4,
    text: "Avane helped us validate our startup idea through detailed market and user research before development even began.",
    author: "Nathan J.",
    company: "NextSphere",
    initials: "NJ",
    color: "bg-blue-500",
  },
  {
    rating: 5,
    text: "The final product exceeded our expectations. Performance, responsiveness, and design quality were all top-tier.",
    author: "Ella K.",
    company: "BrightTech",
    initials: "EK",
    color: "bg-orange-600",
  },
  {
    rating: 5,
    text: "Avane combines creativity with technical expertise. Their team truly understands how to build products users enjoy using.",
    author: "Samuel D.",
    company: "CoreFlow",
    initials: "SD",
    color: "bg-blue-700",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5 mb-3">
    {[1, 2, 3, 4, 5].map((s) => (
      
      <FaStar className={`w-4 h-4 ${s <= rating ? "text-orange-400 dark:text-orange-400" : "text-slate-200 dark:text-slate-600"}`} />
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
    <StarRating rating={item.rating} />
    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
      {item.text}
    </p>
    <div className="flex items-center gap-2.5">
      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
        {item.initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-none">
          {item.author}
        </p>
        {item.company && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {item.company}
          </p>
        )}
      </div>
    </div>
  </div>
);


const ScrollColumn = ({ items, speed = 30, direction = 1 }) => {
  const containerRef = useRef(null);

  // duplicate twice only
  const duplicated = [...items, ...items];

  // stable motion value
  const y = useMotionValue(0);

  const contentHeightRef = useRef(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // height of ONE set of items
    contentHeightRef.current =
      containerRef.current.scrollHeight / 2;
  }, [items]);

  useAnimationFrame((t, delta) => {
    const contentHeight = contentHeightRef.current;

    if (!contentHeight) return;

    let next = y.get();

    // upward scroll
    if (direction === 1) {
      next -= (delta / 1000) * speed;

      // seamless reset
      if (Math.abs(next) >= contentHeight) {
        next = 0;
      }
    }

    // downward scroll
    if (direction === -1) {
      next += (delta / 1000) * speed;

      // seamless reset
      if (next >= 0) {
        next = -contentHeight;
      }
    }

    y.set(next);
  });

  return (
    <div className="overflow-hidden h-130 relative">
      {/* top fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={containerRef}
        style={{ y }}
      >
        {duplicated.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Badge = ({ label, sub }) => (
  <div className="flex flex-col items-center justify-center border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 w-24 text-center hover:border-orange-300 dark:hover:border-orange-500 transition-colors duration-300">
    <div className="flex items-center gap-0.5 mb-1">
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? "bg-linear-to-r from-orange-500 to-amber-500" : "bg-linear-to-r from-blue-500 to-cyan-500"}`} />
      ))}
    </div>
    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide leading-tight">
      {label}
    </p>
    <p className="text-[9px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">
      {sub}
    </p>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3.5 py-1.5 mb-6 shadow-sm">
            <div className="w-4 h-4 rounded-full bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center">
              <FaStar className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Top-rated Digital Product & Software Agency
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
              <FaStar className="w-3 h-3 text-orange-400" />
              4.8
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
  Trusted by{" "}
  <span className="relative">
    <span className="relative z-10">innovative brands</span>
    <motion.span
      className="absolute bottom-1 left-0 w-full h-3 bg-orange-400/30 dark:bg-orange-500/25 z-0 rounded-sm"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0 }}
    />
  </span>
  {" "}worldwide.
</h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
            Trusted by startups, business, and growing brands to deliver high-quality software, UI/UX design, and digital innovation.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Badge label="Top Development Agency" sub="2026" />
            <Badge label="Client Satisfaction" sub="98% Positive" />
            <Badge label="Most Recommended" sub="Tech Services" />
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-orange-400", "bg-blue-500", "bg-orange-600", "bg-blue-700"].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full border-2 border-slate-50 dark:border-slate-900 ${c}`} />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                120+ successful digital projects
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {[1,2,3,4,5].map(s => (
                  <FaStar key={s} className="w-3.5 h-3.5 text-orange-400" />
                ))}
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-1 font-medium">4.8 / 5</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right – scrolling columns */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <ScrollColumn items={testimonials} speed={28} direction={1} />
          <ScrollColumn items={testimonialsCol2} speed={22} direction={-1} />
        </motion.div>
      </div>
    </section>
  );
}