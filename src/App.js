import { useEffect, useRef, useState } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import { LeftRail, RightRail } from "./components/SideRails";
import Hero from "./components/Sections/Hero";
import ProjectCards from "./components/Sections/projectCards";
import Work from "./components/Sections/Work";
import Contact from "./components/Sections/Contact";
import About from "./components/Sections/About";

const SECTIONS = ["home", "work", "contact", "about"];

function App() {
  const [active, setActive] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    const opts = { rootMargin: "-45% 0px -45% 0px", threshold: 0 };
    const cb = (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActive(e.target.id);
        }
      });
    };
    observerRef.current = new IntersectionObserver(cb, opts);
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeIndex = Math.max(0, SECTIONS.indexOf(active));

  return (
    <div className="App noise relative" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <CustomCursor />
      <Nav activeSection={active} onNavigate={navigate} />
      <LeftRail tagline="I craft digital experiences that leave a lasting impact." />
      <RightRail activeIndex={activeIndex} total={SECTIONS.length} />

      <main className="relative z-10">
        <Hero onExplore={() => navigate("work")} />
        <ProjectCards />
        <Work />
        <Contact />
        <About />
      </main>
    </div>
  );
}

export default App;