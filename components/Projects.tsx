import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Task Management App",
      description:
        "A productivity app built with React and Node.js that helps teams organize their work efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Data Visualization Tool",
      description:
        "Interactive dashboard for data analysis and visualization using D3.js.",
      tech: ["D3.js", "Python", "Flask"],
      link: "#",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
        Projects
      </h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-normal">{project.title}</h3>
              <a
                href={project.link}
                className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1"
              >
                <ExternalLink size={10} />
                View
              </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-1">
              {project.description}
            </p>
            <div className="flex gap-1">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
