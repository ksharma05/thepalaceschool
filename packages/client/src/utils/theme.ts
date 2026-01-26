// Global theme management utility
type Theme = 'light' | 'dark';

class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme;
  private listeners: Set<(theme: Theme) => void> = new Set();

  private constructor() {
    // Initialize theme from localStorage or system preference
    this.currentTheme = this.getPreferredTheme();
    this.applyTheme(this.currentTheme);
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  private getPreferredTheme(): Theme {
    // Force light theme only - matching Dharav High School design
    // Dark mode is disabled for professional, consistent appearance
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Notify listeners
    this.listeners.forEach(listener => listener(theme));
  }

  public getTheme(): Theme {
    return this.currentTheme;
  }

  public setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.applyTheme(theme);
  }

  public toggleTheme(): void {
    // Disabled: Always use light theme for professional appearance
    this.setTheme('light');
  }

  public subscribe(listener: (theme: Theme) => void): () => void {
    this.listeners.add(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  public initialize(): void {
    // Apply theme on initialization
    this.applyTheme(this.currentTheme);
  }
}

// Export singleton instance
export const themeManager = ThemeManager.getInstance();

// Export the theme type
export type { Theme };
