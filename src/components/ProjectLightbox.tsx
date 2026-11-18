import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const RAG_KNOWLEDGE_SAMPLES = [
  {
    id: 'retrieval',
    question: 'How does the assistant prevent hallucinated answers?',
    chunks: [
      {
        source: 'pipeline/retriever.py · Chunk #04',
        score: '0.91',
        excerpt:
          'Top-k semantic passages are extracted from the indexed vector store before prompt assembly, constraining generation strictly to retrieved evidence.',
      },
      {
        source: 'pipeline/prompt_builder.py · Chunk #02',
        score: '0.86',
        excerpt:
          'System instructions require explicit grounding in supplied context blocks and return a fallback notice when confidence falls below threshold.',
      },
    ],
    answer:
      'The assistant mitigates hallucinations by retrieving the highest-scoring document chunks via semantic similarity first and conditioning the LLM prompt exclusively on those verified passages.',
  },
  {
    id: 'ingestion',
    question: 'How are custom documents prepared for search?',
    chunks: [
      {
        source: 'ingest/chunker.py · Chunk #01',
        score: '0.94',
        excerpt:
          'Source files are normalized, segmented into overlapping fixed-size text windows, and embedded for dense vector lookup.',
      },
    ],
    answer:
      'Custom knowledge files are parsed, split into overlapping chunks to preserve boundary context, and converted into vector embeddings so user queries match semantically related sections.',
  },
  {
    id: 'stack',
    question: 'Which core components power this architecture?',
    chunks: [
      {
        source: 'README.md · Architecture Overview',
        score: '0.89',
        excerpt:
          'Built in Python with modular document loaders, vector similarity indexing, and an LLM response synthesis layer.',
      },
    ],
    answer:
      'The pipeline is implemented in Python, separating document ingestion, vector retrieval, and LLM synthesis into independent modules for easy swapping of knowledge sources.',
  },
];

