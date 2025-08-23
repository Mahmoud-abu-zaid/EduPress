"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQs({ background, taxtColor }: { background: string; taxtColor: string }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={`${background} ${taxtColor}  py-2 px-2 rounded-md`}>
        <button onClick={() => setActive((state) => !state)} className={`cursor-pointer w-full py-2 ${active ? "text-main-color" : ""}`}>
          <div className={`flex items-center gap-1 ${active ? "text-main-color" : "text-color-black"}`}>
            <p>{active ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
            <p>What Does Royalty Free Mean?</p>
          </div>
        </button>

        {active && (
          <div>
            <p className="text-sm text-color-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis <br />
              dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. <br />
              Varius tellus justo odio parturient mauris curabitur lorem in.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
