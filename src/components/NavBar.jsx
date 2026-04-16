import { useState } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import AnimatedMenu from './AnimatedMenu'
import ThemeToggle from './ThemeToggle'
import SideBar from './SideBar'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
    <nav className='bg-white dark:bg-gray-950 drop-shadow-sm flex items-center justify-between py-3 px-7 fixed top-0 left-0 w-full'>
        <Link to='/'>
        <img src={Logo} className='w-20 h-9' alt="Avane Logo" />
        </Link>

        <div className="hidden md:flex transition-all items-center gap-7">
            <Link to='/' className='dark:text-gray-100 text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>Home</Link>
            <Link to='/about' className='dark:text-gray-100 text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>About</Link>
            <Link to='/services' className='dark:text-gray-100 text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>Services</Link>
            <Link to='/contact' className='dark:text-gray-100 text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>Contact</Link>
        </div>
        <div className="flex items-center gap-4">
                <ThemeToggle size={25} />
            <span className='dark:text-gray-100 '>|</span>
            <button className='hidden md:flex bg-blue-700 hover:bg-blue-600 dark:bg-linear-80 dark:from-blue-500 dark:to-blue-600 text-white font-medium dark:hover:bg-linear-80 dark:hover:from-blue-600 dark:hover:to-blue-500 hover:cursor-pointer py-1 px-3 rounded-2xl transition-all duration-300 ' >Get Started</button>

            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden  hover:cursor-pointer transition-all`}>
                <AnimatedMenu size={23} />
            </button>
        </div>

    </nav>

    {/* Mobile Sidebar */}
    <SideBar isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default NavBar