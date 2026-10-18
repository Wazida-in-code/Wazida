# My Portfolio

My personal portfolio website — a responsive, single-page site where I introduce myself, show the skills I'm building, and share the projects I've worked on.

I built it with Next.js (App Router), React, TypeScript, and Tailwind CSS. There's no backend: the contact section just opens your mail app, and all the content on the site comes from a single data file.

## What's on the site

- A hero section with a short intro about me
- About, Education, and Skills sections
- Project cards with a detail page for each one at `/projects/[slug]` (BazarDor, Bangla News, Fitness Log)
- A contact section with email, phone, and WhatsApp links
- Dark theme, smooth scrolling, and a mobile hamburger menu

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router with Turbopack
- React 19 and TypeScript
- Tailwind CSS v4 (my custom colors live in the `@theme` block of `src/app/globals.css`)
- [React Icons](https://react-icons.github.io/react-icons/)

## Run it locally

You'll need [Node.js](https://nodejs.org/) 20.9 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

When I want to check everything is healthy, I run:

```bash
npm run lint        # ESLint
npx tsc --noEmit    # type check
npm run build       # production build
```

## Where things live

```
src/
├── app/
│   ├── layout.tsx          # root layout, fonts, page metadata
│   ├── page.tsx            # the one page — just composes my sections
│   ├── globals.css         # Tailwind import + my custom theme
│   └── projects/[slug]/    # project detail pages
├── components/             # Navbar, Hero, About, Education, Skills,
│                           # Projects, Contact, Footer
└── data/
    └── portfolio.ts        # all content lives here
```

## Editing content

Everything I change about the site — my bio, skills, projects, contact info — goes in [`src/data/portfolio.ts`](src/data/portfolio.ts). I never touch the components for content changes.

To add a project, I just append an entry to the `projects` array with a unique `slug`, and its detail page gets generated automatically. No new files needed.

## Before deploying

There's some placeholder content I still need to sort out:

- **Contact info** — double-check `contactInfo` and `socialLinks` in the data file. The contact form is `mailto:` only; it never sends anything to a server.
- **Profile photo** — swap `public/images/me-1.jpeg` for my real portrait, or update `personalInfo.profileImage`.
- **Project screenshots** — the cards use `public/images/*.png`. Replace them with real screenshots and keep the `image` paths in the data file in sync.
- **Resume** — drop my resume at `public/resume.pdf` and set `personalInfo.resumeUrl` to `"/resume.pdf"` to turn the download button on (it stays disabled while the value is `null`).
- **Draft descriptions** — project entries flagged with `detailsAreDraft: true` have placeholder feature/challenge text. I need to rewrite those in my own words before this goes live.

## Deploying

I deploy mine on Vercel — either by importing the repo at [vercel.com/new](https://vercel.com/new) or running:

```bash
npx vercel
```

Anywhere that can run a Node app works too:

```bash
npm run build
npm run start
```

## A note

This is Next.js 16, which has some breaking changes compared to older versions. Before writing code here, I check the guides in `node_modules/next/dist/docs/` and the conventions in [`AGENTS.md`](AGENTS.md).
