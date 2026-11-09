import { Link, useParams } from "react-router-dom";
import { MotionConfig, motion } from "motion/react";
import { HiArrowLeft } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import PostCard, { AuthorAvatar } from "../components/ui/PostCard";
import { blogs, formatPostDate } from "../data/blogs";

const BackToBlog = () => (
  <Link
    to="/blog"
    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-orange-700 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
  >
    <HiArrowLeft size={16} />
    All Articles
  </Link>
);

const ArticleBody = ({ body }) => (
  <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700 dark:text-gray-300">
    {body.map((block, index) =>
      typeof block === "string" ? (
        <p key={index}>{block}</p>
      ) : (
        <h2
          key={index}
          className="pt-4 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {block.heading}
        </h2>
      ),
    )}
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((candidate) => candidate.slug === slug);

  if (!post) {
    return (
      <section className="min-h-[70vh] pt-36 pb-20 px-6 flex flex-col items-center justify-center gap-6 text-center bg-slate-50 dark:bg-[#090f1d]">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
          Article not found
        </h1>
        <p className="font-light text-slate-600 dark:text-gray-400">
          This article may have moved or no longer exists.
        </p>
        <BackToBlog />
      </section>
    );
  }

  const morePosts = blogs
    .filter((candidate) => candidate.id !== post.id)
    .slice(0, 3);

  return (
    <MotionConfig reducedMotion="user">
      <article className="pt-32 pb-16 px-6 lg:px-12 bg-white dark:bg-[#0d1527] transition-colors duration-300">
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-left"
        >
          <header className="max-w-3xl mx-auto space-y-5">
            <BackToBlog />
            <p className="text-xs font-bold uppercase tracking-widest text-orange-700 dark:text-orange-400">
              {post.category}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-gray-400">
              <span className="flex items-center gap-2.5 font-bold text-slate-800 dark:text-gray-200">
                <AuthorAvatar src={post.authorAvatar} name={post.author} />
                {post.author}
                {post.verified && (
                  <IoCheckmarkCircle
                    role="img"
                    aria-label="Verified"
                    className="text-blue-600 dark:text-blue-400 shrink-0"
                  />
                )}
              </span>
              <span className="flex items-center gap-2">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </span>
            </div>
          </header>

          <figure className="mt-10">
            <div className="aspect-16/9 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900">
              <img
                src={post.image}
                alt=""
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {post.imageCaption && (
              <figcaption className="mt-3 text-center text-sm font-light text-slate-500 dark:text-gray-400">
                {post.imageCaption}
              </figcaption>
            )}
          </figure>

          <div className="max-w-3xl mx-auto mt-10 space-y-8">
            <p className="text-lg md:text-xl font-light leading-relaxed text-slate-700 dark:text-gray-300">
              {post.excerpt}
            </p>

            {post.body?.length > 0 ? (
              <ArticleBody body={post.body} />
            ) : (
              <p className="px-5 py-4 rounded-2xl text-sm border border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                The full article is coming soon.
              </p>
            )}
          </div>
        </motion.div>
      </article>

      {morePosts.length > 0 && (
        <section className="py-20 px-6 lg:px-12 bg-slate-50 dark:bg-[#090f1d] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-8 text-2xl sm:text-3xl font-black uppercase tracking-tight text-left text-slate-900 dark:text-white">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {morePosts.map((morePost) => (
                <PostCard
                  key={morePost.id}
                  post={morePost}
                  to={`/blog/${morePost.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </MotionConfig>
  );
};

export default BlogPost;
