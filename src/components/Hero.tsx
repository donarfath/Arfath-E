import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const HERO_HIGHLIGHTS = [
  { index: '01', label: 'Focus Area', value: 'Frontend Web & AI / ML' },
  { index: '02', label: 'Primary Stack', value: 'Python · JavaScript · React.js · SQL' },
  { index: '03', label: 'Experience', value: 'CodeVedX Python Intern · Open for Roles' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#DFCEBA] bg-[#F5EBDD]"
    >
      {/* Developer & Architectural Background Design */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        {/* Crisp Architectural Grid + Developer Dot Matrix */}
        <div className="hero-grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_30%,transparent_80%)]" />
        <div className="hero-dot-matrix absolute inset-0 opacity-45 [mask-image:radial-gradient(ellipse_at_20%_80%,black_15%,transparent_65%)]" />

        {/* Soft Ambient Baby-Blue & Cream Depth */}
        <div className="absolute -top-24 right-[-6%] h-[440px] w-[440px] rounded-full bg-[#A7D8F0]/40 blur-3xl" />
        <div className="absolute -bottom-24 left-[-6%] h-[340px] w-[340px] rounded-full bg-[#FFF9F0]/85 blur-3xl" />

        {/* Clean Developer Line-Art SVG: Neural Node Graph + Code Brackets + Window Wireframe */}
        <svg
          className="absolute top-4 right-0 hidden h-[520px] w-[560px] lg:block"
          viewBox="0 0 560 520"
          fill="none"
        >
          {/* Stepped Window Wireframe */}
          <rect
            x="170"
            y="36"
            width="340"
            height="220"
            rx="16"
            stroke="#8ECAE6"
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
          <line
            x1="170"
            y1="68"
            x2="510"
            y2="68"
            stroke="#8ECAE6"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <circle cx="192" cy="52" r="3" stroke="#6F4E37" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="206" cy="52" r="3" stroke="#6F4E37" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="220" cy="52" r="3" stroke="#6F4E37" strokeOpacity="0.3" strokeWidth="1.2" />

          {/* Clean Geometric Angle Brackets < / > */}
          <path
            d="M118 92L94 114L118 136"
            stroke="#6F4E37"
            strokeOpacity="0.22"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M150 92L174 114L150 136"
            stroke="#6F4E37"
            strokeOpacity="0.22"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M140 86L128 142"
            stroke="#8ECAE6"
            strokeOpacity="0.65"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Subtle AI / ML Node Connection Graph */}
          <circle cx="80" cy="330" r="5" fill="#A7D8F0" fillOpacity="0.55" />
          <circle cx="155" cy="285" r="4" stroke="#6F4E37" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="155" cy="375" r="4" stroke="#6F4E37" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="230" cy="330" r="5" fill="#A7D8F0" fillOpacity="0.55" />
          <path
            d="M85 327L151 287M85 333L151 373M159 287L225 327M159 373L225 333"
            stroke="#6F4E37"
            strokeOpacity="0.16"
            strokeWidth="1.25"
          />

          {/* Concentric Architectural Arcs */}
          <circle
            cx="420"
            cy="360"
            r="115"
            stroke="#DFCEBA"
            strokeWidth="1.25"
            strokeDasharray="5 5"
          />
          <circle
            cx="420"
            cy="360"
            r="165"
            stroke="#A7D8F0"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        </svg>

        {/* Left-edge Subtle Curly Brace Line Art */}
        <svg
          className="absolute bottom-24 left-6 hidden h-32 w-24 opacity-45 xl:block"
          viewBox="0 0 96 128"
          fill="none"
        >
          <path
            d="M36 16C26 16 22 22 22 32V50C22 58 16 64 8 64C16 64 22 70 22 78V96C22 106 26 112 36 112"
            stroke="#6F4E37"
            strokeOpacity="0.22"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M60 16C70 16 74 22 74 32V50C74 58 80 64 88 64C80 64 74 70 74 78V96C74 106 70 112 60 112"
            stroke="#8ECAE6"
            strokeOpacity="0.6"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-12 md:px-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Greeting, Name, Title, Intro, CTAs & Quick Links */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#6F4E37]">
              <span className="inline-block h-0.5 w-6 bg-[#6F4E37]" aria-hidden="true" />
              <span>{PROFILE.greeting}</span>
            </div>

            <h1
              className="mt-3 font-extrabold tracking-tight text-[#3E2C23] text-balance"
              style={{ fontSize: 'clamp(2.65rem, 4.9vw, 4.15rem)', lineHeight: 1.06 }}
            >
              {PROFILE.name}
            </h1>

            <h2 className="mt-3 text-xl font-bold text-[#6F4E37] md:text-2xl">
              {PROFILE.role}
            </h2>

            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#352A24] md:text-[17px]">
              {PROFILE.heroDescription}
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#6F4E37] px-6 py-3 text-sm font-semibold text-[#FFF9F0] shadow-xs transition-all duration-150 hover:bg-[#3E2C23] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
              >
                Explore Projects
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#8ECAE6] bg-[#A7D8F0] px-6 py-3 text-sm font-semibold text-[#3E2C23] transition-colors duration-150 hover:bg-[#DCEFFA] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>

            {/* Structured Quick Links Bar */}
            <div className="mt-9 inline-flex flex-wrap items-center gap-4 rounded-xl border border-[#DFCEBA] bg-[#FFF9F0]/95 px-5 py-2.5 text-sm font-medium text-[#352A24] shadow-xs">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 transition-colors hover:text-[#6F4E37] whitespace-nowrap shrink-0"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4 text-[#6F4E37]" />
              </a>

              <span aria-hidden="true" className="text-[#DFCEBA]">
                /
              </span>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 transition-colors hover:text-[#6F4E37] whitespace-nowrap shrink-0"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4 text-[#6F4E37]" />
              </a>

              <span aria-hidden="true" className="text-[#DFCEBA]">
                /
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#786B60]">
                <MapPin className="h-3.5 w-3.5 text-[#6F4E37]" />
                {PROFILE.location}
              </span>
            </div>
          </div>

          {/* Right Column: Profile Photo with Layered Baby-Blue Background Frame */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[390px]">
              {/* Subtle Baby-Blue Background Shapes */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 h-full w-full rounded-2xl border border-[#8ECAE6] bg-[#A7D8F0]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-3.5 -left-3.5 h-32 w-32 rounded-2xl border border-[#A7D8F0] bg-[#DCEFFA]"
              />

              <figure className="card-elevated relative overflow-hidden rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0]">
                <div className="aspect-[4/4.4] w-full overflow-hidden bg-[#DCEFFA]/45">
                  <ResilientImage
                    src={PROFILE.heroImage}
                    fallbackSrc={PROFILE.heroFallbackImage}
                    alt={PROFILE.heroImageAlt}
                    fallbackTitle={PROFILE.name}
                    fallbackSubtitle={PROFILE.role}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-[#DFCEBA] bg-[#FFF9F0] px-5 py-3.5 text-xs">
                  <div>
                    <span className="block font-bold text-[#3E2C23]">{PROFILE.name}</span>
                    <span className="text-[11px] text-[#786B60]">Anna University · 2024–2028</span>
                  </div>
                  <span className="rounded-md border border-[#A7D8F0] bg-[#DCEFFA] px-2.5 py-1 font-semibold text-[#3E2C23] whitespace-nowrap">
                    B.E. CSE (AI & ML)
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Clean 3-Column Developer Highlights Strip */}
        <div className="card-elevated mt-14 grid grid-cols-1 divide-y divide-[#DFCEBA] rounded-2xl border border-[#DFCEBA] bg-[#FFF9F0] md:grid-cols-3 md:divide-x md:divide-y-0">
          {HERO_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="px-6 py-4.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-[#786B60]">{item.label}</p>
                <span className="font-mono text-[11px] font-semibold text-[#6F4E37] tabular-nums">
                  {item.index}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-bold text-[#3E2C23]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
