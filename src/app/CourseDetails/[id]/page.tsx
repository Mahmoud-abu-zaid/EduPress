import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ImStatsBars } from "react-icons/im";
import BtnLink from "@/components/ui/BtnLink";
import { DataCorurses } from "@/modules/AllCourses/types/typeCourses";
import { MdFileCopy, MdQuiz } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosTime } from "react-icons/io";
import CourseTabs from "@/modules/CourseTabs/components/CourseTabs";
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
    <div>
      <div>
        <div className="flex items-center gap-1 flex-wrap bg-gray-100 py-2 px-4 text-second-color-text">
          <Link href="/">Homepage</Link>
          <IoIosArrowForward />
          <Link href="/AllCourses">Courses</Link>
          <IoIosArrowForward className="hidden sm:block" />
          <p className="text-third-color hidden sm:block">{course.title}</p>
        </div>
      </div>

      <FadeInOnScroll>
        <div className="flex flex-col">
          <div className="bg-color-black lg:h-[220px] flex lg:px-0 xl:px-20 xl:justify-between 3xl:justify-around justify-around items-center gap-3 flex-wrap lg:flex-nowrap p-5">
            <div className="flex flex-col gap-2 py-2">
              <div className="flex items-center gap-3 ">
                <p className="py-2 px-3 bg-second-color-text text-color-white w-fit rounded-lg">{course.Photography}</p>
                <p className="text-color-white mb-2 sm:text-xl text-sm">
                  <span className="text-second-color-text sm:text-xl text-md">By</span> {course.by}
                </p>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-color-white">{course.title}</h1>
              </div>

              <div className="flex items-center flex-wrap sm:gap-4 gap-1">
                <p className=" flex items-center gap-2 text-third-color text-sm">
                  <IoIosTime className="text-main-color" /> {course.time} Week
                </p>
                <p className=" flex items-center gap-2 text-third-color text-sm">
                  <RiGraduationCapFill className="text-main-color" /> {course.students} Students
                </p>

                <p className=" flex items-center gap-2 text-third-color text-sm">
                  <MdQuiz className="text-main-color" />
                  {course.Quizzes} Quizzes
                </p>

                <p className=" flex items-center gap-2 text-third-color text-sm">
                  <ImStatsBars className="text-main-color" /> {course.levels}
                </p>

                <p className=" flex items-center gap-2 text-third-color text-sm">
                  <MdFileCopy className="text-main-color" />
                  {course.Lessons} Lessons
                </p>
              </div>
            </div>

            <div className="lg:w-fit pt-2 lg:pt-25 ">
              <div className="bg-color-white rounded-t-3xl rounded-b-2xl shadow mx-2 ">
                <Image src={course.img} alt={course.title} className=" md:w-[290px]  h-auto rounded w-[400px]" width={800} height={300} />
                <div className="flex justify-center items-center gap-4 py-7">
                  <div className="flex items-center gap-2">
                    <p className="text-second-color-text text-sm line-through">{course.priceBefore}</p>
                    <p className="text-red-text text-md font-medium">{course.priceAfter}</p>
                    <p className="text-green-text">{course.priceFree}</p>
                  </div>
                  <div>
                    <BtnLink title="Start Now" path="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <CourseTabs id={course.id} />
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}
