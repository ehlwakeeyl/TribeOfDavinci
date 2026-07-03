# Bilaad Realty — springs.estate-style rebuild

A high-fidelity, animation-driven marketing site for [Bilaad Realty](https://www.bilaadnigeria.com),
built to match the editorial feel of [springs.estate](https://springs.estate) — full-bleed
hero, scroll-reveal storytelling sections, alternating pillar rows, and a smooth
project-detail modal — while carrying Bilaad's own brand, content, imagery and CTAs.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens (colors, spacing rhythm, radii, easing curves,
  breakpoints) extracted from springs.estate's own stylesheet and remapped onto
  Bilaad's brand palette
- **Framer Motion** — scroll-reveal (`whileInView`) and mount animations
- **GSAP + ScrollTrigger** — the one scroll-scrubbed effect (hero background parallax)
- **shadcn/ui** pattern (`components/ui`) — `Button` (CVA) and `Dialog` (Radix) primitives
- **lucide-react** icons
- Self-hosted **Fraunces** (display serif) + **Manrope** (body sans) via `next/font/local`
  — no runtime dependency on Google Fonts

## Design tokens

Pulled directly from `springs.estate/assets/stylesheets/global.css`:

- Easing: `cubic-bezier(0.25,0.74,0.22,0.99)` (reveal-out), `cubic-bezier(0.645,0.045,0.355,1)` (smooth-in-out)
- Border radius steps: `3px / 10px / 20px / 30px`
- Fluid breakpoints: `568 / 668 / 980 / 1200 / 1440 / 1920px`

Color palette swapped for Bilaad's brand, sampled from the logo: gold `#bc9633` and
grey `#808080`, paired with a warm charcoal/cream duotone (the same light-bg +
dark-accent structure springs.estate uses with green/beige).

## Project structure

```
app/
  layout.tsx        Root layout, font loading, metadata
  page.tsx           Assembles all sections
  globals.css
  fonts/             Self-hosted Fraunces + Manrope woff2 files
components/
  layout/            Navbar, Footer, BackToTop, Loader
  sections/          Hero, Ticker, Mission, Advantage, Featured, StatsBand,
                      Projects, ProjectModal, Trust, CtaBanner, Contact
  ui/                 shadcn-style Button, Dialog primitives
  animations/         Reveal / RevealGroup / RevealItem (Framer Motion),
                      Counter (animated stats), HeroParallax (GSAP)
lib/
  projects.ts         Typed data for all 15 Bilaad developments
  utils.ts            cn() class helper
hooks/
  useScrolled.ts       Header scroll state
  useLockBody.ts       Body-scroll lock for mobile nav / modal
styles/
  animations.css       Continuous CSS-only loops (marquee, scroll cue, link
                        underline) — kept separate from Tailwind's config and
                        from Framer Motion's one-shot reveals; see the file's
                        header comment for the reasoning
public/
  images/              Real photos/renders sourced from bilaadnigeria.com
```

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## Notes / optimization recommendations

- Images are served from `public/images` via `next/image` (automatic responsive
  sizing, lazy loading below the fold). Several source renders are 1–2.5MB —
  consider re-exporting them as compressed AVIF/WebP at the CMS/source level for
  faster LCP.
- The hero image is `priority`-loaded; every other image lazy-loads by default.
- Fonts are self-hosted and subset to the Latin range to avoid a Google Fonts
  network dependency and layout shift.
- The contact form is front-end only (no backend wired up yet) — swap the
  `onSubmit` handler in `components/sections/Contact.tsx` for a real endpoint
  when one exists.
- `next/image` is configured with the default Next.js image optimizer; if this
  deploys somewhere without image optimization support (e.g. static export),
  set `images.unoptimized: true` in `next.config.mjs`.
