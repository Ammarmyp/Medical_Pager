import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { createContext } from "react";
import { User } from "stream-chat";

interface AuthContextType {
signUp: UseMutationResult<void | AxiosResponse, Error, User, unknown >
}

const Authcontext = createContext<AuthContextType>({} as AuthContextType)

export default Authcontext;