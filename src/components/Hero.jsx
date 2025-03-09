import { Link } from "react-router-dom";
import { heroContent } from "../assets/asset";
import heroImage from "../assets/images/hero-homepage-illustration.svg";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3 items-center h-[70vh] px-2">
      {heroContent.map((hero, i) => (
        <div className="flex flex-col md:gap-3 gap-2 md:w-[60%] w-full" key={i}>
          <h1 className="text-xl font-bold md:text-2xl text-[#0A0861] dark:text-white">
            {hero.title}
          </h1>
          <p className="text-lg">{hero.description}</p>
          <div className="flex md:flex-row flex-col">
            <Link
              to="/builder"
              className="bg-[#0A0861] hover:bg-[#0A0861]/90 text-white capitalize p-3.5 rounded cursor-pointer transition-colors duration-500"
            >
              build your resume
            </Link>
          </div>
        </div>
      ))}
      <div className="md:w-[40%] w-full">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
