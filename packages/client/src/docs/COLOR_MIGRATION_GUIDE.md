# Color Migration Guide

## Overview

This guide helps you migrate components from hardcoded Tailwind colors to the centralized semantic color system. The migration improves maintainability and enables dynamic theme switching.

## Migration Status

### ✅ Migrated Components

- ✅ **Header** - Fully migrated with Color Preset Selector integrated
- ✅ **Footer** - All colors converted to semantic classes
- ✅ **HomePage** - Complete migration including hero, features, stats, and CTA sections
- ✅ **main.tsx** - Color preset initialization added

### 🔄 Pending Migration

The following components still use hardcoded colors:

- AboutPage.tsx
- ContactPage.tsx
- HistoryPage.tsx
- LeadershipPage.tsx
- SocialMediaPage.tsx
- ThemeToggle.tsx
- Admin pages (LoginPage.tsx, DashboardPage.tsx)
- Leadership pages (HHMessagePage.tsx, HHMaharajaLakshrajPrakashPage.tsx, RajmataSahibPage.tsx, PrincessGauravPage.tsx)

## Quick Reference: Hardcoded to Semantic Mapping

### Background Colors

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `bg-white dark:bg-gray-900` | `bg-bg-primary` | Main backgrounds |
| `bg-gray-50 dark:bg-gray-800` | `bg-bg-secondary` | Alternate sections |
| `bg-gray-100 dark:bg-gray-700` | `bg-bg-tertiary` | Subtle backgrounds |
| `bg-gray-900 dark:bg-black` | `bg-bg-tertiary` | Footer/dark sections |

### Text Colors

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `text-gray-900 dark:text-white` | `text-text-primary` | Main text |
| `text-gray-600 dark:text-gray-300` | `text-text-secondary` | Body text |
| `text-gray-400 dark:text-gray-500` | `text-text-tertiary` | Muted text |
| `text-white` (on dark bg) | `text-text-inverse` | White text |

### Border Colors

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `border-gray-200 dark:border-gray-700` | `border-border-primary` | Standard borders |
| `border-gray-100 dark:border-gray-800` | `border-border-secondary` | Subtle borders |
| `focus:border-indigo-500` | `focus:border-border-focus` | Focus states |

### Surface Colors (Cards, Panels)

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `bg-white dark:bg-gray-800` | `bg-surface-primary` | Cards, containers |
| `bg-gray-50 dark:bg-gray-700` | `bg-surface-secondary` | Nested elements |
| `bg-white dark:bg-gray-900` | `bg-surface-elevated` | Modals, dropdowns |

### Brand/Primary Colors

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `bg-indigo-600` | `bg-primary-600` | Primary buttons, accents |
| `hover:bg-indigo-700` | `hover:bg-primary-700` | Button hover states |
| `text-indigo-600 dark:text-indigo-400` | `text-primary-600` | Links, highlights |
| `bg-purple-600` | `bg-secondary-600` | Secondary elements |

### Feature/Icon Colors

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `bg-blue-500` | `bg-feature-blue` | Feature card icons |
| `bg-green-500` | `bg-feature-green` | Feature card icons |
| `bg-purple-500` | `bg-feature-purple` | Feature card icons |
| `bg-orange-500` | `bg-feature-orange` | Feature card icons |
| `bg-red-500` | `bg-feature-red` | Feature card icons |
| `bg-pink-500` | `bg-feature-pink` | Feature card icons |

### Gradient Backgrounds

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `from-indigo-900 via-purple-900 to-indigo-900` | `from-bg-gradient-start via-bg-gradient-middle to-bg-gradient-end` | Hero backgrounds |
| `from-indigo-600 to-purple-600` | `from-cta-gradient-start to-cta-gradient-end` | CTA buttons |
| `bg-indigo-600 dark:bg-indigo-700` | `bg-stats-bg` | Stats section |

### Accent Colors

| Hardcoded | Semantic | Usage |
|-----------|----------|-------|
| `from-yellow-400 to-orange-500` | `from-accent-yellow-400 to-accent-orange-500` | Brand highlights |

## Step-by-Step Migration Process

### Step 1: Identify Hardcoded Colors

Search for these patterns in your component:
- `bg-white`, `bg-gray-*`
- `text-gray-*`, `text-black`, `text-white`
- `border-gray-*`
- `bg-indigo-*`, `text-indigo-*`
- `bg-purple-*`, `text-purple-*`

### Step 2: Replace with Semantic Classes

Use the mapping table above to replace hardcoded colors.

**Before:**
```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
  <h2 className="text-gray-900 dark:text-white">Title</h2>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white">
    Click Me
  </button>
</div>
```

**After:**
```jsx
<div className="bg-bg-primary text-text-primary border border-border-primary">
  <h2 className="text-text-primary">Title</h2>
  <p className="text-text-secondary">Description</p>
  <button className="bg-primary-600 hover:bg-primary-700 text-white">
    Click Me
  </button>
</div>
```

### Step 3: Test Light and Dark Modes

After migration, test both light and dark themes:
1. Toggle between themes using the ThemeToggle component
2. Verify all colors adapt correctly
3. Check contrast and readability

### Step 4: Test Color Presets

Use the ColorPresetSelector to test different color themes:
1. Open the Color Preset Selector (palette icon in header)
2. Try each preset
3. Verify component looks good in all presets

## Common Migration Patterns

