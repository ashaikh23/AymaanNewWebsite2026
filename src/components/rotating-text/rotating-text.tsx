"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ITEMS = [
  "AI",
  "ML",
  "Software",
  "Systems",
  "Front-End",
  "Back-End",
  "Full- Stack",
  "QA",
  "DevOps",
  "Security",
  "Data",
  "Cloud",
  "Mobile",
  "Blockchain",
  "UX",
  "UI",
  "IoT",
  "Product",
] as const;
const INTERVAL_MS = 2500;

export const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % ITEMS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const currentItem = ITEMS[currentIndex];

  return (
    <span className="relative inline-flex items-baseline text-blue-500 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentItem}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="inline-block"
        >
          {currentItem}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
