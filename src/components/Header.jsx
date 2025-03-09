import { Link } from "react-router-dom";
import { navLinks } from "../assets/asset";
import ChangeMode from "./ChangeMode";
import resumebuild from "../assets/images/resumebuild.webp";

const Header = () => {
  return (
    <header className="border-b border-gray-300 dark:border-gray-400 py-2 flex justify-between items-center">
      <Link to={`/`} className="text-xl">
        <img src={resumebuild} alt="" />
      </Link>
      <nav className="lg:flex hidden items-center gap-5">
        {navLinks.map((nav, i) => (
          <Link to={nav.link} key={i} className="hover:text-[#615FFF]">
            {nav.title}
          </Link>
        ))}
      </nav>
      <ChangeMode />
    </header>
  );
};

export default Header;
