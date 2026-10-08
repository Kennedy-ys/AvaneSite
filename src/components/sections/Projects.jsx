import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoArrowForward } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const Projects = ({
  projects = [],
  ProjectContext = {},
  limit = 3,
  showViewAll = true,
  viewAllLink,
  viewAllText,
}) => {
  // Use safe default text values if context tokens are omitted
  const {
    title = "Case Studies",
    heading1 = "Selected",
    heading2 = "Design Proof",
    description = "Real products built for real users, proving that human-centric experiences catalyze massive business scale.",
    headerLineColor = "orange",
    gradientHeadingClasses = "from-blue-600 to-cyan-500",
    serviceType,
  } = ProjectContext;

  const targetCategory = serviceType;
  const computedViewAllLink =
    viewAllLink ||
    (targetCategory && targetCategory !== "All"
      ? `/projects?category=${encodeURIComponent(targetCategory)}`
      : "/projects");

  const computedViewAllText =
    viewAllText ||
    (targetCategory && targetCategory !== "All"
      ? `View All ${targetCategory} Projects`
      : "View All Projects");

  // Display only 3 projects when limit is set
  const displayedProjects =
    typeof limit === "number" && limit > 0
      ? projects.slice(0, limit)
      : projects;

  return (
    <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#0d1527] transition-colors duration-300">
      {/* Background Micro Decorative Details */}
      <div className="absolute left-1/3 top-1/2 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left max-w-xl space-y-4">
            <div className="flex items-center gap-2">
              <span className={`block w-6 h-0.5 bg-${headerLineColor}-500`} />
              <span
                className={`text-xs font-bold uppercase tracking-widest text-${headerLineColor}-500`}
              >
                {title}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              {heading1} <br />
              <span
                className={`text-transparent bg-clip-text bg-linear-to-r ${gradientHeadingClasses}`}
              >
                {heading2}
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-5 max-w-md">
            <p className="text-slate-600 dark:text-gray-400 font-light text-base md:text-lg leading-relaxed text-left md:text-right">
              {description}
            </p>
            {showViewAll && (
              <div className="hidden md:block">
                <Button
                  as={Link}
                  to={computedViewAllLink}
                  size={16}
                  btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500"
                  btnBgHover="bg-blue-700"
                  btnTxtColor="text-white"
                  icon={<LuArrowUpRight className="text-blue-500" size={19} />}
                >
                  {computedViewAllText}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Case Studies Staggered Flex Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {displayedProjects.map((project, index) => {
            const resolvedLink = project.link
              ? project.link.startsWith("http") || project.link.startsWith("/")
                ? project.link
                : `/${project.link}`
              : "/projects";
            const isExternal = resolvedLink.startsWith("http");

            const CardComponent = isExternal ? motion.a : motion(Link);
            const linkProps = isExternal
              ? { href: resolvedLink, target: "_blank", rel: "noreferrer" }
              : { to: resolvedLink };

            return (
              <CardComponent
                key={index}
                {...linkProps}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -12 }}
                whileTap={{ y: -12 }}
                className="relative aspect-3/4 rounded-3xl overflow-hidden group shadow-lg border border-slate-100 dark:border-white/5 flex flex-col justify-end p-6 dark:shadow-none bg-slate-900 cursor-pointer"
              >
                {/* Image Asset Container Wrapper (Scales smoothly on container focus) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-all duration-700 opacity-80 dark:opacity-75 group-hover:opacity-60 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                  {/* Dark Vignette Overlay for uniform baseline text protection */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:via-slate-950/60" />
                </div>

                {/* Top Dynamic Metric Floating Pill Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span
                    className={`inline-block text-xs font-black text-white px-3.5 py-1.5 rounded-full bg-linear-to-r ${project.accentColor} shadow-md`}
                  >
                    {project.metric}
                  </span>
                </div>

                {/* Bottom Interactive UI Information Box */}
                <div className="relative z-10 w-full flex flex-col items-start text-left transition-transform duration-300 transform group-hover:-translate-y-1">
                  <span className="text-xs font-bold text-cyan-400 dark:text-cyan-400 uppercase tracking-widest mb-1.5">
                    {project.category}
                  </span>

                  <div className="flex items-start justify-between w-full gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    {/* High-contrast Arrow Indicator Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 text-white transform transition-all duration-300 group-hover:bg-white group-hover:text-slate-950 group-hover:-rotate-45">
                      <IoArrowForward size={18} />
                    </div>
                  </div>
                </div>

                {/* Secondary Card Inner Ambient Border Highlight Line on Hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300 pointer-events-none group-hover:border-white/10" />
              </CardComponent>
            );
          })}
        </motion.div>

        {/* Bottom View All Button */}
        {showViewAll && (
          <div className="mt-14 flex justify-center">
            <Button
              as={Link}
              to={computedViewAllLink}
              size={18}
              btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500"
              btnBgHover="bg-blue-700"
              btnTxtColor="text-white"
              icon={<LuArrowUpRight className="text-blue-500" size={20} />}
            >
              {computedViewAllText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
