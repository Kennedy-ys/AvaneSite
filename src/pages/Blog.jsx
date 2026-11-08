import { useSearchParams } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import HeroSection from "../components/sections/HeroSection";
import CTA from "../components/sections/Call-To-Action";
import PostCard from "../components/ui/PostCard";
import heroimg from "../assets/images/Teamwork.webp";
import { blogs, blogContext } from "../data/blogs";

const ALL = "All";
const categories = [ALL, ...new Set(blogs.map((post) => post.category))];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedCategory = searchParams.get("category");
  const activeCategory = categories.includes(requestedCategory)
    ? requestedCategory
    : ALL;

  const posts =
    activeCategory === ALL
      ? blogs
      : blogs.filter((post) => post.category === activeCategory);
  const [featuredPost, ...otherPosts] = posts;

  return (
    <MotionConfig reducedMotion="user">
      <HeroSection
        heading="Blog"
        subText={blogContext.description}
        HeroImg={heroimg}
      />

      <section className="py-20 px-6 lg:px-12 relative overflow-hidden bg-slate-50 dark:bg-[#090f1d] transition-colors duration-300">
        <div className="absolute left-1/4 top-10 w-96 h-96 bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-10 bottom-20 w-80 h-80 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Category Filter */}
          <div
            role="group"
            aria-label="Filter articles by category"
            className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
          >
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() =>
                    setSearchParams(category === ALL ? {} : { category })
                  }
                  className={`px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <PostCard
                post={featuredPost}
                layout="feature"
                headingAs="h2"
                to={`/blog/${featuredPost.slug}`}
              />

              {otherPosts.length > 0 && (
                <>
                  <h2 className="mt-16 mb-8 text-2xl sm:text-3xl font-black uppercase tracking-tight text-left text-slate-900 dark:text-white">
                    More Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {otherPosts.map((post) => (
                      <PostCard
                        key={post.id}
                        post={post}
                        to={`/blog/${post.slug}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTA
        text="Ready to Transform Your Future With Us?"
        ctaText="Get Started"
      />
    </MotionConfig>
  );
};

export default Blog;
