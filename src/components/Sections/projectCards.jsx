import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Sample data for the 4 projects
const projectData = [
  {
    id: 1,
    title: "Bike Rental Dashboard",
    description:
      "A streamlined management dashboard for tracking active bike rentals, monitoring fleet availability, processing client checkouts, and analyzing daily revenue trends.",
    image: "bike-rental.png",
    link: "https://starbikerental.pages.dev/",
  },
  {
    id: 2,
    title: "Fitness Gym Website",
    description:
      "A highly engaging, responsive platform for a fitness center featuring dynamic workout program displays, interactive class schedules, and interactive membership pricing tables.",
    image: "gym-website.png",
    link: "https://fitness-gym-demo.pages.dev/",
  },
  {
    id: 3,
    title: "Culinary & Restaurant Website",
    description:
      "An elegant web application for a modern restaurant, complete with an interactive food menu, smooth scroll transitions, and a seamless online table reservation layout.",
    image: "food-website.png",
    link: "https://resturant-demo.pages.dev/",
  },
  {
    id: 4,
    title: "Hotel & Resort Booking Showcase",
    description:
      "A premium hospitality interface showcasing luxury room accommodations, integrated amenity carousels, and an elegant UI design optimized for booking inquiries.",
    image: "hotel-website.png",
    link: "https://website-demo-292.pages.dev/",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectCards = () => {
  return (
    <section
      id="work"
      data-testid="section-project-cards"
      className="relative w-full px-6 md:px-24 lg:px-32 py-24 pb-0"
    >
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="font-serif-display text-white text-center mb-12"
        style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300 }}
      >
        My{" "}
        <span className="italic text-[color:var(--accent-amber)]/90">
          Projects
        </span>
      </motion.h2>

      {/* Grid Layout: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            className="work-card group rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative bg-black/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3
                className="font-serif-display text-white text-xl mb-2"
                style={{ fontWeight: 300 }}
              >
                {project.title}
              </h3>

              <p className="text-white/55 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Open Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-white text-sm font-medium py-2.5 px-4 rounded-lg border border-white/15 bg-white/[0.03] hover:bg-[color:var(--accent-amber)] hover:border-[color:var(--accent-amber)] hover:text-black transition-colors duration-300 mt-auto group/link"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                <span>Open Project</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectCards;