import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div className="w-2/3">
        <form className="mb-4">{/* Your form code here */}</form>
      </div>
      <div className="flex items-center">
        <a
          href="your_linkedin_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4"
        >
          LinkedIn
        </a>
        <a
          href="your_github_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4"
        >
          GitHub
        </a>
        <a
          href="your_google_scholar_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Google Scholar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
