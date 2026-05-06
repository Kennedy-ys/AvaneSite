import { Link } from "react-router-dom";
import advisorImg from "../assets/aboutUs.webp";
import Button from "./Button";
import { IoArrowRedoOutline, IoCheckmarkDoneSharp } from "react-icons/io5";

const checkItems = [
  "Scalable Digital solutions",
  "Cutting-Edge Technology",
  "24/7 Technical Support",
  "Data Security & Privacy",
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 dark:bg-(image:--background-stripe) bg-(image:--dark-background-stripe) bg-white/30 dark:bg-slate-900/80">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <div className="relative pb-10 md:pb-0">
          {/* Decorative blobs */}
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-orange-400/20" />
          <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-orange-500" />

          {/* Main image */}
          <div className="rounded-2xl overflow-hidden aspect-4/3.5 relative">
            <img
              src={advisorImg}
              alt="Board meeting"
              style={{ backgroundImage: `url(${advisorImg})` }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating quote card */}
          <div className="absolute -bottom-6 -left-5 bg-amber-50 dark:bg-slate-800 rounded-2xl p-5 w-52 shadow-xl">
            <p className="text-2xl font-bold text-orange-500 leading-none mb-2">
              ❝
            </p>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug mb-3">
              The best way to predict the future is to invent it.
            </p>
            <div className="flex items-center gap-2">
              <span className="block w-4 h-0.5 bg-orange-500" />
              <span className="text-xs font-semibold text-orange-500">
                Alan Kay
              </span>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-0.5 bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              WHO WE ARE
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white mb-5">
            Driving Growth with Cutting
            <span className="text-blue-600">-Edge</span> Technology
          </h2>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
            At Avane our journey began with a simple yet powerful mission: to bridge the gap between complex technology and business. We believe that digital tools should empower, not complicate. Our team of experts is dedicated to delivering high-performance [IT Services/Software/Solutions] that help our clients stay ahead in an ever-evolving digital landscape.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            With years of experience in the technology sector, we have built a
            reputation for innovation, reliablilty, and excellence.
          </p>

          {/* Checklist */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                  <IoCheckmarkDoneSharp className="text-blue-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}

          <Button
            as={Link}
            to="/about"
            icon={
              <IoArrowRedoOutline
                className="text-blue-600 group-hover:text-orange-500"
                size={19}
              />
            }
            btnBgColor="bg-linear-to-r from-blue-700 to-cyan-500"
            btnBgHover="bg-linear-to-r from-orange-500 to-amber-500"
            size={19}
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
