import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { IoArrowRedoOutline } from "react-icons/io5";
import HeroImg from "../assets/images/Vision.webp";

const ComingSoon = () => {
  return (
    <div
      className="w-full h-screen pt-32 pb-20 bg-linear-to-br from-blue-600/10 to-cyan-500/10 dark:from-[#0b1220] dark:to-[#1e293b] text-gray-600 dark:text-gray-100 gap-4"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-slate-100/90 dark:bg-[#0d1527]/85 pointer-events-none" />
      <div className="flex flex-col justify-center items-center gap-6 relative top-[30%] z-10">
        <p>This Page is</p>
        <h1 className="text-4xl font-bold text-center">Coming Soon</h1>
        <Button
          as={Link}
          to="/"
          icon={<IoArrowRedoOutline className="text-blue-500" />}
        >
          Back to Home Page
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
