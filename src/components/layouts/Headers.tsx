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
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About Us" },
    { path: "/faq", label: "FAQ" },
  ];
  const nav = [
    { path: "/", label: "Home" },
    { path: "/Courses", label: "Courses" },
    { path: "/Blog", label: "Blog" },
    { path: "", label: "Page", icon: <IoIosArrowDown />, nestedNav },
    { path: "/LearnPress", label: "LearnPress Add-On" },
    { path: "/Premium", label: "Premium Theme" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-black text-2xl font-bold">
          <Image src="/img/Screenshot 2025-06-07 093836.png" alt="EduPress Logo" width={40} height={40} />
          EduPress
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {nav.map((li) => (
            <li key={li.label} className="relative group">
              <Link href={li.path || "#"} className={clsx("text-sm font-medium hover:text-orange-500 transition-all flex items-center gap-1", pathname === li.path && "text-amber-500 font-semibold")}>
                {li.label}
                {li?.icon}
              </Link>

              {Array.isArray(li.nestedNav) && (
                <ul className="absolute left-0 top-5 hidden group-hover:block bg-white shadow-lg rounded-md w-40 text-sm z-50">
                  {li.nestedNav.map((nested) => (
                    <li key={nested.path}>
                      <Link href={nested.path} className="block px-4 py-2 hover:bg-gray-100 text-black">
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
            <Link href="/login" className="hover:text-orange-500">
              Login
            </Link>
            <span>/</span>
            <Link href="/register" className="hover:text-orange-500">
              Register
            </Link>
          </div>
          <IoSearchCircleOutline className="text-3xl text-[#ff782d]" />
          <div className="lg:hidden text-2xl">
            <CiMenuFries onClick={() => setShowMenu((prev) => !prev)} />
          </div>
        </div>
      </nav>

      {showMenu && (
        <div className="lg:hidden bg-white px-6 pb-4 pt-2 absolute left-0 right-0 rounded-b-lg">
          <ul className="flex flex-col gap-4">
            {nav.map((li) => (
              <li key={li.label}>
                <div className="flex justify-between items-center">
                  <Link href={li.path} className={clsx("text-black text-base", pathname === li.path && "text-orange-500 font-semibold")}>
                    {li.label}
                  </Link>
                  {Array.isArray(li.nestedNav) && (
                    <button onClick={() => setOpenDropdown((prev) => !prev)} className="text-xl">
                      <IoIosArrowDown />
                    </button>
                  )}
                </div>

                {Array.isArray(li.nestedNav) && openDropdown && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {li.nestedNav.map((nested) => (
                      <li key={nested.path}>
                        <Link href={nested.path} className="text-gray-600 text-sm block">
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
              <Link href="/login" className="hover:text-orange-500">
                Login
              </Link>
              <span>/</span>
              <Link href="/register" className="hover:text-orange-500">
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
