"use client";

import FAQs from "../ui/FAQs";
import Image from "next/image";
import { useState } from "react";
import Rating from "../ui/Rating";
import { CiStar } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { IoIosTime } from "react-icons/io";
import { MdFileCopy } from "react-icons/md";
import ActiveCurriculum from "../ui/ActiveCurriculum";
import { FaFacebookF, FaInstagram, FaPinterestP, FaStar, FaXTwitter, FaYoutube } from "react-icons/fa6";

interface DateForComment {
  name: string;
  email: string;
  comment: string;
}
const tabs = ["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"];

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("Overview");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DateForComment>();

  function onSubmit() {}
  return (
    <div className="">
      <div className="flex justify-around items-center w-[100%] px-2">
        <div className="p-3 bg-gray-100 lg:w-[55%] w-full rounded-xl my-4 ">
          <ul className="flex gap-2 mb-4 sm:w-full justify-between md:flex-nowrap flex-wrap rounded-xl">
            {tabs.map((tab) => (
              <li key={tab} onClick={() => setActiveTab(tab)} className={`cursor-pointer py-2 px-5 ${activeTab === tab ? "bg-gray-200 text-amber-500 font-semibold rounded-xl" : "text-black"}`}>
                {tab}
              </li>
            ))}
          </ul>

          {activeTab === "Overview" && (
            <div>
              <p className="text-sm leading-6 px-1">
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress <br />
                LMS Plugins which can be used to easily create & sell courses online. You can create a course <br />
                curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. <br />
                Having this WordPress LMS Plugin, now you have a chance to quickly and easilycreate education, <br />
                online school, online-course websites with no coding knowledge required.
              </p>

              <p className="text-sm leading-6 px-1 pt-4">
                LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that <br />
                definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing <br />
                it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons <br />
                to empower its core system.How to use WPML Add-on for LearnPress? <br />
                No comments yet! You be the first to comment.
              </p>
            </div>
          )}
          {activeTab === "Curriculum" && (
            <div className="px-2">
              <p className="px-1 text-sm">
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress <br />
                LMS Plugins which can be used to easily create & sell courses online.
              </p>

              <div>
                <ActiveCurriculum />
                <ActiveCurriculum />
                <ActiveCurriculum />
                <ActiveCurriculum />
                <ActiveCurriculum />
              </div>
            </div>
          )}
          {activeTab === "Instructor" && (
            <div>
              <div className="flex gap-3">
                <div>
                  <Image className="w-[140px] pb-2" src="/img/Frame 3871.png" alt="" width={200} height={22} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-lg">ThimPress</h3>
                  <p className="text-sm">
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is <br />
                    one of the best WordPress LMS Plugins which can be used to easily create & <br />
                    sell courses online.
                  </p>
                  <p className=" flex items-center gap-2 text-gray-400">
                    <IoIosTime className="text-amber-500" />
                    20 Week
                  </p>
                  <p className=" flex items-center gap-2 text-gray-400">
                    <MdFileCopy className="text-amber-500" />
                    156 Lessons
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm py-2">
                  LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress <br />
                  LMS Plugins which can be used to easily create & sell courses online.
                </p>
                <div className="flex items-center gap-3">
                  <p>Follow:</p>
                  <a href="#">
                    <FaFacebookF className="hover:text-amber-500 transition out-in" />
                  </a>
                  <a href="#">
                    <FaPinterestP className="hover:text-amber-500 transition out-in" />
                  </a>
                  <a href="#">
                    <FaXTwitter className="hover:text-amber-500 transition out-in" />
                  </a>
                  <a href="#">
                    <FaInstagram className="hover:text-amber-500 transition out-in" />
                  </a>
                  <a href="#">
                    <FaYoutube className="hover:text-amber-500 transition out-in" />
                  </a>
                </div>
              </div>
            </div>
          )}
          {activeTab === "FAQs" && (
            <div className="flex flex-col gap-3">
              <FAQs />
              <FAQs />
              <FAQs />
              <FAQs />
            </div>
          )}
          {activeTab === "Reviews" && (
            <div>
              <h3 className="text-2xl">Comments</h3>
              <div className="flex items-center gap-2 pt-2">
                <div>
                  <p className="text-3xl">4.0</p>
                </div>
                <div>
                  <div className="flex items-center text-amber-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-700">based on 146,951 ratings</p>
                  </div>
                </div>
              </div>
              <div>
                <Rating />
              </div>
            </div>
          )}
        </div>

        <div className="lg:block hidden"></div>
      </div>

      <div className="flex w-[85%] justify-around px-2 pb-4">
        <div className="lg:w-[51%] w-full px-3">
          <h3 className="text-2xl">Leave a comment</h3>
          <p>Your email address will not be published. Required fields are marked *</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="flex gap-2 mt-2">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name*"
                  {...register("name", {
                    required: "Enter your name",
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,20}$/,
                      message: "Name must be 2-15 letters",
                    },
                    maxLength: {
                      value: 20,
                      message: "The maximum character limit is 20 char",
                    },
                    minLength: {
                      value: 2,
                      message: "The minimum number of characters is 2",
                    },
                  })}
                  className=" border-[1px] block border-gray-400 px-1 py-1 rounded-md w-full"
                />
                <p className="text-red-500 text-sm">{typeof errors?.name?.message === "string" ? errors?.name?.message : ""}</p>
              </div>
              <div className="w-full">
                <input
                  type="email"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Email*"
                  className=" border-[1px] border-gray-400 px-1 py-1 rounded-md w-full"
                />
                <p className="text-red-500 text-sm">{typeof errors?.email?.message === "string" ? errors?.email?.message : ""}</p>
              </div>
            </div>
            <div>
              <textarea
                placeholder="Comment"
                {...register("comment", {
                  required: "Enter your message",
                  maxLength: {
                    value: 100,
                    message: "The maximum character limit is 100 char",
                  },
                  minLength: {
                    value: 20,
                    message: "The minimum number of characters is 20",
                  },
                })}
                className=" border-[1px] border-gray-400 px-1 py-1 rounded-md w-full"
              ></textarea>
              <p className="text-red-500 text-sm">{typeof errors?.comment?.message === "string" ? errors?.comment?.message : ""}</p>
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <p>Save my name, email in this brower for the next time I comment</p>
              </div>
              <button type="submit" className="py-2 px-3 bg-amber-500 text-white mt-3 rounded-3xl cursor-pointer">
                Posts comment
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
