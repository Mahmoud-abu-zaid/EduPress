import CourseList from "@/features/AllCourses/components/CourseList";
import { getCourses } from "@/features/AllCourses/services/getCourses";

export default async function AllCourses() {
  const data = await getCourses();

  return (
    <>
      <CourseList data={data} />
    </>
  );
}
