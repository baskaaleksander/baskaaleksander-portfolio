import Header from "../components/Header";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Footer from "../components/Footer";

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
