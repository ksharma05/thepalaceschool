// Color Preset System for The Palace School
// Allows easy switching between different color themes

export type ColorPreset = 'palace-flag' | 'default' | 'royal-purple' | 'ocean-blue' | 'forest-green' | 'sunset-orange';

interface ThemeColors {
  // Primary colors (9 shades) - hex format for Tailwind v4
  'color-primary-50': string;
  'color-primary-100': string;
  'color-primary-200': string;
  'color-primary-300': string;
  'color-primary-400': string;
  'color-primary-500': string;
  'color-primary-600': string;
  'color-primary-700': string;
  'color-primary-800': string;
  'color-primary-900': string;

  // Secondary colors (9 shades)
  'color-secondary-50': string;
  'color-secondary-100': string;
  'color-secondary-200': string;
  'color-secondary-300': string;
  'color-secondary-400': string;
  'color-secondary-500': string;
  'color-secondary-600': string;
  'color-secondary-700': string;
  'color-secondary-800': string;
  'color-secondary-900': string;

  // Accent colors
  'color-accent-yellow-400': string;
  'color-accent-yellow-500': string;
  'color-accent-orange-400': string;
  'color-accent-orange-500': string;

  // Feature colors
  'color-feature-blue': string;
  'color-feature-green': string;
  'color-feature-purple': string;
  'color-feature-orange': string;
  'color-feature-red': string;
  'color-feature-pink': string;

  // CTA colors
  'color-cta-gradient-start': string;
  'color-cta-gradient-end': string;
  'color-cta-hover': string;

  // Stats colors
  'color-stats-bg': string;
}

// Default Theme (Indigo & Purple) - Royal and Classic
const defaultTheme: ThemeColors = {
  // Primary: Indigo
  'color-primary-50': '#eff6ff',
  'color-primary-100': '#dbeafe',
  'color-primary-200': '#bfdbfe',
  'color-primary-300': '#93c5fd',
  'color-primary-400': '#60a5fa',
  'color-primary-500': '#3b82f6',
  'color-primary-600': '#2563eb',
  'color-primary-700': '#1d4ed8',
  'color-primary-800': '#1e40af',
  'color-primary-900': '#1e3a8a',

  // Secondary: Purple
  'color-secondary-50': '#faf5ff',
  'color-secondary-100': '#f3e8ff',
  'color-secondary-200': '#e9d5ff',
  'color-secondary-300': '#d8b4fe',
  'color-secondary-400': '#c084fc',
  'color-secondary-500': '#a855f7',
  'color-secondary-600': '#9333ea',
  'color-secondary-700': '#7e22ce',
  'color-secondary-800': '#6b21a8',
  'color-secondary-900': '#581c87',

  // Accents
  'color-accent-yellow-400': '#facc15',
  'color-accent-yellow-500': '#eab308',
  'color-accent-orange-400': '#fb923c',
  'color-accent-orange-500': '#f97316',

  // Features
  'color-feature-blue': '#3b82f6',
  'color-feature-green': '#22c55e',
  'color-feature-purple': '#a855f7',
  'color-feature-orange': '#f97316',
  'color-feature-red': '#ef4444',
  'color-feature-pink': '#ec4899',

  // CTA
  'color-cta-gradient-start': '#2563eb',
  'color-cta-gradient-end': '#9333ea',
  'color-cta-hover': '#1d4ed8',

  // Stats
  'color-stats-bg': '#2563eb',
};

