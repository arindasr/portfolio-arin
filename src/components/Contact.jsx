import { BriefcaseBusiness, Camera, Code2, Mail } from "lucide-react";
import Reveal from "./Reveal";

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arinda-setyo-rini",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    href: "https://github.com/arindasr",
    icon: Code2,
  },
  {
    label: "Email",
    href: "mailto:aaarindasr@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arindastyrn?igsh=MWIxeGtwM2FnYnY3bQ%3D%3D&utm_source=qr",
    icon: Camera,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal as="div" variant="left">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Contact
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Let&apos;s <span className="text-highlight-muted">connect</span> and{" "}
            <span className="text-highlight-muted">build something</span>{" "}
            meaningful.
          </h2>
          <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-300 text-justify">
            I'm open to freelance projects, collaborations, and opportunities to
            create impactful digital experiences and meaningful insights.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <Reveal
                as="a"
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                variant="soft"
                delay={index * 90}
                className="group flex flex-col justify-between gap-3 rounded-3xl border border-zinc-200 bg-white/75 p-5 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-zinc-900 hover:text-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-zinc-700 dark:hover:bg-zinc-100 dark:hover:text-zinc-950 sm:flex-row sm:items-center"
              >
                {/* Layout baru: logo di kiri, teks di kanan */}
                <div className="flex w-full items-center justify-between">
                  <Icon className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-300 dark:text-zinc-500 dark:group-hover:text-zinc-700" />
                  <span className="font-semibold">{contact.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
