import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

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
    id: "resell",
    title: "ReSell",
    category: "Campus Marketplace for Buying & Selling items",
    year: "2026",
    description:
      "A dedicated, secure platform for college students to easily buy, sell, and trade items within their local campus community.",
    img: "resell-banner.png",
    siteUrl: "https://resell-1zn.pages.dev",
    siteLabel: "resell-1zn.pages.dev",
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

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 32 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 20,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

// Site preview iframe
function SitePreview({ src }) {
  return (
    <iframe
      src={src}
      title="Project site"
      className="w-full h-full"
      style={{ border: "none" }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  const handleCardClick = (e, project) => {
    e.preventDefault();
    setActiveProject(project);
  };

  const closeModal = () => setActiveProject(null);

  return (
    <>
      <section
        id="work"
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
              03 — Selected Work
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
              href="#contact"
              data-testid={`project-card-${p.id}`}
              onClick={(e) => handleCardClick(e, p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`work-card group block rounded-2xl border border-white/8 bg-white/[0.02] p-5 hover:border-white/20 ${idx % 2 === 1 ? "md:mt-16" : ""
                }`}
            >
              <div className="thumb w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
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

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            // Change z-50 to z-[60] right here 👇
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(14px)" }}
            onClick={closeModal}
          >
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              // Adjusted max-width to look good as a single window
              className="relative w-full max-w-5xl flex flex-col gap-3 rounded-2xl overflow-hidden"
              style={{ height: "min(86vh, 780px)" }}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
                aria-label="Close"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {/* Site Preview Only */}
              <div
                className="w-full h-full rounded-xl overflow-hidden border border-white/10 flex flex-col"
                style={{ background: "#ffffff" }}
              >
                <SitePreview src={activeProject.siteUrl} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}