import Header from "../components/header";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Education from "../components/education";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-gray-100">
      <div className="max-w-2xl mx-auto py-12 px-6">
        <Header />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
