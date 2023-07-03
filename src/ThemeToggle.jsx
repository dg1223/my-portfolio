import React, { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    // Toggle the dark theme using CSS classes or other methods
  };

  return (
    <div>
      <label htmlFor="themeToggle" className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="themeToggle"
          checked={darkMode}
          onChange={handleToggle}
          className="hidden"
        />
        <span
          className={`w-6 h-6 rounded-full ${
            darkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
