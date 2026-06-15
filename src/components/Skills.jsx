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
    <section id="skills" className="scroll-mt-24 border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools for analysis, visualization, and digital experiences.
          </h2>
        </div>
        
        {/* 1 baris dengan animasi sliding pelan */}
        <div className="mt-12 overflow-hidden">
          <div className="animate-slideSlow flex gap-3 w-max">
            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-black/15 px-4 py-4 text-center text-sm font-semibold whitespace-nowrap dark:border-white/15"
              >
                {skill}
              </div>
            ))}
            {/* Duplikat untuk efek infinite */}
            {skills.map((skill) => (
              <div
                key={`duplicate-${skill}`}
                className="border border-black/15 px-4 py-4 text-center text-sm font-semibold whitespace-nowrap dark:border-white/15"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
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