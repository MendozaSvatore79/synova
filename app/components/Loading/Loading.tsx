"use client";
import { useEffect, useState } from "react";
import styles from "./Loading.module.scss";
import type { PropsLoading } from "./interfaces";

function Loading({}: PropsLoading) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.content}>
        {/* Animated Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <svg className={styles.logo} viewBox="0 0 40 40" fill="none">
              <path 
                className={styles.logoPath1}
                d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                className={styles.logoPath2}
                d="M20 20L5 12.5M20 20L35 12.5M20 20V35" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
            <div className={styles.logoGlow}></div>
            <div className={styles.logoRing}></div>
          </div>
          
          <div className={styles.brandContainer}>
            <h1 className={styles.brandName}>
              <span className={styles.letter}>S</span>
              <span className={styles.letter}>Y</span>
              <span className={styles.letter}>N</span>
              <span className={styles.letter}>O</span>
              <span className={styles.letter}>V</span>
              <span className={styles.letter}>A</span>
            </h1>
            <p className={styles.brandSubtext}>SYSTEMS</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            >
              <div className={styles.progressShine}></div>
            </div>
          </div>
          <span className={styles.progressText}>{progress}%</span>
        </div>

        {/* Loading Text */}
        <div className={styles.loadingTextContainer}>
          <span className={styles.loadingText}>Cargando</span>
          <span className={styles.dots}>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
          </span>
        </div>

        {/* Animated Particles */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
