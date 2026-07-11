import React from "react";
import { GoSearch } from "react-icons/go";
import HeroSection from "../components/HeroSection";
import heroimg from "../assets/Teamwork.webp";
import BlogImg1 from "../assets/BlogImg1.webp";
import BlogImg2 from "../assets/BlogImg2.webp";
import BlogImg3 from "../assets/BlogImg3.webp";

const Blog = () => {
  // Mock data for the main grid cards
  const mainArticles = [
    {
      id: 1,
      category: "Home Buying",
      title: "Finding Your Dream Home Made Simple",
      desc: "Explore verified property listings and discover homes that match your lifestyle and budget with ease",
      image: "",
    },
    {
      id: 2,
      category: "Food Connect",
      title: "Connect with restaurants and other food vendors",
      desc: "Book tables, order takeouts from the comfort of your home",
      image: "",
    },
    {
      id: 3,
      category: "Real Estate",
      title: "Homxe",
      desc: "Cutting off of Agents",
      image: "",
    },
    {
      id: 4,
      category: "Real Estate",
      title: "Homxe",
      desc: "Cutting off of Agents",
      image: "",
    },
    {
      id: 5,
      category: "Real Estate",
      title: "Homxe",
      desc: "Cutting off of Agents",
      image: "",
    },
    {
      id: 6,
      category: "Real Estate",
      title: "Homxe",
      desc: "Cutting off of Agents",
      image: "",
    },
  ];

  //Mock data for sidebar lists
  const sidebarArticles = [
    {
      id: 1,
      date: "19th June, 2026",
      title: "loremtyfyfgyhgfvghf",
      image: "",
    },
    {
      id: 2,
      date: "19th June, 2026",
      title: "loremtyfyfgyhgfvghf",
      image: "",
    },
    {
      id: 3,
      date: "19th June, 2026",
      title: "loremtyfyfgyhgfvghf",
      image: "",
    },
  ];

  return (
    <div className="min-bg-white font-sans text-white- selection:bg-blue-500 selection:text-white">
      {/* --- HERO SECTION ---*/}
      <HeroSection
        heading="Blog"
        subText="Explore our latest articles, insights, and updates on real estate trends, investment strategies, and market analysis. Stay informed and make informed decisions with our expert content."
        HeroImg={heroimg}
      />

      {/*--- Search Bar Container ---*/}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto my-6">
        <div className="relative w-full">
          <GoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Input Placeholder"
            className="bg-gray-200 w-full pl-8 pr-5 py-2.5 border border-gray-400 rounded-3xl text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <button className="bg-blue-600 w-full py-2.5 sm:w-auto px-5 text-amber-50 font-medium text-sm rounded-3xl hover:bg-blue-700 transition-colors whitespace-nowrap">
          FIND
        </button>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <main className="bg-transparent mx-auto px-4 md:px-8 pb-24 mt-2">
        <div className="bg-transparent flex flex-col lg:flex-row gap-0">
          {/* Left Side */}
          <div className="w-full lg:w-[75%]">
            <div className="pb-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>

            {/*Inner Flex Layout 3 main cards*/}
            <div className="bg-transparent px-0 flex flex-wrap gap-7 justify-center">
              {mainArticles.map((article) => (
                <div
                  key={article.id}
                  className="relative group h-105 w-full lg:w-[25%] md:w-[40%] sm:w-[95%] rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                >
                  <img
                    src={BlogImg2}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/*Dark Overlay for text eligibility*/}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to transparent" />

                  {/*Content Overlays*/}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="inline-block bg-white/40 backdrop-blur-md text-[13px] font-medium tracking-wide px-2.5 py-2 rounded-2xl w-fit mb-5 text-blue-700 hover:text-blue-500">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-white text-base leading-snug mb-2 line-clamp-2 hover:text-blue-100 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*Right Side: Sidebar Lists (Takes up 25% width on desktop)*/}
          <div className="w-full h-50% lg:w-[25%] space-y-8">
            {/*Featured Section*/}
            <div>
              <h3 className="text-sm font-bold text-gray-500 pb-6 mb-6">
                Featured
              </h3>
              <div className="bg-gray-100 flex flex-col gap-4 pb-4">
                {sidebarArticles.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <img
                      src={BlogImg1}
                      alt=""
                      className="w-20 h-30 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[11px] text-gray-500 mb-0.5">
                        {item.date}
                      </span>
                      <h4 className="text-xs font-bold text-amber-500 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Section */}
            <div>
              <h3 className="text-sm font-bold text-gray-600 pb-5 mb-4">
                LATEST
              </h3>
              <div className="bg-gray-100 flex flex-col gap-4">
                {sidebarArticles.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <img
                      src={BlogImg3}
                      alt=""
                      className="w-20 h-30 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[11px] text-gray-500 mb-0.5">
                        {item.date}
                      </span>
                      <h4 className="text-xs font-bold text-orange-600 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;

