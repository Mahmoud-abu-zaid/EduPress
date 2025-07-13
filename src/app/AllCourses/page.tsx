import CourseList from "@/features/AllCourses/components/CourseList";
import { getCourses } from "@/features/AllCourses/services/getCourses";

export default async function AllCourses() {
  const data = await getCourses();

  return (
    <>
      <div className="flex justify-center  gap-6">
        <div className="flex flex-col  w-[80%] gap-3 ">
          <CourseList data={data} />
        </div>

        <div className="hidden lg:block px-4 w-[15%]">
          <aside className="w-full py-4 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Course Category</h3>
              {["Commercial", "Office", "Shop", "Educate", "Academy", "Single family home", "Studio", "University"].map((item) => (
                <div key={item} className="flex justify-between items-center mb-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Instructors</h3>
              {["Kenny White", "John Doe"].map((item) => (
                <div key={item} className="flex justify-between items-center mb-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Price</h3>
              {["All", "Free", "Paid"].map((item) => (
                <div key={item} className="flex justify-between items-center mb-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Review</h3>
              {Array.from({ length: 5 }, (_, i) => 5 - i).map((stars) => (
                <div key={stars} className="flex justify-between items-center mb-1">
                  <label className="flex items-center gap-1 text-yellow-400">
                    <input type="checkbox" />
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j}>{j < stars ? "★" : "☆"}</span>
                    ))}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Level</h3>
              {["All levels", "Beginner", "Intermediate", "Expert"].map((item) => (
                <div key={item} className="flex justify-between items-center mb-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
