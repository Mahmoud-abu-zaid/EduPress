import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQs() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="bg-white py-2 px-2 rounded-md">
        <button onClick={() => setActive((state) => !state)} className={`cursor-pointer w-full  py-2 ${active ? "text-amber-500" : ""}`}>
          <div className="flex justify-between items-center">
            <div>
              <p >What Does Royalty Free Mean?</p>
            </div>
            <div>
              <p>{active ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
            </div>
          </div>
        </button>

        {active && (
          <div>
            <p className="text-sm">
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
