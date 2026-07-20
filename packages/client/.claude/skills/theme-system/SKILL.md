---
name: theme-system
description: Use whenever writing or editing UI in packages/client — any new component, page, or style change. Governs The Palace School's color-preset theme system (semantic Tailwind classes backed by CSS variables) so components render correctly across all 6 brand presets. Also covers the disabled dark-mode system and what NOT to do with it. Triggers on words like "theme", "color", "dark mode", "preset", "style", "Tailwind class", or when touching className props.
---

# Palace School Theme System

This package has **two separate theming mechanisms**. Confusing them is the most common mistake — read this before touching any `className`.

## 1. Color-preset system (the one that matters)

The live one. 6 brand presets (Palace Flag, Royal Classic, Royal Purple, Ocean Blue, Forest Green, Sunset Orange) swap CSS custom properties at runtime via `applyColorPreset()` in [`src/utils/colorPresets.ts`](../../../src/utils/colorPresets.ts). Base variables live in [`src/index.css`](../../../src/index.css) (`@theme` block + `:root`). Tailwind config ([`tailwind.config.js`](../../../tailwind.config.js)) maps semantic utility classes to those variables.

**Rule: never hardcode a Tailwind palette color (`bg-white`, `text-gray-900`, `bg-indigo-600`, `border-purple-400`, etc.) in `packages/client/src`.** Hardcoded colors don't move when the user switches presets — that's the whole bug class this system exists to prevent.

Use the semantic classes instead:

| Need | Use | Notes |
|---|---|---|
| Page/section background | `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-tertiary` | tertiary = accent sections |
| Body/heading text | `text-text-primary`, `text-text-secondary`, `text-text-tertiary` | primary = headings, secondary = body |
| Text on a dark/colored surface | `text-text-inverse` | |
| Cards / panels | `bg-surface-primary`, `bg-surface-secondary`, `bg-surface-elevated` | elevated = modals/dropdowns |
| Borders | `border-border-primary`, `border-border-secondary`, `focus:border-border-focus` | |
| Brand color, 50–900 shades | `bg-primary-600`, `text-primary-700`, etc. | full 9-shade scale, changes per preset |
| Secondary brand color | `bg-secondary-600`, `text-secondary-500`, etc. | |
| Feature card icons | `bg-feature-blue/green/purple/orange/red/pink` | fixed per-preset mapping, not literal colors |
| Status/alerts | `bg-success-600`, `bg-warning-600`, `bg-error-600`, `bg-info-600` | not preset-driven, stays consistent |
| CTA buttons | `bg-cta-bg`, `hover:bg-cta-hover`, `text-cta-text` | **solid only** — see gotcha below |
| Stats section | `bg-stats-bg`, `text-stats-text`, `text-stats-accent` | |
| Opacity | `bg-primary-600/50`, `text-text-primary/75` | works because CSS vars are stored as space-separated RGB |

Full reference with more examples: [`src/docs/THEME_COLORS.md`](../../../src/docs/THEME_COLORS.md) and migration patterns in [`src/docs/COLOR_MIGRATION_GUIDE.md`](../../../src/docs/COLOR_MIGRATION_GUIDE.md) — but see the doc-drift warning below before trusting either literally.

### Doc drift you'll hit

- `THEME_COLORS.md` documents `bg-gradient-start/middle/end` and `cta-gradient-start/end` classes. **These don't exist in the current `index.css`** — the CTA/stats system was deliberately simplified to solid colors only (see the `/* solid colors only, no gradients */` comments in `index.css`). Don't reintroduce gradient CTA classes; if you need a gradient, use `bg-primary-600` → `bg-primary-800` style transitions built from the shade scale instead, and only where a gradient is clearly wanted (e.g. a hero background), not for buttons.
- `COLOR_MIGRATION_GUIDE.md`'s migration-status list is stale (says "3 of 15+ components migrated" — actual adoption is far wider now, but incomplete). Don't trust it for current status; the punch list below is current as of this audit.

### Adding a new preset

