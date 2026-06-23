import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eclipse from "../Eclipse";

const projects = [
  { id: "ethereal", title: "Ethereal", category: "Web Experience", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop" },
  { id: "nexa", title: "NEXA", category: "Branding / Web", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop" },
  { id: "flow-state", title: "Flow State", category: "Interaction Design", img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1600&auto=format&fit=crop" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero({ onExplore }) {
  return (
    <section id="home" data-testid="section-home" className="relative w-full min-h-screen flex items-center">
      <Eclipse />
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10 w-full px-6 md:px-24 lg:px-32 pt-32 pb-16">
        <motion.p variants={fadeUp} className="label-cap mb-6 text-white/70" style={{ letterSpacing: "0.05em", textTransform: "none", fontSize: "14px" }}>
          Hey, I&apos;m Ratan <span className="inline-block">👋</span>
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-serif-display glow-text text-white max-w-3xl" style={{ fontSize: "clamp(48px, 7.4vw, 112px)", lineHeight: 0.98, fontWeight: 300 }}>
          I design &amp; code<br />digital experiences<br />that{" "}
          <span className="italic text-[color:var(--accent-amber)]/95" style={{ fontWeight: 400 }}>inspire</span>
          <span className="text-[color:var(--accent-amber)]">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-10 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          A frontend &amp; fullstack developer crafting immersive and mind-bending digital experiences with clean code and subtle interactions.
        </motion.p>
        <motion.button variants={fadeUp} data-testid="explore-work-btn" onClick={onExplore} className="mt-10 cta-underline inline-flex items-center gap-3 text-white text-base group" style={{ fontFamily: "Outfit, sans-serif" }}>
          <span>Explore My Work</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
        </motion.button>
      </motion.div>
      <FeaturedStrip />
    </section>
  );
}

function FeaturedStrip() {
  return (
    <div data-testid="featured-strip" className="absolute left-0 right-0 bottom-6 px-6 md:px-24 lg:px-32 z-10 hidden lg:block">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 shrink-0">
          <span className="label-cap text-white/60">Featured Work</span>
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70">
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          {projects.map((p) => (
            <a key={p.id} href="#work" data-testid={`featured-${p.id}`} className="group flex items-center gap-3 px-3 py-2.5 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500">
              <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-black">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm truncate" style={{ fontFamily: "Outfit, sans-serif" }}>{p.title}</div>
                <div className="text-[11px] text-white/50">{p.category}</div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[color:var(--accent-amber)] group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}