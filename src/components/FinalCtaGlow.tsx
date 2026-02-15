"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FinalCtaGlow() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        className="absolute -left-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.4, 0.7, 0.4],
              }
        }
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-16 bottom-[-20%] h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
    </>
  );
}
