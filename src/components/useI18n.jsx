import React, { createContext, useContext, useMemo, useState } from 'react';

const I18nContext = createContext({ t: (k) => k, lang: 'en', setLang: () => {} });

const dict = {
  en: {
    'header.subtitle': 'Crafts, clothing, music, and books',
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'nav.account': 'Account',
    'hero.title': 'Celebrate Tharu & Nepali Heritage',
    'hero.subtitle': 'Shop authentic cultural items—from Dhaka textiles and Tharu crafts to traditional instruments and literature. Carefully curated and community-forward.',
    'cta.shopNow': 'Shop now',
    'cta.learnMore': 'Learn more',
    'hero.cards.clothing.title': 'Cultural Clothing',
    'hero.cards.clothing.desc': 'Dhaka, Gunyu Cholo, and more',
    'hero.cards.crafts.title': 'Handmade Crafts',
    'hero.cards.crafts.desc': 'Tharu artistry from the Terai',
    'hero.cards.music.title': 'Music & Instruments',
    'hero.cards.music.desc': 'Madal, Sarangi, and folk tunes',
    'hero.cards.books.title': 'Books & Folklore',
    'hero.cards.books.desc': 'Stories that preserve heritage',
    'highlights.title': 'Featured products',
    'highlights.subtitle': 'Authentic items curated with love',
    'highlights.viewAll': 'View all',
    'highlights.bestSeller': 'Best seller',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
  },
  ne: {
    'header.subtitle': 'हस्तकला, लुगा, संगीत र पुस्तकहरू',
    'nav.home': 'गृह',
    'nav.products': 'उत्पादन',
    'nav.about': 'हाम्रो बारेमा',
    'nav.contact': 'सम्पर्क',
    'nav.cart': 'कार्ट',
    'nav.account': 'खाता',
    'hero.title': 'थारु र नेपाली विरासतको उत्सव',
    'hero.subtitle': 'ढाका, थारु हस्तकला, परम्परागत वाद्ययन्त्र र साहित्यसम्म—प्रामाणिक सांस्कृतिक वस्तुहरू किनमेल गर्नुहोस्। समुदाय केन्द्रित र मर्मस्पर्शी।',
    'cta.shopNow': 'अहिले किनमेल गर्नुहोस्',
    'cta.learnMore': 'थप जान्नुहोस्',
    'hero.cards.clothing.title': 'सांस्कृतिक पोशाक',
    'hero.cards.clothing.desc': 'ढाका, गुन्न्यू चोलो आदि',
    'hero.cards.crafts.title': 'हस्तनिर्मित कला',
    'hero.cards.crafts.desc': 'तेराईको थारु कला',
    'hero.cards.music.title': 'संगीत र वाद्ययन्त्र',
    'hero.cards.music.desc': 'मादल, सारङ्गी र लोकधुन',
    'hero.cards.books.title': 'पुस्तक र लोककथा',
    'hero.cards.books.desc': 'विरासत जोगाउने कथाहरू',
    'highlights.title': 'रूचाइएका उत्पादन',
    'highlights.subtitle': 'माया र सम्मानका साथ छनोट',
    'highlights.viewAll': 'सबै हेर्नुहोस्',
    'highlights.bestSeller': 'रूचाइएको',
    'footer.rights': 'सम्पूर्ण अधिकार सुरक्षित।',
    'footer.privacy': 'गोपनीयता',
    'footer.terms': 'नियम',
    'footer.contact': 'सम्पर्क',
  },
};

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('lang') || 'en';
  });

  const setLang = (value) => {
    setLangState(value);
    try {
      localStorage.setItem('lang', value);
    } catch {}
  };

  const t = (key) => {
    const pack = dict[lang] || dict.en;
    return pack[key] || dict.en[key] || key;
  };

  const value = useMemo(() => ({ t, lang, setLang }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
