import { motion } from "framer-motion";
// Remove the lucide-react import and replace it with react-icons
import { FiLinkedin, FiGithub, FiDribbble } from "react-icons/fi";

const socials = [
  { id: "linkedin", icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { id: "dribbble", icon: FiDribbble, href: "#", label: "Dribbble" },
  { id: "github", icon: FiGithub, href: "#", label: "GitHub" },
];

// ... keep the rest of the LeftRail and RightRail code exactly the same

export function LeftRail({ tagline }) {
  return (
    <div
      data-testid="left-rail"
      className="fixed left-4 md:left-10 top-0 h-full z-40 hidden md:flex flex-col items-center justify-between py-24 pointer-events-none"
    >
      <div className="flex flex-col items-center gap-6 pointer-events-auto">
        <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        <div className="progress-rail h-32 md:h-40" />
        <div className="vertical-text text-[11px] tracking-[0.18em] text-white/60 mt-2">
          {tagline}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 pointer-events-auto">
        {socials.map(({ id, icon: Icon, href, label }) => (
          <a
            key={id}
            href={href}
            data-testid={`social-${id}`}
            aria-label={label}
            className="text-white/50 hover:text-[color:var(--accent-amber)] transition-colors duration-300"
          >
            <Icon className="w-[18px] h-[18px]" strokeWidth={1.4} />
          </a>
        ))}
      </div>
    </div>
  );
}

export function RightRail({ activeIndex, total = 4 }) {
  return (
    <div
      data-testid="right-rail"
      className="fixed right-4 md:right-10 top-0 h-full z-40 hidden md:flex flex-col items-end justify-center gap-6"
    >
      {Array.from({ length: total }).map((_, i) => {
        const active = i === activeIndex;
        const num = String(i + 1).padStart(2, "0");
        return (
          <motion.div
            key={i}
            data-testid={`rail-num-${num}`}
            className="flex items-center gap-3 text-[11px] tracking-[0.2em]"
            animate={{ opacity: active ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className={active ? "text-white" : "text-white/40"}>{num}</span>
            <motion.span
              className="block rounded-full"
              animate={{
                width: active ? 8 : 2,
                backgroundColor: active ? "#FFBA08" : "rgba(255,255,255,0.4)",
              }}
              transition={{ duration: 0.4 }}
              style={{ height: 2 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}