import Section from "@/components/Section";

const skillGroups = [
  { category: "Core Stack", skills: ["Next.js", "TypeScript", "JavaScript", "Docker"] },
  { category: "Game Development", skills: ["Unity", "Cocos2d-x", "C++", "FFmpeg"] },
  {
    category: "Spoken Languages",
    skills: ["Bengali (Native)", "English (Professional)", "Hindi (Professional)"],
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-semibold mb-2">{group.category}</h3>
            <ul className="space-y-1 text-gray-700">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
