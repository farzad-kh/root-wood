"use client";

import { motion } from "framer-motion";

const RingLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-40 w-40 text-accent"
        initial={{ opacity: 0.6, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* outer ring */}
          <motion.circle
            cx="50"
            cy="52"
            r="46"
            stroke="currentColor"
            strokeWidth="1.4"
            animate={{
              stroke: [
                "#94a3b8",
                "#cbd5e1",
                "#94a3b8",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* mid ring */}
          <motion.circle
            cx="48"
            cy="50"
            r="34"
            stroke="currentColor"
            strokeWidth="1.4"
            animate={{
              stroke: [
                "#cbd5e1",
                "#94a3b8",
                "#e2e8f0",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* inner ring */}
          <motion.circle
            cx="51"
            cy="53"
            r="21"
            stroke="currentColor"
            strokeWidth="1.4"
            animate={{
              stroke: [
                "#e2e8f0",
                "#94a3b8",
                "#cbd5e1",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* core */}
          <motion.circle
            cx="49"
            cy="51"
            r="9"
            stroke="currentColor"
            strokeWidth="2"
            animate={{
              stroke: ["#94a3b8", "#ffffff", "#94a3b8"],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* center dot */}
          <motion.circle
            cx="50"
            cy="52"
            r="2.4"
            fill="currentColor"
            animate={{
              fill: ["#94a3b8", "#e2e8f0", "#94a3b8"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default RingLoading;