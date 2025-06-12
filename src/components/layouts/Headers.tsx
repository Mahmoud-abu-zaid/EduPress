import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div>
        <nav className="flex justify-evenly items-center bg-white p-4">
          <Link href="/" className="flex items-center gap-3 text-black text-2xl font-bold">
            <Image src="/img/Screenshot 2025-06-07 093836.png" alt="EduPress Logo" width={40} height={40} />
            EduPress
          </Link>

          <div>
            <ul className="hidden lg:flex space-x-4">
              <li>
                <Link href="/" className="text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-black">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black">
                  Blog
                </Link>
              </li>
              <li className="relative group ">
                <Link href="/Page" className="text-black flex items-center gap-1">
                  Page
                  <IoIosArrowDown />
                </Link>
                <ul className="absolute hidden top-[18px]  group-hover:block bg-white shadow-lg mt-2 p-4">
                  <li>
                    <Link href="/contact" className="text-black">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-black">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-black">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/learnPress" className="text-black">
                  LearnPress Add-On
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-black">
                  Premium Theme
                </Link>
              </li>
            </ul>
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
