import React, { useEffect, useRef, useState } from "react";
import {
  useInView,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import {
  IoLayersOutline,
  IoColorPaletteOutline,
  IoCodeSlashOutline,
  IoGitBranchOutline,
  IoPieChartOutline,
  IoTerminalOutline,
  IoRibbonOutline,
  IoSchool,
} from "react-icons/io5";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Button from "../components/ui/Button";
import Courses from "../components/sections/Courses";
import LMImage from "../assets/images/CertLight.webp";
import DMImage from "../assets/images/CertDark.webp";
import TrackImg from "../assets/images/CertDark.webp";
import { BiSolidCustomize } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";

const Academy = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const trainingData = [
    {
      id: 1,
      title: "Looking for specific training content?",
      description:
        "Learn new skills and with step-by-step guidance. Start your journey today by exploring our learning paths, modules, and courses.",
      buttonText: "Browse Courses",
      icon: <FaBookReader className="text-blue-600" />,
      imageSrc:
        "https://images.pexels.com/photos/10376161/pexels-photo-10376161.jpeg",
      imageAlt: "A man reviewing code on screen",
    },
    {
      id: 2,
      title: "Working towards a career goal?",
      description:
        "There are over 700 K job listings seeking candidates with technical skills. Explore training and credentials aligned with your career goals.",
      buttonText: "Explore goals",
      icon: <MdOutlineTravelExplore className="text-blue-600" />,
      imageSrc:
        "https://images.pexels.com/photos/13625212/pexels-photo-13625212.jpeg",
      imageAlt:
        "Free Close-up of a wooden directional signpost with an arrow against a natural landscape backdrop.",
    },
  ];

  const statsData = [
    {
      id: 1,
      value: 4800,
      suffix: "",
      label: "Engineers expanded careers via Avane Learn platforms",
      useLocale: true,
    },
    {
      id: 2,
      value: 310,
      suffix: "+",
      label: "Interactive active sandbox environments hosted",
      useLocale: true,
    },
    {
      id: 3,
      value: 12200,
      suffix: "",
      label: "Enterprise core platform repositories deployed",
      subLabel: "As of fiscal 2026",
      useLocale: true,
    },
    {
      id: 4,
      value: 95,
      suffix: "%",
      label: "Students obtained a career and/or educational opportunity.",
      useLocale: true,
    },
    {
      id: 5,
      value: 97,
      suffix: "%",
      label: "Alumni reported significant structural design ownership gains",
      useLocale: true,
    },
  ];

  const certificationStats = [
    {
      id: 1,
      value: 96,
      text: "of IT decision-makers believe that certified staff add value to their organization.",
    },
    {
      id: 2,
      value: 35,
      text: "earned a pay increase of 20% or more after becoming certified.",
    },
    {
      id: 3,
      value: 27,
      text: "received a promotion after earning a certification.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }, // Slight delay before initiating the next card sequence
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Conceptually aligned data matrix reflecting technical architecture tracks
  const categories = [
    {
      id: 1,
      title: "UI/UX & Bento Architecture",
      count: "42+ Track Modules",
      icon: (
        <IoColorPaletteOutline className="text-blue-600 dark:text-blue-400" />
      ),
      bgGlow: "group-hover:bg-blue-500/10",
    },
    {
      id: 2,
      title: "Frontend Engineering & Systems",
      count: "128+ Track Modules",
      icon: (
        <IoCodeSlashOutline className="text-indigo-600 dark:text-indigo-400" />
      ),
      bgGlow: "group-hover:bg-indigo-500/10",
    },
    {
      id: 3,
      title: "State Orchestration & Logic",
      count: "35+ Track Modules",
      icon: (
        <IoLayersOutline className="text-emerald-600 dark:text-emerald-400" />
      ),
      bgGlow: "group-hover:bg-emerald-500/10",
    },
    {
      id: 4,
      title: "CI/CD Deployment & Git Pipelines",
      count: "18+ Track Modules",
      icon: (
        <IoGitBranchOutline className="text-amber-600 dark:text-amber-400" />
      ),
      bgGlow: "group-hover:bg-amber-500/10",
    },
    {
      id: 5,
      title: "Advanced Interactions & Motion",
      count: "56+ Track Modules",
      icon: (
        <IoTerminalOutline className="text-fuchsia-600 dark:text-fuchsia-400" />
      ),
      bgGlow: "group-hover:bg-fuchsia-500/10",
    },
    {
      id: 6,
      title: "Performance Metrics & Analytics",
      count: "24+ Track Modules",
      icon: <IoPieChartOutline className="text-rose-600 dark:text-rose-400" />,
      bgGlow: "group-hover:bg-rose-500/10",
    },
  ];

  function Counter({
    value,
    suffix = "",
    className = "",
    useLocaleString = false,
  }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);

    // Format the raw numbers cleanly with commas
    const formattedValue = useTransform(count, (latest) => {
      const rounded = Math.floor(latest);
      return useLocaleString ? rounded.toLocaleString() : rounded;
    });

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, value, {
          duration: 2,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }, [isInView, count, value]);

    return (
      <span ref={ref} className={className}>
        <motion.span>{formattedValue}</motion.span>
        {suffix}
      </span>
    );
  }

  // Scroll button state management to determine if the user can scroll left or right
  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth, firstElementChild } =
        scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);

      // Dynamic Dot Calculation
      if (firstElementChild) {
        // Measures the real card width including the gap
        const cardItemWidth = firstElementChild.offsetWidth + 24;

        // Calculate which item index is closest to the left edge of the scroll container
        const exactIndex = Math.round(scrollLeft / cardItemWidth);
        setActiveIndex(exactIndex);
      }
    }
  };
  // Scroll button click handler to scroll the carousel left or right by a fixed offset
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleDotClick = (index) => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardItemWidth =
        scrollRef.current.firstElementChild.offsetWidth + 24;

      // Explicitly scroll to the specific card index position
      scrollRef.current.scrollTo({
        left: index * cardItemWidth,
        behavior: "smooth",
      });
    }
  };

  // Effect hook to add event listeners for scroll and resize events, and clean them up on mount/unmount
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      // Run initial configuration checks
      updateScrollButtons();
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-[#03060d] transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 bg-linear-to-b from-white to-slate-50 dark:from-[#03060d] dark:to-[#010205] transition-colors duration-300 overflow-hidden">
        {/* 1. Structural Education Grid Background Pattern */}
        <div className="absolute inset-0 bg-[radial-linear(#2563eb08_1.5px,transparent_1.5px)] bg-size-[28px_28px] pointer-events-none" />

        {/* Precision Royal Blue & Achievement Emerald Glow Fields */}
        <div className="absolute left-[-5%] top-1/4 w-125 h-125 bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-10 w-112.5 h-112.5 bg-emerald-600/5 blur-[130px] rounded-full pointer-events-none" />

        {/* Syllabi Mapping Overlay Alignment Guides Accent */}
        <div className="absolute left-12 top-1/4 bottom-1/4 w-32 hidden xl:flex items-center opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="60"
              r="16"
              stroke="#2563eb"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="50"
              y1="76"
              x2="50"
              y2="160"
              stroke="#2563eb"
              strokeWidth="1"
            />
            <rect
              x="25"
              y="160"
              width="50"
              height="40"
              rx="4"
              stroke="#059669"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="50"
              y1="200"
              x2="50"
              y2="284"
              stroke="#059669"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="300"
              r="16"
              stroke="#2563eb"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
          {/* LEFT COLUMN: CAPABILITY ACCELERATION COPY PANEL */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left space-y-5"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tagline Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200/40 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <IoSchool className="text-sm" />
              Welcome to Avane Learn
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-slate-900 dark:text-white leading-[0.95] tracking-tight">
              Discover <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-emerald-500">
                your path.
              </span>
            </h1>

            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl pt-1">
              Whether you're just starting in a career, or you're an experienced
              professional, our self-directed approach helps you arrive at your
              goals faster, with more confidence and at your own pace. Develop
              skills through interactive modules and paths or learn from an
              instructor. Learn and grow your way.
            </p>

            {/* Call-To-Action Button Loops */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-auto sm:w-full pt-4">
              <Button
                btnBgColor="bg-blue-600"
                btnBgHover="bg-blue-700"
                icon={<IoRibbonOutline className="text-blue-600" />}
              >
                Explore Learning Paths
              </Button>

              <Button
                as={Link}
                to="./signup"
                btnBgColor="bg-white/90"
                btnTxtColor="text-slate-800 group-hover:text-white"
                btnBgHover="bg-linear-to-r from-blue-600 to-indigo-500"
                iconBgColor="bg-indigo-600 group-hover:bg-white"
                icon={
                  <BiSolidCustomize className="text-white group-hover:text-indigo-600" />
                }
              >
                Customize Your Path
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE VISUAL PRODUCTION PICTURE HOUSING */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center relative w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* Internal Decorative Radial Flare Grid */}
            <div className="absolute w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 blur-[80px] rounded-full pointer-events-none z-0" />

            {/* Picture Housing Frame container */}
            <div className="relative w-full max-w-135 rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-100/40 dark:bg-slate-900/10 p-3 backdrop-blur-md shadow-2xl overflow-hidden group">
              {/* Native Light Mode Graphic */}
              <img
                src={LMImage}
                alt="Avane "
                className="w-full h-auto rounded-xl object-cover block dark:hidden transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* Native Dark Mode Graphic */}
              <img
                src={DMImage}
                alt="Avane "
                className="w-full h-auto rounded-xl object-cover hidden dark:block transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-slate-50 dark:bg-[#02040a] text-slate-900 dark:text-white py-24 px-6 md:px-12 flex flex-col gap-24 overflow-hidden border-y border-slate-100 dark:border-white/5">
        {trainingData.map((item, index) => {
          // Determining layout alignment based on odd or even index
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // md:flex-row places text left/image right. md:flex-row-reverse flips them.
              className={`flex flex-col items-center gap-8 md:gap-16 max-w-6xl mx-auto w-full ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Text Segment */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {item.title}
                </h2>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-base md:text-lg font-light max-w-xl">
                  {item.description}
                </p>
                <div>
                  <Button
                    btnBgColor="bg-linear-to-r from-blue-600 to-indigo-500"
                    btnBgHover="bg-blue-700"
                    icon={item.icon}
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </motion.div>

              {/* Image Segment */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-100/50 dark:bg-slate-900/20 p-2 backdrop-blur-md shadow-xl overflow-hidden aspect-16/10">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full h-full rounded-xl object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </section>

      <section className="bg-white dark:bg-[#03060d] py-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        {/* Top Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50/90 dark:bg-slate-900/10 rounded-2xl shadow-xl dark:shadow-slate-950 border border-slate-200/60 dark:border-white/5 p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1)),url('./assets/svgs/noise.svg')] pointer-events-none z-0" />
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center px-2 relative ${
                index !== 0
                  ? 'lg:before:content-[""] lg:before:absolute lg:before:-left-3 lg:before:top-2 lg:before:bottom-2 lg:before:w-px lg:before:bg-slate-200 dark:ld:before:bg-white/10'
                  : ""
              }`}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                useLocaleString={stat.useLocale}
                className="text-3xl md:text-[34px] font-bold text-slate-900 dark:text-white tracking-tight mb-2"
              />
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed font-medium">
                {stat.label}
              </p>
              {stat.subLabel && (
                <p className="text-[10px] text-blue-500 dark:text-blue-400 mt-2 font-bold uppercase tracking-wider font-mono">
                  {stat.subLabel}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        {/* Dynamic Trust Quote Accent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="w-14 h-14 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 shadow-inner animate-bounce">
            <FaQuoteLeft size={30} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight leading-[1.05] max-w-3xl">
            Over 4.8K Students <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-500">
              say Avane Learn helped them land a new job
            </span>
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-emerald-500 rounded-full mt-8 mb-8" />

          <p className="text-xs font-bold text-slate-400 dark:text-gray-500 tracking-widest uppercase font-mono">
            Browse structured learning layers below to begin your setup.
          </p>
        </motion.div>
      </section>

      <section className="bg-white dark:bg-[#050811] py-20 px-6 lg:px-12 transition-colors duration-300 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          {/* Section Heading Setup matching layout blueprint structure */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              Top Categories
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed">
              Explore highly-curated, structured engineering pathways
              specialized to accelerate production readiness.
            </p>
          </div>

          {/* Horizontal Carousel Viewport Container */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="min-w-65 md:min-w-70 flex-1 snap-start group relative rounded-2xl border border-slate-100 dark:border-white/5 bg-linear-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950/20 p-8 flex flex-col items-center text-center justify-between shadow-xs hover:shadow-md hover:border-slate-200 dark:hover:border-white/10 transition-all duration-300"
                whileHover={{ y: -4 }}
                whileTap={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Overlapping Background Micro Glow Ring mapping back to image layouts */}
                <div
                  className={`w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 transition-all duration-300 ${category.bgGlow}`}
                >
                  {category.icon}
                </div>

                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-gray-100 tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 dark:text-gray-500 font-mono uppercase">
                    {category.count}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigational Control Layout */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg transition-all ${
                canScrollLeft
                  ? "border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer"
                  : "border-slate-100 dark:border-white/5 text-slate-300 dark:text-gray-700 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <HiArrowLeft />
            </button>

            {/* Indicator Dot Sequence Matrix */}
            <div className="flex items-center gap-1.5">
              {categories.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-label={`Go to Slide ${i + 1}`}
                  aria-selected={i === activeIndex}
                  onClick={() => handleDotClick(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-3 bg-indigo-600 dark:bg-indigo-500" : "w-1.5 bg-slate-200 dark:bg-gray-800"}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg transition-all ${
                canScrollRight
                  ? "border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer"
                  : "border-slate-100 dark:border-white/5 text-slate-300 dark:text-gray-700 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>
      </section>

      <Courses />

      <section className="relative text-slate-900 dark:text-white py-24 px-6 md:px-12 flex flex-col items-center border-t border-slate-100 dark:border-white/5 overflow-hidden bg-slate-50/50 dark:bg-[#02050b]">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb04_1.5px,transparent_1.5px)] bg-size-[32px_32px] pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white"
          >
            Why Get Certified?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed max-w-md mx-auto"
          >
            Earn industry-recognized credentials to show the value of your
            skills.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 max-w-6xl w-full mx-auto items-start mb-16 relative z-10"
        >
          {certificationStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`flex flex-col items-center text-center px-6 md:px-12 relative ${
                index !== 0
                  ? "md:border-l md:border-slate-200 dark:md:border-white/10"
                  : ""
              }`}
            >
              <div className="mb-4 h-16 flex items-center justify-center">
                <Counter
                  value={stat.value}
                  suffix="%"
                  className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-emerald-500 tracking-tighter"
                />
              </div>

              <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 leading-relaxed font-light max-w-xs">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="relative z-10"
        >
          <Button
            btnBgColor="bg-linear-to-r from-blue-600 to-indigo-500"
            btnBgHover="bg-blue-700"
          >
            View Certifications
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Academy;
