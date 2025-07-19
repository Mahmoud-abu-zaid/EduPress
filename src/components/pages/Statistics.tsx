"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FadeInOnScroll from "../animation/FadeInOnScroll";

export default function Statistics() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const targets = [25, 899, 158, 100];
  const duration = 700;
  const frameRate = 30;

  useEffect(() => {
    if (!inView) return;

    const steps = Math.ceil((duration / 1000) * frameRate);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      setCounts(targets.map((target) => Math.min(Math.round((target / steps) * currentStep), target)));

      if (currentStep >= steps) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <FadeInOnScroll>
      <div ref={ref} className="flex justify-center items-center gap-8 pt-9 pb-15 flex-wrap">
        {["Active Students", "Total Courses", "Instructor", "Satisfaction rate"].map((label, i) => (
          <div key={i} className="flex flex-col justify-center items-center gap-2 bg-gray-200 py-8 px-12 rounded-xl shadow-md w-[250px] h-[150px] ">
            <h3 className="text-2xl font-semibold text-amber-500">
              {counts[i]}
              {(label === "Satisfaction rate" && " %") || (label === "Active Students" && " K+")}
            </h3>
            <p className="font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </FadeInOnScroll>
  );
}
