import { motion } from "framer-motion";

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "Express", "PostgreSQL", "MongoDB"] },
  { group: "Tooling", items: ["Git", "Docker", "Vite", "Figma", "Vercel"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] } }),
};

export default function About() {
  return (
    <section id="about" data-testid="section-about" className="relative min-h-screen w-full px-6 md:px-24 lg:px-32 py-32 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {skills.map((s, i) => (
              <motion.div key={s.group} variants={fadeUp} custom={i} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <div className="label-cap mb-4 text-white/60">{s.group}</div>
                <ul className="space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-white/80 text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}