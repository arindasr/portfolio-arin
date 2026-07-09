import Reveal from "./Reveal";

const projects = [
  {
    title: "TEROKA",
    description:
      "Designed a website that helps users discover and explore local UMKM businesses through an intuitive interface, clear navigation, and an accessible user experience.",
    tags: ["UI/UX", "Figma", "Prototype"],
    image: "/assets/teroka-app.png",
    website: "https://teroka-app.vercel.app/",
    github: "https://github.com/aliimndev/teroka-app.git",
  },
  {
    title: "WeMovies AI",
    description:
      "Designed an AI-powered movie recommendation platform that helps users discover films based on their preferences through an intuitive and personalized user experience.",
    tags: ["UI/UX", "Figma", "Prototype"],
    image: "/assets/wemoviesai.png",
    website: "https://wemoviesai.vercel.app/",
    github: "https://github.com/aliimndev/capstone-project.git",
  },
  
];

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="flex flex-col items-end gap-4 text-right">
          <Reveal as="div" variant="right" className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
              Projects
            </p>
          </Reveal>

          <Reveal
            as="h2"
            variant="right"
            className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            Things I&apos;ve <span className="text-highlight-muted">built</span>
            .
          </Reveal>
        </div>

        {/* Container diubah dari grid ke flex agar card dua item bisa di-center */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              variant="soft"
              delay={index * 100}
              className="flex min-h-72 w-full flex-col justify-between rounded-4xl border border-zinc-200 bg-white/75 p-6 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[10px_10px_0_rgba(113,113,122,0.16)] dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-zinc-700 dark:hover:shadow-[10px_10px_0_rgba(161,161,170,0.14)] lg:w-[calc(50%-0.625rem)]"
            >
              {/* Gambar – hanya menjadi link jika ada website */}
              {project.image &&
                (project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mb-5 block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full rounded object-cover"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-5 h-56 w-full rounded object-cover"
                  />
                ))}

              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-300 text-justify">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-zinc-100/80 px-3 py-1 text-xs font-semibold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-950 hover:decoration-zinc-500 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50 dark:hover:decoration-zinc-400"
                    title="Lihat kode di GitHub"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