// Royal Purple Theme - Deep purples with gold accents
const royalPurpleTheme: ThemeColors = {
  // Primary: Deep Purple
  'color-primary-50': '#faf5ff',
  'color-primary-100': '#f3e8ff',
  'color-primary-200': '#e9d5ff',
  'color-primary-300': '#d8b4fe',
  'color-primary-400': '#c084fc',
  'color-primary-500': '#a855f7',
  'color-primary-600': '#9333ea',
  'color-primary-700': '#7e22ce',
  'color-primary-800': '#6b21a8',
  'color-primary-900': '#581c87',

  // Secondary: Violet
  'color-secondary-50': '#f5f3ff',
  'color-secondary-100': '#ede9fe',
  'color-secondary-200': '#ddd6fe',
  'color-secondary-300': '#c4b5fd',
  'color-secondary-400': '#a78bfa',
  'color-secondary-500': '#8b5cf6',
  'color-secondary-600': '#7c3aed',
  'color-secondary-700': '#6d28d9',
  'color-secondary-800': '#5b21b6',
  'color-secondary-900': '#4c1d95',

  // Accents: Gold
  'color-accent-yellow-400': '#facc15',
  'color-accent-yellow-500': '#eab308',
  'color-accent-orange-400': '#fbbf24',
  'color-accent-orange-500': '#f59e0b',

  // Features
  'color-feature-blue': '#7c3aed',
  'color-feature-green': '#8b5cf6',
  'color-feature-purple': '#9333ea',
  'color-feature-orange': '#f59e0b',
  'color-feature-red': '#a855f7',
  'color-feature-pink': '#c084fc',

  // CTA: Purple to Violet
  'color-cta-gradient-start': '#9333ea',
  'color-cta-gradient-end': '#7c3aed',
  'color-cta-hover': '#7e22ce',

  // Stats
  'color-stats-bg': '#7c3aed',
};

// Ocean Blue Theme - Calming blues with teal accents
const oceanBlueTheme: ThemeColors = {
  // Primary: Sky Blue
  'color-primary-50': '#f0f9ff',
  'color-primary-100': '#e0f2fe',
  'color-primary-200': '#bae6fd',
  'color-primary-300': '#7dd3fc',
  'color-primary-400': '#38bdf8',
  'color-primary-500': '#0ea5e9',
  'color-primary-600': '#0284c7',
  'color-primary-700': '#0369a1',
  'color-primary-800': '#075985',
  'color-primary-900': '#0c4a6e',

  // Secondary: Teal
  'color-secondary-50': '#f0fdfa',
  'color-secondary-100': '#ccfbf1',
  'color-secondary-200': '#99f6e4',
  'color-secondary-300': '#5eead4',
  'color-secondary-400': '#2dd4bf',
  'color-secondary-500': '#14b8a6',
  'color-secondary-600': '#0d9488',
  'color-secondary-700': '#0f766e',
  'color-secondary-800': '#115e59',
  'color-secondary-900': '#134e4a',

  // Accents: Cyan
  'color-accent-yellow-400': '#22d3ee',
  'color-accent-yellow-500': '#06b6d4',
  'color-accent-orange-400': '#67e8f9',
  'color-accent-orange-500': '#22d3ee',

  // Features
  'color-feature-blue': '#0284c7',
  'color-feature-green': '#14b8a6',
  'color-feature-purple': '#0ea5e9',
  'color-feature-orange': '#06b6d4',
  'color-feature-red': '#0284c7',
  'color-feature-pink': '#22d3ee',

  // CTA: Blue to Teal
  'color-cta-gradient-start': '#0284c7',
  'color-cta-gradient-end': '#14b8a6',
  'color-cta-hover': '#0369a1',

  // Stats
  'color-stats-bg': '#0284c7',
};

