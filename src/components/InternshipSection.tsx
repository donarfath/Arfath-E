import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  Briefcase,
  Calendar,
  FileText,
  MapPin,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  COMPLETED_INTERNSHIPS,
  CompletedInternship,
  INTERNSHIP_PROFILE,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface InternshipSectionProps {
  onOpenResume: () => void;
}

export function InternshipSection({ onOpenResume }: InternshipSectionProps) {
  const [selectedCert, setSelectedCert] = useState<CompletedInternship | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="internships" className="border-b border-[#DFCEBA] bg-[#F5EBDD] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#DFCEBA] pb-8 md:flex-row md:items-end">
          <div>
            <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3E2C23]">
              Internships
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#786B60]">
            Completed virtual internship experience alongside target engineering roles for upcoming opportunities.
          </p>
        </div>

        {/* Completed Internship Showcase */}
        <div className="mt-10 space-y-8">
          {COMPLETED_INTERNSHIPS.map((internship) => (
            <article
              key={internship.id}
              className="card-elevated grid grid-cols-1 overflow-hidden rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] lg:grid-cols-12"
            >
              {/* Left Details Column */}
              <div className="flex flex-col justify-between p-7 md:p-9 lg:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6F4E37]">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{internship.type}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#3E2C23]">
                    {internship.role}
                  </h3>
                  <p className="mt-1 text-base font-bold text-[#6F4E37]">
                    {internship.company}{' '}
                    <span className="text-xs font-normal text-[#786B60]">
                      — {internship.companyTagline}
                    </span>
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#786B60]">
                    <span className="inline-flex items-center gap-1.5 font-mono tabular-nums text-[#352A24]">
                      <Calendar className="h-3.5 w-3.5 text-[#6F4E37]" />
                      {internship.dateRange}
                    </span>
                    <span aria-hidden="true" className="text-[#DFCEBA]">
                      ·
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#352A24]">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#6F4E37]" />
                      QR Verified · Issued {internship.issueDate}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#352A24]">
                    {internship.summary}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[#E5D8C8] pt-4 text-xs leading-relaxed text-[#786B60]">
                    {internship.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono font-semibold text-[#6F4E37] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Soft Baby-Blue Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#A7D8F0] bg-[#DCEFFA] px-2.5 py-1 text-xs font-semibold text-[#3E2C23] whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Certificate Preview Column (Click Certificate to View) */}
              <div className="flex flex-col justify-between border-t border-[#DFCEBA] bg-[#DCEFFA] p-5 md:p-7 lg:col-span-5 lg:border-t-0 lg:border-l">
                <div className="flex items-center justify-between gap-2 pb-3 text-xs font-semibold text-[#3E2C23]">
                  <span>Certificate of Completion</span>
                  <span className="font-normal text-[#786B60]">Click certificate to view</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(internship)}
                  aria-label={`View ${internship.company} ${internship.role} Certificate`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#8ECAE6] bg-white p-1.5 shadow-sm transition-transform duration-200 hover:scale-[1.01] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
                >
                  <ResilientImage
                    src={internship.certificateImageUrl}
                    alt={`${internship.company} Certificate of Completion for ${internship.role}`}
                    fallbackTitle={`${internship.company} — ${internship.role}`}
                    fallbackSubtitle={internship.dateRange}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </button>

                <p className="mt-3 text-xs text-[#352A24]">
                  Issued by <strong className="text-[#3E2C23]">{internship.company}</strong> ·{' '}
                  {internship.issueDate}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Next Availability & Target Roles Strip */}
        <div className="mt-10 rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 border-b border-[#E5D8C8] pb-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-lg font-bold text-[#3E2C23]">{INTERNSHIP_PROFILE.headline}</h3>
              <p className="mt-1.5 max-w-2xl text-sm text-[#786B60]">
                {INTERNSHIP_PROFILE.objective}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-[#786B60]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#6F4E37]" />
                  {INTERNSHIP_PROFILE.locations}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#6F4E37]" />
                  {INTERNSHIP_PROFILE.availability}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl bg-[#6F4E37] px-5 py-2 text-xs font-semibold text-[#FFF9F0] transition-colors hover:bg-[#3E2C23] whitespace-nowrap"
              >
                Discuss Opportunity
                <ArrowDownRight className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-[#8ECAE6] bg-[#DCEFFA] px-4 py-2 text-xs font-semibold text-[#3E2C23] transition-colors hover:bg-[#A7D8F0] whitespace-nowrap cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5" />
                View Resume
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {INTERNSHIP_PROFILE.targetRoles.map((item) => (
              <div
                key={item.index}
                className="flex flex-col justify-between rounded-xl border border-[#E5D8C8] bg-[#F5EBDD]/50 p-5"
              >
                <div>
                  <p className="font-mono text-xs font-semibold text-[#6F4E37] tabular-nums">
                    Target Role {item.index}
                  </p>
                  <h4 className="mt-1.5 text-base font-bold text-[#3E2C23]">{item.role}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#786B60]">{item.summary}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded bg-[#DCEFFA] px-2 py-0.5 text-[11px] font-semibold text-[#3E2C23]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Certificate Image Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2C23]/75 p-4 backdrop-blur-xs md:p-8"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DFCEBA] bg-[#F5EBDD] px-6 py-4">
              <div>
                <h3 id="certificate-modal-title" className="text-sm font-bold text-[#3E2C23]">
                  {selectedCert.company} — {selectedCert.role} Certificate
                </h3>
                <p className="mt-0.5 font-mono text-xs text-[#786B60] tabular-nums">
                  {selectedCert.dateRange} · Issued {selectedCert.issueDate}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate viewer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DFCEBA] bg-[#FFF9F0] text-[#3E2C23] hover:bg-[#DCEFFA] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto bg-[#F5EBDD] p-4 md:p-6">
              <div className="mx-auto overflow-hidden rounded-xl border border-[#DFCEBA] bg-white p-2 shadow-sm">
                <ResilientImage
                  src={selectedCert.certificateImageUrl}
                  alt={`${selectedCert.company} Certificate of Completion for ${selectedCert.role}`}
                  fallbackTitle={`${selectedCert.company} — ${selectedCert.role}`}
                  fallbackSubtitle={selectedCert.dateRange}
                  className="mx-auto max-h-[70vh] w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
