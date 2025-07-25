"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { TbLayoutList } from "react-icons/tb";
import { HiMiniQueueList } from "react-icons/hi2";
import { DataCorurses } from "@/features/AllCourses/types/typeCourses";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdFileCopy, MdQuiz } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

export default function CourseList({ data }: { data: DataCorurses[] }) {
  const [search, setSearch] = useState("");

  const [sliderIndex, setSliderIndex] = useState(1);

  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredData = data.filter((course) => {
    const matchesSearch =
      course.title?.toLowerCase().includes(search.toLowerCase()) ||
      course.Photography?.toLowerCase().includes(search.toLowerCase()) ||
      course.by?.toLowerCase().includes(search.toLowerCase()) ||
      course.priceFree?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category) ||
      selectedCategories.includes(course.instructor) ||
      selectedCategories.includes(course.levels) ||
      (course.review !== undefined && selectedCategories.includes(course.review.toString()));

    return matchesSearch && matchesCategory;
  });

  const coursesPage = 6;

  const startIndex = (sliderIndex - 1) * coursesPage;

  const endIndex = startIndex + coursesPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / coursesPage);

  useEffect(() => {
    setSliderIndex(1);
  }, [search, selectedCategories]);

  return (
    <>
      <FadeInOnScroll>
        <div className="flex justify-center  gap-6">
          <div className="flex flex-col lg:w-[75%] w-[90%] gap-3">
            <div className="flex sm:justify-between justify-center flex-wrap items-center py-5 px-5 w-full gap-5">
              <div>
                <h3 className="text-xl">All Courses</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border-b-4 border-gray-700 rounded-2xl px-2 py-1">
                  <input type="text" placeholder="Search courses..." className=" px-2 py-2 outline-0" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <IoSearch />
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <button onClick={() => setIsGridView(true)} className={`px-2 py-1 rounded-md cursor-pointer text-2xl ${isGridView ? "text-amber-400" : "text-gray-700"}`}>
                    <HiMiniQueueList />
                  </button>

                  <button onClick={() => setIsGridView(false)} className={`px-2 py-1 rounded-md cursor-pointer text-2xl ${!isGridView ? "text-amber-400" : "text-gray-700"}`}>
                    <TbLayoutList />
                  </button>
                </div>
              </div>
            </div>

            {paginatedData.length === 0 ? (
              <div className="flex justify-center items-center w-full h-96">
                <div className="text-gray-500 text-lg py-10 flex flex-col justify-center items-center gap-3">
                  <Image src="/img/not-found.webp" alt=" icon not found searchnp" width={250} height={100} />
                  <p>No courses match your search.</p>
                </div>
              </div>
            ) : (
              <div className={`grid gap-10 justify-center pb-8 ${isGridView ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                {paginatedData.map((course) => (
                  <div key={course.id} className={`rounded-3xl shadow-lg overflow-hidden flex  ${isGridView ? "flex-col" : "flex-col sm:flex-row"}`}>
                    <Link href={`/CourseDetails/${course.id}`} className={isGridView ? "" : "w-full sm:w-1/3"}>
                      <div className="relative h-full">
                        <Image src={course.img} alt={course.title} className={`w-full h-full`} width={400} height={250} />
                        <div className="text-xs absolute top-0 left-3 bg-black px-4 py-2 text-white mt-3 mr-3 rounded-lg">{course.Photography}</div>
                        <div className={`absolute inset-0 bg-gray-800 opacity-20 hover:opacity-0 transition-opacity ease-in ${isGridView ? "" : " rounded-tr-2xl"}`}></div>
                      </div>
                    </Link>

                    <div className={`flex flex-col justify-between ${isGridView ? "px-6 py-4" : "p-4 w-full sm:w-2/3"}`}>
                      <div>
                        <p className="text-gray-500 text-sm">By {course.by}</p>
                        <Link href={`/CourseDetails/${course.id}`} className="font-medium text-lg hover:text-amber-500 transition duration-300 inline-block mb-2">
                          {course.title}
                        </Link>

                        <div className="flex gap-3 flex-wrap mb-2">
                          <p className="ml-1 flex items-center gap-2 text-gray-400">
                            <IoIosTime className="text-amber-500" /> {course.time} Week
                          </p>
                          <p className="ml-1 flex items-center gap-2 text-gray-400">
                            <RiGraduationCapFill className="text-amber-500" /> {course.students} Students
                          </p>
                          {isGridView === false && (
                            <div className="flex items-center gap-2 text-gray-400 flex-wrap">
                              <p className="ml-1 flex items-center gap-2 text-gray-400 ">
                                <MdQuiz className="text-amber-500" />
                                {course.Quizzes} Quizzes
                              </p>

                              <p className="ml-1 flex items-center gap-2 text-gray-400 ">
                                <ImStatsBars className="text-amber-500" /> {course.levels}
                              </p>

                              <p className="ml-1 flex items-center gap-2 text-gray-400 ">
                                <MdFileCopy className="text-amber-500" />
                                {course.Lessons} Lessons
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-300 flex-wrap gap-4">
                        <div className="flex flex-row gap-4">
                          <span className="text-xs text-gray-500">
                            <del>{course.priceBefore}</del>
                          </span>
                          <div className="flex flex-col">
                            <span className="text-sm text-red-500">{course.priceAfter}</span>
                            <span className="text-sm text-green-500">{course.priceFree}</span>
                          </div>
                        </div>
                        <Link href={`/CourseDetails/${course.id}`} className="text-sm whitespace-nowrap">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center gap-4 my-2 mb-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setSliderIndex(index + 1)}
                  className={`px-5 py-3 cursor-pointer rounded-4xl shadow ${sliderIndex === index + 1 ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block p-4  w-[18%]">
            <aside className="w-full py-4 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Course Category</h3>
                {["Commercial", "Office", "Shop", "Educate", "Academy", "Single family home", "Studio", "University"].map((item) => (
                  <div key={item} className="flex justify-between items-center mb-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(item)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, item]);
                          } else {
                            setSelectedCategories(selectedCategories.filter((category) => category !== item));
                          }
                        }}
                      />
                      <span>{item}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Instructors</h3>
                {["Kenny White", "John Doe"].map((item) => (
                  <div key={item} className="flex justify-between items-center mb-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(item)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, item]);
                          } else {
                            setSelectedCategories(selectedCategories.filter((category) => category !== item));
                          }
                        }}
                      />
                      <span>{item}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                {["All", "Free", "Paid"].map((item) => (
                  <div key={item} className="flex justify-between items-center mb-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(item)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, item]);
                          } else {
                            setSelectedCategories(selectedCategories.filter((category) => category !== item));
                          }
                        }}
                      />
                      <span>{item}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Review</h3>
                {Array.from({ length: 5 }, (_, i) => 5 - i).map((stars) => (
                  <div key={stars} className="flex justify-between items-center mb-1">
                    <label className="flex items-center gap-1 text-yellow-400">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(stars.toString())}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, stars.toString()]);
                          } else {
                            setSelectedCategories(selectedCategories.filter((category) => category !== stars.toString()));
                          }
                        }}
                      />
                      {Array.from({ length: 5 }, (_, j) => (
                        <span key={j}>{j < stars ? "★" : "☆"}</span>
                      ))}
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Level</h3>
                {["All levels", "Beginner", "Intermediate", "Expert"].map((item) => (
                  <div key={item} className="flex justify-between items-center mb-1">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(item)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, item]);
                          } else {
                            setSelectedCategories(selectedCategories.filter((category) => category !== item));
                          }
                        }}
                      />
                      <span>{item}</span>
                    </label>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
