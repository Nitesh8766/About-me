import { useEffect, useRef, useState } from "react";
const avatarImg = "/tryhackme-profile.png";

const stats = [
  { target: 43, label: "CTF CHALLENGES", suffix: "+" },
  { target: 7, label: "TOOLS MASTERED", suffix: "+" },
  { target: 6, label: "WRITEUPS", suffix: "" },
  { target: 100, label: "CURIOSITY LEVEL", suffix: "%" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="stat-number">
      {count}{suffix}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{ maxWidth: "100%", padding: 0 }}>
      <div className="about-inner">
        <div className="section-header fade-in">
          <span className="section-label">// 01. ABOUT_ME</span>
          <h2 className="section-title">WHO AM I?</h2>
        </div>

        {/* Avatar + bio row */}
        <div className="about-avatar-row fade-in">
          <div className="avatar-frame">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              <img src={avatarImg} alt="Nitesh Chavan — TryHackMe" className="avatar-img" />
            </div>
            <div className="avatar-badge">
              <span className="avatar-status-dot" />
              ONLINE
            </div>
            <div className="avatar-tag">[ NEOPHYTE · Top 100% ]</div>
          </div>
          <div className="avatar-bio">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--cyber-cyan)", letterSpacing: "2px", marginBottom: "0.5rem" }}>// IDENTITY</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--cyber-green)", letterSpacing: "2px", textShadow: "0 0 12px var(--cyber-green-glow)", marginBottom: "0.4rem" }}>NITESH CHAVAN</h3>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--cyber-text-dim)", marginBottom: "1rem" }}>
              Cyber Security Student · Ethical Hacker · CTF Player
            </div>
            <div className="avatar-links">
              <a className="avatar-link" href="https://tryhackme.com/p/niteshchavan967" target="_blank" rel="noopener noreferrer">
                🟩 TryHackMe: niteshchavan967
              </a>
              <a className="avatar-link" href="https://github.com/Nitesh8766" target="_blank" rel="noopener noreferrer">
                🐙 GitHub: Nitesh8766
              </a>
              <a className="avatar-link" href="https://play.picoctf.org/users/Noten" target="_blank" rel="noopener noreferrer">
                🏆 picoCTF: Noten
              </a>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              Hello! I'm <span className="accent">Nitesh Chavan</span>, a passionate Cyber Security student
              driven by curiosity and the challenge of understanding how systems can be both broken and defended.
            </p>
            <p>
              My primary interest lies in <span className="accent">Ethical Hacking</span> — finding vulnerabilities
              before the bad guys do. I love exploring attack surfaces, crafting custom exploits, and understanding
              the mindset of adversaries to build stronger defenses.
            </p>
            <p>
              As an aspiring <span className="accent">SOC Analyst</span>, I'm building skills in threat detection,
              log analysis, SIEM tools, and incident response. I believe a great defender must first think
              like an attacker.
            </p>
            <p>
              My <span className="accent">Penetration Testing</span> work spans web applications, network
              infrastructure, and custom scripting with Python. I actively play <span className="accent">picoCTF</span> challenges
              to sharpen my skills continuously.
            </p>
          </div>

          <div className="about-stats fade-in">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <Counter target={s.target} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