const SAMPLE_STUDENTS = [
  { id: 'STU-2026-01', name: 'Aarav Krishnan', dept: 'CSE (AI & ML)', attendance: 94, gpa: 9.1 },
  { id: 'STU-2026-02', name: 'Meera Sundaram', dept: 'CSE (AI & ML)', attendance: 88, gpa: 8.6 },
  { id: 'STU-2026-03', name: 'Rohan Nair', dept: 'Computer Science', attendance: 91, gpa: 8.8 },
  { id: 'STU-2026-04', name: 'Divya Lakshmi', dept: 'Information Tech', attendance: 83, gpa: 8.2 },
];

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');

  const [pwInput, setPwInput] = useState('Arfath@2026#Secure');
  const [pwLength, setPwLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copiedPw, setCopiedPw] = useState(false);

  const [selectedQueryId, setSelectedQueryId] = useState(RAG_KNOWLEDGE_SAMPLES[0].id);

  const [studentSearch, setStudentSearch] = useState('');
  const [students, setStudents] = useState(SAMPLE_STUDENTS);

  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  const pwAnalysis = useMemo(() => {
    const hasUpper = /[A-Z]/.test(pwInput);
    const hasLower = /[a-z]/.test(pwInput);
    const hasNumber = /[0-9]/.test(pwInput);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwInput);
    const lengthOk = pwInput.length >= 12;

    let charsetSize = 0;
    if (hasLower) charsetSize += 26;
    if (hasUpper) charsetSize += 26;
    if (hasNumber) charsetSize += 10;
    if (hasSymbol) charsetSize += 32;

    const entropy =
      pwInput.length > 0 && charsetSize > 0
        ? Math.round(pwInput.length * Math.log2(charsetSize))
        : 0;

    let label = 'Weak';
    if (entropy >= 80) label = 'Very Strong';
    else if (entropy >= 60) label = 'Strong';
    else if (entropy >= 40) label = 'Moderate';

    return { hasUpper, hasLower, hasNumber, hasSymbol, lengthOk, entropy, label };
  }, [pwInput]);

  const generatePassword = () => {
    const lower = 'abcdefghijkmnopqrstuvwxyz';
    const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const nums = '23456789';
    const syms = '!@#$%^&*-_=+';
    const pool = lower + upper + nums + (includeSymbols ? syms : '');
    let result = '';
    const array = new Uint32Array(pwLength);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < pwLength; i++) {
      result += pool[array[i] % pool.length];
    }
    setPwInput(result);
    setCopiedPw(false);
  };

  const handleCopyPw = async () => {
    try {
      await navigator.clipboard.writeText(pwInput);
      setCopiedPw(true);
      setTimeout(() => setCopiedPw(false), 1800);
    } catch {
      setCopiedPw(false);
    }
  };

  const filteredStudents = useMemo(() => {
    const q = studentSearch.trim().toLowerCase();
    if (!q) return students;
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        s.dept.toLowerCase().includes(q)
    );
  }, [studentSearch, students]);

  const avgGpa = useMemo(() => {
    if (filteredStudents.length === 0) return '0.00';
    const total = filteredStudents.reduce((acc, s) => acc + s.gpa, 0);
    return (total / filteredStudents.length).toFixed(2);
  }, [filteredStudents]);

  if (!project) return null;

  const activeRagSample =
    RAG_KNOWLEDGE_SAMPLES.find((s) => s.id === selectedQueryId) || RAG_KNOWLEDGE_SAMPLES[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2C23]/65 p-4 backdrop-blur-xs md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#E5D8C8] bg-[#FFF9F0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E5D8C8] bg-[#F5EBDD] px-6 py-4 md:px-8">
          <div className="flex items-center gap-3 text-xs font-medium text-[#786B60] tabular-nums">
            <span>Project {project.index}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5D8C8] bg-[#FFF9F0] text-[#3E2C23] transition-colors hover:bg-[#DCEFFA] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2
                id="project-modal-title"
                className="text-2xl font-bold tracking-tight text-[#3E2C23] md:text-3xl"
              >
                {project.title}
              </h2>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-[#DCEFFA] px-2.5 py-1 text-xs font-medium text-[#3E2C23]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-1 self-start rounded-lg bg-[#F5EBDD] p-1 border border-[#E5D8C8]">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#6F4E37] text-[#FFF9F0]'
                    : 'text-[#786B60] hover:text-[#3E2C23]'
                }`}
              >
                Architecture
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('interactive')}
                className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'interactive'
                    ? 'bg-[#6F4E37] text-[#FFF9F0]'
                    : 'text-[#786B60] hover:text-[#3E2C23]'
                }`}
              >
                Interactive Preview
              </button>
            </div>
          </div>

          {activeTab === 'overview' ? (
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-6">
                <div className="overflow-hidden rounded-xl border border-[#E5D8C8] bg-[#F5EBDD]">
                  <ResilientImage
                    src={project.image}
                    fallbackSrc={project.fallbackImage}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    fallbackSubtitle={project.tech.join(' · ')}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between md:col-span-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#786B60]">
                    Overview
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#352A24]">
                    {project.overview}
                  </p>

                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#786B60]">
                    Key Highlights
                  </h3>
                  <ul className="mt-3 space-y-2.5 border-t border-[#E5D8C8] pt-3 text-sm text-[#352A24]">
                    {project.architecturePoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[#6F4E37] tabular-nums pt-0.5">
                          0{i + 1}
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#E5D8C8] pt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#6F4E37] px-5 py-2.5 text-xs font-semibold text-[#FFF9F0] transition-colors hover:bg-[#3E2C23] whitespace-nowrap shrink-0"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveTab('interactive')}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#A7D8F0] px-4 py-2.5 text-xs font-semibold text-[#3E2C23] transition-colors hover:bg-[#DCEFFA] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Try Interactive Preview
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-[#E5D8C8] bg-[#F5EBDD] p-6">
              {project.id === 'rag-ai-assistant' && (
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#E5D8C8] pb-4">
                    <div>
                      <h3 className="text-base font-bold text-[#3E2C23]">
                        RAG Retrieval & Grounding Simulation
                      </h3>
                      <p className="mt-0.5 text-xs text-[#786B60]">
                        Select a prompt to inspect retrieved source chunks and grounded output synthesis.
                      </p>
                    </div>
                    <Sparkles className="h-4 w-4 text-[#6F4E37] shrink-0" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {RAG_KNOWLEDGE_SAMPLES.map((sample) => (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => setSelectedQueryId(sample.id)}
                        className={`rounded-lg border px-3.5 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                          selectedQueryId === sample.id
                            ? 'border-[#6F4E37] bg-[#DCEFFA] text-[#3E2C23]'
                            : 'border-[#E5D8C8] bg-[#FFF9F0] text-[#352A24] hover:border-[#6F4E37]'
                        }`}
                      >
                        {sample.question}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-[#E5D8C8] bg-[#FFF9F0] p-4">
                      <p className="text-xs font-semibold text-[#786B60]">
                        Retrieved Context Chunks
                      </p>
                      <div className="mt-3 space-y-3">
                        {activeRagSample.chunks.map((chunk, idx) => (
                          <div
                            key={idx}
                            className="border-t border-[#E5D8C8] pt-3 first:border-0 first:pt-0"
                          >
                            <div className="flex items-center justify-between text-xs font-mono">
                              <span className="text-[#6F4E37]">{chunk.source}</span>
                              <span className="rounded bg-[#DCEFFA] px-1.5 py-0.5 text-[#3E2C23] tabular-nums">
                                score {chunk.score}
                              </span>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-[#352A24]">
                              {chunk.excerpt}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#E5D8C8] bg-[#FFF9F0] p-4">
                      <p className="text-xs font-semibold text-[#786B60]">
                        Grounded Assistant Response
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#352A24]">
                        {activeRagSample.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'password-security-toolkit' && (
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#E5D8C8] pb-4">
                    <div>
                      <h3 className="text-base font-bold text-[#3E2C23]">
                        Password Entropy & Generator Workbench
                      </h3>
                      <p className="mt-0.5 text-xs text-[#786B60]">
                        Interactive client-side preview of the Password Security Toolkit checks.
                      </p>
                    </div>
                    <ShieldCheck className="h-4 w-4 text-[#6F4E37] shrink-0" />
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      value={pwInput}
                      onChange={(e) => setPwInput(e.target.value)}
                      aria-label="Test password strength"
                      className="flex-1 rounded-lg border border-[#E5D8C8] bg-[#FFF9F0] px-4 py-2.5 font-mono text-sm text-[#3E2C23] focus:border-[#6F4E37] focus:outline-none"
                      placeholder="Type a password to evaluate..."
                    />
                    <button
                      type="button"
                      onClick={handleCopyPw}
                      className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg bg-[#A7D8F0] px-4 py-2 text-xs font-semibold text-[#3E2C23] hover:bg-[#DCEFFA] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {copiedPw ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedPw ? 'Copied' : 'Copy'}
                    </button>
                    <button
                      type="button"
                      onClick={generatePassword}
                      className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg bg-[#6F4E37] px-4 py-2 text-xs font-semibold text-[#FFF9F0] hover:bg-[#3E2C23] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Generate
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-[#786B60]">
                    <label className="flex items-center gap-3">
                      <span>
                        Length:{' '}
                        <strong className="font-mono tabular-nums text-[#3E2C23]">{pwLength}</strong>
                      </span>
                      <input
                        type="range"
                        min={8}
                        max={24}
                        value={pwLength}
                        onChange={(e) => setPwLength(Number(e.target.value))}
                        className="accent-[#6F4E37]"
                      />
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-[#352A24]">
                      <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                        className="accent-[#6F4E37]"
                      />
                      <span>Include Symbols</span>
                    </label>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[#E5D8C8] pt-4 sm:grid-cols-4">
                    <div>
                      <p className="text-xs text-[#786B60]">Strength Rating</p>
                      <p className="mt-1 text-lg font-bold text-[#3E2C23]">{pwAnalysis.label}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#786B60]">Estimated Entropy</p>
                      <p className="mt-1 font-mono text-lg font-bold text-[#3E2C23] tabular-nums">
                        {pwAnalysis.entropy} bits
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-[#786B60]">Hygiene Checks</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#352A24]">
                        {pwAnalysis.lengthOk ? '12+ chars (Pass)' : '12+ chars (Fail)'} ·{' '}
                        {pwAnalysis.hasUpper ? 'Uppercase (Pass)' : 'Uppercase (Missing)'} ·{' '}
                        {pwAnalysis.hasNumber ? 'Digits (Pass)' : 'Digits (Missing)'} ·{' '}
                        {pwAnalysis.hasSymbol ? 'Symbols (Pass)' : 'Symbols (Missing)'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'student-management-system' && (
                <div>
                  <div className="flex flex-col justify-between gap-3 border-b border-[#E5D8C8] pb-4 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-base font-bold text-[#3E2C23]">
                        Student Records & GPA Ledger Preview
                      </h3>
                      <p className="mt-0.5 text-xs text-[#786B60]">
                        Search records or adjust attendance to inspect live cohort metrics.
                      </p>
                    </div>
                    <div className="relative">
                      <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#786B60]" />
                      <input
                        type="text"
                        value={studentSearch}
                        onChange={(e) => setStudentSearch(e.target.value)}
                        placeholder="Filter by ID or name..."
                        className="rounded-lg border border-[#E5D8C8] bg-[#FFF9F0] py-2 pr-3 pl-8 text-xs text-[#3E2C23] focus:border-[#6F4E37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-4 overflow-x-auto rounded-lg border border-[#E5D8C8] bg-[#FFF9F0]">
                    <table className="w-full text-left text-xs">
                      <thead className="border-b border-[#E5D8C8] bg-[#DCEFFA]/50 text-[#3E2C23]">
                        <tr>
                          <th className="px-4 py-2.5 font-semibold">Student ID</th>
                          <th className="px-4 py-2.5 font-semibold">Name</th>
                          <th className="px-4 py-2.5 font-semibold">Department</th>
                          <th className="px-4 py-2.5 font-semibold text-right">Attendance</th>
                          <th className="px-4 py-2.5 font-semibold text-right">GPA</th>
                          <th className="px-4 py-2.5 font-semibold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5D8C8]">
                        {filteredStudents.map((stu) => (
                          <tr key={stu.id} className="text-[#352A24]">
                            <td className="px-4 py-2.5 font-mono tabular-nums text-[#786B60]">
                              {stu.id}
                            </td>
                            <td className="px-4 py-2.5 font-medium text-[#3E2C23]">{stu.name}</td>
                            <td className="px-4 py-2.5 text-[#786B60]">{stu.dept}</td>
                            <td className="px-4 py-2.5 text-right font-mono tabular-nums">
                              {stu.attendance}%
                            </td>
                            <td className="px-4 py-2.5 text-right font-mono font-semibold tabular-nums">
                              {stu.gpa.toFixed(1)}
                            </td>
                            <td className="px-4 py-2.5 text-right">
                              <button
                                type="button"
                                onClick={() =>
                                  setStudents((prev) =>
                                    prev.map((row) =>
                                      row.id === stu.id
                                        ? {
                                            ...row,
                                            attendance: Math.min(100, row.attendance + 1),
                                          }
                                        : row
                                    )
                                  )
                                }
                                className="font-semibold text-[#6F4E37] hover:underline cursor-pointer"
                              >
                                +1% Present
                              </button>
                            </td>
                          </tr>
                        ))}
                        {filteredStudents.length === 0 && (
                          <tr>
                            <td colSpan={6} className="px-4 py-6 text-center text-[#786B60]">
                              No student records match "{studentSearch}".
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-[#786B60]">
                    <span>
                      Showing{' '}
                      <strong className="font-mono tabular-nums text-[#3E2C23]">
                        {filteredStudents.length}
                      </strong>{' '}
                      records
                    </span>
                    <span>
                      Cohort Mean GPA:{' '}
                      <strong className="font-mono tabular-nums text-[#3E2C23]">{avgGpa}</strong>
                    </span>
                  </div>
                </div>
              )}

              <div className="mt-5 flex justify-end border-t border-[#E5D8C8] pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6F4E37] hover:text-[#3E2C23]"
                >
                  Open full repository on GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
