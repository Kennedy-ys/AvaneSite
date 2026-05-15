import Img1 from "../assets/GetStarted.webp";
import Button from "./Button";
import { IoArrowRedoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section>
      <div 
      style={{backgroundImage: `url(${Img1})`}}
      className={`w-full h-screen flex justify-center items-center relative inset-0 bg-cover bg-center bg-no-repeat`}>
      <div className="absolute inset-0 bg-black/55 w-full" />
        <div className="flex flex-col gap-17 justify-center items-center text-white z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">Ready to Transform Your Future With Us?</h2>
          <Button
            as={Link}
            icon={<IoArrowRedoOutline className="text-white" />}
            btnTxtColor="text-orange-500"
            btnBgColor="bg-white dark:shadow-white/20"
            btnBgHover="bg-orange-200"
            iconBgColor="bg-linear-to-r from-orange-500 to-amber-500"
            to="/contact"
            size="22"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
