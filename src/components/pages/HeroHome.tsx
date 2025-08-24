"use client";
import Image from "next/image";
import BtnLink from "../ui/BtnLink";
import { exo2 } from "@/fonts/allFonts";
import { useTranslation } from "react-i18next";
import FadeInOnScroll from "../animation/FadeInOnScroll";
export default function HeroHome() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[url('/img/Rectangle88.png')] bg-size-[100%_100%] bg-center h-[80vh] bg-no-repeat flex items-center justify-center text-color-white">
        <div className=" flex justify-between items-center gap-5 text-black">
          <div className="p-3">
            <FadeInOnScroll>
              <h2 className={`sm:text-4xl text-3xl font-semibold mb-5 text-black ${exo2.className}`}>
                {t("Build Skills with")}
                <br />
                {t("Online Course")}
              </h2>
              <p className="text-gray-700">
                We denounce with righteous indignation and dislike men who are <br />
                so beguiled and demoralized that cannot trouble.
              </p>
              <div className="mt-6">
                <BtnLink path="/" title="Posts comment" />
              </div>
            </FadeInOnScroll>
          </div>
          <div className="h-[80vh] lg:block hidden">
            <Image className={`h-full  duration-500 `} src="/img/heroHome.png" alt="Hero Home Image" width={500} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
