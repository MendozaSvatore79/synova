"use client";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import styles from "./PageTransition.module.scss";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-loaded", (!isLoading).toString());

    return () => {
      body.removeAttribute("data-loaded");
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <div className={`${styles.loadingWrapper} ${!isLoading ? styles.fadeOut : ""}`}>
          <Loading />
        </div>
      )}
      <div className={`${styles.content} ${!isLoading ? styles.show : ""}`}>
        {children}
      </div>
    </>
  );
}
