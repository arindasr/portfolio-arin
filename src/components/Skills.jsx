import Reveal from "./Reveal";

const skills = [
  "SQL",
  "Python",
  "Streamlit",
  "Machine Learning",
  "Data Processing",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Microsoft Office",
  "Copywriting",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal
          as="div"
          variant="right"
          className="ml-auto max-w-2xl text-right"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Skills
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Tools for <span className="text-highlight-muted">analysis</span>,{" "}
            <span className="text-highlight-muted">visualization</span>, and{" "}
            <span className="text-highlight-muted">digital experiences</span>.
          </h2>
        </Reveal>

        {/* 1 baris dengan animasi sliding pelan */}
        <Reveal delay={120} className="mt-12 overflow-hidden">
          <div className="animate-slideSlow flex gap-3 w-max">
            {skills.map((skill) => (
              <div
                key={skill}
                className="whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100/80 px-4 py-4 text-center text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {skill}
              </div>
            ))}
            {/* Duplikat untuk efek infinite */}
            {skills.map((skill) => (
              <div
                key={`duplicate-${skill}`}
                className="whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-100/80 px-4 py-4 text-center text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes slideSlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slideSlow {
          animation: slideSlow 30s linear infinite;
        }

        .animate-slideSlow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Skills;
