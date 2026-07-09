import Reveal from "./Reveal";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <Reveal as="div" variant="left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Turning ideas into
            <br />
            <span className="text-highlight-muted">digital experiences</span>
            <br />
            and{" "}
            <span className="text-highlight-muted">meaningful insights</span>.
          </h2>
        </Reveal>
        <Reveal
          as="div"
          delay={120}
          className="space-y-6 text-base sm:text-lg leading-8 text-zinc-600 dark:text-zinc-300 text-justify"
        >
          <p>
            I am passionate about Front-End Development, UI/UX Design, and Data
            Analytics. I enjoy building responsive, user-centered digital
            experiences by combining creativity and problem-solving.
          </p>
          <p>
            Always eager to learn new technologies, I strive to create solutions
            that combine functionality, usability, and creativity while
            transforming data into meaningful insights that support better
            decision-making.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
