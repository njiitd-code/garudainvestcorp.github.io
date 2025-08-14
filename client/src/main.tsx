import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter";
import ComingSoon from "./pages/ComingSoon";

const isGitHubPages = import.meta.env.BASE_URL.includes('garudainvestcorp.github.io');

// ✅ TOGGLE this to `true` or `false`
const comingSoon = false;

createRoot(document.getElementById("root")!).render(
  <Router base={isGitHubPages ? '/garudainvestcorp.github.io' : '/'}>
    {comingSoon ? <ComingSoon /> : <App />}
  </Router>
);