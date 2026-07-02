import React from "react";
import { motion } from "framer-motion";

export default function Nav({ activeSection, onNavigate }) {
  const links = ["home", "work", "contact", "about"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference pointer-events-auto">
      {/* Increased size from text-xl to text-2xl here */}
      <div 
        className="text-2xl font-serif text-white cursor-pointer" 
        onClick={() => onNavigate("home")}
      >
        R.
      </div>
      
      {/* Increased gap from gap-8 to gap-12 here */}
      <ul className="hidden md:flex items-center gap-12 text-sm text-white/50">
        {links.map((item) => (
          <li 
            key={item}
            onClick={() => onNavigate(item)}
            className={`relative cursor-pointer transition-colors hover:text-white capitalize flex flex-col items-center ${activeSection === item ? "text-white" : ""}`}
          >
            <span>{item}</span>
            {activeSection === item && (
              <motion.div
                layoutId="active-nav-dot"
                className="absolute -bottom-3 w-1.5 h-1.5 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onNavigate("contact")}
        className="px-5 py-2 text-sm text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2 group"
      >
        Contact Me 
        
        {/* Perfectly centered SVG Asterisk */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="text-white/50 flex items-center justify-center group-hover:text-black/50 ml-0.5"
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5.9 8.5l12.2 7M5.9 15.5l12.2-7" />
          </svg>
        </motion.div>
        
      </button>
    </nav>
  );
}