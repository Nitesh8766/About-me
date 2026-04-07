import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setMsg("[+] Message transmitted successfully. I'll respond within 24 hours.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
      setMsg("[!] Transmission failed. Please try again or contact me directly via email.");
    }
  };

  return (
    <section id="contact" style={{ maxWidth: "100%", padding: 0 }}>
      <div className="contact-inner">
        <div>
          <div className="section-header fade-in">
            <span className="section-label">// 06. CONTACT</span>
            <h2 className="section-title">GET IN TOUCH</h2>
          </div>
          <div className="contact-info fade-in">
            <h3>LET'S CONNECT</h3>
            <p>Interested in collaboration, internships, or just want to discuss cybersecurity? Reach out anytime.</p>
            <div className="contact-items">
              <a className="contact-item" href="mailto:nitesh@example.com">
                <div className="contact-item-icon">📧</div>
                <div><div className="contact-item-label">EMAIL</div><div className="contact-item-text">nitesh@example.com</div></div>
              </a>
              <a className="contact-item" href="https://github.com/Nitesh8766" target="_blank" rel="noopener noreferrer">
                <div className="contact-item-icon">🐙</div>
                <div><div className="contact-item-label">GITHUB</div><div className="contact-item-text">github.com/Nitesh8766</div></div>
              </a>
              <a className="contact-item" href="https://www.linkedin.com/in/nitesh-chavan-037a3126a" target="_blank" rel="noopener noreferrer">
                <div className="contact-item-icon">💼</div>
                <div><div className="contact-item-label">LINKEDIN</div><div className="contact-item-text">linkedin.com/in/nitesh-chavan-037a3126a</div></div>
              </a>
              <a className="contact-item" href="https://tryhackme.com/p/niteshchavan967" target="_blank" rel="noopener noreferrer">
                <div className="contact-item-icon">🟩</div>
                <div><div className="contact-item-label">TRYHACKME</div><div className="contact-item-text">tryhackme.com/p/niteshchavan967</div></div>
              </a>
              <a className="contact-item" href="https://play.picoctf.org/users/Noten" target="_blank" rel="noopener noreferrer">
                <div className="contact-item-icon">🏆</div>
                <div><div className="contact-item-label">picoCTF</div><div className="contact-item-text">play.picoctf.org/users/Noten</div></div>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form fade-in">
          <div className="form-header">// INITIATE_SECURE_TRANSMISSION.sh</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">NAME_FIELD</label>
              <input className="form-input" id="name" name="name" type="text" placeholder="Your name..." value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">EMAIL_ADDR</label>
              <input className="form-input" id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="subject">SUBJECT</label>
              <input className="form-input" id="subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">MESSAGE_BODY</label>
              <textarea className="form-textarea" id="message" name="message" rows={5} placeholder="Write your message here..." value={form.message} onChange={handleChange} required />
            </div>
            <button className="form-submit" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "TRANSMITTING..." : "SEND_MESSAGE >>"}
            </button>
            {status === "success" && <div className="form-message success">{msg}</div>}
            {status === "error" && <div className="form-message error">{msg}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
