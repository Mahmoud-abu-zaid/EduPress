import Image from "next/image";
import BtnLink from "../ui/BtnLink";
import FadeInOnScroll from "../animation/FadeInOnScroll";

export default function BannerExplorerCourse() {
  return (
    <>
    <FadeInOnScroll>
      <div className="flex justify-center items-center py-6">
        <Image className="w-[93%] h-[270px]" src="/img/Vector (2).png" alt="" width={800} height={300} />
        <div className=" absolute md:left-20 left-9">
          <p className="text-gray-800">GET MORE POWER FROM</p>
          <h2 className="md:text-3xl text-2xl">LearnPress Add-Ons</h2>
          <p className="text-gray-600 py-2 pb-4  md:text-lg text-sm">
            The next level of LearnPress - LMS WordPress Plugin. More <br />
            Powerful, Flexible and Magical Inside.
          </p>
          <BtnLink title="Explorer Course" path="/" />
        </div>
      </div>
      </FadeInOnScroll> 
    </>
  );
}
