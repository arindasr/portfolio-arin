import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ isDarkMode, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolled (pill mode)
  useEffect(() => {
    if (scrolled) setIsOpen(false);
  }, [scrolled]);

  return (
    <>
      {/* Spacer so content doesn't jump - only needed when navbar is sticky full-width */}
      <div
        className={`transition-all duration-300 ${scrolled ? "h-0" : "h-[73px]"}`}
        aria-hidden="true"
      />

      <header
        className={`
          fixed z-50
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? // Floating pill state
                "top-4 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1100px] rounded-full " +
                "shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] " +
                "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md " +
                "border border-black/10 dark:border-white/10"
              : // Full-width state
                "top-0 left-0 w-full rounded-none " +
                "bg-white/95 dark:bg-zinc-950/95 backdrop-blur " +
                "border-b border-black/10 dark:border-white/10"
          }
        `}
      >
        <nav
          className={`
            flex items-center justify-between
            transition-all duration-300 ease-in-out
            ${scrolled ? "px-6 py-3 md:px-8" : "mx-auto max-w-6xl px-5 py-4 md:px-8"}
          `}
        >
          {/* Logo */}
          <a
            href="#home"
            className={`
              font-bold tracking-[0.18em] text-zinc-950 dark:text-zinc-50
              transition-all duration-300 hover:text-zinc-600 dark:hover:text-zinc-300
              ${scrolled ? "text-sm" : "text-base"}
            `}
            aria-label="Arinda Setyo Rini home"
          >
            ASR
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  font-medium text-black/70 dark:text-white/70
                  transition-all duration-300
                  hover:text-black dark:hover:text-white
                  ${scrolled ? "text-xs" : "text-sm"}
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              type="button"
              className={`
                inline-flex items-center justify-center border font-semibold
                transition-all duration-300
                border-black dark:border-white/70
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                ${scrolled ? "h-7 w-7 text-sm rounded-full" : "h-10 w-10 text-base"}
              `}
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? "☼" : "☾"}
            </button>

            {/* Mobile hamburger — hidden when scrolled to pill */}
            {!scrolled && (
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center border border-black text-xl font-light dark:border-white/70 md:hidden"
                onClick={() => setIsOpen((open) => !open)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? "x" : "+"}
              </button>
            )}
          </div>
        </nav>

        {/* Mobile dropdown — only in full-width state */}
        {isOpen && !scrolled && (
          <div className="border-t border-black/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-zinc-950 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-black/75 dark:text-white/75"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
