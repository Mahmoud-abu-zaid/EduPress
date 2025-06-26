import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BtnLink from "@/components/ui/BtnLink";
import { DataCorurses } from "@/types/typeCourses";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosTime } from "react-icons/io";
import CourseTabs from "@/components/pages/CourseTabs";
// import { ImStatsBars } from "react-icons/im";
// import { MdFileCopy, MdQuiz } from "react-icons/md";

async function getCourse(id: string) {
  const response = await fetch("https://edupress-neon.vercel.app/json/featured.json", {
    cache: "no-store",
  });

  const courses: DataCorurses[] = await response.json();
  return courses.find((course) => course.id === id) || null;
}

export default async function CourseDetails({ params }: { params: Promise<{ id: string }> }) {
  
  const course = await getCourse((await params).id);

  if (!course) return notFound();
  return (
    <div className="">
      <div className="flex items-center gap-1 flex-wrap bg-gray-100 py-2 px-4 text-gray-500">
        <Link href="/">Homepage</Link>
        <IoIosArrowForward />
        <Link href="/AllCourses">Courses</Link>
        <IoIosArrowForward />
        <Link href={`/FeaturedCourses/${course.id}`}>{course.title}</Link>
      </div>

      <div className="bg-black h-[220px] flex items-center justify-around flex-wrap lg:flex-nowrap px-3">
        <div className="flex flex-col gap-2 py-9">
          <div className="flex items-center gap-4">
            <p className="py-2 px-3 bg-gray-600 text-white w-fit rounded-lg">{course.Photography}</p>
            <p className="text-white mb-2">
              <span className="text-gray-500">By</span> {course.by}
            </p>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl text-white">{course.title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <p className=" flex items-center gap-2 text-gray-400">
              <IoIosTime className="text-amber-500" /> {course.time} Week
            </p>
            <p className=" flex items-center gap-2 text-gray-400">
              <RiGraduationCapFill className="text-amber-500" /> {course.students} Students
            </p>
            {/*<p className=" flex items-center gap-2 text-gray-400">
              <ImStatsBars className="text-amber-500" /> {course.levels}
            </p>
            <p className=" flex items-center gap-2 text-gray-400">
              <MdFileCopy className="text-amber-500" />
              {course.Lessons}
            </p>
            <p className=" flex items-center gap-2 text-gray-400">
              <MdQuiz className="text-amber-500" />
              {course.Quizzes}
            </p>
            */}
          </div>
        </div>

        <div className="lg:pt-27  mt-[-20] md:mt-0 lg:w-fit">
          <div className="bg-white rounded-t-3xl rounded-b-2xl shadow">
            <Image src={course.img} alt={course.title} className=" lg:w-[290px]  h-auto rounded w-[100%]" width={800} height={300} />
            <div className="flex justify-center items-center gap-4 py-7">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 line-through">{course.priceBefore}</p>
                <p className="text-red-500 text-lg font-medium">{course.priceAfter}</p>
                <p className="text-green-600">{course.priceFree}</p>
              </div>
              <div>
                <BtnLink title="Start Now" path="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:pt-75 pt-70 lg:pt-0">
        <CourseTabs />
      </div>
    </div>
  );
}
