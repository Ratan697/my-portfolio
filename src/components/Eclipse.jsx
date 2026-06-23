import { motion } from "framer-motion";

const Star = ({ x, y, size = 2, delay = 0, duration = 6 }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{ left: x, top: y, width: size, height: size, boxShadow: "0 0 8px rgba(255,255,255,0.8)" }}
    initial={{ opacity: 0.2 }}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function Eclipse() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 78% 50%, rgba(232, 93, 4, 0.10) 0%, rgba(5, 5, 7, 0) 38%)" }}
      />
      <div className="orbit-arc" style={{ right: "-22%", top: "5%", width: 980, height: 980 }} />
      <motion.div
        className="orbit-arc"
        style={{ right: "-16%", top: "10%", width: 880, height: 880 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute" style={{ top: "50%", left: -3 }}>
          <div className="w-1.5 h-1.5 rounded-full bg-white" style={{ boxShadow: "0 0 10px #fff" }} />
        </div>
      </motion.div>
      <div
        className="eclipse-ring"
        style={{ right: "-18%", top: "8%", width: 820, height: 820 }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 45%, #0a0a0c 0%, #050507 60%, #030305 100%)",
            boxShadow: "inset -30px -10px 80px rgba(0,0,0,0.9), 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 200deg at 50% 50%, transparent 0deg, rgba(255,186,8,0.0) 60deg, rgba(255,186,8,0.85) 110deg, rgba(255,220,150,1) 140deg, rgba(255,186,8,0.85) 170deg, rgba(232,93,4,0.0) 220deg, transparent 360deg)",
            mask: "radial-gradient(circle, transparent 49.6%, black 49.9%, black 50.4%, transparent 50.7%)",
            WebkitMask: "radial-gradient(circle, transparent 49.6%, black 49.9%, black 50.4%, transparent 50.7%)",
            filter: "blur(0.6px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute"
          style={{
            top: "48%", left: "97%", width: 18, height: 18, borderRadius: "50%",
            background: "radial-gradient(circle, #fff 0%, #ffd98a 30%, rgba(232,93,4,0.6) 55%, transparent 75%)",
            boxShadow: "0 0 40px rgba(255,220,150,0.9), 0 0 80px rgba(232,93,4,0.5)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute rounded-full"
          style={{ inset: -120, background: "radial-gradient(circle, rgba(255,186,8,0.07) 30%, rgba(232,93,4,0.04) 50%, transparent 70%)", filter: "blur(20px)" }}
        />
      </div>
      <Star x="40%" y="22%" delay={0} duration={5} />
      <Star x="55%" y="14%" size={1.5} delay={1} duration={6} />
      <Star x="68%" y="34%" size={1.5} delay={0.5} duration={7} />
      <Star x="74%" y="84%" delay={2} duration={5} />
      <Star x="86%" y="68%" size={1.5} delay={1.5} duration={6} />
      <Star x="62%" y="78%" size={1.5} delay={0.3} duration={5.5} />
      <Star x="48%" y="90%" delay={1.2} duration={6.5} />
      <Star x="92%" y="40%" size={1.5} delay={0.8} duration={5.2} />
    </div>
  );
}