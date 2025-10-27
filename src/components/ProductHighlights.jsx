import React from 'react';
import { Star } from 'lucide-react';
import { useI18n } from './useI18n.jsx';

const items = [
  {
    id: 'dhaka-topi',
    name: {
      en: 'Dhaka Topi',
      ne: 'ढाका टोपी',
    },
    price: 1499,
    img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1200&auto=format&fit=crop',
    tag: 'clothing',
  },
  {
    id: 'tharu-necklace',
    name: {
      en: 'Tharu Necklace',
      ne: 'थारु हार',
    },
    price: 2499,
    img: 'https://images.unsplash.com/photo-1582582621958-4f69b3635c91?q=80&w=1200&auto=format&fit=crop',
    tag: 'crafts',
  },
  {
    id: 'madal',
    name: {
      en: 'Madal Drum',
      ne: 'मादल',
    },
    price: 4599,
    img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1200&auto=format&fit=crop',
    tag: 'music',
  },
  {
    id: 'folk-book',
    name: {
      en: 'Nepali Folk Tales',
      ne: 'नेपाली लोककथा',
    },
    price: 899,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    tag: 'books',
  },
];

export default function ProductHighlights() {
  const { t, lang } = useI18n();

  return (
    <section id="products" className="py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('highlights.title')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('highlights.subtitle')}</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
            {t('highlights.viewAll')}
          </a>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <li key={item.id} className="group rounded-xl border border-neutral-200 overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <a href={`#/product/${item.id}`} className="block focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-950">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name[lang] || item.name.en}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.name[lang] || item.name.en}</h3>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">रु {new Intl.NumberFormat('ne-NP').format(item.price)}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{t('highlights.bestSeller')}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
