import { createContext } from "react";

interface AuthContextType {

}

const Authcontext = createContext<AuthContextType>({} as AuthContextType)

export default Authcontext;