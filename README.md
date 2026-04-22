# Martin Shterjoski — Portfolio

Personal portfolio website built with Astro, Tailwind CSS, and TypeScript.

**Live:** [ibanezo.github.io/portfolio](https://ibanezo.github.io/portfolio)

## Tech Stack

- **Astro 6** — Static site generator, zero JS by default
- **Tailwind CSS v4** — Utility-first styling via Vite plugin
- **TypeScript** — Type-safe data layer
- **astro-icon** + **devicon** — Technology icons
- **GitHub Pages** — Hosting via GitHub Actions

## Features

- Dark/Light mode toggle with system preference detection
- Responsive design (mobile, tablet, desktop)
- DE/EN language toggle
- Scroll-triggered animations
- Blog with Astro Content Collections
- Interactive terminal component
- GitHub repos fetched at build time
- Auto-generated CV page (`/cv/`)
- SEO: sitemap, robots.txt, JSON-LD, Open Graph
- Optimized images (WebP via Astro Image)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
open http://localhost:4321/portfolio/
```

## Build & Preview

```bash
# Production build
npm run build

# Preview the build locally
npm run preview
```

## Project Structure

```
src/
  data/
    profile.ts          # All personal data (experience, skills, certs)
    translations.ts     # DE/EN translations
  components/           # Astro components (Hero, Experience, Skills, etc.)
  layouts/              # Base layout + blog post layout
  pages/
    index.astro         # Main portfolio page
    cv.astro            # Auto-generated CV page
    blog/               # Blog index + post pages
  content/
    blog/               # Markdown blog posts
  styles/
    global.css          # Tailwind config + animations
  assets/
    profile.jpg         # Profile photo (processed by Astro)
public/
  cv/                   # Downloadable CV (PDF)
  favicon.svg
  robots.txt
```

## How to Update Content

All personal data lives in **`src/data/profile.ts`**. Edit this single file to update:

- Name, title, company, location
- About text and quote
- Work experience (companies, roles, bullet points)
- Certifications
- Technical skills and proficiency levels
- Testimonials (currently hidden, uncomment in `index.astro` when ready)
- Contact info (email, phone)

Translations are in **`src/data/translations.ts`**.

Blog posts go in **`src/content/blog/`** as Markdown files.

## Deployment

Pushes to `main` trigger automatic deployment via GitHub Actions.

To deploy manually:

```bash
git add -A
git commit -m "update portfolio"
git push origin main
```

The site deploys to GitHub Pages at `https://ibanezo.github.io/portfolio/`.

## License

MIT
