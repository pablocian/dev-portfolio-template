import { ReactTyped } from 'react-typed';
import { scrollToSection } from '../scrollToSection.js';
import personalInfo from '../data/profile.js';

function Home() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-28 text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-term/35 bg-term/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.14em] text-term uppercase sm:text-xs">
        <span className="glow-green h-2 w-2 rounded-full bg-term" />
        {personalInfo.status}
      </div>

      <h1 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
        {personalInfo.firstName}{' '}
        {personalInfo.lastName ? (
          <span className="gradient-text">{personalInfo.lastName}</span>
        ) : null}
      </h1>

      <p className="mt-5 min-h-[2rem] font-mono text-base text-cyan sm:text-lg">
        <ReactTyped
          strings={personalInfo.typedRoles}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
      </p>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
        {personalInfo.tagline}
      </p>

      <div className="glow-cyan mt-10 max-w-2xl rounded-2xl border border-cyan/25 bg-panel/70 px-5 py-5 text-left backdrop-blur-md sm:px-7 sm:py-6">
        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
          Executive Summary
        </p>
        <p className="text-sm leading-relaxed text-white/80 sm:text-[15px]">
          {personalInfo.summary}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          onClick={(event) => scrollToSection(event, 'projects')}
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan/50 hover:bg-cyan/10"
        >
          View Projects
        </a>
        <a
          href="#contact"
          onClick={(event) => scrollToSection(event, 'contact')}
          className="glow-magenta rounded-full border border-magenta/50 bg-magenta/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-magenta/25"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Home;
