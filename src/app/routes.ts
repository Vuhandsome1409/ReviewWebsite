import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { Projects } from "./pages/Projects";
import { People } from "./pages/People";
import { Lab } from "./pages/Lab";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: Solutions },
      { path: "projects", Component: Projects },
      { path: "people", Component: People },
      { path: "lab", Component: Lab },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
