# Theme Color System Documentation

## Overview

The Palace School website uses a centralized theme color system built with CSS custom properties (CSS variables). This allows the entire website's color scheme to be updated from a single location, ensuring consistency and maintainability across all components.

## Architecture

### Color Variables Location

All color variables are defined in `/src/index.css`:
- **Root variables** (`:root`): Define light mode colors and base palette
- **Dark mode variables** (`.dark`): Override specific colors for dark mode

### Tailwind Integration

The Tailwind configuration (`tailwind.config.js`) maps utility classes to CSS variables, allowing you to use familiar Tailwind syntax while maintaining centralized control over colors.

## Color Categories

### 1. Primary Brand Colors (Indigo Scale)

Used for primary UI elements, buttons, and brand identity.

```css
--color-primary-50 through --color-primary-900
```

**Tailwind Usage:**
```jsx
<div className="bg-primary-600 text-white">Primary Button</div>
<div className="text-primary-700 border-primary-500">Primary Text</div>
```

**Available shades:** 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

---

### 2. Secondary Brand Colors (Purple Scale)

Used for secondary UI elements and accent features.

```css
--color-secondary-50 through --color-secondary-900
```

**Tailwind Usage:**
```jsx
<div className="bg-secondary-600">Secondary Element</div>
<div className="text-secondary-500">Secondary Text</div>
```

**Available shades:** 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

---

### 3. Accent Colors

Special colors for highlights and call-to-action elements.

```css
--color-accent-yellow-400
--color-accent-yellow-500
--color-accent-orange-400
--color-accent-orange-500
```

**Tailwind Usage:**
```jsx
<span className="text-accent-yellow-400">Highlighted Text</span>
<div className="bg-accent-orange-500">CTA Badge</div>
```

---

### 4. Background Colors (Theme-Aware)

Automatically adapt between light and dark modes.

```css
--color-bg-primary        /* Main background */
--color-bg-secondary      /* Alternate sections */
--color-bg-tertiary       /* Subtle backgrounds */
--color-bg-gradient-start /* Gradient start */
--color-bg-gradient-middle /* Gradient middle */
--color-bg-gradient-end   /* Gradient end */
```

**Tailwind Usage:**
```jsx
<div className="bg-bg-primary">Main Content Area</div>
<section className="bg-bg-secondary">Alternate Section</section>
```

---

### 5. Text Colors (Theme-Aware)

Text colors that automatically adapt to the current theme.

```css
--color-text-primary      /* Main text */
--color-text-secondary    /* Muted text */
--color-text-tertiary     /* Very muted text */
--color-text-inverse      /* Inverse (for dark backgrounds) */
```

**Tailwind Usage:**
```jsx
<h1 className="text-text-primary">Main Heading</h1>
<p className="text-text-secondary">Subheading or description</p>
<span className="text-text-tertiary">Caption or label</span>
```

---

### 6. Surface Colors (Theme-Aware)

For cards, panels, and elevated elements.

```css
--color-surface-primary   /* Cards, containers */
--color-surface-secondary /* Nested cards */
--color-surface-elevated  /* Modals, dropdowns */
```

**Tailwind Usage:**
```jsx
<div className="bg-surface-primary rounded-lg shadow-lg">Card Content</div>
<div className="bg-surface-elevated">Modal Dialog</div>
```

---

### 7. Border Colors (Theme-Aware)

```css
--color-border-primary    /* Standard borders */
--color-border-secondary  /* Subtle borders */
--color-border-focus      /* Focus states */
```

**Tailwind Usage:**
```jsx
<div className="border border-border-primary">Bordered Element</div>
<input className="focus:border-border-focus" />
```

---

### 8. Semantic Colors

For status indicators, alerts, and feedback.

```css
--color-success-500, --color-success-600
--color-warning-500, --color-warning-600
--color-error-500, --color-error-600
--color-info-500, --color-info-600
```

**Tailwind Usage:**
```jsx
<div className="bg-success-500 text-white">Success Message</div>
<div className="bg-error-500 text-white">Error Message</div>
<div className="bg-warning-500 text-white">Warning Message</div>
<div className="bg-info-500 text-white">Info Message</div>
```

---

### 9. Feature Colors

Predefined colors for feature cards, icons, and badges.

```css
--color-feature-blue
--color-feature-green
--color-feature-purple
--color-feature-orange
--color-feature-red
--color-feature-pink
```

**Tailwind Usage:**
```jsx
<div className="bg-feature-blue text-white">
  <Icon className="w-6 h-6" />
</div>
```

**Example:** Used in HomePage features section for icon backgrounds.

---

### 10. CTA (Call to Action) Colors

Specialized colors for call-to-action elements.

