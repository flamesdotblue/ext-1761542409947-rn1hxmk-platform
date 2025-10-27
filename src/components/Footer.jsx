import React from 'react';
import { useI18n } from './useI18n.jsx';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-4 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Tharu & Nepali Culture. {t('footer.rights')}</p>
        <nav className="flex gap-4 text-sm">
          <a className="hover:underline" href="#privacy">{t('footer.privacy')}</a>
          <a className="hover:underline" href="#terms">{t('footer.terms')}</a>
          <a className="hover:underline" href="#contact">{t('footer.contact')}</a>
        </nav>
      </div>
    </footer>
  );
}
