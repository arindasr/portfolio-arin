import Reveal from "./Reveal";

const profile = "/assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.25fr_0.75fr] md:px-8">
        <div>
          <Reveal as="div" variant="left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
              Portfolio
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-zinc-50">
              Arinda Setyo Rini
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Computer Science Student passionate about Front-End Development,
              UI/UX Design, and Data Analytics.
            </p>
          </Reveal>

          <Reveal
            variant="left"
            delay={120}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-zinc-300 hover:bg-white/70 hover:text-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/70 dark:hover:text-zinc-200"
            >
              View Projects
            </a>
            <a
              href="/assets/CV-ArindaSR.pdf"
              download="CV-ArindaSR.pdf"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-950"
            >
              Download CV
            </a>
          </Reveal>
        </div>

        <Reveal
          variant="right"
          delay={120}
          className="rounded-4xl border border-zinc-200 bg-white/75 p-8 shadow-[0_20px_60px_rgba(24,24,27,0.06)] transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[12px_12px_0_rgba(113,113,122,0.18)] dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)] dark:hover:border-zinc-700 dark:hover:shadow-[12px_12px_0_rgba(161,161,170,0.16)]"
        >
          <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
            <img
              src={profile}
              alt="Arinda Setyo Rini"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-zinc-200 pt-5 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <span>Frontend</span>
            <span>UI/UX</span>
            <span>Data Analytics</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
