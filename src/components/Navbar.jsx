import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const contactHref = "#contact";
const trackedSectionHrefs = [...navItems.map((item) => item.href), contactHref];

const getInitialActiveHref = () => {
  if (typeof window === "undefined") return "";

  return trackedSectionHrefs.includes(window.location.hash)
    ? window.location.hash
    : "";
};

const SHRINK_SCROLL_Y = 96;
const EXPAND_SCROLL_Y = 24;
const MIN_ACTIVE_MARKER_Y = 140;
const ACTIVE_MARKER_RATIO = 0.35;

function Navbar() {
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
    const sections = trackedSectionHrefs
      .map((href) => ({
        href,
        element: document.querySelector(href),
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
      if (trackedSectionHrefs.includes(window.location.hash)) {
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
                "shadow-[0_10px_35px_rgba(24,24,27,0.10)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)] " +
                "bg-white/72 dark:bg-zinc-900/72 backdrop-blur-md " +
                "border border-zinc-200/80 dark:border-zinc-800/80"
              : // Full-width state
                "top-0 left-0 w-full rounded-none " +
                "bg-zinc-50/92 dark:bg-zinc-950/92 backdrop-blur " +
                "border-b border-zinc-200/80 dark:border-zinc-800/80"
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
            className="transition-all duration-300 hover:opacity-80"
            aria-label="Arinda Setyo Rini home"
          >
            <img
              src="/assets/logo2.png"
              alt="Arinda Setyo Rini"
              className={`${scrolled ? "h-8" : "h-10"} w-auto object-contain`}
            />
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
                    hover:text-zinc-950 dark:hover:text-zinc-50
                    ${scrolled ? "text-xs" : "text-sm"}
                    ${
                      isActive
                        ? "text-zinc-950 dark:text-zinc-50 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-zinc-500 dark:after:bg-zinc-400"
                        : "text-zinc-500 dark:text-zinc-400"
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
            <a
              href={contactHref}
              onClick={() => setActiveHref(contactHref)}
              aria-current={activeHref === contactHref ? "page" : undefined}
              className={`
                items-center justify-center gap-2 rounded-full border font-semibold transition-all duration-300
                ${scrolled ? "inline-flex" : "hidden md:inline-flex"}
                border-zinc-300 bg-white/70 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200
                hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white hover:text-zinc-900
                dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-100
                ${scrolled ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"}
              `}
            >
              <span>Let's Connect</span>
              <span aria-hidden="true" className="text-base leading-none">
                ↗
              </span>
            </a>

            {/* Mobile hamburger — hidden when scrolled to pill */}
            {!scrolled && (
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/70 text-xl font-light text-zinc-700 md:hidden"
                onClick={() => setIsOpen((open) => !open)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
              </button>
            )}
          </div>
        </nav>

        {/* Mobile dropdown — only in full-width state */}
        {isOpen && !scrolled && (
          <div className="border-t border-zinc-200/80 bg-zinc-50/95 px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
              {[...navItems, { label: "Contact", href: contactHref }].map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`border-b pb-1 text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "border-zinc-500 text-zinc-950 dark:border-zinc-400 dark:text-zinc-50"
                        : "border-zinc-300 text-zinc-500 dark:border-zinc-600 dark:text-zinc-400"
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
