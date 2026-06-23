import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: "ethereal", title: "Ethereal", category: "Web Experience", year: "2025", description: "A scroll-driven brand site exploring soft 3D forms and editorial typography.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1800&auto=format&fit=crop" },
  { id: "nexa", title: "NEXA", category: "Branding / Web", year: "2024", description: "Identity and site redesign for a developer-first analytics platform.", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1800&auto=format&fit=crop" },
  { id: "flow-state", title: "Flow State", category: "Interaction Design", year: "2024", description: "Audio-reactive landing page with gesture-based hero exploration.", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1800&auto=format&fit=crop" },
  { id: "lumen", title: "Lumen", category: "Product / SaaS", year: "2024", description: "Calm, focused dashboard for tracking creative work — built React + FastAPI.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1800&auto=format&fit=crop" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

export default function Work() {
  return (
    <section id="work" data-testid="section-work" className="relative w-full px-6 md:px-24 lg:px-32 py-32">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="flex items-end justify-between mb-16 gap-6">
        <div>
          <motion.p variants={fadeUp} className="label-cap mb-4">03 — Selected Work</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif-display text-white" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.02, fontWeight: 300 }}>
            Things I&apos;ve <span className="italic text-[color:var(--accent-amber)]/90">made</span>.
          </motion.h2>
        </div>
        <motion.p variants={fadeUp} className="text-white/50 max-w-xs hidden md:block">
          A handful of recent projects across web experiences, brand systems and products.
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((p, idx) => (
          <motion.a key={p.id} href="#contact" data-testid={`project-card-${p.id}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }} className={`work-card group block rounded-2xl border border-white/8 bg-white/[0.02] p-5 hover:border-white/20 ${idx % 2 === 1 ? "md:mt-16" : ""}`}>
            <div className="thumb w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 label-cap text-white/80">{p.year}</div>
            </div>
            <div className="flex items-start justify-between gap-6 pt-6 pb-2 px-2">
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif-display text-white text-3xl" style={{ fontWeight: 300 }}>{p.title}</h3>
                  <span className="label-cap">{p.category}</span>
                </div>
                <p className="text-white/55 text-sm mt-3 max-w-md">{p.description}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[color:var(--accent-amber)] group-hover:text-[color:var(--accent-amber)] text-white/70 transition-colors duration-500">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}