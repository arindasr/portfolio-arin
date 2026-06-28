import { useEffect, useRef, useState } from "react";

function Reveal({
  as: Component = "div",
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
  once = false,
  enterOnMount = false,
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    return prefersReducedMotion || !("IntersectionObserver" in window);
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    if (enterOnMount) {
      const frameId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const currentElement = elementRef.current;

    if (!currentElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }

          return;
        }

        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(currentElement);

    return () => observer.disconnect();
  }, [enterOnMount, once, rootMargin, threshold]);

  return (
    <Component
      ref={elementRef}
      className={[
        className,
        "reveal",
        `reveal-${variant}`,
        isVisible ? "is-visible" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
