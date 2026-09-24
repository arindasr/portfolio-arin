import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BriefcaseBusiness, Camera, Code2, Mail, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import Reveal from "./Reveal";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="grid items-stretch gap-10 md:grid-cols-[0.9fr_1.1fr]">

          {/* Left: heading + desc + icon row */}
          <Reveal as="div" variant="left" className="flex flex-col">
            <div>
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
            </div>

            {/* Social icons — menyamping */}
            <div className="mt-8 flex items-center gap-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={contact.label}
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white/75 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-zinc-700 dark:hover:bg-zinc-100"
                  >
                    <Icon className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-50 dark:text-zinc-400 dark:group-hover:text-zinc-950" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal as="div" variant="right" delay={100} className="flex flex-col">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col gap-4 rounded-4xl border border-zinc-200 bg-white/75 p-8 dark:border-zinc-800 dark:bg-zinc-900/70"
            >
              <h3 className="text-lg font-bold tracking-tight">Send a message</h3>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="from_name" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-700"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="from_email" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-700"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="flex-1 resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-700"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-zinc-300 hover:bg-white/70 hover:text-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/70 dark:hover:text-zinc-200"
              >
                {status === "loading" ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800 dark:bg-green-950/40 dark:text-green-400">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or reach out directly via email.
                </div>
              )}
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default Contact;
