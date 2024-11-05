import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Main } from "./home/home.tsx";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  {
    path: "/memoryLane",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
