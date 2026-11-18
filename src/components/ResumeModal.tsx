import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import {
  CERTIFICATES,
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2C23]/65 p-4 backdrop-blur-xs md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#E5D8C8] bg-[#FFF9F0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E5D8C8] bg-[#F5EBDD] px-6 py-4 no-print">
          <p className="text-xs font-semibold text-[#786B60]">Curriculum Vitae · {PROFILE.name}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#A7D8F0] px-3.5 py-1.5 text-xs font-semibold text-[#3E2C23] hover:bg-[#DCEFFA] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              Print
            </button>
            <a
              href={PROFILE.resumeUrl}
              download="Arfath_E_Resume.pdf"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#6F4E37] px-3.5 py-1.5 text-xs font-semibold text-[#FFF9F0] hover:bg-[#3E2C23] whitespace-nowrap shrink-0"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-[#E5D8C8] bg-[#FFF9F0] text-[#3E2C23] hover:bg-[#DCEFFA] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Document */}
        <div className="overflow-y-auto p-8 md:p-10">
          <div className="border-b border-[#E5D8C8] pb-6">
            <h2
              id="resume-modal-title"
              className="text-2xl font-extrabold tracking-tight text-[#3E2C23]"
            >
              {PROFILE.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#6F4E37]">{PROFILE.role}</p>
            <p className="mt-3 text-xs text-[#786B60]">
              {PROFILE.location} · {PROFILE.email} · {PROFILE.githubHandle} ·{' '}
              {PROFILE.linkedinHandle}
            </p>
          </div>

          <div className="mt-6 space-y-6 text-sm text-[#352A24]">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Education
              </h3>
              <div className="mt-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <div>
                  <p className="font-semibold text-[#3E2C23]">{edu.degree}</p>
                  <p className="text-xs text-[#786B60]">
                    {edu.institution} · {edu.affiliation}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#786B60] tabular-nums">
                  {edu.duration}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Technical Skills
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SKILL_GROUPS.map((group) => (
                  <p key={group.id} className="text-xs leading-relaxed">
                    <strong className="text-[#3E2C23]">{group.category}:</strong>{' '}
                    {group.items.map((item) => item.name).join(' · ')}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Featured Projects
              </h3>
              <div className="mt-2 space-y-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-semibold text-[#3E2C23]">{proj.title}</p>
                      <span className="font-mono text-xs text-[#786B60]">
                        {proj.tech.join(' · ')}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#786B60]">
                      {proj.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
                Certifications
              </h3>
              <ul className="mt-2 space-y-1.5 text-xs text-[#352A24]">
                {CERTIFICATES.map((cert) => (
                  <li key={cert.id} className="flex items-baseline justify-between gap-4">
                    <span className="font-medium text-[#3E2C23]">{cert.title}</span>
                    <span className="text-[#786B60] shrink-0">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
