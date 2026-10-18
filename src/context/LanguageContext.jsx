import React, { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("aura_lang") || "ar";
    } catch {
      return "ar";
    }
  });

  const toggleLang = () => {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
  };

  React.useEffect(() => {
    const dir = translations[lang]?.dir || (lang === "ar" ? "rtl" : "ltr");
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem("aura_lang", lang);
    } catch {}
  }, [lang]);

  const t = translations[lang] || translations["ar"];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
