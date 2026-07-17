'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // The inline script in the root layout sets the class before hydration,
  // so reading it back keeps React state in sync with the DOM.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        // localStorage unavailable (e.g. blocked) — theme still applies for this visit
      }
      return next;
    });
  };

  // Follow OS preference changes, but only while the user hasn't made an explicit choice
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch {
        // fall through and follow the OS
      }
      const next: Theme = e.matches ? 'dark' : 'light';
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
