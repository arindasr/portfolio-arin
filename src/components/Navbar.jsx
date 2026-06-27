import { useState, useEffect } from "react";

const getInitialActiveHref = () => {
  if (typeof window === "undefined") return "";

  return navItems.some((item) => item.href === window.location.hash)
    ? window.location.hash
    : "";
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SHRINK_SCROLL_Y = 96;
const EXPAND_SCROLL_Y = 24;
const MIN_ACTIVE_MARKER_Y = 140;
const ACTIVE_MARKER_RATIO = 0.35;

function Navbar({ isDarkMode, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(getInitialActiveHref);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled((previouslyScrolled) => {
        const nextScrolled =
          !previouslyScrolled && currentScrollY > SHRINK_SCROLL_Y
            ? true
            : previouslyScrolled && currentScrollY < EXPAND_SCROLL_Y
              ? false
              : previouslyScrolled;

        if (nextScrolled && !previouslyScrolled) {
          setIsOpen(false);
        }

        return nextScrolled;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        href: item.href,
        element: document.querySelector(item.href),
      }))
      .filter((section) => section.element);

    if (!sections.length) return undefined;

    const updateActiveSection = () => {
      const markerY = Math.max(
        MIN_ACTIVE_MARKER_Y,
        window.innerHeight * ACTIVE_MARKER_RATIO,
      );

      const sectionRects = sections.map((section) => ({
        href: section.href,
        rect: section.element.getBoundingClientRect(),
      }));
      const firstSection = sectionRects[0];

      if (firstSection && firstSection.rect.top > markerY) {
        setActiveHref((currentActiveHref) =>
          currentActiveHref === "" ? currentActiveHref : "",
        );
        return;
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (isAtPageBottom) {
        setActiveHref(sections[sections.length - 1].href);
        return;
      }

      const containingSection = sectionRects.find(
        ({ rect }) => rect.top <= markerY && rect.bottom >= markerY,
      );

      if (containingSection) {
        setActiveHref((currentActiveHref) =>
          currentActiveHref === containingSection.href
            ? currentActiveHref
            : containingSection.href,
        );
        return;
      }

      const visibleSections = sectionRects.filter(
        ({ rect }) => rect.bottom > 0 && rect.top < window.innerHeight,
      );

      if (visibleSections.length) {
        const nearestVisibleSection = visibleSections.reduce(
          (closest, section) =>
            Math.abs(section.rect.top - markerY) <
            Math.abs(closest.rect.top - markerY)
              ? section
              : closest,
        );

        setActiveHref((currentActiveHref) =>
          currentActiveHref === nearestVisibleSection.href
            ? currentActiveHref
            : nearestVisibleSection.href,
        );
        return;
      }

      const passedSections = sectionRects.filter(
        ({ rect }) => rect.top <= markerY,
      );
      const fallbackHref = passedSections.length
        ? passedSections[passedSections.length - 1].href
        : sections[0].href;

      setActiveHref((currentActiveHref) =>
        currentActiveHref === fallbackHref ? currentActiveHref : fallbackHref,
      );
    };

    const handleHashChange = () => {
      if (navItems.some((item) => item.href === window.location.hash)) {
        setActiveHref(window.location.hash);
        return;
      }

      if (!window.location.hash || window.location.hash === "#home") {
        setActiveHref("");
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("load", updateActiveSection);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("load", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Keep a stable spacer so the page layout doesn't shift during navbar transitions */}
      <div className="h-18.25" aria-hidden="true" />

      <header
        className={`
          fixed z-50
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? // Floating pill state
                "top-4 inset-x-5 mx-auto w-auto max-w-275 rounded-full " +
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
            {navItems.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    relative pb-1 font-medium transition-all duration-300
                    hover:text-black dark:hover:text-white
                    ${scrolled ? "text-xs" : "text-sm"}
                    ${
                      isActive
                        ? "text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black dark:after:bg-white"
                        : "text-black/70 dark:text-white/70"
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
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
              {navItems.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`w-fit border-b-2 pb-1 text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "border-black text-black dark:border-white dark:text-white"
                        : "border-transparent text-black/75 dark:text-white/75"
                    }`}
                    onClick={() => {
                      setActiveHref(item.href);
                      setIsOpen(false);
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
