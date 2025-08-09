import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
        Education
      </h2>
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-normal text-gray-100">
                {edu.degree}
              </h3>
              <span className="text-xs text-gray-500">{edu.period}</span>
            </div>
            <p className="text-xs text-gray-400 mb-1">{edu.school}</p>
            <p className="text-xs text-gray-500">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
