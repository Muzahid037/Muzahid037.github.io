import HeroSection from "@/components/HeroSection";
import muzahid from "@/public/muzahid.jpg";

export default function Home() {
  return (
    <div
    style={{
      // border:"1px solid red"
    }}
     className="flex flex-col justify-center items-center">
      <HeroSection
        imageSrc={muzahid}
        name="Md. Muzahidul Islam"
        title="Software Developer"
        description="Software craftsman with over 7 years in the industry, specializing in PHP and Laravel. Contributed to Laravel and several other Open source projects. Built a learning platform, empowering more than 1500 developers."
      />
    </div>
  );
}
