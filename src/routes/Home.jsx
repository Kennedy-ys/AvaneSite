import React from 'react'
// import heroImg from '../assets/hero.png'
import heroIImg from '../assets/hero1.png'
// import heroIIImg from '../assets/hero2.png'
import { ArrowRightIcon, MoveRight } from 'lucide-react'

const Home = () => {
  return (
    <div className='bg-linear-180 from-white to-slate-100 dark:from-gray-900 dark:to-slate-900  min-h-screen pt-20 '>
      {/* Hero Section*/}
      <section className='flex flex-col sm:flex-row ml-7'>
        
        <div className='flex flex-col gap-9'>
          <div className='bg-linear-90 from-orange-500 to-blue-600 p-[2.8px] w-15 rounded'/>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold dark:text-gray-300'>
            Technology that <span className='text-orange-500'>moves</span> businesses <span className='text-blue-700'>forward</span>.
          </h1>
          <p className='text-gray-800 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, impedit adipisci error placeat rerum provident totam voluptas fuga expedita rem velit dolores, assumenda laboriosam itaque quos, est harum maxime eius.</p>
          
          {/* CTA Buttons */}
          <div className='flex flex-row gap-7 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]'>
            <button className='flex gap-3 items-center group bg-blue-700 hover:bg-blue-600 text-white hover:cursor-pointer font-medium py-3 px-7 rounded-full transition-colors duration-300'>Explore Our Services
              <MoveRight 
              className='group-hover:translate-x-1 transition-transform duration-300'
              size={20}/>
              </button>
            <button className='border border-blue-700 text-blue-700 hover:cursor-pointer hover:bg-blue-100 font-medium py-3 px-7 rounded-full transition-colors duration-300'>Learn More</button>
          </div>
        </div>
        <div className='hidden md:block'>
          <img className='bg-cover' src={heroIImg} alt="Hero Image" srcSet="" />
        </div>
      </section>
    </div>
  )
}

export default Home