import { DataCorurses } from "@/types/typeCourses";

export default async function AllCourses() {
  const response =await fetch("http://localhost:3000/json/allCourses.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch featured courses");
  }

  const data: DataCorurses[] = await response.json();

  return (
    <>
      <div>
        <div className="flex justify-between items-center py-5">
          <div>
            <h3 className="text-xl">All Courses</h3>
          </div>
          <div>
            <input type="text" className=" border-2" />
          </div>
        </div>
        <div>
          <div>
            {data.map((course: DataCorurses) => (
              <div key={course.id} className="border-2 p-5 mb-5 rounded-lg">
                {course.by}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
