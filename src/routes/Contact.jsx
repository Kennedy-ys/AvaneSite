import React from 'react'
import ContactSection from "../components/ContactUsSection";
import BreadCrums from "../components/BreadCrums";
const Contact = () => {
  return (
    <div className="mt-17 md:mt-15">
      {/* Hero Section*/}
      <section className="relative overflow-hidden bg-linear-60 to-white from-slate-50 dark:bg-linear-to-br dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#0a0f1c]">
        {/* hero section */}
    <div className='w-full py-10 '>
  <BreadCrums />      

    </div>

    <ContactSection />
      </section>
      </div>
  )
}

export default Contact