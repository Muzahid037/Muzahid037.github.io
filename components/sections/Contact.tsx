import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-700">
          Interested in working together or just want to say hi? Feel free to
          reach out.
        </p>
        <a
          href="mailto:muzahidul.cuet17@gmail.com"
          className="mt-4 inline-block bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition"
        >
          Say Hello
        </a>
        <div className="mt-6 flex justify-center">
          <SocialLinks isWhite={true} />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
