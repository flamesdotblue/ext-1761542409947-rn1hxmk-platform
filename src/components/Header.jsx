import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import { useI18n } from './useI18n.jsx';

export default function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-gradient-to-br from-emerald-500 to-emerald-700 text-white grid place-items-center font-bold">TN</div>
          <div>
            <p className="font-semibold leading-none">Tharu & Nepali Culture</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{t('header.subtitle')}</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.home')}</a>
          <a href="#products" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.products')}</a>
          <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.about')}</a>
          <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{t('nav.contact')}</a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <button aria-label={t('nav.account')} className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <User className="h-5 w-5" />
          </button>
          <button aria-label={t('nav.cart')} className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
