// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = parseInt(process.env.PORT || "5000");
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});
if (process.env.NODE_ENV === "development") {
  async function startVite() {
    try {
      const { createServer } = await import("vite");
      const vite = await createServer({
        server: { middlewareMode: true },
        appType: "spa",
        root: path.resolve(__dirname, "../client"),
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../client/src")
          }
        }
      });
      app.use(vite.ssrFixStacktrace);
      app.use(vite.middlewares);
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`[express] serving on http://0.0.0.0:${PORT}`);
      });
    } catch (error) {
      console.error("Failed to start Vite server:", error);
      app.use(express.static(path.resolve(__dirname, "../client")));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/index.html"));
      });
      app.listen(PORT, "0.0.0.0", () => {
        console.log(`[express] serving static files on http://0.0.0.0:${PORT}`);
      });
    }
  }
  startVite();
} else {
  app.use(express.static(path.resolve(__dirname, "../dist/public")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/public/index.html"));
  });
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[express] serving on http://0.0.0.0:${PORT}`);
  });
}
