
const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Excel",
  "Tableau",
  "Power BI",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools for analysis, visualization, and digital experiences.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-black/15 px-4 py-4 text-center text-sm font-semibold transition hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white dark:border-white/15 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
