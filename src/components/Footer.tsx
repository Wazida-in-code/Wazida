import {
  personalInfo,
  socialLinks,
  type SocialIconName,
} from "@/data/portfolio";
import { FiArrowUp, FiGithub, FiHeart, FiLinkedin } from "react-icons/fi";

function SocialIcon({ icon }: { icon: SocialIconName }) {
  return icon === "github" ? (
    <FiGithub className="h-5 w-5" aria-hidden="true" />
  ) : (
    <FiLinkedin className="h-5 w-5" aria-hidden="true" />
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-gradient-to-b from-navy-900 to-navy-950">
      {/* Decorative blue glow accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-blue-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-blue-electric/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="text-xl font-bold text-text-primary transition-colors duration-300 hover:text-blue-bright"
            >
              {personalInfo.firstName}
              <span className="text-blue-electric">.</span>
            </a>
            <p className="mt-1 max-w-xs text-sm text-text-muted">
              {personalInfo.profession} — building modern web experiences.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const className =
                "card-glow grid h-10 w-10 place-items-center rounded-full border border-border-subtle bg-navy-800/60 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-electric/40 hover:bg-navy-700/60 hover:text-blue-bright";

              return social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={className}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ) : (
                <span
                  key={social.name}
                  title={social.placeholder}
                  aria-label={`${social.name} profile not configured`}
                  className={`${className} cursor-not-allowed opacity-60`}
                >
                  <SocialIcon icon={social.icon} />
                </span>
              );
            })}
          </div>
        </div>

        {/* Thin blue divider */}
        <div className="mt-5 border-t border-border-medium/60" />

        {/* Bottom bar */}
        <div className="mt-4 flex items-center justify-between gap-4 text-left">
          <p className="text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span>© 2026 {personalInfo.firstName}.</span>
              <FiHeart
                aria-hidden="true"
                className="animate-heart-pulse h-3.5 w-3.5 shrink-0 fill-current text-blue-electric"
              />
            </span>{" "}
            All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="card-glow grid h-10 w-10 place-items-center rounded-full border border-border-medium bg-navy-800/60 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-electric/50 hover:bg-navy-700/60 hover:text-blue-bright hover:shadow-lg hover:shadow-blue-primary/20"
          >
            <FiArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
