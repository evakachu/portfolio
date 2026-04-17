import * as React from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (nextLanguage: Language) => void;
}

const STORAGE_KEY = 'portfolio-language';

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === 'fr' || value === 'en';
}

function getDetectedLanguage(): Language {
  if (typeof navigator === 'undefined') return 'fr';

  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    if (typeof window === 'undefined') return 'fr';

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : getDetectedLanguage();
  });

  React.useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}
