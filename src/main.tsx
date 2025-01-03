import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Main } from "./pages/home/home.tsx";
import App from "./pages/App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/landingPage.tsx";
import { Workshops } from "./pages/workshop/workshop.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "/face", element: <Main /> },
  {
    path: "/memoryLine",
    element: <App />,
  },
  {
    path: "/workshops",
    element: <Workshops />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
