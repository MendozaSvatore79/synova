"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./LanguageToggle.module.scss";

type Language = "es" | "en" | "fr" | "pt";

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "es", name: "Español", flag: "🇲🇽" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
];

function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <div className={styles.toggleContainer}>
        <div className={styles.skeleton}></div>
      </div>
    );
  }

  const getCurrentLanguageData = () => {
    return languages.find(lang => lang.code === language) || languages[0];
  };

  return (
    <div className={styles.toggleContainer} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
        aria-label="Toggle language menu"
      >
        <span className={styles.flag}>{getCurrentLanguageData().flag}</span>
        <svg className={`${styles.chevron} ${isOpen ? styles.open : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${language === lang.code ? styles.active : ""}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.languageName}>{lang.name}</span>
              {language === lang.code && (
                <svg className={styles.checkmark} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;
