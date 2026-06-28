import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "theme-switching");
    root.style.colorScheme = "light";
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-zinc-50 text-zinc-950 transition-colors duration-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,212,216,0.45),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(228,228,231,0.8),transparent_28%)]"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
