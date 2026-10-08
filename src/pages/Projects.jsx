import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import HeroSection from "../components/sections/HeroSection";
import CTA from "../components/sections/Call-To-Action";
import heroImg from "../assets/images/Teamwork.webp";
import { allProjectsList } from "../data/projects";
import { IoArrowForward } from "react-icons/io5";

const categories = [
  "All",
  "Development",
  "UI/UX Design",
  "Cybersecurity",
  "Data Analysis",
  "Graphic Design",
  "Project Management",
  "Research",
  "Social Media",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
    categoryParam && categories.includes(categoryParam) ? categoryParam : "All"
  );

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("All");
    }
  }, [categoryParam]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProjects =
    activeCategory === "All"
      ? allProjectsList
      : allProjectsList.filter(
          (project) => project.serviceType === activeCategory,
        );


  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heading="Our Projects"
        subText="Explore our comprehensive portfolio of high-impact case studies across enterprise engineering, human-centric design, robust cybersecurity, and data intelligence."
        HeroImg={heroImg}
      />

      {/* Projects Showcase & Filter Section */}
      <section className="py-20 px-6 lg:px-12 bg-white dark:bg-[#0d1527] transition-colors duration-300 relative overflow-hidden">
        {/* Micro Glow */}
        <div className="absolute left-1/4 top-10 w-96 h-96 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-10 bottom-20 w-80 h-80 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? allProjectsList.length
                  : allProjectsList.filter(
                      (p) => p.serviceType === category,
                    ).length;

              return (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                      : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const resolvedLink = project.link
                  ? project.link.startsWith("http") || project.link.startsWith("/")
                    ? project.link
                    : `/${project.link}`
                  : "#";
                const isExternal = resolvedLink.startsWith("http");
                const CardTag = isExternal ? motion.a : motion(Link);
                const linkProps = isExternal
                  ? { href: resolvedLink, target: "_blank", rel: "noreferrer" }
                  : { to: resolvedLink };

                return (
                  <CardTag
                    key={`${project.title}-${index}`}
                    {...linkProps}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="relative aspect-3/4 rounded-3xl overflow-hidden group shadow-lg border border-slate-100 dark:border-white/5 flex flex-col justify-end p-6 bg-slate-900 cursor-pointer"
                  >
                    {/* Background Asset Image */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-all duration-700 opacity-80 dark:opacity-75 group-hover:opacity-60 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:via-slate-950/60" />
                    </div>

                    {/* Floating Metric Pill */}
                    <div className="absolute top-5 left-5 z-20">
                      <span
                        className={`inline-block text-xs font-black text-white px-3.5 py-1.5 rounded-full bg-linear-to-r ${project.accentColor} shadow-md`}
                      >
                        {project.metric}
                      </span>
                    </div>

                    {/* Info Box */}
                    <div className="relative z-10 w-full flex flex-col items-start text-left transition-transform duration-300 transform group-hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
                          {project.category}
                        </span>
                        <span className="text-white/40 text-xs">•</span>
                        <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                          {project.serviceType}
                        </span>
                      </div>

                      <div className="flex items-start justify-between w-full gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                          {project.title}
                        </h3>

                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 text-white transform transition-all duration-300 group-hover:bg-white group-hover:text-slate-950 group-hover:-rotate-45">
                          <IoArrowForward size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300 pointer-events-none group-hover:border-white/10" />
                  </CardTag>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        text="Ready to Build Your Next Big Solution With Us?"
        ctaText="Start Your Project"
      />
    </>
  );
};

export default ProjectsPage;
