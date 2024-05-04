import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import PrivateRoutes from "./PrivateRoutes";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <Auth />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

export default router;
