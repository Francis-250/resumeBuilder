import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ChangeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setIsLight = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(!isDarkMode);
  };
  const setIsDark = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setIsDarkMode(!isDarkMode);
  };
  const handleMode = () => {
    isDarkMode ? setIsLight() : setIsDark();
  };
  const getTheme = () => {
    localStorage.getItem("theme") === "dark" ? setIsLight() : setIsDark();
  };
  useEffect(() => {
    getTheme();
  }, []);
  return (
    <div>
      <button
        className="text-xl cursor-pointer rounded-lg p-2  bg-[#0a0861] text-white"
        onClick={handleMode}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ChangeMode;
