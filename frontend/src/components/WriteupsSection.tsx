const writeups = [
  {
    date: "2026-03-15",
    badge: "TryHackMe",
    title: "Basic Pentesting Room Walkthrough",
    desc: "A complete walkthrough of the Basic Pentesting room covering enumeration with Nmap and Gobuster, SMB enumeration, and privilege escalation via SSH key brute-forcing.",
    link: "#",
  },
  {
    date: "2026-02-28",
    badge: "CTF",
    title: "SQL Injection to RCE — Web Challenge",
    desc: "Exploiting a vulnerable login form using blind SQL injection, dumping the database, cracking hashes, and leveraging file write permissions for Remote Code Execution.",
    link: "#",
  },
  {
    date: "2026-02-10",
    badge: "Research",
    title: "Understanding OWASP Top 10: A Practical Guide",
    desc: "Deep-dive into each OWASP Top 10 vulnerability with hands-on lab examples, real-world exploit scenarios, and defensive measures every developer should implement.",
    link: "#",
  },
  {
    date: "2026-01-22",
    badge: "HackTheBox",
    title: "HTB Machine Writeup — Easy Linux Box",
    desc: "Detailed walkthrough covering initial enumeration, exploiting a vulnerable web application, lateral movement, and root privilege escalation through SUID binaries.",
    link: "#",
  },
  {
    date: "2025-12-14",
    badge: "Tutorial",
    title: "Building a Custom Python Port Scanner from Scratch",
    desc: "Step-by-step guide to building a multi-threaded port scanner in Python with service detection, banner grabbing, and output reporting. Perfect for beginners.",
    link: "#",
  },
  {
    date: "2025-11-30",
    badge: "Analysis",
    title: "Phishing Campaign Analysis: Techniques & Red Flags",
    desc: "Analyzing real-world phishing campaigns — how attackers craft convincing emails, spoof domains, and bypass spam filters. Learn to spot them before it's too late.",
    link: "#",
  },
];

export default function WriteupsSection() {
  return (
    <section id="writeups">
      <div className="section-header fade-in">
        <span className="section-label">// 04. WRITEUPS &amp; BLOG</span>
        <h2 className="section-title">SECURITY LAB NOTES</h2>
      </div>

      <div className="writeups-grid">
        {writeups.map((w, i) => (
          <a
            className="writeup-card fade-in"
            key={i}
            href={w.link}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div className="writeup-meta">
              <span className="writeup-date">{w.date}</span>
              <span className="writeup-badge">{w.badge}</span>
            </div>
            <h3 className="writeup-title">{w.title}</h3>
            <p className="writeup-desc">{w.desc}</p>
            <div className="writeup-read">
              <span>→</span>
              <span>READ WRITEUP</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
