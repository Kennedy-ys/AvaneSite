import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram,  FaLinkedinIn, } from "react-icons/fa6";
import { TbBellRinging } from "react-icons/tb";
import { FaRegEnvelope, FaPhoneAlt, FaEnvelope, FaTiktok } from "react-icons/fa";
import Button from "./Button";
import Logo from "./Logo";
import NewsLetter from "../assets/NewsLetter.png";

const Footer = () => {
  const socialMediaLinks = [
    { link: "https://www.facebook.com", name: "Facebook", icon: FaFacebookF, },
    { link: "https://www.x.com", name: "Twitter", icon: FaXTwitter, },
    { link: "https://www.instagram.com", name: "Instagram", icon: FaInstagram, },
    { link: "https://www.linkedin.com", name: "Linkedin", icon: FaLinkedinIn, }, 
    { link: "https://www.tiktok.com", name: "Tiktok", icon: FaTiktok, }
    ]
      
  const navLinks = [
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Academy", link: "/academy" },
  ];
  const servicesLinks = [
    { name: "Research", link: "/services/research" },
    { name: "Software Development", link: "/services/development" },
    { name: "UI/UX Design", link: "/services/ui-ux-design" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 py-16 pt-8 pb-6 lg:px-8 mx-auto">
      {/* 1. Newsletter Card */}
      <div className=" w-full max-w-5xl px-4 mx-auto">
        <div className="bg-blue-600 bg-[linear-gradient(rgba(0,0,255,0.5),rgba(0,14,255,0.1)),url('./assets/noise.svg')] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl relative">
          {/* Image section:  customer service */}
          <div className="w-64 h-48 mb-10 md:mb-0 z-10">
            <img
              src={NewsLetter}
              alt="Man checking email"
              className="object-contain w-full h-full scale-130"
            />
          </div>

          {/* Text & Input Area */}
          <div className="md:w-1/2 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Stay Updated
            </h2>
            <p className="mb-4 text-sm md:text-base">Get the latest insights on startups and tech delivered to your inbox.</p>

            <form className="flex bg-blue-500/50 rounded-full p-1 border border-blue-400">
              <div className="flex items-center pl-4 text-blue-200">
                <FaRegEnvelope size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-white placeholder-blue-200 w-full px-3 py-2 text-sm autofill:shadow-[inset_0_0_0px_1000px_#abbfff00]  rounded-md autofill:text-fill-white autofill:transition-[background-color_9999s_ease-in-out_0s]"
              />
              <Button
              onClick={() => alert("This is a demo. No actual subscription will occur.")}
                btnBgColor="bg-white"
                btnTxtColor="text-blue-600 group-hover:text-white w-40"
                btnBgHover="bg-blue-600"
                size={15}
                iconBgColor="bg-blue-600 group-hover:bg-white"
                icon={<TbBellRinging className="text-white group-hover:text-blue-600" size={16} />}
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-xs text-blue-200">
              You will be able to unsubscribe at any time.{" "}
              <a href="#" className="underline">
                Read our privacy policy here
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-10 mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center mb-12 text-base md:text-lg leading-relaxed font-normal">
          {/* Brand Column */}
          <div className="">
            <Link to="/">
              <Logo className="mb-4 w-15 h-auto " />
            </Link>
            <p className=" leading-relaxed ">
              Transforming businesses through innovative technology solutions,
              thoughtful design, and strategic research.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap space-y-2 space-x-4 mt-4">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                  whileHover={{ y: -5, scale: 1.08, rotate: 3, }}
                  whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="group w-10 h-10 rounded-full flex items-center justify-center border dark:hover:border-white/10 border-gray-300 dark:border-white/5 backdrop-blur-md hover:shadow-md dark:hover:shadow-none select-none transition-colors bg-amber-50/40 dark:bg-slate-800/60"
                    href={social.link}
                    key={index}
                    aria-label={social.name}
                    target="_blank"
                  >
                    <IconComponent className="group-hover:text-amber-500" size={19} />
                  </motion.a>
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
                  className="hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300"
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
                  className="hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Contact Information */}
          <motion.div className="flex flex-col space-y-3">
            <h4 className="font-semibold dark:text-white mb-4">Contact Us</h4>
            {[
              {
                type: "Email",
                value: "info@avane.com",
                link: "mailto:info@avane.com",
                icon: FaEnvelope,
              },
              {
                type: "number",
                value: "+234 700 000 0000",
                link: "tel:+234700000000",
                icon: FaPhoneAlt,
              },
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  href={contact.link}
                  key={index}
                  type={contact.type}
                  className=" group w-full hover:text-orange-500 hover:translate-x-0.5 transition-all duration-300"
                >
                  <IconComponent
                    className="inline-block mr-2 text-gray-500 dark:text-gray-400 group-hover:text-orange-500"
                    size={15}
                  />
                  {contact.value}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Copyright © {new Date().getFullYear()} Avane. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="hover:text-slate-700 dark:hover:text-white transition-colors"
            >
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
