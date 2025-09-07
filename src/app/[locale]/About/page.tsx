import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("about");
  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-[70Vh]">
        <div>
          <h1 className="md:text-4xl font-bold mb-4 sm:text-2xl text-xl text-color-black">{t("title1")}</h1>
          <p className="text-lg text-color-black">{t("title2")}</p>
        </div>
        <div className="text-center py-20">
          <p className="text-7xl py-3 text-color-black">🚧</p>
          <h2 className="sm:text-4xl text-3xl py-2 text-color-black">{"discription1"}</h2>
          <p className="sm:text-2xl text-lg text-color-black">{t("discription2")}</p>
        </div>
      </div>
    </>
  );
}
