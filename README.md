# thefountain.ai

Fountain is an ambient AI device system — a wearable Pin and a desktop Stand that project context-aware information into the world around you.

This repo is the marketing / thesis site. Static, built with Astro.

## Local development

```sh
cd ~/Desktop/dev/thefountain.ai
npm install        # first time only
npm run dev        # http://localhost:4321
```

`npm run build` outputs static HTML to `./dist`. `npm run preview` serves the built output locally.

## Project structure

```
src/
  assets/slides/    Source JPGs for the 5 scene cards (Astro optimizes at build)
  components/       One file per section: Hero, Thesis, Scene, System, Beauty, Specs, Status, SignupForm, SectionNav
  layouts/          Page.astro — HTML shell + fonts + meta
  lib/              scenes.ts (scene data) and sections.ts (nav data)
  pages/            index.astro — composes the 11-section card-stack
  styles/           global.css (Tailwind import, theme tokens, card-stack mechanics)
public/             Static assets served as-is (favicon)
.github/workflows/  GitHub Actions: deploy on push to main
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. Pages source must be set to **GitHub Actions** in repo Settings → Pages (not "Deploy from a branch").

## Configuration

- **Hero iframe** — `src/components/Hero.astro` accepts an optional `iframeUrl` prop. When unset, a dashed-border placeholder renders. Pass the URL through `index.astro` (`<Hero iframeUrl="https://my.spline.design/..." />`) when ready.
- **Email signup** — `src/components/SignupForm.astro` posts to Formspree if `action` is set, otherwise falls back to a `mailto:j@mcginn.co`. Replace `REPLACE_WITH_YOUR_FORM_ID` in the form's `action` attribute with a real Formspree ID once configured (https://formspree.io).
- **Pin / Stand renders** — currently dashed-border placeholders in `src/components/System.astro`. Drop in real product renders when available.
