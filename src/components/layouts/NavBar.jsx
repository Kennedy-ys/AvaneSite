import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import {
  FaCode,
  FaPalette,
  FaDatabase,
  FaBriefcase,
  FaShieldAlt,
  FaPenNib,
  FaComments,
  FaSearch,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Logo from "../ui/Logo";
import AnimatedMenu from "../ui/AnimatedMenu";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  // Handle scroll events to determine if the user has scrolled down a page
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

  // Handle scroll events to determine if the user is scrolling down or up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 160) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const currentPath = location.pathname || "/";

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      subCategories: [
        {
          title: "DEVELOPMENT & DESIGN",
          items: [
            {
              name: "Software & Web Development ",
              link: "/services/development",
              icon: <FaCode />,
            },
            {
              name: "UI/UX Design",
              link: "/services/ui-ux-design",
              icon: <FaPalette />,
            },
          ],
        },
        {
          title: "STRATEGY & ANALYSIS",
          items: [
            {
              name: "Data Analysis",
              link: "/services/analysis",
              icon: <FaDatabase />,
            },
            {
              name: "Project Management",
              link: "/services/project-management",
              icon: <FaBriefcase />,
            },
            {
              name: "Research & Insights",
              link: "/services/research",
              icon: <FaSearch />,
            },
          ],
        },
        {
          title: "CONTENT & MARKETING",
          items: [
            {
              name: "Graphics Design",
              link: "/services/graphics-design",
              icon: <FaPenNib />,
            },
            {
              name: "Social Media Management",
              link: "/services/social-media-management",
              icon: <FaComments />,
            },
          ],
        },
        {
          title: "SECURITY & OTHERS",
          items: [
            {
              name: "Cybersecurity",
              link: "/services/cybersecurity",
              icon: <FaShieldAlt />,
            },
          ],
        },
      ],
    },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Academy", link: "/academy" },
    { name: "Contact", link: "/contact" },
  ];

  const dropDownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 28,
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.95,
      transition: { duration: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-1000 w-full transition-[background-color,box-shadow] duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between py-3 px-7 max-w-7xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link to="/">
              <Logo className="w-17 sm:w-20 h-auto" />
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-5 lg:gap-7">
            {navLinks.map((item, index) => {
              const isActiveParent =
                item.subCategories &&
                item.subCategories.some((subCategory) =>
                  subCategory.items.some((sub) => sub.link === currentPath),
                );

              const isCurrentRoute = currentPath === item.link;
              const showUnderline = hovered
                ? hovered === item.name
                : isCurrentRoute || isActiveParent;

              return (
                <div
                  key={index}
                  className="relative py-2"
                  onMouseEnter={() => {
                    setHovered(item.name);
                    item.subCategories && setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    item.subCategories && setIsServicesOpen(false);
                  }}
                >
                  {item.subCategories ? (
                    <div
                      className={`flex items-center gap-1 cursor-pointer font-medium ${
                        isActiveParent
                          ? "text-blue-600"
                          : "text-gray-700 dark:text-gray-100 hover:text-blue-700"
                      }`}
                    >
                      <span className="relative">
                        {item.name}
                        {showUnderline && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 32,
                            }}
                          />
                        )}
                      </span>
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      >
                        <LuChevronDown />
                      </motion.span>

                      <div className="absolute top-full left-0 z-50 pt-2 origin-top">
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              variants={dropDownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="w-150 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-2xl p-6"
                            >
                              <div className="grid grid-cols-2 gap-x-9 gap-y-6">
                                {item.subCategories.map((category, catIdx) => (
                                  <motion.div
                                    key={catIdx}
                                    variants={itemVariants}
                                    className="space-y-3"
                                  >
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                                      {category.title}
                                    </h3>
                                    <div className="flex flex-col space-y-1">
                                      {category.items.map((sub, subIdx) => (
                                        <Link
                                          key={subIdx}
                                          to={sub.link}
                                          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:text-blue-600 hover:bg-blue-100 hover:translate-x-1 dark:hover:bg-blue-900/30 transition-all duration-200 ${
                                            currentPath === sub.link
                                              ? "text-blue-600 bg-blue-100 dark:bg-blue-900/30 font-semibold"
                                              : "text-gray-700 dark:text-gray-200"
                                          }`}
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
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className={`font-medium ${
                        isCurrentRoute
                          ? "text-blue-600"
                          : "dark:text-gray-100 text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      <span className="relative">
                        {item.name}
                        {showUnderline && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 32,
                            }}
                          />
                        )}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle size={25} />
            <span className="dark:text-gray-100 text-gray-700">|</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="hidden lg:block"
            >
              <Link to="/contact">
                <Button
                  btnBgColor="bg-linear-60 from-blue-700 to-cyan-500"
                  btnBgHover="bg-blue-700"
                  size={16}
                  btnTxtColor="text-white"
                  icon={<LuArrowUpRight className="text-blue-500" size={19} />}
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
            <button
              onClick={() => setMenuOpen(!MenuOpen)}
              className="lg:hidden hover:cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={MenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.18 }}
                >
                  {MenuOpen ? (
                    <FaXmark className="w-6 h-6 dark:text-gray-100 text-gray-700" />
                  ) : (
                    <AnimatedMenu size={23} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileNavBar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default NavBar;
