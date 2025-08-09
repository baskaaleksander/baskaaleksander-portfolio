import Image from "next/image";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="w-20 h-20 mb-4 rounded-full bg-gray-700 overflow-hidden">
        <Image
          src="/avatar.png"
          alt="Profile Picture"
          width={80}
          height={80}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <h1 className="text-2xl font-semibold mb-1 text-gray-100">
        Aleksander Baska
      </h1>
      <p className="text-sm text-gray-400 mb-3">Full Stack Developer</p>
      <section className="mb-8">
        <div className="flex flex-wrap gap-4 text-xs">
          <a
            href="mailto:baskaaleksander03@gmail.com"
            className="flex items-center gap-1 text-gray-400 hover:text-gray-100"
          >
            <Mail size={12} />
            Email
          </a>
          <a
            href="https://github.com/baskaaleksander"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-gray-100"
          >
            <Github size={12} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/baskaaleksander"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-gray-100"
          >
            <Linkedin size={12} />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 text-gray-400 hover:text-gray-100"
          >
            <Download size={12} />
            Resume
          </a>
        </div>
      </section>
    </header>
  );
}
