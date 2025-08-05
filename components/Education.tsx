export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description:
        "Graduated with honors, focused on software engineering, algorithms, and data structures.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Code Academy",
      period: "2019",
      description:
        "Intensive 12-week program covering modern web development technologies and best practices.",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
        Education
      </h2>
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-normal">{edu.degree}</h3>
              <span className="text-xs text-gray-500">{edu.period}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              {edu.school}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
