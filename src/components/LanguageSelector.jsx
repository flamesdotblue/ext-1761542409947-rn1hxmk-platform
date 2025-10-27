import React from 'react';
import { Globe } from 'lucide-react';
import { useI18n } from './useI18n.jsx';

export default function LanguageSelector() {
  const { lang, setLang } = useI18n();

  return (
    <label className="inline-flex items-center gap-2 border border-neutral-200 rounded-md px-2 py-1.5 text-sm dark:border-neutral-800" aria-label="Language selector">
      <Globe className="h-4 w-4" />
      <select
        aria-label="Select language"
        className="bg-transparent outline-none"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ne">नेपाली</option>
      </select>
    </label>
  );
}
