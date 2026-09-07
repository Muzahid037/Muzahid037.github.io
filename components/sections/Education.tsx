import Section from "@/components/Section";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Science, Computer Science and Engineering",
    institution: "Chittagong University of Engineering & Technology",
    period: "Jan 2017 - Aug 2022",
  },
];

const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
