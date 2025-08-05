import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
        Skills
      </h2>
      <div className="space-y-4">
        {skills.map((category, index) => (
          <div
            key={index}
            className="pb-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0"
          >
            <h3 className="text-sm font-normal mb-2 text-[#1a1a1a] dark:text-gray-100">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs text-[#1a1a1a] dark:text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
