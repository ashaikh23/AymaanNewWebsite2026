"use client";

import { useEffect, useRef } from "react";
import "./interactive-cat.css";

const InteractiveCat = () => {
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const container = containerRef.current;

    if (!leftEye || !rightEye || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = Math.min(
        3,
        Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        ) / 30
      );

      const leftEyeX = Math.cos(angle) * distance;
      const leftEyeY = Math.sin(angle) * distance;
      const rightEyeX = Math.cos(angle) * distance;
      const rightEyeY = Math.sin(angle) * distance;

      // Left eye position (around x=28, y=45)
      leftEye.setAttribute("cx", String(28 + leftEyeX));
      leftEye.setAttribute("cy", String(45 + leftEyeY));
      // Right eye position (around x=48, y=45)
      rightEye.setAttribute("cx", String(48 + rightEyeX));
      rightEye.setAttribute("cy", String(45 + rightEyeY));
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cat-circle-container" ref={containerRef}>
      <svg
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 76.4 61.2"
        className="cat-svg"
      >
        {/* Cat face/head */}
        <path
          d="M38.2,0C17.1,0,0,13.7,0,30.6c0,8.2,4.1,15.5,10.6,20.5c-0.5,1.5-1.2,3.1-1.2,4.8c0,4.1,3.3,7.4,7.4,7.4 c2.1,0,3.9-0.9,5.2-2.3c2.6,1.4,5.5,2.1,8.5,2.1c1.3,0,2.6-0.1,3.8-0.4c-0.3-1.1-0.5-2.3-0.5-3.5c0-5.1,4.1-9.2,9.2-9.2 c1.8,0,3.5,0.5,4.9,1.4c1.1-3.1,4.1-5.3,7.6-5.3c4.6,0,8.3,3.7,8.3,8.3c0,0.9-0.1,1.7-0.3,2.5c2.9-0.8,5.9-2.3,8.2-4.3 c6.5-5,10.6-12.3,10.6-20.5C76.4,13.7,59.3,0,38.2,0z"
          className="cat-face"
        />
        {/* Left eye */}
        <circle ref={leftEyeRef} cx="28" cy="45" r="4" className="eye" />
        {/* Right eye */}
        <circle ref={rightEyeRef} cx="48" cy="45" r="4" className="eye" />
        {/* Nose */}
        <path
          d="M15.3,45.9h5.1V35.7h-5.1C15.3,35.7,15.3,45.9,15.3,45.9z M45.8,56.1V51H30.6v5.1H45.8z M61.1,35.7H56v10.2h5.1V35.7z"
          className="cat-nose"
        />
      </svg>
    </div>
  );
};

export default InteractiveCat;
