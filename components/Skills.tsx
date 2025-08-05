export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: "React, Next.js, TypeScript, Tailwind CSS, Vue.js",
    },
    {
      category: "Backend",
      skills: "Node.js, Express, Python, Django, PostgreSQL, MongoDB",
    },
    {
      category: "Tools & Cloud",
      skills: "Git, GitHub, VS Code, Figma, Postman, AWS, Docker",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
        Skills
      </h2>
      <div className="space-y-3">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
              {category.category}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {category.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
