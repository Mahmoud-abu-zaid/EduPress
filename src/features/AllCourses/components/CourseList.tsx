"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { IoIosTime } from "react-icons/io";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbLayoutList } from "react-icons/tb";
import { HiMiniQueueList } from "react-icons/hi2";
import { DataCorurses } from "@/types/typeCourses";

export default function CourseList({ data }: { data: DataCorurses[] }) {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className="flex justify-between items-center py-5 px-5 w-full">
        <div>
          <h3 className="text-xl">All Courses</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border-b-4 border-gray-700 rounded-2xl px-2 py-1">
            <input type="text" placeholder="Search courses..." className=" px-2 py-2 outline-0" value={search} onChange={(e) => setSearch(e.target.value)} />
            <IoSearch />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 rounded-md cursor-pointer text-2xl">
              <TbLayoutList />
            </button>
            <button className="px-2 py-1 rounded-md cursor-pointer text-2xl">
              <HiMiniQueueList />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        {filteredData.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg py-10 flex flex-col items-center gap-3">
            <Image src="/img/not-found.webp" alt=" icon not found search" width={250} height={100} />
            <p>No courses match your search.</p>
          </div>
        ) : (
          filteredData.map((course) => (
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
          ))
        )}
      </div>
    </>
  );
}
