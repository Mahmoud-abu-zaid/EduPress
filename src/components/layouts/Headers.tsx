import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Header() {
  const nestedNav = [
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About Us" },
    { path: "/faq", label: "FAQ" },
  ];
  const nav = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/Page", label: "Page", icon: <IoIosArrowDown />, nestedNav: nestedNav },
    { path: "/learnPress", label: "LearnPress Add-On" },
    { path: "/premium", label: "Premium Theme" },
  ];

  return (
    <>
      <div>
        <nav className="flex justify-evenly items-center bg-white p-4">
          <Link href="/" className="flex items-center gap-3 text-black text-2xl font-bold">
            <Image src="/img/Screenshot 2025-06-07 093836.png" alt="EduPress Logo" width={40} height={40} />
            EduPress
          </Link>

          <div>
            <div className="flex items-center">
              {nav.map((li) => (
                <li key={li.path} className="hidden lg:flex flex-col group relative m-2">
                  <Link href={li.path} className="text-black flex items-center">
                    {li.label}
                    {li?.icon}
                  </Link>

                  {Array.isArray(li.nestedNav) && (
                    <ul className="absolute top-[25px] hidden group-hover:block text-center bg-white shadow-md">
                      {li.nestedNav.map((nested: { path: string; label: string }) => (
                        <li key={nested.path} className="py-1 w-[110px]">
                          <Link href={nested.path} className="text-black block">
                            {nested.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </div>
          </div>
          <div className="lg:hidden text-[25px] text-black">
            <CiMenuFries />
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="">
              Login
            </Link>
            <span>/</span>
            <Link href="/register" className="">
              Register
            </Link>
            <IoSearchCircleOutline className="text-4xl text-[#ff782d]" />
          </div>
        </nav>
      </div>
    </>
  );
}
