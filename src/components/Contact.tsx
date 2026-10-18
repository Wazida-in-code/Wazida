"use client";

import { useState, type FormEvent } from "react";
import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import {
  contactInfo,
  socialLinks,
  type SocialIconName,
} from "@/data/portfolio";

// Literal class strings so Tailwind can statically detect every token.
const cardAccents = {
  blue: {
    icon: "bg-blue-primary/10 text-blue-electric group-hover:bg-blue-primary/20",
    border: "hover:border-blue-electric/40 focus-visible:border-blue-electric/40",
    glow: "hover:shadow-blue-primary/20 focus-visible:shadow-blue-primary/20",
    cta: "bg-blue-primary text-white group-hover:bg-blue-electric",
  },
  green: {
    icon: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
    border: "hover:border-emerald-400/40 focus-visible:border-emerald-400/40",
    glow: "hover:shadow-emerald-500/20 focus-visible:shadow-emerald-500/20",
    cta: "bg-emerald-500 text-white group-hover:bg-emerald-400",
  },
} as const;

interface ContactCardProps {
  title: string;
  description: string;
  value: string;
  href: string | null;
  ctaLabel: string;
  Icon: IconType;
  accent: keyof typeof cardAccents;
  external?: boolean;
  /** Tooltip shown when no real value is configured yet. */
  placeholderHint: string;
}

function ContactCard({
  title,
  description,
  value,
  href,
  ctaLabel,
  Icon,
  accent,
  external = false,
  placeholderHint,
}: ContactCardProps) {
  const accentClasses = cardAccents[accent];

  const cardClasses = `group flex h-full flex-col rounded-2xl border border-border-subtle bg-navy-800/50 p-6 transition-all duration-300 ${accentClasses.border} ${accentClasses.glow}`;
  const interactiveClasses = `${cardClasses} hover:-translate-y-1 hover:shadow-lg`;

  const content = (
    <>
      <span
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${accentClasses.icon}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="mt-5 block text-lg font-semibold text-text-primary">
        {title}
      </span>
      <span className="mt-1 block text-sm leading-relaxed text-text-muted">
        {description}
      </span>
      <span className="mt-4 block break-all text-sm font-medium text-text-secondary">
        {value}
      </span>
      <span
        className={`mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${accentClasses.cta}`}
      >
        {ctaLabel}
        <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </>
  );

  if (!href) {
    return (
      <div
        className={`${cardClasses} cursor-not-allowed opacity-70`}
        title={placeholderHint}
        aria-label={`${title}: not configured yet`}
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={interactiveClasses}
      aria-label={`${title}: ${value}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
}

function SocialIcon({ icon }: { icon: SocialIconName }) {
  return icon === "github" ? (
    <FiGithub className="h-5 w-5" aria-hidden="true" />
  ) : (
    <FiLinkedin className="h-5 w-5" aria-hidden="true" />
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");

  const emailHref = contactInfo.email ? `mailto:${contactInfo.email}` : null;
  const phoneHref = contactInfo.phone
    ? `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`
    : null;
  const whatsappDigits = contactInfo.whatsapp?.replace(/\D/g, "") ?? "";
  const whatsappHref = whatsappDigits ? `https://wa.me/${whatsappDigits}` : null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!contactInfo.email) {
      setFeedback(
        "No recipient email is configured yet. Add your address in src/data/portfolio.ts to enable this.",
      );
      return;
    }

    const subject = encodeURIComponent(
      form.subject.trim() || `Portfolio message from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setFeedback(
      "Your email app should now open with this message ready to review and send.",
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-navy-800/60 border border-border-subtle text-text-primary placeholder:text-text-muted text-sm focus:border-blue-electric/50 focus:outline-none focus:ring-2 focus:ring-blue-primary/20 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-text-secondary mb-2";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-bright">
            Reach Out
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Have a project in mind or want to work together? Feel free to reach
            out.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <ContactCard
            title="Email Me"
            description="Best for detailed messages, opportunities, and collaborations."
            value={contactInfo.email ?? contactInfo.emailPlaceholder}
            href={emailHref}
            ctaLabel="Send Me an Email"
            Icon={FiMail}
            accent="blue"
            placeholderHint="Add your email address in src/data/portfolio.ts to enable this."
          />
          <ContactCard
            title="Call Me"
            description="Prefer talking? Tap to dial directly from your phone."
            value={contactInfo.phone ?? contactInfo.phonePlaceholder}
            href={phoneHref}
            ctaLabel="Call Now"
            Icon={FiPhone}
            accent="blue"
            placeholderHint="Add your phone number in src/data/portfolio.ts to enable this."
          />
          <ContactCard
            title="WhatsApp"
            description="Quick questions and instant chats. Usually the fastest way."
            value={contactInfo.whatsapp ?? contactInfo.whatsappPlaceholder}
            href={whatsappHref}
            ctaLabel="Chat on WhatsApp"
            Icon={FaWhatsapp}
            accent="green"
            external
            placeholderHint="Add your WhatsApp number in src/data/portfolio.ts to enable this."
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) =>
              social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-lg border border-border-subtle bg-navy-800/60 p-3 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-electric/40 hover:text-blue-bright"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ) : (
                <span
                  key={social.name}
                  title={social.placeholder}
                  aria-label={`${social.name} profile not configured`}
                  className="rounded-lg border border-border-subtle bg-navy-800/60 p-3 text-text-secondary opacity-60"
                >
                  <SocialIcon icon={social.icon} />
                </span>
              ),
            )}
          </div>

          <p className="inline-flex items-center gap-2 text-sm text-text-muted">
            <FiMapPin className="h-4 w-4" aria-hidden="true" />
            {contactInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
}
