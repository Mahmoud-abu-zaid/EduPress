"use client";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function ActiveCurriculum() {
  const [activeCurriculum, setActiveCurriculum] = useState(false);

  return (
    <>
      <div className="bg-white py-3 rounded px-2 mt-3">
        <button onClick={() => setActiveCurriculum((prev) => !prev)} className={`w-[100%] transition ${activeCurriculum == true ? " text-amber-500" : ""}`}>
          <div className="flex justify-between w-full px-1">
            <div className="flex items-center gap-3">
              <p>{activeCurriculum == true ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
              <p>Lessons with video content</p>
            </div>
            <div className="flex gap-4 px-2">
              <span>5 Lesson</span>
              <span>45 Mins</span>
            </div>
          </div>
        </button>
        {activeCurriculum && (
          <ul>
            <li className="py-3 px-1 hover:bg-gray-50 rounded">
              <div className="flex items-center gap-1">
                <p className="text-gray-700">
                  <MdContentCopy />
                </p>
                <p className="px-2">Lessons with video content</p>
              </div>
            </li>
            <li className="py-3 px-1 hover:bg-gray-50  rounded">
              <div className="flex items-center gap-1">
                <p className="text-gray-700">
                  <MdContentCopy />
                </p>
                <p className="px-2">Lessons with video content</p>
              </div>
            </li>
            <li className="py-3 px-1 hover:bg-gray-50  rounded">
              <div className="flex items-center gap-1">
                <p className="text-gray-700">
                  <MdContentCopy />
                </p>
                <p className="px-2">Lessons with video content</p>
              </div>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
