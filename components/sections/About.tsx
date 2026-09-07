import Section from "@/components/Section";

const About = () => {
  return (
    <Section id="about" title="About Me">
      <p className="max-w-3xl mx-auto text-center leading-relaxed text-gray-700">
        {/* Draft bio from resume facts — rewrite in your own voice */}
        Software Engineer at Kite Games Studio in Dhaka, Bangladesh, working
        with Next.js and Docker on the web side, with a background in game
        development (Unity, Cocos2d-x, C++). Graduated with a B.Sc. in
        Computer Science and Engineering from Chittagong University of
        Engineering & Technology.
      </p>
    </Section>
  );
};

export default About;
