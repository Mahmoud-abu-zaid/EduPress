"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({ children, index = 0, stagger = false }: { children: React.ReactNode; index?: number; stagger?: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: stagger ? index * 0.1 : 0,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