// Forest Green Theme - Nature-inspired greens
const forestGreenTheme: ThemeColors = {
  // Primary: Emerald
  'color-primary-50': '#ecfdf5',
  'color-primary-100': '#d1fae5',
  'color-primary-200': '#a7f3d0',
  'color-primary-300': '#6ee7b7',
  'color-primary-400': '#34d399',
  'color-primary-500': '#10b981',
  'color-primary-600': '#059669',
  'color-primary-700': '#047857',
  'color-primary-800': '#065f46',
  'color-primary-900': '#064e3b',

  // Secondary: Green
  'color-secondary-50': '#f0fdf4',
  'color-secondary-100': '#dcfce7',
  'color-secondary-200': '#bbf7d0',
  'color-secondary-300': '#86efac',
  'color-secondary-400': '#4ade80',
  'color-secondary-500': '#22c55e',
  'color-secondary-600': '#16a34a',
  'color-secondary-700': '#15803d',
  'color-secondary-800': '#166534',
  'color-secondary-900': '#14532d',

  // Accents: Lime
  'color-accent-yellow-400': '#a3e635',
  'color-accent-yellow-500': '#84cc16',
  'color-accent-orange-400': '#d9f99d',
  'color-accent-orange-500': '#bef264',

  // Features
  'color-feature-blue': '#059669',
  'color-feature-green': '#22c55e',
  'color-feature-purple': '#10b981',
  'color-feature-orange': '#84cc16',
  'color-feature-red': '#16a34a',
  'color-feature-pink': '#4ade80',

  // CTA: Emerald to Green
  'color-cta-gradient-start': '#059669',
  'color-cta-gradient-end': '#22c55e',
  'color-cta-hover': '#047857',

  // Stats
  'color-stats-bg': '#059669',
};

// Sunset Orange Theme - Warm and inviting
const sunsetOrangeTheme: ThemeColors = {
  // Primary: Orange
  'color-primary-50': '#fff7ed',
  'color-primary-100': '#ffedd5',
  'color-primary-200': '#fed7aa',
  'color-primary-300': '#fdba74',
  'color-primary-400': '#fb923c',
  'color-primary-500': '#f97316',
  'color-primary-600': '#ea580c',
  'color-primary-700': '#c2410c',
  'color-primary-800': '#9a3412',
  'color-primary-900': '#7c2d12',

  // Secondary: Amber
  'color-secondary-50': '#fffbeb',
  'color-secondary-100': '#fef3c7',
  'color-secondary-200': '#fde68a',
  'color-secondary-300': '#fcd34d',
  'color-secondary-400': '#fbbf24',
  'color-secondary-500': '#f59e0b',
  
  'color-secondary-600': '#d97706',
  'color-secondary-700': '#b45309',
  'color-secondary-800': '#92400e',
  'color-secondary-900': '#78350f',

  // Accents: Red/Pink
  'color-accent-yellow-400': '#fb7185',
  'color-accent-yellow-500': '#f43f5e',
  'color-accent-orange-400': '#fca5a5',
  'color-accent-orange-500': '#f87171',

  // Features
  'color-feature-blue': '#ea580c',
  'color-feature-green': '#f59e0b',
  'color-feature-purple': '#f97316',
  'color-feature-orange': '#d97706',
  'color-feature-red': '#c2410c',
  'color-feature-pink': '#fb923c',

  // CTA: Orange to Amber
  'color-cta-gradient-start': '#ea580c',
  'color-cta-gradient-end': '#d97706',
  'color-cta-hover': '#c2410c',

  // Stats
  'color-stats-bg': '#ea580c',
};

