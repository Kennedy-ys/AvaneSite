import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import AnimatedMenu from "./AnimatedMenu";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import SideBar from "./SideBar";
import { LuArrowUpRight } from "react-icons/lu";
// import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header>
      <nav className="bg-white dark:bg-gray-950 drop-shadow-sm flex items-center justify-between py-3 px-7 fixed top-0 left-0 w-full z-1000">
        <Link to="/">
          <Logo className="w-20 h-auto" />
        </Link>

        <div className="hidden md:flex transition-all items-center gap-5 lg:gap-7">
          {navLinks.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="dark:text-gray-100 text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150"
            >
                {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle size={25} />
          <span className="dark:text-gray-100 text-gray-700">|</span>
          
            <Link className="hidden md:block">
            <Button btnBgColor="bg-linear-60 from-blue-500 to-blue-400" btnBgHover="bg-blue-600" size={20} btnTxtColor="text-white" icon={<LuArrowUpRight className="text-blue-500" size={19}/>}>Discover More</Button>
            </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden hover:cursor-pointer transition-all`}
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 dark:text-gray-100 text-gray-700" />
            ) : (
              <AnimatedMenu size={23} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <SideBar
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </header>
  );
};

export default NavBar;
