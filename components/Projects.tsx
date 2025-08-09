import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
        Projects
      </h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-medium text-gray-100">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="text-xs text-gray-400 hover:text-gray-100 flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={10} />
                    GitHub
                  </a>
                )}
                <a
                  href={project.link}
                  className="text-xs text-gray-400 hover:text-gray-100 flex items-center gap-1"
                >
                  <ExternalLink size={10} />
                  View
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-0.5 bg-[#111213] text-gray-300 rounded border border-gray-600"
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
