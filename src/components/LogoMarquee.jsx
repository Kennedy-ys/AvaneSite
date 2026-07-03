import React from 'react';
import { 
  SiAccenture, 
  SiToyota, 
  SiCisco, 
  SiAirbus, 
  SiBookingdotcom, 
  SiApple 
} from 'react-icons/si';
import { TbCircleLetterT, TbBrandDisney } from "react-icons/tb"; 
import { FaAmazon, FaMeta, FaXbox } from 'react-icons/fa6';
import { Microsoft } from '@lobehub/icons';

// DEFAULT DATA STACKS (Fallback configurations if no props are supplied)
const DEFAULT_ROW_1 = [
  { name: 'Amazon', icon: <FaAmazon size={26} className="text-[#FF9900]" />, role: "" },
  { name: 'Disney+', icon: <TbBrandDisney size={34} className="text-[#001A9C] dark:text-[#00E5FF]" />, role: "" },
  { name: 'Microsoft', icon: <Microsoft.Color size={22} />, role: "" },
  { name: 'Accenture', icon: <SiAccenture size={24} className="text-[#A100FF]" />, role: "" },
  { name: 'Meta', icon: <FaMeta size={32} className="text-[#0051ff]" />, role: "" },
  { name: 'Toyota', icon: <SiToyota size={28} className="text-[#EB0A1E]" />, role: "" },
];

const DEFAULT_ROW_2 = [
  { name: 'Cisco', icon: <SiCisco size={30} className="text-[#049FD9]" />, role: "" },
  { name: 'Airbus', icon: <SiAirbus size={26} className="text-[#00205B] dark:text-[#4A90E2]" />, role: "" },
  { name: 'Booking.com', icon: <SiBookingdotcom size={24} className="text-[#003580] dark:text-[#00AEEF]" />, role: "" },
  { name: 'Xbox', icon: <FaXbox size={24} className="text-[#86BC25]" />, role: "" },
  { name: 'Tata', icon: <TbCircleLetterT size={26} className="text-[#005A9C]" />, role: "" },
  { name: 'Apple', icon: <SiApple size={24} className="text-slate-900 dark:text-white" />, role: "" },
];

export default function LogoMarquee({ 
  title = "",
  subText = "Trusted by fast-growing teams worldwide",
  row1Data = DEFAULT_ROW_1, 
  row2Data = DEFAULT_ROW_2 
}) {
  
  // Duplicate arrays to guarantee flawless loop rendering lengths
  const duplicatedRow1 = [...row1Data, ...row1Data, ...row1Data];
  const duplicatedRow2 = [...row2Data, ...row2Data, ...row2Data];

  return (
    <section className="bg-slate-50/50 dark:bg-[#0b1220] py-16 px-6 lg:px-12 border-y border-slate-200/60 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      
      {/* CSS Animation Keyframe Injections */}
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          
          @keyframes marqueeRight {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
      
      {/* Heading block */}
      <div className={`${title ? "flex flex-col items-center space-y-3" : ""}max-w-6xl mx-auto px-6 text-center mb-12`}>
        { title && (
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

      {/* Outer wrapper with balanced ambient linear mask gradients */}
      <div className="relative w-full overflow-hidden mask-fade-edges flex flex-col gap-8">
        
        {/* ROW 1: Moves Left */}
        <div 
          className="flex w-max items-center gap-6 py-2 cursor-pointer animate-[marqueeLeft_30s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {duplicatedRow1.map((brand, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex items-center gap-3 px-6 py-3 rounded-xl border bg-white/60 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 backdrop-blur-xs hover:shadow-md dark:hover:shadow-none select-none group min-w-42.5 md:min-w-47.5 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10"
            >
              {/* Monochromatic base layer that drops color on parent hover state */}
              <div className="grayscale opacity-50 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                {brand.icon}
              </div>

                {/* Typography Metadata Labels */}
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {brand.name}
                  </h4>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-gray-500 mt-0.5">
                    {brand.role}
                  </p>
                </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Moves Right */}
        <div 
          className="flex w-max items-center gap-6 py-2 cursor-pointer animate-[marqueeRight_32s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {duplicatedRow2.map((brand, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex items-center gap-3 px-6 py-3 rounded-xl border bg-white/60 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 backdrop-blur-xs hover:shadow-md dark:hover:shadow-none select-none group min-w-42.5 md:min-w-47.5 transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10"
            >
              <div className="grayscale opacity-50 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                {brand.icon}
              </div>

                {/* Typography Metadata Labels */}
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {brand.name}
                  </h4>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-gray-500 mt-0.5">
                    {brand.role}
                  </p>
                </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Embedded Edge Fading Utility Layer */}
      <style>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>

    </section>
  );
}