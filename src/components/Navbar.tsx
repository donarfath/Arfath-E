import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internships', href: '#internships' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'internships',
      'education',
      'certificates',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#DFCEBA] bg-[#F5EBDD]/95 shadow-[0_4px_18px_-10px_rgba(62,44,35,0.12)] backdrop-blur-md no-print">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-3 md:px-10">
        {/* Zone 1: Existing AE Logo */}
        <a
          href="#home"
          aria-label="Arfath E Home"
          className="inline-flex items-center gap-0.5 text-xl font-extrabold tracking-tight text-[#3E2C23] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F4E37]"
        >
          <span>{PROFILE.logoFirst}</span>
          <span className="text-[#6F4E37]">{PROFILE.logoSecond}</span>
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#786B60]"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#3E2C23] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#6F4E37] after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F4E37] ${
                  isActive
                    ? 'font-semibold text-[#3E2C23] after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Top-Corner Resume Option + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl bg-[#6F4E37] px-4 py-2 text-xs font-semibold text-[#FFF9F0] shadow-xs transition-colors duration-150 hover:bg-[#3E2C23] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#DFCEBA] bg-[#FFF9F0] text-[#3E2C23] md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6F4E37]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#DFCEBA] bg-[#FFF9F0] px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-[44px] items-center text-sm font-medium transition-colors ${
                    isActive ? 'font-semibold text-[#6F4E37]' : 'text-[#352A24] hover:text-[#6F4E37]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
