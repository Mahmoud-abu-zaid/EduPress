"use client";
import Link from "next/link";
import Image from "next/image";
import { FaList } from "react-icons/fa6";
import { BlogType } from "../types/type";
import { useEffect, useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { IoGrid, IoSearch } from "react-icons/io5";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

export default function Blog({ data }: { data: BlogType[] }) {
  const [search, setSearch] = useState("");

  const [sliderIndex, setSliderIndex] = useState(1);

  const [isGridView, setIsGridView] = useState(true);

  const filteredData = data.filter((blog) => {
    const matchesSearch = blog.title?.toLowerCase().includes(search.toLowerCase()) || blog.Photography?.toLowerCase().includes(search.toLowerCase());

    return matchesSearch;
  });

  const blogsPage = 6;

  const startIndex = (sliderIndex - 1) * blogsPage;

  const endIndex = startIndex + blogsPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / blogsPage);

  useEffect(() => {
    setSliderIndex(1);
  }, [search]);

  return (
    <>
      <FadeInOnScroll>
        <div className="container mx-auto sm:px-8 px-2 flex justify-center gap-6">
          <div className="flex flex-col  lg:w-[75%] w-[90%] gap-3">
            <div className="flex sm:justify-between justify-center flex-wrap items-center py-5 px-5 w-full gap-5">
              <div>
                <h3 className="text-xl text-color-black">All Courses</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border-b-2 border-color-black py-1">
                  <input type="text" placeholder="Search blogs..." className=" px-2 py-2 outline-0" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <IoSearch />
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <button onClick={() => setIsGridView(true)} className={`px-2 py-1 rounded-md cursor-pointer text-2xl ${isGridView ? "text-main-color" : "text-second-color-text"}`}>
                    <IoGrid />
                  </button>

                  <button onClick={() => setIsGridView(false)} className={`px-2 py-1 rounded-md cursor-pointer text-2xl ${!isGridView ? "text-main-color" : "text-second-color-text"}`}>
                    <FaList />
                  </button>
                </div>
              </div>
            </div>

            {paginatedData.length === 0 ? (
              <div className="flex justify-center items-center w-full h-96">
                <div className="text-third-color text-lg py-10 flex flex-col justify-center items-center gap-3">
                  <Image src="/img/not-found.webp" alt=" icon not found searchnp" width={250} height={100} />
                  <p>No blogs match your search.</p>
                </div>
              </div>
            ) : (
              <div className={`grid gap-10 justify-center pb-8 ${isGridView ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                {paginatedData.map((blog) => (
                  <div key={blog.id} className={`bg-color-white rounded-3xl shadow-lg overflow-hidden flex hover:scale-105 transition duration-300 ease-in-out ${isGridView ? "flex-col" : "flex-col sm:flex-row"}`}>
                    <Link href={`/BlogDetails/${blog.id}`} className={isGridView ? "" : "w-full sm:w-1/3"}>
                      <div className="relative h-full">
                        <Image src={blog.img} alt={blog.title} className={`w-full h-full`} width={400} height={250} />
                        <div className="text-xs absolute top-0 left-3 bg-color-black px-4 py-2 text-color-white mt-3 mr-3 rounded-lg">{blog.Photography}</div>
                        <div className={`absolute inset-0 bg-gray-800 opacity-20 hover:opacity-0 transition-opacity ease-in ${isGridView ? "" : " rounded-tr-2xl"}`}></div>
                      </div>
                    </Link>

                    <div className={`flex flex-col justify-between ${isGridView ? "p-3" : "p-4 w-full sm:w-2/3"}`}>
                      <div>
                        <Link href={`/BlogDetails/${blog.id}`} className="font-medium sm:text-lg hover:text-amber-500 transition duration-300 inline-block mb-2">
                          {blog.title}
                        </Link>
                        <p className="flex items-center gap-2 ">
                          <IoIosCalendar className="text-orange-400 text-xl font-bold" />
                          {blog.data}
                        </p>
                        <p className="text-text-third-color pb-3">{blog.discription}</p>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-300 flex-wrap gap-4">
                        <Link href={`/BlogDetails/${blog.id}`} className="text-sm whitespace-nowrap">
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
          <div className="hidden lg:block p-4 w-[17.5%]">
            <aside className="w-full py-4 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                {["Commercial", "Office", "Shop", "Educate", "Academy", "Single family home"].map((category) => (
                  <div key={category} className="flex items-center justify-between text-second-color-text">
                    <p>{category}</p>
                    <p>15</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap">
                  {["Free couses", "Marketing", "Idea", "LMS", "LearnPress", "Instructor"].map((tags) => (
                    <div key={tags} className="p-1 py-3">
                      <span className="p-2 border-[1px] text-third-color rounded text-text-third-color cursor-pointer hover:border-second-color-text hover:text-color-black">{tags}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
