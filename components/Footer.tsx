"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const openMailClient = (email: string) => {
    window.open(`mailto:${email}`, "_blank");
  };


  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p
          className="text-sm text-center md:text-left select-none"
          aria-label="Copyright notice"
        >
          © {year} Your Name. All rights reserved.
        </p>

        <nav aria-label="Social media links" className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Muzahid037"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/muzahid037"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/MohammadMuzah17"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:muzahid.cuetcse16@gmail.com"
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
