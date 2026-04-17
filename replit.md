# TATOA Clinic Treatment Landing Page

## Project Overview
A high-end medical/aesthetic clinic landing page for TATOA Clinic, built with TanStack Start (React 19 + SSR framework). Features sections for treatment overview, effects, advantages, pricing, gallery, FAQs, and CTAs.

## Tech Stack
- **Framework**: TanStack Start (SSR React framework)
- **Language**: TypeScript
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Build Tool**: Vite v7
- **Package Manager**: npm (Node.js 20)

## Architecture
- `src/routes/` - File-based routing (TanStack Router)
- `src/components/landing/` - Landing page section components
- `src/components/ui/` - Reusable shadcn/ui components
- `src/data/treatment.ts` - Static treatment data
- `src/assets/` - Image assets
- `src/hooks/` - Custom React hooks
- `src/styles.css` - Global CSS with Tailwind v4

## Development
- **Dev server**: Port 5000 (`npm run dev`)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Deployment
- Target: autoscale
- Build: `npm run build`
- Run: `npm run preview`

## Notes
- The lovable vite config (`@lovable.dev/vite-tanstack-config`) handles plugin setup
- Server config overrides port to 5000 and host to 0.0.0.0 for Replit compatibility
- Font imports in styles.css must be at the top (before other @imports)
- Hydration warnings in dev are caused by Replit's devtools script injection — this is harmless and auto-recovers
