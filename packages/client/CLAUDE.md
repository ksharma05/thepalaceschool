# The Palace School — Client

React/TypeScript frontend for The Palace School's public website + a small admin dashboard. Part of an npm-workspaces monorepo (`packages/client`, `packages/server`); this file covers the client only.

## Stack

- React 18 + TypeScript (strict), Vite 7
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`, `tailwind.config.js` maps semantic colors to CSS variables)
- React Router v6, GSAP (scroll animations), React Hook Form + Zod, Headless UI, Heroicons/lucide-react/react-icons, Cloudinary (media)

## Commands (run from `packages/client`)

```
npm run dev          # Vite dev server
npm run build         # tsc -b && vite build
npm run lint           # ESLint
npm run type-check    # tsc --noEmit, no output
npm run preview       # preview a production build
```

## Structure

```
src/
  components/       Reusable UI (Header, Footer, HeroSlider, StatsBar, ...)
    admin/          Admin-only components
  pages/            Route-level components, `*Page.tsx`
    admin/          Login + Dashboard (protected via ProtectedRoute)
    leadership/     Individual leadership-message sub-pages
  hooks/            Custom hooks (useGSAP)
  utils/            gsap.ts, auth.ts, theme.ts, colorPresets.ts, helpers.ts
  contexts/         ThemeContext (wraps utils/theme.ts)
  config/           api.ts (backend endpoints), cloudinary.ts, socialMedia.ts
  docs/             In-repo docs (theme colors, GSAP usage, migration guide — see caveats below)
```

Routing is centralized in `App.tsx` (`createBrowserRouter`). The client talks to `packages/server` via `VITE_API_URL` (falls back to the deployed Railway URL) — see `src/config/api.ts`.

## Theme / styling — read the skill first

This project has a **color-preset system**: 6 brand palettes (Palace Flag default, Royal Classic, Royal Purple, Ocean Blue, Forest Green, Sunset Orange) swapped at runtime via CSS variables, unrelated to light/dark mode. Light/dark mode exists in the code (`ThemeContext`, `ThemeToggle`) but is **hardcoded off** in `src/utils/theme.ts` — that's an intentional product decision, not a bug, so don't "fix" it as a drive-by.

Any component/page work should invoke the `theme-system` skill (`.claude/skills/theme-system/`) — it has the semantic class reference, the do/don't rules, and a current audit of files that still use hardcoded Tailwind colors instead of the semantic system. General coding conventions (naming, file layout, GSAP patterns, component structure) are in `.claude/rules/development-rules.md`.

Two things worth knowing up front so you don't get misled by in-repo docs:
- `src/docs/THEME_COLORS.md` documents gradient CSS classes (`bg-gradient-start/middle/end`, `cta-gradient-*`) that no longer exist in `index.css` — the CTA/stats palette was simplified to solid colors only. Trust `index.css` over that doc.
- `src/docs/COLOR_MIGRATION_GUIDE.md`'s "3 of 15+ migrated" status line is stale; actual semantic-class adoption is much wider but still incomplete (see the skill's audit list).
- `.cursor/rules/cursorrules.mdc` (Cursor's rules file) currently has its entire contents duplicated back-to-back — a pre-existing artifact, not something this session introduced. `.claude/rules/development-rules.md` is the deduplicated, corrected equivalent for Claude Code.

## Gotchas

- `ThemeToggle.tsx` renders a working-looking sun/moon button on the two admin pages, but clicking it does nothing (dark mode is force-disabled). Flag rather than silently fix if you're in that area.
- Header/Footer/HomePage are documented elsewhere as "fully migrated" to the semantic color system but still contain literal hardcoded classes on inspection (e.g. `bg-white` in `Header.tsx`) — don't take migration-status docs at face value; grep for palette-color classes before trusting a component.
