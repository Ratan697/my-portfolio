import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiFastapi, SiExpress, SiPostgresql, SiMongodb,
  SiGit, SiDocker, SiVite, SiFigma, SiVercel 
} from "react-icons/si";

const skills = [
  { 
    group: "Frontend", 
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" }
    ] 
  },
  { 
    group: "Backend", 
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ] 
  },
  { 
    group: "Tooling", 
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" }
    ] 
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] } }),
};

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="about" data-testid="section-about" className="relative min-h-screen w-full px-6 md:px-24 lg:px-32 py-32 flex flex-col justify-center">
      
      {/* Top Row: Header & Text */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-5">
          <motion.p variants={fadeUp} className="label-cap mb-6">02 — About</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif-display text-white" style={{ fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.02, fontWeight: 300 }}>
            Building things <br />
            <span className="italic text-[color:var(--accent-amber)]/90">that help</span> people.
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-7 space-y-10">
          <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed max-w-xl">
            I&apos;m a frontend &amp; fullstack developer who enjoys turning ideas into thoughtful, fast, and beautiful products. I care about the small details — the easing of a transition, the rhythm of a paragraph, the silence between sections.
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/55 leading-relaxed max-w-xl">
            When I&apos;m not shipping interfaces, I&apos;m exploring new frameworks, sketching micro-interactions, and chasing the kind of craft that quietly delights people.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Row: Full-Width Expanding Skills Accordion */}
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="flex flex-col md:flex-row gap-4 md:h-[240px] w-full"
      >
        {skills.map((s, i) => {
          const isHovered = hoveredCard === i;
          
          // Made the stretch contrast even more dramatic (4 takes up huge space, 0.6 shrinks down)
          const flexValue = hoveredCard === null ? 1 : isHovered ? 4 : 0.6;

          return (
            <motion.div
              key={s.group}
              layout
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ flex: flexValue }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              className={`relative overflow-hidden rounded-2xl border transition-colors duration-500 p-6 md:p-8 flex flex-col cursor-default ${
                isHovered ? "bg-white/[0.05] border-white/25" : "bg-white/[0.02] border-white/8"
              }`}
            >
              <motion.div layout="position" className="label-cap mb-6 text-white/60 whitespace-nowrap">
                {s.group}
              </motion.div>

              {/* Dynamic Grid: Stretches to fill space when expanded */}
              <motion.div 
                layout="position" 
                className="w-full min-w-[550px] grid grid-cols-3 gap-y-6 gap-x-8 mt-2 pr-10"
              >
                {s.items.map((it, idx) => (
                  <motion.div 
                    key={it.name}
                    initial={false}
                    animate={{ 
                      opacity: isHovered ? 1 : 0.3,
                      filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                      x: isHovered ? 0 : -10
                    }}
                    transition={{ duration: 0.4, delay: isHovered ? idx * 0.04 : 0 }}
                    className="flex items-center gap-3 w-max"
                  >
                    <it.icon 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: isHovered ? it.color : "currentColor" }} 
                    />
                    <span className={`text-base font-medium transition-colors duration-300 ${isHovered ? "text-white/90" : "text-white/40"}`} style={{ fontFamily: "Outfit, sans-serif" }}>
                      {it.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}