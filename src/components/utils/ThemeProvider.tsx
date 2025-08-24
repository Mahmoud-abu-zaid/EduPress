"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="p-2 rounded text-2xl">
        <BsFillSunFill />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 rounded text-2xl">
      {theme === "light" ? <MdDarkMode /> : <BsFillSunFill />}
    </button>
  );
}
