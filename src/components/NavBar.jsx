import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import { FaCode, FaPalette, FaDatabase, FaBriefcase, FaShieldAlt, FaPenNib, FaComments, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Logo from "./Logo";
import AnimatedMenu from "./AnimatedMenu";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPath = location.pathname || "/";

  // Structured navigation data with nested subcategories for "Services"
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      subCategories: [
        {
          title: "DEVELOPMENT & DESIGN",
          items: [
            { name: "Software & Web Development ",
              link: "/services/development",
              icon: <FaCode /> },
            { name: "UI/UX Design", link: "/services/ui-ux-design",
              icon: <FaPalette /> },
          ],
        },
        {
          title: "STRATEGY & ANALYSIS",
          items: [
            { name: "Data Analysis", link: "/services/analysis",
              icon: <FaDatabase /> },
            { name: "Project Management", link: "/services/project-management",
              icon: <FaBriefcase /> },
            { name: "Research & Insights", link: "/services/research",
              icon: <FaSearch /> },
          ],
        },
        {
          title: "CONTENT & MARKETING",
          items: [
            { name: "Graphics Design", link: "/services/graphics-design",
              icon: <FaPenNib /> },
            { name: "Social Media Management", link: "/services/social-media-management",
              icon: <FaComments /> },
          ],
        },
        {
          title: "SECURITY & OTHERS",
          items: [
            { name: "Cybersecurity", link: "/services/cybersecurity",
              icon: <FaShieldAlt /> }
          ],
        },
      ],
    },
    { name: "Blog", link: "/blog" },
    { name: "Academy", link: "/academy" },
    { name: "Contact", link: "/contact" }
  ];

  const dropDownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 ${isScrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md" : "bg-transparent"} w-full z-1000`}
      >
        <nav className="flex items-center justify-between py-3 px-7 max-w-7xl mx-auto">
          <Link to="/">
            <Logo className="w-20 h-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex transition-all items-center gap-5 lg:gap-7">
            {navLinks.map((item, index) => {
              // Deep match active subcategories routes to highlight "Services" parent
              const isActiveParent =
                item.subCategories &&
                item.subCategories.some((subCategory) =>
                  subCategory.items.some((sub) => sub.link === currentPath),
                );

              const isCurrentRoute = currentPath === item.link;

              return (
                <div
                  key={index}
                  className="relative py-2"
                  onMouseEnter={() =>
                    item.subCategories && setIsServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    item.subCategories && setIsServicesOpen(false)
                  }
                >
                  {item.subCategories ? (
                    // Dropdown Trigger 
                    <div
                      className={`flex items-center gap-1 cursor-pointer font-medium ${isActiveParent ? "text-blue-600" : "text-gray-700 dark:text-gray-100 hover:text-blue-700"} transition-all`}
                    >
                      <span>{item.name}</span>
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      >
                        <LuChevronDown />
                      </motion.span>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            variants={dropDownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 mt-2 w-150 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-2xl z-50 p-6"
                          >
                            {/* Grid columns logic to pull from item context */}
                            <div className="grid grid-cols-2 gap-x-9 gap-y-6">
                              {item.subCategories.map((category, catIdx) => (
                                <div key={catIdx} className="space-y-3">
                                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                                    {category.title}
                                  </h3>
                                  <div className="flex flex-col space-y-1">
                                    {category.items.map((sub, subIdx) => (
                                      <Link
                                        key={subIdx}
                                        to={sub.link}
                                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:text-blue-600 hover:bg-blue-100 hover:translate-x-1 dark:hover:bg-blue-900/30 transition-all duration-200 ${currentPath === sub.link ? "text-blue-600 bg-blue-100 dark:bg-blue-900/30 font-semibold": "text-gray-700 dark:text-gray-200"} `}
                                      >
                                        <span className="text-blue-500">
                                          {sub.icon}
                                        </span>
                                        <span className="whitespace-nowrap">
                                          {sub.name}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Link
                    <Link
                      to={item.link}
                      className={`font-medium transition-all duration-150 ${
                        isCurrentRoute
                          ? "text-blue-600"
                          : "dark:text-gray-100 text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle size={25} />
            <span className="dark:text-gray-100 text-gray-700">|</span>
            <Link to="/contact" className="hidden lg:block">
              <Button
                btnBgColor="bg-linear-60 from-blue-700 to-cyan-500"
                btnBgHover="bg-blue-700"
                size={18}
                btnTxtColor="text-white"
                icon={<LuArrowUpRight className="text-blue-500" size={19} />}
              >
                Get In Touch
              </Button>
            </Link>
            <button
              onClick={() => setMenuOpen(!MenuOpen)}
              className="lg:hidden hover:cursor-pointer transition-all"
            >
              {MenuOpen ? (
                <FaXmark className="w-6 h-6 dark:text-gray-100 text-gray-700" />
              ) : (
                <AnimatedMenu size={23} />
              )}
            </button>
          </div>
        </nav>
      </header>
      <MobileNavBar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default NavBar;
