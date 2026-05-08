import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";

const testimonials = [
  {
    rating: 5,
    text: "Nory's inventory system keeps everything in check, reducing waste and improving stock accuracy. The work scheduling feature is seamless, helping our team stay organised.",
    author: "Paul T.",
    company: "CUPP",
    initials: "PT",
    color: "bg-orange-500",
  },
  {
    rating: 5,
    text: "Nory has been a game-changer in streamlining our day-to-day operations across multiple gelato locations. The dashboard is intuitive, onboarding new staff is seamless, and customer support is always responsive.",
    author: "Faraj F.",
    company: "Badiani",
    initials: "FF",
    color: "bg-blue-600",
  },
  {
    rating: 4,
    text: "Booking off holiday and keeping track of shifts has never been easier. The interface is clean and our whole team picked it up within a day.",
    author: "Ollie C.",
    company: "Pizzarova",
    initials: "OC",
    color: "bg-orange-400",
  },
  {
    rating: 5,
    text: "Nory is useful for every one in the business. From front-of-house to management, everyone has what they need at their fingertips.",
    author: "Matthew P.",
    company: "CUPP",
    initials: "MP",
    color: "bg-blue-500",
  },
  {
    rating: 5,
    text: "The reporting alone saves us hours every week. We can finally see which locations are performing and make decisions based on real data.",
    author: "Sarah K.",
    company: "Grind",
    initials: "SK",
    color: "bg-orange-600",
  },
  {
    rating: 5,
    text: "Switching to Nory cut our admin time in half. The integrations with our existing tools were painless and the support team is exceptional.",
    author: "James M.",
    company: "Flat Iron",
    initials: "JM",
    color: "bg-blue-700",
  },
];

const testimonialsCol2 = [
  {
    rating: 4,
    text: "Firstly, Nory is so user-friendly and makes it really easy to optimise everything they offer to benefit my day-to-day operations effectively and efficiently. It genuinely was a game-changer in my role of overseeing both franchise and equity stores.",
    author: "Alicia B.",
    company: "",
    initials: "AB",
    color: "bg-blue-600",
  },
  {
    rating: 5,
    text: "Nory is self-explanatory and easy to use. It's aesthetically pleasing and the onboarding was smooth from day one.",
    author: "Eliza J.",
    company: "Pizzarova",
    initials: "EJ",
    color: "bg-orange-500",
  },
  {
    rating: 5,
    text: "What I like best about Nory is that it brings both labour and COGS into one view. That visibility has completely changed how we manage costs.",
    author: "Mav L.",
    company: "Mavli",
    initials: "ML",
    color: "bg-blue-500",
  },
  {
    rating: 5,
    text: "The live sales data means I can spot issues the moment they happen, not the next morning. It's transformed how reactive we can be.",
    author: "Tom R.",
    company: "Honest Burgers",
    initials: "TR",
    color: "bg-orange-600",
  },
  {
    rating: 5,
    text: "Our GMs love the simplicity. The rota builder in particular has saved arguments and confusion every single week.",
    author: "Claire N.",
    company: "Stem + Glory",
    initials: "CN",
    color: "bg-blue-700",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5 mb-3">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        className={`w-4 h-4 ${s <= rating ? "text-orange-400 dark:text-orange-400" : "text-slate-200 dark:text-slate-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
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
  const y = useMotionValue(0);
  const containerRef = useRef(null);
  const duplicated = [...items, ...items];

  useAnimationFrame((t, delta) => {
    const el = containerRef.current;
    if (!el) return;
    const halfH = el.scrollHeight / 2;
    let next = y.get() + (delta / 1000) * speed * direction;
    if (direction === 1 && next >= halfH) next -= halfH;
    if (direction === -1 && next <= -halfH) next += halfH;
    y.set(next);
  });

  return (
    <div className="overflow-hidden h-130 relative">
      <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <motion.div ref={containerRef} style={{ y }}>
        {duplicated.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Badge = ({ label, sub }) => (
  <div className="flex flex-col items-center justify-center border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 w-24 text-center hover:border-orange-300 dark:hover:border-orange-700 transition-colors duration-300">
    <div className="flex items-center gap-0.5 mb-1">
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? "bg-orange-500" : "bg-blue-500"}`} />
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
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3.5 py-1.5 mb-6 shadow-sm">
            <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Top performer in Restaurant Management Software
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
              <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.8
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
            Don't take{" "}
            <span className="relative">
              <span className="relative z-10">our word</span>
              <motion.span
                className="absolute bottom-1 left-0 w-full h-3 bg-orange-400/30 dark:bg-orange-500/25 z-0 rounded-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>
            {" "}for it.{" "}
            <span className="text-orange-500 dark:text-orange-400">
              Take theirs.
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
            We're rated as one of the top restaurant management softwares by some of the best in the hospitality business.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Badge label="High Performer" sub="Fall 2025" />
            <Badge label="Users Love Us" sub="Milestone" />
            <Badge label="Users Most Likely To Recommend" sub="Fall 2025" />
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-orange-400", "bg-blue-500", "bg-orange-600", "bg-blue-700"].map((c, i) => (
                <div key={i} className={`w-9 h-9 rounded-full border-2 border-slate-50 dark:border-slate-900 ${c}`} />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                500+ happy restaurants
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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