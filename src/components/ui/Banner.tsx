"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Banner({ locale }: { locale: string }) {
  const t = useTranslations("banner");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  }, [locale]);

  function changeLanguage(language: string) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      router.push(`/${language}`);
    } else if (segments[0].length === 2) {
      segments[0] = language;
      router.push("/" + segments.join("/"));
    } else {
      router.push(`/${language}/` + segments.join("/"));
    }
  }

  return (
    <div className="flex justify-around items-center gap-5 p-2 bg-fourth-color-gray-bg">
      <p className="text-color-black sm:text-lg text-sm ">{t("message")}</p>
      <select className="outline-none" value={locale} onChange={(e) => changeLanguage(e.target.value)}>
        <option className="bg-color-white" value="en">
          {t("english")}
        </option>
        <option className="bg-color-white" value="ar">
          {t("arabic")}
        </option>
        <option className="bg-color-white" value="fr">
          {t("French")}
        </option>
      </select>
    </div>
  );
}
