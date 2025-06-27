import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

export default function Rating() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>
            <p>90%</p>
          </div>
          <div className="w-[100%] h-2 relative bg-gray-300 rounded">
            <div className=" w-[90%] h-2 absolute rounded bg-amber-400"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar className="text-lg" />
          </div>
          <div>
            <p className="px-1">5%</p>
          </div>
          <div className="w-[100%] h-2 relative bg-gray-300 rounded">
            <div className=" w-[5%] h-2 absolute rounded bg-amber-400"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar className="text-lg" />

            <CiStar className="text-lg" />
          </div>
          <div>
            <p className="px-1">2%</p>
          </div>
          <div className="w-[100%] h-2 relative bg-gray-300 rounded">
            <div className=" w-[2%] h-2 absolute rounded bg-amber-400"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar className="text-lg" />

            <CiStar className="text-lg" />
          </div>
          <div>
            <p className="px-1">2%</p>
          </div>
          <div className="w-[100%] h-2 relative bg-gray-300 rounded">
            <div className=" w-[2%] h-2 absolute rounded bg-amber-400"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            <FaStar />
            <FaStar />
            <CiStar className="text-lg" />
            <CiStar className="text-lg" />
            <CiStar className="text-lg" />
          </div>
          <div>
            <p className="px-1">1%</p>
          </div>
          <div className="w-[100%] h-2 relative bg-gray-300 rounded">
            <div className=" w-[1%] h-2 absolute rounded bg-amber-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}
