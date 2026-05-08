import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const MobileNavBar = ({ MenuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  // Local state to toggle the services sub-menu
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      link: "/services",
      // Sub-links for the dropdown
      subServices: [
        { name: "Research", link: "/services/research" },
        { name: "UI/UX Design", link: "/services/design" },
        { name: "Software Development", link: "/services/development" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <AnimatePresence>
      {MenuOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-[#0b1220] z-50 overflow-y-auto border-b border-gray-300 dark:border-gray-400 rounded-b-2xl"
        >
          <ul className="flex flex-col items-start p-8 space-y-6">
            {navLinks.map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="w-full">
                {item.subServices ? (
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full text-2xl font-bold dark:text-white">
                      {/* 
          If already expanded, this acts as a Link. 
          If not, it just opens the dropdown. 
      */}
                      <div
                        className={`cursor-pointer w-full hover:text-blue-700 hover:translate-x-1 transition-colors duration-200 ${servicesExpanded ? "text-blue-700" : ""}`}
                        onClick={() => {
                          if (servicesExpanded) {
                            setMenuOpen(false); // Close mobile menu
                            navigate(item.link); // Navigate
                          } else {
                            setServicesExpanded(true); // Just open dropdown
                          }
                        }}
                      >
                        {item.name}
                      </div>

                      <motion.button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        animate={{ rotate: servicesExpanded ? 180 : 0 }}
                        className="p-2 hover:cursor-pointer"
                      >
                        <LuChevronDown size={24} />
                      </motion.button>
                    </div>

                    {/* Animated Sub-links Accordion */}
                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden flex flex-col pl-4 mt-4 space-y-4 border-l-2 border-blue-500"
                        >
                          {item.subServices.map((sub, subIdx) => (
                            <li
                              className="group hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded p-2"
                              key={subIdx}
                            >
                              <Link
                                to={sub.link}
                                onClick={() => setMenuOpen(false)} // Close menu on click
                                className="inline-block text-xl text-gray-700 dark:text-gray-200 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular Link
                  <Link
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="inline-block text-2xl w-full font-bold dark:text-white hover:text-blue-700 hover:translate-x-1 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}

            <motion.div variants={itemVariants} className="pt-4">
              <Button
                as={Link}
                to="/contact"
                onClick={() => setMenuOpen(false)}
                btnBgColor="bg-linear-60 from-blue-700 to-cyan-500"
                btnBgHover="bg-linear-to-r from-orange-500 to-amber-500"
                size={20}
                btnTxtColor="text-white"
                icon={<LuArrowUpRight className="text-blue-500" size={19} />}
              >
                Get In Touch
              </Button>
            </motion.div>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavBar;
