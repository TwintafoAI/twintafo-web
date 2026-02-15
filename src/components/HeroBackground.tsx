"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <motion.div
        className="absolute left-0 top-1/3 h-[2px] w-full signal-line opacity-40"
        animate={reduceMotion ? undefined : { x: ["-30%", "30%"] }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[55%] left-1/2 h-48 w-[38rem] -translate-x-1/2 rounded-full border border-emerald-200/15"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.06, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[18%] right-[18%] h-32 w-32 rounded-full border border-emerald-200/10"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -18, 0],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
