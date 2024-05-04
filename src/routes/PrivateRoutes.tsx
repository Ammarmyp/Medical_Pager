import React from "react";
import Layout from "./Layout";
import useAuthConnectUser from "../hooks/useAuthConnectUser";
import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { client, authToken } = useAuthConnectUser();

  if (!authToken) return <Navigate to="auth" />;

  return <Layout />;
};

export default PrivateRoutes;