```css
--color-cta-gradient-start
--color-cta-gradient-end
--color-cta-hover
--color-cta-text
```

**Tailwind Usage:**
```jsx
<button className="bg-gradient-to-r from-cta-gradient-start to-cta-gradient-end text-cta-text hover:bg-cta-hover">
  Get Started
</button>
```

---

### 11. Stats Section Colors

Special colors for statistics displays.

```css
--color-stats-bg
--color-stats-text
--color-stats-accent
```

**Tailwind Usage:**
```jsx
<section className="bg-stats-bg">
  <div className="text-stats-text">2000+</div>
  <div className="text-stats-accent">Students</div>
</section>
```

---

## How to Update the Theme

### Changing Existing Colors

1. Open `/src/index.css`
2. Locate the color variable you want to change
3. Update the RGB values (space-separated, no commas)

**Example:** Change primary color from indigo to blue:
```css
:root {
  /* Old */
  --color-primary-600: 37 99 235;
  
  /* New */
  --color-primary-600: 59 130 246;
}
```

### Adding New Colors

1. **Add CSS Variable** in `/src/index.css`:
```css
:root {
  --color-custom-brand: 255 105 180;
}
```

2. **Register in Tailwind** in `tailwind.config.js`:
```javascript
extend: {
  colors: {
    custom: {
      brand: 'rgb(var(--color-custom-brand) / <alpha-value>)',
    },
  },
}
```

3. **Use in Components**:
```jsx
<div className="bg-custom-brand">My Custom Element</div>
```

---

## Best Practices

### 1. Use Semantic Names

✅ **Good:**
```jsx
<div className="bg-surface-primary text-text-primary">Content</div>
```

❌ **Avoid:**
```jsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">Content</div>
```

### 2. Leverage Theme-Aware Colors

Use `bg`, `text`, `surface`, and `border` color categories for automatic dark mode support:

```jsx
{/* Automatically adapts to dark mode */}
<div className="bg-bg-primary text-text-primary border-border-primary">
  Theme-aware element
</div>
```

### 3. Use Opacity Modifiers

Tailwind's opacity syntax works seamlessly with CSS variables:

```jsx
<div className="bg-primary-600/50">50% opacity background</div>
<div className="text-text-primary/75">75% opacity text</div>
```

### 4. Gradients

Use the gradient color variables for consistent brand gradients:

```jsx
<div className="bg-gradient-to-r from-bg-gradient-start via-bg-gradient-middle to-bg-gradient-end">
  Brand gradient background
</div>
```

---

## Direct CSS Variable Usage

For custom styles or CSS modules, you can reference variables directly:

```css
.custom-element {
  background-color: rgb(var(--color-primary-600));
  color: rgb(var(--color-text-inverse));
  border: 1px solid rgb(var(--color-border-primary));
}

/* With opacity */
.semi-transparent {
  background-color: rgb(var(--color-primary-600) / 0.5);
}
```

---

## Color Format

All CSS variables use **RGB values** (space-separated) to enable Tailwind's opacity modifier syntax:

```css
/* Correct Format */
--color-primary-600: 37 99 235;

/* Incorrect (don't use) */
--color-primary-600: rgb(37, 99, 235);
--color-primary-600: #2563eb;
```

This format allows:
```jsx
<div className="bg-primary-600/50">   {/* 50% opacity */}
<div className="bg-primary-600/75">   {/* 75% opacity */}
<div className="bg-primary-600">      {/* 100% opacity */}
```

---

## Migration Guide

### Converting Hardcoded Colors

**Before:**
```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

**After:**
```jsx
<div className="bg-bg-primary text-text-primary">
  Content
</div>
```

**Before:**
```jsx
<div className="bg-indigo-600 hover:bg-indigo-700">
  Button
</div>
```

**After:**
```jsx
<div className="bg-primary-600 hover:bg-primary-700">
  Button
</div>
```

---

## Examples from Codebase

### Hero Section Gradient (HomePage)

**Before:**
```jsx
className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900"
```

**Can become:**
```jsx
className="bg-gradient-to-br from-bg-gradient-start via-bg-gradient-middle to-bg-gradient-end"
```

### Feature Cards (HomePage)

The feature colors are already mapped:
```jsx
const features = [
  { color: 'bg-blue-500' },      // Can use: 'bg-feature-blue'
  { color: 'bg-green-500' },     // Can use: 'bg-feature-green'
  { color: 'bg-purple-500' },    // Can use: 'bg-feature-purple'
  { color: 'bg-orange-500' },    // Can use: 'bg-feature-orange'
  { color: 'bg-red-500' },       // Can use: 'bg-feature-red'
  { color: 'bg-pink-500' },      // Can use: 'bg-feature-pink'
];
```

---

## Troubleshooting

### Colors Not Updating

1. **Clear build cache**: Stop dev server and restart
2. **Check browser cache**: Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
3. **Verify format**: Ensure RGB values are space-separated (not comma-separated)

### Dark Mode Not Working

1. Verify the `dark` class is being applied to `<html>` or `<body>`
2. Check that color variables are overridden in `.dark` selector in `index.css`
3. Use theme-aware color categories (`bg`, `text`, `surface`, `border`)

### Opacity Modifiers Not Working

Ensure color values are in RGB format without `rgb()` wrapper:
```css
/* Correct */
--color-primary-600: 37 99 235;

