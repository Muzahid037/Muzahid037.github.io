import HeroSection from "@/components/HeroSection";
import muzahid from "@/public/muzahid.jpg";

export default function Home() {
  return (
    <div
      style={
        {
          // border:"1px solid red"
        }
      }
      className="
      flex 
      flex-col 
      justify-center 
      items-center       
      min-h-screen
      "
    >
      <HeroSection
        name="Md. Muzahidul Islam"
        title="Software Developer"
        description="
        Software craftsman with over 3 years in the industry, specializing in ReactJS and NextJS.
        "
      />

      
    </div>
  );
}
