import Section from "@/components/Section";

interface Role {
  title: string;
  period: string;
  description?: string;
}

interface ExperienceItem {
  company: string;
  location: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Kite Games Studio",
    location: "Dhaka, Bangladesh",
    roles: [
      { title: "Software Engineer", period: "Sep 2024 - Present" },
      { title: "Associate Software Engineer", period: "Sep 2023 - Oct 2024" },
      { title: "Junior Software Engineer", period: "Sep 2022 - Oct 2023" },
    ],
  },
  {
    company: "Dynamic Solution Innovators Ltd.",
    location: "Dhaka, Bangladesh",
    roles: [
      {
        title: "Industrial Attachment",
        period: "Jan 2022 - Feb 2022",
        description:
          "Learned the Java Collection Framework, working under the supervision of experienced software engineers at DSI.",
      },
    ],
  },
  {
    company: "Arcade Studios",
    location: "Mymensingh Division, Bangladesh",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "Mar 2020 - Nov 2021",
        description:
          'Part-time game developer. Built "Ice Cream Shop", a 2D game in Cocos2d-x/C++ using the Singleton pattern with UserDefault and SQLite for data storage, and reskinned several 2D/3D Unity titles (Prison Escape, Color Sort, HexaPuzzle, Deadly Hunters).',
      },
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl mx-auto space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company}>
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
            <div className="space-y-4 border-l-4 border-green-700 pl-4">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <p className="font-medium">{role.title}</p>
                  <p className="text-sm text-gray-500">{role.period}</p>
                  {role.description && (
                    <p className="mt-1 text-gray-700">{role.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
