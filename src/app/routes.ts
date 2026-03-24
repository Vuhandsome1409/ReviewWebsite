import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { Projects } from "./pages/Projects";
import { Lab } from "./pages/Lab";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: Solutions },
      { path: "projects", Component: Projects },
      { path: "lab", Component: Lab },
      { path: "about", Component: About },
    ],
  },
]);