// Palace Flag Theme - Inspired by the school flag colors (Crimson, Golden Yellow, Cream, Teal, Navy)
const palaceFlagTheme: ThemeColors = {
  // Primary: Deep Crimson/Burgundy (from flag top stripe - REGAL & AUTHORITATIVE)
  'color-primary-50': '#fef2f2',
  'color-primary-100': '#fee2e2',
  'color-primary-200': '#fecaca',
  'color-primary-300': '#fca5a5',
  'color-primary-400': '#f87171',
  'color-primary-500': '#ef4444',
  'color-primary-600': '#dc2626',
  'color-primary-700': '#b91c1c',
  'color-primary-800': '#991b1b',
  'color-primary-900': '#7f1d1d',

  // Secondary: Navy Blue (from flag bottom stripe - TRADITIONAL & STABLE)
  'color-secondary-50': '#eff6ff',
  'color-secondary-100': '#dbeafe',
  'color-secondary-200': '#bfdbfe',
  'color-secondary-300': '#93c5fd',
  'color-secondary-400': '#60a5fa',
  'color-secondary-500': '#3b82f6',
  'color-secondary-600': '#1e40af',
  'color-secondary-700': '#1e3a8a',
  'color-secondary-800': '#1e293b',
  'color-secondary-900': '#172554',

  // Accents: Golden Yellow (PROSPERITY) and warm tones
  'color-accent-yellow-400': '#fbbf24',
  'color-accent-yellow-500': '#f59e0b',
  'color-accent-orange-400': '#fb923c',
  'color-accent-orange-500': '#d97706',

  // Feature colors - distributed from flag palette
  'color-feature-blue': '#1e40af',      // Navy - authority
  'color-feature-green': '#0f766e',     // Teal - wisdom
  'color-feature-purple': '#991b1b',    // Crimson - passion
  'color-feature-orange': '#f59e0b',    // Gold - prosperity
  'color-feature-red': '#b91c1c',       // Deep red - energy
  'color-feature-pink': '#0f766e',      // Teal alternate

  // CTA: Crimson to Gold gradient (warm, inviting, action-oriented)
  'color-cta-gradient-start': '#b91c1c',
  'color-cta-gradient-end': '#f59e0b',
  'color-cta-hover': '#991b1b',

  // Stats: Teal (sophisticated, distinguished)
  'color-stats-bg': '#0f766e',
};

// Color preset configurations
export const colorPresets: Record<ColorPreset, ThemeColors> = {
  'palace-flag': palaceFlagTheme,
  'default': defaultTheme,
  'royal-purple': royalPurpleTheme,
  'ocean-blue': oceanBlueTheme,
  'forest-green': forestGreenTheme,
  'sunset-orange': sunsetOrangeTheme,
};

// Apply a color preset to the document
export const applyColorPreset = (preset: ColorPreset): void => {
  const colors = colorPresets[preset];
  const root = document.documentElement;

  // Apply each color as a CSS variable
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  // Save preset to localStorage
  localStorage.setItem('colorPreset', preset);
};

// Get the current color preset from localStorage
export const getCurrentPreset = (): ColorPreset => {
  const saved = localStorage.getItem('colorPreset');
  if (saved && saved in colorPresets) {
    return saved as ColorPreset;
  }
  return 'palace-flag'; // Default to Palace Flag theme
};

// Initialize color preset on page load
export const initializeColorPreset = (): void => {
  const preset = getCurrentPreset();
  applyColorPreset(preset);
};

// Preset metadata for UI display
export const presetMetadata: Record<ColorPreset, { name: string; description: string; preview: string }> = {
  'palace-flag': {
    name: 'Palace Flag',
    description: 'Inspired by our heritage - regal crimson, navy, golden, and cream',
    preview: 'linear-gradient(135deg, #b91c1c, #1e3a8a, #f59e0b)',
  },
  'default': {
    name: 'Royal Classic',
    description: 'Traditional indigo and purple - elegant and timeless',
    preview: 'linear-gradient(135deg, rgb(37 99 235), rgb(147 51 234))',
  },
  'royal-purple': {
    name: 'Royal Purple',
    description: 'Deep purples with gold accents - regal and luxurious',
    preview: 'linear-gradient(135deg, rgb(147 51 234), rgb(124 58 237))',
  },
  'ocean-blue': {
    name: 'Ocean Blue',
    description: 'Calming blues and teals - fresh and professional',
    preview: 'linear-gradient(135deg, rgb(2 132 199), rgb(20 184 166))',
  },
  'forest-green': {
    name: 'Forest Green',
    description: 'Nature-inspired greens - growth and harmony',
    preview: 'linear-gradient(135deg, rgb(5 150 105), rgb(34 197 94))',
  },
  'sunset-orange': {
    name: 'Sunset Orange',
    description: 'Warm oranges and ambers - energetic and inviting',
    preview: 'linear-gradient(135deg, rgb(234 88 12), rgb(217 119 6))',
  },
};

