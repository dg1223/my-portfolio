import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white font-bold mr-4">
          Home
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-400 hover:text-white">
          Experience
        </Link>
        <Link to="/" className="text-gray-400 hover:text-white">
          Education
        </Link>
        <Link to="/" className="text-gray-400 hover:text-white">
          Courses &amp; Certifications
        </Link>
      </div>
      <Link to="/resume" className="text-white">
        Download Resume
      </Link>
    </nav>
  );
};

export default Navbar;
