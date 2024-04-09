import { useContext } from "react";
import Authcontext from "../context/AuthContext";


const useAuth = () => {
    return useContext(Authcontext);
}

export default useAuth;