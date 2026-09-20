# Developer Portfolio Template

A dark, animated single-page portfolio for beginner developers who want a finished-looking site they can use as-is or extend. Clone it, swap in your details, and deploy.

Built with **React 19**, **Vite**, and **Tailwind CSS 4**.

## Quick start

```bash
git clone https://github.com/pablocian/dev-portfolio-template.git my-portfolio
cd my-portfolio
git remote remove origin
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Removing `origin` disconnects the clone from this template so you can add your own GitHub repo later.

## Customize

You only need to edit two files. Leave the components alone until you want to change the layout.

### 1. `src/data/profile.json`

Your name, bio, contact info, and GitHub username:

| Field | What it does |
| --- | --- |
| `firstName` / `lastName` | First name, then the gradient last name on the homepage. |
| `pageTitle` | Browser tab title |
| `status` | Badge above your name |
| `typedRoles` | Rotating lines under your name |
| `tagline` | Short line under the typed roles |
| `summary` | Executive summary body on the homepage |
| `location` / `email` | Contact section |
| `githubUsername` | Live contribution calendar and KPI cards |
| `socials` | Contact links. Set `icon` to `github`, `linkedin`, `telegram`, `twitter`, `x`, `instagram`, `youtube`, `discord`, `email`, or `website` |

### 2. `src/data/projects.json`

Each project needs `id`, `title`, `description`, `preview`, and `links`.

- Put images or GIFs in `public/previews/` and set `"preview": "previews/your-file.png"`.
- Use `"preview": null` to keep the title-on-gradient fallback.

### Favicon

Replace `public/favicon.svg` with your own icon.

## Deploy

Asset paths are relative (`base: './'`), so you do not need to change `vite.config.js` for a subdirectory host.

**Vercel or Netlify:** import the repo.

**GitHub Pages:** run `npm run deploy`. The site will be at `username.github.io/repo-name/`.

## License

MIT. See [LICENSE](LICENSE).
