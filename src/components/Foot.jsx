import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import NewsLetter from "../assets/NewsLetter.png";
import Button from "./Button";
const Foot = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 dark:text-gray-300 pt-32 pb-8 px-4 font-sans text-gray-600">
      {/* 1. Floating Newsletter Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
        <div className="bg-blue-600 bg-[linear-gradient(rgba(0,0,255,0.5),rgba(0,14,255,0.1)),url('./assets/noise.svg')] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl relative">
          {/* abstract customer service */}
          <div className="w-64 h-48 -mt-24 left-8 mb-8 md:mb-0 relative z-10">
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

      {/* 2. Main Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mt-60 md:mt-16 border-b border-gray-100 pb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              @
            </div>
            <span className="text-xl font-bold text-gray-900">Stay Clean</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam,
            purus sit amet luctus venenatis.
          </p>
          <div className="flex gap-4 text-gray-400">
            <FaFacebookF
              size={18}
              className="cursor-pointer hover:text-blue-600"
            />
            <FaXTwitter
              size={18}
              className="cursor-pointer hover:text-blue-400"
            />
            <FaInstagram
              size={18}
              className="cursor-pointer hover:text-pink-600"
            />
            <FaLinkedinIn
              size={18}
              className="cursor-pointer hover:text-blue-700"
            />
            <FaGoogle
              size={18}
              className="cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>

        {/* Links Columns */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Testimonial
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Tweet @ Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Webians
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Become Teacher
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                All in One
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900">Contact Us</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <FaPhone size={16} className="text-blue-600" />
              <span>(91) 98765 4321 54</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={16} className="text-blue-600" />
              <span>support@mail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="max-w-6xl mx-auto flex flex-col md:row-row justify-between items-center pt-8 text-xs text-gray-400">
        <p>© Copyright by CodedUI. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms of Use
          </a>
          <a href="#" className="hover:text-blue-600">
            Legal
          </a>
          <a href="#" className="hover:text-blue-600">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
