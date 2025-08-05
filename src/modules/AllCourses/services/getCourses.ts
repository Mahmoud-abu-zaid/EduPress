import { DataCorurses } from "@/modules/AllCourses/types/typeCourses";

export async function getCourses(): Promise<DataCorurses[]> {
  const res = await fetch("https://edupress-neon.vercel.app/json/allCourses.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}
