import { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "BIOS v2.4.1 — NiteshOS Kernel Loading...", delay: 0 },
  { text: "Initializing secure memory banks... [OK]", delay: 300 },
  { text: "Loading cryptographic modules... [OK]", delay: 600 },
  { text: "Establishing encrypted tunnel... [OK]", delay: 900 },
  { text: "Scanning network interfaces... [OK]", delay: 1100 },
  { text: "Mounting /home/nitesh/portfolio... [OK]", delay: 1350 },
  { text: "Loading security profile: ETHICAL_HACKER... [OK]", delay: 1600 },
  { text: "Starting matrix subsystem... [OK]", delay: 1850 },
  { text: "All systems operational.", delay: 2100 },
  { text: "Welcome, Operator. Launching portfolio...", delay: 2400 },
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay));
    });

    timers.push(setTimeout(() => setFading(true), 3000));
    timers.push(setTimeout(() => onDone(), 3600));

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0f",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem 4rem",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Top bar */}
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "0.75rem",
        color: "#00ff41",
        letterSpacing: "3px",
        marginBottom: "2rem",
        borderBottom: "1px solid rgba(0,255,65,0.3)",
        paddingBottom: "1rem",
        width: "100%",
        maxWidth: "600px",
      }}>
        NITESH_OS v1.0 — SECURE BOOT SEQUENCE
      </div>

      {/* Boot lines */}
      <div style={{ maxWidth: "600px", width: "100%" }}>
        {BOOT_LINES.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "0.85rem",
              color: line.text.includes("[OK]") ? "#00d4ff"
                : line.text.startsWith("Welcome") ? "#00ff41"
                : "#7aaa77",
              marginBottom: "0.35rem",
              opacity: visibleLines.includes(i) ? 1 : 0,
              transform: visibleLines.includes(i) ? "translateX(0)" : "translateX(-10px)",
              transition: "all 0.3s ease",
            }}
          >
            {line.text.includes("[OK]") ? (
              <>
                <span style={{ color: "#7aaa77" }}>{line.text.replace(" [OK]", "")}</span>
                <span style={{ color: "#00ff41", marginLeft: "0.5rem" }}>[OK]</span>
              </>
            ) : (
              <span>{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Loading bar */}
      <div style={{
        marginTop: "2rem",
        width: "100%",
        maxWidth: "600px",
        height: "3px",
        background: "rgba(0,255,65,0.15)",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #00ff41, #00d4ff)",
          boxShadow: "0 0 10px #00ff41",
          width: `${(visibleLines.length / BOOT_LINES.length) * 100}%`,
          transition: "width 0.3s ease",
        }} />
      </div>

      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: "0.7rem",
        color: "rgba(0,255,65,0.5)",
        marginTop: "0.5rem",
      }}>
        {Math.round((visibleLines.length / BOOT_LINES.length) * 100)}% LOADED
      </div>
    </div>
  );
}
