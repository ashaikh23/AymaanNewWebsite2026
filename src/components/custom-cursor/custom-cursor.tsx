"use client";

import { useEffect, useRef, useState } from "react";
import "./custom-cursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isOverBlue, setIsOverBlue] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const wasOverBlueRef = useRef(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.38;
      currentY += (mouseY - currentY) * 0.38;

      setPosition({ x: currentX, y: currentY });

      const element = document.elementFromPoint(currentX, currentY);
      const overBlue = Boolean(element?.closest?.("footer"));
      if (overBlue !== wasOverBlueRef.current) {
        wasOverBlueRef.current = overBlue;
        setIsOverBlue(overBlue);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : ""} ${isOverBlue ? "over-blue" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
