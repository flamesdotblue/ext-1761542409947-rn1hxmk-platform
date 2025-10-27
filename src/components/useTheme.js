import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ theme: 'system', setTheme: () => {} });

function applyTheme(next) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = next === 'dark' || (next === 'system' && prefersDark);
  root.classList.toggle('dark', isDark);
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme-pref') : null;
    return saved || 'system';
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme-pref', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const saved = localStorage.getItem('theme-pref') || 'system';
      if (saved === 'system') applyTheme('system');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const value = useMemo(() => ({ theme, setTheme: setThemeState }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
