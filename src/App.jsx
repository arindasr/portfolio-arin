import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const hasMountedTheme = useRef(false);
  const themeTransitionTimeoutRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return false;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDarkMode);
    root.style.colorScheme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    if (!hasMountedTheme.current) {
      hasMountedTheme.current = true;
      return undefined;
    }

    root.classList.add("theme-switching");
    window.clearTimeout(themeTransitionTimeoutRef.current);
    themeTransitionTimeoutRef.current = window.setTimeout(() => {
      root.classList.remove("theme-switching");
    }, 320);

    return undefined;
  }, [isDarkMode]);

  useEffect(() => {
    return () => {
      window.clearTimeout(themeTransitionTimeoutRef.current);
      document.documentElement.classList.remove("theme-switching");
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-white text-black transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50 ${isDarkMode ? "dark" : ""}`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((isDark) => !isDark)}
      />
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
