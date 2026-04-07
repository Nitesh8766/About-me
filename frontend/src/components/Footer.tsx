export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          <span className="accent">// </span>
          &copy; {year} <span className="accent">NITESH CHAVAN</span> — Cyber Security Student | All Rights Reserved
        </p>
        <p className="footer-text" style={{ marginTop: "0.5rem" }}>
          <span style={{ color: "var(--cyber-cyan)" }}>Built with</span> passion, coffee, and too many terminal sessions
        </p>
      </div>
    </footer>
  );
}
