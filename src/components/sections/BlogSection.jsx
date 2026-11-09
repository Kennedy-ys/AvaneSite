import { Link } from "react-router-dom";
import { MotionConfig, motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import Button from "../ui/Button";
import PostCard from "../ui/PostCard";
import { blogs, blogContext } from "../../data/blogs";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ViewAllButton = ({ to, size, iconSize, children }) => (
  <Button
    as={Link}
    to={to}
    size={size}
    btnBgColor="bg-linear-to-r from-orange-500 to-amber-500"
    btnBgHover="bg-orange-600"
    btnTxtColor="text-white"
    icon={<LuArrowUpRight className="text-orange-500" size={iconSize} />}
  >
    {children}
  </Button>
);

const BlogSection = ({
  posts = blogs.slice(0, 3),
  showViewAll = true,
  viewAllLink = "/blog",
  viewAllText = "View All Articles",
}) => {
  const { title, heading1, heading2, description } = blogContext;
  const [leadPost, ...otherPosts] = posts;

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-slate-50 dark:bg-[#090f1d] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
        {/* Background Ambient Glow */}
        <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="flex flex-col items-start text-left max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="block w-6 h-0.5 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
                  {title}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
                {heading1} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-amber-500 to-yellow-500">
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
                  <ViewAllButton to={viewAllLink} size={16} iconSize={19}>
                    {viewAllText}
                  </ViewAllButton>
                </div>
              )}
            </div>
          </div>

          {/* Lead post with the next posts beside it */}
          {leadPost && (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <PostCard
                  post={leadPost}
                  layout="lead"
                  to={`/blog/${leadPost.slug}`}
                />
              </motion.div>

              {otherPosts.length > 0 && (
                <div className="lg:col-span-5 grid auto-rows-fr gap-6 lg:gap-8">
                  {otherPosts.map((post) => (
                    <motion.div key={post.id} variants={itemVariants}>
                      <PostCard
                        post={post}
                        layout="row"
                        to={`/blog/${post.slug}`}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* The desktop button sits in the header, so this one is for phones */}
          {showViewAll && (
            <div className="mt-12 flex justify-center md:hidden">
              <ViewAllButton to={viewAllLink} size={18} iconSize={20}>
                {viewAllText}
              </ViewAllButton>
            </div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
};

export default BlogSection;
