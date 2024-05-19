import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: " No Page Found ",
      },
    ],
  },
]);

export default router;
