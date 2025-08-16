"use client";
import Link from "next/link";
import Image from "next/image";
import { FaList } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { useEffect, useState } from "react";
import { ImStatsBars } from "react-icons/im";
import { IoGrid, IoSearch } from "react-icons/io5";
import { MdFileCopy, MdQuiz } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { DataCorurses } from "@/modules/AllCourses/types/typeCourses";

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
        <div className=" container mx-auto sm:px-8 px-4 flex justify-center gap-6">
          <div className="flex flex-col lg:w-[75%] w-[90%] gap-3">
            <div className="flex sm:justify-between justify-center flex-wrap items-center py-5 px-5 w-full gap-5">
              <div>
                <h3 className="text-xl text-color-black">All Courses</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2  px-1 py-1 border-b-2 border-color-black">
                  <input type="text" placeholder="Search courses..." className=" px-2 py-2 outline-0" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <IoSearch />
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <button onClick={() => setIsGridView(true)} className={`px-2 py-1 rounded-md cursor-pointer text-2xl ${isGridView ? "text-amber-400" : "text-gray-700"}`}>
                    <IoGrid />
                  </button>

                  <button onClick={() => setIsGridView(false)} className={`px-2 py-1 rounded-md cursor-pointer text-2xl ${!isGridView ? "text-amber-400" : "text-gray-700"}`}>
                    <FaList />
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
                  <div
                    key={course.id}
                    className={`bg-color-white hover:scale-105 transition duration-300 ease-in-out rounded-3xl shadow-lg overflow-hidden flex  ${isGridView ? "flex-col" : "flex-col sm:flex-row"}`}
                  >
                    <Link href={`/CourseDetails/${course.id}`} className={isGridView ? "" : "w-full sm:w-1/3"}>
                      <div className="relative h-full">
                        <Image src={course.img} alt={course.title} className={`w-full h-full`} width={400} height={250} />
                        <div className="text-xs absolute top-0 left-3 bg-black px-4 py-2 text-color-white mt-3 mr-3 rounded-lg">{course.Photography}</div>
                        <div className={`absolute inset-0 bg-color-black opacity-20 hover:opacity-0 transition-opacity ease-in ${isGridView ? "" : " rounded-tr-2xl"}`}></div>
                      </div>
                    </Link>

                    <div className={`flex flex-col justify-between sm:p-4 p-3  ${isGridView ? "py-4" : "w-full sm:w-2/3"}`}>
                      <div>
                        <p className="text-gray-500 text-sm">By {course.by}</p>
                        <Link href={`/CourseDetails/${course.id}`} className="font-medium text-md sm:text-lg text-color-black hover:text-main-color transition duration-300 inline-block mb-2">
                          {course.title}
                        </Link>

                        <div className="flex gap-3 flex-wrap mb-2">
                          <p className="ml-1 flex items-center gap-2 text-third-color sm:text-md text-sm">
                            <IoIosTime className="text-main-color" /> {course.time} Week
                          </p>
                          <p className="ml-1 flex items-center gap-2 text-third-color sm:text-md text-sm">
                            <RiGraduationCapFill className="text-main-color" /> {course.students} Students
                          </p>
                          {isGridView === false && (
                            <div className="sm:flex hidden items-center gap-2 text-third-color flex-wrap">
                              <p className="ml-1 flex items-center gap-2 text-third-color sm:text-md text-sm">
                                <MdQuiz className="text-main-color" />
                                {course.Quizzes} Quizzes
                              </p>

                              <p className="ml-1 flex items-center gap-2 text-third-color sm:text-md text-sm">
                                <ImStatsBars className="text-main-color" /> {course.levels}
                              </p>

                              <p className="ml-1 flex items-center gap-2 text-third-color sm:text-md text-sm">
                                <MdFileCopy className="text-main-color" />
                                {course.Lessons} Lessons
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-fourth-color-gray-bg flex-wrap gap-4">
                        <div className="flex flex-row gap-4">
                          <span className="text-xs text-second-color-text">
                            <del>{course.priceBefore}</del>
                          </span>
                          <div className="flex flex-col">
                            <span className="text-sm text-red-text">{course.priceAfter}</span>
                            <span className="text-sm text-green-text">{course.priceFree}</span>
                          </div>
                        </div>
                        <Link href={`/CourseDetails/${course.id}`} className="text-sm whitespace-nowrap text-color-black">
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
                  onClick={() => {
                    setSliderIndex(index + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`px-5 py-3 cursor-pointer rounded-4xl shadow hover:bg-color-black hover:text-color-white transition duration-300 ${
                    sliderIndex === index + 1 ? "bg-color-black text-color-white" : "bg-hover-butten-gray text-second-color-text"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block p-4 w-[25%]">
            <aside className="w-full py-4 space-y-6 sticky top-0 hover:max-h-screen hover:overflow-y-auto ">
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
