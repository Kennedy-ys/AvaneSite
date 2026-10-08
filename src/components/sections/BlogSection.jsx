import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IoTimeOutline, IoCalendarOutline, IoCheckmarkCircle } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import Button from "../ui/Button";
import { blogs as defaultBlogs, blogContext as defaultContext } from "../../data/blogs";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BlogSection = ({
  posts = defaultBlogs.slice(0, 3),
  blogContext = defaultContext,
  showViewAll = true,
  viewAllLink = "/blog",
  viewAllText = "View All Articles",
}) => {
  const {
    title = "Insights & Perspectives",
    heading1 = "Latest News &",
    heading2 = "Tech Insights",
    description = "Explore in-depth articles, engineering breakdowns, design system architectures, and startup growth insights curated by our team.",
    headerLineColor = "orange",
    gradientHeadingClasses = "from-orange-500 via-amber-500 to-yellow-500",
  } = blogContext || {};

  return (
    <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-50/70 dark:bg-[#090f1d] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
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
                  to={viewAllLink}
                  size={16}
                  btnBgColor="bg-linear-to-r from-orange-500 to-amber-500"
                  btnBgHover="bg-orange-600"
                  btnTxtColor="text-white"
                  icon={<LuArrowUpRight className="text-orange-500" size={19} />}
                >
                  {viewAllText}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.id || index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-white dark:bg-[#0d1628] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/5 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Media Thumbnail */}
              <Link
                to={viewAllLink}
                className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900 block"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-white border border-white/10 shadow-sm">
                    {post.category || post.tag}
                  </span>
                </div>
              </Link>

              {/* Content Box */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between text-left space-y-4">
                <div className="space-y-3">
                  {/* Meta Details Row */}
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-gray-400">
                    {post.date && (
                      <span className="flex items-center gap-1.5">
                        <IoCalendarOutline className="text-orange-500 text-sm" />
                        {post.date}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <IoTimeOutline className="text-orange-500 text-sm" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                    <Link to={viewAllLink}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author and Read More Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {post.authorAvatar && (
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-white/10"
                      />
                    )}
                    <span className="text-xs font-bold text-slate-800 dark:text-gray-200 flex items-center gap-1">
                      {post.author}
                      {post.verified && (
                        <IoCheckmarkCircle className="text-blue-500 text-sm" />
                      )}
                    </span>
                  </div>

                  <Link
                    to={viewAllLink}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <span>Read</span>
                    <LuArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom View All Button */}
        {showViewAll && (
          <div className="mt-14 flex justify-center">
            <Button
              as={Link}
              to={viewAllLink}
              size={18}
              btnBgColor="bg-linear-to-r from-orange-500 to-amber-500"
              btnBgHover="bg-orange-600"
              btnTxtColor="text-white"
              icon={<LuArrowUpRight className="text-orange-500" size={20} />}
            >
              {viewAllText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
