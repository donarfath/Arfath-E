import { useEffect } from 'react';
import { ArrowUpRight, Mail, MapPin, X } from 'lucide-react';
import {
  CERTIFICATES,
  COMPLETED_INTERNSHIPS,
  EDUCATION_TIMELINE,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const edu = EDUCATION_TIMELINE[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2C23]/70 p-4 backdrop-blur-xs md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#DFCEBA] bg-[#F5EBDD] px-6 py-4 no-print">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#3E2C23]">
            <span className="inline-block h-2 w-2 rounded-xs bg-[#6F4E37]" aria-hidden="true" />
            <span>Curriculum Vitae · {PROFILE.name}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] text-[#3E2C23] transition-colors hover:bg-[#DCEFFA] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Editorial Resume Document */}
        <div className="overflow-y-auto p-6 md:p-9">
          {/* Header Card */}
          <div className="rounded-2xl border border-[#8ECAE6]/70 bg-[#DCEFFA]/65 p-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h2
                  id="resume-modal-title"
                  className="text-2xl font-extrabold tracking-tight text-[#3E2C23] md:text-3xl"
                >
                  {PROFILE.name}
                </h2>
                <p className="mt-1 text-sm font-bold text-[#6F4E37]">{PROFILE.role}</p>
              </div>
              <span className="self-start rounded-md border border-[#A7D8F0] bg-[#FFF9F0] px-3 py-1 font-mono text-xs font-semibold text-[#3E2C23]">
                B.E. CSE (AI & ML)
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#A7D8F0]/60 pt-4 text-xs font-medium text-[#352A24]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#6F4E37]" />
                {PROFILE.location}
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#6F4E37]"
              >
                <Mail className="h-3.5 w-3.5 text-[#6F4E37]" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#6F4E37]"
              >
                {PROFILE.githubHandle}
                <ArrowUpRight className="h-3 w-3 text-[#6F4E37]" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#6F4E37]"
              >
                {PROFILE.linkedinHandle}
                <ArrowUpRight className="h-3 w-3 text-[#6F4E37]" />
              </a>
            </div>
          </div>

          <div className="mt-7 space-y-7 text-sm text-[#352A24]">
            {/* Internships */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Internships
              </h3>
              <div className="mt-3 space-y-3">
                {COMPLETED_INTERNSHIPS.map((intern) => (
                  <div
                    key={intern.id}
                    className="rounded-xl border border-[#DFCEBA] bg-[#F5EBDD]/45 p-4"
                  >
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <p className="font-bold text-[#3E2C23]">
                        {intern.role} — <span className="text-[#6F4E37]">{intern.company}</span>
                      </p>
                      <span className="font-mono text-xs font-medium text-[#786B60] tabular-nums">
                        {intern.dateRange}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#352A24]">
                      {intern.summary}
                    </p>
                    <p className="mt-2 font-mono text-[11px] font-semibold text-[#6F4E37]">
                      Certificate ID: {intern.certificateId} · 12 Weeks Virtual Internship
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Education
              </h3>
              <div className="mt-3 rounded-xl border border-[#DFCEBA] bg-[#F5EBDD]/45 p-4">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <p className="font-bold text-[#3E2C23]">{edu.degree}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#6F4E37]">
                      {edu.institution} · {edu.affiliation}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#3E2C23] tabular-nums">
                    {edu.duration}
                  </span>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Technical Skills
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SKILL_GROUPS.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] p-4"
                  >
                    <p className="text-xs font-bold text-[#3E2C23]">{group.category}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item.name}
                          className="rounded bg-[#DCEFFA] px-2 py-0.5 text-[11px] font-semibold text-[#3E2C23]"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Featured Projects
              </h3>
              <div className="mt-3 divide-y divide-[#E5D8C8] rounded-xl border border-[#DFCEBA] bg-[#FFF9F0]">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-bold text-[#3E2C23]">{proj.title}</p>
                      <span className="font-mono text-[11px] font-medium text-[#6F4E37]">
                        {proj.tech.join(' · ')}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#786B60]">
                      {proj.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Certifications
              </h3>
              <ul className="mt-3 divide-y divide-[#E5D8C8] rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] text-xs">
                {CERTIFICATES.map((cert) => (
                  <li
                    key={cert.id}
                    className="flex items-baseline justify-between gap-4 px-4 py-3"
                  >
                    <span className="font-semibold text-[#3E2C23]">{cert.title}</span>
                    <span className="text-[#786B60] shrink-0">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
