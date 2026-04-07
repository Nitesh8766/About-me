import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";
import projectsRouter from "./routes/projects.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api", contactRouter);
app.use("/api", projectsRouter);
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.listen(PORT, () => console.log(`[server] http://localhost:${PORT}`));
