import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/resume",
    element: <Resume></Resume>,
  },
]);

export default router;
