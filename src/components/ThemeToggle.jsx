import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from './useTheme.jsx';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-neutral-200 p-1 dark:border-neutral-800" role="group" aria-label="Theme toggle">
      <button
        aria-pressed={theme === 'light'}
        aria-label="Light theme"
        className={`p-2 rounded ${theme === 'light' ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
        onClick={() => setTheme('light')}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        aria-pressed={theme === 'dark'}
        aria-label="Dark theme"
        className={`p-2 rounded ${theme === 'dark' ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
        onClick={() => setTheme('dark')}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        aria-pressed={theme === 'system'}
        aria-label="System theme"
        className={`p-2 rounded ${theme === 'system' ? 'bg-neutral-100 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
        onClick={() => setTheme('system')}
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}
