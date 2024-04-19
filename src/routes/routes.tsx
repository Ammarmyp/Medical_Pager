import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../components/Auth";
import ChannelListContainer from "../components/ChannelListContainer";
import Authentication from "../pages/Authentication";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Authentication />,
        children: [{ path: "/", element: <Auth /> }],
      },
      { path: "/channelListContainer", element: <ChannelListContainer /> },
    ],
  },
]);

export default router;
