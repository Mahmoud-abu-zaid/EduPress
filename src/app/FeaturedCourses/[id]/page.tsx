import Image from "next/image";
import Link from "next/link";
import { IoIosTime } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";

interface DataCorurses {
  id: string;
  img: string;
  by: string;
  title: string;
  time: number;
  students: number;
  priceBefore: string;
  priceAfter: string;
  priceFree: string;
  Photography: string;
}

export default async function FeaturedComponents() {
  const response = await fetch("https://edupress-neon.vercel.app/json/featured.json", {
    cache: "no-store",
  });

  const data: DataCorurses[] = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch featured courses");
  }

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data.map((course) => (
            <div key={course.id} className="rounded overflow-hidden shadow-lg flex flex-col">
              <Link href={`/courses/${course.id}`}>
                <div className="relative">
                  <Image src={course.img} alt={course.title} className="w-full" width={400} height={250} />
                  <div className="text-xs absolute top-0 left-3 bg-black px-4 py-2 text-white mt-3 mr-3 transition duration-500 ease-in-out rounded-lg">{course.Photography}</div>
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-20 rounded-t-2xl"></div>
                </div>
              </Link>
              <div className="px-6 py-4 mb-auto">
                <p className="text-gray-500 text-sm">By {course.by}</p>
                <Link href={`/courses/${course.id}`} className="font-medium text-lg hover:text-amber-500 transition duration-300 ease-in-out inline-block mb-2">
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
                  <Link href={`/courses/${course.id}`} className="text-sm">
                    View more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
