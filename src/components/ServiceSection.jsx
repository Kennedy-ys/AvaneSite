import { Link } from "react-router-dom";
import Button from "./Button";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { LuGraduationCap, LuLayers, LuPalette, LuShare2, LuShieldAlert } from "react-icons/lu";
import { AiOutlineProject } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";

const colorMap = {
  orange: {
    bar: "bg-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-400",
    iconText: "text-orange-400 dark:text-orange-100",
    btnFrom: "from-orange-500",
    btnIcontxt: "text-orange-500",
    btnBgHover: "bg-orange-600",
  },
  blue: {
    bar: "bg-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-400",
    iconText: "text-blue-400 dark:text-blue-100",
    btnFrom: "from-blue-700",
    btnIcontxt: "text-blue-500",
    btnBgHover: "bg-blue-600",
  },
  teal: {
    bar: "bg-teal-500",
    iconBg: "bg-teal-50 dark:bg-teal-400",
    iconText: "text-teal-400 dark:text-teal-100",
    btnFrom: "from-teal-500",
    btnIcontxt: "text-teal-500",
    btnBgHover: "bg-teal-600",
  },
  violet: {
    bar: "bg-violet-500",
    iconBg: "bg-violet-50 dark:bg-violet-400",
    iconText: "text-violet-400 dark:text-violet-100",
    btnFrom: "from-violet-500",
    btnIcontxt: "text-violet-500",
    btnBgHover: "bg-violet-600",
  },
  pink: {
    bar: "bg-pink-500",
    iconBg: "bg-pink-50 dark:bg-pink-400",
    iconText: "text-pink-400 dark:text-pink-100",
    btnFrom: "from-pink-500",
    btnIcontxt: "text-pink-500",
    btnBgHover: "bg-pink-600",
  },
  red: {
    bar: "bg-red-500",
    iconBg: "bg-red-50 dark:bg-red-400",
    iconText: "text-red-400 dark:text-red-100",
    btnFrom: "from-red-500",
    btnIcontxt: "text-red-500",
    btnBgHover: "bg-red-600",
  },
  zinc: {
    bar: "bg-zinc-500",
    iconBg: "bg-zinc-50 dark:bg-zinc-400",
    iconText: "text-zinc-400 dark:text-zinc-100",
    btnFrom: "from-zinc-500",
    btnIcontxt: "text-zinc-500",
    btnBgHover: "bg-zinc-600",
  },
  green: {
    bar: "bg-green-500",
    iconBg: "bg-green-50 dark:bg-green-400",
    iconText: "text-green-400 dark:text-green-100",
    btnFrom: "from-green-500",
    btnIcontxt: "text-green-500",
    btnBgHover: "bg-green-600",
  },
};

const colorTo2Map = {
  amber: "to-amber-500",
  cyan: "to-cyan-500",
  emerald: "to-emerald-500",
  indigo: "to-indigo-500",
  fuchsia: "to-fuchsia-500",
  rose: "to-rose-500",
  slate: "to-slate-500",
  lime: "to-lime-500",
};

