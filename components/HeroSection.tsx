"use client";

import Image, { StaticImageData } from "next/image";
import CircleImage from "./CircleImage";
import SocialLinks from "./SocialLinks";
import muzahid from "@/public/muzahid.jpg";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
}) => {
  return (
    <section
      style={{ border: "1px solid red" }}
      className="
      flex 
      flex-col 
      md:flex-row 
      items-center 
      justify-between 
      px-6 
      md:px-20 
      relative
      "
    >
      {/* Left Text Section */}
      <div className="lg:w-2/3  z-10">
        <div className="text-green-700 font-medium">Hey folks 👋</div>

        <h1 className="text-3xl md:text-4xl font-bold">
          I’m <span className="text-green-700">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold my-[5px]">{title}</h2>
        <div className="my-[15px]">
          <SocialLinks isWhite={true} />
        </div>

        <p className=" leading-relaxed">{description}</p>
        {/* Add social links or CTA here if needed */}
      </div>

      {/* Right Circular Image Section */}
      <div className="lg:w-1/3 flex justify-center">
        <CircleImage src={muzahid} />
      </div>
    </section>
  );
};

export default HeroSection;
