const education = [
  {
    icon: "🎓",
    degree: "B.Sc. Cyber Security",
    institution: "Pursuing — Current Student",
    year: "2024 – Present",
    status: "active",
    color: "var(--cyber-green)",
    details: ["Network Security", "Ethical Hacking", "Digital Forensics", "Cryptography"],
  },
];

const certifications = [
  {
    icon: "🟩",
    name: "TryHackMe",
    detail: "niteshchavan967 · [0x1] NEOPHYTE · Top 100%",
    status: "active",
    badge: "ACTIVE",
    color: "#88cc00",
    link: "https://tryhackme.com/p/niteshchavan967",
    extra: "51 activity events in 2026",
  },
  {
    icon: "🏆",
    name: "picoCTF",
    detail: "Noten · 43 Challenges Solved",
    status: "active",
    badge: "ACTIVE",
    color: "var(--cyber-cyan)",
    link: "https://play.picoctf.org/users/Noten",
    extra: "36 Easy + 7 Medium",
  },
  {
    icon: "🔐",
    name: "CEH — Certified Ethical Hacker",
    detail: "EC-Council",
    status: "pursuing",
    badge: "PURSUING",
    color: "var(--cyber-yellow)",
    link: null,
    extra: "In Progress",
  },
  {
    icon: "🛡️",
    name: "CompTIA Security+",
    detail: "CompTIA",
    status: "pursuing",
    badge: "PLANNED",
    color: "var(--cyber-yellow)",
    link: null,
    extra: "Planned 2026",
  },
  {
    icon: "🌐",
    name: "CompTIA Network+",
    detail: "CompTIA",
    status: "pursuing",
    badge: "PLANNED",
    color: "var(--cyber-yellow)",
    link: null,
    extra: "Planned 2026",
  },
];

export default function EducationSection() {
  return (
    <section id="education">
      <div className="section-header fade-in">
        <span className="section-label">// 05. EDUCATION &amp; CERTS</span>
        <h2 className="section-title">TRAINING &amp; CREDENTIALS</h2>
      </div>

      {/* Education */}
      <div className="edu-grid fade-in">
        {education.map((e) => (
          <div className="edu-card" key={e.degree}>
            <div className="edu-card-left">
              <div className="edu-icon" style={{ borderColor: e.color }}>{e.icon}</div>
              <div className="edu-line" style={{ background: e.color }} />
            </div>
            <div className="edu-card-body">
              <div className="edu-year" style={{ color: e.color }}>{e.year}</div>
              <h3 className="edu-degree">{e.degree}</h3>
              <div className="edu-institution">{e.institution}</div>
              <div className="edu-tags">
                {e.details.map((d) => (
                  <span className="edu-tag" key={d}>{d}</span>
                ))}
              </div>
            </div>
            <div className="edu-status-badge active">{e.status.toUpperCase()}</div>
          </div>
        ))}
      </div>

      {/* TryHackMe profile highlight */}
      <div className="section-header fade-in" style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
        <span className="section-label">// CERTIFICATIONS &amp; PLATFORMS</span>
      </div>

      <div className="cert-grid fade-in">
        {certifications.map((c) => (
          <div
            className={`cert-card${c.status === "active" ? " cert-active" : ""}`}
            key={c.name}
            style={{ borderColor: c.status === "active" ? c.color : "rgba(255,255,255,0.1)" }}
          >
            <div className="cert-top">
              <span className="cert-icon">{c.icon}</span>
              <span
                className="cert-badge"
                style={{
                  color: c.status === "active" ? c.color : "var(--cyber-yellow)",
                  borderColor: c.status === "active" ? c.color : "var(--cyber-yellow)",
                  background: c.status === "active" ? `${c.color}15` : "rgba(255,215,0,0.08)",
                }}
              >
                {c.badge}
              </span>
            </div>
            <h4 className="cert-name" style={{ color: c.status === "active" ? c.color : "var(--cyber-text)" }}>
              {c.name}
            </h4>
            <div className="cert-detail">{c.detail}</div>
            <div className="cert-extra" style={{ color: c.status === "active" ? c.color : "var(--cyber-yellow)" }}>
              {c.extra}
            </div>
            {c.link && (
              <a className="cert-link" href={c.link} target="_blank" rel="noopener noreferrer"
                style={{ color: c.color }}>
                VIEW PROFILE →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
