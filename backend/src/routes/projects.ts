import { Router } from "express";

const router = Router();

const projects = [
  {
    id: 1,
    number: "01",
    title: "PHISHING URL ANALYZER",
    description:
      "A tool that analyzes URLs for phishing indicators using heuristic analysis, domain age checks, and machine learning to detect malicious sites before the user visits them.",
    tags: ["Python", "ML", "Web Security", "URL Analysis"],
    github: "https://github.com/niteshchavan/phishing-url-analyzer",
    demo: null,
  },
  {
    id: 2,
    number: "02",
    title: "PYTHON PORT SCANNER",
    description:
      "A multi-threaded network port scanner built in Python. Supports TCP/UDP scanning, service detection, banner grabbing, and generates detailed scan reports in JSON format.",
    tags: ["Python", "Networking", "Nmap", "Multi-threading"],
    github: "https://github.com/niteshchavan/python-port-scanner",
    demo: null,
  },
  {
    id: 3,
    number: "03",
    title: "PASSWORD STRENGTH CHECKER",
    description:
      "An advanced password analysis tool that evaluates entropy, checks against known breach databases (HaveIBeenPwned API), and provides actionable improvement recommendations.",
    tags: ["Python", "Cryptography", "API", "Security"],
    github: "https://github.com/niteshchavan/password-strength-checker",
    demo: null,
  },
  {
    id: 4,
    number: "04",
    title: "LOG ANALYZER",
    description:
      "A SIEM-lite log analysis tool that parses system and web server logs, detects anomalies, brute-force attempts, and suspicious patterns, then generates security reports.",
    tags: ["Python", "SOC", "SIEM", "Regex", "Log Analysis"],
    github: "https://github.com/niteshchavan/log-analyzer",
    demo: null,
  },
];

router.get("/projects", (_req, res) => {
  res.json(projects);
});

export default router;
