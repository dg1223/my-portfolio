import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8 flex justify-center items-center mt-10">
      <div className="flex gap-10">
        <a
          href="https://www.linkedin.com/in/shamiralavi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4 text-xl"
        >
          <FaLinkedinIn></FaLinkedinIn>
        </a>
        <a
          href="https://github.com/dg1223"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-4 text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://scholar.google.com/citations?user=-JBgPn4AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl"
        >
          <SiGooglescholar></SiGooglescholar>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
