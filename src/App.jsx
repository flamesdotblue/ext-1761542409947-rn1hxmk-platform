import React from 'react';
import Header from './components/Header.jsx';
import HeroCover from './components/HeroCover.jsx';
import ProductHighlights from './components/ProductHighlights.jsx';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './components/useTheme.jsx';
import { I18nProvider } from './components/useI18n.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col">
          <Header />
          <main className="flex-1">
            <HeroCover />
            <ProductHighlights />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
