"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const nestedNav = [
    { path: "/Contect", label: "Contact" },
    { path: "/About", label: "About Us" },
    { path: "/Faqs", label: "FAQs" },
  ];
  const nav = [
    { path: "/", label: "Home" },
    { path: "/AllCourses", label: "Courses" },
    { path: "/Blog", label: "Blog" },
    { path: "", label: "Page", icon: <IoIosArrowDown />, nestedNav },
    { path: "/LearnPress", label: "LearnPress Add-On" },
    { path: "/Premium", label: "Premium Theme" },
  ];

  return (
    <header className="bg-color-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-color-black text-2xl font-bold">
          <Image src="/img/Screenshot 2025-06-07 093836.png" alt="EduPress Logo" width={40} height={40} />
          EduPress
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {nav.map((li) => (
            <li key={li.label} className="relative group">
              <Link
                href={li.path || "#"}
                className={clsx("text-sm font-medium text-color-black hover:text-main-color transition-all flex items-center gap-1", pathname === li.path && "text-main-color font-semibold")}
              >
                {li.label}
                {li?.icon}
              </Link>

              {Array.isArray(li.nestedNav) && (
                <ul className="absolute left-0 top-5 hidden group-hover:block bg-color-white shadow-lg rounded-md w-40 text-sm z-50">
                  {li.nestedNav.map((nested) => (
                    <li key={nested.path}>
                      <Link href={nested.path} className="block px-4 py-2 hover:bg-gray-100 text-color-black">
                        {nested.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <Link href="/Authentication" className="text-sm font-medium hover:text-main-color transition-all flex items-center gap-1">
              Login / Register
            </Link>
          </div>
          <IoSearchCircleOutline className="text-3xl text-main-color" />
          <div className="lg:hidden text-2xl cursor-pointer">
            <CiMenuFries onClick={() => setShowMenu((prev) => !prev)} />
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="lg:hidden z-10 bg-white px-6 pb-4 pt-2 absolute left-0 right-0 rounded-b-lg">
          <ul className="flex flex-col gap-4">
            {nav.map((li) => (
              <li key={li.label}>
                <div className="flex justify-between items-center">
                  <Link href={li.path} className={clsx("text-black text-base", pathname === li.path && "text-main-color font-semibold")}>
                    {li.label}
                  </Link>
                  {Array.isArray(li.nestedNav) && (
                    <button onClick={() => setOpenDropdown((prev) => !prev)} className="text-xl cursor-pointer">
                      <IoIosArrowDown />
                    </button>
                  )}
                </div>

                {Array.isArray(li.nestedNav) && openDropdown && (
                  <ul className="mt-2 flex flex-col gap-2 py-1">
                    {li.nestedNav.map((nested) => (
                      <li key={nested.path}>
                        <Link href={nested.path} className="text-color-black text-sm block py-1">
                          {nested.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <hr className="my-2" />
            <div className="flex gap-2 text-sm font-medium">
              <Link href="/login" className="hover:text-main-color">
                Login
              </Link>
              <span>/</span>
              <Link href="/register" className="hover:text-main-color">
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
