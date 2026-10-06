import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Button from "../ui/Button";
import advisorImg from "../../assets/images/aboutUs.webp";
import { IoArrowRedoOutline, IoCheckmarkDoneSharp } from "react-icons/io5";

const checkItems = [
  "Scalable Digital solutions",
  "Cutting-Edge Technology",
  "24/7 Technical Support",
  "Data Security & Privacy",
];

// Parents container variant to orchestrate right-side children staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection = () => {
  return (
    <section className="py-20 px-6 dark:bg-(image:--background-stripe) bg-(image:--dark-background-stripe) bg-white/30 dark:bg-slate-900/80 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <motion.div
          className="relative pb-10 md:pb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative blobs */}
          <motion.div
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-orange-400/20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          />
          <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-orange-500" />

          {/* Main image */}
          <div className="rounded-2xl overflow-hidden aspect-4/3.5 relative shadow-lg">
            <img
              src={advisorImg}
              alt="Board meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating quote card */}
          <motion.div
            className="absolute -bottom-6 -left-5 bg-amber-50 dark:bg-slate-800 rounded-2xl p-5 w-52 shadow-xl border border-orange-500/10"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          >
            <p className="text-2xl font-bold text-orange-500 leading-none mb-2">
              ❝
            </p>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug mb-3">
              The best way to predict the future is to invent it.
            </p>
            <div className="flex items-center gap-2">
              <span className="block w-4 h-0.5 bg-orange-500" />
              <span className="text-xs font-semibold text-orange-500">
                Alan Kay
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-4"
          >
            <span className="block w-6 h-0.5 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              WHO WE ARE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white mb-5"
          >
            Driving Growth with Cutting
            <span className="text-blue-600">-Edge</span> Technology
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 dark:text-slate-400 leading-relaxed mb-3 "
          >
            At Avane our journey began with a simple yet powerful mission: to
            bridge the gap between complex technology and business. We believe
            that digital tools should empower, not complicate. Our team of
            experts is dedicated to delivering high-performance [IT
            Services/Software/Solutions] that help our clients stay ahead in an
            ever-evolving digital landscape.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6"
          >
            With years of experience in the technology sector, we have built a
            reputation for innovation, reliability, and excellence.
          </motion.p>

          {/* Checklist */}
          <motion.ul
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8"
          >
            {checkItems.map((item, index) => (
              <motion.li
                key={item}
                custom={index}
                variants={{
                  hidden: { opacity: 0, x: 10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.05, ease: "easeOut" },
                  },
                }}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <IoCheckmarkDoneSharp className="text-blue-400" />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button
              as={Link}
              to="/about"
              icon={<IoArrowRedoOutline className="text-blue-600" size={19} />}
              btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500"
              btnBgHover="bg-blue-700"
              size={19}
            >
              Read More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