### Pattern 1: Hero Section

**Before:**
```jsx
<section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
    Welcome
  </h1>
  <button className="bg-indigo-600 hover:bg-indigo-700">
    Get Started
  </button>
</section>
```

**After:**
```jsx
<section className="bg-gradient-to-br from-bg-gradient-start via-bg-gradient-middle to-bg-gradient-end text-white">
  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow-400 to-accent-orange-500">
    Welcome
  </h1>
  <button className="bg-primary-600 hover:bg-primary-700">
    Get Started
  </button>
</section>
```

### Pattern 2: Card Grid

**Before:**
```jsx
<div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
  <h3 className="text-gray-900 dark:text-white">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-300">Card description</p>
  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
    Read More →
  </a>
</div>
```

**After:**
```jsx
<div className="bg-surface-primary p-6 rounded-lg border border-border-primary">
  <h3 className="text-text-primary">Card Title</h3>
  <p className="text-text-secondary">Card description</p>
  <a href="#" className="text-primary-600 hover:text-primary-700">
    Read More →
  </a>
</div>
```

### Pattern 3: Navigation Links

**Before:**
```jsx
<Link
  to="/about"
  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
>
  About
</Link>
```

**After:**
```jsx
<Link
  to="/about"
  className="text-text-primary hover:text-primary-600"
>
  About
</Link>
```

### Pattern 4: Feature Cards with Icons

**Before:**
```jsx
{
  icon: BookIcon,
  title: 'Learning',
  color: 'bg-blue-500'  // Hardcoded
}

<div className={`${feature.color} w-16 h-16 rounded-lg`}>
  <Icon className="w-8 h-8 text-white" />
</div>
```

**After:**
```jsx
{
  icon: BookIcon,
  title: 'Learning',
  color: 'bg-feature-blue'  // Semantic
}

<div className={`${feature.color} w-16 h-16 rounded-lg`}>
  <Icon className="w-8 h-8 text-white" />
</div>
```

### Pattern 5: Forms and Inputs

**Before:**
```jsx
<input
  type="text"
  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-indigo-500"
  placeholder="Enter text"
/>
```

**After:**
```jsx
<input
  type="text"
  className="bg-bg-primary border border-border-primary text-text-primary focus:border-border-focus"
  placeholder="Enter text"
/>
```

### Pattern 6: Footer

**Before:**
```jsx
<footer className="bg-gray-900 dark:bg-black text-white">
  <div className="border-t border-gray-800">
    <p className="text-gray-400">© 2024 Company</p>
    <a href="#" className="text-gray-400 hover:text-indigo-400">Privacy</a>
  </div>
</footer>
```

**After:**
```jsx
<footer className="bg-bg-tertiary text-text-inverse">
  <div className="border-t border-border-secondary">
    <p className="text-text-tertiary">© 2024 Company</p>
    <a href="#" className="text-text-tertiary hover:text-primary-400">Privacy</a>
  </div>
</footer>
```

## Benefits After Migration

### 1. **Single Source of Truth**
Change the entire website's color scheme by editing CSS variables in `index.css`

### 2. **Dynamic Theming**
Users can switch between 5 color presets in real-time

### 3. **Cleaner Code**
```jsx
// Before: 10+ classes for dark mode
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"

// After: Clean and semantic
className="bg-bg-primary text-text-primary border-border-primary"
```

### 4. **Automatic Dark Mode**
Theme-aware colors automatically adapt without `dark:` prefixes

### 5. **Better Maintainability**
One place to update colors instead of searching through all components

## Testing Checklist

After migrating a component, verify:

- [ ] Component renders correctly in light mode
- [ ] Component renders correctly in dark mode
- [ ] Component works with all 5 color presets:
  - [ ] Royal Classic (default indigo/purple)
  - [ ] Royal Purple (deep purples)
  - [ ] Ocean Blue (blues/teals)
  - [ ] Forest Green (greens)
  - [ ] Sunset Orange (oranges/ambers)
- [ ] Text contrast meets accessibility standards
- [ ] Hover states work correctly
- [ ] Focus states are visible
- [ ] No visual regressions compared to original

## Tools for Migration

### Search and Replace Patterns

Use your editor's find/replace with these patterns:

1. **Background Whites:**
   - Find: `bg-white dark:bg-gray-900`
   - Replace: `bg-bg-primary`

2. **Primary Text:**
   - Find: `text-gray-900 dark:text-white`
   - Replace: `text-text-primary`

3. **Primary Buttons:**
   - Find: `bg-indigo-600 hover:bg-indigo-700`
   - Replace: `bg-primary-600 hover:bg-primary-700`

4. **Links:**
   - Find: `text-indigo-600 dark:text-indigo-400`
   - Replace: `text-primary-600`

### Verification Script

Run this to find remaining hardcoded colors:

```bash
cd packages/client/src
grep -r "bg-white\|bg-gray-\|text-gray-\|border-gray-\|bg-indigo-\|text-indigo-\|bg-purple-\|text-purple-" --include="*.tsx" --include="*.ts" | grep -v "node_modules"
```

## Need Help?

- Check `/src/docs/THEME_COLORS.md` for full color system documentation
- See migrated components (HomePage, Header, Footer) for examples
- Test changes with ColorPresetSelector to ensure compatibility

---

**Last Updated:** November 2025  
**Status:** 3 of 15+ components migrated

