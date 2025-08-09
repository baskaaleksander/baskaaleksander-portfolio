import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
        Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-normal text-gray-100">{exp.title}</h3>
              <span className="text-xs text-gray-500">{exp.period}</span>
            </div>
            <p className="text-xs text-gray-400 mb-1">
              {exp.company} • {exp.location}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
