import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import personalInfo from '../data/profile.js';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  twitter: FaTwitter,
  x: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  discord: FaDiscord,
  email: FaEnvelope,
  website: FaGlobe,
};

function Prompt({ children }) {
  return (
    <p className="font-mono text-sm text-term">
      <span className="text-term/70">$ </span>
      {children}
    </p>
  );
}

function Contact() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="section-wrap">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c12]/90 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-white/35">
              {personalInfo.promptUser} ~ /contact
            </span>
          </div>

          <div className="space-y-6 p-5 text-left font-mono sm:p-7">
            <div>
              <Prompt>contact --info</Prompt>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s Connect
              </h2>
            </div>

            <div>
              <Prompt>location --current</Prompt>
              <p className="mt-2 flex items-center gap-2 text-sm text-term">
                <FaMapMarkerAlt aria-hidden="true" />
                {personalInfo.location}
              </p>
            </div>

            <div>
              <Prompt>contact --email</Prompt>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-2 inline-block rounded-md border border-term/40 bg-black/40 px-3 py-2 text-sm text-term transition hover:border-term hover:bg-term/10"
              >
                {personalInfo.email}
              </a>
            </div>

            <div>
              <Prompt>ls ./social-links</Prompt>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {personalInfo.socials.map((social) => {
                  const Icon = ICONS[social.icon] ?? FaGlobe;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:border-term/40 hover:bg-term/5"
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Icon aria-hidden="true" />
                        {social.name}
                      </span>
                      <span className="mt-1 block text-xs text-white/45">{social.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
