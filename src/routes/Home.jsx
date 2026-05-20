import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Hero from "../components/Foot";
import ServiceCard from "../components/ServiceCard";
import GetStarted from "../components/GetStarted";
import AboutSection from "../components/AboutSection";
import TestimonialSection from "../components/TestimonialSection";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { LuPalette } from "react-icons/lu";
import heroIImg from "../assets/hero1.png";

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
    <div className="mt-12">
      {/* Hero Section*/}
      <section className="relative overflow-hidden bg-linear-60 to-white from-slate-50 dark:bg-linear-to-br dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#050816]">
        {/* Glow Effects */}
        <motion.div
          animate={{
            backgroundColor: [
              "rgba(0, 0, 237, 0.2)",
              "rgba(251, 191, 36, 0.2)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute -top-25 -left-25 w-100 h-100 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            backgroundColor: [
              "rgba(251, 191, 36, 0.2)",
              "rgba(0, 0, 237, 0.2)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-25 right-2 w-100 h-100 blur-[120px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="space-y-8 md:space-y-5 flex flex-col  text-left md:items-start z-200">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full w-fit
            bg-amber-50/50 border border-amber-50 text-black text-sm 
            dark:bg-white/5 dark:border-white/10 dark:text-gray-300"
            >
              <span className="w-2 h-2 bg-linear-to-r from-orange-500 to-amber-500 rounded-full"></span>
              SOLUTIONS THAT CREATE IMPACT
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-200">
              Technology that{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                moves
              </span>{" "}
              businesses{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-cyan-500">
                forward
              </span>
            </h1>
            <p className="text-gray-800 text-lg dark:text-gray-400 leading-7">
              Seamless integration of cutting-edge tech services and elite
              academy training, fostering innovation and excellence in every
              digital discipline.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center w-full gap-7 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] ">
              <Button
                as={Link}
                to="/services"
                icon={
                  <IoArrowRedoOutline
                    className="text-blue-600"
                    size={21}
                  />
                }
                btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500 dark:shadow-blue-700/30"
                btnBgHover="bg-blue-700"
                size="22"
              >
                Explore our Services
              </Button>
              <Button
                as={Link}
                icon={<LiaTelegramPlane className="text-white group-hover:text-orange-500" />}
                btnTxtColor="text-orange-500 group-hover:text-white"
                btnBgColor="bg-white dark:shadow-white/20"
                btnBgHover="bg-orange-500"
                iconBgColor={"bg-orange-500 group-hover:bg-white"}
                to="/contact"
                size="22"
              >
                Contact Us
              </Button>
            </div>
          </div>
          {/* Hero Image Section */}
          <div className="absolute top-0 bottom-0 left-0 right-0 lg:static lg:flex justify-center items-center lg:z-200 opacity-10 dark:opacity-3 lg:opacity-100 dark:lg:opacity-100">
            <img
              className="object-cover h-4/5 w-full"
              src={heroIImg}
              alt="Hero Image"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="bg-white dark:bg-slate-950 py-20">
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
      <GetStarted />
    </div>
  );
};

export default Home;
