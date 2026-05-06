import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import AnimatedMenu from "./AnimatedMenu";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import MobileNavBar from "./MobileNavBar";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

const NavBar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Track dropdown

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
        { name: "Software Development", link: "/services/development" }
        
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  // Animation variants for the dropdown container
  const dropDownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  return (
    <header className="bg-white dark:bg-gray-950 fixed top-0 left-0 w-full z-1000">
      <nav className="drop-shadow-sm flex items-center justify-between py-3 px-7 max-w-7xl mx-auto">
        <Link to="/">
          <Logo className="w-20 h-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex transition-all items-center gap-5 lg:gap-7">
          {navLinks.map((item, index) => (
            <div 
            key={index} 
            className="relative py-2"
            onMouseEnter={() => item.subServices && setIsServicesOpen(true)}
            onMouseLeave={() => item.subServices && setIsServicesOpen(false)}
            >
              {item.subServices ? (
                // Dropdown Trigger
                <div className="flex items-center gap-1 cursor-pointer dark:text-gray-100 text-gray-700 font-medium hover:text-blue-700 transition-all">
                  <Link to={item.link}>{item.name}</Link>
                  <motion.span animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                    <LuChevronDown />
                  </motion.span>
                   
                  {/* Dropdown Menu with Framer-Motion */}
                  <AnimatePresence>
                    {isServicesOpen && (
                  <motion.div
                  variants={dropDownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg shadow-lg  z-50 overflow-hidden">
                    <div className="py-2 flex flex-col">
                      {item.subServices.map((sub, subIdx) => (
                        <div className="hover:bg-blue-50 dark:hover:bg-blue-900/30" key={subIdx}>
                          <Link
                          to={sub.link}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-700
                          hover:translate-x-1 transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
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
                  className="dark:text-gray-100 text-gray-700 font-medium hover:text-blue-700 transition-all duration-150"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle size={25} />
          <span className="dark:text-gray-100 text-gray-700">|</span>
          <Link to="/contact" className="hidden lg:block">
            <Button
              btnBgColor="bg-linear-60 from-blue-700 to-cyan-500"
              btnBgHover="bg-linear-to-r from-orange-500 to-amber-500"
              size={20}
              btnTxtColor="text-white"
              icon={<LuArrowUpRight className="text-blue-500 group-hover:text-orange-500" size={19} />}
            >
              Get In Touch
            </Button>
          </Link>
          <button onClick={() => setMenuOpen(!MenuOpen)} className="lg:hidden hover:cursor-pointer transition-all">
            {MenuOpen ? <FaXmark className="w-6 h-6 dark:text-gray-100 text-gray-700" /> : <AnimatedMenu size={23} />}
          </button>
        </div>
      </nav>
      <MobileNavBar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default NavBar;
