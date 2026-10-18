import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiTrendingUp,
} from "react-icons/fi";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Wazida Momtaz Esha`,
    description: project.description,
  };
}

function ProjectDetailsFallback() {
  return (
    <main
      className="mx-auto min-h-screen max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="text-sm font-medium text-blue-bright">Loading project…</p>
      <div className="mt-6 h-10 w-2/3 animate-pulse rounded-lg bg-navy-800" />
      <div className="mt-4 h-20 max-w-3xl animate-pulse rounded-lg bg-navy-800/70" />
      <div className="mt-10 aspect-video animate-pulse rounded-xl bg-navy-800" />
    </main>
  );
}

export default function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDetailsFallback />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

async function ProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <header className="sticky top-0 z-40 border-b border-border-subtle bg-navy-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm text-text-secondary transition-colors duration-300 hover:text-blue-bright"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="sm:hidden">Back</span>
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-text-secondary transition-all duration-300 hover:bg-navy-800/50 hover:text-blue-bright"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <FiGithub className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-blue-primary px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-electric sm:px-4"
            >
              <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live Demo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h1 className="break-words text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            {project.title}
            {project.titleBangla && (
              <span className="ml-2 text-lg font-normal text-blue-bright sm:ml-3 sm:text-xl">
                ({project.titleBangla})
              </span>
            )}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {project.longDescription}
          </p>
        </div>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-xl border border-border-subtle bg-navy-800 sm:mb-12">
          <Image
            src={project.image}
            alt={`Screenshot placeholder for ${project.title}; replace with an actual project screenshot.`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          <div className="space-y-10 lg:col-span-2">
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="mb-5 flex items-center gap-2 text-xl font-bold text-text-primary"
              >
                <FiCheckCircle className="h-5 w-5 text-blue-electric" aria-hidden="true" />
                Key Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-xl border border-border-subtle bg-navy-800/50 p-4"
                  >
                    <h3 className="mb-1.5 text-sm font-semibold text-blue-bright">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="challenges-heading">
              <h2
                id="challenges-heading"
                className="mb-5 flex items-center gap-2 text-xl font-bold text-text-primary"
              >
                <FiAlertCircle className="h-5 w-5 text-blue-electric" aria-hidden="true" />
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-electric" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="improvements-heading">
              <h2
                id="improvements-heading"
                className="mb-5 flex items-center gap-2 text-xl font-bold text-text-primary"
              >
                <FiTrendingUp className="h-5 w-5 text-blue-electric" aria-hidden="true" />
                Potential Improvements
              </h2>
              <ul className="space-y-3">
                {project.futureImprovements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-bright" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-xl border border-border-subtle bg-navy-800/50 p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Tech Stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-lg border border-border-subtle bg-navy-700/60 px-3 py-1.5 text-sm font-medium text-blue-light"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3 rounded-xl border border-border-subtle bg-navy-800/50 p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Project Links
              </h2>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-lg border border-border-subtle bg-navy-700/40 p-3 text-sm text-text-secondary transition-all duration-300 hover:border-blue-electric/30 hover:text-blue-bright"
              >
                <FiExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                Live Project
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-3 rounded-lg border border-border-subtle bg-navy-700/40 p-3 text-sm text-text-secondary transition-all duration-300 hover:border-blue-electric/30 hover:text-blue-bright"
                >
                  <FiGithub className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Source Code
                </a>
              )}
            </section>

            <Link
              href="/#projects"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border-medium py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-blue-electric/40 hover:text-blue-bright"
            >
              <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to All Projects
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
