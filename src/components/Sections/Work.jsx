import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "localstock",
    title: "LocalStock",
    category: "Real time product & Service Finding Nearby",
    year: "2026",
    description:
      "A comprehensive inventory management system for local businesses to track stock and optimize logistics in real-time.",
    img: "localstock-banner.png",
    siteUrl: "https://localstock.pages.dev",
    siteLabel: "localstock.pages.dev",
  },
  {
    id: "replykaro",
    title: "ReplyKaro",
    category: "AI-Powered 24/7 Business & Service Reply Assistant",
    year: "2026",
    description:
      "An intelligent assistant that generates context-aware, personalized replies for WhatsApp and other social media platforms using AI.",
    img: "replykaro-banner.png",
    siteUrl: "https://replykaro.co.in",
    siteLabel: "replykaro.co.in",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Work() {
  return (
    <section
      id="selected-work"
      data-testid="section-work"
      className="relative min-h-screen w-full px-6 md:px-24 lg:px-32 py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-end justify-between mb-16 gap-6"
      >
        <div>
          <motion.p variants={fadeUp} className="label-cap mb-4">
            Best Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif-display text-white"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 1.02,
              fontWeight: 300,
            }}
          >
            Things I&apos;ve{" "}
            <span className="italic text-[color:var(--accent-amber)]/90">
              made
            </span>
            .
          </motion.h2>
        </div>
        <motion.p
          variants={fadeUp}
          className="text-white/50 max-w-xs hidden md:block"
        >
          A handful of recent projects across web experiences, brand systems
          and products.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((p, idx) => (
          <motion.a
            key={p.id}
            href={p.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`project-card-${p.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`work-card group block rounded-2xl border border-white/8 bg-white/[0.02] p-5 hover:border-white/20 transition-all duration-300 ${
              idx % 2 === 1 ? "md:mt-16" : ""
            }`}
          >
            <div className="thumb w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 label-cap text-white/80">
                {p.year}
              </div>
            </div>
            <div className="flex items-start justify-between gap-6 pt-6 pb-2 px-2">
              <div>
                <div className="flex items-baseline gap-3">
                  <h3
                    className="font-serif-display text-white text-3xl"
                    style={{ fontWeight: 300 }}
                  >
                    {p.title}
                  </h3>
                  <span className="label-cap">{p.category}</span>
                </div>
                <p className="text-white/55 text-sm mt-3 max-w-md">
                  {p.description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[color:var(--accent-amber)] group-hover:text-[color:var(--accent-amber)] text-white/70 transition-colors duration-500">
                <ArrowUpRight
                  className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}