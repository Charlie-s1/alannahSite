// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Main } from "./home/home.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <App />
  <Main />
  // </StrictMode>
);
