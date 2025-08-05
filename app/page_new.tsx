import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  GraduationCap,
  Code2,
  Briefcase,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Alexander Baskal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Full Stack Developer & Software Engineer
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build productivity apps and create innovative solutions that make
            life easier. Passionate about clean code, user experience, and
            building tools that solve real problems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Node.js / Express</li>
                  <li>Python / Django</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>AWS / Docker</li>
                </ul>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Tech Innovations Inc.",
                period: "2022 - Present",
                location: "San Francisco, CA",
                description:
                  "Lead development of scalable web applications, mentor junior developers, and collaborate with cross-functional teams to deliver high-quality software solutions.",
              },
              {
                title: "Software Engineer",
                company: "StartupXYZ",
                period: "2020 - 2022",
                location: "New York, NY",
                description:
                  "Developed and maintained React-based frontend applications, implemented RESTful APIs, and contributed to architectural decisions for product scalability.",
              },
              {
                title: "Junior Developer",
                company: "WebSolutions Ltd.",
                period: "2019 - 2020",
                location: "Remote",
                description:
                  "Built responsive websites and web applications using modern JavaScript frameworks, collaborated with design teams, and learned best practices in software development.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:text-right text-gray-600 dark:text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
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
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="inline mr-1" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Alexander Baskal. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
