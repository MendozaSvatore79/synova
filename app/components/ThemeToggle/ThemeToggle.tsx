"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeToggle.module.scss";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
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

  if (!mounted) {
    return (
      <div className={styles.toggleContainer}>
        <div className={styles.skeleton}></div>
      </div>
    );
  }

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case "light":
        return (
          <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case "dark":
        return (
          <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
          </svg>
        );
      case "system":
        return (
          <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M12 2 A10 10 0 0 1 12 22 Z" fill="currentColor" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.toggleContainer} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
        aria-label="Toggle theme menu"
      >
        {getThemeIcon(theme || "system")}
        <svg className={`${styles.chevron} ${isOpen ? styles.open : ""}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={`${styles.option} ${theme === "light" ? styles.active : ""}`}
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
          >
            {getThemeIcon("light")}
            <span>Light</span>
            {theme === "light" && (
              <svg className={styles.checkmark} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <button
            className={`${styles.option} ${theme === "dark" ? styles.active : ""}`}
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
          >
            {getThemeIcon("dark")}
            <span>Dark</span>
            {theme === "dark" && (
              <svg className={styles.checkmark} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <button
            className={`${styles.option} ${theme === "system" ? styles.active : ""}`}
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
          >
            {getThemeIcon("system")}
            <span>Auto</span>
            {theme === "system" && (
              <svg className={styles.checkmark} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
