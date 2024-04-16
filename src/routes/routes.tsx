import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Authentication from "../pages/Authentication";
import ChannelListContainer from "../components/ChannelListContainer";
import ContextWrapper from "../components/ContextWrapper";
import Auth from "../components/Auth";

const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: "/",
        element: <Authentication />,
        children: [
          { path: "/login", element: <SignIn /> },
          { path: "/signup", element: <Auth /> },
        ],
      },
      { path: "/channelListContainer", element: <ChannelListContainer /> },
    ],
  },
]);

export default router;
