import React, { ReactNode } from "react";
import Authcontext from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { User } from "stream-chat";

interface AuthProviderType {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderType) => {
  const signUp = useMutation({
    mutationFn: async (user: User) => {
      return await axios
        .post(`${import.meta.env.VITE_SERVER_URL}/signup`, user)
        .then((res) => console.log(res));
    },
  });
  return (
    <Authcontext.Provider value={{ signUp }}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
