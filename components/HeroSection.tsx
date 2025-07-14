"use client";

import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  imageSrc: string | StaticImageData;
  name: string;
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  name,
  title,
  description,
}) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12  relative">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4 z-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          I’m <span className="text-green-400">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold ">
          {title}
        </h2>
        <p className=" leading-relaxed">{description}</p>

        {/* Add social links or CTA here if needed */}
      </div>

      {/* Right Circular Image Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative border-4 border-cyan-400 shadow-lg shadow-cyan-500/50">
          <Image
            src={imageSrc}
            alt="Profile"
            fill
            className="object-cover rounded-full"
            sizes="(min-width: 768px) 256px, 192px"
            priority
          />
           {/* <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center"
                  sizes={`${size}px`}
                  priority={priority}
                /> */}
        </div>
      </div>

      {/* Optional background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-700/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
