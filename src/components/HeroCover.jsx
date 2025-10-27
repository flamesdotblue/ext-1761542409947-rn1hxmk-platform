import React from 'react';
import Spline from '@splinetool/react-spline';
import { useI18n } from './useI18n.jsx';

export default function HeroCover() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/90 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:py-28 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-white font-medium shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-950">
              {t('cta.shopNow')}
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900">
              {t('cta.learnMore')}
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4 text-sm">
          <li className="rounded-lg border border-neutral-200 bg-white/60 p-4 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
            <p className="font-semibold">{t('hero.cards.clothing.title')}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t('hero.cards.clothing.desc')}</p>
          </li>
          <li className="rounded-lg border border-neutral-200 bg-white/60 p-4 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
            <p className="font-semibold">{t('hero.cards.crafts.title')}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t('hero.cards.crafts.desc')}</p>
          </li>
          <li className="rounded-lg border border-neutral-200 bg-white/60 p-4 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
            <p className="font-semibold">{t('hero.cards.music.title')}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t('hero.cards.music.desc')}</p>
          </li>
          <li className="rounded-lg border border-neutral-200 bg-white/60 p-4 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
            <p className="font-semibold">{t('hero.cards.books.title')}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t('hero.cards.books.desc')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
