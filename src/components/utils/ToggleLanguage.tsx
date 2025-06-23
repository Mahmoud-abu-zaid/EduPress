"use client";

import "../../i18ntranslation/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../ui/Banner";

export default function ToggleLanguage({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<string>("en");
  const [direction, setDirection] = useState<"rtl" | "ltr">("ltr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLocale = localStorage.getItem("language") || "en";
      const storedDirection = localStorage.getItem("direction") || (storedLocale === "ar" ? "rtl" : "ltr");

      setLocale(storedLocale);
      setDirection(storedDirection === "rtl" ? "rtl" : "ltr");

      i18n.changeLanguage(storedLocale);
      document.documentElement.dir = storedDirection;
    }
  }, [i18n]);

  const changeLanguage = (newLanguage: string) => {
    const newDirection = newLanguage === "ar" ? "rtl" : "ltr";

    setLocale(newLanguage);
    setDirection(newDirection);
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newDirection;

    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage);
      localStorage.setItem("direction", newDirection);
    }
  };

  return (
    <div dir={direction}>
      <Banner locale={locale} changeLanguage={changeLanguage} />
      {children}
    </div>
  );
}
