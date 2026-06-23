import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    // Direct mouse coordinates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Tight spring for the main arrow (ultra-responsive, zero lag, but perfectly smooth)
    const cursorX = useSpring(mouseX, { stiffness: 1200, damping: 40, mass: 0.1 });
    const cursorY = useSpring(mouseY, { stiffness: 1200, damping: 40, mass: 0.1 });

    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
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
    }, [mouseX, mouseY]);

    useEffect(() => {
        document.documentElement.style.cursor = 'none';

        return () => {
            document.documentElement.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            {/* Sharp Black & Red Custom SVG Arrow */}
            <motion.div
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[100]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    // Offset so the absolute tip of the arrow aligns with the exact click coordinate
                    marginLeft: -4,
                    marginTop: -4,
                }}
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        // When hovering a link, it scales up slightly and tilts
                        transform: hovering ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
                        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                        transformOrigin: "top left"
                    }}
                >
                    {/* Subtle Drop Shadow for depth */}
                    <path
                        d="M5.5 3.5L17.5 10.5L11.5 12.5L9.5 19.5L5.5 3.5Z"
                        fill="rgba(0,0,0,0.6)"
                        style={{ transform: "translate(2px, 4px)", filter: "blur(2px)" }}
                    />
                    {/* Main Arrow Body: Deep Black Fill, Red Outline */}
                    <path
                        d="M5.5 3.5L17.5 10.5L11.5 12.5L9.5 19.5L5.5 3.5Z"
                        fill="#09090b"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </>
    );
}