import React from "react";
import {
  SiAccenture,
  SiToyota,
  SiCisco,
  SiAirbus,
  SiBookingdotcom,
  SiApple,
} from "react-icons/si";
import { TbCircleLetterT, TbBrandDisney } from "react-icons/tb";
import { FaAmazon, FaMeta, FaXbox } from "react-icons/fa6";
import { Microsoft } from "@lobehub/icons";

// DEFAULT DATA STACKS
const DEFAULT_ROW_1 = [
  { name: "Amazon", Icon: FaAmazon, iconColor: "text-[#FF9900]", role: "" },
  {
    name: "Disney+",
    Icon: TbBrandDisney,
    iconColor: "text-[#001A9C] dark:text-[#00E5FF]",
    role: "",
  },
  { name: "Microsoft", Icon: Microsoft.Color, iconColor: "", role: "" }, // Added empty string fallback
  {
    name: "Accenture",
    Icon: SiAccenture,
    iconColor: "text-[#A100FF]",
    role: "",
  },
  { name: "Meta", Icon: FaMeta, iconColor: "text-[#0051ff]", role: "" },
  { name: "Toyota", Icon: SiToyota, iconColor: "text-[#EB0A1E]", role: "" },
];

const DEFAULT_ROW_2 = [
  { name: "Cisco", Icon: SiCisco, iconColor: "text-[#049FD9]", role: "" },
  {
    name: "Airbus",
    Icon: SiAirbus,
    iconColor: "text-[#00205B] dark:text-[#4A90E2]",
    role: "",
  },
  {
    name: "Booking.com",
    Icon: SiBookingdotcom,
    iconColor: "text-[#003580] dark:text-[#00AEEF]",
    role: "",
  },
  { name: "Xbox", Icon: FaXbox, iconColor: "text-[#86BC25]", role: "" },
  {
    name: "Tata",
    Icon: TbCircleLetterT,
    iconColor: "text-[#005A9C]",
    role: "",
  },
  {
    name: "Apple",
    Icon: SiApple,
    iconColor: "text-slate-900 dark:text-white",
    role: "",
  },
];

export default function LogoMarquee({
  title = "",
  subText = "Trusted by fast-growing teams worldwide",
  row1Data = DEFAULT_ROW_1,
  row2Data = DEFAULT_ROW_2,
}) {
  // Duplicate arrays to guarantee flawless loop rendering lengths
  const duplicatedRow1 = [...row1Data, ...row1Data, ...row1Data];
  const duplicatedRow2 = [...row2Data, ...row2Data, ...row2Data];

  return (
    <section className="bg-slate-50/50 dark:bg-[#0b1220] py-16 px-6 lg:px-12 border-y border-slate-200/60 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      {/* Heading block */}
      <div
        className={`${title ? "flex flex-col items-center space-y-3" : ""} max-w-6xl mx-auto px-6 text-center mb-12`}
      >
        {title && (
          <div className="flex items-center gap-2 justify-center pb-4">
            <span className="block w-4 h-0.5 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              {title}
            </span>
            <span className="block w-4 h-0.5 bg-orange-500" />
          </div>
        )}
        <p className="text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
          {subText}
        </p>
      </div>

      {/* Outer wrapper with mask gradient */}
      <div className="relative w-full overflow-hidden mask-fade-edges flex flex-col gap-8">
        {/* ROW 1: Moves Left */}
        <div className="flex w-max items-center gap-6 py-2 cursor-default animate-marqueeLeft hover:[animation-play-state:paused] motion-reduce:animate-none">
          {duplicatedRow1.map((brand, index) => {
            const { Icon, iconColor, role, name } = brand;
            return (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border bg-white/60 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 backdrop-blur-xs hover:shadow-md dark:hover:shadow-none select-none group min-w-42.5 md:min-w-47.5 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10"
              >
                <div className="grayscale opacity-50 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                  {/* Fallback to empty string if iconColor is missing */}
                  <Icon className={iconColor || ""} size={25} />
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {name}
                  </h4>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-gray-500 mt-0.5">
                    {role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex w-max items-center gap-6 py-2 cursor-default animate-marqueeRight hover:[animation-play-state:paused] motion-reduce:animate-none">
          {duplicatedRow2.map((brand, index) => {
            const { Icon, iconColor, role, name } = brand;
            return (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border bg-white/60 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 backdrop-blur-xs hover:shadow-md dark:hover:shadow-none select-none group min-w-42.5 md:min-w-47.5 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10"
              >
                <div className="grayscale opacity-50 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                  <Icon className={iconColor || ""} size={25} />
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {name}
                  </h4>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-gray-500 mt-0.5">
                    {role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
