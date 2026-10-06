import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { IoArrowRedoOutline } from "react-icons/io5";
import Img1 from "../../assets/images/CTA.webp";

const CTA = ({ text, ctaText }) => {
  return (
    <section className="w-full">
      <div
        style={{ backgroundImage: `url(${Img1})` }}
        className={`w-full h-[50dvh] md:h-[70dvh] flex justify-center items-center relative inset-0 bg-cover bg-center bg-no-repeat`}
      >
        <div className="absolute inset-0 bg-black/85 w-full" />
        <div className="flex flex-col gap-17 justify-center items-center text-white z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center capitalize leading-tight">
            {text}
          </h2>
          <Button
            as={Link}
            icon={
              <IoArrowRedoOutline className="text-white group-hover:text-orange-500" />
            }
            btnTxtColor="text-orange-500 group-hover:text-white"
            btnBgColor="bg-white"
            btnBgHover="bg-orange-500"
            iconBgColor="bg-orange-500 group-hover:bg-white"
            to="/contact"
            size="20"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
