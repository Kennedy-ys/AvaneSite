import {Link} from 'react-router-dom'
import { SunMoon } from 'lucide-react'

const NavBar = () => {
  return (
    <nav className='bg-white drop-shadow-sm flex items-center justify-between py-3 px-7 fixed top-0 left-0 w-full'>
        <Link to='/'>
        <img src="src/assets/logo.jpg" className='w-20 h-9' alt="Avane Logo" />
        </Link>

        <div className="flex items-center gap-7">
            <Link to='/' className='text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>Home</Link>
            <Link to='/about' className='text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>About</Link>
            <Link to='/services' className='text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>Services</Link>
            <Link to='/contact' className='text-gray-700 font-medium  hover:text-blue-700 transition-all duration-150'>Contact</Link>
        </div>
        <div className="flex items-center gap-5">
            <button className='hover:cursor-pointer'>
                <SunMoon className='text-2xl' size={23}/>
            </button>
            |
            <button className='bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer py-0.5 px-3 rounded-2xl' >Get Started</button>
        </div>

    </nav>
  )
}

export default NavBar