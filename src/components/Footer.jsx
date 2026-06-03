function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© 2026 Arinda Setyo Rini. All rights reserved.</p>
        <a
          href="#home"
          className="font-semibold text-black transition hover:text-black/60 dark:text-white dark:hover:text-white/60"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
