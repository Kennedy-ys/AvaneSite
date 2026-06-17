import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import { FaCode, FaPalette, FaDatabase, FaBriefcase, FaSearch, FaShieldAlt, FaBook, FaPenNib, FaComments } from 'react-icons/fa';
import Button from "./Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const MobileNavBar = ({ MenuOpen, setMenuOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname || "/";

  const [servicesExpanded, setServicesExpanded] = useState(() => {
    return currentPath.includes("/services") || currentPath === "/software" || currentPath === "/design";
  });

  // 
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      serviceCategories: [
        {
          title: "DEVELOPMENT & DESIGN",
          items: [
            { name: "Software & Web Development", link: "/services/development", icon: <FaCode /> },
            { name: "UI/UX Design", link: "/services/ui-ux-design", icon: <FaPalette /> },
          ]
        },
        {
          title: "STRATEGY & ANALYSIS",
          items: [
            { name: "Data Analysis", link: "/services/analysis", icon: <FaDatabase /> },
            { name: "Project Management", link: "/services/product-management", icon: <FaBriefcase /> },
            { name: "Research & Insights", link: "/services/research", icon: <FaSearch /> },
          ]
        },
        {
          title: "CONTENT & MARKETING",
          items: [
            { name: "Graphics Design", link: "/services/graphics-design", icon: <FaPenNib /> },
            { name: "Social Media Management", link: "/services/social-media-management", icon: <FaComments /> },
          ]
        },
        {
          title: "SECURITY & OTHERS",
          items: [
            { name: "Cybersecurity", link: "/services/Cybersecurity", icon: <FaShieldAlt /> },
            { name: "Training & Certifications", link: "/services/training&certification", icon: <FaBook /> },
          ]
        }
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
          className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border z-300 overflow-y-auto border-b border-gray-300 dark:border-gray-800 rounded-b-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        >
          <ul className="flex flex-col items-start p-8 space-y-6">
            {navLinks.map((item, index) => {
              // Deep loop category matching to keep parent highlighed blue if any nested route is active
              const isActiveParent =
                item.serviceCategories &&
                item.serviceCategories.some((cat) =>
                  cat.items.some((sub) => sub.link === currentPath)
                );
              
              const isCurrentRoute = currentPath === item.link;

              return (
                <motion.li key={index} variants={itemVariants} className="w-full">
                  {item.serviceCategories ? (
                    <div className="flex flex-col w-full">
                      {/* One singular unified trigger area */}
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className={`flex items-center justify-between w-full text-2xl font-bold transition-all duration-200 text-left outline-none ${
                          isActiveParent ? "text-blue-600" : "text-gray-900 dark:text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: servicesExpanded ? 180 : 0 }}
                          className="p-1"
                        >
                          <LuChevronDown size={24} />
                        </motion.span>
                      </button>

                      {/* Accordion Categorized Submenu */}
                      <AnimatePresence initial={false}>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.25 }, opacity: { duration: 0.2 } } }}
                            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.2 }, opacity: { duration: 0.15 } } }}
                            className="overflow-hidden flex flex-col pl-3 mt-4 space-y-5 border-l-2 border-blue-600/40"
                          >
                            {item.serviceCategories.map((category, catIdx) => (
                              <div key={catIdx} className="space-y-2">
                                {/* Category Header */}
                                <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider pl-2">
                                  {category.title}
                                </h4>
                                
                                <ul className="flex flex-col space-y-1">
                                  {category.items.map((sub, subIdx) => {
                                                                        return (
                                      <li key={subIdx} className="w-full">
                                        <Link
                                          to={sub.link}
                                          onClick={() => setMenuOpen(false)}
                                          className={`flex items-center gap-3 w-full px-3 py-3 text-lg font-semibold rounded-md hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:translate-x-1 transition-all duration-150 ${
                                            currentPath === sub.link
                                              ? "text-blue-600 bg-blue-100 dark:bg-blue-900/30 font-semibold": "text-gray-700 dark:text-gray-200"
                                          }`}
                                        >
                                          <span className="text-blue-500">
                                            {sub.icon}
                                          </span>
                                          <span>{sub.name}</span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Top-Level Nav Link
                    <Link
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={`inline-block text-2xl w-full font-bold hover:translate-x-1 transition-all duration-200 ${
                        isCurrentRoute
                          ? "text-blue-600"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              );
            })}

            {/* Action CTA Button */}
            <motion.div variants={itemVariants} className="pt-4 w-full">
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="inline-block">
                <Button
                  btnBgColor="bg-linear-60 from-blue-700 to-cyan-500"
                  btnBgHover="bg-blue-700"
                  size={20}
                  btnTxtColor="text-white"
                  icon={<LuArrowUpRight className="text-blue-500" size={19} />}
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavBar;
