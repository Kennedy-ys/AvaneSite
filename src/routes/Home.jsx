import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import GetStarted from "../components/GetStarted";
import AboutSection from "../components/AboutSection";
import TestimonialSection from "../components/TestimonialSection";
import LogoMarquee from "../components/LogoMarquee"
import { LiaTelegramPlane } from "react-icons/lia";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { LuPalette } from "react-icons/lu";
import heroIImg from "../assets/hero1.png";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textFadeVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const services = [
  {
    link: "research",
    title: "Research",
    description:
      "Data-driven insights that inform strategic decisions and uncover opportunities.",
    offerings: [
      "Market Analysis & Competitive Research",
      "User Research & Behavioral Studies",
      "Technology Assessment & Feasibility Studies",
      "Strategic Planning & Roadmapping",
    ],
    color2: "amber",
    color1: "orange",
    icon: BsSearch,
  },
  {
    link: "design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that delight users and drive engagement.",
    offerings: [
      "User Interface Design",
      "User Experience Strategy",
      "Design Systems & Component Libraries",
      "Prototyping & User Testing",
    ],
    color2: "cyan",
    color1: "blue",
    icon: LuPalette,
  },
  {
    link: "development",
    title: "Software Development",
    description:
      "Robust, scalable solutions built with modern technologies and best practices.",
    offerings: [
      "Custom Web & Mobile Applications",
      "API Development & Integration",
      "Cloud Architecture & DevOps",
      "Legacy System Modernization",
    ],
    color2: "amber",
    color1: "orange",
    icon: FaCode,
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section*/}
 
    <section className="relative overflow-hidden bg-linear-60 to-white from-slate-50 dark:bg-linear-to-br dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#050816]">
      {/* Glow Effects */}
      <motion.div
        animate={{
          backgroundColor: [
            "rgba(0, 0, 237, 0.15)",
            "rgba(251, 191, 36, 0.15)",
            "rgba(0, 0, 237, 0.15)",
          ],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-25 -left-25 w-100 h-100 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          backgroundColor: [
            "rgba(251, 191, 36, 0.15)",
            "rgba(0, 0, 237, 0.15)",
            "rgba(251, 191, 36, 0.15)",
          ],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-25 right-2 w-100 h-100 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
        
        {/* Text Content Section */}
        <motion.div 
          className="space-y-6 md:col-span-6 lg:col-span-7 flex flex-col py-9 text-left md:items-start z-10"
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={textFadeVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit bg-amber-50/60 border border-amber-200/50 text-slate-800 text-xs font-bold tracking-widest dark:bg-white/5 dark:border-white/10 dark:text-gray-300"
          >
            <span className="w-2 h-2 bg-linear-to-r from-orange-500 to-amber-500 rounded-full animate-pulse" />
            SOLUTIONS THAT CREATE IMPACT
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={textFadeVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-gray-50 leading-[1.05] uppercase tracking-tight"
          >
            Technology that <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
              moves
            </span>{" "}
            businesses <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
              forward
            </span>
          </motion.h1>

          {/* Paragraph description */}
          <motion.p 
            variants={textFadeVariants}
            className="text-slate-600 text-base md:text-lg font-light dark:text-gray-400 leading-relaxed max-w-xl"
          >
            Seamless integration of cutting-edge tech services and elite
            academy training, fostering innovation and excellence in every
            digital discipline.
          </motion.p>

          {/* CTA Buttons Container */}
          <motion.div 
            variants={textFadeVariants}
            className="flex flex-wrap items-center w-full gap-5 pt-2"
          >
            <Button
              as={Link}
              to="#services"
              icon={
                <IoArrowRedoOutline
                  className="text-blue-600"
                  size={21}
                />
              }
              btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500 dark:shadow-blue-700/20"
              btnBgHover="bg-blue-700"
              size="22"
            >
              Explore our Services
            </Button>
            
            <Button
              as={Link}
              icon={<LiaTelegramPlane className="text-white group-hover:text-orange-500" />}
              btnTxtColor="text-orange-500 group-hover:text-white"
              btnBgColor="bg-white border border-slate-200 dark:border-transparent dark:shadow-white/5"
              btnBgHover="bg-orange-500"
              iconBgColor={"bg-orange-500 group-hover:bg-white"}
              to="/contact"
              size="22"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Illustration Section (3D Shapes Float Animation) */}
        <motion.div 
          className="absolute top-0 bottom-0 left-0 right-0 lg:static md:col-span-6 lg:col-span-5 justify-center items-center lg:z-10 opacity-10 dark:opacity-5 lg:opacity-100 dark:lg:opacity-100 pointer-events-none select-none"
          initial={{ scale: 0.95, x: 30 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {/* Continuous looping float parallax wrapper */}
          <motion.img
            className="object-contain h-4/5 w-full max-h-125"
            src={heroIImg}
            alt="Hero Concept Illustration"
            animate={{
              y: [0, -10, 10, 0],
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>

    {/* Marquee Section */}
    <LogoMarquee />

      {/* Services Section */}
      <section id="services" className="bg-white dark:bg-slate-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="w-6 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Explore Our Range of{" "}
              <span className="text-orange-500">Expert</span> Services
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
              Discover tailored solutions built for your goals.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Get Started Section */}
      <GetStarted text="Ready to Transform Your Future With Us?" ctaText="Get Started" />
    </>
  );
};

export default Home;
