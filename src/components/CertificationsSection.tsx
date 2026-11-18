import { useEffect, useState } from 'react';
import { Award, X } from 'lucide-react';
import { CERTIFICATES, CertificateItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certificates" className="border-b border-[#DFCEBA] bg-[#F5EBDD] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#DFCEBA] pb-8 md:flex-row md:items-end">
          <div>
            <span className="inline-block h-1 w-10 rounded-sm bg-[#A7D8F0]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3E2C23]">
              Certifications
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#786B60]">
            Verified courses and industry skill programs. Click any item below to view the certificate.
          </p>
        </div>

        {/* Compact Click-to-View Certification Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              aria-label={`View ${cert.issuer} ${cert.title} Certificate`}
              className="card-elevated group flex w-full items-start justify-between gap-4 rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] p-6 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6F4E37] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#A7D8F0] bg-[#DCEFFA] text-[#3E2C23] transition-colors group-hover:bg-[#A7D8F0]">
                  <Award className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#3E2C23] transition-colors group-hover:text-[#6F4E37]">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#6F4E37]">{cert.issuer}</p>
                  <p className="mt-1.5 font-mono text-xs text-[#786B60] tabular-nums">
                    {cert.certificateType} · {cert.issueDate}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Image Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certification-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2C23]/75 p-4 backdrop-blur-xs md:p-8"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DFCEBA] bg-[#F5EBDD] px-6 py-4">
              <div>
                <h3 id="certification-modal-title" className="text-sm font-bold text-[#3E2C23]">
                  {selectedCert.issuer} — {selectedCert.title}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-[#786B60] tabular-nums">
                  {selectedCert.certificateType} · Issued {selectedCert.issueDate}
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
                  fallbackSrc={selectedCert.fallbackImageUrl}
                  alt={`${selectedCert.issuer} ${selectedCert.certificateType} for ${selectedCert.title}`}
                  fallbackTitle={`${selectedCert.issuer} — ${selectedCert.title}`}
                  fallbackSubtitle={`Issued ${selectedCert.issueDate}`}
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
