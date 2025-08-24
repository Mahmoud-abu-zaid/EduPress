"use client";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function ActiveCurriculum() {
  const [activeCurriculum, setActiveCurriculum] = useState(false);
  return (
    <>
      <div className="bg-color-white py-3 rounded px-2 mt-3 cursor-pointer">
        <button onClick={() => setActiveCurriculum((prev) => !prev)} className={`w-[100%] cursor-pointer transition ${activeCurriculum == true ? " text-amber-500" : ""}`}>
          <div className="flex justify-between flex-wrap w-full px-2">
            <div className="flex items-center gap-3">
              <p className="">{activeCurriculum == true ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
              <p className="text-color-block">Lessons with video content</p>
            </div>
            <div className="flex gap-4 px-2">
              <span>5 Lesson</span>
              <span>45 Mins</span>
            </div>
          </div>
        </button>
        {activeCurriculum && (
          <ul>
            <li className="py-3 px-2 hover:bg-fourth-color-gray-bg rounded">
              <div className="flex items-center gap-1">
                <p className="text-second-color-text">
                  <MdContentCopy />
                </p>
                <p className="px-2 text-color-block">Lessons with video content</p>
              </div>
            </li>
            <li className="py-3 px-2 hover:bg-fourth-color-gray-bg rounded">
              <div className="flex items-center gap-1">
                <p className="text-second-color-text">
                  <MdContentCopy />
                </p>
                <p className="px-2 text-color-block">Lessons with video content</p>
              </div>
            </li>
            <li className="py-3 px-2 hover:bg-fourth-color-gray-bg rounded">
              <div className="flex items-center gap-1">
                <p className="text-second-color-text">
                  <MdContentCopy />
                </p>
                <p className="px-2 text-color-block">Lessons with video content</p>
              </div>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
