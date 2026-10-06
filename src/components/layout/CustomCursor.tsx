"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setIsPointer(isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-[0_0_10px_rgba(16,185,129,0.8)]"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.1s ease-out",
        }}
      />
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-emerald-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          backgroundColor: isPointer ? "rgba(16, 185, 129, 0.1)" : "transparent",
        }}
      />
    </>
  );
}
