"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

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
          © {year} Md Muzahidul Islam. All rights reserved.
        </p>

        <nav aria-label="Social media links" className="">
          <SocialLinks isWhite={false} />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
