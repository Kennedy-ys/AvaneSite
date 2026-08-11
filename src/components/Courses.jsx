import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoBookOutline, IoTimeOutline, IoBarChartOutline, IoStar } from "react-icons/io5";
import Button from "./Button";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("All Tracks");

  const tabs = ["All Tracks", "Frontend Systems", "UI/UX Design", "State Architecture"];

  const coursesData = [
    {
      id: 1,
      category: "Frontend Systems",
      title: "React.js Production Architectures & Framework Stacks",
      image: "https://images.pexels.com/photos/10376161/pexels-photo-10376161.jpeg",
      rating: 4.9,
      reviews: 240,
      lessons: 18,
      duration: "24h 15m",
      level: "Advanced",
      instructor: "Alesa Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      price: "$199",
      discountPrice: "$79",
      badge: "Popular"
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "Mastering Bento Grids & Micro-Interactions in Tailwind v4",
      image: "https://images.pexels.com/photos/10376161/pexels-photo-10376161.jpeg",
      rating: 4.8,
      reviews: 185,
      lessons: 12,
      duration: "14h 45m",
      level: "Intermediate",
      instructor: "Marcus K.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      price: "$149",
      discountPrice: "$59",
      badge: "Best Seller"
    },
    {
      id: 3,
      category: "State Architecture",
      title: "Advanced Component Synchronization & Global Context Labs",
      image: "https://images.pexels.com/photos/10376161/pexels-photo-10376161.jpeg",
      rating: 4.7,
      reviews: 98,
      lessons: 15,
      duration: "18h 30m",
      level: "Expert",
      instructor: "Alesa Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      price: "$249",
      discountPrice: "$129"
    },
    {
      id: 4,
      category: "Frontend Systems",
      title: "Framer Motion: Orchestrating High-Fidelity Web Physics",
      image: "https://images.pexels.com/photos/10376161/pexels-photo-10376161.jpeg",
      rating: 4.9,
      reviews: 312,
      lessons: 22,
      duration: "28h 10m",
      level: "Advanced",
      instructor: "Marcus K.",
      avatar: "https://images.pexels.com/photos/10376161/pexels-photo-10376161.jpeg",
      price: "$189",
      discountPrice: "$89",
      badge: "New Track"
    }
  ];

  const filteredCourses = activeTab === "All Tracks" 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    <section className="bg-slate-50 dark:bg-[#010205] py-24 px-6 lg:px-12 transition-colors duration-300 overflow-hidden border-b border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Header Setup mirroring Screenshot 2026-06-30 181720.jpg */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
            Our Most Popular Tracks
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base font-light">
            Deep dive into live application frameworks with production-tested workflows.
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 max-w-3xl mx-auto">
          {tabs.map((tab) => (
            <Button
              key={tab}
              size={15}
              btnBgColor={`${activeTab === tab ? "bg-blue-600" : "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 "}`} btnTxtColor={`${activeTab === tab ? "text-white" : "text-slate-600 dark:text-gray-400 transition-200"}`} btnBgHover=""
              onClick={() => setActiveTab(tab)}
              >
              {tab}
            </Button>
          ))}
        </div>

        {/* Responsive Grid System Panel */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200 dark:hover:border-white/10 transition-all duration-300"
              >
                {/* Visual Cover Wrapper */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Absolute Badge Layers */}
                  {course.badge && (
                    <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider text-white ${
                      course.badge === "Popular" ? "bg-indigo-600" : course.badge === "Best Seller" ? "bg-emerald-600" : "bg-blue-600"
                    }`}>
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Info Block Layer */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Rating Vector Info Row */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400 font-mono">
                      <span className="text-amber-500 font-bold flex items-center gap-0.5">
                        {course.rating} <IoStar className="inline mb-0.5" />
                      </span>
                      <span>({course.reviews} reviews)</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-800 dark:text-gray-200 line-clamp-2 tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  {/* Metadata Matrix Spec Row */}
                  <div className="grid grid-cols-3 gap-1 pt-2 border-t border-b border-slate-100 dark:border-white/5 py-2.5 text-[11px] font-medium text-slate-400 dark:text-gray-500 font-mono">
                    <span className="flex items-center gap-1 justify-start">
                      <IoBookOutline className="text-sm shrink-0" /> {course.lessons} les
                    </span>
                    <span className="flex items-center gap-1 justify-center">
                      <IoTimeOutline className="text-sm shrink-0" /> {course.duration.split(" ")[0]}
                    </span>
                    <span className="flex items-center gap-1 justify-end uppercase text-right">
                      <IoBarChartOutline className="text-sm shrink-0" /> {course.level}
                    </span>
                  </div>

                  {/* Pricing and Instructor Footer Grid Panel */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <img 
                        src={course.avatar} 
                        alt={course.instructor}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-white/10"
                      />
                      <span className="text-xs font-semibold text-slate-600 dark:text-gray-400">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1.5 font-mono">
                      <span className="text-xs text-slate-400 dark:text-gray-600 line-through">
                        {course.price}
                      </span>
                      <span className="text-base font-black text-slate-900 dark:text-white">
                        {course.discountPrice}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;