const services = [
  {
    link: "research",
    title: "Research",
    description:
      "Data-driven insights that inform strategic decisions and uncover opportunities.",
    offerings: [
      "Market Analysis & Competitive Research",
      "User Research & Behavioral Studies",
      "Technology Assessment & Feasibility Studies",
      "Strategic Planning & Roadmapping",
    ],
    color2: "lime",
    color1: "green",
    icon: BsSearch,
  },
  {
    link: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that delight users and drive engagement.",
    offerings: [
      "User Interface Design",
      "User Experience Strategy",
      "Design Systems & Component Libraries",
      "Prototyping & User Testing",
    ],
    color2: "cyan",
    color1: "blue",
    icon: LuPalette,
  },
  {
    link: "development",
    title: "Software Development",
    description:
      "Robust, scalable solutions built with modern technologies and best practices.",
    offerings: [
      "Custom Web & Mobile Applications",
      "API Development & Integration",
      "Cloud Architecture & DevOps",
      "Legacy System Modernization",
    ],
    color2: "amber",
    color1: "orange",
    icon: FaCode,
  },
  {
    link: "data-analysis",
    title: "Data Analysis",
    description:
      "Transforming raw data into actionable intelligence to drive business growth.",
    offerings: [
      "Business Intelligence & Dashboards",
      "Predictive Modeling & Forecasting",
      "Data Cleaning & Pipeline Engineering",
      "Statistical Analysis & Reporting",
    ],
    color2: "emerald",
    color1: "teal",
    icon: IoBarChart,
  },
  {
    link: "project-management",
    title: "Project Management",
    description:
      "Streamlined execution and delivery of complex initiatives on time and budget.",
    offerings: [
      "Agile & Scrum Delivery Management",
      "Resource Allocation & Capacity Planning",
      "Risk Mitigation & Quality Assurance",
      "Stakeholder Communication Planning",
    ],
    color2: "indigo",
    color1: "violet",
    icon: AiOutlineProject,
  },
  {
    link: "graphics-design",
    title: "Graphics Design",
    description:
      "Compelling visual identities and assets that elevate your brand presence.",
    offerings: [
      "Brand Identity & Logo Creation",
      "Marketing & Promotional Materials",
      "Digital Illustration & Vector Art",
      "Print & Packaging Design",
    ],
    color2: "fuchsia",
    color1: "pink",
    icon: LuLayers,
  },
  {
    link: "social-management",
    title: "Social Management",
    description:
      "Strategic content and community building to amplify your digital footprint.",
    offerings: [
      "Social Media Strategy & Auditing",
      "Content Creation & Scheduling",
      "Community Engagement & Moderation",
      "Paid Campaign Optimization",
    ],
    color2: "rose",
    color1: "red",
    icon: LuShare2,
  },
  {
    link: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Proactive protection systems to secure your digital assets and infrastructure.",
    offerings: [
      "Vulnerability Assessments & Auditing",
      "Threat Detection & Incident Response",
      "Data Encryption & Identity Management",
      "Compliance & Security Awareness Training",
    ],
    color2: "slate",
    color1: "zinc",
    icon: LuShieldAlert,
  },
];

const ServiceSection = ({ services: servicesProp = services }) => {
  return (
    <section id="services" className="bg-white dark:bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <span className="w-6 h-0.5 bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
            Explore Our Range of <span className="text-orange-500">Expert</span>{" "}
            Services
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
            From inception to establishment and well beyond, we provide full
            services to help your startup flourish.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {servicesProp.map((service) => {
            const { link, title, description, offerings, color1, color2, icon: Icon } = service;
            const c = colorMap[color1];
            const toClass = colorTo2Map[color2];

            return (
              <div
                key={link}
                className="group relative h-fit md:max-[910px]:h-150 min-[911px]:max-xl:h-135 xl:h-117 rounded-2xl border bg-[#fdfdfd] dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-6 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Top bar */}
                <div
                  className={`absolute rounded-full top-0 left-0 h-1 w-12 ${c.bar} group-hover:w-full transition-all duration-300`}
                />

                {/* Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-lg ${c.iconBg} transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className={c.iconText} size={37} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {description}
                </p>

                {/* Offerings List */}
                <ul className="space-y-3 mb-6">
                  {offerings.map((offering, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <MdOutlineKeyboardDoubleArrowRight
                        size={16}
                        className={`mt-0.5 shrink-0 ${c.btnIcontxt}`}
                      />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="md:absolute md:bottom-6 md:left-6">
                  <Button
                    as={Link}
                    to={`./services/${link}`}
                    size={16}
                    btnTxtColor="text-white"
                    btnBgColor={`bg-linear-to-r ${c.btnFrom} ${toClass}`}
                    btnBgHover={c.btnBgHover}
                    iconBgColor="bg-white"
                    icon={<LuArrowUpRight className={c.btnIcontxt} />}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;