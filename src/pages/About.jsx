import CardImg from "../assets/images/NewsLetter.png";
import TeamSection from "../components/sections/TeamSection";
import HeroImg from "../assets/images/Teamwork.webp";
import { motion } from "motion/react";
import { PiLightbulbLight } from "react-icons/pi";
import AboutSection from "../components/sections/AboutSection";
import VisionImg from "../assets/images/Vision.webp";
import CTA from "../components/sections/Call-To-Action";
import HeroSection from "../components/sections/HeroSection";

const About = () => {
  return (
    <div className="mb-8">
      {/* Hero Section */}
      <HeroSection
        heading={"About Us"}
        subText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        HeroImg={HeroImg}
      />

      {/* About Us Section */}
      <AboutSection />
      {/* Vision Section */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20 dark:bg-[#0f1115]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40 dark:opacity-10">
          <div className="absolute -left-40 top-0 h-150 w-150 rotate-45 bg-white dark:bg-white/5" />
          <div className="absolute right-0 top-0 h-125 w-125 rotate-45 bg-white/60 dark:bg-white/3" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Vision */}
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full border border-orange-200 bg-orange-50 p-2 dark:border-orange-500/30 dark:bg-orange-500/10">
                <PiLightbulbLight className="h-5 w-5 text-orange-500" />
              </div>

              <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300">
                Our Vision
              </h3>
            </div>

            <div className="mb-8 h-px w-full bg-zinc-300 dark:bg-white/10" />

            {/* Paragraphs */}
            <div className="space-y-8 text-[17px] leading-9 text-zinc-600 dark:text-zinc-400">
              <p>
                To enhance society by providing human-centered, customer-centric
                technology solutions. We understand that fulfilling our vision
                requires us to embark on a mission of attracting, developing,
                and retaining employees from a rich variety of experiences which
                is our starting point to enhancing society.
              </p>

              <p>
                Much of our strategies and plans rely on building up local
                Nigerian-African based culture and competencies, sustaining that
                through home grown technical ingenuity. We are passionate about
                partnerships that allow us build great products. We listen, we
                pay attention to details and above all, we always understand
                your needs. This enables us to deliver solutions that not only
                meet your needs, but also surpass your expectations.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Accent Border */}
            <motion.div
              animate={{
                borderColor: [
                  "rgb(255 115 0)",
                  "rgb(255 255 255)",
                  "rgb(0 0 255)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-4 -left-4 h-full w-full border rounded-2xl"
            />

            {/* Image Wrapper */}
            <div className="relative overflow-hidden border border-zinc-300 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900 rounded-2xl">
              <motion.img
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                src={VisionImg}
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative overflow-hidden bg-[#f5f5f5] py-20 dark:bg-[#0f1115]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40 dark:opacity-10">
          <div className="absolute -left-40 top-0 h-150 w-150 rotate-45 bg-white dark:bg-white/5" />
          <div className="absolute right-0 top-0 h-125 w-125 rotate-45 bg-white/60 dark:bg-white/3" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Accent Border */}
            <motion.div
              animate={{
                borderColor: [
                  "rgb(255 115 0)",
                  "rgb(255 255 255)",
                  "rgb(0 0 255)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-4 -left-4 h-full w-full border rounded-2xl"
            />

            {/* Image Wrapper */}
            <div className="relative overflow-hidden border border-zinc-300 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900 rounded-2xl">
              <motion.img
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                src={VisionImg}
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Mission */}
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full border border-orange-200 bg-orange-50 p-2 dark:border-orange-500/30 dark:bg-orange-500/10">
                <PiLightbulbLight className="h-5 w-5 text-orange-500" />
              </div>

              <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-700 dark:text-zinc-300">
                Our Mission
              </h3>
            </div>

            <div className="mb-8 h-px w-full bg-zinc-300 dark:bg-white/10" />

            {/* Paragraphs */}
            <div className="space-y-8 text-[17px] leading-9 text-zinc-600 dark:text-zinc-400">
              <p>
                To enhance society by providing human-centered, customer-centric
                technology solutions. We understand that fulfilling our vision
                requires us to embark on a mission of attracting, developing,
                and retaining employees from a rich variety of experiences which
                is our starting point to enhancing society.
              </p>

              <p>
                Much of our strategies and plans rely on building up local
                Nigerian-African based culture and competencies, sustaining that
                through home grown technical ingenuity. We are passionate about
                partnerships that allow us build great products. We listen, we
                pay attention to details and above all, we always understand
                your needs. This enables us to deliver solutions that not only
                meet your needs, but also surpass your expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <TeamSection />

      <CTA
        text="Interested in joining our team?"
        ctaText="Write to us"
      />
    </div>
  );
};

export default About;
