import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "./routes";
import "./lib/i18n";
import "./index.css";
import React from "react";
import axios from "axios";

const routes = createBrowserRouter(route);

// axios.defaults.baseURL = "https://book-it-app-six.vercel.app";
// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
