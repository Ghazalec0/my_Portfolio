# Abdulrahman Taha — Backend Developer Portfolio

[[version](https://img.shields.io/badge/version-1.0.0-blue)](./package.json) [[license](https://img.shields.io/badge/license-MIT-lightgrey)](./LICENSE) [[Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)

A modern, responsive backend developer portfolio built with Next.js, TypeScript and Tailwind CSS. Showcases production-grade backend projects, skills, and a contact channel — optimized for performance and clean presentation.

Live: **https://abdelrahman-dev.vercel.app**

Table of contents

- [What this project does](#what-this-project-does)
- [Why this project is useful](#why-this-project-is-useful)
- [Featured Projects](#featured-projects)
- [Quick start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run (development)](#run-development)
  - [Build and run (production)](#build-and-run-production)
  - [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Developer notes & conventions](#developer-notes--conventions)
- [How to contribute](#how-to-contribute)
- [Where to get help](#where-to-get-help)
- [Maintainers & authors](#maintainers--authors)
- [License](#license)

## What this project does

This repository contains a personal portfolio website for a **Backend Developer** designed to:

- Present production backend projects with live API docs and GitHub repos.
- Show backend technology stack: Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, Prisma, Redis, Docker, etc.
- Provide a contact form to receive messages from recruiters and clients.
- Demonstrate modern frontend patterns (Next.js 15 App Router + React + Tailwind) while focusing on backend expertise.

## Why this project is useful

Key features and benefits:

- Minimal, responsive UI tailored for backend portfolio content with animations (framer-motion, Aurora background, Tilt cards).
- Componentized React + TypeScript codebase (easy to extend).
- Integrates a contact form (EmailJS).
- Showcases real-world backend systems: E-commerce API (53+ endpoints), Social App (Realtime with Socket.io & GraphQL), ShelfLoop (Digital Library with NestJS & Prisma).
- Built with a modern toolchain — easy to deploy to Vercel.
- Good starting point for other backend developers to fork and personalize.

## Featured Projects

1. **E-Commerce API** — `https://github.com/team-5-backend/e-commerce-api` — Docs: `https://e-commerce-api-blond-eta.vercel.app/api/v1/docs` — Stack: Node.js, Express.js, MongoDB, Mongoose, Redis, Cloudinary, Stripe/PayPal/Paymob, Docker
2. **Social App** — `https://github.com/Ghazalec0/Social-app` — Docs: `https://social-app-kohl-six.vercel.app/docs` — Stack: TypeScript, Express.js, Socket.io, WebSockets, MongoDB, Redis, AWS S3, Firebase, GraphQL, Docker
3. **ShelfLoop** — `https://github.com/Ghazalec0/shelfloop-project` — Live: `https://shelfloop-frontend.vercel.app/` — Stack: NestJS, TypeScript, Prisma, PostgreSQL, Neon, JWT, RBAC, Cloudinary, Paymob, Redis, Docker

## Quick start

Prerequisites

- Node.js 18+ (Next.js 15 requires Node 18.17+)
- npm — this project uses `npm` scripts out-of-the-box

Install

```bash
# clone the repo and install
git clone https://github.com/Ghazalec0/portfolio.git
cd portfolio
npm install
```

Run (development)

```bash
# run the development server
npm run dev
# open http://localhost:3000
```

Build and run (production)

```bash
# build
npm run build

# start production server
npm run start
```

Environment variables

- The project uses client-side EmailJS for the contact form (see dependencies in `package.json`).
- Recommended env variables (create `.env.local` at project root):

```env
# Example environment variables (do NOT commit .env.local)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:

- Prefix public client keys with `NEXT_PUBLIC_` so they are available to browser code.
- Do not store private secrets in client-side env variables.

## Project structure

Top-level layout (key files and folders):

- `package.json` — scripts and dependencies
- `next.config.ts` — Next.js configuration
- `src/` — application source
  - `src/app/` — Next.js app routes and global layout (Home, About, Projects, Contact)
  - `src/components/` — UI components and sections
    - `src/components/sections/` — Page sections (Home, Projects, About, Contact, Footer, ...)
    - `src/components/ui/` — Reusable UI elements (Nav, DarkModeBtn, Form, ProjectCard, MagneticButton, SpotlightCard, TiltCard, ScrollProgress, AuroraBackground, ...)
  - `src/data/` — project / content data used by components (projectData.json)
  - `src/utils/` — utility helpers
- `public/` — static assets (icons, images, favicons, CV PDFs)
- `.github/` — GitHub config, workflows (if present)

You can open and inspect components in `src/components` to see how sections are composed and how the contact form is wired to EmailJS.

## Developer notes & conventions

- TypeScript is enabled — prefer typed components and props.
- Tailwind CSS is used for styling — utility-first classes.
- Next.js 15 App Router is used. Before changing app-level code, see:
  - `AGENTS.md` (contains project-specific guidance): [AGENTS.md](./AGENTS.md)
- Keep components small and focused. Create presentational components in `src/components/ui/` and page/section composition in `src/components/sections/`.

Common tasks

- Linting: `npm run lint` (config uses `eslint`)
- Add a new project card:
  - Add project metadata into `src/data/projectData.json` (or the existing data file)
  - Add a thumbnail to `public/` and reference it from the data entry
  - Ensure `ProjectCard` receives the new fields and renders them

## How to contribute

Contributions are welcome. For small fixes or improvements:

1. Fork the repository
2. Create a branch: `git checkout -b feature/short-description`
3. Make changes and add tests where appropriate
4. Commit and push your branch
5. Open a pull request describing the change

If you plan larger changes, open an issue first to discuss the design and scope.

## Where to get help

- Open an issue in this repository for bugs or feature requests.
- For quick questions, contact the project maintainer (details below).

## Maintainers & authors

- **Maintainer: Abdulrahman Taha Abu Ghazala — Backend Developer**
  - GitHub: [Ghazalec0](https://github.com/Ghazalec0)
  - Email: dev.ghazaleco@gmail.com
  - LinkedIn: https://www.linkedin.com/in/abdulrahman-taha-abu-ghazala-22a667430
  - Portfolio: https://abdelrahman-dev.vercel.app
  - Location: Al-Wasta, Beni Suef, Egypt — Open to remote worldwide & on-site Cairo/Giza

## License

This project is distributed under the MIT License. See the `LICENSE` file for details.

Additional resources and links

- Project source: `src/`
- Component examples: `src/components/`
- Live Portfolio: https://abdelrahman-dev.vercel.app
- CV (1 Page): Available in `public/` as PDF
- Next.js / Tailwind setup reference: inspect `postcss.config.mjs`, `tailwind.config.*` (if present) and `next.config.ts`.

## Final notes

This README is tailored for a **Backend Developer** portfolio. It focuses on getting developers up and running quickly and highlights production backend systems. For full documentation (API-level docs, deployment nuances, troubleshooting), maintain a `docs/` folder or GitHub Wiki and link it from this README.
