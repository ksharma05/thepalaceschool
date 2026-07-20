# The Palace School Client — Development Rules

Adapted from `.cursor/rules/cursorrules.mdc` (deduplicated — that file currently repeats its entire contents twice) and corrected against the actual theme system in `src/index.css` / `src/utils/colorPresets.ts`. For anything color/theme-related, defer to the `theme-system` skill — it is more detailed and current.

## TypeScript & React Conventions

- TypeScript strict mode; type all props, state, and function parameters
- Functional components only, typed as `React.FC<Props>`
- Prefer `interface` over `type` for props and object shapes
- Named exports for utilities/helpers, default exports for components
- Type refs explicitly: `useRef<HTMLDivElement>(null)`
- No `any` — use `unknown` or a proper type; use type assertions sparingly

## Naming Patterns

- **Components**: PascalCase (`Header.tsx`, `AdminLayout.tsx`)
- **Pages**: PascalCase with `Page` suffix, in `pages/` (`AboutPage.tsx`)
- **Hooks**: camelCase starting with `use` (`useGSAP.ts`)
- **Utilities/config**: camelCase files (`theme.ts`, `auth.ts`, `api.ts`)
- **Interfaces/Types**: PascalCase, descriptive (`ThemeContextType`)
- **Constants**: `UPPER_SNAKE_CASE` at module level, camelCase for locals
- **Variables/functions**: camelCase

## Component Structure

Import order (strict):
1. React (`React`, hooks)
2. Third-party libraries (`react-router-dom`, `@heroicons/react`, etc.)
3. Internal: components → hooks (`hooks/`) → utils (`utils/`) → contexts (`contexts/`) → types

```typescript
interface ComponentProps {
  // props
}

const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // hooks, state, effects, helpers
  return (/* JSX */);
};

export default ComponentName;
```

- Extract reusable logic into custom hooks
- Keep components single-responsibility; ~300 lines is the point to consider splitting

## Hooks Usage

- `useEffect` for GSAP animations, API calls, subscriptions, side effects — always with a dependency array and a cleanup function where applicable
- Prefer custom hooks (`useGSAP`, `useTheme`) over inline duplicated logic
- `useRef` for DOM refs and non-render-triggering mutable values
- Context API (not prop drilling) for theme and other global state

## GSAP Patterns

- Use `GSAPScrollUtils` static methods for scroll-triggered animations
- Initialize smooth scroll only in `Layout`
- Kill/clean up `ScrollTrigger` instances in `useEffect` cleanup
- Attach animations via refs: `const elementRef = useRef<HTMLDivElement>(null)`
- Prefer scroll triggers over on-mount animations for page content
- Easing: `power2.out` / `power2.inOut` / `power3.out`; durations 0.8s–2s for an elegant, unhurried feel
- Scroll trigger start point: typically `top 85%`
- Stagger grid/list animations for sequential reveals
- Respect `prefers-reduced-motion`

## File Organization

```
src/
  components/         Reusable UI components
    admin/            Admin-specific components
  pages/              Route-level components
    admin/            Admin pages
    leadership/        Leadership sub-pages
  hooks/              Custom hooks (use[Name].ts)
  utils/              Utility functions
  contexts/           React contexts
  config/             Configuration (api.ts, cloudinary.ts, socialMedia.ts)
  docs/               In-repo documentation
```

## Standard Look & Feel

- **Spacing**: `py-20` section padding, `mb-16` title margins, `gap-8` grid gaps, `p-8` card padding
- **Color**: semantic classes only (`bg-bg-primary`, `text-text-primary`, `bg-primary-600`, …) — see the `theme-system` skill. Never hardcode Tailwind palette colors, never add new `dark:` variants (dark mode is intentionally disabled — see the skill for why).
- **Typography**: h1 `text-4xl md:text-6xl lg:text-7xl`, h2 `text-3xl md:text-4xl`, large body `text-xl md:text-2xl`, readable body via `text-text-secondary`. Headings `font-bold`/`font-semibold`, labels `font-medium`. Font family is Jost (set globally in `index.css` — don't override per-component).
- **Borders**: cards `rounded-xl`, buttons `rounded-lg`, `border` (1px) for subtlety
- **Shadows**: cards `shadow-lg` → `shadow-xl` on hover; buttons `shadow-lg hover:shadow-xl`
- **Transitions**: `duration-300` standard, `duration-500` for hover effects, GSAP animations 0.8s–2s

## Component Reusability

- Extract repeated card/button/section patterns into shared components
- Composition over configuration
- Share TypeScript interfaces for data structures reused across components
- Context API over prop drilling; keep props minimal and focused

## Code Quality Standards

- Follow the ESLint config as-is (`npm run lint` from `packages/client`)
- Meaningful names; comment only non-obvious logic (complex GSAP setups, workarounds)
- Mobile-first responsive design
- Verify GSAP animations across breakpoints
- Semantic HTML; proper ARIA labels and keyboard navigation
- Optimize images/assets before adding to `src/assets`

## Git & Version Control

- Conventional Commits: `<type>[optional scope]: <description>` (`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`)
- Atomic, focused commits with messages that explain *why*, not just *what*
- Reference issues/tasks where applicable

## Testing & Quality Assurance

- Test new features thoroughly before committing; re-verify existing functionality isn't broken
- Check responsive design at each breakpoint
- Validate GSAP animations trigger correctly
- Test forms (validation + error states) and API integrations
- For anything touching styling: check under at least 2 color presets (see `theme-system` skill checklist)
