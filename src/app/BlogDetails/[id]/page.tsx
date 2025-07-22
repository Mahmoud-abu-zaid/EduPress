import { BlogType } from "@/features/Blog/types/type";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

async function getBlog(id: string) {
  const response = await fetch("https://edupress-neon.vercel.app/json/blog.json", {
    cache: "no-store",
  });

  const blogs: BlogType[] = await response.json();

  return blogs.find((blog) => blog.id === id) || null;
}

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const blog = await getBlog((await params).id);

  if (!blog) return notFound();

  return (
    <>
      <div className="flex items-center gap-1 flex-wrap bg-gray-100 py-2 px-4 text-gray-500">
        <Link href="/">Homepage</Link>
        <IoIosArrowForward />
        <Link href="/Blog">blog</Link>
        <IoIosArrowForward />
        <p>{blog.title}</p>
      </div>

      <div>
        <div></div>
      </div>
    </>
  );
}
