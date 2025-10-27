import React, { createContext, useContext, useMemo, useState } from 'react';

const I18nContext = createContext({ t: (k) => k, lang: 'en', setLang: () => {} });

const translations = {
  en: {
    siteName: 'Tharu & Nepali Culture Store',
    heroTitle: 'Celebrate Tharu & Nepali Heritage',
    heroSubtitle: 'Authentic clothing, crafts, music, and books that honor culture and community.',
    shopNow: 'Shop now',
    explore: 'Explore collections',
    highlightsTitle: 'Featured Collections',
    clothing: 'Clothing',
    crafts: 'Crafts',
    music: 'Music',
    books: 'Books',
    cart: 'Cart',
    account: 'Account',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    footerTag: 'Preserving culture through commerce',
    viewAll: 'View all',
  },
  ne: {
    siteName: 'थारू र नेपाली संस्कृतिको पसल',
    heroTitle: 'थारू र नेपाली सम्पदा मनाउनुस्',
    heroSubtitle: 'सांस्कृतिक लुगा, हस्तकला, संगीत र पुस्तकहरू — समुदाय र पहिचानको सम्मान।',
    shopNow: 'किनमेल सुरु गर्नुहोस्',
    explore: 'संग्रह हेर्नुहोस्',
    highlightsTitle: 'विशेष संग्रह',
    clothing: 'लुगा',
    crafts: 'हस्तकला',
    music: 'संगीत',
    books: 'पुस्तक',
    cart: 'कार्ट',
    account: 'खाता',
    language: 'भाषा',
    theme: 'थिम',
    light: 'हल्का',
    dark: 'गाढा',
    system: 'सिस्टम',
    footerTag: 'व्यापारमार्फत संस्कृति जोगाउँदै',
    viewAll: 'सबै हेर्नुहोस्',
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = (key) => {
    const dict = translations[lang] || translations.en;
    return dict[key] || key;
    
  };

  const value = useMemo(() => ({ t, lang, setLang }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