1. Add a `ThemeColors` object in `src/utils/colorPresets.ts` (copy an existing theme, replace every hex value).
2. Register it in the `colorPresets` record and add its `ColorPreset` union member.
3. Add an entry to `presetMetadata` (name/description/preview swatch) — this drives the `ColorPresetSelector` dropdown UI.
4. Do **not** touch `index.css`'s `:root`/`.dark` blocks for this — those are the fallback/initial values, not per-preset.

## 2. Light/dark mode — disabled by design, do not "fix"

`src/utils/theme.ts`'s `ThemeManager.getPreferredTheme()` is hardcoded to always return `'light'`, and `toggleTheme()` is a no-op that just re-applies light. This is intentional — the comment in that file says dark mode is off "for professional, consistent appearance." **Do not re-enable it** unless a human explicitly asks for that as its own task; it's a product decision, not a bug.

Practical consequences:
- Don't add new `dark:` Tailwind variants — they will never activate on the public site. The semantic classes above already encode both light values (via `:root`) and unused dark values (via `.dark`, dead in practice) — that's fine, leave the `.dark` block in `index.css` alone, just don't grow it.
- `ThemeToggle.tsx` is only rendered on `/admin/login` and the admin dashboard. It renders a functioning-looking sun/moon button that does nothing when clicked (always re-applies light). If you're touching either admin page, flag this to a human rather than silently removing or silently "fixing" it — it's a small UX papercut, not something to fix as a drive-by.

## Checklist before shipping a new/edited component

- [ ] No literal Tailwind palette color classes (`grep -nE "bg-(white|gray|indigo|purple|blue|red|green)-[0-9]"` over the file should return nothing)
- [ ] No new `dark:` variants added
- [ ] Backgrounds/text/borders use the `bg-*` / `text-*` / `border-*` semantic families above
- [ ] Feature icons use `bg-feature-*`, not literal Tailwind colors
- [ ] CTA buttons use `bg-cta-bg` / `hover:bg-cta-hover` (solid), not a gradient
- [ ] Manually check the component renders sanely under at least 2 presets (Palace Flag default + one other, e.g. Ocean Blue) via the palette-icon selector in the header — presets change contrast/hue enough that a literal `text-white` on a card can go invisible

## Known non-compliant files (audit as of 2026-07-20)

These still contain hardcoded Tailwind palette colors and/or dead `dark:` variants. Not yet remediated — treat as a backlog, not something to silently fix while doing unrelated work in these files. If asked to migrate one, use the mapping tables in `COLOR_MIGRATION_GUIDE.md` (ignore its gradient-class suggestions per the doc-drift note above).

High traffic (fix first if asked to prioritize):
- `src/components/Header.tsx` — `bg-white` on the header shell itself, despite being marked "fully migrated" in the old docs
- `src/components/Footer.tsx`
- `src/pages/HomePage.tsx`
- `src/components/BeyondAcademics.tsx`
- `src/components/StatsBar.tsx`

Content pages:
- `src/pages/AboutPage.tsx`
- `src/pages/WhyChooseUsPage.tsx`
- `src/pages/GalleryPage.tsx`
- `src/pages/AdmissionEnquiryPage.tsx`
- `src/pages/LeadershipPage.tsx` — the data-array hardcoding was fixed 2026-07-20 (now sources from `leadershipProfiles`), but its own JSX still has a few stray hardcoded classes (`bg-white`/`border-white` in the CTA section, dead `dark:prose-invert`)

~~`src/pages/leadership/{Founder,HHMaharajaLakshrajPrakash,PrincessGaurav,RajmataSahib,ViceChairperson}Page.tsx`~~ — resolved 2026-07-20. These 5 files were collapsed into one template (`src/components/leadership/LeadershipDetailTemplate.tsx`) fed by `src/utils/leadershipProfiles.tsx`; the template uses correct semantic tokens throughout and the 5 page files are now ~6-line wrappers with no color classes at all. Use this pair as the reference example for "one template + shared data" when tackling similar duplication elsewhere (e.g. if the leadership sub-pages ever add more content types).

Admin (also has the dead `ThemeToggle` issue above):
- `src/pages/admin/DashboardPage.tsx`
- `src/pages/admin/LoginPage.tsx`

Misc:
- `src/components/HeroSlider.tsx`
- `src/components/InteractivePointCard.tsx`
- `src/config/socialMedia.ts` (color values used for badge styling)
