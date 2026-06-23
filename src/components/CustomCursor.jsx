import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringSpringX = useSpring(ringX, { stiffness: 220, damping: 28, mass: 0.5 });
  const ringSpringY = useSpring(ringY, { stiffness: 220, damping: 28, mass: 0.5 });
  const dotSpringX = useSpring(dotX, { stiffness: 600, damping: 30, mass: 0.2 });
  const dotSpringY = useSpring(dotY, { stiffness: 600, damping: 30, mass: 0.2 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      ringX.set(e.clientX - 16);
      ringY.set(e.clientY - 16);
      dotX.set(e.clientX - 2);
      dotY.set(e.clientY - 2);
    };
    const over = (e) => {
      const t = e.target;
      if (t.closest && t.closest("a, button, [data-cursor='hover'], input, textarea, [role='button']")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [ringX, ringY, dotX, dotY]);

  return (
    <>
      <motion.div
        data-testid="custom-cursor-ring"
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[100] rounded-full border"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          width: 32,
          height: 32,
          borderColor: hovering ? "rgba(255,186,8,0.9)" : "rgba(255,255,255,0.4)",
          mixBlendMode: "difference",
          scale: hovering ? 1.6 : 1,
          transition: "border-color 0.25s ease, scale 0.25s ease",
        }}
      />
      <motion.div
        data-testid="custom-cursor-dot"
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[100] rounded-full bg-white"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          width: 4,
          height: 4,
          mixBlendMode: "difference",
          opacity: hovering ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      />
    </>
  );
}