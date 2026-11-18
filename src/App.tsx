import { useState } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import { Hero } from './components/Hero';
import { InternshipSection } from './components/InternshipSection';
import { Navbar } from './components/Navbar';
import { ProjectLightbox } from './components/ProjectLightbox';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import {
  CERTIFICATES,
  EDUCATION_TIMELINE,
  PROFILE,
  ProjectItem,
  SKILL_GROUPS,
} from './data/portfolioData';

const SKILL_ICON_MAP: Record<string, typeof Code2> = {
  frontend: Code2,
  programming: Database,
  aiml: Cpu,
  tools: GitBranch,
};

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EBDD] text-[#352A24]">
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      <main>
        <Hero />

        {/* 3. About Me Section */}
        <section id="about" className="border-b border-[#E5D8C8] bg-[#FFF9F0] py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#3E2C23]">
                  About Me
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#786B60]">
                  Bridging thoughtful interface design with engineering discipline and applied AI.
                </p>
              </div>

              <div className="card-elevated rounded-2xl border border-[#E5D8C8] bg-[#F5EBDD] p-7 md:p-9 lg:col-span-8">
                <div className="space-y-5 text-base leading-relaxed text-[#352A24]">
                  {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                    <p key={idx} className="max-w-[68ch]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#E5D8C8] pt-6 sm:grid-cols-3">
                  <div>
                    <p className="text-sm font-bold text-[#3E2C23]">Frontend Engineering</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#786B60]">
                      Responsive layouts, semantic HTML/CSS, and React interfaces.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#3E2C23]">Python & Security</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#786B60]">
                      Problem solving, data handling with SQL, and credential hygiene.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#3E2C23]">AI & Retrieval</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#786B60]">
                      Machine learning fundamentals and grounded RAG assistants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Technical Skills Section */}
        <section id="skills" className="border-b border-[#E5D8C8] bg-[#F5EBDD] py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#3E2C23]">
                  Technical Skills
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#786B60]">
                Core languages, frameworks, and tools used across web development, Python utilities, and AI/ML projects.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map((group) => {
                const IconComponent = SKILL_ICON_MAP[group.id] || Code2;
                return (
                  <div
                    key={group.id}
                    className="card-elevated flex flex-col justify-between rounded-2xl border border-[#E5D8C8] bg-[#FFF9F0] p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6F4E37]"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#A7D8F0]/70 bg-[#DCEFFA] text-[#3E2C23]">
                          <IconComponent className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <h3 className="text-base font-bold text-[#3E2C23]">{group.category}</h3>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#786B60]">
                        {group.summary}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2.5 border-t border-[#E5D8C8] pt-4">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-baseline justify-between gap-2 text-sm"
                        >
                          <span className="font-semibold text-[#3E2C23]">{item.name}</span>
                          <span className="text-right text-xs text-[#786B60]">{item.note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Featured Projects Section (Separate Component) */}
        <ProjectsSection onSelectProject={setActiveProject} />

        {/* 6. Internships & Availability Section */}
        <InternshipSection onOpenResume={() => setResumeOpen(true)} />

        {/* 7. Education Timeline Section */}
        <section id="education" className="border-b border-[#DFCEBA] bg-[#FFF9F0] py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#3E2C23]">
              Education
            </h2>

            <div className="mt-10 relative pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-[#DFCEBA]">
              {EDUCATION_TIMELINE.map((edu) => (
                <div key={edu.id} className="relative">
                  {/* Timeline Node */}
                  <span
                    aria-hidden="true"
                    className="absolute top-6 -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#6F4E37] bg-[#A7D8F0]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#3E2C23]" />
                  </span>

                  <div className="card-elevated rounded-2xl border border-[#DFCEBA] bg-[#F5EBDD]/55 p-7 md:p-8">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#A7D8F0] bg-[#DCEFFA] text-[#3E2C23]">
                          <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-[#3E2C23] md:text-xl">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-semibold text-[#6F4E37]">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <span className="self-start rounded-md border border-[#A7D8F0] bg-[#DCEFFA] px-3 py-1 font-mono text-xs font-semibold text-[#3E2C23] tabular-nums sm:self-center">
                        {edu.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-medium text-[#786B60]">
                      {edu.affiliation} · {edu.location}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#352A24]">
                      {edu.highlights}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Certifications Section */}
        <section id="certificates" className="border-b border-[#DFCEBA] bg-[#F5EBDD] py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#3E2C23]">
                  Certifications
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#786B60]">
                Verified courses and industry skill programs completed alongside undergraduate study.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {CERTIFICATES.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated group flex items-start justify-between gap-4 rounded-2xl border border-[#E5D8C8] bg-[#FFF9F0] p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6F4E37] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#A7D8F0]/70 bg-[#DCEFFA] text-[#3E2C23] transition-colors group-hover:bg-[#A7D8F0]">
                      <Award className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#3E2C23] transition-colors group-hover:text-[#6F4E37]">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#6F4E37]">{cert.issuer}</p>
                      <p className="mt-1 text-xs text-[#786B60]">{cert.subtitle}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#6F4E37] whitespace-nowrap shrink-0">
                    Verify
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Contact Section (Soft Baby-Blue Background + Brown Heading & Primary Button) */}
        <section
          id="contact"
          className="relative overflow-hidden border-b border-[#DFCEBA] bg-[#DCEFFA] py-20 md:py-24"
        >
          <div
            aria-hidden="true"
            className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_25%_50%,black_25%,transparent_80%)]"
          />
          <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <span className="inline-block h-1 w-10 rounded-sm bg-[#6F4E37]" aria-hidden="true" />
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3E2C23] md:text-4xl text-balance">
                  Get In Touch
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-[#352A24]">
                  Actively seeking internship opportunities in frontend web development, Python
                  software engineering, and AI/ML. Feel free to reach out directly.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#6F4E37] px-6 py-3 text-sm font-semibold text-[#FFF9F0] shadow-xs transition-colors hover:bg-[#3E2C23] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2C23]"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] px-4 py-3 text-sm font-semibold text-[#3E2C23] transition-colors hover:border-[#6F4E37] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="h-4 w-4 text-[#6F4E37]" />
                        <span>Email Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#786B60]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="card-elevated rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6F4E37]"
                >
                  <p className="text-xs font-semibold text-[#786B60]">Email</p>
                  <p className="mt-1.5 truncate text-sm font-bold text-[#3E2C23]">
                    {PROFILE.email}
                  </p>
                </a>

                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6F4E37]"
                >
                  <p className="text-xs font-semibold text-[#786B60]">GitHub</p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-sm font-bold text-[#3E2C23]">
                    {PROFILE.githubHandle}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6F4E37]" />
                  </p>
                </a>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6F4E37]"
                >
                  <p className="text-xs font-semibold text-[#786B60]">LinkedIn</p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-sm font-bold text-[#3E2C23]">
                    {PROFILE.linkedinHandle}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#6F4E37]" />
                  </p>
                </a>

                <div className="card-elevated rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] p-5">
                  <p className="text-xs font-semibold text-[#786B60]">Location</p>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#3E2C23]">
                    <MapPin className="h-3.5 w-3.5 text-[#6F4E37]" />
                    {PROFILE.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Minimal Footer */}
      <footer className="bg-[#F5EBDD] py-8 no-print">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 text-xs text-[#786B60] sm:flex-row md:px-10">
          <p>© 2026 {PROFILE.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6 font-medium text-[#352A24]">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6F4E37]"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6F4E37]"
            >
              LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-[#6F4E37]">
              Email
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-1 font-semibold text-[#6F4E37] hover:text-[#3E2C23]"
            >
              Top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      <ProjectLightbox project={activeProject} onClose={() => setActiveProject(null)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
