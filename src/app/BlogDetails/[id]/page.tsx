import FormComment from "@/components/ui/FormComment";
import { BlogType } from "@/modules/Blog/types/type";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFacebookF, FaInstagram, FaPinterestP, FaUser, FaYoutube } from "react-icons/fa6";
import { IoIosArrowForward, IoIosCalendar } from "react-icons/io";

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
      <div>
        <div className="flex items-center gap-1 flex-wrap bg-gray-100 py-2 px-4 text-gray-500">
          <Link href="/">Homepage</Link>
          <IoIosArrowForward />
          <Link href="/Blog">blog</Link>
          <IoIosArrowForward />
          <p>{blog.title}</p>
        </div>
        <div className="flex justify-center gap-6 py-6">
          <div className="flex flex-col lg:w-[75%] w-[90%] gap-3 ">
            <h1 className="text-4xl">{blog.title}</h1>
            <div className="flex items-center gap-3 ">
              <div className="flex items-center gap-2 ">
                <p className="flex items-center gap-2 ">
                  <IoIosCalendar className="text-orange-400 text-xl font-bold" />
                  {blog.data}
                </p>
                <p className="flex items-center gap-2">
                  <FaUser className="text-orange-400 text-md font-bold" />
                  {blog.Photography}
                </p>
              </div>
            </div>
            <div>
              <Image className=" w-full rounded-b-[5%] " src={blog.img} alt={blog.title} width={650} height={500} />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
                <br /> donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar <br />
                sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie <br />
                dignissim sed volutpat feugiat vel enim eu turpis imperdiet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, <br />
                donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar <br /> sit ultrices mi ut eleifend luctus ut. Id sed
                faucibus bibendum augue id cras purus.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <p>Tags :</p>
              {["Free couses", "Marketing", "Idea", "LMS", "LearnPress", "Instructor"].map((tags) => (
                <div key={tags} className="p-1 py-3 ">
                  <span className="p-2 border-[1px] border-gray-400 rounded text-gray-500 cursor-pointer hover:border-gray-800 hover:text-gray-900">{tags}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <p>Share :</p>
              {[<FaFacebookF key="" />, <FaPinterestP key="" />, <FaInstagram key="" />, <FaYoutube key="" />].map((Share, idx) => (
                <div key={idx} className="p-1 py-3 flex items-center">
                  <a href="#" className="border-gray-400 rounded text-gray-500 cursor-pointer hover:border-gray-800 hover:text-gray-900">
                    {Share}
                  </a>
                </div>
              ))}
            </div>
            <FormComment id={blog.id} />
          </div>
          <div className="hidden lg:block w-[17.5%]">
            <aside className="w-full py-4 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                {["Commercial", "Office", "Shop", "Educate", "Academy", "Single family home"].map((category) => (
                  <div key={category} className="flex items-center justify-between text-gray-600">
                    <p>{category}</p>
                    <p>15</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap">
                  {["Free couses", "Marketing", "Idea", "LMS", "LearnPress", "Instructor"].map((tags) => (
                    <div key={tags} className="p-1 py-3">
                      <span className="p-2 border-[1px] border-gray-400 rounded text-gray-500 cursor-pointer hover:border-gray-800 hover:text-gray-900">{tags}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
