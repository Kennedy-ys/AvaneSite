import React from "react";
import heroIImg from "../assets/hero1.png";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { LuPalette } from "react-icons/lu";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import GetStarted from "../components/GetStarted";
import AboutSection from "../components/AboutSection";
import { Link } from "react-router-dom";

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
    <div className="mt-17 md:mt-15">
      {/* Hero Section*/}
      <section className="bg-linear-60 to-white from-slate-50 dark:bg-linear-to-br dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#0a0f1c]">
        {/* Glow Effects */}
      <div className="absolute -top-25 -left-25 w-100 h-100 bg-blue-600/20 blur-[120px] rounded-full"/>
      <div className="absolute -bottom-25 right-2 w-100 h-100 bg-orange-600/20 blur-[120px] rounded-full"/>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="space-y-8 md:space-y-5 flex flex-col justify-center items-center text-center md:text-left md:items-start z-200">
            <div className="bg-linear-to-r from-orange-500 to-blue-700 p-[2.8px] w-15 rounded" />
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
            <div className="flex flex-col w-full sm:flex-row justify-center-safe md:justify-start gap-7 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] ">
              <Button
                as={Link}
                to="/services"
                icon={
                  <IoArrowRedoOutline
                    className="text-blue-600 group-hover:text-orange-500"
                    size={21}
                  />
                }
                btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500 dark:shadow-blue-700/30"
                btnBgHover="bg-linear-to-r from-orange-500 to-amber-500"
                size="22"
              >
                Explore our Services
              </Button>
              <Button
                as={Link}
                icon={<LiaTelegramPlane className="text-white" />}
                btnTxtColor="text-orange-500 group-hover:text-blue-500"
                btnBgColor="bg-white dark:shadow-white/20"
                btnBgHover="bg-white"
                iconBgColor="bg-linear-to-r from-orange-500 to-amber-500 group-hover:bg-linear-to-r group-hover:from-blue-700 group-hover:to-cyan-500"
                to="/contact"
                size="22"
              >
                Contact Us
              </Button>
            </div>
          </div>
          {/* Hero Image Section */}
          <div className="hidden md:flex justify-center items-center z-200">
            <img
              className="object-cover h-4/5 w-full"
              src={heroIImg}
              alt="Hero Image"
              srcSet=""
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

            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md">
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

      <GetStarted />
    </div>
  );
};

export default Home;
