import React from 'react';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaPhone,
  FaEnvelope
} from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import NewsLetter from "../assets/NewsLetter.png";
import Button from "./Button";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaLinks = [
    { link: "facebook.com", name: "Facebook", icon: FaFacebookF },
    { link: "twitter.com", name: "Twitter", icon: FaXTwitter },
    { link: "Instagram.com", name: "Instagram", icon: FaInstagram },
    { link: "Linkedin.com", name: "Linkedin", icon: FaLinkedinIn },
    { link: "Google.com", name: "Google", icon: FaGoogle },
  ];

  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Testimonials", link: "#" },
  ];
  const servicesLinks = [
    { name: "Research", link: "/services" },
    { name: "Software Development", link: "/services" },
    { name: "UI/UX Design", link: "/services" },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-900  dark:text-slate-300 py-16 pt-8 pb-6 lg:px-8">
      {/* <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-[#1a2c2e] flex items-center justify-center">
  {/* The Gradient Layers */}
  {/* <div className="absolute inset-0 bg-liinear-to-br from-[#1a3a3a] via-[#104d5a] to-[#2d1b4d] opacity-80" /> */}
  
  {/* The "Glow" spot (that teal/cyan light) */}
  {/* <div className="absolute top-[-20%] right-[10%] w-80 h-80 bg-[#4fd1c5] rounded-full blur-[120px] opacity-20" /> */}

  {/* The Noise Overlay (Texture) */}
  {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
  
  {/* <div className="relative z-10 text-white">
     {/* Your content here */}
  {/*</div> 
</div> */}
      {/* 1. Floating Newsletter Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
        <div className="bg-blue-600 bg-[linear-gradient(rgba(0,0,255,0.5),rgba(0,14,255,0.1)),url('./assets/noise.svg')] rounded-3xl p-8 md:p-12 mx-4 md:mx-0 flex flex-col md:flex-row items-center justify-between shadow-xl relative">
          {/* abstract customer service */}
          <div className="w-64 h-48 -mt-24 left-8 mb-18 md:mb-0 relative z-10">
            <img
              src={NewsLetter}
              alt="Man checking email"
              className="object-contain w-full h-full scale-180"
            />
          </div>

          {/* Text & Input Area */}
          <div className="md:w-1/2 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Subscribe to Our Weekly Newsletter
            </h2>

            <div className="flex bg-blue-500/50 rounded-full p-1 border border-blue-400">
              <div className="flex items-center pl-4 text-blue-200">
                <FaRegEnvelope size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-white placeholder-blue-200 w-full px-3 py-2 text-sm autofill:shadow-[inset_0_0_0px_1000px_#abbfff00]  rounded-md autofill:text-fill-white autofill:transition-[background-color_9999s_ease-in-out_0s]"
              />
              <Button
                type="submit"
                btnBgColor="bg-white px-3"
                btnTxtColor="text-blue-600 group-hover:text-white px-5"
                btnBgHover="bg-blue-600"
                size="15"
              >
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-xs text-blue-200">
              You will be able to unsubscribe at any time.{" "}
              <a href="#" className="underline">
                Read our privacy policy here
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-40 md:mt-35 mx-9">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 justift-center mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link 
            className=""
            to="/">
              <Logo className="mb-4 w-15 h-auto " />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Transforming businesses through innovative technology solutions,
              thoughtful design, and strategic research.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-gray-600 dark:bg-slate-50 text-white dark:text-gray-600"
                    href={social.link}
                    key={index}
                  >
                    <IconComponent size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold dark:text-white mb-4">Company</h4>
            {navLinks.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="w-fit hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          {/* Service Column */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold dark:text-white mb-4">Our Services</h4>
            {servicesLinks.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  className="w-fit hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Copyright © {new Date().getFullYear()} Avane. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-slate-700 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
