import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const RoutesPage = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default RoutesPage;
