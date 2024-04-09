import React, { ReactNode } from "react";
import Authcontext from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { User } from "stream-chat";
import axios from "axios";

interface AuthProviderType {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderType) => {
  const signUp = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_BASE_URL}/signup`, user);
    },
  });
  return <Authcontext.Provider value={{}}>{children}</Authcontext.Provider>;
};

export default AuthProvider;
