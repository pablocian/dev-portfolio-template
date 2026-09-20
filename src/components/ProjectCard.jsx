function GithubIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
      />
    </svg>
  );
}

function previewSrc(preview) {
  if (!preview) return null;
  return `${import.meta.env.BASE_URL}${preview.replace(/^\//, '')}`;
}

function ProjectCard({ project }) {
  const src = previewSrc(project.preview);

  return (
    <article className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-panel sm:min-h-[340px]">
      {src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(232,121,249,0.16),transparent_50%),#0c0e16]">
          <span className="absolute inset-0 flex items-center justify-center px-6 text-center text-4xl font-bold tracking-tight text-white/10 select-none sm:text-5xl">
            {project.title}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

      <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6 sm:min-h-[340px] sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((link) => {
            const isGithub = /github/i.test(link.text);
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-black/70"
              >
                {isGithub ? <GithubIcon /> : <ExternalLinkIcon />}
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
