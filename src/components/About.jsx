function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/55 dark:text-white/55">
            About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turning complex data into clear decisions.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-black/70 dark:text-white/70">
          <p>
            I am an aspiring Data Analyst with strong interests in data visualization, 
            UI/UX design, and frontend development. I enjoy combining analytical thinking, 
            creativity, and technical skills to create meaningful and user-centered digital experiences.
          </p>
          <p>
            I enjoy transforming raw data into clear insights, interactive dashboards, and intuitive 
            interfaces that help people understand information quickly and make better decisions with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
