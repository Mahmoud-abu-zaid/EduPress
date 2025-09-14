import BtnLinkAll from "../ui/BtnLinkAll";
import { LuFileCode2 } from "react-icons/lu";
import { FaLandmarkFlag } from "react-icons/fa6";
import { TfiVideoClapper } from "react-icons/tfi";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineScience } from "react-icons/md";
import { TbPhoto, TbWriting } from "react-icons/tb";
import { RiUserCommunityFill } from "react-icons/ri";
import TitleDescription from "../ui/TitleDescription";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import { getTranslations } from "next-intl/server";

export default async function Categories() {
  const t = await getTranslations("Categories");
  const categories = [
    { icons: <IoMdColorPalette />, title: "Art & Design", coruses: "38 Courses" },
    { icons: <LuFileCode2 />, title: "Development", coruses: "38 Courses" },
    { icons: <RiUserCommunityFill />, title: "Communiication", coruses: "38 Courses" },
    { icons: <TfiVideoClapper />, title: "Videography", coruses: "38 Courses" },
    { icons: <TbPhoto />, title: "Photography", coruses: "38 Courses" },
    { icons: <FaLandmarkFlag />, title: "Marketing", coruses: "38 Courses" },
    { icons: <TbWriting />, title: "Content writing", coruses: "38 Courses" },
    { icons: <LiaFileInvoiceDollarSolid />, title: "Finance", coruses: "38 Courses" },
    { icons: <MdOutlineScience />, title: "Science", coruses: "38 Courses" },
    { icons: <IoMdColorPalette />, title: "Network", coruses: "38 Courses" },
  ];
  return (
    <>
      <FadeInOnScroll stagger={true}>
        <div className="py-9 px-7 flex flex-wrap justify-between items-center">
          <TitleDescription title={t("Top Categories")} description={t("Explore our Popular Categories")} />
          <BtnLinkAll path="/" title={t("All categories")} />
        </div>
        <div className="flex justify-center px-4">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full justify-center items-center gap-7 pb-8 sm:w-fit">
            {categories.map((categorie, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center sm:w-[234px] sm:h-[234px] w-full h-70 shadow-fourth-color-gray-bg rounded-2xl cursor-pointer transform transition-transform duration-70 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] border-1 border-second-color-text"
              >
                <i className="text-3xl text-main-color">{categorie.icons}</i>
                <p className="text-[20px] font-semibold py-3 text-color-black">{t(categorie.title)}</p>
                <p className="font-extralight text-second-color-text">{t(categorie.coruses)}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
