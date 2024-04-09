import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp";
import Authentication from "../pages/Authentication";

const router = createBrowserRouter([
{ path: "/", element: <Authentication />, children: [
    { path: "/login", element: <SignIn/>},
    { path: "/Sign up", element: <SignUp/>}
] },
]);

export default router;
