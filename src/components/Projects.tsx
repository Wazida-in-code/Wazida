import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-navy-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-bright mb-2">
            My Recent Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            A selection of projects I&apos;ve built while learning and growing as
            a frontend developer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-border-subtle bg-navy-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-electric/40 hover:shadow-xl hover:shadow-blue-primary/5"
            >
              <div className="relative aspect-video overflow-hidden bg-navy-700">
                <Image
                  src={project.image}
                  alt={`Screenshot placeholder for ${project.title}; replace with an actual project screenshot.`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-lg font-bold text-text-primary">
                  {project.title}
                  {project.titleBangla && (
                    <span className="ml-2 text-sm font-normal text-blue-bright">
                      ({project.titleBangla})
                    </span>
                  )}
                </h3>

                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <ul className="mb-5 mt-auto flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border-subtle bg-navy-700/60 px-2.5 py-1 text-xs font-medium text-blue-light"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-blue-primary px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-electric"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Live Demo
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border-medium px-3 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-blue-electric/40 hover:text-blue-bright"
                  >
                    View Details
                    <FiArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-border-medium text-text-secondary transition-all duration-300 hover:border-blue-electric/40 hover:text-blue-bright"
                    >
                      <FiGithub className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
