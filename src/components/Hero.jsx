import profile from "/public/assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.25fr_0.75fr] md:px-8">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-black/60 dark:text-white/60">
            Portfolio
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-black sm:text-6xl lg:text-7xl dark:text-white">
            Arinda Setyo Rini
          </h1>
          <p className="mt-6 text-2xl font-semibold text-black sm:text-3xl dark:text-white">
            Aspiring Data Analyst
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70 dark:text-white/70">
            Passionate about data analytics, data visualization, UI/UX design,
            and frontend development.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-950 dark:hover:text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white dark:border-white/70 dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="border border-black p-8 transition hover:-translate-y-1 hover:shadow-[12px_12px_0_#000] dark:border-white/70 dark:hover:shadow-[12px_12px_0_#fff]">
          <div className="aspect-square overflow-hidden rounded-md bg-black">
            <img
              src={profile}
              alt="Arinda Setyo Rini"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 text-sm text-black/65 dark:border-white/10 dark:text-white/65">
            <span>Data Analytics</span>
            <span>UI/UX</span>
            <span>Frontend</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
