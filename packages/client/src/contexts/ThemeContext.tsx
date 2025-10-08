import React, { createContext, useContext, useEffect, useState } from 'react';
import { themeManager, type Theme } from '../utils/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => themeManager.getTheme());

  useEffect(() => {
    // Subscribe to theme changes from the global manager
    const unsubscribe = themeManager.subscribe((newTheme) => {
      setThemeState(newTheme);
    });

    // Initialize theme manager
    themeManager.initialize();

    return unsubscribe;
  }, []);

  const toggleTheme = () => {
    themeManager.toggleTheme();
  };

  const setTheme = (newTheme: Theme) => {
    themeManager.setTheme(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
