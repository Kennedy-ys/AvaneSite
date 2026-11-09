import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { formatPostDate } from "../../data/blogs";

const LAYOUTS = {
  // Standard grid card
  card: {
    root: "flex flex-col",
    media: "aspect-16/10",
    body: "p-6 sm:p-7",
    title: "text-xl line-clamp-3",
    excerpt: "text-sm line-clamp-3",
  },
  // Large stacked card that leads a group of posts
  lead: {
    root: "flex flex-col",
    media: "aspect-16/10 lg:aspect-auto lg:flex-1 lg:min-h-72",
    body: "p-6 sm:p-8",
    title: "text-2xl sm:text-3xl",
    excerpt: "text-sm sm:text-base line-clamp-3",
    latest: true,
  },
  // Compact card: image beside the text from the sm breakpoint up
  row: {
    root: "flex flex-col sm:flex-row",
    media: "aspect-16/10 sm:aspect-auto sm:w-2/5 sm:shrink-0",
    body: "p-5 sm:p-6",
    title: "text-lg line-clamp-3",
    excerpt: "text-sm line-clamp-2",
  },
  // Full-width split with the article's image caption
  feature: {
    root: "grid grid-cols-1 lg:grid-cols-12",
    media: "aspect-16/10 lg:aspect-auto lg:col-span-7 lg:min-h-112",
    body: "p-6 sm:p-8 lg:p-10 lg:col-span-5",
    title: "text-2xl sm:text-3xl lg:text-4xl",
    excerpt: "text-base",
    latest: true,
    caption: true,
  },
};

export const AuthorAvatar = ({ src, name }) => {
  const [failed, setFailed] = useState(false);

  // Avatars are hosted by third parties, so fall back to an initial if one fails.
  if (!src || failed) {
    return (
      <span
        aria-hidden="true"
        className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      width="32"
      height="32"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="w-8 h-8 rounded-full shrink-0 object-cover border border-slate-200 dark:border-white/10"
    />
  );
};

const PostCard = ({
  post,
  layout = "card",
  to,
  headingAs = "h3",
}) => {
  const Heading = headingAs;
  const styles = LAYOUTS[layout];

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-[#0d1628] shadow-sm transition-shadow duration-300 hover:shadow-xl has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-orange-500 ${styles.root}`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 dark:bg-slate-900 ${styles.media}`}
      >
        {/* The title sits right next to the image, so it needs no alt text */}
        <img
          src={post.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {styles.latest && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-white border border-white/10">
            Latest
          </span>
        )}

        {styles.caption && post.imageCaption && (
          <p className="absolute inset-x-0 bottom-0 px-6 pt-16 pb-5 text-center text-sm md:text-base font-light tracking-wide text-white bg-linear-to-t from-black/80 to-transparent">
            {post.imageCaption}
          </p>
        )}
      </div>

      <div
        className={`flex flex-1 flex-col justify-between gap-5 text-left ${styles.body}`}
      >
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
            {post.category}
          </p>

          <p className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden="true">•</span>
            <span>{post.readTime}</span>
          </p>

          <Heading
            className={`font-bold leading-snug tracking-tight text-slate-900 dark:text-white ${
              to
                ? "transition-colors group-hover:text-orange-700 dark:group-hover:text-orange-400"
                : ""
            } ${styles.title}`}
          >
            {to ? (
              // The ::after overlay makes the whole card a single link target
              <Link
                to={to}
                className="outline-none after:absolute after:inset-0"
              >
                {post.title}
              </Link>
            ) : (
              post.title
            )}
          </Heading>

          <p
            className={`font-light leading-relaxed text-slate-600 dark:text-gray-400 ${styles.excerpt}`}
          >
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2.5 min-w-0">
            <AuthorAvatar src={post.authorAvatar} name={post.author} />
            <span className="text-xs font-bold text-slate-800 dark:text-gray-200 truncate">
              {post.author}
            </span>
            {post.verified && (
              <IoCheckmarkCircle
                role="img"
                aria-label="Verified"
                className="text-blue-600 dark:text-blue-400 text-sm shrink-0"
              />
            )}
          </div>

          {to && (
            <span
              aria-hidden="true"
              className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white transition-colors group-hover:bg-orange-600 group-hover:text-white"
            >
              <LuArrowUpRight size={16} />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
