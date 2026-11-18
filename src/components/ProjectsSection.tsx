import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-b border-[#DFCEBA] bg-[#FFF9F0] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Clean Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#DFCEBA] pb-8 md:flex-row md:items-end">
          <div>
            <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3E2C23]">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#786B60]">
            Independent applications built with Python, structured architecture, and grounded AI retrieval workflows.
          </p>
        </div>

        {/* Separated 3-Column Editorial Cards */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="card-elevated group flex flex-col overflow-hidden rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] transition-all duration-200 hover:-translate-y-1 hover:border-[#6F4E37]"
            >
              {/* Soft Baby-Blue Framed Media Display (Non-clickable; Preview button opens details) */}
              <div className="border-b border-[#DFCEBA] bg-[#DCEFFA] p-4">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8ECAE6] bg-[#FFF9F0]">
                  <ResilientImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    fallbackSubtitle={project.tech.join(' · ')}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between bg-[#FFF9F0] p-6">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#786B60]">
                    <span className="font-mono font-semibold text-[#6F4E37] tabular-nums">
                      {project.index} · {project.category}
                    </span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>

                  <h3 className="mt-2.5 text-xl font-bold tracking-tight text-[#3E2C23]">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#352A24]">
                    {project.shortDescription}
                  </p>

                  {/* Key Engineering Highlights */}
                  <ul className="mt-4 space-y-2 border-t border-[#E5D8C8] pt-4 text-xs leading-relaxed text-[#786B60]">
                    {project.architecturePoints.slice(0, 2).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono font-semibold text-[#6F4E37] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Soft Baby-Blue Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#A7D8F0] bg-[#DCEFFA] px-2.5 py-1 text-xs font-semibold text-[#3E2C23] whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-[#E5D8C8] pt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#6F4E37] px-3.5 py-2 text-xs font-semibold text-[#FFF9F0] transition-colors hover:bg-[#3E2C23] whitespace-nowrap"
                  >
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#8ECAE6] bg-[#DCEFFA] px-3.5 py-2 text-xs font-semibold text-[#3E2C23] transition-colors hover:bg-[#A7D8F0] whitespace-nowrap cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Preview
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
