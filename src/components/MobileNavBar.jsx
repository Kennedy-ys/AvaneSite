import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import Button from "./Button";

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
  const location = useLocation();
  const currentPath = location.pathname || "/";

  const [servicesExpanded, setServicesExpanded] = useState(() => {
    return currentPath.startsWith("/services");
  });

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
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
          className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white/70 dark:bg-black/70 backdrop-blur-md border z-300 overflow-y-auto border-b border-gray-300 dark:border-gray-800 rounded-b-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        >
          <ul className="flex flex-col items-start p-8 space-y-6">
            {navLinks.map((item, index) => {
              const isActiveParent =
                item.subServices &&
                item.subServices.some((sub) => sub.link === currentPath);
              const isCurrentRoute = currentPath === item.link;

              return (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="w-full"
                >
                  {item.subServices ? (
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full text-2xl font-bold">
                        {/* Parent text container links to service dashboard if expanded */}
                        <div
                          className={`cursor-pointer w-full hover:text-blue-700 hover:translate-x-1 transition-all duration-200 ${
                            isActiveParent
                              ? "text-blue-700"
                              : "text-gray-900 dark:text-white"
                          }`}
                          onClick={() => setServicesExpanded(!servicesExpanded)}
                        >
                          {item.name}
                        </div>

                        <motion.button
                          onClick={() => setServicesExpanded(!servicesExpanded)}
                          animate={{ rotate: servicesExpanded ? 180 : 0 }}
                          className={`p-2 hover:cursor-pointer transition-colors ${
                            isActiveParent
                              ? "text-blue-700"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          <LuChevronDown size={24} />
                        </motion.button>
                      </div>

                      {/* Accordion Menu */}
                      <AnimatePresence>
                        {servicesExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col pl-4 mt-4 space-y-4 border-l-2 border-blue-500"
                          >
                            {item.subServices.map((sub, subIdx) => {
                              const isSubActive = currentPath === sub.link;
                              return (
                                <li
                                  className={`group rounded p-2 transition-colors ${
                                    isSubActive
                                      ? "bg-blue-50/70 dark:bg-blue-900/20"
                                      : "hover:bg-blue-50/70 dark:hover:bg-blue-900/30"
                                  }`}
                                  key={subIdx}
                                >
                                  <Link
                                    to={sub.link}
                                    onClick={() => setMenuOpen(false)}
                                    className={`inline-block text-xl font-semibold w-full group-hover:translate-x-1 transition-all duration-200 ${
                                      isSubActive
                                        ? "text-blue-700"
                                        : "text-gray-900 dark:text-gray-200 group-hover:text-blue-700"
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Link
                    <Link
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className={`inline-block text-2xl w-full font-bold hover:translate-x-1 transition-all duration-200 ${
                        isCurrentRoute
                          ? "text-blue-700"
                          : "text-gray-900 dark:text-white hover:text-blue-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              );
            })}

            <motion.div variants={itemVariants} className="pt-4">
              <Button
                as={Link}
                to="/contact"
                onClick={() => setMenuOpen(false)}
                btnBgColor="bg-linear-60 from-blue-700 to-cyan-500"
                btnBgHover="bg-blue-700"
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
