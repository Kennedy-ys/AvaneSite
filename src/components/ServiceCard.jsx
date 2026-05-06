import { Link } from "react-router-dom";
import Button from "./Button";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const colorMap = {
  orange: {
    bar:        "bg-orange-500",
    iconBg:     "bg-orange-50 dark:bg-orange-400",
    iconText:   "text-orange-400 dark:text-orange-100",
    btnFrom:    "from-orange-500",
    btnIcontxt:  "text-orange-500",
  },
  blue: {
    bar:        "bg-blue-500",
    iconBg:     "bg-blue-50 dark:bg-blue-400",
    iconText:   "text-blue-400 dark:text-blue-100",
    btnFrom:    "from-blue-700",
    btnIcontxt:  "text-blue-500",
  },
};

const colorTo2Map = {
  amber: "to-amber-500",
  cyan:  "to-cyan-500",
};

const ServiceCard = ({ link, title, description, icon, offerings, color1, color2 }) => {
  const Icon = icon;
  const c = colorMap[color1];
  const toClass = colorTo2Map[color2];

  return (
    <div className="group relative h-117 rounded-2xl border bg-[#fdfdfd] dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-6 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      {/* Top bar */}
      <div className={`absolute rounded-full top-0 left-0 h-1 w-12 ${c.bar} group-hover:w-full transition-all duration-300`} />

      {/* Icon */}
      <div className="flex justify-between items-start mb-6">
        <div className={`w-20 h-20 flex items-center justify-center rounded-lg ${c.iconBg} transition-all duration-300 group-hover:scale-110`}>
          <Icon className={c.iconText} size={37} />
        </div>
      </div>

      {/* Content */}
      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{title}</h3>

      {/* Description */}
      <p className=" text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>

      {/* Offerings List */}
      <ul className="space-y-3 mb-6">
        {offerings.map((offering, i) => (
          <li 
          key={i}
          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <MdOutlineKeyboardDoubleArrowRight
            size={16}
            className={`mt-0.5 shrink-0 ${c.btnIcontxt}`}
            />
            <span>{offering}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="absolute bottom-6 left-6">
        <Button
          as={Link}
          to={`./service/${link}`}
          size={16}
          btnTxtColor="text-white"
          btnBgColor={`bg-linear-to-r ${c.btnFrom} ${toClass}`}
          btnBgHover=""
          iconBgColor="bg-white"
          icon={<LuArrowUpRight className={c.btnIcontxt} />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;