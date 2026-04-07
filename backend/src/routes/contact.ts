import { Router } from "express";

const router = Router();

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string;
}

const messages: ContactMessage[] = [];
let nextId = 1;

router.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const entry: ContactMessage = {
    id: nextId++,
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    subject: String(subject).trim(),
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  };

  messages.push(entry);

  console.log(`[Contact] New message from ${entry.name} <${entry.email}>: ${entry.subject}`);

  res.status(201).json({
    success: true,
    message: "Message received. Thank you for reaching out!",
    id: entry.id,
  });
});

router.get("/contact/messages", (_req, res) => {
  res.json(messages);
});

export default router;
