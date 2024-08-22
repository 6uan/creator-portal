import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import AddArtist from "./pages/AddArtist.jsx";
import DisplayAllArtists from "./pages/DisplayAllArtists.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DisplayAllArtists />,
      },
      {
        path: "/add-artist",
        element: <AddArtist />,
      },
      {
        path: "view-all",
        element: <DisplayAllArtists />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
