import { useEffect, useState } from "react";

const TITLE_PARTS = [
  "Cyber Security Student",
  "Future SOC Analyst",
  "Penetration Tester",
  "CTF Player",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLE_PARTS[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLE_PARTS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section id="home" style={{ maxWidth: "100%", padding: 0 }}>
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-tag">SECURITY RESEARCHER &amp; ETHICAL HACKER</div>

        <h1 className="hero-name glitch" data-text="NITESH CHAVAN">
          NITESH <span className="highlight">CHAVAN</span>
        </h1>

        <p className="hero-title">
          <span style={{ color: "var(--cyber-green)" }}>// </span>
          {displayed}
          <span className="blink">|</span>
        </p>

        <div className="terminal-window glow-pulse">
          <div className="terminal-bar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">bash — nitesh@kali</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">nitesh@kali:~$</span>
            <span className="terminal-cmd">whoami</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-output">Nitesh Chavan — Cyber Security Student</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">nitesh@kali:~$</span>
            <span className="terminal-cmd">cat skills.txt</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-output">Ethical Hacking | SOC Analysis | Pen Testing | Python</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">nitesh@kali:~$</span>
            <span className="terminal-cmd">picoctf --stats</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-success">[+] 36 Easy + 7 Medium challenges solved on picoCTF</span>
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">nitesh@kali:~$</span>
            <span className="blink">_</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a className="btn-primary" href="#ctf" onClick={(e) => { e.preventDefault(); document.querySelector("#ctf")?.scrollIntoView({ behavior: "smooth" }); }}>
            VIEW CTF STATS
          </a>
          <a className="btn-outline" href="/resume.pdf" download>
            ⬇ DOWNLOAD RESUME
          </a>
          <a
            className="btn-outline"
            href="https://github.com/Nitesh8766"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: "var(--cyber-green)", color: "var(--cyber-green)" }}
          >
            🐙 GITHUB PROFILE
          </a>
        </div>
      </div>
    </section>
  );
}
