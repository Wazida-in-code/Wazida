import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { FiCode, FiLayout, FiSmartphone, FiZap } from "react-icons/fi";
const highlights = [
    { icon: FiLayout, label: "Responsive UI" },
    { icon: FiCode, label: "Clean Code" },
    { icon: FiSmartphone, label: "Mobile First" },
    { icon: FiZap, label: "Modern Tech" },
];
export default function About() {
    return (<section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-bright mb-2">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* ─── Left: Photo + Highlights ─── */}
          <div className="lg:col-span-2 flex flex-col items-center gap-8">
            {/* Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-border-medium bg-navy-800">
              <Image src={personalInfo.profileImage} alt={`${personalInfo.name} — About`} fill className="object-cover object-center" sizes="(max-width: 640px) 224px, 256px"/>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {highlights.map(({ icon: Icon, label }) => (<div key={label} className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-800/60 border border-border-subtle text-text-secondary text-sm hover:border-blue-electric/30 hover:text-blue-bright transition-all duration-300">
                  <Icon className="w-4 h-4 text-blue-electric shrink-0"/>
                  <span>{label}</span>
                </div>))}
            </div>
          </div>

          {/* ─── Right: Text ─── */}
          <div className="lg:col-span-3">
            <div className="space-y-4 text-text-secondary leading-relaxed text-[15px] sm:text-base">
              {personalInfo.aboutText.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
            </div>

          </div>
        </div>
      </div>
    </section>);
}
