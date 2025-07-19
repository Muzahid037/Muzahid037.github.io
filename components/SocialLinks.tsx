"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import Image, { StaticImageData } from "next/image";

interface SocialLinksProps {
  isWhite?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isWhite = true }) => {
  return (
    <div
      className={`flex space-x-6 text-3xl text-gray-800 ${
        isWhite ? "text-gray-800" : " text-white"
      }`}
    >
      <a
        href="https://github.com/Muzahid037"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/muzahid037"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className=" transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/MohammadMuzah17"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className=" transition-colors"
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:muzahid.cuetcse16@gmail.com"
        aria-label="Email"
        className=" transition-colors"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
