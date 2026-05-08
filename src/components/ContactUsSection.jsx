import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Img from "../assets/ContactUs.webp";
import Button from "./Button";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaRegEnvelope, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const inputBase =
  "w-full bg-white/15 dark:bg-white/10 backdrop-blur-sm text-white placeholder-white/60 dark:placeholder-white/40 border border-white/25 dark:border-white/15 rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:bg-white/25 focus:border-white/60 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.12)] autofill:bg-transparent";

function FloatingInput({ label, type = "text", className = "", textarea = false }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const Tag = textarea ? "textarea" : "input";
  const filled = value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <Tag
        type={!textarea ? type : undefined}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={!focused && !filled ? label : ""}
        className={`${inputBase} ${textarea ? "resize-none" : ""}`}
      />
      <AnimatePresence>
        {(focused || filled) && (
          <motion.label
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute -top-2.5 left-4 text-[11px] font-semibold text-white/80 bg-blue-600 dark:bg-blue-700 px-2 py-0.5 rounded-full pointer-events-none"
          >
            {label}
          </motion.label>
        )}
      </AnimatePresence>
    </div>
  );
}

function SendButton() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (sent || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1400);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
      className="relative w-full flex items-center justify-between bg-gray-900 dark:bg-gray-950 hover:bg-gray-800 dark:hover:bg-gray-900 text-white font-semibold text-base rounded-2xl px-6 py-4 transition-colors duration-300 overflow-hidden group"
    >
      {/* Shimmer on hover */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"
      />

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.span
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-green-400 font-semibold"
          >
            Message sent! ✓
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {loading ? "Sending..." : "Send Now"}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Arrow circle */}
      <motion.div
        animate={{
          backgroundColor: sent ? "#22c55e" : "#f97316",
          x: loading ? 4 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.svg
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ rotate: { repeat: Infinity, duration: 0.8, ease: "linear" } }}
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}

function ImagePanel() {
  return (
    <div className="relative w-full h-full min-h-130 overflow-hidden">
      

      {/* Image Section */}
      <img src={Img} alt="Contact Us" className="absolute inset-0 w-full h-full object-cover"/>

      {/* Gradient placeholder mimicking a photo */}

      {/* Blue tint overlay for brand consistency */}
      <div className="absolute inset-0 bg-blue-200/5 dark:bg-blue-950/10" />

      {/* Contact info card floating */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 right-6 left-6 bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-5"
      >
        <p className="text-white/90 text-xs font-medium uppercase tracking-widest mb-3">
          Reach us directly
        </p>
        <div className="flex flex-col gap-2.5">
          {[
            { icon: <FaEnvelope className="text-orange-500" />, label: "contact@avane.com" },
            { icon: <FaPhoneAlt className="text-orange-500" />, label: "+234 700 000 0000" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="text-white/80 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 sm:p-8"
    >
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 dark:shadow-black/50 flex flex-col lg:flex-row min-h-150">

        {/* LEFT — Form panel */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex-1 dark:bg-(image:--background-stripe) bg-(image:--dark-background-stripe) bg-blue-600/90 dark:bg-blue-700/5 px-8 sm:px-12 py-12 flex flex-col justify-center overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-4">
            <div className="w-5 h-px bg-orange-400" />
            <span className="text-orange-300 text-xs font-semibold uppercase tracking-[0.15em]">
              Get in Touch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-8"
          >
            Send Us a Message For
            <br />
            Any Inquiries
          </motion.h2>

          {/* Form */}
          <motion.div variants={stagger} className="flex flex-col gap-4">
            {/* Row 1 */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <FloatingInput label="Name" />
              <FloatingInput label="Phone" type="tel" />
            </motion.div>

            {/* Row 2 */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <FloatingInput label="Email" type="email" />
              <FloatingInput label="Subject" />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp}>
              <FloatingInput label="Message" textarea />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeUp}>
              <Button
              onClick={() => alert("This is a demo form. No message will be sent.")}
              icon={<LiaTelegramPlane className="text-blue-500" />}>
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Image panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-[45%] flexshrink-0"
        >
          <ImagePanel />
        </motion.div>

      </div>
    </div>
  );
}