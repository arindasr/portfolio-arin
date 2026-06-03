import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ isDarkMode, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur transition-colors dark:border-white/10 dark:bg-zinc-950/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="text-base font-bold tracking-[0.18em] text-zinc-950 transition hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
          aria-label="Arinda Setyo Rini home"
        >
          ASR
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-black text-base font-semibold transition hover:bg-black hover:text-white dark:border-white/70 dark:hover:bg-white dark:hover:text-black"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? "☼" : "☾"}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-black text-xl font-light dark:border-white/70 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "x" : "+"}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-black/10 bg-white px-5 py-4 transition-colors dark:border-white/10 dark:bg-zinc-950 md:hidden">
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
  );
}

export default Navbar;
