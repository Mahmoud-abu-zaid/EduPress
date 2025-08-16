import BtnLink from "../ui/BtnLink";
import Image from "next/image";

export default function GrowSkils() {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap ">
        <div className="md:flex hidden">
          <Image src="/img/Vector (3).png" alt="" height={450} width={400} className="p-6" />
        </div>
        <div className="flex flex-col gap-3 py-20 px-5">
          <h2 className="text-3xl font-semibold text-color-black">
            Grow us your skill <br />
            with LearnPress LMS
          </h2>
          <p className="text-second-color-text ">
            We denounce with righteous indignation and dislike men who are <br />
            so beguiled and demoralized that cannot trouble.
          </p>
          <div>
            <p>
              <span className="text-green-text">✔ </span>
              <span className="text-color-black"> Certification</span>
            </p>
            <p>
              <span className="text-green-text">✔ </span>
              <span className="text-color-black"> Certification</span>
            </p>
            <p>
              <span className="text-green-text">✔ </span>
              <span className="text-color-black"> Certification</span>
            </p>
            <p>
              <span className="text-green-text">✔ </span>
              <span className="text-color-black"> Certification</span>
            </p>
          </div>
          <div className="py-3">
            <BtnLink title="Explorer course" path="" />
          </div>
        </div>
      </div>
    </>
  );
}
