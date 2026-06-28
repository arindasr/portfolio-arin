function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© 2026 Arinda Setyo Rini. All rights reserved.</p>
        <a
          href="#home"
          className="font-semibold text-zinc-700 transition hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-400"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
