import { useEffect, useRef } from "react";

const skills = [
  {
    icon: "🐉",
    name: "KALI LINUX",
    level: 85,
    tags: ["OS", "Penetration Testing", "Recon"],
  },
  {
    icon: "🔍",
    name: "NMAP",
    level: 90,
    tags: ["Network Scanning", "Port Scan", "OS Detection"],
  },
  {
    icon: "🕷️",
    name: "BURP SUITE",
    level: 78,
    tags: ["Web App", "Proxy", "Vulnerability Scan"],
  },
  {
    icon: "🦈",
    name: "WIRESHARK",
    level: 80,
    tags: ["Packet Analysis", "Traffic Capture", "Forensics"],
  },
  {
    icon: "💀",
    name: "METASPLOIT",
    level: 72,
    tags: ["Exploitation", "Payloads", "Post-Exploit"],
  },
  {
    icon: "🐍",
    name: "PYTHON",
    level: 88,
    tags: ["Automation", "Scripting", "Tool Dev"],
  },
  {
    icon: "🌐",
    name: "NETWORKING",
    level: 82,
    tags: ["TCP/IP", "DNS", "Firewalls", "VPN"],
  },
  {
    icon: "🔐",
    name: "CRYPTOGRAPHY",
    level: 70,
    tags: ["Encryption", "Hashing", "PKI"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.querySelectorAll(".skill-bar").forEach((bar) => {
            bar.classList.add("animated");
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header fade-in">
        <span className="section-label">// 02. SKILLS &amp; TOOLS</span>
        <h2 className="section-title">ARSENAL</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card fade-in" key={skill.name}>
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent" style={{ marginLeft: "auto" }}>{skill.level}%</span>
            </div>
            <div className="skill-bar-wrap">
              <div
                className="skill-bar"
                style={{ "--target-width": `${skill.level}%` } as React.CSSProperties}
              />
            </div>
            <div className="skill-tags">
              {skill.tags.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
