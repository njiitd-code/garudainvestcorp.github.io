import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";

const isGitHubPages = import.meta.env.BASE_URL.includes('garudainvestcorp.github.io');

createRoot(document.getElementById("root")!).render(
  <Router base={isGitHubPages ? '/garudainvestcorp.github.io' : '/'}>
    <App />
  </Router>
);