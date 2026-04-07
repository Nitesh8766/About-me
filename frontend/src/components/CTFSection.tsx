import { useEffect, useRef } from "react";

export default function CTFSection() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".ctf-bar").forEach((bar) => {
            bar.classList.add("animated");
          });
        }
      },
      { threshold: 0.2 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  const challenges = [
    { category: "General Skills", solved: 8, color: "#00ff41" },
    { category: "Cryptography", solved: 7, color: "#00d4ff" },
    { category: "Web Exploitation", solved: 6, color: "#ffd700" },
    { category: "Reverse Engineering", solved: 5, color: "#ff6b35" },
    { category: "Forensics", solved: 9, color: "#a855f7" },
    { category: "Binary Exploitation", solved: 4, color: "#ff0040" },
    { category: "Network", solved: 4, color: "#00ff41" },
  ];

  return (
    <section id="ctf">
      <div className="section-header fade-in">
        <span className="section-label">// 03. CTF &amp; COMPETITIONS</span>
        <h2 className="section-title">BATTLE RECORD</h2>
      </div>

      {/* picoCTF profile card */}
      <div className="ctf-profile-card fade-in">
        <div className="ctf-profile-header">
          <div className="ctf-logo">
            <span style={{ fontSize: "2rem" }}>🏆</span>
          </div>
          <div>
            <div className="ctf-platform">picoCTF</div>
            <div className="ctf-username">
              <span style={{ color: "var(--cyber-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>username: </span>
              <span style={{ color: "var(--cyber-cyan)", fontFamily: "var(--font-display)", letterSpacing: "2px" }}>Noten</span>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--cyber-text-muted)", marginTop: "4px" }}>
              Player since January 2026
            </div>
          </div>
          <a
            className="ctf-visit-btn"
            href="https://play.picoctf.org/users/Noten"
            target="_blank"
            rel="noopener noreferrer"
          >
            VISIT PROFILE →
          </a>
        </div>

        <div className="ctf-stats-row">
          <div className="ctf-stat">
            <div className="ctf-stat-number" style={{ color: "var(--cyber-green)" }}>36</div>
            <div className="ctf-stat-label">EASY SOLVED</div>
          </div>
          <div className="ctf-stat-divider" />
          <div className="ctf-stat">
            <div className="ctf-stat-number" style={{ color: "var(--cyber-yellow)" }}>7</div>
            <div className="ctf-stat-label">MEDIUM SOLVED</div>
          </div>
          <div className="ctf-stat-divider" />
          <div className="ctf-stat">
            <div className="ctf-stat-number" style={{ color: "var(--cyber-cyan)" }}>43</div>
            <div className="ctf-stat-label">TOTAL CHALLENGES</div>
          </div>
          <div className="ctf-stat-divider" />
          <div className="ctf-stat">
            <div className="ctf-stat-number" style={{ color: "#a855f7" }}>picoGym</div>
            <div className="ctf-stat-label">ACTIVE ON</div>
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="section-header fade-in" style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
        <span className="section-label">// CATEGORY BREAKDOWN</span>
      </div>

      <div className="ctf-categories fade-in" ref={barsRef}>
        {challenges.map((c) => {
          const max = 10;
          const pct = Math.round((c.solved / max) * 100);
          return (
            <div className="ctf-category-row" key={c.category}>
              <span className="ctf-category-name">{c.category}</span>
              <div className="ctf-bar-wrap">
                <div
                  className="ctf-bar skill-bar"
                  style={{ "--target-width": `${pct}%`, background: c.color, boxShadow: `0 0 8px ${c.color}55` } as React.CSSProperties}
                />
              </div>
              <span className="ctf-category-count" style={{ color: c.color }}>{c.solved}</span>
            </div>
          );
        })}
      </div>

      {/* Platforms */}
      <div className="ctf-platforms fade-in">
        <div className="ctf-platform-card active">
          <div className="ctf-platform-icon">🏁</div>
          <div className="ctf-platform-name">picoCTF</div>
          <div className="ctf-platform-status active-badge">ACTIVE</div>
        </div>
        <div className="ctf-platform-card">
          <div className="ctf-platform-icon">🟩</div>
          <div className="ctf-platform-name">TryHackMe</div>
          <div className="ctf-platform-status">LEARNING</div>
        </div>
        <div className="ctf-platform-card">
          <div className="ctf-platform-icon">📦</div>
          <div className="ctf-platform-name">HackTheBox</div>
          <div className="ctf-platform-status">UPCOMING</div>
        </div>
      </div>
    </section>
  );
}
