import { BlogType } from "../types/typeBlog";

export default async function getBlog(): Promise<BlogType[]> {
  const response = await fetch("https://edupress-neon.vercel.app/json/blog.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
}
