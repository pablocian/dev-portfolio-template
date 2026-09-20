import { scrollToSection } from '../scrollToSection.js';
import personalInfo from '../data/profile.js';

const links = [
  { to: 'projects', label: 'Projects' },
  { to: 'stats', label: 'Stats' },
  { to: 'contact', label: 'Contact' },
];

function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/10 bg-void/70 px-3 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-5">
        <a
          href="#top"
          onClick={(event) => scrollToSection(event, 'top')}
          className="shrink-0 px-1 font-mono text-[11px] tracking-[0.18em] text-white/80 uppercase sm:px-2 sm:text-sm sm:tracking-[0.22em]"
        >
          <span className="sm:hidden">{personalInfo.shortName}</span>
          <span className="hidden sm:inline">{personalInfo.displayName}</span>
        </a>
        <div className="flex items-center gap-3 text-[11px] text-white/55 sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              onClick={(event) => scrollToSection(event, link.to)}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(event) => scrollToSection(event, 'contact')}
          className="glow-magenta rounded-full border border-magenta/50 bg-magenta/10 px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:text-sm"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

export default Nav;
