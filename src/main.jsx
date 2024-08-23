import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import AddArtist from "./pages/AddArtist.jsx";
import DisplayAllArtists from "./pages/DisplayAllArtists.jsx";
import ViewArtist from "./pages/ViewArtist.jsx";
import EditArtist from "./pages/EditArtist.jsx";

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
        path: "/artists/:artist_id",
        element: <ViewArtist />,
      },
      {
        path: "/edit/:artist_id",
        element: <EditArtist />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
