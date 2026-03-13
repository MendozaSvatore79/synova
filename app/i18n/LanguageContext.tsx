"use client";

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";

type Language = "es" | "en" | "fr" | "pt";

type Translations = typeof es;

const translations: Record<Language, Translations> = {
  es,
  en,
  fr,
  pt,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const defaultValue: LanguageContextType = {
  language: "es",
  setLanguage: () => {},
  t: es,
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const value: LanguageContextType = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
