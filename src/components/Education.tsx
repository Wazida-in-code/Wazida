import { education } from "@/data/portfolio";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
export default function Education() {
    return (<section id="education" className="py-20 sm:py-28 bg-navy-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-bright mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, index) => (<div key={index} className="relative group p-6 sm:p-8 rounded-2xl bg-navy-800/50 border border-border-subtle hover:border-blue-electric/30 transition-all duration-400">
              {/* Accent line */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-blue-primary to-blue-electric"/>

              <div className="pl-4 sm:pl-6">
                {/* Institution */}
                <div className="flex items-start gap-3 mb-3">
                  <FiMapPin className="w-5 h-5 text-blue-electric mt-0.5 shrink-0"/>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                    {edu.institution}
                  </h3>
                </div>

                {/* Degree */}
                <div className="flex items-start gap-3 mb-3">
                  <FiBookOpen className="w-5 h-5 text-blue-bright mt-0.5 shrink-0"/>
                  <p className="text-base text-blue-bright font-medium">
                    {edu.degree}
                  </p>
                </div>

                {/* Period */}
                <div className="flex items-center gap-3 mb-4">
                  <FiCalendar className="w-5 h-5 text-text-muted shrink-0"/>
                  <p className="text-sm text-text-muted">{edu.period}</p>
                </div>

                {/* Description */}
                {edu.description && (<p className="text-sm text-text-secondary leading-relaxed">
                    {edu.description}
                  </p>)}
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
