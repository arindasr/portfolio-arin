
const experiences = [
  {
    title: "Laboratory Teaching Assistant",
    description:
      "Mentored students in Operating Systems and Big Data processing, collaborating with lecturers to manage laboratory activities and support effective learning experiences.",
  },
  {
    title: "Secretary of BEM FILKOM",
    description:
      "Managed digital administration systems, systematically archived official documents, and ensured efficient internal information flow across organizational divisions.",
  },
  {
    title: "PIJAK x IBM SkillsBuild Participant",
    description:
      "Gained hands-on experience in Python programming and AI implementation, and developed a machine learning-based movie recommendation system called WeMovies AI.",
  },
  {
    title: "Master of Ceremony (MC)",
    description:
      "Hosted various academic and organizational events, driving audience engagement through effective public speaking and adaptability in dynamic situations.",
  },
];

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            That shaped my growth and skills.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className="border border-black/15 p-6 transition hover:-translate-y-1 hover:border-black hover:shadow-[8px_8px_0_#000] dark:border-white/15 dark:hover:border-white dark:hover:shadow-[8px_8px_0_#fff]"
            >
              <span className="text-sm font-semibold text-black/45 dark:text-white/45">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{experience.title}</h3>
              <p className="mt-3 leading-7 text-black/65 dark:text-white/65">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
