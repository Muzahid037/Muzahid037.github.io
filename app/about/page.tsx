import Image from "next/image";
import React from "react";
import muzahid from "@/public/muzahid.jpg";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <div
      style={{
        // border: "1px solid blue",
      }}
    >
      <HeroSection
        imageSrc={muzahid}
        name="Md. Muzahidul Islam"
        title="Software Developer"
        description="Software craftsman with over 7 years in the industry, specializing in PHP and Laravel. Contributed to Laravel and several other Open source projects. Built a learning platform, empowering more than 1500 developers."
      />
    </div>
  );
};

export default page;
