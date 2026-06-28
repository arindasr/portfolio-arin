import Reveal from "./Reveal";

const experiences = [
  {
    title: "PIJAK x IBM SkillsBuild Participant",
    period: "February 2026 - Present",
    description:
      "Gained hands-on experience in Python programming and AI implementation, and developed a machine learning-based movie recommendation system called WeMovies AI.",
  },
  {
    title: "Laboratory Teaching Assistant",
    period: "February 2026 - Present",
    description:
      "Mentored students in Operating Systems and Big Data processing, collaborating with lecturers to manage laboratory activities and support effective learning experiences.",
  },
  {
    title: "Secretary of BEM FILKOM",
    period: "June 2025 - Present",
    description:
      "Managed digital administration systems, systematically archived official documents, and ensured efficient internal information flow across organizational divisions.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal as="div" variant="left" className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Experience
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Experiences that shaped my{" "}
            <span className="text-highlight-muted">growth</span>
            <br />
            and <span className="text-highlight-muted">skills</span>.
          </h2>
        </Reveal>

        <div className="relative mt-18 md:mt-20">
          <div className="absolute bottom-0 top-0 hidden w-px bg-zinc-200 dark:bg-zinc-800 md:left-1/2 md:block md:-translate-x-1/2" />

          {experiences.map((experience, index) => (
            <Reveal
              as="article"
              key={experience.title}
              variant="soft"
              delay={index * 90}
              className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-x-4 gap-y-5 pb-12 last:pb-0 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-start md:gap-x-6 md:gap-y-0 md:pb-16 last:md:pb-0"
            >
              <div
                className={`absolute left-4 w-px bg-zinc-200 dark:bg-zinc-800 md:hidden ${
                  index === experiences.length - 1
                    ? "top-4 bottom-1"
                    : "top-4 bottom-0"
                }`}
              />

              <div className="col-start-2 row-start-1 md:col-start-1 md:pr-10 md:text-right">
                <h3
                  className={`font-bold tracking-tight text-zinc-950 dark:text-white ${
                    experience.title === "PIJAK x IBM SkillsBuild Participant"
                      ? "text-[1.15rem] sm:whitespace-nowrap sm:text-2xl"
                      : "text-xl sm:text-2xl"
                  }`}
                >
                  {experience.title}
                </h3>
                <span className="mt-4 inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-500 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  {experience.period}
                </span>
              </div>

              <div className="col-start-1 row-start-1 flex h-8 w-8 items-start justify-center pt-2 md:col-start-2 md:h-auto md:w-14 md:justify-center md:pt-2">
                <span className="h-3 w-3 rounded-full bg-zinc-300 ring-8 ring-white dark:bg-zinc-600 dark:ring-zinc-950" />
              </div>

              <div className="col-start-2 row-start-2 md:col-start-3 md:row-start-1 md:pr-2">
                <p className="leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                  {experience.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
