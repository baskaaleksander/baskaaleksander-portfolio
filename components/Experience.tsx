export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications, mentor junior developers, and collaborate with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed and maintained React-based frontend applications, implemented RESTful APIs, and contributed to architectural decisions for product scalability.",
    },
    {
      title: "Junior Developer",
      company: "WebSolutions Ltd.",
      location: "Remote",
      period: "2019 - 2020",
      description:
        "Built responsive websites and web applications using modern JavaScript frameworks, collaborated with design teams, and learned best practices in software development.",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
        Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-normal">{exp.title}</h3>
              <span className="text-xs text-gray-500">{exp.period}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
              {exp.company} • {exp.location}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
