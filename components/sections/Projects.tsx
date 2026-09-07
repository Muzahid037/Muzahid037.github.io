import Section from "@/components/Section";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

// TODO: replace with your real projects
const projects: Project[] = [
  {
    title: "Project Name",
    description:
      "Describe this project, the problem it solves, and your role in building it.",
    tech: ["Next.js", "TypeScript"],
    link: "#",
  },
  {
    title: "Project Name",
    description:
      "Describe this project, the problem it solves, and your role in building it.",
    tech: ["Laravel", "PHP"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="mt-3 inline-block text-green-700 text-sm font-medium hover:underline"
              >
                View project →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
