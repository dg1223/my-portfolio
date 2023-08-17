import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    // Toggle the dark theme using CSS classes or other methods
  };
  return (
    <nav className="bg-gray-800 text-white py-4 px-16 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white mr-4">
          Home
        </Link>
        {/* <ThemeToggle darkMode={darkMode} handleToggle={handleToggle} /> */}
      </div>
      <div className="hidden md:flex space-x-16">
        <ScrollLink
          to="experiences"
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white cursor-pointer"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="experiences"
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white cursor-pointer"
        >
          Projects
        </ScrollLink>
        {/* <Link to="/" className="text-gray-400 hover:text-white cursor-pointer">
          Courses &amp; Certifications
        </Link> */}
      </div>
      <Link
        to="https://1drv.ms/b/s!AjTxsZVSIWeVq2xQo-WaB8Bzgbau?e=DaLbcg"
        className="text-white"
        target="_blank"
      >
        Download Resume
      </Link>
    </nav>
  );
};

export default Navbar;
