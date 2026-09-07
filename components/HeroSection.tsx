"use client";

import { StaticImageData } from "next/image";
import CircleImage from "./CircleImage";
import SocialLinks from "./SocialLinks";
import defaultImage from "@/public/muzahid.jpg";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  imageSrc?: string | StaticImageData;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  imageSrc = defaultImage,
}) => {
  return (
    <section
      id="home"
      className="
      scroll-mt-20
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-10
      min-h-[80vh]
      px-6
      md:px-20
      "
    >
      {/* Left Text Section */}
      <div className="md:w-2/3 z-10">
        <div className="text-green-700 font-medium">Hey folks 👋</div>

        <h1 className="text-3xl md:text-4xl font-bold">
          I’m <span className="text-green-700">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold my-[5px]">
          {title}
        </h2>
        <div className="my-[15px]">
          <SocialLinks isWhite={true} />
        </div>

        <p className="leading-relaxed text-gray-700">{description}</p>
      </div>

      {/* Right Circular Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <CircleImage src={imageSrc} priority />
      </div>
    </section>
  );
};

export default HeroSection;
