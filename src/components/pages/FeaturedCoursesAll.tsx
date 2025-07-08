import Link from "next/link";
import Image from "next/image";
import { IoIosTime } from "react-icons/io";
import { DataCorurses } from "@/types/typeCourses";
import BtnLinkAll from "@/components/ui/BtnLinkAll";
import { RiGraduationCapFill } from "react-icons/ri";
import TitleDescription from "@/components/ui/TitleDescription";
import FadeInOnScroll from "../animation/FadeInOnScroll";

export default async function FeaturedCoursesAll() {
  const response = await fetch("https://edupress-neon.vercel.app/json/featured.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch featured courses");
  }

  const data: DataCorurses[] = await response.json();

  return (
    <div>
      <FadeInOnScroll>
        <div className="flex items-center justify-between flex-wrap py-9 px-7">
          <TitleDescription title="Featured courses" description="Explore our Popular Courses" />
          <BtnLinkAll path="AllCourses" title="All Courses" />
        </div>
        <div className="max-w-screen-xl mx-auto pb-5 px-5 sm:p-10 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {data.map((course) => (
              <div key={course.id} className="rounded shadow-lg flex flex-col">
                <Link href={`/CourseDetails/${course.id}`}>
                  <div className="relative">
                    <Image src={course.img} alt={course.title} className="w-full" width={400} height={250} />
                    <div className="text-xs absolute top-0 left-3 bg-black px-4 py-2 text-white mt-3 mr-3 transition duration-500 ease-in-out rounded-lg">{course.Photography}</div>
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-20 rounded-t-[20px]"></div>
                  </div>
                </Link>
                <div className="px-6 py-4 mb-auto">
                  <p className="text-gray-500 text-sm">By {course.by}</p>
                  <Link href={`/CourseDetails/${course.id}`} className="font-medium text-lg hover:text-amber-500 transition duration-300 ease-in-out inline-block mb-2">
                    {course.title}
                  </Link>
                  <div className="flex gap-3 flex-wrap">
                    <p className="ml-1 flex items-center gap-2 text-gray-400">
                      <IoIosTime className="text-amber-500" /> {course.time} Week
                    </p>
                    <p className="ml-1 flex items-center gap-2 text-gray-400">
                      <RiGraduationCapFill className="text-amber-500" /> {course.students} Students
                    </p>
                  </div>
                </div>
                <hr className="mx-5 text-gray-300" />
                <div className="flex justify-between items-center flex-wrap px-6 py-3">
                  <div className=" flex flex-row items-center gap-4 ">
                    <span className=" text-xs  mr-1 flex flex-row items-center text-gray-500">
                      <del>{course.priceBefore}</del>
                    </span>
                    <div>
                      <span className=" text-sm flex flex-row items-center text-red-500">{course.priceAfter}</span>
                      <span className=" text-sm flex flex-row items-center text-green-500">{course.priceFree}</span>
                    </div>
                  </div>
                  <div>
                    <Link href={`/CourseDetails/${course.id}`} className="text-sm">
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
  );
}
