import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/global.css"
import App from "./App.tsx"

// Register the offline shell before mounting the app. A service worker controls
// subsequent visits (including the local MediaPipe asset URLs in that session).
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  void navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`, {
    scope: import.meta.env.BASE_URL,
  }).catch((error: unknown) => {
    console.warn("Offline support could not be enabled:", error)
  })
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
