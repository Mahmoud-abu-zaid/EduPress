import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ImStatsBars } from "react-icons/im";
import BtnLink from "@/components/ui/BtnLink";
import { DataCorurses } from "@/features/AllCourses/types/typeCourses";
import { MdFileCopy, MdQuiz } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosTime } from "react-icons/io";
import CourseTabs from "@/features/CourseTabs/components/CourseTabs";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const courseId = (await params).id;
  const course = await getCourse(courseId);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course does not exist.",
    };
  }
  return {
    title: course.title,
    description: `Learn ${course.title} with ${course.by}. Duration: ${course.time} weeks. Price: ${course.priceAfter}`,
    openGraph: {
      title: course.title,
      description: `Learn ${course.title} with ${course.by}. Duration: ${course.time} weeks. Price: ${course.priceAfter}`,
      images: [
        {
          url: course.img,
          width: 800,
          height: 600,
          alt: course.title,
        },
      ],
    },
  };
}

async function getCourse(id: string) {
  const response = await fetch("https://edupress-neon.vercel.app/json/allCourses.json", {
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
        <Link href="/allCourses">Courses</Link>
        <IoIosArrowForward />
        <p>{course.title}</p>
      </div>

      <FadeInOnScroll>
        <div className="bg-black h-[220px] flex items-center justify-around flex-wrap lg:flex-nowrap px-3">
          <div className="flex flex-col gap-2 py-9">
            <div className="flex items-center gap-4">
              <p className="py-2 px-3 bg-gray-600 text-white w-fit rounded-lg">{course.Photography}</p>
              <p className="text-white mb-2 sm:text-xl text-sm">
                <span className="text-gray-500 sm:text-xl text-md">By</span> {course.by}
              </p>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white">{course.title}</h1>
            </div>

            <div className="flex items-center flex-wrap sm:gap-4 gap-1">
              <p className=" flex items-center gap-2 text-gray-400 text-sm">
                <IoIosTime className="text-amber-500" /> {course.time} Week
              </p>
              <p className=" flex items-center gap-2 text-gray-400 text-sm">
                <RiGraduationCapFill className="text-amber-500" /> {course.students} Students
              </p>

              <p className=" flex items-center gap-2 text-gray-400 text-sm">
                <MdQuiz className="text-amber-500" />
                {course.Quizzes} Quizzes
              </p>

              <p className=" flex items-center gap-2 text-gray-400 text-sm">
                <ImStatsBars className="text-amber-500" /> {course.levels}
              </p>

              <p className=" flex items-center gap-2 text-gray-400 text-sm">
                <MdFileCopy className="text-amber-500" />
                {course.Lessons} Lessons
              </p>
            </div>
          </div>

          <div className="courses-start lg:pt-27 mt-[-20] md:mt-0 lg:w-fit">
            <div className="bg-white rounded-t-3xl rounded-b-2xl shadow mx-2">
              <Image src={course.img} alt={course.title} className=" md:w-[290px]  h-auto rounded w-[400px]" width={800} height={300} />
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
        <div className="course-tabs sm:pt-55 lg:pt-0 ">
          <CourseTabs id={course.id} />
        </div>
      </FadeInOnScroll>
    </div>
  );
}
