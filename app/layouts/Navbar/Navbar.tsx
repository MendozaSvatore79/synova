"use client";
import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import styles from "./Navbar.module.scss";
import type { PropsNavbar } from "./interfaces";
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";
import LanguageToggle from "@/app/components/LanguageToggle";

function Navbar({}: PropsNavbar) {
  const { t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo with animated icon */}
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoIconWrapper}>
            <svg className={styles.logoIcon} viewBox="0 0 40 40" fill="none">
              <path d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20L5 12.5M20 20L35 12.5M20 20V35" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <div className={styles.logoGlow}></div>
          </div>
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoText}>{t.navbar.logo}</span>
            <span className={styles.logoSubtext}>{t.navbar.subtitle}</span>
          </div>
        </Link>

        {/* Hamburger Button */}
        <button 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links with dropdown menus */}
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          {/* About Us - Simple Link */}
          <li>
            <Link href="/about" className={styles.navLink} onClick={closeMobileMenu}>
              <span className={styles.linkText}>{t.navbar.aboutUs}</span>
              <span className={styles.linkUnderline}></span>
            </Link>
          </li>

          {/* Services - Dropdown */}
          <li
            className={styles.dropdownWrapper}
            onMouseEnter={() => !mobileMenuOpen && setActiveDropdown("services")}
            onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
          >
            <button
              className={styles.navLink}
              onClick={() => mobileMenuOpen && toggleMobileDropdown("services")}
            >
              <span className={styles.linkText}>{t.navbar.services}</span>
              <svg className={`${styles.dropdownIcon} ${activeDropdown === "services" ? styles.active : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className={styles.linkUnderline}></span>
            </button>
            <div className={`${styles.dropdown} ${activeDropdown === "services" ? styles.active : ""}`}>
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownSection}>
                  <h4 className={styles.dropdownTitle}>Development</h4>
                  <Link href="/services/web-development" className={styles.dropdownItem} onClick={closeMobileMenu}>
                    <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <span className={styles.dropdownItemTitle}>{t.navbar.webDevelopment}</span>
                      <span className={styles.dropdownItemDesc}>{t.navbar.webDevelopmentDesc}</span>
                    </div>
                  </Link>
                  <Link href="/services/mobile-development" className={styles.dropdownItem} onClick={closeMobileMenu}>
                    <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <span className={styles.dropdownItemTitle}>{t.navbar.mobileDevelopment}</span>
                      <span className={styles.dropdownItemDesc}>{t.navbar.mobileDevelopmentDesc}</span>
                    </div>
                  </Link>
                  <Link href="/services/api-development" className={styles.dropdownItem} onClick={closeMobileMenu}>
                    <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <span className={styles.dropdownItemTitle}>{t.navbar.apiDevelopment}</span>
                      <span className={styles.dropdownItemDesc}>{t.navbar.apiDevelopmentDesc}</span>
                    </div>
                  </Link>
                </div>
                <div className={styles.dropdownSection}>
                  <h4 className={styles.dropdownTitle}>Design & Strategy</h4>
                  <Link href="/services/ui-ux-design" className={styles.dropdownItem} onClick={closeMobileMenu}>
                    <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 3V21M15 3V21M3 9H21M3 15H21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <div>
                      <span className={styles.dropdownItemTitle}>{t.navbar.uiUxDesign}</span>
                      <span className={styles.dropdownItemDesc}>{t.navbar.uiUxDesignDesc}</span>
                    </div>
                  </Link>
                  <Link href="/services/consulting" className={styles.dropdownItem} onClick={closeMobileMenu}>
                    <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <div>
                      <span className={styles.dropdownItemTitle}>{t.navbar.consulting}</span>
                      <span className={styles.dropdownItemDesc}>{t.navbar.consultingDesc}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>

          {/* Solutions - Dropdown */}
          <li 
            className={styles.dropdownWrapper}
            onMouseEnter={() => !mobileMenuOpen && setActiveDropdown("solutions")}
            onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
          >
            <button 
              className={styles.navLink}
              onClick={() => mobileMenuOpen && toggleMobileDropdown("solutions")}
            >
              <span className={styles.linkText}>{t.navbar.solutions}</span>
              <svg className={`${styles.dropdownIcon} ${activeDropdown === "solutions" ? styles.active : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className={styles.linkUnderline}></span>
            </button>
            <div className={`${styles.dropdown} ${activeDropdown === "solutions" ? styles.active : ""}`}>
              <div className={styles.dropdownContent}>
                <Link href="/solutions/enterprise" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <span className={styles.dropdownItemTitle}>{t.navbar.enterprise}</span>
                    <span className={styles.dropdownItemDesc}>{t.navbar.enterpriseDesc}</span>
                  </div>
                </Link>
                <Link href="/solutions/startups" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8.5L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9 8.5L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <span className={styles.dropdownItemTitle}>{t.navbar.startups}</span>
                    <span className={styles.dropdownItemDesc}>{t.navbar.startupsDesc}</span>
                  </div>
                </Link>
                <Link href="/solutions/ecommerce" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M3 3H5L5.4 5M5.4 5H19L17 13H7M5.4 5L7 13M7 13L5.707 14.293C5.077 14.923 5.523 16 6.414 16H17M17 16C15.895 16 15 16.895 15 18C15 19.105 15.895 20 17 20C18.105 20 19 19.105 19 18C19 16.895 18.105 16 17 16ZM9 18C9 19.105 8.105 20 7 20C5.895 20 5 19.105 5 18C5 16.895 5.895 16 7 16C8.105 16 9 16.895 9 18Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <span className={styles.dropdownItemTitle}>{t.navbar.ecommerce}</span>
                    <span className={styles.dropdownItemDesc}>{t.navbar.ecommerceDesc}</span>
                  </div>
                </Link>
              </div>
            </div>
          </li>

          {/* Case Studies */}
          <li>
            <Link href="/case-studies" className={styles.navLink} onClick={closeMobileMenu}>
              <span className={styles.linkText}>{t.navbar.caseStudies}</span>
              <span className={styles.linkUnderline}></span>
            </Link>
          </li>

          {/* Resources - Dropdown */}
          <li 
            className={styles.dropdownWrapper}
            onMouseEnter={() => !mobileMenuOpen && setActiveDropdown("resources")}
            onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
          >
            <button 
              className={styles.navLink}
              onClick={() => mobileMenuOpen && toggleMobileDropdown("resources")}
            >
              <span className={styles.linkText}>{t.navbar.resources}</span>
              <svg className={`${styles.dropdownIcon} ${activeDropdown === "resources" ? styles.active : ""}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className={styles.linkUnderline}></span>
            </button>
            <div className={`${styles.dropdown} ${activeDropdown === "resources" ? styles.active : ""}`}>
              <div className={styles.dropdownContent}>
                <Link href="/blog" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <span className={styles.dropdownItemTitle}>{t.navbar.blog}</span>
                    <span className={styles.dropdownItemDesc}>{t.navbar.blogDesc}</span>
                  </div>
                </Link>
                <Link href="/resources/documentation" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <span className={styles.dropdownItemTitle}>{t.navbar.documentation}</span>
                    <span className={styles.dropdownItemDesc}>{t.navbar.documentationDesc}</span>
                  </div>
                </Link>
                <Link href="/resources/whitepaper" className={styles.dropdownItem} onClick={closeMobileMenu}>
                  <svg className={styles.dropdownItemIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div>
                    <span className={styles.dropdownItemTitle}>{t.navbar.whitepaper}</span>
                    <span className={styles.dropdownItemDesc}>{t.navbar.whitepaperDesc}</span>
                  </div>
                </Link>
              </div>
            </div>
          </li>

          {/* CTA Button Mobile */}
          <li className={styles.mobileCtaWrapper}>
            <Link href="/contact" className={styles.ctaButton} onClick={closeMobileMenu}>
              <span className={styles.ctaText}>{t.navbar.getInTouch}</span>
              <span className={styles.ctaShine}></span>
              <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </li>
        </ul>

        {/* Language Toggle */}
        <div className={styles.languageToggleWrapper}>
          <LanguageToggle />
        </div>

        {/* Theme Toggle */}
        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>

        {/* CTA Button Desktop */}
        <Link href="/contact" className={`${styles.ctaButton} ${styles.desktopOnly}`}>
          <span className={styles.ctaText}>{t.navbar.getInTouch}</span>
          <span className={styles.ctaShine}></span>
          <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
