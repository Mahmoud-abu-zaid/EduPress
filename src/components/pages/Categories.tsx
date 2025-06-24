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

export default function Categories() {
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
      <div className="py-9 px-7 flex flex-wrap justify-between items-center">
        <TitleDescription title="Top Categories" description="Explore our Popular Categories" />
        <BtnLinkAll path="/" title="All categories" />
      </div>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-7 pb-8 w-fit">
          {categories.map((categorie, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-[234px] h-[234px] shadow rounded-2xl hover:shadow-lg cursor-pointer">
              <i className="text-3xl text-amber-500 ">{categorie.icons}</i>
              <p className="text-[20px] font-semibold py-3">{categorie.title}</p>
              <p className="font-extralight">{categorie.coruses}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
