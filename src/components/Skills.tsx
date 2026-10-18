import { skillCategories } from "@/data/portfolio";
import type { SkillIconName } from "@/data/portfolio";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiPython, SiMongodb, } from "react-icons/si";
import { SiDaisyui, SiShadcnui } from "react-icons/si";
import { FiBox, FiCpu } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
// Map icon identifiers from portfolio data to actual icon components
const skillIcons: Record<SkillIconName, IconType> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  daisyui: SiDaisyui,
  heroui: FiBox,
  shadcn: SiShadcnui,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  antigravity: FiCpu,
  python: SiPython,
  mongodb: SiMongodb,
};

function SkillIcon({
  icon,
  className = "w-7 h-7",
}: {
  icon: SkillIconName;
  className?: string;
}) {
  const Icon = skillIcons[icon];
  return <Icon className={className} aria-hidden="true" />;
}
export default function Skills() {
    return (<section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-bright mb-2">
            What I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category) => (<div key={category.title}>
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-blue-primary to-blue-electric rounded-full"/>
                {category.title}
              </h3>

              {/* Skill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (<div key={skill.name} className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-navy-800/50 border border-border-subtle hover:border-blue-electric/30 hover:bg-navy-700/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-text-muted group-hover:text-blue-bright transition-colors duration-300">
                      <SkillIcon icon={skill.icon}/>
                    </div>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>))}
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
