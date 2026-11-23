"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Language, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("temer_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("temer_lang_change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("temer_lang") as Language;
    if (saved && (saved === "en" || saved === "am" || saved === "om")) {
      return saved;
    }
  } catch {
    // localStorage unavailable
  }
  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // useSyncExternalStore guarantees SSR snapshot matches initial hydration, then syncs with localStorage
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem("temer_lang", lang);
      document.documentElement.lang = lang;
      window.dispatchEvent(new Event("temer_lang_change"));
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
