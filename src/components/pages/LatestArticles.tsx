import Link from "next/link";
import Image from "next/image";
import BtnLinkAll from "../ui/BtnLinkAll";
import { IoIosTime } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";
import TitleDescription from "../ui/TitleDescription";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import { DataCorurses } from "@/modules/AllCourses/types/typeCourses";

export default async function LatestArticles() {
  const response = await fetch("https://edupress-neon.vercel.app/json/latestArticles.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch featured courses");
  }

  const data: DataCorurses[] = await response.json();

  return (
    <>
      <div>
        <FadeInOnScroll>
          <div className="flex items-center justify-between flex-wrap py-9">
            <TitleDescription title="Featured courses" description="Explore our Popular Courses" />
            <BtnLinkAll path="AllCourses" title="All Courses" />
          </div>
          <div className="max-w-screen-xl mx-auto pb-5  md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {data.map((course) => (
                <div
                  key={course.id}
                  className="bg-color-white rounded-4xl shadow-[0_0_20px_rgba(0,0,0,0.3)] shadow-fourth-color-gray-bg flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <Link href={`/CourseDetails/${course.id}`}>
                    <div className="relative">
                      <Image src={course.img} alt={course.title} className="w-full" width={400} height={250} />
                      <div className="text-xs absolute top-0 left-3 bg-color-black px-4 py-2 text-color-white mt-3 mr-3 transition duration-500 ease-in-out rounded-lg">{course.Photography}</div>
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-20 rounded-t-[13px] sm:rounded-t-[25px] md:rounded-t-[18px]"></div>
                    </div>
                  </Link>
                  <div className="px-3 py-4 mb-auto">
                    <p className="text-second-color-text text-sm">By {course.by}</p>
                    <Link href={`/CourseDetails/${course.id}`} className="font-medium sm:text-lg text-md  text-color-black hover:text-main-color transition duration-300 ease-in-out inline-block mb-2">
                      {course.title}
                    </Link>
                    <div className="flex gap-3 flex-wrap">
                      <p className="ml-1 flex items-center gap-2 text-third-color">
                        <IoIosTime className="text-main-color" /> {course.time} Week
                      </p>
                      <p className="ml-1 flex items-center gap-2 text-third-color">
                        <RiGraduationCapFill className="text-main-color" /> {course.students} Students
                      </p>
                    </div>
                  </div>
                  <hr className="mx-5 text-third-color" />
                  <div className="flex justify-between items-center flex-wrap px-6 py-3">
                    <div className=" flex flex-row items-center gap-4 ">
                      <span className=" text-xs  mr-1 flex flex-row items-center text-third-color">
                        <del>{course.priceBefore}</del>
                      </span>
                      <div>
                        <span className=" text-sm flex flex-row items-center text-red-text">{course.priceAfter}</span>
                        <span className=" text-sm flex flex-row items-center text-green-text">{course.priceFree}</span>
                      </div>
                    </div>
                    <div>
                      <Link href={`/CourseDetails/${course.id}`} className="text-sm text-color-black">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </>
  );
}
