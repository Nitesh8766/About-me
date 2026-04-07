import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#ctf", label: "CTF" },
  { href: "#education", label: "EDUCATION" },
  { href: "#writeups", label: "WRITEUPS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimMode, setDimMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-dim", dimMode ? "true" : "false");
  }, [dimMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 20);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--cyber-green), var(--cyber-cyan))",
          boxShadow: "0 0 8px var(--cyber-green)",
          zIndex: 2000,
          transition: "width 0.1s ease",
        }}
      />

      <nav className="nav" style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,255,65,0.15)" : "none" }}>
        <div className="nav-container">
          <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}>
            NITESH<span>_</span>CHAVAN
          </a>

          <ul className={`nav-links${open ? " open" : ""}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={activeSection === l.href.slice(1) ? "active-nav" : ""}
                  onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Dim/Bright toggle */}
            <button
              onClick={() => setDimMode((d) => !d)}
              title={dimMode ? "Switch to Hacker Mode" : "Switch to Stealth Mode"}
              style={{
                background: "none",
                border: `1px solid ${dimMode ? "rgba(0,212,255,0.4)" : "rgba(0,255,65,0.4)"}`,
                color: dimMode ? "var(--cyber-cyan)" : "var(--cyber-green)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "1px",
                padding: "4px 10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {dimMode ? "[ STEALTH ]" : "[ HACKER ]"}
            </button>

            <button
              className="nav-toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
