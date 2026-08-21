import React, { useEffect, useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import heroimg from "../assets/images/Teamwork.webp";
import BlogImg1 from "../assets/images/BlogImg1.webp";
import BlogImg2 from "../assets/images/BlogImg2.webp";
import BlogImg3 from "../assets/images/BlogImg3.webp";
import { motion, AnimatePresence } from "motion/react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { IoTimeOutline, IoChatbubbleOutline, IoCheckmarkCircle } from "react-icons/io5";

const Blog = () => {
  // Mock data for the main grid cards
  // const mainArticles = [
  //   {
  //     id: 1,
  //     category: "Home Buying",
  //     title: "Finding Your Dream Home Made Simple",
  //     desc: "Explore verified property listings and discover homes that match your lifestyle and budget with ease",
  //     image: "",
  //   },
  //   {
  //     id: 2,
  //     category: "Food Connect",
  //     title: "Connect with restaurants and other food vendors",
  //     desc: "Book tables, order takeouts from the comfort of your home",
  //     image: "",
  //   },
  //   {
  //     id: 3,
  //     category: "Real Estate",
  //     title: "Homxe",
  //     desc: "Cutting off of Agents",
  //     image: "",
  //   },
  //   {
  //     id: 4,
  //     category: "Real Estate",
  //     title: "Homxe",
  //     desc: "Cutting off of Agents",
  //     image: "",
  //   },
  //   {
  //     id: 5,
  //     category: "Real Estate",
  //     title: "Homxe",
  //     desc: "Cutting off of Agents",
  //     image: "",
  //   },
  //   {
  //     id: 6,
  //     category: "Real Estate",
  //     title: "Homxe",
  //     desc: "Cutting off of Agents",
  //     image: "",
  //   },
  // ];

  // //Mock data for sidebar lists
  // const sidebarArticles = [
  //   {
  //     id: 1,
  //     date: "19th June, 2026",
  //     title: "loremtyfyfgyhgfvghf",
  //     image: "",
  //   },
  //   {
  //     id: 2,
  //     date: "19th June, 2026",
  //     title: "loremtyfyfgyhgfvghf",
  //     image: "",
  //   },
  //   {
  //     id: 3,
  //     date: "19th June, 2026",
  //     title: "loremtyfyfgyhgfvghf",
  //     image: "",
  //   },
  // ];

  const featuredPosts = [
    {
      id: 1,
      tag: "Trending Today!",
      title: "Reimagining Housing in Africa: The HomXe Story",
      excerpt: "Born in early 2023 from a simple yet powerful vision, HomXe set out to make home management smarter, easier, and more accessible for millions across Africa. Here's how a bold idea grew into a platform transforming the housing experience without the usual stress or expense.",
      author: "HomXe Editorial Team",
      authorAvatar: "https://pbs.twimg.com/media/HPVcgLQWgAAG79k?format=jpg&name=large",
      verified: true,
      readTime: "6 min read",
      commentsCount: 42,
      image: "https://pbs.twimg.com/media/HLpLMM8WEAAxctB?format=jpg&name=small",
      imageCaption: "Not just a platform. A home revolution.",
    },
    {
      id: 2,
      tag: "Trending Today!",
      title: "The Death of Monoliths: Micro-Frontends & Server-Driven UI in 2026",
      excerpt: "Modern web architectures are shifting beyond simple SSR. We break down how top engineering teams orchestrate isolated runtime modules, cut bundle sizes by 60%, and deploy zero-downtime micro-frontends at scale.",
      author: "Avane Tech Radar",
      verified: true,
      authorAvatar: "https://avatars.githubusercontent.com/u/105855634?v=4",
      readTime: "8 min read",
      commentsCount: 24,
      image: BlogImg1,
      imageCaption: "Not just code. An ecosystem.",
    },
    {
      id: 3,
      tag: "Architecture Deep-Dive",
      title: "Tailwind v4 & Dynamic Design Systems: The Complete Layout Guide",
      excerpt: "Explore the internal engine behind variable CSS container queries, subgrid setups, and zero-runtime micro-interactions. Learn how to construct hyper-responsive, dark-mode-first interfaces without style bloat.",
      author: "UI System Labs",
      verified: true,
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLQP4l42cnK71y9NAfVbk6wYzw6z6yCrrwId5WPlAETnYyV7FLBuQ=s288-c-no",
      readTime: "12 min read",
      commentsCount: 42,
      image: BlogImg2,
      imageCaption: "Precision-engineered interfaces.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const activePost = featuredPosts[currentIndex];

  // Auto-rotate posts every 20 secs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 20000);
    return () => clearInterval(interval);
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length,
    );
  };

  return (
    <div>
      {/* --- HERO SECTION ---*/}
      <HeroSection
        heading="Blog"
        subText="Explore our latest articles, insights, and updates on real estate trends, investment strategies, and market analysis. Stay informed and make informed decisions with our expert content."
        HeroImg={heroimg}
      />
      {/* Featured Blog Section */}
      <section className="bg-white dark:bg-[#03060d] py-16 px-6 lg:px-12 transition-colors duration-300 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          {/* Main Content Split Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-115">
            {/* LEFT COLUMN: ARTICLE CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePost.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Category Pill Tag */}
                  <div className="inline-block">
                    <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold tracking-wider uppercase font-mono">
                      {activePost.tag}
                    </span>
                  </div>

                  {/* Article Main Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                    {activePost.title}
                  </h1>

                  {/* Excerpt Body Paragraph */}
                  <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                    {activePost.excerpt}{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
                    >
                      Read More...
                    </a>
                  </p>

                  {/* Author Metadata Badge */}
                  <div className="flex items-center gap-2.5 pt-2">
                    <img
                      src={activePost.authorAvatar}
                      alt={activePost.author}
                      className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-white/10"
                    />
                    <span className="font-bold text-xs md:text-sm text-slate-900 dark:text-white flex items-center gap-1">
                      {activePost.author}
                      {activePost.verified && (
                        <IoCheckmarkCircle className="text-blue-600 dark:text-blue-400 text-base" />
                      )}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Reading Duration & Engagement Metrics Row */}
              <div className="flex items-center gap-6 pt-4 text-xs md:text-sm font-mono text-slate-500 dark:text-gray-400 border-t border-slate-100 dark:border-white/5">
                <span className="flex items-center gap-2">
                  <IoTimeOutline className="text-base text-blue-600 dark:text-blue-400" />
                  {activePost.readTime}
                </span>
                <span className="w-px h-4 bg-slate-200 dark:bg-white/10" />
                <span className="flex items-center gap-2">
                  <IoChatbubbleOutline className="text-base text-blue-600 dark:text-blue-400" />
                  {activePost.commentsCount} Comments
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: FEATURED MEDIA FRAME */}
            <div className="lg:col-span-6 relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePost.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative aspect-16/10 md:aspect-video rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-2xl group"
                >
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay for Caption Readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6 text-center">
                    <p className="text-white text-lg md:text-2xl font-light tracking-wide font-sans">
                      {activePost.imageCaption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* BOTTOM NAVIGATIONAL CONTROL & INDICATOR ROW */}
          <div className="flex items-center justify-between pt-6">
            {/* Progress Segmented Dash Indicators */}
            <div className="flex items-center gap-2">
              {featuredPosts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-10 bg-slate-900 dark:bg-white"
                      : "w-6 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Directional Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Previous Post"
              >
                <HiArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Next Post"
              >
                <HiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
