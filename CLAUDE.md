# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LEFTAP 2.0 is a marketing/informational website for a financial education and personal development organization. Built with Next.js 14 (App Router), JavaScript (no TypeScript), TailwindCSS, and shadcn/ui components.

## Commands

```bash
bun dev          # Dev server on localhost:3000
bun run build    # Production build
bun start        # Production server
bun run lint     # ESLint (next/core-web-vitals)
```

Package manager is **Bun** (bun.lockb). npm scripts also work.

## Architecture

- **Routing:** Next.js App Router under `app/`. All page components use `"use client"`.
  - `/` — Homepage (carousel + service cards)
  - `/Servicios` — Services listing
  - `/Nosotros` — About (Mission, Vision, Values)
  - `/DesarrolloPersonal` — Training program page
  - `/Contacto` — Contact form with email sending
  - `/api/SendMailContacto` — POST endpoint (Nodemailer via SMTP)

- **Layout:** `app/layout.js` wraps all pages with `MenuPrincipal` (sticky nav) and `Footer`. Inter font via Google Fonts.

- **UI Components:** `components/ui/` contains shadcn/ui primitives (button, card, input, label, textarea). Configured via `components.json` with slate base color and CSS variables.

- **Utilities:** `lib/utils.js` exports `cn()` (clsx + tailwind-merge) for class merging.

- **Shared page components:** `app/MenuPrincipal.js`, `app/Footer.js`, `app/ItemMenu.js`, `app/TitleSection.js` live alongside the layout.

- **Static assets:** `public/` organized by category (Logos, Banners, Slider, CardsImages, etc.).

## Styling

TailwindCSS with custom colors defined in `tailwind.config.js`:
- `Secundario` (#FFF), `Tercieario` (#01692a — dark green), `Cuarto` (#0001b6 — blue)
- CSS variables for shadcn/ui theming in `globals.css`
- Framer Motion for scroll-triggered and staggered animations
- Class-based dark mode enabled

## Path Aliases

`@/*` maps to the project root (configured in `jsconfig.json`). Example: `import { Button } from "@/components/ui/button"`.

## Key Patterns

- All pages are client components (`"use client"`) with Framer Motion animations.
- No global state management — local `useState` only.
- Contact form posts to `/api/SendMailContacto` which sends email via Nodemailer (SMTP credentials are currently hardcoded in the route handler).
- Navigation uses `usePathname()` from `next/navigation` for active route highlighting.
- Menu has responsive behavior with mobile hamburger toggle and scroll-based background changes.
