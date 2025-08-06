import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";
const isGitHubPages = process.env.NODE_ENV === 'production';

createRoot(document.getElementById("root")!).render(
<Router base={import.meta.env.MODE === "production" ? "/garudainvestcorp.github.io" : "/"}>
  <App />
</Router>
);