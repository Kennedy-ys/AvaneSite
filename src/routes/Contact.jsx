import ContactSection from "../components/ContactUsSection";
import HeroSection from "../components/HeroSection";
import HeroImg from "../assets/Teamwork.webp";

const Contact = () => {
  return (
    <div className="mt-20.5">
      {/* Hero Section */}
      <HeroSection
        heading={"Contact Us"}
        subText={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        HeroImg={HeroImg}
      />

      <section className="relative overflow-hidden bg-linear-60 to-white from-slate-50 dark:bg-linear-to-br dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#0a0f1c]">
        <ContactSection />
      </section>
    </div>
  );
};

export default Contact;
