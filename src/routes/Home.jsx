import React from "react";
import heroIImg from "../assets/hero1.png";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoArrowRedoOutline } from "react-icons/io5";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "UI/UX Designing",
    description:
      "We craft a fully customized financial roadmap anchored to your life goals — budgeting, debt strategy, and wealth-building milestones that actually move.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="white" strokeWidth="1.5" />
        <path d="M16 9v2m0 10v2m-4-7h8M13 13h1.5c.828 0 1.5.672 1.5 1.5v0c0 .828-.672 1.5-1.5 1.5H14c-.828 0-1.5.672-1.5 1.5v0c0 .828.672 1.5 1.5 1.5H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Software / Web Development",
    description:
      "Data-driven portfolio optimization that balances risk against ambition. We grow your capital with disciplined strategy and real-time market intelligence.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M6 24l6-7 5 4 9-11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="10" r="2" fill="white" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Research & Data Analysis",
    description:
      "Turn the complexity of retirement into a clear, confident path. We model every scenario so you retire on your terms — no surprises, just security.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M8 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="12" r="4" stroke="white" strokeWidth="1.5" />
        <path d="M4 28h24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];


const Home = () => {
  return (
    <div className="mt-10 md:mt-17">
      {/* Hero Section*/}
      <section className="bg-linear-60 from-white to-slate-100 dark:bg-linear-60 dark:from-gray-900 dark:to-slate-800">
        <div className="flex flex-row md:flex-row mx-7 min-h-150">
          {/* Text Content Section */}
          <div className="space-y-8 md:space-y-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
            <div className="bg-linear-to-r from-orange-500 to-blue-700 p-[2.8px] w-15 rounded" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-300">
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
                  <IoArrowRedoOutline className="text-blue-600" size={21} />
                }
                btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500 dark:shadow-blue-700/30"
                size="22"
              >
                Explore our Services
              </Button>
              <Button
                as={Link}
                icon={<LiaTelegramPlane className="text-white" />}
                btnTxtColor="text-orange-500"
                btnBgColor="bg-white dark:shadow-white/20"
                btnBgHover="bg-orange-200"
                iconBgColor="bg-linear-to-r from-orange-500 to-amber-500"
                to="/contact"
                size="22"
              >
                Contact Us
              </Button>
            </div>
          </div>
          {/* Hero Image Section */}
          <div className="hidden md:flex justify-center items-center ">
            <img
              className="object-cover h-4/5 w-full"
              src={heroIImg}
              alt="Hero Image"
              srcSet=""
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
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
    </div>
  );
};

export default Home;
