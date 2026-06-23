import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FiLinkedin, FiGithub, FiDribbble } from "react-icons/fi";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

export default function Contact() {
  return (
    <section id="contact" data-testid="section-contact" className="relative w-full px-6 md:px-24 lg:px-32 py-32 min-h-screen flex flex-col justify-between">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="max-w-5xl">
        <motion.p variants={fadeUp} className="label-cap mb-6">04 — Get in touch</motion.p>
        <motion.h2 variants={fadeUp} className="font-serif-display text-white" style={{ fontSize: "clamp(48px, 8vw, 128px)", lineHeight: 0.98, fontWeight: 300 }}>
          Let&apos;s build <br />something <span className="italic text-[color:var(--accent-amber)]/95">together</span><span className="text-[color:var(--accent-amber)]">.</span>
        </motion.h2>
        <motion.a variants={fadeUp} href="mailto:hello@ratan.dev" data-testid="contact-email-cta" className="mt-12 inline-flex items-center gap-4 group">
          <span className="font-serif-display text-white border-b border-white/30 group-hover:border-[color:var(--accent-amber)] transition-colors pb-2" style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}>
            hello@ratan.dev
          </span>
          <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[color:var(--accent-amber)] group-hover:text-[color:var(--accent-amber)] text-white/80 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500" strokeWidth={1.5} />
          </span>
        </motion.a>
        <motion.div variants={fadeUp} className="mt-16 flex flex-wrap gap-3">
          {[
            { id: "email", label: "Email", icon: Mail, href: "mailto:hello@ratan.dev" },
            { id: "linkedin", label: "LinkedIn", icon: FiLinkedin, href: "#" },
            { id: "github", label: "GitHub", icon: FiGithub, href: "https://github.com/Ratan697" },
            { id: "dribbble", label: "Dribbble", icon: FiDribbble, href: "#" },
          ].map(({ id, label, icon: Icon, href }) => (
            <a key={id} href={href} data-testid={`contact-social-${id}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
      <div className="mt-24 pt-10 border-t border-white/8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="font-serif-display text-white text-6xl md:text-8xl leading-none" style={{ fontWeight: 300, letterSpacing: "-0.02em" }}>
            Ratan <span className="italic text-[color:var(--accent-amber)]/85">Jana</span>
          </div>
          <p className="text-white/40 text-sm mt-3">Frontend &amp; Fullstack Developer</p>
        </div>
        <div className="text-right">
          <p className="label-cap mb-2 text-white/40">© {new Date().getFullYear()}</p>
          <p className="text-white/60 text-sm">Designed &amp; built with care.</p>
        </div>
      </div>
    </section>
  );
}