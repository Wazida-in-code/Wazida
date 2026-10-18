import Image from "next/image";
import {
  personalInfo,
  socialLinks,
  type SocialIconName,
} from "@/data/portfolio";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import ResumeButton from "@/components/ResumeButton";
function SocialIcon({ icon }: { icon: SocialIconName }) {
    switch (icon) {
        case "github":
            return <FiGithub className="w-5 h-5"/>;
        case "linkedin":
            return <FiLinkedin className="w-5 h-5"/>;
        default:
            return null;
    }
}
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 h-48 w-48 rounded-full bg-blue-primary/5 blur-2xl" />
        <div className="absolute bottom-1/4 -right-24 h-56 w-56 rounded-full bg-blue-electric/5 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Left: Text Content ─── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="animate-fade-in-up text-sm sm:text-base font-medium tracking-[0.2em] uppercase text-blue-bright mb-3">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1
              aria-label={personalInfo.name}
              className="text-[clamp(1.5rem,6.5vw,3rem)] lg:text-[clamp(2.25rem,4.3vw,3rem)] font-bold leading-tight mb-2 whitespace-nowrap"
            >
              {personalInfo.name.split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  aria-hidden="true"
                  className="animate-letter-in inline-block"
                  style={{ animationDelay: `${0.15 + index * 0.06}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            {/* Profession */}
            <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl font-semibold text-gradient mb-4">
              {personalInfo.profession}
            </p>

            {/* Tagline */}
            <h2 className="animate-fade-in-up delay-300 text-base sm:text-lg text-text-secondary font-medium mb-4 leading-relaxed">
              {personalInfo.tagline}
            </h2>

            {/* Intro */}
            <p className="animate-fade-in-up delay-400 text-sm sm:text-base text-text-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {personalInfo.heroIntro}
            </p>

            {/* Buttons */}
            <ResumeButton />

            {/* Social Links */}
            <div className="animate-fade-in-up delay-600 flex items-center gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => {
                const icon = <SocialIcon icon={social.icon} />;
                const className =
                  "p-3 rounded-lg bg-navy-800/60 border border-border-subtle text-text-secondary transition-all duration-300";

                return social.url ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`${className} hover:text-blue-bright hover:border-blue-electric/40 hover:bg-navy-700/60 hover:-translate-y-0.5`}
                  >
                    {icon}
                  </a>
                ) : (
                  <span
                    key={social.name}
                    title={social.placeholder}
                    aria-label={`${social.name} profile not configured`}
                    className={`${className} cursor-not-allowed opacity-60`}
                  >
                    {icon}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ─── Right: Profile Photo ─── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="animate-slide-right relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-primary/20 via-blue-electric/10 to-transparent blur-xl animate-pulse-glow" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-border-medium bg-navy-800 transition-transform duration-500 hover:scale-[1.02] sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[360px] lg:w-[360px]">
                <Image
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 360px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-text-muted animate-scroll-hint">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <HiChevronDown className="w-5 h-5"/>
        </div>
      </div>
    </section>
  );
}
