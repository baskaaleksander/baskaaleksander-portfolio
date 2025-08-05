import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl mx-auto py-12 px-6">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <Image
              src="/avatar.svg"
              alt="Profile Picture"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-medium mb-1">Alexander Baskal</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed max-w-lg mx-auto">
            I build productivity apps and create innovative solutions that make
            life easier. Passionate about clean code, user experience, and
            building tools that solve real problems.
          </p>
        </header>

        {/* Contact */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Mail size={12} />
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Github size={12} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Linkedin size={12} />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Download size={12} />
              Resume
            </a>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">
                  Senior Full Stack Developer
                </h3>
                <span className="text-xs text-gray-500">2022 - Present</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Tech Innovations Inc. • San Francisco, CA
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                Lead development of scalable web applications, mentor junior
                developers, and collaborate with cross-functional teams to
                deliver high-quality software solutions.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">Software Engineer</h3>
                <span className="text-xs text-gray-500">2020 - 2022</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                StartupXYZ • New York, NY
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                Developed and maintained React-based frontend applications,
                implemented RESTful APIs, and contributed to architectural
                decisions for product scalability.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">Junior Developer</h3>
                <span className="text-xs text-gray-500">2019 - 2020</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                WebSolutions Ltd. • Remote
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                Built responsive websites and web applications using modern
                JavaScript frameworks, collaborated with design teams, and
                learned best practices in software development.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
            Projects
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">Task Management App</h3>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1"
                >
                  <ExternalLink size={10} />
                  View
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-1">
                A productivity app built with React and Node.js that helps teams
                organize their work efficiently.
              </p>
              <div className="flex gap-1">
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  React
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  Node.js
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  MongoDB
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">E-commerce Platform</h3>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1"
                >
                  <ExternalLink size={10} />
                  View
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-1">
                Full-stack e-commerce solution with payment integration and
                admin dashboard.
              </p>
              <div className="flex gap-1">
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  Next.js
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  Stripe
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">Data Visualization Tool</h3>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1"
                >
                  <ExternalLink size={10} />
                  View
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mb-1">
                Interactive dashboard for data analysis and visualization using
                D3.js.
              </p>
              <div className="flex gap-1">
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  D3.js
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  Python
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                  Flask
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
            Skills
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                Frontend
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                React, Next.js, TypeScript, Tailwind CSS, Vue.js
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                Backend
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Node.js, Express, Python, Django, PostgreSQL, MongoDB
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                Tools & Cloud
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Git, GitHub, VS Code, Figma, Postman, AWS, Docker
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
            Education
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">
                  Bachelor of Science in Computer Science
                </h3>
                <span className="text-xs text-gray-500">2015 - 2019</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                University of Technology
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Graduated with honors, focused on software engineering,
                algorithms, and data structures.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm font-normal">
                  Full Stack Web Development Bootcamp
                </h3>
                <span className="text-xs text-gray-500">2019</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Code Academy
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Intensive 12-week program covering modern web development
                technologies and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2024 Alexander Baskal. Built with Next.js and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}
