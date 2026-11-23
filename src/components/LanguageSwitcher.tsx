"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import { Globe, ChevronDown, Check } from "lucide-react";

export default function LanguageSwitcher({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧", nativeName: "English" },
    { code: "am", label: "Amharic", flag: "🇪🇹", nativeName: "አማርኛ" },
    { code: "om", label: "Oromo", flag: "🇪🇹", nativeName: "Afaan Oromoo" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl border border-gray-200">
        <Globe className="w-4 h-4 text-[#84A441] ml-1" />
        <span className="text-xs font-bold text-gray-500 uppercase mr-1">Language:</span>
        <div className="flex items-center gap-1.5 flex-1">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLanguage(l.code)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                language === l.code
                  ? "bg-[#84A441] text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.nativeName}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left flex-shrink-0" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-full text-xs font-bold transition-all border border-gray-200/60 hover:border-[#84A441] bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#84A441] shadow-sm flex-shrink-0"
        aria-expanded={open}
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="font-semibold hidden xl:inline">{currentLang.nativeName}</span>
        <span className="font-semibold inline xl:hidden">{currentLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 border border-gray-100 py-1.5 z-50 animate-scale-in">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLanguage(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors ${
                language === l.code
                  ? "bg-[#84A441]/10 text-[#84A441] font-bold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{l.flag}</span>
                <span>{l.nativeName}</span>
              </div>
              {language === l.code && <Check className="w-3.5 h-3.5 text-[#84A441]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

