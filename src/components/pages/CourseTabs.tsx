"use client";

import { useState } from "react";
import ActiveCurriculum from "../ui/ActiveCurriculum";

const tabs = ["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"];

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <div className="flex justify-around items-center w-[100%] px-2">
        <div className="p-3 bg-gray-100 lg:w-[55%] rounded-xl my-4 ">
          <ul className="flex gap-2 mb-4 w-full justify-between rounded-xl">
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
        </div>
        <div className="lg:block hidden" ></div>
      </div>
    </div>
  );
}