/* Wrong */
--color-primary-600: rgb(37, 99, 235);
```

---

## Quick Reference

| Category | Prefix | Example |
|----------|--------|---------|
| Primary Colors | `primary-*` | `bg-primary-600` |
| Secondary Colors | `secondary-*` | `bg-secondary-500` |
| Accent Colors | `accent-*` | `text-accent-yellow-400` |
| Backgrounds | `bg-*` | `bg-bg-primary` |
| Text | `text-*` | `text-text-secondary` |
| Surfaces | `surface-*` | `bg-surface-primary` |
| Borders | `border-*` | `border-border-primary` |
| Semantic | `success/warning/error/info-*` | `bg-success-500` |
| Features | `feature-*` | `bg-feature-blue` |
| CTA | `cta-*` | `from-cta-gradient-start` |
| Stats | `stats-*` | `bg-stats-bg` |

---

## Color Preset System

### Overview

The website includes a color preset system that allows users to switch between 5 different color themes in real-time. All presets maintain the same semantic structure but with different color palettes.

### Available Presets

1. **Royal Classic** (Default)
   - Primary: Indigo
   - Secondary: Purple
   - Accents: Yellow/Orange
   - Best for: Traditional, elegant look

2. **Royal Purple**
   - Primary: Deep Purple
   - Secondary: Violet
   - Accents: Gold
   - Best for: Luxurious, regal feel

3. **Ocean Blue**
   - Primary: Sky Blue
   - Secondary: Teal
   - Accents: Cyan
   - Best for: Fresh, professional appearance

4. **Forest Green**
   - Primary: Emerald
   - Secondary: Green
   - Accents: Lime
   - Best for: Nature-inspired, growth-focused

5. **Sunset Orange**
   - Primary: Orange
   - Secondary: Amber
   - Accents: Red/Pink
   - Best for: Warm, energetic vibe

### Using the Preset Selector

Users can change the color preset using the `ColorPresetSelector` component in the header:
1. Click the palette icon in the header
2. Choose from 5 available presets
3. Selection is saved to localStorage and persists across sessions

### Programmatic Preset Management

```typescript
import { applyColorPreset, getCurrentPreset } from '../utils/colorPresets';

// Get current preset
const current = getCurrentPreset(); // 'default' | 'royal-purple' | ...

// Change preset
applyColorPreset('ocean-blue');

// Presets are automatically saved to localStorage
```

### Creating a New Preset

1. **Define colors** in `/src/utils/colorPresets.ts`:

```typescript
const myCustomTheme: ThemeColors = {
  'color-primary-50': '...',
  'color-primary-100': '...',
  // ... define all required colors
};
```

2. **Add to presets object:**

```typescript
export type ColorPreset = 'default' | 'my-custom' | ...;

export const colorPresets: Record<ColorPreset, ThemeColors> = {
  'default': defaultTheme,
  'my-custom': myCustomTheme,
  // ...
};
```

3. **Add metadata:**

```typescript
export const presetMetadata: Record<ColorPreset, {...}> = {
  'my-custom': {
    name: 'My Custom Theme',
    description: 'A unique color palette',
    preview: 'linear-gradient(135deg, rgb(...), rgb(...))',
  },
};
```

### How Presets Work

1. **Initial Load:** `initializeColorPreset()` in `main.tsx` applies the saved preset
2. **Runtime Updates:** Changing presets updates CSS variables via `applyColorPreset()`
3. **Persistence:** Current preset is saved to localStorage
4. **Compatibility:** All semantic color classes automatically use the active preset

### Benefits

- **User Choice:** Let users customize their experience
- **Branding:** Different presets for different seasons, events, or audiences
- **Testing:** Quickly preview alternative color schemes
- **Accessibility:** Users can choose colors that work best for them

---

## Resources

- [Tailwind CSS Color Configuration](https://tailwindcss.com/docs/customizing-colors)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Project Cursor Rules](/packages/client/cursorrules) - Color scheme standards
- [Color Migration Guide](/src/docs/COLOR_MIGRATION_GUIDE.md) - Migrating to semantic colors

---

**Last Updated:** November 2025  
**Maintained by:** The Palace School Development Team

