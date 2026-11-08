import BlogImg1 from "../assets/images/BlogImg1.webp";
import BlogImg2 from "../assets/images/BlogImg2.webp";
import BlogImg3 from "../assets/images/BlogImg3.webp";

// Keep newest first: the first post is the one presented as "Latest".
// Add a post's article text as an optional `body` array. A string is a
// paragraph and { heading: "..." } is a section heading.
export const blogs = [
  {
    id: 1,
    slug: "reimagining-housing-in-africa",
    category: "PropTech",
    date: "2026-10-04",
    title: "Reimagining Housing in Africa: The HomXe Story",
    excerpt:
      "Born from a simple yet powerful vision, HomXe set out to make home management smarter, easier, and more accessible for millions across Africa. Discover how a bold idea became a transformative digital housing ecosystem.",
    author: "HomXe Editorial Team",
    authorAvatar:
      "https://pbs.twimg.com/media/HPVcgLQWgAAG79k?format=jpg&name=large",
    verified: true,
    readTime: "6 min read",
    image:
      "https://pbs.twimg.com/media/HLpLMM8WEAAxctB?format=jpg&name=small",
    imageCaption: "Not just a platform. A home revolution.",
  },
  {
    id: 2,
    slug: "the-death-of-monoliths",
    category: "Engineering",
    date: "2026-09-28",
    title:
      "The Death of Monoliths: Micro-Frontends & Server-Driven UI in 2026",
    excerpt:
      "Modern web architectures are shifting beyond simple SSR. We break down how top engineering teams orchestrate isolated runtime modules, cut bundle sizes by 60%, and deploy zero-downtime micro-frontends at scale.",
    author: "Avane Tech Radar",
    verified: true,
    authorAvatar: "https://avatars.githubusercontent.com/u/105855634?v=4",
    readTime: "8 min read",
    image: BlogImg1,
    imageCaption: "Not just code. An ecosystem.",  },
  {
    id: 3,
    slug: "tailwind-v4-dynamic-design-systems",
    category: "Design Systems",
    date: "2026-09-15",
    title: "Tailwind v4 & Dynamic Design Systems: The Complete Layout Guide",
    excerpt:
      "Explore the internal engine behind variable CSS container queries, subgrid setups, and zero-runtime micro-interactions. Learn how to construct hyper-responsive, dark-mode-first interfaces without style bloat.",
    author: "UI System Labs",
    verified: true,
    authorAvatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLQP4l42cnK71y9NAfVbk6wYzw6z6yCrrwId5WPlAETnYyV7FLBuQ=s288-c-no",
    readTime: "12 min read",
    image: BlogImg2,
    imageCaption: "Precision-engineered interfaces.",
  },
  {
    id: 4,
    slug: "zero-trust-infrastructure",
    category: "Cybersecurity",
    date: "2026-09-02",
    title: "Zero-Trust Infrastructure: Securing Cloud-Native FinTech Platforms",
    excerpt:
      "A practical blueprint for implementing mutual TLS, automated credential rotation, and perimeter hardening across distributed cloud services without sacrificing engineering velocity.",
    author: "Avane SecOps",
    verified: true,
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    readTime: "7 min read",
    image: BlogImg3,
    imageCaption: "Uncompromising digital defense.",
  },
];

export const blogContext = {
  title: "Insights & Perspectives",
  heading1: "Latest News &",
  heading2: "Tech Insights",
  description:
    "Explore in-depth articles, engineering breakdowns, design system architectures, and startup growth insights curated by our team.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

// Dates are stored as YYYY-MM-DD, which parses as UTC, so format in UTC too.
export const formatPostDate = (date) => dateFormatter.format(new Date(date));
