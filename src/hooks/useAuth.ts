import { useContext } from "react";
import Authcontext from "../context/AuthContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "universal-cookie";

interface FormType {
    fullName?: string;
  userName: string;
  password: string;
  confirmPassword?: string;
  phoneNumber?: string;
  avatarURL?: string;
}

interface Props {
    authEndpoint: string;
    form: FormType;
}

interface ResponseDataType {
    token: string,
    userId: string,
    hashedPassword: string,
}

const cookies = new Cookies();

const URL = 'http://localhost:5000/auth';
const useAuth = ( authEndpoint: string, form: FormType ) => 

 useMutation({

    mutationFn: async  () => {
        return axios.post<ResponseDataType>(`${URL}/${authEndpoint}`, { form })
        .then( res => { 
            const  { token, userId, hashedPassword } = res.data;
            cookies.set('token', token);
            cookies.set('userName', form.userName);
            cookies.set('fullName', form.fullName);
            cookies.set('userId', userId);

            
          
        }
        )
    }

    
});

export default useAuth;