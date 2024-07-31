"use client";

import { useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handlePointer(event: any) {
      setMousePosition({
        x: event.clientX - 1,
        y: event.clientY - 1,
      });
    }

    window.addEventListener("pointermove", handlePointer);

    return () => {
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return (
    <motion.div
      animate={{
        ...mousePosition,
      }}
      transition={{ type: "tween", duration: 0, ease: "linear" }}
      className={
        "fixed z-50 top-0 left-0 rounded-full pointer-events-none select-none" +
        " mix-blend-difference size-3 bg-red-400 hidden md:block print:hidden"
      }
    />
  );
}
